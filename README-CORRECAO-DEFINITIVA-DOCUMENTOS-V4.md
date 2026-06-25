# Correção definitiva — Engine Pedagógica de Documentos v4

## Objetivo
Eliminar a regressão em que o Plano de Aula saía com o formulário correto, mas com aulas vazias, capacidades ausentes ou conhecimentos não preenchidos.

## Causa raiz
A geração anterior deixava a IA montar a estrutura do plano. Quando o Gemini devolvia JSON incompleto, Markdown, campos vazios ou falhava no proxy, o DocumentEngine aceitava a resposta e renderizava a tabela com linhas vazias.

## Solução aplicada
A base oficial da UC passou a ser a fonte da verdade. A IA agora apenas enriquece o plano.

Fluxo definitivo:
1. Localiza a UC oficial pela página/área.
2. Extrai objetivo, capacidades, conhecimentos, padrões/habilidades, socioemocionais, ambientes e equipamentos.
3. A Engine Pedagógica distribui automaticamente a CH em aulas.
4. O Gemini recebe essa estrutura para enriquecer estratégias, recursos, avaliação e referências.
5. O DocumentEngine mescla a resposta da IA sem permitir que ela apague campos oficiais.
6. Se a IA falhar, o documento continua sendo gerado pela base oficial, completo e no padrão Word SENAI.

## Arquivos alterados
- assets/document-engine.js
- areas/informatica-nem.html
- areas/quimica-drba.html
- areas/quimica.html
- areas/seguranca-drba.html
- areas/seguranca.html

## Arquivos não alterados
- assets/mindmap.js
- assets/slides-v2.js
- motores de caça-palavras/canvas

## Testes realizados em ambiente local
- Informática NEM · MIB_UC2 · 40h · 4h/aula: gerou 10 aulas preenchidas.
- Química · MII_UC6 · Química Analítica · 102h · 4h/aula: gerou 26 aulas preenchidas com capacidades e conhecimentos oficiais.

## Regra para áreas futuras
Para habilitar nova área, crie primeiro a base curricular JS com:
- módulos
- UCs
- carga horária
- objetivo
- capacidades
- conhecimentos
- padrões/habilidades
- socioemocionais
- ambientes/equipamentos

Depois a mesma Engine gera os documentos sem precisar duplicar lógica.
