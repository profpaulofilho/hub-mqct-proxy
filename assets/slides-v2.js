/* =============================================================
   slides-v2.js — Hub MQCT · SENAI Bahia
   Versão: 2.1.0
   Novidades: modo claro/escuro, cores vibrantes por área,
              favicon SVG embutido, fix 401 (token Supabase)
   Depende de: PptxGenJS 3.12 (carregado no <head> da área)
   ============================================================= */

/* ─── Estado global ─── */
let _slidesData = [];
let _slidesUc   = '';
let _slidesArea = '';
let _slidesCor  = '#1E7FE0';

/* ─── Favicon base64 (embutido no HTML exportado) ─── */
const _FAVICON = 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NCA2NCI+CiAgPGRlZnM+CiAgICA8bGluZWFyR3JhZGllbnQgaWQ9ImciIHgxPSIwIiB5MT0iMCIgeDI9IjEiIHkyPSIxIj4KICAgICAgPHN0b3Agb2Zmc2V0PSIwIiBzdG9wLWNvbG9yPSIjMTIzMDlFIi8+CiAgICAgIDxzdG9wIG9mZnNldD0iMC41NSIgc3RvcC1jb2xvcj0iIzFFN0ZFMCIvPgogICAgICA8c3RvcCBvZmZzZXQ9IjEiIHN0b3AtY29sb3I9IiMyMkQzRUUiLz4KICAgIDwvbGluZWFyR3JhZGllbnQ+CiAgPC9kZWZzPgogIDxyZWN0IHg9IjAiIHk9IjAiIHdpZHRoPSI2NCIgaGVpZ2h0PSI2NCIgcng9IjEyLjgiIGZpbGw9IiNmZmZmZmYiIHN0cm9rZT0icmdiYSgxMCw0MCwxMjAsLjE0KSIgc3Ryb2tlLXdpZHRoPSIxIi8+CiAgPHBhdGggZD0iTTMyLDE5LjIgQzE5LjIsMjEuNzYgMTAuMjQsMjYuODggMTAuODgsMzguNCBDMTEuNTIsNDQuOCAxOS4yLDQ0LjggMzIsNDIuMjQgWiIgZmlsbD0idXJsKCNnKSIvPgogIDxwYXRoIGQ9Ik0zMiwxOS4yIEM0NC44LDIxLjc2IDUzLjc2LDI2Ljg4IDUzLjEyLDM4LjQgQzUyLjQ4LDQ0LjggNDQuOCw0NC44IDMyLDQyLjI0IFoiIGZpbGw9InVybCgjZykiLz4KICA8bGluZSB4MT0iMzIiIHkxPSIxOS4yIiB4Mj0iMzIiIHkyPSI0Mi4yNCIgc3Ryb2tlPSJ1cmwoI2cpIiBzdHJva2Utd2lkdGg9IjEuNCIvPgogIDxwb2x5bGluZSBwb2ludHM9IjguOTYsMzIgMjAuNDgsMzIgMjUuNiwxNy45MiAzMiw0Ni4wOCAzNy4xMiwyNS42IDQyLjI0LDMyIDU1LjA0LDMyIgogICAgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjZmZmZmZmIiBzdHJva2Utd2lkdGg9IjMuMyIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+Cjwvc3ZnPg==';

/* ─── Paleta vibrante por área ─── */
const _AREA_PALETTES = {
  /* cor principal → [dark-bg, dark-card, dark-accent2, light-bg, light-card, light-accent2] */
  default:    { dk:['#0D0C16','#1E1C38','#2a2850'], lt:['#F0F0FF','#FFFFFF','#E8E6FF'] },
  '#00695C':  { dk:['#031A17','#0A2E28','#123028'], lt:['#E0F4F1','#FFFFFF','#B2DFDB'] }, // Química
  '#E65100':  { dk:['#1A0800','#2D1000','#3D1800'], lt:['#FFF3E0','#FFFFFF','#FFE0B2'] }, // Segurança
  '#1565C0':  { dk:['#04102B','#0A1F4D','#0D2B6B'], lt:['#E3F0FF','#FFFFFF','#BBDEFB'] }, // Redes
  '#6A0DAD':  { dk:['#110626','#1E0A40','#2A0F57'], lt:['#F3E5F5','#FFFFFF','#E1BEE7'] }, // DS
  '#F4A020':  { dk:['#1A1000','#2D1E00','#3D2800'], lt:['#FFF8E1','#FFFFFF','#FFECB3'] }, // Alimentos
  '#2E7D32':  { dk:['#021206','#053D0A','#075210'], lt:['#E8F5E9','#FFFFFF','#C8E6C9'] }, // Energias
  '#C00000':  { dk:['#1A0000','#2D0000','#400000'], lt:['#FFEBEE','#FFFFFF','#FFCDD2'] }, // Automotiva
  '#C2185B':  { dk:['#1A001A','#2D002D','#400040'], lt:['#FCE4EC','#FFFFFF','#F8BBD0'] }, // Gráfica
  '#00838F':  { dk:['#001A1C','#002D30','#003C40'], lt:['#E0F7FA','#FFFFFF','#B2EBF2'] }, // Logística
  '#455A64':  { dk:['#0A0E10','#151D21','#1C2830'], lt:['#ECEFF1','#FFFFFF','#CFD8DC'] }, // Metalmecânica
  '#37474F':  { dk:['#08100D','#101F1B','#162B26'], lt:['#EFEBE9','#FFFFFF','#D7CCC8'] }, // Petróleo
  '#0288D1':  { dk:['#001829','#002B45','#003A5E'], lt:['#E1F5FE','#FFFFFF','#B3E5FC'] }, // Refrigeração
  '#283593':  { dk:['#060A2B','#0E1550','#141E6B'], lt:['#E8EAF6','#FFFFFF','#C5CAE9'] }, // Telecom
  '#880E4F':  { dk:['#1A0010','#2D001C','#400028'], lt:['#FCE4EC','#FFFFFF','#F8BBD0'] }, // Vestuário
  '#8B4513':  { dk:['#1A0B00','#2D1400','#3D1C00'], lt:['#FBE9E7','#FFFFFF','#FFCCBC'] }, // Couro
  '#5D4037':  { dk:['#120D08','#201710','#2D1F16'], lt:['#EFEBE9','#FFFFFF','#D7CCC8'] }, // Edificações
  '#0055B8':  { dk:['#001229','#001F45','#002B5E'], lt:['#E3EEFF','#FFFFFF','#BBCFEE'] }, // Automação
  '#1A3A8F':  { dk:['#060D26','#0D1940','#121F57'], lt:['#E8EDF9','#FFFFFF','#C5CEED'] }, // Gestão
};

function _getPalette(cor) {
  return _AREA_PALETTES[cor] || _AREA_PALETTES['default'];
}

/* ─── Utilitários ─── */
const $   = id => document.getElementById(id);
const esc = t  => String(t ?? '').replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;');
const li  = arr => (arr || []).map(t => `<li>${esc(t)}</li>`).join('');

/* ─────────────────────────────────────────────────────────────
   1. PROMPT
   ───────────────────────────────────────────────────────────── */
function buildSlidesPrompt(ucNome, num, ctx, areaNome, areaCor) {
  _slidesUc   = ucNome;
  _slidesArea = areaNome || '';
  _slidesCor  = areaCor  || '#1E7FE0';

  return `Você é um especialista em educação profissional do SENAI.
Crie exatamente ${num} slides de apresentação sobre a UC/Competência:
"${ucNome}" — Área: ${areaNome}.

CONTEXTO OFICIAL DA UC:
${ctx}

REGRAS:
- Responda SOMENTE com um array JSON válido. Nenhum texto fora do JSON.
- Não use markdown, não use blocos de código, nenhum prefácio.
- O primeiro slide DEVE ter layout "cover".
- O último slide DEVE ter layout "references" com pelo menos 3 referências (normas, livros, sites técnicos).
- Distribua os demais layouts de forma variada.
- Cada slide deve ter "nota_docente" (1-2 frases de orientação ao professor).
- Máximo de 5 tópicos em layouts "content".
- Máximo de 4 itens por coluna em layouts "two-column".
- Campos por layout:
  cover      → titulo, subtitulo
  content    → titulo, topicos (array)
  two-column → titulo, coluna_esq (array), coluna_dir (array)
  highlight  → titulo, destaque, explicacao
  activity   → titulo, enunciado, passos (array)
  references → titulo, referencias (array)
- Todos os slides têm: slide (número), layout, nota_docente.

EXEMPLO DE ESTRUTURA (não repita, apenas siga o formato):
[
  {"slide":1,"layout":"cover","titulo":"...","subtitulo":"...","nota_docente":"..."},
  {"slide":2,"layout":"content","titulo":"...","topicos":["..."],"nota_docente":"..."}
]`;
}

/* ─────────────────────────────────────────────────────────────
   2. GERAÇÃO
   ───────────────────────────────────────────────────────────── */
async function gerarSlides() {
  const num = parseInt($('sl-num')?.value) || 10;
  const uc  = _slidesUc || (typeof ucAtual !== 'undefined' ? ucAtual?.nome : '') || 'UC não informada';

  let ctx = '';
  if (typeof buildOfficialContext === 'function') ctx = buildOfficialContext((typeof ucAtual !== 'undefined' && ucAtual?.id) ? ucAtual.id : uc);
  else if (typeof getCtxTransversal === 'function' && typeof ucAtual !== 'undefined')
    ctx = getCtxTransversal(ucAtual?.id);
  if (!ctx) ctx = 'Contexto não disponível. Use referências gerais da área.';

  const areaNome = typeof areaDados !== 'undefined' ? (areaDados?.nome || '') : '';
  const areaCor  = typeof areaDados !== 'undefined' ? (areaDados?.cor  || '#1E7FE0') : '#1E7FE0';
  const prompt   = buildSlidesPrompt(uc, num, ctx, areaNome, areaCor);

  /* UI: loading */
  const slLoad = $('sl-loading');
  if (slLoad) slLoad.style.display = 'flex';
  const slOut = $('sl-output'); if (slOut) slOut.style.display = 'none';
  const btnH = $('sl-btn-html'); const btnP = $('sl-btn-pptx');
  if (btnH) btnH.disabled = true;
  if (btnP) btnP.disabled = true;

  try {
    /* ── Fix 401: injeta token Supabase ── */
    const _token = (typeof getToken === 'function') ? getToken() : null;
    const _hdrs  = { 'Content-Type': 'application/json' };
    if (_token) _hdrs['Authorization'] = `Bearer ${_token}`;

    const res = await fetch('https://hub-mqct-proxy.vercel.app/api/gemini', {
      method: 'POST',
      headers: _hdrs,
      body: JSON.stringify({ prompt })
    });

    if (res.status === 401) {
      if (typeof showToast === 'function') showToast('Sessão expirada. Redirecionando...', 'error');
      setTimeout(() => window.location.href = '../index.html', 2000);
      throw new Error('Sessão expirada (401)');
    }
    if (!res.ok) {
      let detail = '';
      try {
        const errData = await res.json();
        detail = errData?.detail || errData?.error || errData?.message || '';
      } catch (_) {}
      throw new Error(`Proxy retornou ${res.status}${detail ? ' — ' + detail : ''}`);
    }

    const data = await res.json();
    const raw  = data?.candidates?.[0]?.content?.parts?.[0]?.text
              || data?.text || '';

    const clean = raw.replace(/```json|```/gi, '').trim();
    _slidesData = JSON.parse(clean);

    if (!Array.isArray(_slidesData) || !_slidesData.length)
      throw new Error('Resposta não é um array de slides válido.');

    const preview = _slidesData.map(s =>
      `[${s.slide}] ${s.layout.toUpperCase()} — ${s.titulo}`
    ).join('\n');

    if (slOut) { slOut.textContent = preview; slOut.style.display = 'block'; }
    if (btnH) btnH.disabled = false;
    if (btnP) btnP.disabled = false;
    if (typeof showToast === 'function') showToast(`${_slidesData.length} slides gerados!`);

  } catch (err) {
    if (slOut) { slOut.textContent = '❌ ' + err.message; slOut.style.display = 'block'; }
    if (typeof showToast === 'function') showToast('Erro: ' + err.message, 'error');
    console.error('[slides-v2]', err);
  } finally {
    if (slLoad) slLoad.style.display = 'none';
  }
}

/* ─────────────────────────────────────────────────────────────
   3. RENDER HTML (um slide)
   ───────────────────────────────────────────────────────────── */
function _renderSlideHtml(s, cor) {
  switch (s.layout) {
    case 'cover':
      return `<div class="slide-inner layout-cover">
        <div class="cover-deco"></div>
        <div class="cover-content">
          <div class="cover-tag">SENAI · ${esc(_slidesArea)}</div>
          <h1>${esc(s.titulo)}</h1>
          <p class="cover-sub">${esc(s.subtitulo)}</p>
        </div>
        <div class="cover-bar"></div>
      </div>`;

    case 'content':
      return `<div class="slide-inner layout-content">
        <div class="slide-bar"></div>
        <h2>${esc(s.titulo)}</h2>
        <ul class="topic-list">${li(s.topicos)}</ul>
      </div>`;

    case 'two-column':
      return `<div class="slide-inner layout-two-col">
        <div class="slide-bar"></div>
        <h2>${esc(s.titulo)}</h2>
        <div class="cols">
          <div class="col"><ul>${li(s.coluna_esq)}</ul></div>
          <div class="col-div"></div>
          <div class="col"><ul>${li(s.coluna_dir)}</ul></div>
        </div>
      </div>`;

    case 'highlight':
      return `<div class="slide-inner layout-highlight">
        <div class="slide-bar"></div>
        <h2>${esc(s.titulo)}</h2>
        <div class="highlight-box">${esc(s.destaque)}</div>
        <p class="highlight-exp">${esc(s.explicacao)}</p>
      </div>`;

    case 'activity':
      return `<div class="slide-inner layout-activity">
        <div class="slide-bar"></div>
        <h2>⚙️ ${esc(s.titulo)}</h2>
        <p class="activity-enunc">${esc(s.enunciado)}</p>
        <ol class="steps-list">${li(s.passos)}</ol>
      </div>`;

    case 'references':
      return `<div class="slide-inner layout-refs">
        <div class="slide-bar"></div>
        <h2>${esc(s.titulo)}</h2>
        <ul class="refs-list">${li(s.referencias)}</ul>
      </div>`;

    default:
      return `<div class="slide-inner layout-content">
        <div class="slide-bar"></div>
        <h2>${esc(s.titulo)}</h2><p>(layout desconhecido)</p>
      </div>`;
  }
}

/* ─────────────────────────────────────────────────────────────
   4. DOWNLOAD HTML
   ───────────────────────────────────────────────────────────── */
function downloadSlides() {
  if (!_slidesData.length) return;
  const cor   = _slidesCor;
  const pal   = _getPalette(cor);
  const total = _slidesData.length;

  /* deriva tons auxiliares a partir da cor principal */
  const corLight  = _lighten(cor, 0.35);
  const corDark   = _darken(cor, 0.25);
  const corGlow   = cor + '44';
  const corGlow2  = cor + '22';

  const slidesHtml = _slidesData.map((s, i) => `
  <div class="slide ${i === 0 ? 'active' : ''}" data-index="${i}">
    ${_renderSlideHtml(s, cor)}
    <div class="nota-bar">
      <span class="nota-ico">📝</span>
      <span class="nota-txt">${esc(s.nota_docente || '')}</span>
    </div>
  </div>`).join('');

  const dots = Array.from({length: total}, (_,i) =>
    `<button class="dot ${i===0?'active':''}" onclick="go(${i})" aria-label="Slide ${i+1}"></button>`
  ).join('');

  const html = `<!DOCTYPE html>
<html lang="pt-BR">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width,initial-scale=1.0">
<title>${esc(_slidesUc)} · SENAI ${esc(_slidesArea)}</title>
<link rel="icon" type="image/svg+xml" href="${_FAVICON}">
<style>
/* ── CSS CUSTOM PROPERTIES — DARK (padrão) e LIGHT ── */
:root {
  --cor:    ${cor};
  --cor-l:  ${corLight};
  --cor-d:  ${corDark};
  --cor-gw: ${corGlow};
  --cor-g2: ${corGlow2};

  /* DARK */
  --bg:        ${pal.dk[0]};
  --slide-bg:  ${pal.dk[1]};
  --card-bg:   ${pal.dk[2]};
  --txt:       #F4F4FF;
  --txt2:      #B0AECF;
  --txt3:      #7A78A8;
  --border:    rgba(255,255,255,.08);
  --nota-bg:   rgba(0,0,0,.35);
  --nota-txt:  #9996CC;
  --cover-txt: #FFFFFF;
  --cover-sub: #C8C6F0;
  --toolbar-bg:rgba(10,8,24,.92);
}
[data-theme="light"] {
  --bg:        ${pal.lt[0]};
  --slide-bg:  ${pal.lt[1]};
  --card-bg:   ${pal.lt[2]};
  --txt:       #111122;
  --txt2:      #333355;
  --txt3:      #666688;
  --border:    rgba(0,0,0,.10);
  --nota-bg:   rgba(0,0,0,.05);
  --nota-txt:  #555577;
  --cover-txt: #FFFFFF;
  --cover-sub: rgba(255,255,255,.88);
  --toolbar-bg:rgba(255,255,255,.95);
}

*,*::before,*::after{box-sizing:border-box;margin:0;padding:0}
html,body{width:100%;height:100%;overflow:hidden;font-family:'Segoe UI',system-ui,sans-serif;
  background:var(--bg);transition:background .3s,color .3s;}

/* ── TOOLBAR ── */
#toolbar{
  position:fixed;top:0;left:0;right:0;z-index:50;
  display:flex;align-items:center;gap:10px;
  padding:8px 16px;
  background:var(--toolbar-bg);
  backdrop-filter:blur(12px);
  border-bottom:1px solid var(--border);
  transition:background .3s;
}
.tb-logo{width:28px;height:28px;border-radius:6px;flex-shrink:0}
.tb-info{flex:1;font-size:12px;font-weight:600;color:var(--cor);
  white-space:nowrap;overflow:hidden;text-overflow:ellipsis}
.tb-btn{
  display:flex;align-items:center;gap:5px;
  background:none;border:1px solid var(--border);border-radius:7px;
  padding:5px 10px;font-size:12px;color:var(--txt2);cursor:pointer;
  transition:all .2s;white-space:nowrap;
}
.tb-btn:hover{background:var(--cor-g2);border-color:var(--cor);color:var(--cor)}
.tb-theme{font-size:15px;padding:5px 8px}
#counter{font-size:12px;font-weight:700;color:var(--txt3);min-width:50px;text-align:right}

/* ── STAGE ── */
#stage{
  position:fixed;inset:48px 0 56px 0;
  display:flex;align-items:center;justify-content:center;
  background:var(--bg);transition:background .3s;
}

/* ── SLIDE ── */
.slide{
  position:absolute;width:90%;max-width:960px;
  aspect-ratio:16/9;
  opacity:0;pointer-events:none;
  transform:translateX(60px);
  transition:opacity .35s ease, transform .35s ease;
}
.slide.active{opacity:1;pointer-events:auto;transform:translateX(0)}
.slide.exit-left{opacity:0!important;transform:translateX(-60px)!important;transition:opacity .25s ease,transform .25s ease}

/* ── SLIDE INNER ── */
.slide-inner{
  width:100%;height:100%;border-radius:14px;
  background:var(--slide-bg);
  overflow:hidden;position:relative;
  box-shadow:0 8px 40px rgba(0,0,0,.25), 0 0 0 1px var(--border);
  display:flex;flex-direction:column;
  transition:background .3s;
}

/* barra lateral colorida (todos exceto cover) */
.slide-bar{
  position:absolute;left:0;top:0;bottom:0;width:5px;
  background:var(--cor);border-radius:14px 0 0 14px;
}

/* ── COVER ── */
.layout-cover{
  background:linear-gradient(135deg, var(--cor-d) 0%, var(--cor) 50%, ${_lighten(cor,0.15)} 100%);
  justify-content:center;align-items:center;text-align:center;
}
.cover-deco{
  position:absolute;inset:0;
  background:radial-gradient(ellipse at 30% 50%, var(--cor-gw) 0%, transparent 65%),
             radial-gradient(ellipse at 75% 20%, rgba(255,255,255,.06) 0%, transparent 50%);
  pointer-events:none;
}
.cover-content{position:relative;z-index:1;padding:40px 60px}
.cover-tag{
  display:inline-block;
  border:1px solid rgba(255,255,255,.4);border-radius:20px;
  padding:4px 16px;margin-bottom:18px;
  font-size:11px;font-weight:700;letter-spacing:.1em;text-transform:uppercase;
  color:rgba(255,255,255,.85);background:rgba(255,255,255,.12);
}
.layout-cover h1{
  font-size:clamp(22px,4.5vw,44px);font-weight:800;line-height:1.15;
  color:var(--cover-txt);margin-bottom:14px;
  text-shadow:0 2px 16px rgba(0,0,0,.3);
}
.cover-sub{
  font-size:clamp(12px,1.8vw,17px);
  color:var(--cover-sub);line-height:1.5;max-width:640px;margin:0 auto;
}
.cover-bar{
  position:absolute;bottom:0;left:0;right:0;height:5px;
  background:rgba(255,255,255,.25);
}

/* ── CONTENT ── */
.layout-content{padding:32px 36px 32px 52px}
.layout-content h2{
  font-size:clamp(16px,2.5vw,24px);font-weight:800;
  color:var(--cor);margin-bottom:16px;line-height:1.2;
}
.topic-list{list-style:none;display:flex;flex-direction:column;gap:8px}
.topic-list li{
  display:flex;align-items:flex-start;gap:10px;
  padding:10px 14px;border-radius:8px;
  background:var(--card-bg);border:1px solid var(--border);
  font-size:clamp(11px,1.5vw,15px);color:var(--txt);line-height:1.45;
  transition:background .3s,border .3s;
}
.topic-list li::before{
  content:'▸';color:var(--cor);font-weight:900;
  font-size:1em;flex-shrink:0;margin-top:1px;
}

/* ── TWO-COLUMN ── */
.layout-two-col{padding:28px 36px 28px 52px}
.layout-two-col h2{font-size:clamp(15px,2.2vw,22px);font-weight:800;color:var(--cor);margin-bottom:14px}
.cols{display:grid;grid-template-columns:1fr 1px 1fr;gap:12px;align-items:start}
.col-div{background:var(--cor);opacity:.4;width:1px;height:100%;min-height:120px;align-self:stretch}
.col ul{list-style:none;display:flex;flex-direction:column;gap:6px}
.col li{
  padding:8px 12px;border-radius:7px;
  background:var(--card-bg);border:1px solid var(--border);
  font-size:clamp(10px,1.3vw,13px);color:var(--txt);line-height:1.4;
  transition:background .3s;
}
.col li::before{content:'• ';color:var(--cor);font-weight:900}

/* ── HIGHLIGHT ── */
.layout-highlight{padding:28px 40px 28px 52px;justify-content:center}
.layout-highlight h2{font-size:clamp(15px,2.2vw,22px);font-weight:800;color:var(--cor);margin-bottom:20px}
.highlight-box{
  padding:20px 28px;border-radius:12px;border:2px solid var(--cor);
  background:var(--card-bg);
  font-size:clamp(14px,2.2vw,22px);font-weight:700;
  color:var(--txt);text-align:center;line-height:1.4;
  box-shadow:0 0 24px var(--cor-g2);
  transition:background .3s;
}
.highlight-exp{
  margin-top:16px;font-size:clamp(11px,1.5vw,15px);
  color:var(--txt2);text-align:center;line-height:1.5;
}

/* ── ACTIVITY ── */
.layout-activity{padding:28px 36px 28px 52px}
.layout-activity h2{font-size:clamp(15px,2.2vw,22px);font-weight:800;color:var(--cor);margin-bottom:10px}
.activity-enunc{
  padding:10px 14px;border-radius:8px;
  background:var(--card-bg);border-left:4px solid var(--cor);
  font-size:clamp(11px,1.4vw,14px);color:var(--txt);margin-bottom:12px;
  transition:background .3s;
}
.steps-list{list-style:none;display:flex;flex-direction:column;gap:6px;padding:0}
.steps-list li{
  display:flex;align-items:flex-start;gap:10px;
  padding:8px 14px;border-radius:7px;
  background:var(--card-bg);border:1px solid var(--border);
  font-size:clamp(10px,1.3vw,13px);color:var(--txt);
  counter-increment:steps;transition:background .3s;
}
.steps-list{counter-reset:steps}
.steps-list li::before{
  content:counter(steps);
  display:flex;align-items:center;justify-content:center;
  min-width:22px;height:22px;border-radius:50%;
  background:var(--cor);color:#fff;font-size:11px;font-weight:900;flex-shrink:0;
}

/* ── REFERENCES ── */
.layout-refs{padding:28px 36px 28px 52px}
.layout-refs h2{font-size:clamp(15px,2.2vw,22px);font-weight:800;color:var(--cor);margin-bottom:14px}
.refs-list{list-style:none;display:flex;flex-direction:column;gap:7px}
.refs-list li{
  display:flex;align-items:flex-start;gap:10px;
  padding:8px 14px;border-radius:7px;
  background:var(--card-bg);border:1px solid var(--border);
  font-size:clamp(10px,1.3vw,13px);color:var(--txt);line-height:1.4;
  transition:background .3s;
}
.refs-list li::before{content:'📖';flex-shrink:0}

/* ── NOTA DOCENTE ── */
.nota-bar{
  display:flex;align-items:flex-start;gap:8px;
  position:absolute;bottom:0;left:0;right:0;
  padding:7px 16px;
  background:var(--nota-bg);
  border-top:1px solid var(--border);
  backdrop-filter:blur(4px);
  font-size:10.5px;line-height:1.4;
  transition:background .3s;
}
.nota-ico{flex-shrink:0}
.nota-txt{color:var(--nota-txt);font-style:italic}

/* ── DOTS ── */
#dots{
  position:fixed;bottom:14px;left:0;right:0;
  display:flex;justify-content:center;align-items:center;gap:7px;z-index:30;
}
.dot{
  width:8px;height:8px;border-radius:50%;border:none;cursor:pointer;
  background:var(--txt3);opacity:.5;padding:0;transition:all .2s;
}
.dot.active{background:var(--cor);opacity:1;transform:scale(1.4)}

/* ── ARROWS ── */
.arrow{
  position:fixed;top:50%;transform:translateY(-50%);
  z-index:30;width:40px;height:40px;border-radius:50%;border:none;
  font-size:20px;cursor:pointer;
  background:var(--cor-g2);color:var(--txt2);
  backdrop-filter:blur(8px);transition:all .2s;
  display:flex;align-items:center;justify-content:center;
}
.arrow:hover{background:var(--cor-gw);color:var(--cor);transform:translateY(-50%) scale(1.1)}
#prev{left:10px}#next{right:10px}

/* ── IMPRESSÃO ── */
@media print{
  #toolbar,#dots,#prev,#next,.nota-bar{display:none!important}
  html,body{overflow:visible!important;height:auto!important;background:#fff!important}
  #stage{position:static!important;overflow:visible!important;inset:auto!important}
  .slide{position:relative!important;opacity:1!important;transform:none!important;
    pointer-events:auto!important;page-break-after:always;display:flex!important;
    aspect-ratio:unset!important;height:100vh!important;width:100%!important;max-width:100%!important}
}
</style>
</head>
<body>

<div id="toolbar">
  <img class="tb-logo" src="${_FAVICON}" alt="SENAI Hub MQCT">
  <span class="tb-info">📘 ${esc(_slidesUc)} · SENAI ${esc(_slidesArea)}</span>
  <button class="tb-btn" onclick="toggleTheme()" id="btn-theme" title="Alternar tema">🌙 Tema</button>
  <button class="tb-btn" onclick="toggleFullscreen()">⛶ Tela cheia</button>
  <button class="tb-btn" onclick="window.print()">🖨️ Imprimir</button>
  <span id="counter">1 / ${total}</span>
</div>

<div id="stage">${slidesHtml}</div>
<div id="dots">${dots}</div>
<button class="arrow" id="prev" onclick="nav(-1)">‹</button>
<button class="arrow" id="next" onclick="nav(1)">›</button>

<script>
let cur = 0;
const slides  = document.querySelectorAll('.slide');
const dotsEls = document.querySelectorAll('.dot');
const counter = document.getElementById('counter');

function go(n) {
  if (n < 0 || n >= slides.length) return;
  slides[cur].classList.add('exit-left');
  slides[cur].classList.remove('active');
  setTimeout(() => slides[cur]?.classList.remove('exit-left'), 320);
  cur = n;
  slides[cur].classList.add('active');
  dotsEls.forEach((d,i) => d.classList.toggle('active', i === cur));
  counter.textContent = (cur + 1) + ' / ' + slides.length;
}
function nav(d) { go(cur + d); }
dotsEls.forEach((d,i) => d.addEventListener('click', () => go(i)));

document.addEventListener('keydown', e => {
  if (e.key === 'ArrowRight' || e.key === 'ArrowDown' || e.key === ' ') nav(1);
  if (e.key === 'ArrowLeft'  || e.key === 'ArrowUp')                     nav(-1);
  if (e.key === 'f' || e.key === 'F') toggleFullscreen();
  if (e.key === 't' || e.key === 'T') toggleTheme();
});

function toggleFullscreen() {
  if (!document.fullscreenElement) document.documentElement.requestFullscreen().catch(()=>{});
  else document.exitFullscreen();
}

/* ── Modo claro/escuro ── */
let _dark = true;
function toggleTheme() {
  _dark = !_dark;
  document.documentElement.setAttribute('data-theme', _dark ? '' : 'light');
  document.getElementById('btn-theme').textContent = _dark ? '🌙 Tema' : '☀️ Tema';
}

/* Preferência do sistema */
if (window.matchMedia('(prefers-color-scheme: light)').matches) toggleTheme();
<\/script>
</body>
</html>`;

  _dlBlob(html, `slides-${_slug(_slidesUc)}.html`, 'text/html');
}

/* ─────────────────────────────────────────────────────────────
   5. EXPORT .PPTX
   ───────────────────────────────────────────────────────────── */
function downloadPptx() {
  if (!_slidesData.length) return;
  if (typeof PptxGenJS === 'undefined') {
    alert('PptxGenJS não carregado. Verifique o <script> no <head>.');
    return;
  }

  const pptx   = new PptxGenJS();
  pptx.layout  = 'LAYOUT_WIDE';
  const COR    = _slidesCor.replace('#','');
  const COR_L  = _lighten(_slidesCor, 0.3).replace('#','');
  const WHITE  = 'FFFFFF';
  const GRAY   = 'B0AECF';
  const DARK   = '0D0C16';
  const CARD   = '1E1C38';

  _slidesData.forEach(s => {
    const slide = pptx.addSlide();
    const nota  = s.nota_docente || '';

    if (s.layout === 'cover') {
      /* fundo gradiente cover */
      slide.addShape(pptx.ShapeType.rect, {x:0,y:0,w:'100%',h:'100%',
        fill:{type:'gradient',gradType:'linear',angle:135,
          stops:[{position:0,color:_darken(_slidesCor,0.25).replace('#','')},
                 {position:50,color:COR},
                 {position:100,color:COR_L}]}});
      slide.addText(`SENAI · ${_slidesArea}`, {
        x:0.5,y:1.4,w:9,h:0.4,align:'center',
        fontSize:13,bold:true,color:WHITE,charSpacing:3,transparency:20});
      slide.addText(s.titulo, {
        x:0.5,y:2.0,w:9,h:2,align:'center',
        fontSize:38,bold:true,color:WHITE});
      if (s.subtitulo)
        slide.addText(s.subtitulo,{x:1,y:4.3,w:8,h:0.9,align:'center',
          fontSize:17,color:WHITE,transparency:15});
      /* barra inferior */
      slide.addShape(pptx.ShapeType.rect,{x:0,y:7.1,w:'100%',h:0.15,
        fill:{color:WHITE},transparency:70});
    } else {
      /* fundo escuro padrão */
      slide.addShape(pptx.ShapeType.rect,{x:0,y:0,w:'100%',h:'100%',fill:{color:DARK}});
      /* barra lateral */
      slide.addShape(pptx.ShapeType.rect,{x:0,y:0,w:0.07,h:'100%',fill:{color:COR}});
    }

    /* nota docente rodapé */
    slide.addText(`📝 ${nota}`,{x:0.2,y:6.75,w:9.6,h:0.4,
      fontSize:10,color:'666688',italic:true,align:'left'});

    switch(s.layout) {
      case 'content':
        slide.addText(s.titulo,{x:0.3,y:0.2,w:9.4,h:0.75,fontSize:24,bold:true,color:COR});
        (s.topicos||[]).forEach((t,i) =>
          slide.addText('▸  '+t,{x:0.3,y:1.1+i*1.0,w:9.4,h:0.9,
            fontSize:16,color:WHITE,fill:{color:CARD},line:{color:COR,width:2},margin:8}));
        break;

      case 'two-column':
        slide.addText(s.titulo,{x:0.3,y:0.2,w:9.4,h:0.75,fontSize:24,bold:true,color:COR});
        slide.addShape(pptx.ShapeType.line,{x:5.08,y:1.1,w:0,h:5.5,line:{color:COR,width:1,transparency:50}});
        (s.coluna_esq||[]).forEach((t,i) =>
          slide.addText('• '+t,{x:0.3,y:1.15+i*1.1,w:4.55,h:0.95,fontSize:14,color:WHITE,fill:{color:CARD},margin:7}));
        (s.coluna_dir||[]).forEach((t,i) =>
          slide.addText('• '+t,{x:5.2,y:1.15+i*1.1,w:4.55,h:0.95,fontSize:14,color:WHITE,fill:{color:CARD},margin:7}));
        break;

      case 'highlight':
        slide.addText(s.titulo,{x:0.3,y:0.2,w:9.4,h:0.75,fontSize:24,bold:true,color:COR});
        slide.addText(s.destaque,{x:0.8,y:1.3,w:8.4,h:2.2,align:'center',
          fontSize:28,bold:true,color:WHITE,fill:{color:CARD},
          line:{color:COR,width:2.5},margin:18});
        if(s.explicacao)
          slide.addText(s.explicacao,{x:1,y:3.75,w:8,h:1.2,align:'center',
            fontSize:15,color:GRAY});
        break;

      case 'activity':
        slide.addText('⚙️  '+s.titulo,{x:0.3,y:0.2,w:9.4,h:0.75,fontSize:24,bold:true,color:COR});
        if(s.enunciado)
          slide.addText(s.enunciado,{x:0.3,y:1.1,w:9.4,h:0.85,fontSize:14,color:WHITE,
            fill:{color:CARD},line:{color:COR,width:2.5},margin:10});
        (s.passos||[]).forEach((t,i) =>
          slide.addText(`${i+1}.  ${t}`,{x:0.3,y:2.1+i*0.95,w:9.4,h:0.85,
            fontSize:14,color:WHITE,fill:{color:CARD},margin:8}));
        break;

      case 'references':
        slide.addText(s.titulo,{x:0.3,y:0.2,w:9.4,h:0.75,fontSize:24,bold:true,color:COR});
        (s.referencias||[]).forEach((t,i) =>
          slide.addText('📖  '+t,{x:0.3,y:1.1+i*0.9,w:9.4,h:0.8,
            fontSize:14,color:WHITE,fill:{color:CARD},margin:8}));
        break;
    }
  });

  pptx.writeFile({ fileName: `slides-${_slug(_slidesUc)}.pptx` });
}

/* ─────────────────────────────────────────────────────────────
   6. UTILITÁRIOS
   ───────────────────────────────────────────────────────────── */
function _lighten(hex, pct) {
  const f = parseInt(hex.replace('#',''), 16);
  const t = 255;
  const R = f >> 16, G = (f >> 8) & 255, B = f & 255;
  return '#' + (0x1000000
    + (Math.round((t-R)*pct)+R) * 0x10000
    + (Math.round((t-G)*pct)+G) * 0x100
    + (Math.round((t-B)*pct)+B)).toString(16).slice(1);
}

function _darken(hex, pct) {
  const f = parseInt(hex.replace('#',''), 16);
  const R = f >> 16, G = (f >> 8) & 255, B = f & 255;
  return '#' + (0x1000000
    + Math.round(R*(1-pct)) * 0x10000
    + Math.round(G*(1-pct)) * 0x100
    + Math.round(B*(1-pct))).toString(16).slice(1);
}

function _dlBlob(content, filename, mime) {
  const blob = new Blob([content], { type: mime });
  const url  = URL.createObjectURL(blob);
  const a    = document.createElement('a');
  a.href = url; a.download = filename;
  document.body.appendChild(a); a.click(); a.remove();
  URL.revokeObjectURL(url);
}

function _slug(str) {
  return (str || 'slides')
    .toLowerCase()
    .normalize('NFD').replace(/[\u0300-\u036f]/g,'')
    .replace(/[^a-z0-9]+/g,'-')
    .replace(/^-+|-+$/g,'')
    .slice(0, 60);
}

/* ── Exposição global ── */
window.gerarSlides    = gerarSlides;
window.downloadSlides = downloadSlides;
window.downloadPptx   = downloadPptx;
