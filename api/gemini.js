// api/gemini.js — Proxy Vercel para Gemini API
// Hub MQCT · SENAI Bahia · Paulo da Silva Filho · 2026

const GEMINI_API_KEY = process.env.GOOGLE_GEMINI_API_KEY;
const ALLOWED_DOMAIN = process.env.ALLOWED_DOMAIN || "ba.docente.senai.br";
const RATE_LIMIT_RPH = parseInt(process.env.RATE_LIMIT_PER_HOUR || "30");
const GEMINI_URL = "https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent";

// Rate limiting simples em memória (resetado a cada deploy)
const rateLimitMap = new Map();

function checkRateLimit(email) {
  const now = Date.now();
  const windowMs = 60 * 60 * 1000; // 1 hora
  const key = email;
  if (!rateLimitMap.has(key)) {
    rateLimitMap.set(key, { count: 1, start: now });
    return true;
  }
  const entry = rateLimitMap.get(key);
  if (now - entry.start > windowMs) {
    rateLimitMap.set(key, { count: 1, start: now });
    return true;
  }
  if (entry.count >= RATE_LIMIT_RPH) return false;
  entry.count++;
  return true;
}

export default async function handler(req, res) {
  // CORS — permite chamadas do GitHub Pages e localhost
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "POST, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, X-User-Email");

  if (req.method === "OPTIONS") return res.status(200).end();
  if (req.method !== "POST") return res.status(405).json({ error: "Método não permitido" });

  // Valida chave configurada no Vercel
  if (!GEMINI_API_KEY) {
    return res.status(500).json({ error: "GOOGLE_GEMINI_API_KEY não configurada no Vercel" });
  }

  // Valida e-mail institucional (header X-User-Email)
  const userEmail = (req.headers["x-user-email"] || "").toLowerCase().trim();
  if (!userEmail || !userEmail.endsWith(`@${ALLOWED_DOMAIN}`)) {
    return res.status(403).json({
      error: `Acesso restrito a docentes @${ALLOWED_DOMAIN}`,
      received: userEmail || "(nenhum)"
    });
  }

  // Rate limiting por docente
  if (!checkRateLimit(userEmail)) {
    return res.status(429).json({
      error: `Limite de ${RATE_LIMIT_RPH} gerações/hora atingido. Tente novamente mais tarde.`
    });
  }

  // Extrai prompt e config do body
  const { prompt, forceJSON = false } = req.body || {};
  if (!prompt || typeof prompt !== "string") {
    return res.status(400).json({ error: "Campo 'prompt' obrigatório no body" });
  }
  if (prompt.length > 32000) {
    return res.status(400).json({ error: "Prompt muito longo (máx 32.000 caracteres)" });
  }

  // Chama Gemini API
  try {
    const genConfig = { maxOutputTokens: 16000, temperature: 0.7 };
    if (forceJSON) genConfig.responseMimeType = "application/json";

    const geminiRes = await fetch(`${GEMINI_URL}?key=${GEMINI_API_KEY}`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        contents: [{ parts: [{ text: prompt }] }],
        generationConfig: genConfig
      })
    });

    if (!geminiRes.ok) {
      const errData = await geminiRes.json().catch(() => ({}));
      const msg = errData?.error?.message || `Gemini HTTP ${geminiRes.status}`;
      return res.status(geminiRes.status).json({ error: msg });
    }

    const data = await geminiRes.json();
    const text = data?.candidates?.[0]?.content?.parts?.[0]?.text || "";

    if (!text) {
      return res.status(500).json({ error: "Resposta vazia do Gemini" });
    }

    return res.status(200).json({ text, model: "gemini-2.5-flash" });

  } catch (err) {
    console.error("[MQCT Proxy] Erro:", err.message);
    return res.status(500).json({ error: "Erro interno no proxy: " + err.message });
  }
}
