/* =============================================================
   slides-v2.js — Hub MQCT · SENAI Bahia
   Versão: 2.0.0
   Depende de: PptxGenJS 3.12 (carregado no <head> da área)
   Uso: <script src="../assets/slides-v2.js"></script>
   ============================================================= */

/* ─── Estado global dos slides ─── */
let _slidesData  = [];   // array JSON retornado pelo Gemini
let _slidesUc    = '';   // nome da UC gerada
let _slidesArea  = '';   // nome da área (ex: "Saúde")
let _slidesCor   = '#1E7FE0'; // cor da área (hex)

/* ─── Utilitários DOM ─── */
const $  = id => document.getElementById(id);
const show = (id, v) => { const el=$(id); if(el) el.style.display = v ?? 'block'; };
const hide = id => show(id, 'none');

/* ─────────────────────────────────────────────────────────────
   1. BUILD DO PROMPT
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
   2. GERAÇÃO (chamada ao Gemini via proxy Vercel)
   ───────────────────────────────────────────────────────────── */
async function gerarSlides() {
  const ucInput = $('sl-uc')?.value.trim();
  const num     = parseInt($('sl-num')?.value) || 10;

  /* UC: usa o campo ou cai no seletor da página (ucAtual) */
  const uc = ucInput || (typeof ucAtual !== 'undefined' ? ucAtual?.nome : 'UC não informada');

  /* Contexto: tenta buildOfficialContext ou getCtxTransversal */
  let ctx = '';
  if (typeof buildOfficialContext === 'function') ctx = buildOfficialContext();
  else if (typeof getCtxTransversal === 'function' && typeof ucAtual !== 'undefined')
    ctx = getCtxTransversal(ucAtual?.id);
  if (!ctx) ctx = 'Contexto não disponível. Use referências gerais da área.';

  const areaNome = typeof areaDados !== 'undefined' ? (areaDados?.nome || '') : '';
  const areaCor  = typeof areaDados !== 'undefined' ? (areaDados?.cor  || '#1E7FE0') : '#1E7FE0';

  const prompt = buildSlidesPrompt(uc, num, ctx, areaNome, areaCor);

  /* UI: loading */
  show('sl-loading'); hide('sl-label');
  hide('sl-output');
  const btnHtml = $('sl-btn-html'); const btnPptx = $('sl-btn-pptx');
  if (btnHtml) btnHtml.disabled = true;
  if (btnPptx) btnPptx.disabled = true;

  try {
    /* Token Supabase — lido do localStorage pela função getToken() da página */
    const _token = (typeof getToken === 'function') ? getToken() : null;
    const _headers = { 'Content-Type': 'application/json' };
    if (_token) _headers['Authorization'] = `Bearer ${_token}`;

    const res = await fetch('https://hub-mqct-proxy.vercel.app/api/gemini', {
      method: 'POST',
      headers: _headers,
      body: JSON.stringify({ prompt })
    });

    if (res.status === 401) {
      if (typeof showToast === 'function') showToast('Sessão expirada. Redirecionando...', 'error');
      setTimeout(() => window.location.href = '../index.html', 2000);
      throw new Error('Proxy retornou 401');
    }
    if (!res.ok) throw new Error(`Proxy retornou ${res.status}`);
    const data = await res.json();

    /* Extrai texto da resposta Gemini */
    const raw = data?.candidates?.[0]?.content?.parts?.[0]?.text || '';

    /* Parse JSON (remove eventuais blocos ```json) */
    const clean = raw.replace(/```json|```/gi, '').trim();
    _slidesData = JSON.parse(clean);

    if (!Array.isArray(_slidesData) || _slidesData.length === 0)
      throw new Error('Resposta não é um array de slides.');

    /* Preview textual no modal */
    const preview = _slidesData.map(s =>
      `[${s.slide}] ${s.layout.toUpperCase()} — ${s.titulo}`
    ).join('\n');

    const out = $('sl-output');
    if (out) { out.textContent = preview; show('sl-output'); }

    if (btnHtml) btnHtml.disabled = false;
    if (btnPptx) btnPptx.disabled = false;

  } catch (err) {
    const out = $('sl-output');
    if (out) { out.textContent = '❌ Erro: ' + err.message; show('sl-output'); }
    console.error('[slides-v2] gerarSlides:', err);
  } finally {
    hide('sl-loading'); show('sl-label');
  }
}

/* ─────────────────────────────────────────────────────────────
   3. HTML INTERATIVO
   ───────────────────────────────────────────────────────────── */
function _renderSlideHtml(s, cor) {
  const escape = t => String(t ?? '').replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;');
  const li = arr => (arr || []).map(t => `<li>${escape(t)}</li>`).join('');

  switch (s.layout) {
    case 'cover':
      return `
        <div class="slide-inner layout-cover" style="--cor:${cor}">
          <div class="cover-content">
            <div class="cover-tag">SENAI · ${escape(_slidesArea)}</div>
            <h1>${escape(s.titulo)}</h1>
            <p class="cover-sub">${escape(s.subtitulo)}</p>
          </div>
        </div>`;

    case 'content':
      return `
        <div class="slide-inner layout-content" style="--cor:${cor}">
          <h2>${escape(s.titulo)}</h2>
          <ul class="topic-list">${li(s.topicos)}</ul>
        </div>`;

    case 'two-column':
      return `
        <div class="slide-inner layout-two-col" style="--cor:${cor}">
          <h2>${escape(s.titulo)}</h2>
          <div class="cols">
            <div class="col"><ul>${li(s.coluna_esq)}</ul></div>
            <div class="col"><ul>${li(s.coluna_dir)}</ul></div>
          </div>
        </div>`;

    case 'highlight':
      return `
        <div class="slide-inner layout-highlight" style="--cor:${cor}">
          <h2>${escape(s.titulo)}</h2>
          <div class="highlight-box">${escape(s.destaque)}</div>
          <p class="highlight-exp">${escape(s.explicacao)}</p>
        </div>`;

    case 'activity':
      return `
        <div class="slide-inner layout-activity" style="--cor:${cor}">
          <h2>⚙️ ${escape(s.titulo)}</h2>
          <p class="activity-enunc">${escape(s.enunciado)}</p>
          <ol class="steps-list">${li(s.passos)}</ol>
        </div>`;

    case 'references':
      return `
        <div class="slide-inner layout-refs" style="--cor:${cor}">
          <h2>${escape(s.titulo)}</h2>
          <ul class="refs-list">${li(s.referencias)}</ul>
        </div>`;

    default:
      return `<div class="slide-inner layout-content" style="--cor:${cor}">
        <h2>${escape(s.titulo)}</h2><p>(layout desconhecido)</p></div>`;
  }
}

function downloadSlides() {
  if (!_slidesData.length) return;
  const cor  = _slidesCor;
  const total = _slidesData.length;

  const slidesHtml = _slidesData.map((s, i) => `
  <div class="slide ${i === 0 ? 'active' : ''}" data-index="${i}">
    ${_renderSlideHtml(s, cor)}
    <div class="nota-bar">
      <span class="nota-label">📝 Nota docente:</span>
      <span class="nota-txt">${s.nota_docente || ''}</span>
    </div>
  </div>`).join('');

  const dots = Array.from({length: total}, (_,i) =>
    `<button class="dot ${i===0?'active':''}" data-i="${i}" aria-label="Slide ${i+1}"></button>`
  ).join('');

  const html = `<!DOCTYPE html>
<html lang="pt-BR">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width,initial-scale=1">
<title>${_slidesUc} — SENAI ${_slidesArea}</title>
<style>
:root{--cor:${cor};--bg:#0d0c16;--nota-h:56px;}
*{box-sizing:border-box;margin:0;padding:0;}
html,body{height:100%;background:var(--bg);font-family:'Segoe UI',system-ui,sans-serif;overflow:hidden;}

/* toolbar */
#toolbar{position:fixed;top:0;left:0;right:0;z-index:50;height:44px;
  display:flex;align-items:center;gap:8px;padding:0 14px;
  background:rgba(10,8,22,.7);backdrop-filter:blur(10px);
  border-bottom:1px solid rgba(255,255,255,.08);}
#toolbar .info{flex:1;font-size:12px;color:rgba(255,255,255,.55);white-space:nowrap;overflow:hidden;text-overflow:ellipsis;}
#toolbar button{background:rgba(255,255,255,.08);border:1px solid rgba(255,255,255,.14);
  color:#fff;border-radius:7px;padding:5px 11px;font-size:11.5px;cursor:pointer;transition:.15s;}
#toolbar button:hover{background:rgba(255,255,255,.16);}
#counter{font-size:12px;color:rgba(255,255,255,.55);min-width:52px;text-align:right;}

/* stage */
#stage{position:fixed;inset:44px 0 0 0;overflow:hidden;}

/* slides */
.slide{position:absolute;inset:0;display:flex;flex-direction:column;
  opacity:0;transform:translateX(60px);transition:opacity .38s ease,transform .38s ease;pointer-events:none;}
.slide.active{opacity:1;transform:translateX(0);pointer-events:auto;}
.slide.exit-left{opacity:0;transform:translateX(-60px);}

/* inner */
.slide-inner{flex:1;overflow:hidden;padding:52px 64px 16px;display:flex;flex-direction:column;justify-content:center;}

/* layouts */
.layout-cover{background:linear-gradient(135deg,#0d0c2e 0%,#1a1040 55%,color-mix(in srgb,var(--cor) 20%,#0d0c16) 100%);
  align-items:center;text-align:center;}
.cover-tag{font-size:13px;font-weight:600;letter-spacing:.12em;text-transform:uppercase;
  color:var(--cor);margin-bottom:22px;opacity:.85;}
.layout-cover h1{font-size:clamp(26px,4vw,52px);color:#fff;line-height:1.18;max-width:820px;
  background:linear-gradient(135deg,#fff 0%,color-mix(in srgb,var(--cor) 55%,#fff) 100%);
  -webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text;}
.cover-sub{margin-top:22px;font-size:clamp(14px,1.8vw,20px);color:rgba(255,255,255,.65);max-width:680px;}

.layout-content,.layout-two-col,.layout-highlight,.layout-activity,.layout-refs{
  background:#12112a;}
.layout-content h2,.layout-two-col h2,.layout-highlight h2,.layout-activity h2,.layout-refs h2{
  font-size:clamp(18px,2.5vw,34px);color:var(--cor);margin-bottom:28px;padding-bottom:12px;
  border-bottom:2px solid color-mix(in srgb,var(--cor) 35%,transparent);}

.topic-list{list-style:none;display:flex;flex-direction:column;gap:12px;}
.topic-list li{font-size:clamp(13px,1.6vw,19px);color:rgba(255,255,255,.88);
  padding:10px 14px 10px 46px;position:relative;background:rgba(255,255,255,.04);border-radius:8px;
  border-left:3px solid var(--cor);}
.topic-list li::before{content:'▸';position:absolute;left:16px;color:var(--cor);}

.cols{display:grid;grid-template-columns:1fr 1fr;gap:24px;flex:1;}
.col ul{list-style:none;display:flex;flex-direction:column;gap:10px;}
.col li{font-size:clamp(12px,1.4vw,17px);color:rgba(255,255,255,.82);
  padding:8px 12px 8px 34px;position:relative;background:rgba(255,255,255,.04);border-radius:7px;}
.col li::before{content:'•';position:absolute;left:12px;color:var(--cor);font-size:1.2em;}

.highlight-box{font-size:clamp(18px,2.4vw,30px);font-weight:700;color:#fff;
  background:linear-gradient(135deg,color-mix(in srgb,var(--cor) 22%,transparent),transparent);
  border:2px solid var(--cor);border-radius:14px;padding:22px 30px;margin-bottom:22px;
  text-align:center;line-height:1.3;}
.highlight-exp{font-size:clamp(12px,1.4vw,17px);color:rgba(255,255,255,.72);text-align:center;max-width:700px;align-self:center;}

.activity-enunc{font-size:clamp(13px,1.5vw,18px);color:rgba(255,255,255,.8);margin-bottom:18px;
  padding:12px 16px;background:rgba(255,255,255,.05);border-radius:8px;border-left:3px solid var(--cor);}
.steps-list{list-style:none;counter-reset:steps;display:flex;flex-direction:column;gap:10px;}
.steps-list li{counter-increment:steps;font-size:clamp(12px,1.4vw,17px);color:rgba(255,255,255,.82);
  padding:8px 14px 8px 50px;position:relative;background:rgba(255,255,255,.04);border-radius:8px;}
.steps-list li::before{content:counter(steps);position:absolute;left:14px;top:50%;transform:translateY(-50%);
  width:24px;height:24px;background:var(--cor);border-radius:50%;display:flex;align-items:center;justify-content:center;
  font-size:11px;font-weight:700;color:#0d0c16;line-height:24px;text-align:center;}

.refs-list{list-style:none;display:flex;flex-direction:column;gap:10px;}
.refs-list li{font-size:clamp(12px,1.3vw,16px);color:rgba(255,255,255,.78);
  padding:8px 14px 8px 36px;position:relative;background:rgba(255,255,255,.04);border-radius:7px;}
.refs-list li::before{content:'📖';position:absolute;left:10px;}

/* nota docente */
.nota-bar{height:var(--nota-h);min-height:var(--nota-h);display:flex;align-items:center;gap:8px;
  padding:0 24px;background:rgba(0,0,0,.35);border-top:1px solid rgba(255,255,255,.07);flex:none;}
.nota-label{font-size:11px;font-weight:700;color:var(--cor);white-space:nowrap;}
.nota-txt{font-size:11.5px;color:rgba(255,255,255,.6);line-height:1.4;}

/* dots */
#dots{position:fixed;bottom:calc(var(--nota-h) + 10px);left:0;right:0;z-index:40;
  display:flex;justify-content:center;gap:7px;}
.dot{width:8px;height:8px;border-radius:50%;border:none;background:rgba(255,255,255,.22);cursor:pointer;transition:.2s;padding:0;}
.dot.active{background:var(--cor);transform:scale(1.25);}
.dot:hover:not(.active){background:rgba(255,255,255,.45);}

/* setas */
.arrow{position:fixed;top:50%;z-index:40;transform:translateY(-50%);
  background:rgba(255,255,255,.08);border:1px solid rgba(255,255,255,.14);
  color:#fff;border-radius:50%;width:42px;height:42px;font-size:20px;
  cursor:pointer;transition:.2s;display:flex;align-items:center;justify-content:center;}
.arrow:hover{background:rgba(255,255,255,.2);}
#prev{left:14px;}
#next{right:14px;}

/* impressão */
@media print{
  #toolbar,#dots,#prev,#next,.nota-bar{display:none!important;}
  html,body{overflow:visible!important;height:auto!important;background:#fff!important;}
  #stage{position:static!important;overflow:visible!important;inset:auto!important;}
  .slide{position:relative!important;opacity:1!important;transform:none!important;
    pointer-events:auto!important;page-break-after:always;display:flex!important;}
  .slide-inner{background:#fff!important;}
  .layout-cover{background:linear-gradient(135deg,#e8eeff,#f4f4ff)!important;}
  .layout-cover h1{-webkit-text-fill-color:#12309E!important;}
  h2,li,.nota-txt,.cover-sub{color:#222!important;}
}
</style>
</head>
<body>
<div id="toolbar">
  <span class="info">📘 ${_slidesUc} — SENAI ${_slidesArea}</span>
  <button onclick="toggleFullscreen()">⛶ Tela cheia</button>
  <button onclick="window.print()">🖨️ Imprimir</button>
  <span id="counter">1 / ${total}</span>
</div>
<div id="stage">${slidesHtml}</div>
<div id="dots">${dots}</div>
<button class="arrow" id="prev" onclick="nav(-1)">‹</button>
<button class="arrow" id="next" onclick="nav(1)">›</button>
<script>
let cur=0;
const slides=document.querySelectorAll('.slide');
const dots=document.querySelectorAll('.dot');
const counter=document.getElementById('counter');
function go(n){
  if(n<0||n>=slides.length) return;
  slides[cur].classList.add('exit-left');
  slides[cur].classList.remove('active');
  setTimeout(()=>slides[cur]?.classList.remove('exit-left'),380);
  cur=n;
  slides[cur].classList.add('active');
  dots.forEach((d,i)=>d.classList.toggle('active',i===cur));
  counter.textContent=(cur+1)+' / '+slides.length;
}
function nav(d){go(cur+d);}
dots.forEach((d,i)=>d.addEventListener('click',()=>go(i)));
document.addEventListener('keydown',e=>{
  if(e.key==='ArrowRight'||e.key==='ArrowDown') nav(1);
  if(e.key==='ArrowLeft'||e.key==='ArrowUp') nav(-1);
});
function toggleFullscreen(){
  if(!document.fullscreenElement) document.documentElement.requestFullscreen();
  else document.exitFullscreen();
}
<\/script>
</body>
</html>`;

  _dlBlob(html, `slides-${_slug(_slidesUc)}.html`, 'text/html');
}

/* ─────────────────────────────────────────────────────────────
   4. EXPORT .PPTX (PptxGenJS)
   ───────────────────────────────────────────────────────────── */
function downloadPptx() {
  if (!_slidesData.length) return;
  if (typeof PptxGenJS === 'undefined') {
    alert('PptxGenJS não carregado. Verifique o <script> no <head>.');
    return;
  }

  const pptx = new PptxGenJS();
  pptx.layout = 'LAYOUT_WIDE';

  /* Paleta */
  const COR   = _slidesCor.replace('#','');
  const WHITE = 'FFFFFF';
  const DARK  = '0D0C16';
  const GRAY  = 'B0AECF';

  function hexToRgb(hex){
    const h=hex.replace('#','');
    return {r:parseInt(h.slice(0,2),16),g:parseInt(h.slice(2,4),16),b:parseInt(h.slice(4,6),16)};
  }
  const corRgb = hexToRgb(_slidesCor);

  _slidesData.forEach(s => {
    const slide = pptx.addSlide();

    /* Fundo */
    if(s.layout==='cover'){
      slide.addShape(pptx.ShapeType.rect, {x:0,y:0,w:'100%',h:'100%',fill:{color:DARK}});
      slide.addShape(pptx.ShapeType.rect, {x:0,y:0,w:'100%',h:'100%',
        fill:{type:'gradient',gradType:'linear',angle:135,
          stops:[{position:0,color:DARK},{position:100,color:'1a1040'}]}});
    } else {
      slide.addShape(pptx.ShapeType.rect, {x:0,y:0,w:'100%',h:'100%',fill:{color:'12112a'}});
    }

    /* Barra de cor lateral */
    if(s.layout!=='cover')
      slide.addShape(pptx.ShapeType.rect, {x:0,y:0,w:0.08,h:'100%',fill:{color:COR}});

    const nota = s.nota_docente || '';

    switch(s.layout){

      case 'cover':
        slide.addText(`SENAI · ${_slidesArea}`, {
          x:0.5, y:1.6, w:9, h:0.4, align:'center',
          fontSize:13, bold:true, color:COR, charSpacing:2 });
        slide.addText(s.titulo, {
          x:0.5, y:2.2, w:9, h:2, align:'center',
          fontSize:36, bold:true, color:WHITE, breakLine:false });
        if(s.subtitulo)
          slide.addText(s.subtitulo, {
            x:1, y:4.5, w:8, h:0.8, align:'center',
            fontSize:16, color:GRAY });
        slide.addText(`📝 ${nota}`, {
          x:0.3, y:6.7, w:9.4, h:0.45, fontSize:10, color:'666688',
          align:'left', italic:true });
        break;

      case 'content':
        slide.addText(s.titulo, {
          x:0.3, y:0.3, w:9.4, h:0.7, fontSize:24, bold:true, color:COR });
        (s.topicos||[]).forEach((t,i)=>{
          slide.addText('▸  '+t, {
            x:0.4, y:1.25+i*1.0, w:9.2, h:0.85,
            fontSize:16, color:WHITE, fill:{color:'1e1c38'}, margin:8,
            line:{color:COR,width:2.5,dashType:'solid'} });
        });
        slide.addText(`📝 ${nota}`, {x:0.3,y:6.7,w:9.4,h:0.45,fontSize:10,color:'666688',italic:true});
        break;

      case 'two-column':
        slide.addText(s.titulo, {x:0.3,y:0.3,w:9.4,h:0.7,fontSize:24,bold:true,color:COR});
        slide.addShape(pptx.ShapeType.line,{x:5.08,y:1.1,w:0,h:5.3,line:{color:COR,width:1}});
        (s.coluna_esq||[]).forEach((t,i)=>
          slide.addText('• '+t,{x:0.4,y:1.2+i*1.05,w:4.5,h:0.9,fontSize:15,color:WHITE,fill:{color:'1e1c38'},margin:6}));
        (s.coluna_dir||[]).forEach((t,i)=>
          slide.addText('• '+t,{x:5.2,y:1.2+i*1.05,w:4.5,h:0.9,fontSize:15,color:WHITE,fill:{color:'1e1c38'},margin:6}));
        slide.addText(`📝 ${nota}`,{x:0.3,y:6.7,w:9.4,h:0.45,fontSize:10,color:'666688',italic:true});
        break;

      case 'highlight':
        slide.addText(s.titulo,{x:0.3,y:0.3,w:9.4,h:0.7,fontSize:24,bold:true,color:COR});
        slide.addText(s.destaque,{x:0.8,y:1.4,w:8.4,h:2,align:'center',
          fontSize:28,bold:true,color:WHITE,fill:{color:'1a183a'},
          line:{color:COR,width:2.5},margin:16});
        if(s.explicacao)
          slide.addText(s.explicacao,{x:1,y:3.8,w:8,h:1.2,align:'center',fontSize:15,color:GRAY});
        slide.addText(`📝 ${nota}`,{x:0.3,y:6.7,w:9.4,h:0.45,fontSize:10,color:'666688',italic:true});
        break;

      case 'activity':
        slide.addText('⚙️  '+s.titulo,{x:0.3,y:0.3,w:9.4,h:0.7,fontSize:24,bold:true,color:COR});
        if(s.enunciado)
          slide.addText(s.enunciado,{x:0.4,y:1.1,w:9.2,h:0.85,fontSize:15,color:WHITE,
            fill:{color:'1e1c38'},line:{color:COR,width:2.5},margin:10});
        (s.passos||[]).forEach((t,i)=>
          slide.addText(`${i+1}.  ${t}`,{x:0.4,y:2.1+i*0.9,w:9.2,h:0.8,
            fontSize:14,color:WHITE,fill:{color:'1a1836'},margin:8}));
        slide.addText(`📝 ${nota}`,{x:0.3,y:6.7,w:9.4,h:0.45,fontSize:10,color:'666688',italic:true});
        break;

      case 'references':
        slide.addText(s.titulo,{x:0.3,y:0.3,w:9.4,h:0.7,fontSize:24,bold:true,color:COR});
        (s.referencias||[]).forEach((t,i)=>
          slide.addText('📖  '+t,{x:0.4,y:1.2+i*0.85,w:9.2,h:0.75,
            fontSize:14,color:WHITE,fill:{color:'1e1c38'},margin:8}));
        slide.addText(`📝 ${nota}`,{x:0.3,y:6.7,w:9.4,h:0.45,fontSize:10,color:'666688',italic:true});
        break;
    }
  });

  pptx.writeFile({ fileName: `slides-${_slug(_slidesUc)}.pptx` });
}

/* ─────────────────────────────────────────────────────────────
   5. UTILITÁRIOS INTERNOS
   ───────────────────────────────────────────────────────────── */
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

/* ─────────────────────────────────────────────────────────────
   Exposição global (compatível com onclick= inline)
   ───────────────────────────────────────────────────────────── */
window.gerarSlides    = gerarSlides;
window.downloadSlides = downloadSlides;
window.downloadPptx   = downloadPptx;
