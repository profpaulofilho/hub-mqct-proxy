# Correção — Mapa Mental com validação curricular por área

## O que foi corrigido

O mapa mental não deve mais exibir textos genéricos como:

> Conteúdos formativos conforme organização interna da UC no Plano de Curso DR-BA.

Esse texto era um fallback técnico e não um conteúdo pedagógico. Agora o motor do mapa mental filtra placeholders e só renderiza ramos com conteúdo real.

## Lógica nova aplicada a todas as áreas

Arquivo principal alterado:

- `assets/mindmap.js`

Nova regra global:

1. Limpa textos vazios, genéricos e administrativos.
2. Remove placeholders como "não informado", "a definir" e textos de organização interna.
3. Monta os ramos somente quando houver itens reais.
4. Renomeia o ramo `Subfunções` para `Capacidades`, ficando mais didático.
5. Usa os ramos:
   - Capacidades
   - Conhecimentos
   - Padrões de Desempenho
   - Capacidades Socioemocionais

## Segurança DR-BA

Arquivo alterado:

- `data/seguranca-drba.js`

Foram substituídos os placeholders por capacidades e conhecimentos reais nas UCs que ainda tinham texto genérico, incluindo:

- Saúde e Segurança no Trabalho
- Introdução a Qualidade e Produtividade
- Planejamento e Execução de Ações Educativas
- Introdução a Indústria 4.0

## Mecanismo para evitar o erro no futuro

Foi criado o script:

- `scripts/validate-content.js`

Ele verifica os arquivos dentro da pasta `data/` e acusa quando alguma área nova for cadastrada com placeholders proibidos.

Comando:

```bash
npm run validate:curriculum
```

Recomendação de fluxo antes de publicar uma nova área:

```bash
npm run validate:curriculum
git add .
git commit -m "habilita nova area curricular"
git push
```

## Arquivos alterados

- `assets/mindmap.js`
- `data/seguranca-drba.js`
- `scripts/validate-content.js`
- `package.json`
- `README-CORRECAO-MAPA-MENTAL.md`
