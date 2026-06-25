/* ============================================================
   DOCUMENT-ENGINE.JS — Motor definitivo de documentos Word
   Hub MQCT · SENAI Bahia

   Arquitetura:
   1) A BASE OFICIAL DA UC é a fonte da verdade.
   2) A IA pode enriquecer estratégias, avaliações e referências.
   3) A IA nunca pode apagar capacidades, conhecimentos ou aulas.
   4) Se a IA falhar, o documento continua completo pela Engine Pedagógica.
   ============================================================ */
(function () {
  'use strict';

  function esc(v) {
    return String(v == null ? '' : v)
      .replace(/&/g, '&amp;').replace(/</g, '&lt;')
      .replace(/>/g, '&gt;').replace(/"/g, '&quot;')
      .replace(/'/g, '&#039;');
  }

  function stripMd(v) {
    return String(v || '')
      .replace(/```[\s\S]*?```/g, m => m.replace(/```[a-z]*|```/gi, ''))
      .replace(/\*\*/g, '')
      .replace(/^#+\s*/gm, '')
      .replace(/^\s*[-*]\s+/gm, '')
      .trim();
  }

  function safeDate() { return new Date().toISOString().slice(0, 10); }

  function scalarText(item) {
    if (item == null) return '';
    if (typeof item === 'string' || typeof item === 'number') return String(item);
    if (typeof item === 'object') {
      if (item.codigo && item.texto) return `${item.codigo} — ${item.texto}`;
      if (item.id && item.texto) return `${item.id} — ${item.texto}`;
      return item.texto || item.descricao || item.nome || item.titulo || item.padrao || item.objeto || '';
    }
    return String(item || '');
  }

  function splitCurricularText(text) {
    const raw = String(text || '').replace(/\r/g, '\n').trim();
    if (!raw) return [];

    // Preserva listas já separadas por linhas/bullets.
    let parts = raw.split(/\n|•|\u2022|·/g).map(s => s.trim()).filter(Boolean);
    if (parts.length > 1) return parts;

    // Divide conteúdos numerados tipo "1 TEMA 1.1 Subtema 2 TEMA".
    const withBreaks = raw
      .replace(/\s+(\d+(?:\.\d+)*\s+[A-ZÁÉÍÓÚÂÊÔÃÕÇ][A-ZÁÉÍÓÚÂÊÔÃÕÇ0-9\s\-–:\/().,]{2,})/g, '\n$1')
      .split(/\n+/).map(s => s.trim()).filter(Boolean);
    if (withBreaks.length > 1) return withBreaks;

    // Divide macrotemas do plano quando vêm em uma única linha longa.
    if (raw.length > 240 && /[A-ZÁÉÍÓÚÂÊÔÃÕÇ][^:.]{3,}:/u.test(raw)) {
      const macro = raw
        .replace(/\.\s+([A-ZÁÉÍÓÚÂÊÔÃÕÇ][A-Za-zÁÉÍÓÚÂÊÔÃÕÇáéíóúâêôãõç0-9 /–—-]{3,}:)/g, '\n$1')
        .split(/\n+/).map(s => s.trim()).filter(Boolean);
      if (macro.length > 1) return macro;
    }

    // Divide por ponto e vírgula quando há sequência de conteúdos.
    if (raw.includes(';')) return raw.split(';').map(s => s.trim()).filter(Boolean);

    // Último recurso para conteúdos muito longos: agrupa frases em blocos menores.
    if (raw.length > 320) {
      const sentences = raw.split(/\.\s+/).map(s => s.trim()).filter(Boolean);
      if (sentences.length > 3) {
        const groups = [];
        for (let i = 0; i < sentences.length; i += 2) groups.push(sentences.slice(i, i + 2).join('. ') + '.');
        return groups;
      }
    }

    return [raw];
  }

  function cleanList(value) {
    const out = [];
    function push(v) {
      if (v == null) return;
      if (Array.isArray(v)) { v.forEach(push); return; }
      const txt = scalarText(v);
      splitCurricularText(txt).forEach(part => {
        const s = String(part || '').replace(/\s+/g, ' ').replace(/^[-–—•]\s*/, '').trim();
        if (!s) return;
        const n = s.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase();
        if (['nao informado','nao cadastrada','nao cadastrado','sem informacao','a definir','n/a','na'].includes(n)) return;
        if (n.includes('conteudos formativos conforme organizacao interna')) return;
        out.push(s);
      });
    }
    push(value);
    const seen = new Set();
    return out.filter(item => {
      const key = item.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase();
      if (seen.has(key)) return false;
      seen.add(key);
      return true;
    });
  }

  function objectArray(value) {
    if (!Array.isArray(value)) return [];
    return value.filter(v => v && typeof v === 'object' && !Array.isArray(v));
  }

  function extractJson(text) {
    const raw = String(text || '').trim();
    if (!raw) return null;
    const fenced = raw.match(/```(?:json)?\s*([\s\S]*?)```/i);
    const candidate = fenced ? fenced[1] : raw;
    try { return JSON.parse(candidate); } catch (e) {}
    const first = candidate.indexOf('{');
    const last = candidate.lastIndexOf('}');
    if (first >= 0 && last > first) {
      try { return JSON.parse(candidate.slice(first, last + 1)); } catch (e) {}
    }
    return null;
  }

  function section(text, names) {
    const src = String(text || '');
    for (const name of names) {
      const safe = String(name).replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
      const re = new RegExp(`(?:^|\\n)\\s*#{0,4}\\s*${safe}\\s*:?\\s*\\n([\\s\\S]*?)(?=\\n\\s*#{1,4}\\s*[A-ZÁÉÍÓÚÃÕÇ]|\\n\\s*[A-ZÁÉÍÓÚÃÕÇ /-]{4,}:\\s*$|$)`, 'i');
      const m = src.match(re);
      if (m) return m[1].trim();
    }
    return '';
  }

  function parseMarkdownTable(text) {
    const lines = String(text || '').split(/\r?\n/);
    const rows = [];
    for (const line of lines) {
      if (!line.includes('|')) continue;
      const cells = line.split('|').map(c => c.trim()).filter(Boolean);
      if (cells.length < 4) continue;
      if (cells.every(c => /^:?-{3,}:?$/.test(c))) continue;
      const joined = cells.join(' ').toLowerCase();
      if (joined.includes('capacidade') && joined.includes('conte')) continue;
      rows.push(cells);
    }
    return rows.map((r, i) => ({
      numero: r[0] || `Aula ${i + 1}`,
      capacidade: r[1] || '',
      habilidade: r[2] || '',
      conteudo: r[3] || '',
      estrategias: r[4] || '',
      recursos: r[5] || '',
      avaliacao: r[6] || ''
    }));
  }

  function officialArr(uc, keys) {
    if (!uc) return [];
    for (const k of keys) {
      const out = cleanList(uc[k]);
      if (out.length) return out;
    }
    return [];
  }

  function normalizeOfficialUC(uc) {
    const o = uc || {};
    let capacidades = officialArr(o, ['capacidades','capacidadesBasicas','capacidadesTecnicas','habilidadesCapacidades','subfuncoes']);
    if (!capacidades.length && Array.isArray(o.padroes)) {
      capacidades = cleanList(o.padroes.map(p => p && (p.capacidades || p.capacidadesTecnicas || p.capacidadesBasicas)).flat());
    }
    const conhecimentos = officialArr(o, ['conhecimentos','objetosConhecimento','objetosDeConhecimento','conteudos','conteudosFormativos']);
    let habilidades = officialArr(o, ['padroes','padroesDesempenho','criteriosDesempenho']);
    if (!habilidades.length) habilidades = officialArr(o, ['habilidades']);
    const socioemocionais = officialArr(o, ['socioemocionais','capacidadesSocioemocionais','atitudes']);
    const referencias = officialArr(o, ['referencias','referenciasBasicas','bibliografia']);
    const ambientes = cleanList(o.ambientes || o.ambientesPedagogicos);
    const equipamentos = cleanList(o.equipamentos || o.maquinasEquipamentos || o.recursos);
    return {
      id: o.id || o.codigo || '',
      codigo: o.codigo || o.id || '',
      nome: o.nome || '',
      ch: o.ch || o.cargaHoraria || '',
      modulo: o.modulo || o.moduloNome || '',
      objetivo: o.objetivo || o.objetivoGeral || '',
      capacidades,
      conhecimentos,
      habilidades,
      socioemocionais,
      referencias,
      recursos: [...ambientes, ...equipamentos].join(', ')
    };
  }

  function inferLessonCount(meta, official) {
    const byMeta = Number(meta && (meta.nAulas || meta.qtdAulas));
    if (Number.isFinite(byMeta) && byMeta > 0) return Math.round(byMeta);
    const total = Number(meta && (meta.totalHoras || meta.total || meta.chTotal)) || Number(official && official.ch) || (Number(meta?.cht||0)+Number(meta?.chp||0));
    const chDiaRaw = String(meta?.chDia || meta?.chPorAula || '4').replace(/[^\d.]/g,'');
    const chDia = Number(chDiaRaw) || 4;
    if (total > 0) return Math.max(1, Math.ceil(total / chDia));
    return 10;
  }

  function lessonStrategies(area, aula, socio) {
    const s = socio ? ` Integração socioemocional: ${socio}.` : '';
    return `Abertura: retomada do encontro anterior, contextualização do tema e apresentação de uma situação-problema da área de ${area}. Desenvolvimento: mediação docente com demonstração, estudo guiado e atividade prática ou aplicada relacionada ao conteúdo oficial. Fechamento: socialização das evidências, feedback formativo, registro dos aprendizados e encaminhamento da próxima aula.${s}`;
  }

  function buildPedagogicalPlan(ctx) {
    const n = inferLessonCount(ctx, { ch: ctx.totalHoras || ctx.chPratica || ctx.chTeorica });
    const caps = cleanList(ctx.capacidades);
    const cons = cleanList(ctx.conhecimentos);
    const habs = cleanList(ctx.habilidades);
    const socios = cleanList(ctx.socioemocionais);
    const chunkSize = Math.max(1, Math.ceil(Math.max(cons.length, 1) / n));
    const aulas = [];

    for (let i = 0; i < n; i++) {
      const cap = caps.length ? caps[i % caps.length] : '';
      const hab = habs.length ? habs[i % habs.length] : (cap ? cap.split('—').shift().trim() : 'N/A');
      let bloco = cons.slice(i * chunkSize, (i + 1) * chunkSize);
      if (!bloco.length && cons.length) bloco = [cons[i % cons.length]];
      if (!bloco.length && cap) bloco = [cap.replace(/^C\d+\s*[–—-]\s*/i, '')];
      const conteudo = bloco.join('; ') || ctx.uc || 'Conteúdo da unidade curricular';
      aulas.push({
        numero: `Aula ${i + 1}`,
        capacidade: cap,
        habilidade: hab || 'N/A',
        conteudo,
        estrategias: lessonStrategies(ctx.area || 'formação técnica', i + 1, socios[i % Math.max(socios.length, 1)] || ''),
        recursos: ctx.recursos || 'Sala de aula/laboratório, computador, projetor, quadro, materiais didáticos e recursos indicados no plano de curso.',
        avaliacao: 'Avaliação formativa por participação, resolução de atividade, evidência prática/documental e alinhamento aos critérios da capacidade trabalhada.'
      });
    }
    return aulas;
  }

  function normalizeAulasFromAI(data) {
    let aulas = objectArray(data && data.aulas).map((a, i) => ({
      numero: a.numero || a.n || `Aula ${i + 1}`,
      capacidade: scalarText(a.capacidade || a.capacidades || ''),
      habilidade: scalarText(a.habilidade || a.habilidades || a.padrao || a.padroes || ''),
      conteudo: scalarText(a.conteudo || a.conteúdos || a.tema || a.temaAula || ''),
      estrategias: scalarText(a.estrategias || a.estratégias || a.metodologia || a.metodologiaPratica || ''),
      recursos: scalarText(a.recursos || a.recursosDidaticos || a.materiais || ''),
      avaliacao: scalarText(a.avaliacao || a.avaliação || a.avaliacaoPratica || '')
    }));

    if (!aulas.length && Array.isArray(data && data.aulas)) {
      aulas = data.aulas.filter(x => typeof x === 'string').map((s, i) => ({
        numero: `Aula ${i + 1}`, capacidade: '', habilidade: '', conteudo: s, estrategias: '', recursos: '', avaliacao: ''
      }));
    }

    return aulas.filter(a => {
      const meaningful = [a.capacidade, a.habilidade, a.conteudo, a.estrategias, a.recursos, a.avaliacao]
        .map(x => String(x || '').trim()).join('');
      return meaningful && meaningful !== 'N/A';
    });
  }

  function mergeLessons(base, ai) {
    const out = base.map((b, i) => {
      const a = ai[i] || {};
      return {
        numero: b.numero,
        capacidade: b.capacidade || a.capacidade || '',
        habilidade: b.habilidade || a.habilidade || 'N/A',
        conteudo: b.conteudo || a.conteudo || '',
        estrategias: a.estrategias && a.estrategias.length > 30 ? a.estrategias : b.estrategias,
        recursos: a.recursos && a.recursos.length > 5 ? a.recursos : b.recursos,
        avaliacao: a.avaliacao && a.avaliacao.length > 10 ? a.avaliacao : b.avaliacao
      };
    });
    return out;
  }

  function normalizePlanoAula(input, meta) {
    const data = input && typeof input === 'object' ? input : {};
    const m = meta || {};
    const official = normalizeOfficialUC(m.officialUC || m.ucOficial || data.officialUC || {});

    const ctx = {
      tipo: 'plano-aula',
      area: data.area || m.area || 'Área Técnica',
      curso: data.curso || m.curso || '',
      uc: data.uc || m.uc || [official.codigo, official.nome].filter(Boolean).join(' — ') || 'Unidade Curricular',
      docente: data.docente || m.docente || '______',
      turma: data.turma || m.turma || '______',
      data: data.data || m.data || safeDate(),
      chTeorica: data.chTeorica ?? data.cht ?? m.cht ?? 0,
      chPratica: data.chPratica ?? data.chp ?? m.chp ?? official.ch ?? 0,
      total: data.total ?? m.total ?? (official.ch ? `${official.ch}h` : ''),
      totalHoras: Number(m.totalHoras || String(m.total || '').replace(/[^\d.]/g,'')) || Number(official.ch || 0) || 0,
      chDia: m.chDia || m.chPorAula || '4h',
      nAulas: m.nAulas || m.qtdAulas,
      objetivo: data.objetivo || data.objetivos || m.objetivo || official.objetivo || '',
      capacidades: cleanList(data.capacidades).length ? cleanList(data.capacidades) : official.capacidades,
      conhecimentos: cleanList(data.conhecimentos).length ? cleanList(data.conhecimentos) : official.conhecimentos,
      habilidades: cleanList(data.habilidades || data.padroesDesempenho || data.padroes).length ? cleanList(data.habilidades || data.padroesDesempenho || data.padroes) : official.habilidades,
      socioemocionais: cleanList(data.socioemocionais || data.capacidadesSocioemocionais).length ? cleanList(data.socioemocionais || data.capacidadesSocioemocionais) : official.socioemocionais,
      avaliacoes: cleanList(data.avaliacoes || data.criteriosAvaliacao || data.criterios),
      referencias: cleanList(data.referencias).length ? cleanList(data.referencias) : official.referencias,
      observacoes: data.observacoes || m.observacoes || '',
      recursos: data.recursos || m.recursos || official.recursos || ''
    };

    if (!ctx.objetivo) {
      ctx.objetivo = 'Desenvolver as capacidades previstas na unidade curricular, articulando conhecimentos, práticas e evidências de aprendizagem conforme o Plano de Curso SENAI DR-BA.';
    }

    const baseLessons = buildPedagogicalPlan(ctx);
    const aiLessons = normalizeAulasFromAI(data);
    ctx.aulas = mergeLessons(baseLessons, aiLessons);

    if (!ctx.avaliacoes.length) {
      ctx.avaliacoes = [
        'Avaliação diagnóstica para identificar conhecimentos prévios e ajustar a mediação docente.',
        'Avaliação formativa durante atividades práticas, discussões, registros e entregas parciais.',
        'Avaliação somativa por evidências, produto final, exercício/prova ou demonstração prática, conforme as capacidades da UC.'
      ];
    }

    if (!ctx.referencias.length) {
      ctx.referencias = [
        'SENAI/DR-BA. Plano de Curso da habilitação técnica correspondente.',
        'Materiais didáticos e referências técnicas indicadas para a unidade curricular.'
      ];
    }

    return ctx;
  }

  function fromGeminiText(text, meta) {
    const json = extractJson(text);
    if (json) return normalizePlanoAula(json, meta);

    const objetivo = stripMd(section(text, ['OBJETIVOS?', 'OBJETIVO']));
    const capacidades = cleanList(section(text, ['CAPACIDADES']));
    const conhecimentos = cleanList(section(text, ['CONHECIMENTOS']));
    const habilidades = cleanList(section(text, ['HABILIDADES', 'PADRÕES DE DESEMPENHO', 'PADROES DE DESEMPENHO']));
    const avaliacoes = cleanList(section(text, ['AVALIAÇÕES', 'AVALIACOES', 'CRITÉRIOS DE AVALIAÇÃO', 'CRITERIOS DE AVALIACAO']));
    const referencias = cleanList(section(text, ['REFERÊNCIAS', 'REFERENCIAS']));
    const aulas = parseMarkdownTable(text);
    return normalizePlanoAula({ objetivo, capacidades, conhecimentos, habilidades, avaliacoes, referencias, aulas }, meta);
  }

  function listHtml(items, emptyText) {
    const clean = cleanList(items);
    if (!clean.length) return `<p>${esc(emptyText || 'Não informado.')}</p>`;
    return `<ul>${clean.map(i => `<li>${esc(stripMd(i))}</li>`).join('')}</ul>`;
  }

  function br(v) { return esc(stripMd(v)).replace(/\n/g, '<br>'); }

  function aulasRows(aulas) {
    const rows = Array.isArray(aulas) ? aulas : [];
    if (!rows.length) return '<tr><td colspan="7">Aulas não informadas.</td></tr>';
    return rows.map((a, i) => `
      <tr>
        <td>${esc(a.numero || `Aula ${i + 1}`)}</td>
        <td>${br(a.capacidade || '')}</td>
        <td>${br(a.habilidade || 'N/A')}</td>
        <td>${br(a.conteudo || '')}</td>
        <td>${br(a.estrategias || '')}</td>
        <td>${br(a.recursos || '')}</td>
        <td>${br(a.avaliacao || '')}</td>
      </tr>`).join('');
  }

  function renderPlanoAulaWord(plano, opts) {
    const p = normalizePlanoAula(plano, opts || {});
    const accent = (opts && opts.accent) || '#00695C';
    const light = (opts && opts.light) || '#FFFBF2';
    return `<!DOCTYPE html><html><head><meta charset="UTF-8">
<!--[if gte mso 9]><xml>
<w:WordDocument xmlns:w="urn:schemas-microsoft-com:office:word"><w:View>Print</w:View></w:WordDocument>
</xml><![endif]-->
<style>
  @page WordSection1{size:841.9pt 595.3pt;mso-page-orientation:landscape;margin:1.4cm 1.2cm 1.4cm 1.2cm;mso-header-margin:0.7cm;mso-footer-margin:0.7cm}
  div.WordSection1{page:WordSection1}
  body{font-family:Arial,sans-serif;font-size:10.5pt;line-height:1.35;color:#072A24}
  h1{font-size:16pt;color:${accent};border-bottom:2px solid ${accent};padding-bottom:6px;margin:14px 0 8px}
  h2{font-size:12.5pt;color:${accent};margin:12px 0 6px;border-bottom:1px solid #D9C8A8;padding-bottom:3px}
  h3{font-size:11pt;color:${accent};margin:9px 0 4px}
  p{margin:3px 0 7px}
  table{border-collapse:collapse;width:100%;margin:8px 0 12px;font-size:8.8pt;table-layout:fixed}
  td,th{border:1px solid #D9C8A8;padding:5px 6px;vertical-align:top;word-wrap:break-word}
  th{background:${accent};color:#fff;font-weight:bold;text-align:center}
  tr:nth-child(even) td{background:${light}}
  ul{margin:5px 0 10px 18px;padding:0}
  li{margin:3px 0}
  .header-box{background:${accent};color:#fff;padding:10px 14px;margin-bottom:12px;font-size:11pt;font-weight:bold}
  .tabela-aulas th:nth-child(1),.tabela-aulas td:nth-child(1){width:7%;text-align:center}
  .tabela-aulas th:nth-child(2),.tabela-aulas td:nth-child(2){width:13%}
  .tabela-aulas th:nth-child(3),.tabela-aulas td:nth-child(3){width:8%;text-align:center}
  .tabela-aulas th:nth-child(4),.tabela-aulas td:nth-child(4){width:20%}
  .tabela-aulas th:nth-child(5),.tabela-aulas td:nth-child(5){width:27%}
  .tabela-aulas th:nth-child(6),.tabela-aulas td:nth-child(6){width:13%}
  .tabela-aulas th:nth-child(7),.tabela-aulas td:nth-child(7){width:12%}
</style></head><body>
<div class="WordSection1">
<div class="header-box">SENAI BAHIA · MQCT · ${esc(p.area)} · ${esc(p.curso)}</div>
<h1>PLANO DE AULA — SENAI DR-BA</h1>
<table><thead><tr><th>CURSO</th><th>UC</th><th>DOCENTE</th><th>TURMA</th><th>DATA</th></tr></thead>
<tbody><tr><td>${esc(p.area)}</td><td>${esc(p.uc)}</td><td>${esc(p.docente)}</td><td>${esc(p.turma)}</td><td>${esc(p.data)}</td></tr></tbody></table>
<table><thead><tr><th>CH TEÓRICA</th><th>CH PRÁTICA</th><th>TOTAL</th></tr></thead>
<tbody><tr><td>${esc(p.chTeorica)}h</td><td>${esc(p.chPratica)}h</td><td>${esc(p.total || (Number(p.chTeorica || 0) + Number(p.chPratica || 0)) + 'h')}</td></tr></tbody></table>

<h2>OBJETIVO</h2>
<p>${br(p.objetivo)}</p>

<h2>CAPACIDADES</h2>
${listHtml(p.capacidades, 'Não há capacidades informadas.')}

<h2>CONHECIMENTOS</h2>
${listHtml(p.conhecimentos, 'Conhecimentos não informados.')}

<h2>PADRÕES DE DESEMPENHO / HABILIDADES</h2>
${listHtml(p.habilidades, 'Não há padrões de desempenho oficiais específicos para esta UC.')}

<h2>CAPACIDADES SOCIOEMOCIONAIS</h2>
${listHtml(p.socioemocionais, 'Não há capacidades socioemocionais informadas.')}

<h2>TABELA DE AULAS</h2>
<table class="tabela-aulas"><thead><tr><th>Nº</th><th>Capacidade</th><th>Hab.</th><th>Conteúdo</th><th>Estratégias</th><th>Recursos</th><th>Avaliação</th></tr></thead><tbody>
${aulasRows(p.aulas)}
</tbody></table>

<h2>AVALIAÇÕES</h2>
${listHtml(p.avaliacoes)}

<h2>REFERÊNCIAS</h2>
${listHtml(p.referencias)}

${p.observacoes ? `<h2>OBSERVAÇÕES</h2><p>${br(p.observacoes)}</p>` : ''}
</div>
</body></html>`;
  }

  function renderPreview(plano, opts) {
    const p = normalizePlanoAula(plano, opts || {});
    return `
      <div class="doc-preview">
        <h2>📄 Plano de Aula — padrão SENAI</h2>
        <p><b>UC:</b> ${esc(p.uc)} · <b>Docente:</b> ${esc(p.docente)} · <b>Data:</b> ${esc(p.data)}</p>
        <p><b>CH:</b> ${esc(p.chTeorica)}h teórica + ${esc(p.chPratica)}h prática · <b>Aulas:</b> ${p.aulas.length}</p>
        <h3>Objetivo</h3><p>${br(p.objetivo)}</p>
        <h3>Capacidades</h3>${listHtml(p.capacidades)}
        <h3>Conhecimentos</h3>${listHtml(p.conhecimentos)}
        <h3>Primeira aula</h3><p>${p.aulas[0] ? br(p.aulas[0].conteudo) : 'Sem aula.'}</p>
      </div>`;
  }

  function buildOfficialContext(officialUC) {
    const u = normalizeOfficialUC(officialUC || {});
    if (!u.nome && !u.capacidades.length && !u.conhecimentos.length) return '';
    return `
BASE OFICIAL DA UNIDADE CURRICULAR:
Código/Nome: ${[u.codigo, u.nome].filter(Boolean).join(' — ')}
Módulo: ${u.modulo || ''}
Carga horária: ${u.ch || ''}h
Objetivo: ${u.objetivo || ''}

CAPACIDADES OFICIAIS:
${u.capacidades.map((x,i)=>`${i+1}. ${x}`).join('\n')}

CONHECIMENTOS OFICIAIS:
${u.conhecimentos.map((x,i)=>`${i+1}. ${x}`).join('\n')}

PADRÕES/HABILIDADES OFICIAIS:
${u.habilidades.map((x,i)=>`${i+1}. ${x}`).join('\n')}

SOCIOEMOCIONAIS:
${u.socioemocionais.map((x,i)=>`${i+1}. ${x}`).join('\n')}

RECURSOS/AMBIENTES:
${u.recursos || ''}`;
  }

  function buildPlanoAulaPrompt(meta, officialContext) {
    const m = meta || {};
    const officialText = typeof officialContext === 'string' ? officialContext : buildOfficialContext(m.officialUC || m.ucOficial);
    return `${m.base || ''}

${officialText}

TAREFA: Gere enriquecimento para um PLANO DE AULA COMPLETO no padrão SENAI DR-BA.

REGRAS OBRIGATÓRIAS:
- Responda SOMENTE JSON válido. Não use Markdown. Não use bloco de código.
- Não gere HTML.
- Use a base oficial da UC acima.
- Não deixe aulas vazias.
- Gere exatamente ${m.nAulas || m.qtdAulas || 'a quantidade solicitada'} aulas.
- Cada aula deve ter capacidade, habilidade/padrão, conteúdo, estratégias, recursos e avaliação.
- As capacidades e conhecimentos oficiais não podem ser removidos nem substituídos.

JSON esperado:
{
  "objetivo": "Objetivo alinhado à UC.",
  "capacidades": ["..."],
  "conhecimentos": ["..."],
  "habilidades": ["..."],
  "socioemocionais": ["..."],
  "aulas": [
    {
      "numero": "Aula 1",
      "capacidade": "capacidade oficial relacionada",
      "habilidade": "padrão/habilidade relacionada ou N/A",
      "conteudo": "conteúdo oficial trabalhado",
      "estrategias": "abertura, desenvolvimento e fechamento com metodologia ativa",
      "recursos": "recursos/ambientes/equipamentos",
      "avaliacao": "evidências e critérios de avaliação"
    }
  ],
  "avaliacoes": ["..."],
  "referencias": ["..."]
}

Dados do formulário:
Área: ${m.area || ''}
Curso: ${m.curso || ''}
UC: ${m.uc || ''}
Docente: ${m.docente || ''}
Turma: ${m.turma || ''}
Data: ${m.data || ''}
CH Teórica: ${m.cht || 0}h
CH Prática: ${m.chp || 0}h
Total: ${m.total || ''}
Quantidade de aulas: ${m.nAulas || ''} aula(s) de ${m.chDia || '4h'}
Modelo: ${m.modelo || ''}
Observações: ${m.observacoes || ''}`;
  }

  function downloadHtmlAsDoc(html, filename) {
    const blob = new Blob(['\ufeff' + html], { type: 'application/msword;charset=utf-8' });
    const a = document.createElement('a');
    a.href = URL.createObjectURL(blob);
    a.download = `${filename || 'Documento'}_${safeDate()}.doc`;
    document.body.appendChild(a);
    a.click();
    a.remove();
  }

  // ---------- Motor genérico para demais documentos didáticos ----------
  const DOC_SCHEMAS = {
    'situacao-aprendizagem': { title:'SITUAÇÃO DE APRENDIZAGEM — MSEP', sections:[['titulo','Título'],['contexto','Contexto / Situação-Problema'],['desafio','Desafio'],['competencias','Competências / Capacidades'],['etapas','Etapas da Situação de Aprendizagem'],['evidencias','Evidências de Aprendizagem'],['criterios','Critérios de Avaliação'],['recursos','Recursos Didáticos'],['referencias','Referências']] },
    'objeto-aprendizagem': { title:'OBJETO DE APRENDIZAGEM — SENAI', sections:[['apresentacao','Apresentação'],['objetivos','Objetivos de Aprendizagem'],['conteudos','Conteúdo'],['saibaMais','Saiba Mais'],['atividades','Atividades de Fixação'],['glossario','Glossário'],['referencias','Referências']] },
    'roteiro-praticas': { title:'ROTEIRO DE PRÁTICAS — SENAI', sections:[['titulo','Título da Prática'],['objetivos','Objetivos'],['fundamentacao','Fundamentação Técnica'],['materiais','Materiais, Equipamentos e EPIs'],['procedimentos','Procedimentos'],['pontosControle','Pontos de Controle'],['resultados','Resultados Esperados'],['descarte','Descarte / Segurança / Meio Ambiente'],['relatorio','Relatório do Aluno'],['referencias','Referências']] },
    'avaliacao-prova': { title:'AVALIAÇÃO / PROVA — SENAI', sections:[['cabecalho','Cabeçalho'],['instrucoes','Instruções'],['questoesObjetivas','Questões Objetivas'],['questoesDiscursivas','Questões Discursivas'],['criterios','Critérios de Avaliação'],['gabarito','Gabarito / Rubrica'],['referencias','Referências']] },
    'material-personalizado': { title:'MATERIAL DIDÁTICO PERSONALIZADO — SENAI', sections:[['apresentacao','Apresentação'],['objetivos','Objetivos'],['conteudo','Conteúdo'],['orientacoes','Orientações de Uso'],['atividades','Atividades / Aplicações'],['avaliacao','Avaliação / Evidências'],['referencias','Referências']] }
  };

  function normalizeGenericDocument(input, type, meta) {
    const schema = DOC_SCHEMAS[type] || DOC_SCHEMAS['material-personalizado'];
    const data = input && typeof input === 'object' ? input : {};
    const m = meta || {};
    const official = normalizeOfficialUC(m.officialUC || m.ucOficial || {});
    const doc = {
      tipo: type || 'material-personalizado',
      titulo: data.titulo || data.title || schema.title,
      area: data.area || m.area || 'Área Técnica',
      curso: data.curso || m.curso || '',
      uc: data.uc || m.uc || official.nome || '',
      docente: data.docente || m.docente || '',
      turma: data.turma || m.turma || '',
      data: data.data || m.data || safeDate(),
      observacoes: data.observacoes || m.observacoes || '',
      sections: []
    };

    schema.sections.forEach(pair => {
      const key = pair[0], label = pair[1];
      let value = data[key] ?? data[label] ?? data[label.toLowerCase()] ?? '';
      if (!value && key === 'competencias') value = official.capacidades;
      if (!value && (key === 'conteudos' || key === 'conteudo')) value = official.conhecimentos;
      if (!value && key === 'criterios') value = data.criteriosAvaliacao || data.avaliacao || official.habilidades;
      if (!value && key === 'recursos') value = official.recursos;
      doc.sections.push({ key, title: label, content: value });
    });
    return doc;
  }

  function fromAnyText(text, type, meta) {
    const json = extractJson(text);
    if (json) return normalizeGenericDocument(json, type, meta);
    const schema = DOC_SCHEMAS[type] || DOC_SCHEMAS['material-personalizado'];
    const data = {};
    schema.sections.forEach(pair => {
      const key = pair[0], label = pair[1];
      data[key] = section(text, [label, key]) || '';
    });
    const hasAny = Object.values(data).some(v => String(v || '').trim());
    if (!hasAny) data.conteudo = stripMd(text);
    return normalizeGenericDocument(data, type, meta);
  }

  function renderWordDocument(doc, opts) {
    const d = normalizeGenericDocument(doc, doc?.tipo || opts?.type, opts || {});
    const accent = opts?.accent || '#00695C';
    const body = d.sections.map(s => `<h2>${esc(s.title)}</h2>${Array.isArray(s.content) ? listHtml(s.content) : `<p>${br(s.content || 'Conteúdo estruturado a partir da base oficial da UC.')}</p>`}`).join('\n');
    return `<!DOCTYPE html><html><head><meta charset="UTF-8"><style>
      @page WordSection1{size:841.9pt 595.3pt;mso-page-orientation:landscape;margin:1.4cm 1.2cm}
      div.WordSection1{page:WordSection1}
      body{font-family:Arial,sans-serif;font-size:10.5pt;color:#072A24}
      h1{font-size:16pt;color:${accent};border-bottom:2px solid ${accent};padding-bottom:6px}
      h2{font-size:12.5pt;color:${accent};border-bottom:1px solid #D9C8A8;padding-bottom:3px}
      table{border-collapse:collapse;width:100%;font-size:9pt}td,th{border:1px solid #D9C8A8;padding:5px}th{background:${accent};color:#fff}
      .header-box{background:${accent};color:#fff;padding:10px 14px;margin-bottom:12px;font-weight:bold}
      </style></head><body><div class="WordSection1">
      <div class="header-box">SENAI BAHIA · MQCT · ${esc(d.area)} · ${esc(d.curso)}</div>
      <h1>${esc(d.titulo)}</h1>
      <table><thead><tr><th>UC</th><th>DOCENTE</th><th>TURMA</th><th>DATA</th></tr></thead><tbody><tr><td>${esc(d.uc)}</td><td>${esc(d.docente)}</td><td>${esc(d.turma)}</td><td>${esc(d.data)}</td></tr></tbody></table>
      ${body}
      ${d.observacoes ? `<h2>OBSERVAÇÕES</h2><p>${br(d.observacoes)}</p>` : ''}
      </div></body></html>`;
  }

  function renderGenericPreview(doc, opts) {
    const d = normalizeGenericDocument(doc, doc?.tipo || opts?.type, opts || {});
    return `<div class="doc-preview"><h2>📄 ${esc(d.titulo)}</h2><p><b>UC:</b> ${esc(d.uc)}</p><p>Documento formatado no padrão Word SENAI.</p></div>`;
  }

  function buildGenericPrompt(type, meta, officialContext) {
    const schema = DOC_SCHEMAS[type] || DOC_SCHEMAS['material-personalizado'];
    return `${meta?.base || ''}

${officialContext || buildOfficialContext(meta?.officialUC || meta?.ucOficial)}

TAREFA: Gere ${schema.title} em JSON válido, sem Markdown e sem HTML.
Use exclusivamente a base oficial da UC. Seções esperadas: ${schema.sections.map(s=>s[1]).join(', ')}.
UC: ${meta?.uc || ''}
Observações: ${meta?.observacoes || ''}`;
  }

  window.DocumentEngine = {
    extractJson,
    normalizePlanoAula,
    fromGeminiText,
    renderPlanoAulaWord,
    renderPreview,
    buildPlanoAulaPrompt,
    buildOfficialContext,
    downloadHtmlAsDoc,
    fromAnyText,
    renderWordDocument,
    renderGenericPreview,
    buildGenericPrompt,
    DOC_SCHEMAS,
    _normalizeOfficialUC: normalizeOfficialUC,
    _buildPedagogicalPlan: buildPedagogicalPlan
  };
})();
