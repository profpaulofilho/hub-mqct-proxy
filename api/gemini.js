// api/gemini.js — Proxy Vercel · Hub MQCT SENAI Bahia
// Correção robusta: evita 502 por maxOutputTokens alto, aceita parâmetros por chamada,
// faz fallback de modelo e devolve detalhes úteis para o frontend.

const GEMINI_KEY = process.env.GOOGLE_GEMINI_API_KEY;
const SUPABASE_URL = process.env.SUPABASE_URL;
const SUPABASE_SECRET = process.env.SUPABASE_SECRET_KEY;
const ALLOWED_DOMAIN = process.env.ALLOWED_DOMAIN || "ba.docente.senai.br";
const RATE_LIMIT = Number.parseInt(process.env.RATE_LIMIT_PER_HOUR || "30", 10);

// Use GEMINI_MODEL no Vercel se quiser fixar um modelo.
// Se ele falhar por indisponibilidade/modelo inválido/quota momentânea, tenta os fallbacks.
const PRIMARY_MODEL = process.env.GEMINI_MODEL || "gemini-2.0-flash";
const FALLBACK_MODELS = (process.env.GEMINI_FALLBACK_MODELS || "gemini-2.0-flash,gemini-1.5-flash")
  .split(",")
  .map(s => s.trim())
  .filter(Boolean);

const MODELS = Array.from(new Set([PRIMARY_MODEL, ...FALLBACK_MODELS]));

// Rate limiting simples em memória.
// Observação: em serverless pode reiniciar entre execuções, mas ajuda a reduzir abuso.
const rateMap = new Map();

function checkRate(uid) {
  const now = Date.now();
  const windowMs = 60 * 60 * 1000;
  const current = rateMap.get(uid);

  if (!current || now - current.start > windowMs) {
    rateMap.set(uid, { count: 1, start: now });
    return true;
  }

  if (current.count >= RATE_LIMIT) return false;
  current.count += 1;
  return true;
}

function send(res, status, payload) {
  return res.status(status).json(payload);
}

function getBody(req) {
  if (!req.body) return {};
  if (typeof req.body === "string") {
    try {
      return JSON.parse(req.body);
    } catch {
      return {};
    }
  }
  return req.body;
}

async function validarToken(authHeader) {
  if (!authHeader || !authHeader.startsWith("Bearer ")) return null;
  if (!SUPABASE_URL || !SUPABASE_SECRET) {
    throw new Error("Supabase não configurado: defina SUPABASE_URL e SUPABASE_SECRET_KEY no Vercel.");
  }

  const token = authHeader.slice(7).trim();
  if (!token) return null;

  const response = await fetch(`${SUPABASE_URL.replace(/\/$/, "")}/auth/v1/user`, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${token}`,
      apikey: SUPABASE_SECRET
    }
  });

  if (!response.ok) return null;

  const user = await response.json();
  return user && user.email ? user : null;
}

function extractGeminiText(data) {
  const parts = data?.candidates?.[0]?.content?.parts || [];
  return parts.map(part => part?.text || "").join("").trim();
}

function clampNumber(value, fallback, min, max) {
  const n = Number(value);
  if (!Number.isFinite(n)) return fallback;
  return Math.min(max, Math.max(min, Math.round(n)));
}

async function callGeminiModel(model, prompt, generationConfig) {
  const url = `https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent?key=${GEMINI_KEY}`;

  const response = await fetch(url, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      contents: [{ role: "user", parts: [{ text: prompt }] }],
      generationConfig
    })
  });

  const data = await response.json().catch(() => ({}));

  if (!response.ok) {
    const message =
      data?.error?.message ||
      data?.message ||
      `Gemini HTTP ${response.status}`;

    const error = new Error(message);
    error.status = response.status;
    error.model = model;
    error.raw = data;
    throw error;
  }

  const text = extractGeminiText(data);
  if (!text) {
    const reason = data?.candidates?.[0]?.finishReason || "sem texto";
    const error = new Error(`Resposta vazia do Gemini (${reason}).`);
    error.status = 502;
    error.model = model;
    error.raw = data;
    throw error;
  }

  return { text, model };
}

async function handler(req, res) {
  res.setHeader("Access-Control-Allow-Origin", process.env.CORS_ORIGIN || "*");
  res.setHeader("Access-Control-Allow-Methods", "POST, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
  res.setHeader("Cache-Control", "no-store");

  if (req.method === "OPTIONS") return res.status(200).end();
  if (req.method !== "POST") return send(res, 405, { error: "Método não permitido" });

  if (!GEMINI_KEY) {
    return send(res, 500, { error: "GOOGLE_GEMINI_API_KEY não configurada no Vercel." });
  }

  let user;
  try {
    user = await validarToken(req.headers.authorization || req.headers.Authorization);
  } catch (err) {
    console.error("[MQCT Proxy] Auth config:", err.message);
    return send(res, 500, { error: err.message });
  }

  if (!user) {
    return send(res, 401, { error: "Token inválido ou expirado. Faça login novamente." });
  }

  const email = String(user.email || "").toLowerCase();
  if (!email.endsWith(`@${ALLOWED_DOMAIN}`)) {
    return send(res, 403, { error: `Acesso restrito a docentes @${ALLOWED_DOMAIN}.` });
  }

  if (!checkRate(user.id || email)) {
    return send(res, 429, { error: `Limite de ${RATE_LIMIT} gerações/hora atingido.` });
  }

  const body = getBody(req);
  const { prompt, forceJSON = false } = body;

  if (!prompt || typeof prompt !== "string") {
    return send(res, 400, { error: "Campo 'prompt' obrigatório." });
  }

  // Slides e planos podem ter contexto oficial grande. Mantém proteção sem bloquear UCs longas.
  if (prompt.length > 60000) {
    return send(res, 400, {
      error: "Prompt muito longo. Reduza o contexto ou a quantidade de slides/aulas.",
      length: prompt.length
    });
  }

  // Ponto principal da correção:
  // 20000 tokens causava falha em alguns modelos/contas do Gemini e o frontend só via 502.
  const maxOutputTokens = clampNumber(body.maxOutputTokens, forceJSON ? 8192 : 6144, 512, 8192);
  const temperature = Math.min(1, Math.max(0, Number.isFinite(Number(body.temperature)) ? Number(body.temperature) : 0.55));

  const generationConfig = {
    maxOutputTokens,
    temperature
  };

  if (forceJSON) {
    generationConfig.responseMimeType = "application/json";
  }

  const errors = [];

  for (const model of MODELS) {
    try {
      const result = await callGeminiModel(model, prompt, generationConfig);
      return send(res, 200, {
        text: result.text,
        user: email,
        model: result.model,
        maxOutputTokens
      });
    } catch (err) {
      errors.push({
        model: err.model || model,
        status: err.status || 500,
        message: err.message
      });
      console.error("[MQCT Proxy] Gemini falhou:", err.model || model, err.status || "", err.message);

      // 400 geralmente é prompt/configuração; fallback de modelo pode resolver quando o modelo primário não aceita algo.
      // 429/503/500 são temporários/quota; fallback também pode ajudar.
      continue;
    }
  }

  const last = errors[errors.length - 1] || {};
  return send(res, 502, {
    error: "Falha ao consultar o Gemini.",
    detail: last.message || "Todos os modelos configurados falharam.",
    attempts: errors,
    hint: "Verifique GOOGLE_GEMINI_API_KEY, GEMINI_MODEL e quota do Gemini no Vercel."
  });
}

module.exports = handler;
