/* ============================================================
   DOCUMENT-ENGINE.JS — Motor único de documentos Word
   Hub MQCT · SENAI Bahia

   Regra de arquitetura:
   - A IA NUNCA deve ser salva diretamente como .doc.
   - A IA gera dados estruturados (JSON) ou texto que é normalizado.
   - Este motor renderiza sempre HTML compatível com Microsoft Word.
   - Vale para Química, Segurança, Alimentos e áreas futuras.
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
      .replace(/\*\*/g, '')
      .replace(/^#+\s*/gm, '')
      .replace(/^\s*[-*]\s+/gm, '')
      .trim();
  }

  function arr(v) {
    if (!v) return [];
    if (Array.isArray(v)) return v.map(x => typeof x === 'string' ? x : (x?.texto || x?.descricao || x?.titulo || JSON.stringify(x))).filter(Boolean);
    if (typeof v === 'string') {
      return v.split(/\n|•|\u2022/g)
        .map(s => s.replace(/^\s*[-*]\s*/, '').trim())
        .filter(Boolean);
    }
    return [String(v)];
  }

  function safeDate() {
    return new Date().toISOString().slice(0, 10);
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

  function parseMarkdownTable(text) {
    const lines = String(text || '').split(/\r?\n/);
    const rows = [];
    let inTable = false;
    for (const line of lines) {
      if (line.includes('|')) {
        const cells = line.split('|').map(c => c.trim()).filter(Boolean);
        if (cells.length >= 4 && !cells.every(c => /^:?-+:?$/.test(c))) {
          inTable = true;
          if (!cells[0].toLowerCase().includes('nº') && !cells[0].toLowerCase().includes('tema da aula')) {
            rows.push(cells);
          }
        }
      } else if (inTable) {
        break;
      }
    }
    return rows.slice(0, 30).map((r, i) => ({
      numero: r[0] || `Aula ${i + 1}`,
      capacidade: '',
      habilidade: '',
      conteudo: r[1] || '',
      estrategias: r[2] || '',
      recursos: r[3] || '',
      avaliacao: r[4] || ''
    }));
  }

  function section(text, names) {
    const src = String(text || '');
    for (const name of names) {
      const re = new RegExp(`(?:^|\\n)\\s*#{0,3}\\s*${name}\\s*\\n([\\s\\S]*?)(?=\\n\\s*#{1,3}\\s*[A-ZÁÉÍÓÚÃÕÇ]|\\n\\s*---|$)`, 'i');
      const m = src.match(re);
      if (m) return m[1].trim();
    }
    return '';
  }

  function curricularItemText(item) {
    if (item == null) return '';
    if (typeof item === 'string') return item;
    return item.codigo && item.texto ? `${item.codigo} — ${item.texto}` :
      (item.codigo && item.descricao ? `${item.codigo} — ${item.descricao}` :
      (item.texto || item.descricao || item.nome || item.titulo || String(item)));
  }

  function officialArr(uc, keys) {
    if (!uc) return [];
    for (const k of keys) {
      const v = uc[k];
      const out = arr(v).map(curricularItemText).filter(Boolean);
      if (out.length) return out;
    }
    return [];
  }

  function generateFallbackAulas(ctx, qtd, chDia) {
    const capacidades = arr(ctx.capacidades);
    const conhecimentos = arr(ctx.conhecimentos);
    const habilidades = arr(ctx.habilidades);
    const socio = arr(ctx.socioemocionais);
    const n = Math.max(1, Number(qtd || 0) || Math.min(Math.max(conhecimentos.length || capacidades.length || 1, 1), 12));
    const aulas = [];
    for (let i = 0; i < n; i++) {
      const cap = capacidades[i % Math.max(capacidades.length, 1)] || '';
      const hab = habilidades[i % Math.max(habilidades.length, 1)] || '';
      const cont = conhecimentos[i % Math.max(conhecimentos.length, 1)] || cap || ctx.uc || 'Tema da UC';
      const socioTxt = socio.length ? ` Integração socioemocional: ${socio[i % socio.length]}.` : '';
      aulas.push({
        numero: `Aula ${i + 1}`,
        capacidade: cap,
        habilidade: hab || 'N/A',
        conteudo: cont,
        estrategias: `Abertura: contextualização do tema com situação-problema. Desenvolvimento: atividade orientada com aplicação prática do conteúdo oficial da UC. Fechamento: socialização das evidências, feedback e registro de aprendizagem.${socioTxt}`,
        recursos: (ctx.recursos || '').trim() || 'Sala/laboratório, projetor, computador, materiais didáticos e recursos indicados no plano de curso.',
        avaliacao: 'Observação processual, entrega da atividade, participação, qualidade técnica e evidências de aprendizagem.'
      });
    }
    return aulas;
  }

  function normalizePlanoAula(input, meta) {
    const data = input && typeof input === 'object' ? input : {};
    const m = meta || {};
    const official = m.officialUC || m.ucOficial || {};

    const officialCapacidades = officialArr(official, ['capacidades', 'capacidadesBasicas', 'capacidadesTecnicas', 'habilidadesCapacidades']);
    const officialConhecimentos = officialArr(official, ['conhecimentos', 'objetosConhecimento', 'objetosDeConhecimento']);
    const officialHabilidades = officialArr(official, ['padroes', 'padroesDesempenho', 'habilidades', 'criteriosDesempenho']);
    const officialSocio = officialArr(official, ['socioemocionais', 'capacidadesSocioemocionais']);
    const officialReferencias = officialArr(official, ['referencias', 'referenciasBasicas', 'bibliografia']);

    let aulas = arr(data.aulas).map((a, i) => {
      if (typeof a === 'string') {
        return { numero: `Aula ${i + 1}`, capacidade: '', habilidade: '', conteudo: a, estrategias: '', recursos: '', avaliacao: '' };
      }
      return {
        numero: a.numero || a.n || `Aula ${i + 1}`,
        capacidade: a.capacidade || a.capacidades || '',
        habilidade: a.habilidade || a.habilidades || a.padrao || '',
        conteudo: a.conteudo || a.tema || a.temaAula || '',
        estrategias: a.estrategias || a.metodologia || a.metodologiaPratica || '',
        recursos: a.recursos || a.recursosDidaticos || '',
        avaliacao: a.avaliacao || a.avaliacaoPratica || ''
      };
    });

    const ctx = {
      tipo: 'plano-aula',
      area: data.area || m.area || 'Área Técnica',
      curso: data.curso || m.curso || '',
      uc: data.uc || m.uc || official.nome || '',
      docente: data.docente || m.docente || '______',
      turma: data.turma || m.turma || '______',
      data: data.data || m.data || safeDate(),
      chTeorica: data.chTeorica ?? data.cht ?? m.cht ?? 0,
      chPratica: data.chPratica ?? data.chp ?? m.chp ?? official.ch ?? 0,
      total: data.total ?? m.total ?? (official.ch ? `${official.ch}h` : ''),
      objetivo: data.objetivo || data.objetivos || m.objetivo || official.objetivo || '',
      capacidades: arr(data.capacidades).length ? arr(data.capacidades) : officialCapacidades,
      conhecimentos: arr(data.conhecimentos).length ? arr(data.conhecimentos) : officialConhecimentos,
      habilidades: arr(data.habilidades || data.padroesDesempenho || data.padroes).length ? arr(data.habilidades || data.padroesDesempenho || data.padroes) : officialHabilidades,
      socioemocionais: arr(data.socioemocionais || data.capacidadesSocioemocionais).length ? arr(data.socioemocionais || data.capacidadesSocioemocionais) : officialSocio,
      aulas,
      avaliacoes: arr(data.avaliacoes || data.criteriosAvaliacao || data.criterios),
      referencias: arr(data.referencias).length ? arr(data.referencias) : officialReferencias,
      observacoes: data.observacoes || m.observacoes || '',
      recursos: arr(official.equipamentos || official.ambientes).join(', ')
    };

    if (!ctx.objetivo) {
      ctx.objetivo = 'Desenvolver as capacidades previstas na unidade curricular, articulando conhecimentos, práticas e evidências de aprendizagem conforme o Plano de Curso SENAI DR-BA.';
    }

    if (!ctx.aulas.length) {
      ctx.aulas = generateFallbackAulas(ctx, m.nAulas || m.qtdAulas, m.chDia);
    } else {
      ctx.aulas = ctx.aulas.map((a, i) => ({
        numero: a.numero || `Aula ${i + 1}`,
        capacidade: a.capacidade || ctx.capacidades[i % Math.max(ctx.capacidades.length, 1)] || '',
        habilidade: a.habilidade || ctx.habilidades[i % Math.max(ctx.habilidades.length, 1)] || 'N/A',
        conteudo: a.conteudo || ctx.conhecimentos[i % Math.max(ctx.conhecimentos.length, 1)] || '',
        estrategias: a.estrategias || 'Atividade contextualizada com mediação docente, prática orientada, discussão em grupo e registro das evidências de aprendizagem.',
        recursos: a.recursos || ctx.recursos || 'Materiais didáticos e recursos da UC.',
        avaliacao: a.avaliacao || 'Avaliação processual por evidências de desempenho.'
      }));
    }

    if (!ctx.avaliacoes.length) {
      ctx.avaliacoes = [
        'Avaliação diagnóstica para identificar conhecimentos prévios.',
        'Avaliação formativa durante atividades práticas, discussões e entregas.',
        'Avaliação somativa por evidências, produtos, exercícios ou prova, conforme critérios da unidade curricular.'
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
    const capacidades = arr(section(text, ['CAPACIDADES']));
    const conhecimentos = arr(section(text, ['CONHECIMENTOS']));
    const habilidades = arr(section(text, ['HABILIDADES', 'PADRÕES DE DESEMPENHO', 'PADROES DE DESEMPENHO']));
    const avaliacoes = arr(section(text, ['AVALIAÇÕES', 'AVALIACOES', 'CRITÉRIOS DE AVALIAÇÃO', 'CRITERIOS DE AVALIACAO']));
    const referencias = arr(section(text, ['REFERÊNCIAS', 'REFERENCIAS']));
    const aulas = parseMarkdownTable(text);

    return normalizePlanoAula({
      objetivo, capacidades, conhecimentos, habilidades, avaliacoes, referencias, aulas
    }, meta);
  }

  function listHtml(items, emptyText) {
    const clean = arr(items).filter(x => String(x).trim());
    if (!clean.length) return `<p>${esc(emptyText || 'Não informado.')}</p>`;
    return `<ul>${clean.map(i => `<li>${esc(stripMd(i))}</li>`).join('')}</ul>`;
  }

  function br(v) {
    return esc(stripMd(v)).replace(/\n/g, '<br>');
  }

  function aulasRows(aulas) {
    const list = arr(aulas);
    if (!list.length) {
      return '<tr><td colspan="7">Aulas não informadas pela IA. Revise o prompt ou gere novamente.</td></tr>';
    }
    return list.map((a, i) => `
      <tr>
        <td>${esc(a.numero || `Aula ${i + 1}`)}</td>
        <td>${esc(a.capacidade || '')}</td>
        <td>${esc(a.habilidade || 'N/A')}</td>
        <td>${br(a.conteudo || '')}</td>
        <td>${br(a.estrategias || '')}</td>
        <td>${br(a.recursos || '')}</td>
        <td>${br(a.avaliacao || '')}</td>
      </tr>
    `).join('');
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
  .tabela-aulas th:nth-child(2),.tabela-aulas td:nth-child(2){width:9%;text-align:center}
  .tabela-aulas th:nth-child(3),.tabela-aulas td:nth-child(3){width:8%;text-align:center}
  .tabela-aulas th:nth-child(4),.tabela-aulas td:nth-child(4){width:23%}
  .tabela-aulas th:nth-child(5),.tabela-aulas td:nth-child(5){width:28%}
  .tabela-aulas th:nth-child(6),.tabela-aulas td:nth-child(6){width:15%}
  .tabela-aulas th:nth-child(7),.tabela-aulas td:nth-child(7){width:10%}
</style></head><body>
<div class="WordSection1">
<div class="header-box">SENAI BAHIA · MQCT · ${esc(p.area)} · ${esc(p.curso)}</div>
<h1>PLANO DE AULA — SENAI DR-BA</h1>
<table><thead><tr><th>CURSO</th><th>UC</th><th>DOCENTE</th><th>TURMA</th><th>DATA</th></tr></thead>
<tbody><tr><td>${esc(p.area)}</td><td>${esc(p.uc)}</td><td>${esc(p.docente)}</td><td>${esc(p.turma)}</td><td>${esc(p.data)}</td></tr></tbody></table>
<table><thead><tr><th>CH TEÓRICA</th><th>CH PRÁTICA</th><th>TOTAL</th></tr></thead>
<tbody><tr><td>${esc(p.chTeorica)}h</td><td>${esc(p.chPratica)}h</td><td>${esc(p.total || (Number(p.chTeorica || 0) + Number(p.chPratica || 0)) + 'h')}</td></tr></tbody></table>

<h2>OBJETIVO</h2>
<p>${br(p.objetivo || 'Desenvolver as capacidades previstas na unidade curricular, conforme Plano de Curso SENAI DR-BA.')}</p>

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
${listHtml(p.avaliacoes, 'Avaliação processual com observação de desempenho, atividades práticas, registros e evidências de aprendizagem.')}

<h2>REFERÊNCIAS</h2>
${listHtml(p.referencias.length ? p.referencias : [
  'SENAI/DR-BA. Plano de Curso da habilitação técnica correspondente.',
  'Normas técnicas, regulamentadoras, ambientais, de saúde, segurança e qualidade aplicáveis à unidade curricular.'
])}

${p.observacoes ? `<h2>OBSERVAÇÕES</h2><p>${br(p.observacoes)}</p>` : ''}
</div>
</body></html>`;
  }

  function renderPreview(plano, opts) {
    const p = normalizePlanoAula(plano, opts || {});
    const word = renderPlanoAulaWord(p, opts || {});
    return `
      <div class="doc-preview">
        <h2>📄 Plano de Aula — padrão SENAI</h2>
        <p><b>UC:</b> ${esc(p.uc)} · <b>Docente:</b> ${esc(p.docente)} · <b>Data:</b> ${esc(p.data)}</p>
        <p><b>CH:</b> ${esc(p.chTeorica)}h teórica + ${esc(p.chPratica)}h prática</p>
        <h3>Objetivo</h3><p>${br(p.objetivo)}</p>
        <h3>Capacidades</h3>${listHtml(p.capacidades)}
        <h3>Conhecimentos</h3>${listHtml(p.conhecimentos)}
        <h3>Aulas</h3><p>${p.aulas.length} aula(s) estruturada(s) no documento Word.</p>
      </div>`;
  }

  function buildPlanoAulaPrompt(meta, officialContext) {
    const m = meta || {};
    return `${m.base || ''}
${officialContext || ''}

TAREFA: Gere um PLANO DE AULA COMPLETO no padrão SENAI DR-BA.

IMPORTANTE:
- Responda SOMENTE JSON válido. Não use Markdown. Não use bloco de código.
- Não gere HTML. Não gere texto solto.
- Use a base oficial da UC quando fornecida.
- Mantenha o formato abaixo exatamente.

JSON esperado:
{
  "area": "${m.area || ''}",
  "curso": "${m.curso || ''}",
  "uc": "${m.uc || ''}",
  "docente": "${m.docente || ''}",
  "turma": "${m.turma || ''}",
  "data": "${m.data || ''}",
  "chTeorica": ${Number(m.cht || 0)},
  "chPratica": ${Number(m.chp || 0)},
  "total": "${m.total || ''}",
  "objetivo": "Objetivo em gerúndio, claro e alinhado à UC.",
  "capacidades": ["capacidade 1", "capacidade 2"],
  "conhecimentos": ["conhecimento 1", "conhecimento 2"],
  "habilidades": ["padrão de desempenho ou habilidade 1"],
  "socioemocionais": ["capacidade socioemocional 1"],
  "aulas": [
    {
      "numero": "Aula 1",
      "capacidade": "C1",
      "habilidade": "H1 ou N/A",
      "conteudo": "Conteúdos trabalhados nesta aula",
      "estrategias": "Abertura, desenvolvimento e fechamento com metodologia ativa",
      "recursos": "Recursos, materiais, EPIs, ambientes",
      "avaliacao": "Evidências e critérios de avaliação"
    }
  ],
  "avaliacoes": ["critério/instrumento 1"],
  "referencias": ["referência 1"]
}

Dados do formulário:
UC: ${m.uc}
Docente: ${m.docente}
Turma: ${m.turma}
Data: ${m.data}
CH Teórica: ${m.cht}h
CH Prática: ${m.chp}h
Total: ${m.total}
Quantidade de aulas: ${m.nAulas} aula(s) de ${m.chDia}h
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


  // ---------- Motor genérico para TODOS os documentos didáticos ----------
  const DOC_SCHEMAS = {
    'situacao-aprendizagem': {
      title: 'SITUAÇÃO DE APRENDIZAGEM — MSEP',
      sections: [
        ['titulo', 'Título'],
        ['contexto', 'Contexto / Situação-Problema'],
        ['desafio', 'Desafio'],
        ['competencias', 'Competências / Capacidades'],
        ['etapas', 'Etapas da Situação de Aprendizagem'],
        ['evidencias', 'Evidências de Aprendizagem'],
        ['criterios', 'Critérios de Avaliação'],
        ['recursos', 'Recursos Didáticos'],
        ['referencias', 'Referências']
      ]
    },
    'objeto-aprendizagem': {
      title: 'OBJETO DE APRENDIZAGEM — SENAI',
      sections: [
        ['apresentacao', 'Apresentação'],
        ['objetivos', 'Objetivos de Aprendizagem'],
        ['conteudos', 'Conteúdo'],
        ['saibaMais', 'Saiba Mais'],
        ['atividades', 'Atividades de Fixação'],
        ['glossario', 'Glossário'],
        ['referencias', 'Referências']
      ]
    },
    'roteiro-praticas': {
      title: 'ROTEIRO DE PRÁTICAS — SENAI',
      sections: [
        ['titulo', 'Título da Prática'],
        ['objetivos', 'Objetivos'],
        ['fundamentacao', 'Fundamentação Técnica'],
        ['materiais', 'Materiais, Equipamentos e EPIs'],
        ['procedimentos', 'Procedimentos'],
        ['pontosControle', 'Pontos de Controle'],
        ['resultados', 'Resultados Esperados'],
        ['descarte', 'Descarte / Segurança / Meio Ambiente'],
        ['relatorio', 'Relatório do Aluno'],
        ['referencias', 'Referências']
      ]
    },
    'avaliacao-prova': {
      title: 'AVALIAÇÃO / PROVA — SENAI',
      sections: [
        ['cabecalho', 'Cabeçalho'],
        ['instrucoes', 'Instruções'],
        ['questoesObjetivas', 'Questões Objetivas'],
        ['questoesDiscursivas', 'Questões Discursivas'],
        ['criterios', 'Critérios de Avaliação'],
        ['gabarito', 'Gabarito / Rubrica'],
        ['referencias', 'Referências']
      ]
    },
    'material-personalizado': {
      title: 'MATERIAL DIDÁTICO PERSONALIZADO — SENAI',
      sections: [
        ['apresentacao', 'Apresentação'],
        ['objetivos', 'Objetivos'],
        ['conteudo', 'Conteúdo'],
        ['orientacoes', 'Orientações de Uso'],
        ['atividades', 'Atividades / Aplicações'],
        ['avaliacao', 'Avaliação / Evidências'],
        ['referencias', 'Referências']
      ]
    }
  };

  function normalizeGenericDocument(input, type, meta) {
    const schema = DOC_SCHEMAS[type] || DOC_SCHEMAS['material-personalizado'];
    const data = input && typeof input === 'object' ? input : {};
    const m = meta || {};
    const doc = {
      tipo: type || 'material-personalizado',
      titulo: data.titulo || data.title || schema.title,
      area: data.area || m.area || 'Área Técnica',
      curso: data.curso || m.curso || '',
      uc: data.uc || m.uc || '',
      docente: data.docente || m.docente || '',
      turma: data.turma || m.turma || '',
      data: data.data || m.data || safeDate(),
      observacoes: data.observacoes || m.observacoes || '',
      sections: []
    };

    schema.sections.forEach(function(pair) {
      const key = pair[0], label = pair[1];
      let value = data[key] ?? data[label] ?? data[label.toLowerCase()] ?? '';
      if (!value && key === 'criterios') value = data.criteriosAvaliacao || data.avaliacao || '';
      if (!value && key === 'competencias') value = data.capacidades || data.competenciasGerais || '';
      if (!value && key === 'conteudos') value = data.conhecimentos || data.conteudo || '';
      doc.sections.push({ key, title: label, content: value });
    });

    return doc;
  }

  function fromAnyText(text, type, meta) {
    const json = extractJson(text);
    if (json) return normalizeGenericDocument(json, type, meta);

    const schema = DOC_SCHEMAS[type] || DOC_SCHEMAS['material-personalizado'];
    const data = {};
    schema.sections.forEach(function(pair) {
      const key = pair[0], label = pair[1];
      const aliases = [
        label,
        label.replace(/\s*\/\s*/g, ' '),
        label.replace(/[–—-].*$/, '').trim(),
        key
      ].filter(Boolean);
      data[key] = section(text, aliases) || '';
    });

    // Fallback limpo: se a IA ainda responder Markdown solto, renderiza como conteúdo,
    // mas dentro do template Word, nunca como .doc bruto.
    const hasAny = Object.values(data).some(v => String(v || '').trim());
    if (!hasAny) {
      if (type === 'avaliacao-prova') data.questoesObjetivas = stripMd(text);
      else if (type === 'roteiro-praticas') data.procedimentos = stripMd(text);
      else if (type === 'objeto-aprendizagem') data.conteudos = stripMd(text);
      else if (type === 'situacao-aprendizagem') data.contexto = stripMd(text);
      else data.conteudo = stripMd(text);
    }

    return normalizeGenericDocument(data, type, meta);
  }

  function richContentHtml(value, emptyText) {
    const cleanArr = arr(value).filter(x => String(x).trim());
    if (!cleanArr.length) return `<p>${esc(emptyText || 'Não informado.')}</p>`;

    // Se for uma única string grande, preserva parágrafos e quebras.
    if (cleanArr.length === 1 && String(cleanArr[0]).length > 260) {
      return String(cleanArr[0])
        .split(/\n{2,}/)
        .map(p => `<p>${br(p)}</p>`)
        .join('');
    }

    return `<ul>${cleanArr.map(i => `<li>${br(i)}</li>`).join('')}</ul>`;
  }

  function renderWordDocument(docInput, opts) {
    const opts2 = opts || {};
    const type = docInput?.tipo || opts2.type || 'material-personalizado';
    const d = normalizeGenericDocument(docInput, type, opts2);
    const schema = DOC_SCHEMAS[type] || DOC_SCHEMAS['material-personalizado'];
    const accent = opts2.accent || '#00695C';
    const light = opts2.light || '#FFFBF2';

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
  .meta td{font-size:9pt}
  .small{font-size:8.5pt;color:#555}
</style></head><body>
<div class="WordSection1">
<div class="header-box">SENAI BAHIA · MQCT · ${esc(d.area)} · ${esc(d.curso)}</div>
<h1>${esc(schema.title)}</h1>
<table class="meta"><thead><tr><th>ÁREA/CURSO</th><th>UC</th><th>DOCENTE</th><th>TURMA</th><th>DATA</th></tr></thead>
<tbody><tr><td>${esc(d.area)}</td><td>${esc(d.uc)}</td><td>${esc(d.docente || '______')}</td><td>${esc(d.turma || '______')}</td><td>${esc(d.data)}</td></tr></tbody></table>
${d.sections.map(sec => `<h2>${esc(sec.title)}</h2>${richContentHtml(sec.content, 'Não informado.')}`).join('\n')}
${d.observacoes ? `<h2>OBSERVAÇÕES</h2><p>${br(d.observacoes)}</p>` : ''}
<p class="small">Documento gerado pelo Hub MQCT com base no padrão SENAI DR-BA.</p>
</div>
</body></html>`;
  }

  function renderGenericPreview(docInput, opts) {
    const type = docInput?.tipo || opts?.type || 'material-personalizado';
    const d = normalizeGenericDocument(docInput, type, opts || {});
    const schema = DOC_SCHEMAS[type] || DOC_SCHEMAS['material-personalizado'];
    const first = d.sections.find(s => String(s.content || '').trim()) || d.sections[0];
    return `
      <div class="doc-preview">
        <h2>📄 ${esc(schema.title)}</h2>
        <p><b>UC:</b> ${esc(d.uc)} · <b>Data:</b> ${esc(d.data)}</p>
        <h3>${esc(first?.title || 'Conteúdo')}</h3>
        ${richContentHtml(first?.content || '', 'Documento estruturado no padrão Word SENAI.')}
        <p><b>${d.sections.length}</b> seções estruturadas no arquivo Word.</p>
      </div>`;
  }

  function buildGenericPrompt(type, meta, officialContext, userInstruction) {
    const schema = DOC_SCHEMAS[type] || DOC_SCHEMAS['material-personalizado'];
    const fields = schema.sections.map(s => `"${s[0]}": ${s[0].includes('questoes') || s[0].includes('etapas') || s[0].includes('atividades') || s[0].includes('referencias') || s[0].includes('criterios') ? '[]' : '""'}`).join(',\n  ');
    return `${meta?.base || ''}
${officialContext || ''}

TAREFA: Gere ${schema.title}.

IMPORTANTE:
- Responda SOMENTE JSON válido.
- Não use Markdown. Não use bloco de código.
- Não gere HTML.
- Use a base oficial da UC quando fornecida.
- Mantenha a linguagem técnica, pedagógica e alinhada à MSEP.

JSON esperado:
{
  "area": "${meta?.area || ''}",
  "curso": "${meta?.curso || ''}",
  "uc": "${meta?.uc || ''}",
  "docente": "${meta?.docente || ''}",
  "turma": "${meta?.turma || ''}",
  "data": "${meta?.data || ''}",
  ${fields}
}

Dados e solicitação do formulário:
${userInstruction || ''}
Observações: ${meta?.observacoes || ''}`;
  }

  window.DocumentEngine = {
    extractJson,
    normalizePlanoAula,
    fromGeminiText,
    renderPlanoAulaWord,
    renderPreview,
    buildPlanoAulaPrompt,
    downloadHtmlAsDoc,
    fromAnyText,
    renderWordDocument,
    renderGenericPreview,
    buildGenericPrompt,
    DOC_SCHEMAS
  };
})();
