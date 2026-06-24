#!/usr/bin/env node
/**
 * Validador curricular do Hub MQCT
 *
 * Objetivo:
 * Impedir que novas áreas/UCs sejam habilitadas com textos genéricos
 * no lugar de capacidades e conhecimentos reais.
 *
 * Uso:
 *   npm run validate:curriculum
 */

const fs = require('fs');
const path = require('path');
const vm = require('vm');

const ROOT = path.resolve(__dirname, '..');
const DATA_DIR = path.join(ROOT, 'data');

const FORBIDDEN = [
  /conte[úu]dos?\s+formativos?\s+conforme\s+organiza[çc][ãa]o\s+interna/i,
  /conforme\s+organiza[çc][ãa]o\s+interna\s+da\s+uc/i,
  /n[ãa]o\s+cadastrado/i,
  /n[ãa]o\s+informado/i,
  /\ba\s+definir\b/i
];

function cleanText(v) {
  return String(v ?? '').normalize('NFD').replace(/[\u0300-\u036f]/g, '').trim();
}

function isBad(v) {
  const s = String(v ?? '').trim();
  if (!s) return true;
  if (/^\d+[\.)]?$/.test(s)) return true;
  return FORBIDDEN.some((rx) => rx.test(s));
}

function listFrom(value) {
  const out = [];
  const push = (v) => {
    if (v == null) return;
    if (Array.isArray(v)) return v.forEach(push);
    if (typeof v === 'object') return push(v.texto || v.nome || v.descricao || v.titulo || '');
    String(v).split(/\n|\r|•|·|\u2022/g).forEach((part) => {
      const item = part
        .replace(/\s+/g, ' ')
        .replace(/^[-–—]\s*/, '')
        .replace(/^\d+(?:\.\d+)*[\.)]?\s*/, '')
        .trim();
      if (item && !isBad(item) && item.length >= 3) out.push(item);
    });
  };
  push(value);
  return [...new Set(out.map(cleanText))];
}

function loadDataFile(file) {
  const code = fs.readFileSync(file, 'utf8');
  const varMatch = code.match(/const\s+([A-Z0-9_]+)\s*=/);
  if (!varMatch) throw new Error(`Não encontrei const principal em ${path.basename(file)}`);
  const varName = varMatch[1];
  const sandbox = {};
  vm.createContext(sandbox);
  vm.runInContext(`${code}\n;globalThis.__DATA__ = ${varName};`, sandbox, { filename: file });
  return sandbox.__DATA__;
}

function eachUC(course, cb) {
  (course.modulos || []).forEach((mod) => {
    (mod.ucs || []).forEach((uc) => cb(uc, mod));
  });
}

let errors = [];
let warnings = [];

for (const file of fs.readdirSync(DATA_DIR).filter((f) => f.endsWith('.js'))) {
  const full = path.join(DATA_DIR, file);
  const raw = fs.readFileSync(full, 'utf8');

  FORBIDDEN.forEach((rx) => {
    if (rx.test(raw)) {
      errors.push(`${file}: contém texto placeholder proibido (${rx}).`);
    }
  });

  let data;
  try {
    data = loadDataFile(full);
  } catch (err) {
    errors.push(`${file}: não foi possível carregar/avaliar o arquivo: ${err.message}`);
    continue;
  }

  eachUC(data, (uc, mod) => {
    const id = `${file} :: ${(mod && mod.id) || 'MOD'} / ${uc.id || uc.codigo || '?'} — ${uc.nome || 'UC sem nome'}`;

    const capacidades = listFrom([
      uc.capacidades,
      uc.capacidadesBasicas,
      uc.capacidadesTecnicas
    ]);

    const conhecimentos = listFrom([
      uc.conhecimentos,
      (uc.capacidades || []).flatMap((c) => c && c.conhecimentos ? c.conhecimentos : [])
    ]);

    if (!capacidades.length) warnings.push(`${id}: sem capacidades reais cadastradas.`);
    if (!conhecimentos.length) warnings.push(`${id}: sem conhecimentos reais cadastrados.`);
    if (conhecimentos.length > 0 && conhecimentos.length < 3) warnings.push(`${id}: possui poucos conhecimentos (${conhecimentos.length}).`);
  });
}

if (warnings.length) {
  console.warn('\nAvisos:');
  warnings.forEach((w) => console.warn('  - ' + w));
}

if (errors.length) {
  console.error('\nValidação curricular falhou por placeholders proibidos:');
  errors.forEach((e) => console.error('  - ' + e));
  process.exit(1);
}

console.log('✅ Validação curricular concluída: capacidades e conhecimentos reais encontrados nas UCs.');
