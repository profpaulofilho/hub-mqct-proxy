// api/gemini.js — Proxy Vercel · Hub MQCT SENAI Bahia · 2026
// Valida token Supabase + domínio + rate limit → chama Gemini

const GEMINI_KEY = process.env.GOOGLE_GEMINI_API_KEY;
const SUPABASE_URL = process.env.SUPABASE_URL;
const SUPABASE_SECRET = process.env.SUPABASE_SECRET_KEY;
const ALLOWED_DOMAIN = process.env.ALLOWED_DOMAIN || "ba.docente.senai.br";
const RATE_LIMIT = parseInt(process.env.RATE_LIMIT_PER_HOUR || "30");
const GEMINI_URL = "https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent";

// Rate limiting em memória
const rateMap = new Map();
function checkRate(uid) {
  const now = Date.now(), win = 3600000;
  const e = rateMap.get(uid);
  if (!e || now - e.start > win) { rateMap.set(uid, { count: 1, start: now }); return true; }
  if (e.count >= RATE_LIMIT) return false;
  e.count++; return true;
}

// Valida token JWT do Supabase
async function validarToken(authHeader) {
  if (!authHeader?.startsWith("Bearer ")) return null;
  const token = authHeader.slice(7);
  try {
    const res = await fetch(`${SUPABASE_URL}/auth/v1/user`, {
      headers: {
        "Authorization": `Bearer ${token}`,
        "apikey": SUPABASE_SECRET
      }
    });
    if (!res.ok) return null;
    const user = await res.json();
    return user?.email ? user : null;
  } catch { return null; }
}

export default async function handler(req, res) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "POST, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
  if (req.method === "OPTIONS") return res.status(200).end();
  if (req.method !== "POST") return res.status(405).json({ error: "Método não permitido" });

  if (!GEMINI_KEY) return res.status(500).json({ error: "GOOGLE_GEMINI_API_KEY não configurada" });
  if (!SUPABASE_URL || !SUPABASE_SECRET) return res.status(500).json({ error: "Supabase não configurado" });

  // Valida token Supabase
  const user = await validarToken(req.headers["authorization"]);
  if (!user) return res.status(401).json({ error: "Token inválido ou expirado. Faça login novamente." });

  // Valida domínio
  const email = user.email?.toLowerCase() || "";
  if (!email.endsWith(`@${ALLOWED_DOMAIN}`)) {
    return res.status(403).json({ error: `Acesso restrito a docentes @${ALLOWED_DOMAIN}` });
  }

  // Rate limiting por usuário
  if (!checkRate(user.id)) {
    return res.status(429).json({ error: `Limite de ${RATE_LIMIT} gerações/hora atingido.` });
  }

  // Valida body
  const { prompt, forceJSON = false } = req.body || {};
  if (!prompt || typeof prompt !== "string") return res.status(400).json({ error: "Campo 'prompt' obrigatório" });
  if (prompt.length > 32000) return res.status(400).json({ error: "Prompt muito longo" });

  // Chama Gemini
  try {
    const genConfig = { maxOutputTokens: 16000, temperature: 0.7 };
    if (forceJSON) genConfig.responseMimeType = "application/json";

    const geminiRes = await fetch(`${GEMINI_URL}?key=${GEMINI_KEY}`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        contents: [{ parts: [{ text: prompt }] }],
        generationConfig: genConfig
      })
    });

    if (!geminiRes.ok) {
      const err = await geminiRes.json().catch(() => ({}));
      return res.status(geminiRes.status).json({ error: err?.error?.message || `Gemini HTTP ${geminiRes.status}` });
    }

    const data = await geminiRes.json();
    const text = data?.candidates?.[0]?.content?.parts?.[0]?.text || "";
    if (!text) return res.status(500).json({ error: "Resposta vazia do Gemini" });

    return res.status(200).json({ text, user: email });

  } catch (err) {
    console.error("[MQCT Proxy]", err.message);
    return res.status(500).json({ error: "Erro interno: " + err.message });
  }
}
