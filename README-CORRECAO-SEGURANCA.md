# Correção Segurança do Trabalho — Hub MQCT

## Problemas corrigidos

1. **UC não encontrada na base oficial**
   - A página `areas/seguranca-drba.html` procurava `SEGURANCA_DRBA`.
   - O arquivo `data/seguranca-drba.js` expunha apenas `SEGURANCA`.
   - Correção: criado alias `window.SEGURANCA_DRBA = SEGURANCA`.

2. **Lista de UCs de Segurança incompleta/desatualizada**
   - As páginas de Segurança tinham UCs hardcoded e divergentes da base JS.
   - Correção: a sidebar de `seguranca.html` e `seguranca-drba.html` foi reconstruída com as UCs existentes em `data/seguranca.js` e `data/seguranca-drba.js`.

3. **Botão “Hub Principal” levando para 404**
   - O botão apontava para `https://profpaulofilho.github.io/hub-artifacts_IA/areas/seletor-seguranca.html`.
   - Correção: agora aponta de forma relativa para `../index.html`.

4. **Favicon ausente em páginas internas**
   - Algumas páginas internas não tinham fallback `.ico`.
   - Correção: adicionados `favicon.svg` e `favicon.ico` nas páginas de áreas.

5. **Erro de slides pouco descritivo**
   - O `slides-v2.js` mostrava apenas `Proxy retornou 502`.
   - Correção: agora exibe também o detalhe retornado pelo proxy quando existir.
   - Também passa a UC selecionada corretamente para `buildOfficialContext`.

## Arquivos alterados

- `data/seguranca-drba.js`
- `areas/seguranca-drba.html`
- `areas/seguranca.html`
- `areas/seletor-seguranca.html`
- `assets/slides-v2.js`
- demais páginas internas receberam fallback de favicon quando necessário.

## Publicação

```bash
git add .
git commit -m "corrige paginas e base de seguranca"
git push
```

Depois aguarde o redeploy automático da Vercel.
