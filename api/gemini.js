// api/gemini.js — Proxy Vercel · Hub MQCT SENAI Bahia
// Corrigido: CommonJS compatível com Vercel, resposta padronizada { text },
// validação segura de Supabase, tratamento de erros Gemini e CORS.

const GEMINI_KEY = process.env.GOOGLE_GEMINI_API_KEY;
const SUPABASE_URL = process.env.SUPABASE_URL;
const SUPABASE_SECRET = process.env.SUPABASE_SECRET_KEY;
const ALLOWED_DOMAIN = process.env.ALLOWED_DOMAIN || "ba.docente.senai.br";
const RATE_LIMIT = Number.parseInt(process.env.RATE_LIMIT_PER_HOUR || "30", 10);
const GEMINI_MODEL = process.env.GEMINI_MODEL || "gemini-2.5-flash";
const GEMINI_URL = `https://generativelanguage.googleapis.com/v1beta/models/${GEMINI_MODEL}:generateContent`;

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

  const { prompt, forceJSON = false } = getBody(req);

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

  try {
    const generationConfig = {
      maxOutputTokens: 20000,
      temperature: 0.65
    };

    if (forceJSON) {
      generationConfig.responseMimeType = "application/json";
    }

    const geminiResponse = await fetch(`${GEMINI_URL}?key=${GEMINI_KEY}`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        contents: [{ role: "user", parts: [{ text: prompt }] }],
        generationConfig
      })
    });

    const geminiData = await geminiResponse.json().catch(() => ({}));

    if (!geminiResponse.ok) {
      const message =
        geminiData?.error?.message ||
        geminiData?.message ||
        `Gemini HTTP ${geminiResponse.status}`;

      console.error("[MQCT Proxy] Gemini:", geminiResponse.status, message);
      return send(res, 502, {
        error: "Falha ao consultar o Gemini.",
        detail: message,
        status: geminiResponse.status
      });
    }

    const text = extractGeminiText(geminiData);

    if (!text) {
      console.error("[MQCT Proxy] Gemini sem texto:", JSON.stringify(geminiData).slice(0, 1000));
      return send(res, 502, { error: "Resposta vazia do Gemini." });
    }

    // Mantém compatibilidade com telas antigas: elas podem ler data.text.
    return send(res, 200, { text, user: email, model: GEMINI_MODEL });
  } catch (err) {
    console.error("[MQCT Proxy] Erro interno:", err);
    return send(res, 500, { error: "Erro interno no proxy.", detail: err.message });
  }
}

module.exports = handler;
