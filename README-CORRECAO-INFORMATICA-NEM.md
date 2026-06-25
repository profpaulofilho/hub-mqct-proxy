# Correção — Informática para Internet NEM e Document Engine

## Diagnóstico

Foram encontrados problemas na área `Informática para Internet · NEM`:

1. A página carregava a base em `../data/informatica-nem.js`, mas no projeto atual o arquivo estava em `areas/data/informatica-nem.js`.
   Resultado: a base oficial podia não carregar, afetando mapa mental, caça-palavras e contexto enviado ao Gemini.

2. A página não carregava `assets/document-engine.js`.
   Resultado: Plano de Aula, SA, OA, Roteiro, Avaliação e Material Personalizado voltavam a ser salvos como texto/Markdown em `.doc`.

3. O botão `Hub Principal` estava apontando para uma URL externa antiga:
   `https://profpaulofilho.github.io/hub-artifacts_IA/index.html`.
   Resultado: saía do deploy atual e podia cair em página errada.

4. A função `downloadDoc()` da área de Informática salvava o texto bruto da IA.
   Resultado: Word abria a janela de conversão e o documento ficava desestruturado.

## Correções aplicadas

- `areas/informatica-nem.html`
  - Incluído `../assets/document-engine.js`.
  - Corrigido carregamento da base para `data/informatica-nem.js`.
  - Corrigido botão voltar para `../index.html`.
  - Criadas funções `showDocOutput()` e `downloadDoc()` usando DocumentEngine.
  - Todos os documentos textuais agora passam pelo template Word SENAI.

- `data/informatica-nem.js`
  - Criada cópia da base em `data/` para compatibilidade com loaders antigos e futuros.

## Produtos preservados

Não foi alterada a estrutura dos produtos não textuais:

- Mapa Mental continua usando `assets/mindmap.js`.
- Slides continuam usando `assets/slides-v2.js`.
- Caça-palavras continua usando canvas/PNG.
- Document Engine atua apenas em arquivos `.doc`.

## Arquivos principais para subir

- `areas/informatica-nem.html`
- `areas/data/informatica-nem.js`
- `data/informatica-nem.js`
- `assets/document-engine.js`

## Testes recomendados

1. Abrir `areas/seletor-ds.html`.
2. Entrar em `Informática para Internet · NEM`.
3. Clicar em `Hub Principal` e confirmar retorno para a tela inicial do deploy atual.
4. Selecionar uma UC.
5. Gerar:
   - Plano de Aula
   - Situação de Aprendizagem
   - Objeto de Aprendizagem
   - Roteiro de Práticas
   - Avaliação / Prova
   - Material Personalizado
6. Baixar cada `.doc` e confirmar que abre direto no Word, sem janela de conversão.
7. Gerar Mapa Mental, Caça-palavras e Slides para confirmar que a estrutura foi preservada.
