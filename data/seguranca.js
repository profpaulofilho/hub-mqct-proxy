/**
 * SENAI BAHIA · Hub MQCT
 * data/seguranca.js — Área: Segurança do Trabalho
 * Fonte: Itinerário Nacional SENAI — Versão 2025.1 — Emissão: 18/06/2026
 * Extração estruturada a partir dos documentos oficiais PDF enviados pelo usuário.
 */

const SEGURANCA = {
  "area": {
    "nome": "Segurança do Trabalho",
    "curso": "Técnico em Segurança do Trabalho",
    "nivel": "Técnico — Nível 3 · Tático",
    "cbo": "3516-05",
    "ch": 1200,
    "validade": "06/02/2031",
    "versao": "2025.1",
    "emissao": "18/06/2026",
    "cor": "#E65100",
    "emoji": "🦺"
  },
  "competenciaGeral": "Executar ações prevencionistas, monitorar os processos de segurança e saúde no meio ambiente do trabalho e prestar assessoria em segurança do trabalho de acordo com normas regulamentadoras e princípios de higiene ocupacional, responsabilidade social e sustentabilidade, meio ambiente e promoção à saúde do trabalhador.",
  "socioemocionais": [
    {
      "id": "SE1",
      "nome": "Aprendizagem Ativa e Estratégias de Aprendizagem",
      "descricao": "Compreender novas informações para resolução de problemas atuais e futuros, tomada de decisão, formação continuada e crescimento profissional.",
      "capacidades": [
        "Aplicar estratégias de aprendizagem autônoma e adaptativa para construção, consolidação e transferência dos conhecimentos de forma contínua.",
        "Buscar atualização constante para embasamento de sua prática."
      ]
    },
    {
      "id": "SE2",
      "nome": "Empreendedorismo",
      "descricao": "Pensar e agir sobre oportunidades com criatividade e inovação para geração de valor individual e coletivo.",
      "capacidades": [
        "Contribuir para objetivos coletivos em processos de trabalho.",
        "Buscar proativamente soluções para desafios em situações de trabalho."
      ]
    },
    {
      "id": "SE3",
      "nome": "Inteligência Emocional / Autoconhecimento",
      "descricao": "Ler e entender emoções, reconhecendo seu impacto, forças e limitações.",
      "capacidades": [
        "Reconhecer o seu estado emocional.",
        "Ter autoconfiança em suas habilidades."
      ]
    },
    {
      "id": "SE4",
      "nome": "Inteligência Emocional / Autorregulação",
      "descricao": "Manter emoções fortes sob controle e gerir relacionamentos positivos.",
      "capacidades": [
        "Regular emoções intensas em situações de pressão, mantendo postura profissional e equilibrada."
      ]
    },
    {
      "id": "SE5",
      "nome": "Habilidades de Relacionamento",
      "descricao": "Trabalhar de forma colaborativa e construtiva, assumindo liderança quando necessário.",
      "capacidades": [
        "Apresentar devolutivas de maneira construtiva.",
        "Demonstrar capacidade de adaptação a diferentes grupos e ambientes.",
        "Estar aberto a feedback na busca de seu crescimento profissional."
      ]
    },
    {
      "id": "SE6",
      "nome": "Liderança e Influência Social",
      "descricao": "Liderar, oferecer opiniões e direção, impactando outros com energia e liderança.",
      "capacidades": [
        "Apresentar opiniões divergentes em discussões de forma construtiva, respeitosa e firme.",
        "Comunicar-se de forma objetiva, simples e clara, adequando a linguagem aos diferentes públicos.",
        "Trabalhar de forma colaborativa."
      ]
    },
    {
      "id": "SE7",
      "nome": "Pensamento Crítico e Inovação",
      "descricao": "Compreender interdependência de processos, relação causa e efeito e atitude inovadora.",
      "capacidades": [
        "Determinar as melhores soluções para um problema complexo com argumentos para suas escolhas.",
        "Criar forma inovadora para resolução de problemas comuns."
      ]
    },
    {
      "id": "SE8",
      "nome": "Resolução de Problemas Complexos",
      "descricao": "Identificar problemas complexos e rever informações relacionadas para desenvolver e avaliar soluções.",
      "capacidades": [
        "Analisar a causa de problemas com foco em sua origem."
      ]
    }
  ],
  "competenciasIA": [
    {
      "id": "IA1",
      "nome": "Alfabetização e uso ético de ferramentas de IA",
      "descricao": "Compreender conceitos fundamentais de IA, utilizar ferramentas para tarefas rotineiras e reconhecer riscos, vieses e segurança de dados.",
      "capacidades": [
        "Identificar riscos de segurança de dados e vieses em resultados de IA, adotando princípios éticos e promovendo uso responsável da tecnologia.",
        "Empregar comandos (prompts) no uso de IA, em tarefas de rotina e para obtenção de resultados específicos.",
        "Utilizar ferramentas de IA Generativa (GenAI) para tarefas de rotina."
      ]
    },
    {
      "id": "IA2",
      "nome": "Análise de dados com IA e otimização de processos",
      "descricao": "Aplicar técnicas de IA para coletar, processar e analisar dados, automatizar tarefas, identificar padrões e propor melhorias.",
      "capacidades": [
        "Analisar resultados de sistemas de IA para tomada de decisão no nível de equipe ou processo, corrigindo possíveis imprecisões ou vieses.",
        "Criar agentes de IA para a solução de um problema específico do fluxo de trabalho."
      ]
    }
  ],
  "perfil": {
    "funcoes": [
      "Executar ações prevencionistas em Segurança e Saúde do Trabalho.",
      "Monitorar processos de segurança e saúde no meio ambiente do trabalho.",
      "Prestar assessoria e consultoria em Segurança do Trabalho."
    ],
    "padroes": []
  },
  "modulos": [
    {
      "id": "MB",
      "nome": "Módulo Básico",
      "ch": 112,
      "ucs": [
        {
          "id": "MB_UC1",
          "codigo": "UC1",
          "nome": "Sustentabilidade nos Processos Industriais",
          "ch": 8,
          "cht": 3,
          "chp": 5,
          "padroes": [],
          "capacidades": [
            {
              "tipo": "Capacidade Básica",
              "dominio": "Cognitivo",
              "texto": "Reconhecer os princípios da economia circular nos processos industriais",
              "conhecimentos": [
                "1.1 Alternativas para prevenção da poluição",
                "1.1.1 Ciclo de Vida (Definição e Fases)",
                "1.1.2 Economia Circular (Definição e Princípios)",
                "1.1.3 Produção mais limpa (Definição e Fases)",
                "1.1.4 Logística Reversa (Definição e Objetivo)",
                "1.2 Definição",
                "1.3 Resíduos Industriais",
                "1.3.1 Destinação",
                "1.3.2 Caracterização",
                "1.3.3 Classificação",
                "1.4 Ações de prevenção da Poluição Industrial",
                "1.4.1 Redução",
                "1.4.2 Reuso",
                "1.4.3 Disposição",
                "1.4.4 Reciclagem",
                "1.4.5 Tratamento 2. Organização de ambientes de trabalho",
                "2.1 Organização do espaço de trabalho",
                "2.2 Conceitos de organização e disciplina no trabalho: tempo, compromisso e atividades",
                "2.3 Organização de ferramentas e instrumentos: formas, importância",
                "2.4 Princípios de organização 3. Desenvolvimento Sustentável",
                "3.1 Sustentabilidade",
                "3.1.1 Pilares",
                "3.1.2 Políticas e Programas",
                "3.1.3 Definição",
                "3.2 Meio Ambiente",
                "3.2.1 Definição",
                "3.2.2 Relação entre Homem e o meio ambiente",
                "3.3 Recursos Naturais",
                "3.3.1 Definição",
                "3.3.2 Renováveis",
                "3.3.3 Não renováveis",
                "3.4 Produção e consumo inteligente",
                "3.4.1 Uso racional de recursos e fontes de energia"
              ]
            },
            {
              "tipo": "Capacidade Básica",
              "dominio": "Cognitivo",
              "texto": "Reconhecer os programas de sustentabilidade aplicados aos processos industriais Copuiôedo Básica",
              "conhecimentos": []
            },
            {
              "tipo": "Capacidade Básica",
              "dominio": "Cognitivo",
              "texto": "Reconhecer os fundamentos da logística reversa aplicados ao ciclo de vida do produto",
              "conhecimentos": []
            },
            {
              "tipo": "Capacidade Básica",
              "dominio": "Cognitivo",
              "texto": "Reconhecer alternativas de prevenção da poluição decorrentes dos processos industriais",
              "conhecimentos": []
            },
            {
              "tipo": "Capacidade Básica",
              "dominio": "Cognitivo",
              "texto": "Reconhecer a destinação dos resíduos dos processos industriais em função de sua caracterização",
              "conhecimentos": []
            },
            {
              "tipo": "Capacidade Básica",
              "dominio": "Cognitivo",
              "texto": "Reconhecer as fases do ciclo de vida de um produto nos processos industriais",
              "conhecimentos": []
            }
          ]
        },
        {
          "id": "MB_UC2",
          "codigo": "UC2",
          "nome": "Introdução à Indústria 4.0",
          "ch": 24,
          "cht": 10,
          "chp": 14,
          "padroes": [],
          "capacidades": [
            {
              "tipo": "Capacidade Básica",
              "dominio": "Cognitivo",
              "texto": "Reconhecer os marcos que alavancaram as revoluções industriais e seus impactos nas atividades de produção e no desenvolvimento do indivíduo.",
              "conhecimentos": [
                "1.1 Tipos",
                "1.1.1 Incremental",
                "1.1.2 Disruptiva",
                "1.2 Definição e características",
                "1.2.1 Inovação x Invenção",
                "1.3 Impactos",
                "1.4 Importância 2. Tecnologias Habilitadoras",
                "2.1 Definições e aplicações",
                "2.1.1 Robótica Avançada",
                "2.1.2 Computação em Nuvem",
                "2.1.3 Manufatura Aditiva",
                "2.1.4 Integração de Sistemas",
                "2.1.5 Big Data",
                "2.1.6 Segurança Digital",
                "2.1.7 Internet das Coisas (loT)",
                "2.1.8 Manufatura Digital 3. Comportamento Inovador",
                "3.1 Mentalidade de Crescimento (Growth Mindset)",
                "3.2 Curiosidade",
                "3.3 Postura Investigativa",
                "3.4 Motivação Pessoal 4. Raciocínio Lógico",
                "4.1 Indução",
                "4.2 Dedução",
                "4.3 Abdução 5. Visão Sistêmica",
                "5.1 Pensamento sistêmico",
                "5.2 Articulação entre elementos da organização",
                "5.3 Elementos da organização 6. Histórico da evolução industrial",
                "6.1 2º Revolução Industrial",
                "6.1.1 A eletricidade",
                "6.1.2 O petróleo",
                "6.2 3º Revolução Industrial",
                "6.2.1 A automação",
                "6.2.2 A energia nuclear",
                "6.3 4º Revolução Industrial",
                "6.3.1 Digitalização das informações",
                "6.3.2 Utilização dos dados",
                "6.4 1º Revolução Industrial",
                "6.4.1 Mecanização dos processos"
              ]
            },
            {
              "tipo": "Capacidade Básica",
              "dominio": "Cognitivo",
              "texto": "Correlacionar cada tecnologia habilitadora com impacto gerado em sua aplicação, em um contexto real ou simulado. Compreender a inovação como ferramenta de melhoria nos processos de trabalho e resolução de problemas. Copudiôado Básica",
              "conhecimentos": []
            },
            {
              "tipo": "Capacidade Básica",
              "dominio": "Cognitivo",
              "texto": "Reconhecer as tecnologias habilitadoras para indústria 4.0",
              "conhecimentos": []
            }
          ]
        },
        {
          "id": "MB_UC3",
          "codigo": "UC3",
          "nome": "Introdução à Qualidade e Produtividade",
          "ch": 16,
          "cht": 6,
          "chp": 10,
          "padroes": [],
          "capacidades": [
            {
              "tipo": "Capacidade Básica",
              "dominio": "Cognitivo",
              "texto": "Identificar as ferramentas da qualidade aplicadas nos processos industriais.",
              "conhecimentos": [
                "1.1 Definição e Aplicabilidade",
                "1.1.1 PDCA",
                "1.1.2 Brainstorming",
                "1.1.3 Fluxograma de processos",
                "1.1.4 Diagrama de Pareto",
                "1.1.5 Diagrama de Ishikawa",
                "1.1.6 CEP",
                "1.1.7 5W2H",
                "1.1.8 Folha de verificação",
                "1.1.9 MASP",
                "1.1.10 Histograma",
                "1.1.11 Diagrama de dispersão 2. Qualidade",
                "2.1 Evolução da qualidade",
                "2.2 Definição 3. Princípios da gestão da qualidade",
                "3.1 Foco no cliente",
                "3.2 Liderança",
                "3.3 Engajamento das pessoas",
                "3.4 Abordagem de processos",
                "3.5 Tomada de decisão baseado em evidências",
                "3.6 Melhoria",
                "3.7 Gestão de relacionamentos 4. Estrutura organizacional",
                "4.1 Formal e informal",
                "4.2 Funções e responsabilidades",
                "4.3 Organização das funções, informações e recursos",
                "4.4 Sistema de Comunicação 5. Visão Sistêmica",
                "5.1 Microcosmo e macrocosmo",
                "5.2 Pensamento sistêmico",
                "5.3 Conceito 6. Filosofia Lean",
                "6.1 Definição e importância",
                "6.2 Mindset",
                "6.3 Etapas",
                "6.3.1 Intervenção",
                "6.3.2 Coleta",
                "6.3.3 Monitoramento",
                "6.3.4 Encerramento",
                "6.3.5 Preparação",
                "6.4 Pilares",
                "6.5 Ferramentas",
                "6.5.1 Diagrama espaguete",
                "6.5.2 Cronoanálise",
                "6.5.3 Cadeia de valores",
                "6.5.4 Mapa de fluxo de valor",
                "6.5.5 Takt-time"
              ]
            },
            {
              "tipo": "Capacidade Básica",
              "dominio": "Cognitivo",
              "texto": "Reconhecer as etapas da filosofia Lean para otimização de custos e redução do tempo e dos desperdícios de uma empresa.",
              "conhecimentos": []
            },
            {
              "tipo": "Capacidade Básica",
              "dominio": "Cognitivo",
              "texto": "Reconhecer os fundamentos da qualidade nos processos industriais.",
              "conhecimentos": []
            }
          ]
        },
        {
          "id": "MB_UC4",
          "codigo": "UC4",
          "nome": "Saúde e Segurança no Trabalho",
          "ch": 12,
          "cht": 5,
          "chp": 7,
          "padroes": [],
          "capacidades": [
            {
              "tipo": "Capacidade Básica",
              "dominio": "Cognitivo",
              "texto": "Reconhecer os conceitos, classificação e impactos de acidentes e doenças ocupacionais na indústria.",
              "conhecimentos": [
                "1.1 Importância dos Equipamentos de Proteção Individual e coletivo 2. Código de Ética profissional 3. Acidentes do Trabalho e Doenças Ocupacionais",
                "3.1 Tipos",
                "3.2 Consequências dos acidentes do trabalho (Trabalhador, família, empresa e país)",
                "3.3 CAT",
                "3.3.1 Definição",
                "3.4 Definição",
                "3.5 Causa",
                "3.5.1 Fator humano e pessoal na prevenção de acidentes",
                "3.5.2 Imprudência, imperícia e negligência 4. Segurança do Trabalho",
                "4.1 CIPA",
                "4.1.1 Definição",
                "4.1.2 Objetivo",
                "4.2 SESMT",
                "4.2.1 Objetivo",
                "4.2.2 Definição",
                "4.3 Normas Regulamentadoras do Ministério do Trabalho",
                "4.4 Hierarquia das leis",
                "4.5 Histórico da Segurança do Trabalho no Brasil 5. O impacto da falta de ética nos ambientes de trabalho 6. Riscos Ocupacionais",
                "6.1 Mapa de Riscos",
                "6.2 Perigo e risco",
                "6.3 Classificação de Riscos Ocupacionais: físico, químico, biológico, ergonômico e de acidentes"
              ]
            },
            {
              "tipo": "Capacidade Básica",
              "dominio": "Cognitivo",
              "texto": "Reconhecer os princípios, normas, legislação e procedimentos de saúde, segurança nos processos industriais",
              "conhecimentos": []
            },
            {
              "tipo": "Capacidade Básica",
              "dominio": "Cognitivo",
              "texto": "Reconhecer o papel do trabalhador no cumprimento das normas de saúde e segurança Copudiôado Básica",
              "conhecimentos": []
            },
            {
              "tipo": "Capacidade Básica",
              "dominio": "Cognitivo",
              "texto": "Reconhecer as medidas preventivas e corretivas nas atividades laborais",
              "conhecimentos": []
            },
            {
              "tipo": "Capacidade Básica",
              "dominio": "Cognitivo",
              "texto": "Reconhecer os tipos de riscos inerentes às atividades laborais nos processos industriais",
              "conhecimentos": []
            }
          ]
        },
        {
          "id": "MB_UC5",
          "codigo": "UC5",
          "nome": "Introdução à Tecnologia da Informação e Comunicação",
          "ch": 40,
          "cht": 16,
          "chp": 24,
          "padroes": [],
          "capacidades": [
            {
              "tipo": "Capacidade Básica",
              "dominio": "Cognitivo",
              "texto": "Interpretar dados, informações técnicas e terminologias de textos técnicos relacionados aos processos industriais.",
              "conhecimentos": [
                "1.1 Dinâmica do trabalho em equipe",
                "1.2 Busca de consenso",
                "1.3 Gestão de Conflitos 2. Segurança da Informação",
                "2.1 Reconhecer Leis vigentes a segurança da informação",
                "2.2 Definição dos pilares da Segurança da Informação",
                "2.3 Tipos de golpes na internet",
                "2.4 Contas e Senhas",
                "2.5 Códigos maliciosos (Malware)",
                "2.6 Navegação segura na internet",
                "2.7 Backup 3. Informática",
                "3.1 Fundamentos de hardware",
                "3.1.1 Identificação de componentes",
                "3.1.2 Identificação de processadores e periféricos",
                "3.2 Sistema Operacional",
                "3.2.1 Utilização de periféricos",
                "3.2.2 Área de trabalho",
                "3.2.3 Fundamentos e funções",
                "3.2.4 Pesquisa de arquivos e diretórios",
                "3.2.5 Organização de arquivos (Pastas)",
                "3.2.6 Tipos",
                "3.2.7 Barra de ferramentas",
                "3.2.8 Compactação de arquivos 4. Software de escritório",
                "4.1 Editor de Planilhas Eletrônicas",
                "4.1.1 Configuração de páginas",
                "4.1.2 Funções básicas e suas finalidades",
                "4.1.3 Linhas, colunas e endereços de células",
                "4.1.4 Inserção de fórmulas básicas",
                "4.1.5 Impressão",
                "4.1.6 Formatação de células",
                "4.1.7 Classificação e filtro de dados",
                "4.1.8 Gráficos, quadros e tabelas",
                "4.2 Editor de Apresentações",
                "4.2.1 Tipos",
                "4.2.2 Importação de figuras e objetos",
                "4.2.3 Controles de exibição",
                "4.2.4 Criação de apresentações em slides e vídeos",
                "4.2.5 Funções básicas e suas finalidades",
                "4.2.6 Inserção de tabelas e gráficos",
                "4.2.7 Configuração de páginas",
                "4.2.8 Formatação",
                "4.2.9 Arquivamentos",
                "4.2.10 Recursos multimídia de apoio a apresentações e vídeos",
                "4.3 Editor de Textos",
                "4.3.1 Tipos",
                "4.3.2 Arquivamentos",
                "4.3.3 Formatação",
                "4.3.4 Correção ortográfica e dicionário",
                "4.3.5 Bordas e sombreamento",
                "4.3.6 Configuração de páginas",
                "4.3.7 Recuos, tabulação, parágrafos, espaçamentos e margens",
                "4.3.8 Colunas",
                "4.3.9 Controle de alterações",
                "4.3.10 Impressão",
                "4.3.11 Importação de figuras e objetos",
                "4.3.12 Inserção de tabelas e gráficos",
                "4.3.13 Controles de exibição",
                "4.3.14 Marcadores e numeradores 5. Textos Técnicos",
                "5.1 Definição",
                "5.2 Normas aplicáveis para redação (ex.: ABNT, ISO, IEEE, ANSI...)",
                "5.3 Tipos e exemplos",
                "5.4 Interpretação 6. Níveis de Fala",
                "6.1 Linguagem culta",
                "6.2 Linguagem técnica",
                "6.2.1 Jargão",
                "6.2.2 Características 7. Internet (World Wide Web)",
                "7.1 Políticas de uso",
                "7.2 Direitos autorais (citação de fontes de consulta)",
                "7.3 Sites de busca",
                "7.4 Navegadores",
                "7.5 Download e gravação de arquivos",
                "7.6 Armazenamento e compartilhamento em nuvem",
                "7.7 Correio eletrônico 8. Comunicação",
                "8.1 Memorandos",
                "8.2 Identificação de textos técnicos",
                "8.3 Relatórios",
                "8.4 Atas",
                "8.5 Resumos 9. Elementos da Comunicação",
                "9.1 Emissor",
                "9.2 Canal",
                "9.3 Feedback",
                "9.4 Mensagem",
                "9.5 Ruído",
                "9.6 Receptor",
                "9.7 Código"
              ]
            },
            {
              "tipo": "Capacidade Básica",
              "dominio": "Cognitivo",
              "texto": "Reconhecer características e aplicabilidade de hardware e software de sistemas informatizados utilizados na indústria Capacidade Bs",
              "conhecimentos": []
            },
            {
              "tipo": "Capacidade Básica",
              "dominio": "Cognitivo",
              "texto": "Utilizar recursos e funcionalidades da WEB nos processos de comunicação no trabalho, de busca, armazenamento e compartilhamento de informação Copudiôado Básica",
              "conhecimentos": []
            },
            {
              "tipo": "Capacidade Básica",
              "dominio": "Cognitivo",
              "texto": "Empregar os princípios, padrões e normas técnicas que estabelecem as condições e requisitos para uma comunicação oral e escrita clara, assertiva e eficaz, condizente com o ambiente de trabalho",
              "conhecimentos": []
            },
            {
              "tipo": "Capacidade Básica",
              "dominio": "Psicomotor",
              "texto": "Aplicar os recursos e procedimentos de segurança da informação",
              "conhecimentos": []
            }
          ]
        },
        {
          "id": "MB_UC6",
          "codigo": "UC6",
          "nome": "Introdução ao Desenvolvimento de Projetos",
          "ch": 12,
          "cht": 5,
          "chp": 7,
          "padroes": [],
          "capacidades": [
            {
              "tipo": "Capacidade Básica",
              "dominio": "Cognitivo",
              "texto": "Reconhecer diferentes métodos aplicados ao desenvolvimento do projeto.",
              "conhecimentos": [
                "2.1 Normas técnicas relacionadas a projetos",
                "2.2 Fases",
                "2.2.1 Planejamento",
                "2.2.2 Apresentação",
                "2.2.3 Viabilidade",
                "2.2.4 Execução",
                "2.2.5 Concepção (ideação, Pesquisa de anterioridade e Registros e patentes)",
                "2.2.6 Fundamentação",
                "2.2.7 Resultados",
                "2.3 Características",
                "2.4 Definição",
                "2.5 Tipos 3. Postura Investigativa 4. Métodos de Desenvolvimento de projeto",
                "4.1 Método indutivo",
                "4.2 Método dedutivo",
                "4.3 Método hipotético-dedutivo",
                "4.4 Método dialético 5. Formulação de hipóteses e perguntas",
                "5.1 Comuniação",
                "5.2 Argumentação",
                "5.3 Colaboração"
              ]
            },
            {
              "tipo": "Capacidade Básica",
              "dominio": "Cognitivo",
              "texto": "Reconhecer os padrões de estrutura estabelecidos para a elaboração de projetos Capacidade Bá",
              "conhecimentos": []
            },
            {
              "tipo": "Capacidade Básica",
              "dominio": "Cognitivo",
              "texto": "Reconhecer as diferentes fases pertinentes à elaboração de um projeto.",
              "conhecimentos": []
            }
          ]
        }
      ]
    },
    {
      "id": "MI",
      "nome": "Módulo Introdutório",
      "ch": 260,
      "ucs": [
        {
          "id": "MI_UC1",
          "codigo": "UC1",
          "nome": "Fundamentos de Segurança e Saúde do Trabalho",
          "ch": 120,
          "cht": 48,
          "chp": 72,
          "padroes": [],
          "capacidades": [
            {
              "tipo": "Capacidade Básica",
              "dominio": "Cognitivo",
              "texto": "Interpretar dados estatísticos de acidentes, incidentes e doenças ocupacionais",
              "conhecimentos": [
                "1.1 Hierarquia das leis",
                "1.2 Legislação Previdenciária",
                "1.3 Normas Regulamentadoras do Ministério do Trabalho",
                "1.3.1 Tipos: Geral, Especial e Setorial",
                "1.3.2 Hierarquia de Aplicação",
                "1.4 Constituição Federal",
                "1.5 Consolidação das Leis Trabalhistas — CLT 2. Acidentes do Trabalho",
                "2.1 Responsabilidade civil e criminal",
                "2.2 Reabilitação profissional",
                "2.3 Relatórios",
                "2.4 Estatística de acidentes",
                "2.4.1 Taxa de gravidade de acidentes",
                "2.4.2 Taxa de frequência de acidentes",
                "2.5 Tipos",
                "2.6 Causas",
                "2.7 Análise e Investigação de Acidente",
                "2.8 Aspectos sociais, ambientais e financeiros",
                "2.9 Definição",
                "2.10 Comunicação de Acidente do Trabalho - CAT 3. Princípios preventivos",
                "3.1 Teoria de Frank Bird, “pirâmide”",
                "3.2 Estudos de J. Reason, \"Queijo Suíço” 4. Medidas de Controle de Riscos",
                "4.1 Proteção Coletiva",
                "4.2 Proteção Individual - NR6",
                "4.3 Hierarquia das medidas de controle",
                "4.4 Administrativa e Organizacional",
                "4.5 Sinalização e Cores de Segurança 5. NR5 - CIPA",
                "5.1 Dimensionamento",
                "5.2 Atribuições",
                "5.3 Processo Eleitoral 6. Leitura e Interpretação de Desenho Técnico",
                "6.1 Legenda",
                "6.2 Cotagem",
                "6.3 Escalas",
                "6.4 Plantas e leiautes",
                "6.5 Simbologias aplicadas à saúde e segurança (proteção contra incêndio — símbolos gráficos para projetos, rotas de fuga, mapeamento de riscos, entre outros) 7. Comportamento Inovador",
                "7.1 Mentalidade de Crescimento (Growth Mindset)",
                "7.2 Curiosidade",
                "7.3 Postura Investigativa",
                "7.4 Motivação Pessoal 8. Gestão de Riscos",
                "8.1 Conceitos gerais",
                "8.2 NR1",
                "8.2.1 Considerações Gerais",
                "8.2.2 Gestão de Riscos Ocupacionais 9. NR4- SESMT",
                "9.1 Dimensionamento",
                "9.2 Atribuições 10. Introdução à Segurança e Saúde no Trabalho e Meio Ambiente",
                "10.1 Princípios de Segurança e Saúde no trabalho e Meio Ambiente",
                "10.1.1 Responsabilidade Socioambiental",
                "10.1.2 Definição de Segurança e Saúde no Trabalho",
                "10.1.3 Relação da Segurança do Trabalho com outras áreas",
                "10.2 Riscos Ocupacionais",
                "10.2.1 Físicos",
                "10.2.2 Ergonômicos",
                "10.2.3 Acidente/Mecânicos",
                "10.2.4 Químicos",
                "10.2.5 Biológicos",
                "10.3 Histórico",
                "10.3.1 Evolução das Normas de Proteção aos trabalhadores no Brasil e no mundo",
                "10.3.2 Desenvolvimento Industrial",
                "10.4 Terminologia técnica",
                "10.4.1 Incidente",
                "10.4.2 Perigo",
                "10.4.3 Risco",
                "10.4.4 Desvio",
                "10.4.5 Acidente"
              ]
            },
            {
              "tipo": "Capacidade Básica",
              "dominio": "Cognitivo",
              "texto": "Identificar hierarquia e principais legislações aplicadas a Segurança e Saúde no Trabalho Ler e interpretar desenhos técnicos",
              "conhecimentos": []
            },
            {
              "tipo": "Capacidade Básica",
              "dominio": "Cognitivo",
              "texto": "Utilizar técnicas de mapeamento de riscos",
              "conhecimentos": []
            },
            {
              "tipo": "Capacidade Básica",
              "dominio": "Cognitivo",
              "texto": "Reconhecer os conceitos principais de Segurança do Trabalho e Meio Ambiente",
              "conhecimentos": []
            },
            {
              "tipo": "Capacidade Básica",
              "dominio": "Cognitivo",
              "texto": "Identificar terminologia técnica aplicada a Segurança e Saúde no Trabalho",
              "conhecimentos": []
            }
          ]
        },
        {
          "id": "MI_UC2",
          "codigo": "UC2",
          "nome": "Ciências Aplicadas à Segurança e Saúde do Trabalho",
          "ch": 60,
          "cht": 24,
          "chp": 36,
          "padroes": [],
          "capacidades": [
            {
              "tipo": "Capacidade Básica",
              "dominio": "Cognitivo",
              "texto": "Reconhecer propriedades físico-químicas dos agentes de riscos",
              "conhecimentos": [
                "1.1 Unidades de medidas e suas conversões 2. Cálculos",
                "2.1 Razões decimais",
                "2.1.1 Simplificação",
                "2.1.2 Aplicação",
                "2.1.3 Tipos de frações: próprias ou impróprias, frações mistas",
                "2.2 Regra de três",
                "2.2.1 Composta",
                "2.2.2 Simples",
                "2.3 Formas geométricas",
                "2.3.1 Tipos",
                "2.3.2 Medidas de perímetro, área e volume",
                "2.4 Porcentagem",
                "2.4.1 Taxa percentual",
                "2.4.2 Aplicação",
                "2.4.3 Juros",
                "2.5 Média",
                "2.5.1 Aritmética",
                "2.5.2 Harmônica",
                "2.6 Proporções",
                "2.6.1 Termos",
                "2.6.2 Propriedade fundamental",
                "2.6.3 Aplicação",
                "2.7 Estatística",
                "2.7.1 Amostra",
                "2.7.2 Variáveis.",
                "2.7.3 População",
                "2.7.4 Coleta de dados e dados brutos",
                "2.7.5 Probabilidade",
                "2.8 Apresentação gráfica de dados",
                "2.8.1 Gráficos",
                "2.8.2 Tabelas",
                "2.8.3 Histogramas. 3. Conceitos Gerais de Físico-química",
                "3.1 Pressão",
                "3.2 Temperatura",
                "3.3 Fenômenos ondulatórios",
                "3.4 Pneumática",
                "3.5 Hidráulica",
                "3.6 Tabela Periódica",
                "3.7 Conceitos de química orgânica",
                "3.8 Oxidação",
                "3.9 Conceito de ácido x base",
                "3.10 Ponto de Fulgor 4. Autogestão",
                "4.1 Organização",
                "4.2 Definição",
                "4.3 Gestão do tempo",
                "4.4 Pilares",
                "4.5 Responsabilidade",
                "4.6 Organização",
                "4.7 Disciplina",
                "4.8 Concentração"
              ]
            },
            {
              "tipo": "Capacidade Básica",
              "dominio": "Psicomotor",
              "texto": "Realizar conversões de unidades de medidas pertinentes as ações de higiene, saúde e segurança do trabalho",
              "conhecimentos": []
            },
            {
              "tipo": "Capacidade Básica",
              "dominio": "Cognitivo",
              "texto": "Interpretar dados estatísticos em planilhas e gráficos",
              "conhecimentos": []
            },
            {
              "tipo": "Capacidade Básica",
              "dominio": "Psicomotor",
              "texto": "Aplicar cálculos matemáticos aplicados segurança e saúde no trabalho (porcentagem, razão e proporção, área, volume, vazão) Converter dados numéricos em planilhas e gráficos",
              "conhecimentos": []
            }
          ]
        },
        {
          "id": "MI_UC3",
          "codigo": "UC3",
          "nome": "Comunicação e Informação Aplicadas à Segurança e Saúde do Trabalho",
          "ch": 40,
          "cht": 16,
          "chp": 24,
          "padroes": [],
          "capacidades": [
            {
              "tipo": "Capacidade Básica",
              "dominio": "Cognitivo",
              "texto": "Interpretar dados e informações de textos técnicos, inclusive em outros idiomas (normas, procedimentos, manuais, planilhas, relatórios, catálogos e desenho técnicos) relacionados à Saúde e Segurança do Trabalho",
              "conhecimentos": [
                "1.1 Tipos e Características",
                "1.2 Técnicas de Apresentação:",
                "1.2.1 Elaboração de recursos áudio visuais",
                "1.2.2 Noções de postura e oratória 2. Proatividade",
                "2.1 Pilares",
                "2.2 Definição 3. Inglês Técnico",
                "3.1 Normas Internacionais",
                "3.2 Termos Técnicos 4. Pesquisa",
                "4.1 Apresentação de resultados de pesquisas",
                "4.1.1 Tema",
                "4.1.2 Objetivo",
                "4.1.3 Análise das informações",
                "4.1.4 Citações e Referências Bibliográficas",
                "4.1.5 Método",
                "4.1.6 Síntese das informações",
                "4.2 Tipos de pesquisa",
                "4.2.1 Bibliográfica",
                "4.2.2 Pesquisa em publicações eletrônicas",
                "4.2.3 Pesquisa de campo 5. Leitura e Elaboração de Documentação Técnica",
                "5.1 Elaboração de Documentação Técnica com uso de ferramentas informatizadas",
                "5.1.1 Resumos",
                "5.1.2 Fluxogramas, Tabelas e gráficos",
                "5.1.3 Relatórios Técnicos",
                "5.1.4 Apresentações",
                "5.2 Leitura e interpretação de",
                "5.2.1 Manuais técnicos",
                "5.2.2 Fluxogramas",
                "5.2.3 Normas técnicas internacionais",
                "5.2.4 Tabelas e gráficos"
              ]
            },
            {
              "tipo": "Capacidade Básica",
              "dominio": "Psicomotor",
              "texto": "Aplicar os princípios, padrões e normas da linguagem culta na comunicação oral e na elaboração de diferentes tipos de textos técnicos e comerciais",
              "conhecimentos": []
            },
            {
              "tipo": "Capacidade Básica",
              "dominio": "Cognitivo",
              "texto": "Interpretar gráficos, tabelas e fluxogramas",
              "conhecimentos": []
            },
            {
              "tipo": "Capacidade Básica",
              "dominio": "Cognitivo",
              "texto": "Reconhecer diferentes metodologias de pesquisa, suas principais características e aplicações",
              "conhecimentos": []
            },
            {
              "tipo": "Capacidade Básica",
              "dominio": "Psicomotor",
              "texto": "Aplicar os princípios da informática na elaboração de textos, apresentações, pesquisas e planilhas relacionados à segurança e saúde do trabalho",
              "conhecimentos": []
            }
          ]
        },
        {
          "id": "MI_UC4",
          "codigo": "UC4",
          "nome": "Gestão de Pessoas Aplicada à Segurança e Saúde do Trabalho",
          "ch": 40,
          "cht": 16,
          "chp": 24,
          "padroes": [],
          "capacidades": [
            {
              "tipo": "Capacidade Básica",
              "dominio": "Cognitivo",
              "texto": "Reconhecer as técnicas de liderança de equipe",
              "conhecimentos": [
                "1.1 O comportamento das pessoas em equipes de trabalho",
                "1.2 Autoconhecimento e reconhecimento de competências (potencialidades e limitações)",
                "1.3 Relações interpessoais",
                "1.4 Resolução de conflitos e diversidade",
                "1.5 Fundamentos e técnicas de negociação e tomada de decisão",
                "1.6 Feedback 2. Técnicas de Entrevista 3. Técnicas de abordagem 4. Respeito às individualidades pessoais",
                "4.1 Relações de gênero e étnicoraciais",
                "4.2 Sociodiversidade e multiculturalismo",
                "4.3 Ética e cidadania 5. Planejamento",
                "5.1 Controle",
                "5.2 Etapas",
                "5.3 Níveis",
                "5.3.1 Gerencial",
                "5.3.2 Estratégico",
                "5.3.3 Operacional",
                "5.4 Organização 6. Etiqueta Profissional e Protocolo 7. Desenvolvimento de Equipes de Alto Desempenho",
                "7.1 Conceitos de grupo, equipe e time",
                "7.2 Networking - Trabalho em rede / equipes estendidas",
                "7.3 Papéis na Equipe",
                "7.4 Delegação",
                "7.5 Motivação e engajamento de pessoas e equipes",
                "7.6 Gestão compartilhada",
                "7.7 Teoria de grupos",
                "7.8 Vínculo, Colaboração e Conectividade 8. Condução de Reuniões"
              ]
            },
            {
              "tipo": "Capacidade Básica",
              "dominio": "Cognitivo",
              "texto": "Reconhecer técnicas de abordagem para estabelecer contato com os trabalhadores",
              "conhecimentos": []
            },
            {
              "tipo": "Capacidade Básica",
              "dominio": "Cognitivo",
              "texto": "Reconhecer técnicas de condução de reunião",
              "conhecimentos": []
            },
            {
              "tipo": "Capacidade Básica",
              "dominio": "Cognitivo",
              "texto": "Reconhecer técnicas de gestão de conflitos Copuidedo Básica",
              "conhecimentos": []
            },
            {
              "tipo": "Capacidade Básica",
              "dominio": "Cognitivo",
              "texto": "Reconhecer técnicas de planejamento",
              "conhecimentos": []
            },
            {
              "tipo": "Capacidade Básica",
              "dominio": "Cognitivo",
              "texto": "Utilizar técnicas de entrevistas para coleta de informações acerca dos processos e procedimentos laborais Cognac",
              "conhecimentos": []
            },
            {
              "tipo": "Capacidade Básica",
              "dominio": "Cognitivo",
              "texto": "Reconhecer técnicas para motivação de equipe Capscidade Básica",
              "conhecimentos": []
            },
            {
              "tipo": "Capacidade Básica",
              "dominio": "Cognitivo",
              "texto": "Reconhecer técnicas de negociação",
              "conhecimentos": []
            }
          ]
        }
      ]
    },
    {
      "id": "ME1",
      "nome": "Módulo Específico I",
      "ch": 336,
      "ucs": [
        {
          "id": "ME1_UC1",
          "codigo": "UC1",
          "nome": "Rotinas de Segurança e Saúde do Trabalho",
          "ch": 200,
          "cht": 80,
          "chp": 120,
          "padroes": [],
          "capacidades": [
            {
              "tipo": "Capacidade Técnica",
              "dominio": "Cognitivo",
              "texto": "Identificar, normas e notas técnicas aplicáveis ao ramo de atuação e ou atividade do local a ser inspecionado",
              "conhecimentos": [
                "1.1 Metodologias de avaliação de riscos",
                "1.1.1 Risco Grave e Iminente — NR 03",
                "1.2 Ferramentas",
                "1.2.1 Diagrama de causas e efeitos",
                "1.2.2 Gráfico de Pareto",
                "1.2.3 Árvore de causas",
                "1.2.4 Hazop",
                "1.2.5 Análise preliminar de risco — APR",
                "1.2.6 5W+2H",
                "1.2.7 Análise do tipo e efeito de falha — FMEA 2. Inspeções de Segurança",
                "2.1 Tipos",
                "2.2 Desvios e Erros",
                "2.3 Registro",
                "2.4 Execução da Inspeção",
                "2.5 Relatórios",
                "2.6 Meios para divulgação de informações",
                "2.7 Definição",
                "2.8 Planejamento",
                "2.9 Lista de Verificação (check list) 3. Normas Setoriais",
                "3.1 Atividades de Saúde - NR 32",
                "3.2 Portuário - NR 29",
                "3.3 Petróleo - NR 37",
                "3.4 Aquaviário - NR 30",
                "3.5 Frigoríficos - NR 36 4. Condições Sanitárias e de Conforto — NR 24 5. Ergonomia — NR17",
                "5.1 Intervenção ergonômica",
                "5.2 Definição",
                "5.3 Fatores de riscos",
                "5.4 Fisiologia do trabalho",
                "5.5 Análise ergonômica do trabalho",
                "5.6 Doenças relacionadas",
                "5.7 Avaliação Ergonômica preliminar",
                "5.8 Medidas preventivas, corretivas e de controle",
                "5.9 Condições de conforto no ambiente de trabalho",
                "5.9.1 Acústico",
                "5.9.2 Iluminação — NHO 11",
                "5.9.3 Térmico",
                "5.9.4 Instrumentos de Medição 6. Riscos de acidentes",
                "6.1 Medidas preventivas, corretivas e de controle",
                "6.2 Definição",
                "6.3 Tipos",
                "6.3.1 Atividades e Operações Perigosas — NR 16",
                "6.3.2 Animais peçonhentos",
                "6.3.3 Elétricos - NR 10",
                "6.3.4 Arranjo físico — NR 11,12,17",
                "6.3.5 Trabalho com caldeiras, vasos de pressão e tubulações- NR 13",
                "6.3.6 Incêndio e explosão — NR 19,20 e 23",
                "6.3.7 Trabalho a quente — NR 34",
                "6.3.8 Transporte, armazenamento e movimentação de cargas — NR 11",
                "6.3.9 Segurança em Máquinas e Equipamentos - NR 12",
                "6.3.10 Trabalho em altura - NR 35",
                "6.3.11 Intempéries",
                "6.3.12 Espaço confinado — NR 33",
                "6.3.13 Vazamento de produtos químicos 7. A construção da amabilidade no ambiente organizacional",
                "7.1 papel da liderança",
                "7.2 Diálogo, empatia, tolerância, altruísmo, a modéstia e a gratidão",
                "7.3 O exercício da amabilidade como caminho para o engajamento e a cooperação",
                "7.4 Os caminhos para a construção da amabilidade"
              ]
            },
            {
              "tipo": "Capacidade Técnica",
              "dominio": "Cognitivo",
              "texto": "Correlacionar as especificações dos equipamentos de avaliação com o padrão mínimo exigido nas Normas Técnicas",
              "conhecimentos": []
            },
            {
              "tipo": "Capacidade Técnica",
              "dominio": "Cognitivo",
              "texto": "Avaliar a necessidade de alteração e ou complementação das diretrizes de segurança do trabalho estabelecidas nos procedimentos operacionais e de emergência",
              "conhecimentos": []
            },
            {
              "tipo": "Capacidade Técnica",
              "dominio": "Cognitivo",
              "texto": "Correlacionar os resultados obtidos na avaliação quantitativa com os padrões estabelecidos na legislação",
              "conhecimentos": []
            },
            {
              "tipo": "Capacidade Técnica",
              "dominio": "Cognitivo",
              "texto": "Interpretar os relatórios de inspeção e avaliação de riscos para identificar se as medidas propostas no relatório estão sendo cumpridas",
              "conhecimentos": []
            },
            {
              "tipo": "Capacidade Técnica",
              "dominio": "Psicomotor",
              "texto": "Aplicar técnicas de análises quantitativas e qualitativas aplicáveis à avaliação de riscos",
              "conhecimentos": []
            },
            {
              "tipo": "Capacidade Técnica",
              "dominio": "Cognitivo",
              "texto": "Correlacionar os itens exigidos na legislação, normas e notas técnicas ao ramo de atuação e ou atividade identificadas in loco",
              "conhecimentos": []
            },
            {
              "tipo": "Capacidade Técnica",
              "dominio": "Cognitivo",
              "texto": "Identificar legislação, normas e notas técnicas aplicáveis ao ramo de atuação e ou atividade do local a ser inspecionado",
              "conhecimentos": []
            },
            {
              "tipo": "Capacidade Técnica",
              "dominio": "Cognitivo",
              "texto": "Identificar situações de risco grave e iminente durante a inspeção nos ambientes laborais, agindo de acordo com os procedimentos padrão e ou de emergência da empresa",
              "conhecimentos": []
            },
            {
              "tipo": "Capacidade Técnica",
              "dominio": "Cognitivo",
              "texto": "Correlacionar os itens exigidos na legislação, normas e notas técnicas, aplicáveis ao trabalho a ser desenvolvido",
              "conhecimentos": []
            },
            {
              "tipo": "Capacidade Técnica",
              "dominio": "Cognitivo",
              "texto": "Avaliar a evolução ou a mitigação dos riscos ocupacionais evidenciados no relatório",
              "conhecimentos": []
            },
            {
              "tipo": "Capacidade Técnica",
              "dominio": "Cognitivo",
              "texto": "Cumprir normas e procedimentos de segurança estabelecidos pela empresa para realização das atividades de inspeção, a fim de garantir a saúde e integridade física",
              "conhecimentos": []
            },
            {
              "tipo": "Capacidade Técnica",
              "dominio": "Cognitivo",
              "texto": "Cumprir normas e procedimentos de segurança estabelecidos pela empresa para avaliação de processo de trabalho e ou novo projeto, a fim de garantir a saúde e integridade física do trabalhador",
              "conhecimentos": []
            },
            {
              "tipo": "Capacidade Técnica",
              "dominio": "Cognitivo",
              "texto": "Identificar a Legislação, normas e notas técnicas aplicáveis ao ambiente laboral",
              "conhecimentos": []
            },
            {
              "tipo": "Capacidade Técnica",
              "dominio": "Cognitivo",
              "texto": "Correlacionar as diretrizes de segurança do trabalho descritas nos procedimentos com as atividades desenvolvidas no ambiente laboral",
              "conhecimentos": []
            },
            {
              "tipo": "Capacidade Técnica",
              "dominio": "Psicomotor",
              "texto": "Aplicar as técnicas e metodologia de avaliação adequada à classificação dos riscos do objeto de análise",
              "conhecimentos": []
            },
            {
              "tipo": "Capacidade Técnica",
              "dominio": "Cognitivo",
              "texto": "Reconhecer as técnicas de registro disponibilizadas pela empresa para as ações de segurança e saúde no ambiente do trabalho",
              "conhecimentos": []
            },
            {
              "tipo": "Capacidade Técnica",
              "dominio": "Cognitivo",
              "texto": "Identificar se os trabalhadores estão aptos a desenvolver as atividades laborais, conforme previsto na legislação",
              "conhecimentos": []
            },
            {
              "tipo": "Capacidade Técnica",
              "dominio": "Cognitivo",
              "texto": "Identificar os fluxos operacionais da empresa",
              "conhecimentos": []
            },
            {
              "tipo": "Capacidade Técnica",
              "dominio": "Cognitivo",
              "texto": "Identificar nos procedimentos operacionais as diretrizes relativas às ações de segurança do trabalho",
              "conhecimentos": []
            },
            {
              "tipo": "Capacidade Técnica",
              "dominio": "Cognitivo",
              "texto": "Identificar novas situações de riscos não contempladas inicialmente nos relatórios e avaliações",
              "conhecimentos": []
            },
            {
              "tipo": "Capacidade Técnica",
              "dominio": "Cognitivo",
              "texto": "Identificar, na legislação e normas técnicas, orientações sobre registro e guarda de documentos relativos as ações de segurança e saúde do trabalho",
              "conhecimentos": []
            },
            {
              "tipo": "Capacidade Técnica",
              "dominio": "Psicomotor",
              "texto": "Identificar os riscos inerentes às atividades laborais a serem avaliadas durante a inspeção, em conformidade com Legislação e Normas de segurança e saúde no trabalho Operar equipamentos de acordo com a técnica de análise adequada à classificação dos riscos do objeto de análise",
              "conhecimentos": []
            }
          ]
        },
        {
          "id": "ME1_UC2",
          "codigo": "UC2",
          "nome": "Higiene Ocupacional",
          "ch": 120,
          "cht": 48,
          "chp": 72,
          "padroes": [],
          "capacidades": [
            {
              "tipo": "Capacidade Técnica",
              "dominio": "Cognitivo",
              "texto": "Identificar os indicadores de saúde com base no PGR e relatório analítico do PCMSO e demais programas relacionados à saúde",
              "conhecimentos": [
                "1.1 Tipos",
                "1.2 Fontes",
                "1.3 Definição",
                "1.4 Efeitos da Exposição",
                "1.5 Avaliação",
                "1.6 Medidas de preventivas, corretivas e de controle 2. Riscos químicos",
                "2.1 Fontes",
                "2.2 Níveis de exposição",
                "2.3 Limites de tolerância nacionais e internacionais e nível de ação",
                "2.4 Avaliação",
                "2.4.1 OSHA, NIOSH, NHO 08 e ACGIH",
                "2.4.2 Instrumentos, acessórios e amostradores- Aplicação e Programação: Bombas de Amostragem",
                "2.4.3 Técnicas de amostragem",
                "2.4.4 Aferição e calibração do instrumento",
                "2.4.5 Amostragem, Envio do amostrador para análise laboratorial, Leitura e Interpretação do relatório analítico",
                "2.4.6 Cálculos aplicados",
                "2.5 Trajetória, meios de propagação e vias de absorção",
                "2.6 Ficha de identificação de segurança de produtos Químicos — FISPQ",
                "2.7 Definição",
                "2.8 Medidas preventivas e corretivas e de controle",
                "2.9 Efeitos da exposição",
                "2.10 Tipos 3. Risco Físico: Exposição ao frio",
                "3.1 Definição",
                "3.2 Efeitos da exposição",
                "3.3 Portaria SSST- 21 de 26/12/1994",
                "3.3.1 Instrumentos e acessórios de medição e controle- Aplicação e Registro de Dados: Termômetro",
                "3.4 Tipos",
                "3.5 Medidas preventivas, corretivas e de controle",
                "3.6 Avaliação",
                "3.7 Fontes 4. Umidade",
                "4.1 Definição",
                "4.2 Tipos",
                "4.3 Medidas preventivas, corretivas e de controle",
                "4.4 Fontes",
                "4.5 Avaliação",
                "4.6 Efeitos da exposição 5. Risco Físico: Radiação",
                "5.1 Tipos",
                "5.1.1 lonizante",
                "5.1.2 Não lonizante",
                "5.2 Efeitos da exposição",
                "5.3 Fontes",
                "5.4 Níveis de exposição",
                "5.5 Limites de tolerância e nível de ação",
                "5.6 Avaliação",
                "5.6.1 Tipos de Avaliação",
                "5.6.2 Portaria CNEN 0705",
                "5.7 Medidas preventivas, corretivas e de controle",
                "5.8 Definição 6. Risco Físico: Vibração",
                "6.1 Medidas preventivas e corretivas e de controle",
                "6.2 Níveis de exposição",
                "6.3 Limites de tolerância e nível de ação",
                "6.4 Definição",
                "6.4.1 Tipos",
                "6.5 Tipos",
                "6.5.1 De corpo inteiro",
                "6.5.2 Mãos e braços",
                "6.6 Fontes",
                "6.7 Efeitos da exposição",
                "6.8 Avaliação",
                "6.8.1 Instrumentos e acessórios de medição- Aplicação e Programação: Acelerômetro",
                "6.8.2 Medição: Amostragem, Extração da informação, Leitura e Interpretação",
                "6.8.3 NHO 09 e 10",
                "6.8.4 Cálculos aplicados",
                "6.8.5 Tipos de Avaliação",
                "6.8.6 Aferição e calibração do instrumento 7. Riscos Biológicos",
                "7.1 Tipos",
                "7.2 Fontes",
                "7.3 Avaliação",
                "7.3.1 Instrumentos e acessórios de medição e controle- Aplicação e Registro de Dados: Bomba de Amostragem e Amostradores Passivos",
                "7.4 Efeitos da exposição",
                "7.5 Definição",
                "7.6 Medidas preventivas, corretivas e de controle 8. Higiene ocupacional",
                "8.1 Princípios",
                "8.2 Terminologia técnica",
                "8.3 Grupos de exposição similares (GES) 9. Legislação aplicada a Higiene Ocupacional",
                "9.1 Notas Técnicas",
                "9.2 Normas Técnicas",
                "9.3 Normas Regulamentadoras",
                "9.3.1 NR 15",
                "9.3.2 NR 09",
                "9.3.3 NRO1",
                "9.4 Legislação trabalhista e previdenciária 10. Risco Físico- Pressão Sonora",
                "10.1 Tipos",
                "10.2 Medidas preventivas e corretivas e de controle",
                "10.3 Definição",
                "10.4 Efeitos da exposição",
                "10.5 Limites de tolerância e nível de ação",
                "10.6 Avaliação",
                "10.6.1 Aferição e calibração do instrumento",
                "10.6.2 Instrumentos e acessórios de medição - Aplicação e Programação: Decibelímetro e Audiodosímetro",
                "10.6.3 Dosimetria: Amostragem, Extração da informação, Leitura e Interpretação",
                "10.6.4 Tipos de Avaliação",
                "10.6.5 NHO 01",
                "10.6.6 Cálculos aplicados",
                "10.7 Fontes",
                "10.8 Níveis de exposição 11. Risco Físico: Exposição ao calor",
                "11.1 Definição",
                "11.2 Tipos",
                "11.3 Níveis de exposição",
                "11.4 Limites de tolerância e nível de ação",
                "11.5 Avaliação",
                "11.5.1 Tipos de Avaliação",
                "11.5.2 Amostragem, Registro e análise de dados",
                "11.5.3 Cálculos aplicados: Índice IBUTG e taxa de metabolismo",
                "11.5.4 NHO 06",
                "11.5.5 Instrumentos e acessórios de medição Aplicação e Programação: Medidor de estresse térmico",
                "11.5.6 Aferição e calibração do instrumento",
                "11.6 Medidas preventivas, corretivas e de controle",
                "11.6.1 Aclimatização e Aclimatação",
                "11.7 Fontes",
                "11.8 Efeitos da exposição 12. Controle Emocional no trabalho",
                "12.1 Autoconsciência",
                "12.2 Fatores internos e externos",
                "12.3 Emoções no trabalho",
                "12.3.1 Perceber",
                "12.3.2 Avaliar",
                "12.3.3 Expressar"
              ]
            },
            {
              "tipo": "Capacidade Técnica",
              "dominio": "Cognitivo",
              "texto": "Correlacionar os resultados obtidos na avaliação quantitativa com os padrões estabelecidos na legislação",
              "conhecimentos": []
            },
            {
              "tipo": "Capacidade Técnica",
              "dominio": "Cognitivo",
              "texto": "Identificar novas tecnologias inerentes a prevenção da saúde e segurança do Trabalho",
              "conhecimentos": []
            },
            {
              "tipo": "Capacidade Técnica",
              "dominio": "Cognitivo",
              "texto": "Correlacionar os resultados das inspeções e avaliações com a legislação vigente inerentes a SST",
              "conhecimentos": []
            },
            {
              "tipo": "Capacidade Técnica",
              "dominio": "Cognitivo",
              "texto": "Interpretar os dados das análises de saúde e segurança do trabalho, realizados na empresa",
              "conhecimentos": []
            },
            {
              "tipo": "Capacidade Técnica",
              "dominio": "Cognitivo",
              "texto": "Identificar legislação, normas e notas técnicas aplicáveis ao ambiente laboral",
              "conhecimentos": []
            },
            {
              "tipo": "Capacidade Técnica",
              "dominio": "Cognitivo",
              "texto": "Identificar a relação de custo x benefício dos bens e serviços associados à saúde e segurança do Trabalho",
              "conhecimentos": []
            },
            {
              "tipo": "Capacidade Técnica",
              "dominio": "Cognitivo",
              "texto": "Interpretar os dados do histórico, resultados de investigação de acidentes, incidentes e doenças ocupacionais para identificação de informações necessárias às medidas preventivas e corretivas de riscos no ambiente laboral",
              "conhecimentos": []
            },
            {
              "tipo": "Capacidade Técnica",
              "dominio": "Psicomotor",
              "texto": "Aplicar as técnicas de registro disponibilizadas pela empresa",
              "conhecimentos": []
            },
            {
              "tipo": "Capacidade Técnica",
              "dominio": "Cognitivo",
              "texto": "Identificar situações de risco grave e iminente durante a avaliação nos processos de trabalho e ou novos projetos, agindo de acordo com os procedimentos padrão e ou de emergência da empresa",
              "conhecimentos": []
            },
            {
              "tipo": "Capacidade Técnica",
              "dominio": "Cognitivo",
              "texto": "Identificar os fluxos operacionais da empresa",
              "conhecimentos": []
            },
            {
              "tipo": "Capacidade Técnica",
              "dominio": "Psicomotor",
              "texto": "Correlacionar os valores de novas aquisições com o orçamento disponível para ações de prevenção da saúde e segurança do Trabalho Operar equipamentos de acordo com a técnica de análise adequada à classificação dos riscos do objeto de análise",
              "conhecimentos": []
            },
            {
              "tipo": "Capacidade Técnica",
              "dominio": "Cognitivo",
              "texto": "Identificar os riscos inerentes às atividades laborais a serem avaliadas nos processos de trabalho e ou novos projetos Agrupar as funções de acordo com a semelhança à exposição de riscos",
              "conhecimentos": []
            },
            {
              "tipo": "Capacidade Técnica",
              "dominio": "Cognitivo",
              "texto": "Correlacionar as especificações dos equipamentos de avaliação com o padrão mínimo exigido nas Normas Técnicas Sem domínio definido",
              "conhecimentos": []
            },
            {
              "tipo": "Capacidade Técnica",
              "dominio": "Cognitivo",
              "texto": "Identificar legislação, normas e notas técnicas aplicáveis ao processo de trabalho e ou ao escopo do novo projeto",
              "conhecimentos": []
            },
            {
              "tipo": "Capacidade Técnica",
              "dominio": "Psicomotor",
              "texto": "Aplicar as técnicas de análises quantitativas e qualitativas de avaliação de riscos em conformidade com à classificação dos riscos do objeto de análise",
              "conhecimentos": []
            },
            {
              "tipo": "Capacidade Técnica",
              "dominio": "Cognitivo",
              "texto": "Cumprir normas e procedimentos de segurança estabelecidos pela empresa para avaliação de processo de trabalho e ou novo projeto, a fim de garantir a saúde e integridade física",
              "conhecimentos": []
            },
            {
              "tipo": "Capacidade Técnica",
              "dominio": "Psicomotor",
              "texto": "Aplicar legislação, normas e notas técnicas referentes a acidentes e doenças ocupacionais",
              "conhecimentos": []
            },
            {
              "tipo": "Capacidade Técnica",
              "dominio": "Cognitivo",
              "texto": "Identificar momentos de parada na produção para implementação de medidas corretivas e ou preventivas",
              "conhecimentos": []
            },
            {
              "tipo": "Capacidade Técnica",
              "dominio": "Cognitivo",
              "texto": "Identificar eventuais penalidades por ocasião do não atendimento às exigências legais",
              "conhecimentos": []
            },
            {
              "tipo": "Capacidade Técnica",
              "dominio": "Cognitivo",
              "texto": "Correlacionar os itens exigidos na legislação, normas e notas técnicas, ao ambiente laboral",
              "conhecimentos": []
            },
            {
              "tipo": "Capacidade Técnica",
              "dominio": "Cognitivo",
              "texto": "Classificar os acidentes e doenças de acordo com sua especificidade",
              "conhecimentos": []
            },
            {
              "tipo": "Capacidade Técnica",
              "dominio": "Cognitivo",
              "texto": "Identificar as medidas preventivas e corretivas estipuladas nos documentos de registro",
              "conhecimentos": []
            },
            {
              "tipo": "Capacidade Técnica",
              "dominio": "Cognitivo",
              "texto": "Identificar legislação, normas e notas técnicas aplicáveis ao processo de trabalho e ou ao escopo do novo projeto",
              "conhecimentos": []
            },
            {
              "tipo": "Capacidade Técnica",
              "dominio": "Cognitivo",
              "texto": "Identificar na legislação e normas técnicas, orientações sobre registro e guarda de documentos",
              "conhecimentos": []
            },
            {
              "tipo": "Capacidade Técnica",
              "dominio": "Cognitivo",
              "texto": "Identificar a descrição das funções e atribuições desempenhadas na empresa",
              "conhecimentos": []
            },
            {
              "tipo": "Capacidade Técnica",
              "dominio": "Cognitivo",
              "texto": "Correlacionar os itens exigidos na legislação, normas e notas técnicas, ao processo de trabalho e ou ao escopo do novo projeto",
              "conhecimentos": []
            }
          ]
        },
        {
          "id": "ME1_UC3",
          "codigo": "UC3",
          "nome": "Criatividade e Ideação em Projetos de Inovação",
          "ch": 16,
          "cht": 6,
          "chp": 10,
          "padroes": [],
          "capacidades": [
            {
              "tipo": "Capacidade Técnica",
              "dominio": "Psicomotor",
              "texto": "Elaborar o plano de gerenciamento do projeto a partir das necessidades dos interessados (stakeholders), considerando cronograma, escopo, aquisições e recursos",
              "conhecimentos": [
                "1.1 Definição de resultado final do projeto",
                "1.2 Características, funções e necessidades para o desenvolvimento do projeto (produto, serviço ou resultado esperado)",
                "1.3 Plano inicial de gerenciamento do projeto",
                "1.3.1 Necessidades dos interessados (stakeholders)",
                "1.3.2 Aquisições",
                "1.3.3 Recursos envolvidos",
                "1.3.4 Cronograma",
                "1.3.5 Restrições",
                "1.3.6 Plano de risco e perdas do projeto",
                "1.3.7 Escopo do projeto",
                "1.4 Previsão e delimitação de resultados parciais esperados 2. Ferramentas de ideação para a criação, elaboração e construção de soluções inovadoras",
                "2.1 Funções",
                "2.2 Sessões de ideação colaborativa",
                "2.3 Tipos de ferramentas de ideação",
                "2.3.1 Triz de ideias",
                "2.3.2 Matriz de alinhamento",
                "2.3.3 Como poderíamos?",
                "2.3.4 Mapa de empatia",
                "2.3.5 Crazy 8",
                "2.3.6 Benchmarking",
                "2.3.7 Brainstorming/Mural de possibilidades",
                "2.3.8 Matriz de prioridades",
                "2.3.9 Outras ferramentas",
                "2.3.10 Funil de ideias",
                "2.4 Características",
                "2.5 Requisitos de aplicação 3. Plano de risco e perdas do projeto",
                "3.1 Metodologias para a elaboração do projeto",
                "3.2 Tipos de ferramentas",
                "3.2.1 Planilhas de acompanhamento",
                "3.2.2 Painéis",
                "3.2.3 Formulários",
                "3.2.4 Ferramentas de apresentação",
                "3.2.5 Ferramentas físicas e digitais de gestão",
                "3.3 Documentação para o início do desenvolvimento do projeto 4. Requisitos da exequibilidade do projeto",
                "4.1 Normas técnicas aplicáveis ao projeto",
                "4.2 Resoluções",
                "4.3 Regulamentações",
                "4.3.1 Quanto às restrições",
                "4.3.2 Quanto às condições técnicas, financeiras, ambientais e de segurança",
                "4.3.3 Quanto à viabilidade",
                "4.4 Documentação para o desenvolvimento do projeto",
                "4.4.1 Relatórios",
                "4.4.2 Resumos executivos 5. Área e Segmento Tecnológico de Interesse alinhado ao perfil profissional",
                "5.1 Transformações históricas e recentes",
                "5.2 Necessidades, gargalos, oportunidades, riscos e desafios contemporâneos da área/segmento",
                "5.3 Características",
                "5.4 Tendências futuras",
                "5.4.1 Aspectos sociais",
                "5.4.2 Aspectos técnicos e tecnológicos",
                "5.4.3 Aspectos políticos",
                "5.4.4 Aspectos econômicos",
                "5.4.5 Aspectos ambientais",
                "5.5 Oportunidades de inovação na área ou segmento tecnológico",
                "5.5.1 Pesquisa de anterioridade",
                "5.5.2 Identificação e delimitação do tema e do problema a ser investigado",
                "5.5.3 Pesquisas bibliográficas",
                "5.5.4 Pesquisas de campo 6. Metodologias e ferramentas de pesquisa bibliográficas e de campo",
                "6.1 Para a sistematização de dados e informações",
                "6.2 Para análise de dados e informações",
                "6.3 Para a coleta de dados e informações 7. Identificação de problemas e necessidades no trabalho"
              ]
            },
            {
              "tipo": "Capacidade Técnica",
              "dominio": "Psicomotor",
              "texto": "Realizar pesquisa de campo com representantes das empresas e/ou da sociedade para a identificação de necessidades, gargalos, oportunidades, riscos e desafios para investigação e aprofundamento. Delimitar os resultados parciais esperados e o resultado final a ser alcançado pelo projeto.",
              "conhecimentos": []
            },
            {
              "tipo": "Capacidade Técnica",
              "dominio": "Psicomotor",
              "texto": "Aplicar ferramentas de ideação na criação, elaboração e construção de soluções inovadoras para necessidades, gargalos, oportunidades e desafios da indústria e/ou da sociedade.",
              "conhecimentos": []
            },
            {
              "tipo": "Capacidade Técnica",
              "dominio": "Cognitivo",
              "texto": "Selecionar as metodologias e ferramentas que melhor atendem aos objetivos da pesquisa e realidade estudada.",
              "conhecimentos": []
            },
            {
              "tipo": "Capacidade Técnica",
              "dominio": "Cognitivo",
              "texto": "Definir, na proposta do projeto, as características, a abrangência, as funções e as necessidades ao desenvolvimento do produto, serviço ou resultado esperado Sem domínio definido",
              "conhecimentos": []
            },
            {
              "tipo": "Capacidade Técnica",
              "dominio": "Cognitivo",
              "texto": "Analisar as características e transformações que tem impactado mais significativamente, no passado recente e no presente, a área ou segmento tecnológico de seu perfil profissional. Sem domínio definido",
              "conhecimentos": []
            },
            {
              "tipo": "Capacidade Técnica",
              "dominio": "Cognitivo",
              "texto": "Identificar as diferentes metodologias e ferramentas empregadas no levantamento, análise e sistematização de dados de pesquisas, suas características, finalidades específicas e requisitos de aplicação.",
              "conhecimentos": []
            },
            {
              "tipo": "Capacidade Técnica",
              "dominio": "Psicomotor",
              "texto": "Elaborar os documentos demandados para o início do desenvolvimento projeto, considerando as referências da metodologia adotada Sem domínio definido",
              "conhecimentos": []
            },
            {
              "tipo": "Capacidade Técnica",
              "dominio": "Psicomotor",
              "texto": "Conduzir sessões de ideação colaborativa para inspirar a geração de ideias que visem a encontrar soluções alternativas para necessidades, gargalos, oportunidades e desafios da indústria e/ou da sociedade.",
              "conhecimentos": []
            },
            {
              "tipo": "Capacidade Técnica",
              "dominio": "Cognitivo",
              "texto": "Reconhecer as principais ferramentas de ideação empregadas na elaboração de projetos de inovação, suas características, funções e requisitos de aplicação.",
              "conhecimentos": []
            },
            {
              "tipo": "Capacidade Técnica",
              "dominio": "Psicomotor",
              "texto": "Aplicar metodologias e ferramentas na coleta, análise e sistematização de dados de pesquisas.",
              "conhecimentos": []
            },
            {
              "tipo": "Capacidade Técnica",
              "dominio": "Cognitivo",
              "texto": "Definir o problema a ser investigado e sua delimitação a partir dos resultados dos seus estudos pregressos e de prospecção da área, segmento tecnológico ou segmento da sociedade de que trata o perfil profissional.",
              "conhecimentos": []
            },
            {
              "tipo": "Capacidade Técnica",
              "dominio": "Psicomotor",
              "texto": "Realizar pesquisas bibliográficas, buscando a identificação de necessidades, oportunidades, gargalos, riscos e desafios enfrentados pelas empresas e/ou pela sociedade Sem domínio definido",
              "conhecimentos": []
            },
            {
              "tipo": "Capacidade Técnica",
              "dominio": "Cognitivo",
              "texto": "Identificar tendências futuras da área ou segmento tecnológico de que trata o perfil profissional, considerando aspectos técnicos, sociais, econômicos, políticos e ambientais.",
              "conhecimentos": []
            },
            {
              "tipo": "Capacidade Técnica",
              "dominio": "Cognitivo",
              "texto": "Selecionar as ferramentas que melhor se adaptam ou atendem as necessidades de elaboração da proposta de projeto",
              "conhecimentos": []
            },
            {
              "tipo": "Capacidade Técnica",
              "dominio": "Cognitivo",
              "texto": "Identificar as estratégias de apresentação adequadas às necessidades do demandante Sem domínio definido",
              "conhecimentos": []
            },
            {
              "tipo": "Capacidade Técnica",
              "dominio": "Psicomotor",
              "texto": "Elaborar documentos (resumos executivos, relatórios, ...) referentes ao desenvolvimento do projeto, considerando as referências da metodologia adotada.",
              "conhecimentos": []
            },
            {
              "tipo": "Capacidade Técnica",
              "dominio": "Cognitivo",
              "texto": "Interpretar as normas técnicas, as resoluções e regulamentações que tratam da viabilidade, das restrições e das condições técnicas, financeiras, ambientais e de segurança que se aplicam ao projeto de inovação",
              "conhecimentos": []
            },
            {
              "tipo": "Capacidade Técnica",
              "dominio": "Psicomotor",
              "texto": "Realizar a análise e a sistematização de dados de pesquisas bibliográficas e de campo que consideram necessidades, oportunidades, gargalos e desafios enfrentados por empresas e/ou pela sociedade",
              "conhecimentos": []
            },
            {
              "tipo": "Capacidade Técnica",
              "dominio": "Cognitivo",
              "texto": "Utilizar ferramentas de apresentação em conformidade a ideia a ser apresentada",
              "conhecimentos": []
            }
          ]
        }
      ]
    },
    {
      "id": "ME2",
      "nome": "Módulo Específico II",
      "ch": 292,
      "ucs": [
        {
          "id": "ME2_UC1",
          "codigo": "UC1",
          "nome": "Coordenação de Programas e Procedimentos de Saúde e Segurança do Trabalho",
          "ch": 208,
          "cht": 83,
          "chp": 125,
          "padroes": [],
          "capacidades": [
            {
              "tipo": "Capacidade Técnica",
              "dominio": "Psicomotor",
              "texto": "Identificar as medidas propostas nos relatórios para realizar o planejamento de implantação das mesmas",
              "conhecimentos": [
                "1.1 Ferramentas da qualidade aplicadas à Segurança do Trabalho",
                "1.1.1 PDCA",
                "1.1.2 Histograma",
                "1.1.3 Matriz Swot",
                "1.1.4 Metodologia SMART",
                "1.1.5 5W2H",
                "1.1.6 Gráfico de Pareto",
                "1.1.7 Diagrama de Ishikawa 1.1.885",
                "1.2 Elaboração",
                "1.3 Avaliação",
                "1.4 Definição",
                "1.5 Aplicação",
                "1.6 Divulgação 2. Plano de trabalho",
                "2.1 Definição",
                "2.2 Análise de propostas",
                "2.3 Coleta de dados",
                "2.4 Viabilidade técnica",
                "2.5 Verificação e monitoramento",
                "2.6 Composição da equipe e responsabilidades",
                "2.7 Requisitos legais",
                "2.8 Prazos e metas 3. Liderança",
                "3.1 Delegação",
                "3.2 Gestão de conflitos",
                "3.3 Persuasão",
                "3.4 Críticas e sugestões: análise, ponderação e reação",
                "3.5 Feedback (positivo e negativo) - Causas e efeitos",
                "3.6 Estilos: democrático, centralizador e liberal",
                "3.7 Papéis do líder",
                "3.8 Empatia",
                "3.9 Empoderamento 4. Normas Regulamentadoras Setoriais",
                "4.1 Construção e Reparação Naval - NR 34",
                "4.2 Trabalho Rural — NR 31",
                "4.3 Construção Civil - NR 18",
                "4.4 Mineração — NR 22 5. Programas de segurança e saúde no trabalho",
                "5.1 Programa de Conservação Auditiva -PCA",
                "5.2 Programa de Prevenção da Exposição Ocupacional ao Benzeno — PPEOB",
                "5.3 Programa de Gerenciamento de Risco NR 01 e Setoriais (NR 18, 22,31 e 32)",
                "5.3.1 Plano de Ação",
                "5.3.2 Metodologias de Avaliação de Risco",
                "5.3.3 Inventário de Risco",
                "5.4 Programa de controle Médico e saúde ocupacional (PCMSO)",
                "5.5 Programa de Proteção Respiratória -PPR 6. Relatórios e documentos de registros",
                "6.1 Estrutura do documento",
                "6.2 Interpretação gráfica",
                "6.3 Análise de dados 7. Procedimentos de Segurança",
                "7.1 Definição",
                "7.2 Etapas",
                "7.3 Elaboração 8. Viabilidade técnica e financeira de aplicação de projetos de saúde e segurança do trabalho",
                "8.1 Recursos humanos",
                "8.2 Novas tecnologias",
                "8.3 Recursos físicos",
                "8.4 Recursos materiais",
                "8.5 Custos e benefício dos investimentos em segurança 9. Gestão de Emergências em SST",
                "9.1 Definição de Sinistro",
                "9.2 Legislação Estadual e NR 23",
                "9.3 Classe de Incêndio",
                "9.4 Identificação de cenário",
                "9.5 Emergência e Risco de Incêndio",
                "9.6 Planos de Emergência",
                "9.7 Equipamentos de Proteção e Combate a incêndio",
                "9.7.1 Definição",
                "9.7.2 Manutenção",
                "9.7.3 Utilização",
                "9.7.4 Aplicações",
                "9.7.5 Tipos: individual e coletivo",
                "9.7.6 Validade",
                "9.8 Primeiros Socorros",
                "9.8.1 Protocolos: Nacionais e Internacionais",
                "9.8.2 Tipos",
                "9.8.3 Técnicas para remoção e transporte de acidentados",
                "9.9 Simulados",
                "9.10 Brigadas de Emergência- NBR 14276",
                "9.11 Emergências com Produtos Perigosos",
                "9.11.1 Armazenamento",
                "9.11.2 Transporte"
              ]
            },
            {
              "tipo": "Capacidade Técnica",
              "dominio": "Cognitivo",
              "texto": "Identificar os resultados de exames considerados anormais, para estabelecer medidas corretivas",
              "conhecimentos": []
            },
            {
              "tipo": "Capacidade Técnica",
              "dominio": "Cognitivo",
              "texto": "Interpretar os dados do histórico, resultados de investigação de acidentes, incidentes e doenças ocupacionais para definir as prioridades relacionadas às medidas preventivas e corretivas",
              "conhecimentos": []
            },
            {
              "tipo": "Capacidade Técnica",
              "dominio": "Cognitivo",
              "texto": "Identificar os itens exigidos na legislação, normas e notas técnicas relacionados ao ramo de atuação e ou atividade do local, para estabelecer programas e procedimentos de saúde, segurança e meio ambiente do trabalho * Identificar no planejamento estratégico as diretrizes relativas às ações de segurança do trabalho ( 4,5,6)",
              "conhecimentos": []
            },
            {
              "tipo": "Capacidade Técnica",
              "dominio": "Cognitivo",
              "texto": "Interpretar os dados dos relatórios de auditorias e documentos técnicos para definir as prioridades relacionadas às medidas preventivas e corretivas",
              "conhecimentos": []
            },
            {
              "tipo": "Capacidade Técnica",
              "dominio": "Cognitivo",
              "texto": "Reconhecer legislação, normas e notas técnicas aplicáveis ao ramo de atuação e ou atividade da empresa",
              "conhecimentos": []
            },
            {
              "tipo": "Capacidade Técnica",
              "dominio": "Cognitivo",
              "texto": "Analisar diferentes metodologias para a definição das etapas a serem consideradas no desenvolvimento do projeto Contemplar, em seu plano de trabalho, novas situações de riscos não previstas inicialmente nos relatórios e avaliações",
              "conhecimentos": []
            },
            {
              "tipo": "Capacidade Técnica",
              "dominio": "Psicomotor",
              "texto": "Monitorar a execução orçamentária prevista para ações de saúde e segurança do trabalho",
              "conhecimentos": []
            },
            {
              "tipo": "Capacidade Técnica",
              "dominio": "Cognitivo",
              "texto": "Identificar as principais referências da literatura aplicadas a saúde e segurança do trabalho * Correlacionar o custo beneficio da implantação de novas tecnologias e métodos de trabalho aplicados a gestão da saúde e segurança do trabalho (7)",
              "conhecimentos": []
            },
            {
              "tipo": "Capacidade Técnica",
              "dominio": "Cognitivo",
              "texto": "Reconhecer a descrição técnica das medidas preventivas para embasar as especificações e ou aquisições em conformidade com o orçamento disponibilizado para as ações de saúde e segurança do trabalho",
              "conhecimentos": []
            },
            {
              "tipo": "Capacidade Técnica",
              "dominio": "Psicomotor",
              "texto": "Monitorar a execução dos planos de ação gerados em função das auditorias e documentos técnicos referentes a saúde e segurança do trabalho",
              "conhecimentos": []
            },
            {
              "tipo": "Capacidade Técnica",
              "dominio": "Cognitivo",
              "texto": "Interpretar os dados dos relatórios de auditorias e documentos técnicos para definir as prioridades relacionadas às medidas preventivas e corretivas",
              "conhecimentos": []
            },
            {
              "tipo": "Capacidade Técnica",
              "dominio": "Cognitivo",
              "texto": "Identificar legislação, normas e notas técnicas aplicáveis ao ambiente laboral",
              "conhecimentos": []
            },
            {
              "tipo": "Capacidade Técnica",
              "dominio": "Cognitivo",
              "texto": "Analisar os requisitos estabelecidos para o projeto à luz das normas técnicas, ambientais, de qualidade, de saúde e segurança Estimar recursos humanos, financeiros, físicos e materiais para execução das ações de saúde e segurança do trabalho",
              "conhecimentos": []
            },
            {
              "tipo": "Capacidade Técnica",
              "dominio": "Cognitivo",
              "texto": "Identificar os itens exigidos na legislação, normas e notas técnicas relacionados ao ramo de atuação e ou atividade do local, para estabelecimento do plano de trabalho",
              "conhecimentos": []
            },
            {
              "tipo": "Capacidade Técnica",
              "dominio": "Cognitivo",
              "texto": "Identificar nas avaliações quais agentes apresentam resultado acima do limite de tolerância para estabelecer os procedimentos adequados",
              "conhecimentos": []
            },
            {
              "tipo": "Capacidade Técnica",
              "dominio": "Cognitivo",
              "texto": "Reconhecer legislação, normas e notas técnicas aplicáveis ao ramo de atuação e ou atividade do local a ser inspecionado",
              "conhecimentos": []
            },
            {
              "tipo": "Capacidade Técnica",
              "dominio": "Cognitivo",
              "texto": "Identificar nos relatórios a necessidade de procedimentos de saúde e segurança e meio ambiente do trabalho para preservar a saúde e integridade física dos trabalhadores",
              "conhecimentos": []
            },
            {
              "tipo": "Capacidade Técnica",
              "dominio": "Cognitivo",
              "texto": "Identificar os programas de treinamento estabelecido pela empresa",
              "conhecimentos": []
            },
            {
              "tipo": "Capacidade Técnica",
              "dominio": "Cognitivo",
              "texto": "Identificar as principais causas de afastamento de trabalhadores",
              "conhecimentos": []
            },
            {
              "tipo": "Capacidade Técnica",
              "dominio": "Cognitivo",
              "texto": "Correlacionar os itens exigidos na legislação, normas e notas técnicas ao ramo de atuação e ou atividade da empresa",
              "conhecimentos": []
            },
            {
              "tipo": "Capacidade Técnica",
              "dominio": "Cognitivo",
              "texto": "Analisar variáveis relevantes que impactam a viabilidade técnica, econômica e ambiental do projeto",
              "conhecimentos": []
            },
            {
              "tipo": "Capacidade Técnica",
              "dominio": "Cognitivo",
              "texto": "Reconhecer legislação, normas e notas técnicas aplicáveis ao ramo de atuação e ou atividade da empresa.",
              "conhecimentos": []
            }
          ]
        },
        {
          "id": "ME2_UC2",
          "codigo": "UC2",
          "nome": "Planejamento e Execução de Ações Educativas",
          "ch": 40,
          "cht": 16,
          "chp": 24,
          "padroes": [],
          "capacidades": [
            {
              "tipo": "Capacidade Técnica",
              "dominio": "Cognitivo",
              "texto": "Identificar legislação, normas e notas técnicas aplicáveis ao ambiente laboral",
              "conhecimentos": [
                "1.1 Tipos",
                "1.1.1 Palestras",
                "1.1.2 Campanhas",
                "1.1.3 Seminários",
                "1.1.4 DDS",
                "1.1.5 Treinamentos (inicial, periódico e eventual)",
                "1.1.6 SIPAT",
                "1.2 Registros de ações educativas",
                "1.3 Definição",
                "1.4 Programas de capacitação - NR 01",
                "1.4.1 Requisitos",
                "1.4.2 Modalidades (Presencial, semipresencial, Ead)",
                "1.4.3 Aproveitamento de Treinamentos",
                "1.5 Divulgação de informações de saúde e segurança do trabalho 2. Planejamento",
                "2.1 Recursos: humanos, financeiros e materiais",
                "2.2 Estratégias",
                "2.2.1 Simulação",
                "2.2.2 Uso de ferramentas digitais",
                "2.2.3 Gamificação",
                "2.2.4 Dinâmicas",
                "2.2.5 Demonstração",
                "2.3 Instrumentos de avaliação",
                "2.3.1 Aplicação",
                "2.3.2 Elaboração",
                "2.4 Publico Alvo",
                "2.5 Certificação",
                "2.6 Cronograma 3. Elaboração de Material didático",
                "3.1 Cartilhas",
                "3.2 Materiais de divulgação",
                "3.3 Folders 4. Formação no trabalho",
                "4.1 Programas de Integração",
                "4.2 Programas de formação corporativa",
                "4.3 Treinamento e desenvolvimento de pessoas"
              ]
            },
            {
              "tipo": "Capacidade Técnica",
              "dominio": "Cognitivo",
              "texto": "Correlacionar os itens exigidos na legislação, normas e notas técnicas com as capacitações a serem planejadas",
              "conhecimentos": []
            },
            {
              "tipo": "Capacidade Técnica",
              "dominio": "Cognitivo",
              "texto": "Identificar a descrição das funções e atribuições desempenhadas na empresa Agrupar as funções de acordo com as necessidades de treinamento",
              "conhecimentos": []
            },
            {
              "tipo": "Capacidade Técnica",
              "dominio": "Cognitivo",
              "texto": "Identificar novas tecnologias e métodos de trabalho que possam ser aplicados a melhoria dos treinamentos e capacitações em saúde e segurança do trabalho Estimar recursos humanos, financeiros, físicos e materiais para execução dos programas de capacitação",
              "conhecimentos": []
            },
            {
              "tipo": "Capacidade Técnica",
              "dominio": "Cognitivo",
              "texto": "Reconhecer os fluxos operacionais e processo produtivo da empresa para planejamento da execução dos treinamentos Estabelecer treinamentos e metodologias apropriadas ao perfil educacional dos trabalhadores da empresa",
              "conhecimentos": []
            },
            {
              "tipo": "Capacidade Técnica",
              "dominio": "Cognitivo",
              "texto": "Avaliar a eficácia do treinamento para estabelecer ações de melhoria contínua",
              "conhecimentos": []
            },
            {
              "tipo": "Capacidade Técnica",
              "dominio": "Cognitivo",
              "texto": "Identificar os programas de treinamento estabelecido pela empresa",
              "conhecimentos": []
            },
            {
              "tipo": "Capacidade Técnica",
              "dominio": "Cognitivo",
              "texto": "Reconhecer legislação, normas e notas técnicas aplicáveis ao ramo de atuação e ou atividade do local",
              "conhecimentos": []
            }
          ]
        },
        {
          "id": "ME2_UC3",
          "codigo": "UC3",
          "nome": "Modelagem de Projetos de Inovação",
          "ch": 20,
          "cht": 8,
          "chp": 12,
          "padroes": [],
          "capacidades": [
            {
              "tipo": "Capacidade Técnica",
              "dominio": "Psicomotor",
              "texto": "Elaborar, de forma clara e objetiva, os documentos demandados pela proposta de valor e pelo modelo de negócio do projeto a ser desenvolvido.",
              "conhecimentos": [
                "1.1 Proposição de hipóteses",
                "1.2 Validação de resultados",
                "1.3 Acolhimento de indicações e sugestões",
                "1.4 Testagem de hipóteses 2. Recursos demandados pelo projeto",
                "2.1 Necessidades de recursos materiais",
                "2.2 Previsão de soluções tecnológicas",
                "2.2.1 Relação custo x benefício",
                "2.3 Necessidades de recursos estruturais",
                "2.4 Necessidades de recursos humanos",
                "2.5 Necessidades de recursos financeiros 3. Estudos de viabilidade Técnica e Financeira",
                "3.1 Documentação técnica de estudos de viabilidade técnica e financeira",
                "3.2 Ferramentas e Tecnologias aplicadas à captura, estruturação e à sistematização de dados para estudos de Viabilidade Técnica e Financeira",
                "3.2.1 Planilhas eletrônicas",
                "3.2.2 Sites de busca",
                "3.3 Sistematização de dados e informações técnicas, econômicas e financeiras",
                "3.4 Necessidades de investimentos",
                "3.4.1 Parcerias",
                "3.4.2 Órgãos de fomento e financiamento",
                "3.5 Critérios para a tomada de decisão 4. Proposta de valor e modelo de negócios",
                "4.1 Metodologias e ferramentas aplicadas à construção de propostas de valor e modelo de negócios: tipos, características e aplicação na construção de proposta de valor",
                "4.1.1 Ferramentas do Design Thinkng e Métodos Ágeis: Project Model Canvas; Buisness Model Canvas, Canvas da Proposta de Valor",
                "4.2 Documentos da proposta de valor e modelo de negócios",
                "4.2.1 Relatórios",
                "4.2.2 Vídeos",
                "4.2.3 Apresentações",
                "4.2.4 Resumos executivos",
                "4.3 Referenciais e aspectos indispensáveis à construção de propostas de valor e do modelo de negócios",
                "4.4 Bases conceituais",
                "4.5 Descrição dos pilares da proposta de valor e modelo de negócio",
                "4.5.1 Considerando benefícios do produto/serviço",
                "4.5.2 Considerando concorrentes",
                "4.5.3 Considerando a linguagem para a comunicação do projeto (marketing)",
                "4.6 Simulação e representação gráfica da construção de proposta de valor e modelo de negócios"
              ]
            },
            {
              "tipo": "Capacidade Técnica",
              "dominio": "Cognitivo",
              "texto": "Identificar as tecnologias que são tecnicamente compatíveis com a natureza e objetivos do projeto do ponto de vista do seu custo x benefício.",
              "conhecimentos": []
            },
            {
              "tipo": "Capacidade Técnica",
              "dominio": "Cognitivo",
              "texto": "Organizar as necessidades de recursos humanos para cada etapa e necessidade do projeto de inovação",
              "conhecimentos": []
            },
            {
              "tipo": "Capacidade Técnica",
              "dominio": "Cognitivo",
              "texto": "Avaliar as melhores soluções tecnológicas para o atendimento dos objetivos e necessidades do cliente e adequação às características e condições do contexto de execução do projeto.",
              "conhecimentos": []
            },
            {
              "tipo": "Capacidade Técnica",
              "dominio": "Cognitivo",
              "texto": "Definir os pilares da proposta de valor do projeto de inovação validado com o demandante e/ou usuário, considerando os concorrentes, os benefícios do produto/serviço e a linguagem a ser utilizada na comunicação do projeto (marketing). Sistematizar dados e informações resultantes de estudos de viabilidade técnica e financeira para projetos de inovação",
              "conhecimentos": []
            },
            {
              "tipo": "Capacidade Técnica",
              "dominio": "Cognitivo",
              "texto": "Definir os pilares do modelo de negócio para as diferentes propostas de valor do projeto a ser desenvolvido",
              "conhecimentos": []
            },
            {
              "tipo": "Capacidade Técnica",
              "dominio": "Psicomotor",
              "texto": "Realizar a descrição dos pilares que vão orientar a elaboração da proposta de valor e do modelo de negócio do projeto de inovação validado com o demandante e/ou usuário, considerando as informações relacionadas a concorrentes, os benefícios do produto/serviço e a linguagem a ser utilizada na comunicação do projeto (marketing). Sem domínio definido",
              "conhecimentos": []
            },
            {
              "tipo": "Capacidade Técnica",
              "dominio": "Cognitivo",
              "texto": "Identificar os recursos humanos, estruturais e materiais necessários para o desenvolvimento do produto, serviço ou resultado esperado para o problema em questão.",
              "conhecimentos": []
            },
            {
              "tipo": "Capacidade Técnica",
              "dominio": "Cognitivo",
              "texto": "Organizar os recursos técnicos, tecnológicos e financeiros disponíveis que atendam aos objetivos e requisitos do projeto de inovação.",
              "conhecimentos": []
            },
            {
              "tipo": "Capacidade Técnica",
              "dominio": "Cognitivo",
              "texto": "Interpretar as bases conceituais e os referenciais teóricos que dão sustentação aos aspectos indispensáveis que orientam a construção de uma proposta de valor e modelo de negócio.",
              "conhecimentos": []
            },
            {
              "tipo": "Capacidade Técnica",
              "dominio": "Psicomotor",
              "texto": "Realizar simulações e a representação gráfica da construção da proposta de valor e do modelo de negócios do projeto de inovação pela aplicação de metodologias e ferramentas que considerem o tipo e as características do projeto, o ponto de vista, expectativas e necessidades do cliente e, também, os ganhos proporcionados pela solução.",
              "conhecimentos": []
            },
            {
              "tipo": "Capacidade Técnica",
              "dominio": "Cognitivo",
              "texto": "Identificar os órgãos de fomento e financiamento e/ou as potenciais parcerias que possam viabilizar, do ponto de vista financeiro, o projeto de inovação",
              "conhecimentos": []
            },
            {
              "tipo": "Capacidade Técnica",
              "dominio": "Cognitivo",
              "texto": "Reconhecer as ferramentas e tecnologias e sua aplicação à captura (sites de busca) e ao processamento de dados técnicos, tecnológicos e econômicos (planilhas eletrônicas) que poderão contribuir para a tomada de decisões quanto à viabilidade financeira do projeto.",
              "conhecimentos": []
            }
          ]
        },
        {
          "id": "ME2_UC4",
          "codigo": "UC4",
          "nome": "Prototipagem de Negócios Inovadores",
          "ch": 24,
          "cht": 10,
          "chp": 14,
          "padroes": [],
          "capacidades": [
            {
              "tipo": "Capacidade Técnica",
              "dominio": "Cognitivo",
              "texto": "Selecionar as ferramentas que melhor se adaptam ou atendem as necessidades de sistematização de dados e a estruturação da documentação referente ao processo de prototipagem",
              "conhecimentos": [
                "1.1 Análise de Cenários",
                "1.2 Análise Crítica",
                "1.3 Identificação do problema 2. Protótipos para projetos de inovação",
                "2.1 Tipos de protótipos",
                "2.1.1 Protótipo ou modelagem virtual",
                "2.1.2 MVP (Mínimo Produto Viável)",
                "2.1.3 Protótipo sujo",
                "2.1.4 Protótipo funcional",
                "2.2 Testes de funcionalidades",
                "2.2.1 Ferramentas",
                "2.2.2 Métodos e Técnicas",
                "2.3 Bases conceituais",
                "2.4 Provas de conceito",
                "2.4.1 Reavaliação da viabilidade do protótipo",
                "2.4.2 Métodos e Técnicas",
                "2.4.3 Ferramentas",
                "2.5 Documentação da prototipagem",
                "2.5.1 Organização e sistematização de dados dos processos de prototipagem"
              ]
            },
            {
              "tipo": "Capacidade Técnica",
              "dominio": "Cognitivo",
              "texto": "Definir os testes de funcionalidade da solução a partir das características, requisitos e objetivos estabelecidos para o projeto de inovação",
              "conhecimentos": []
            },
            {
              "tipo": "Capacidade Técnica",
              "dominio": "Cognitivo",
              "texto": "Organizar fontes fornecedoras das tecnologias necessárias para o desenvolvimento dos protótipos",
              "conhecimentos": []
            },
            {
              "tipo": "Capacidade Técnica",
              "dominio": "Psicomotor",
              "texto": "Realizar testes e/ou provas de conceito relacionados aos protótipos de baixa fidelidade, utilizando as técnicas e ferramentas definidas",
              "conhecimentos": []
            },
            {
              "tipo": "Capacidade Técnica",
              "dominio": "Psicomotor",
              "texto": "Realizar a organização e a sistematização de dados referentes ao processo de prototipagem realizado, considerando padrões e referências técnicas estabelecidas.",
              "conhecimentos": []
            },
            {
              "tipo": "Capacidade Técnica",
              "dominio": "Cognitivo",
              "texto": "Reconhecer os recursos tecnológicos empregados e respectivos custos, bem como os métodos, as técnicas e os requisitos que impactam a execução da prototipagem a ser realizada.",
              "conhecimentos": []
            },
            {
              "tipo": "Capacidade Técnica",
              "dominio": "Psicomotor",
              "texto": "Elaborar a documentação técnica referente aos processos de prototipagem das soluções de inovação, considerando padrões e referências técnicas estabelecidas.",
              "conhecimentos": []
            },
            {
              "tipo": "Capacidade Técnica",
              "dominio": "Cognitivo",
              "texto": "Selecionar as técnicas de prototipagem em função do tipo e das características da solução de que trata o projeto de inovação.",
              "conhecimentos": []
            },
            {
              "tipo": "Capacidade Técnica",
              "dominio": "Cognitivo",
              "texto": "Analisar os resultados dos estudos de viabilidade técnica, econômica e ambiental do projeto de inovação à luz das referências legais e normativas e dos requisitos do demandante e/ou usuário.",
              "conhecimentos": []
            },
            {
              "tipo": "Capacidade Técnica",
              "dominio": "Psicomotor",
              "texto": "Realizar a prototipagem das soluções demandadas para o projeto de inovação a partir de especificações técnicas estabelecidas e dos recursos tecnológicos selecionados",
              "conhecimentos": []
            },
            {
              "tipo": "Capacidade Técnica",
              "dominio": "Cognitivo",
              "texto": "Definir, quando for o caso, para fins de análise da viabilidade técnica, econômica e ambiental, a modelagem e a simulação virtual do projeto de inovação pela utilização dos recursos computacionais que se aplicam ao tipo de projeto.",
              "conhecimentos": []
            },
            {
              "tipo": "Capacidade Técnica",
              "dominio": "Psicomotor",
              "texto": "Elaborar documentos técnicos (relatórios, estudos comparativos, ...) a partir dos resultados obtidos pelos protótipos desenvolvidos",
              "conhecimentos": []
            },
            {
              "tipo": "Capacidade Técnica",
              "dominio": "Cognitivo",
              "texto": "Identificar as necessidades de tecnologias, componentes, estruturas e recursos humanos nas diferentes etapas da prototipagem do projeto de inovação",
              "conhecimentos": []
            }
          ]
        }
      ]
    },
    {
      "id": "ME3",
      "nome": "Módulo Específico III",
      "ch": 80,
      "ucs": [
        {
          "id": "ME3_UC1",
          "codigo": "UC1",
          "nome": "Assessoria e Consultoria em Saúde, Segurança e Meio Ambiente do Trabalho",
          "ch": 60,
          "cht": 24,
          "chp": 36,
          "padroes": [],
          "capacidades": [
            {
              "tipo": "Capacidade Técnica",
              "dominio": "Cognitivo",
              "texto": "Correlacionar as diretrizes de segurança do trabalho descritas nos procedimentos com as atividades desenvolvidas no ambiente laboral",
              "conhecimentos": [
                "1.1 Vistoria",
                "1.2 Auto de Infração — NR28",
                "1.3 Termo de Ajuste de Conduta — TAC",
                "1.4 Embargos e Interdição — NR 03",
                "1.5 Perícias 2. Empreendedorismo",
                "2.1 Conceitos básicos",
                "2.2 A inovação nas rotinas de trabalho",
                "2.3 Autoempreendedorismo",
                "2.4 Espírito empreendedor 3. Planejamento da Assessoria/Consultoria",
                "3.1 Precificação / Custos",
                "3.2 Elaboração de proposta comercial",
                "3.3 Análise da Demanda",
                "3.4 Definição de Escopo",
                "3.5 Cronograma 4. Execução da Consultoria",
                "4.1 Relatório final da Consultoria",
                "4.2 Visita dos ambientes e Coleta de evidências",
                "4.3 Apresentação das etapas da consultoria",
                "4.4 Reunião de entrega do Relatório 5. Assessoria e Consultoria Técnica em Segurança e Saúde no Trabalho",
                "5.1 Perfil do assessor consultor",
                "5.2 Definições",
                "5.3 Objetivo",
                "5.4 Abordagem Consultiva",
                "5.5 Tipos 6. Ferramentas Digitais de SST",
                "6.1 Manuseio de plataformas para gerenciamento de dados em SST e interface com o E-Social"
              ]
            },
            {
              "tipo": "Capacidade Técnica",
              "dominio": "Cognitivo",
              "texto": "Identificar a relação de custo x benefício dos bens e serviços associados à saúde e segurança do Trabalho",
              "conhecimentos": []
            },
            {
              "tipo": "Capacidade Técnica",
              "dominio": "Psicomotor",
              "texto": "Elaborar proposta orçamentária de serviços para atendimento da demanda",
              "conhecimentos": []
            },
            {
              "tipo": "Capacidade Técnica",
              "dominio": "Cognitivo",
              "texto": "Identificar eventuais penalidades por ocasião do não atendimento às exigências legais",
              "conhecimentos": []
            },
            {
              "tipo": "Capacidade Técnica",
              "dominio": "Cognitivo",
              "texto": "Interpretar os dados dos relatórios de auditorias e documentos técnicos para análise da demanda",
              "conhecimentos": []
            },
            {
              "tipo": "Capacidade Técnica",
              "dominio": "Cognitivo",
              "texto": "Correlacionar os itens exigidos na legislação, normas e notas técnicas para análise da demanda",
              "conhecimentos": []
            },
            {
              "tipo": "Capacidade Técnica",
              "dominio": "Cognitivo",
              "texto": "Interpretar os dados das notificações e autos de infrações para análise da demanda (2)",
              "conhecimentos": []
            },
            {
              "tipo": "Capacidade Técnica",
              "dominio": "Cognitivo",
              "texto": "Identificar os fluxos operacionais da empresa",
              "conhecimentos": []
            },
            {
              "tipo": "Capacidade Técnica",
              "dominio": "Cognitivo",
              "texto": "Correlacionar os valores de novas aquisições com o orçamento disponível para ações de prevenção e ou de correção da saúde e segurança do Trabalho",
              "conhecimentos": []
            },
            {
              "tipo": "Capacidade Técnica",
              "dominio": "Cognitivo",
              "texto": "Correlacionar os itens identificados nas auditorias em saúde, segurança e meio ambiente do trabalho com os requisitos estabelecidos em normatizações internas e ou externas",
              "conhecimentos": []
            },
            {
              "tipo": "Capacidade Técnica",
              "dominio": "Psicomotor",
              "texto": "Aplicar legislação, normas e notas técnicas referentes a acidentes e doenças ocupacionais para análise da demanda",
              "conhecimentos": []
            },
            {
              "tipo": "Capacidade Técnica",
              "dominio": "Cognitivo",
              "texto": "Correlacionar os itens exigidos na legislação, normas e notas técnicas para elaboração do relatório do serviço de assessoria",
              "conhecimentos": []
            },
            {
              "tipo": "Capacidade Técnica",
              "dominio": "Cognitivo",
              "texto": "Interpretar os dados do histórico, resultados de investigação de acidentes, incidentes e doenças ocupacionais para definir as prioridades conforme a demanda.",
              "conhecimentos": []
            },
            {
              "tipo": "Capacidade Técnica",
              "dominio": "Psicomotor",
              "texto": "Identificar a descrição das funções e atribuições desempenhadas na empresa Consolidar as informações obtidas para elaboração do diagnóstico Aplicaras técnicas de registro disponibilizadas pela empresa",
              "conhecimentos": []
            },
            {
              "tipo": "Capacidade Técnica",
              "dominio": "Cognitivo",
              "texto": "Avaliar a necessidade de alteração e ou complementação das diretrizes de segurança do trabalho estabelecidas nos procedimentos operacionais e de emergência",
              "conhecimentos": []
            },
            {
              "tipo": "Capacidade Técnica",
              "dominio": "Cognitivo",
              "texto": "Correlacionar os resultados obtidos na avaliação quantitativa com os padrões estabelecidos na legislação",
              "conhecimentos": []
            },
            {
              "tipo": "Capacidade Técnica",
              "dominio": "Cognitivo",
              "texto": "Identificar novas tecnologias inerentes a prevenção da saúde e segurança do Trabalho ——— + —————",
              "conhecimentos": []
            },
            {
              "tipo": "Capacidade Técnica",
              "dominio": "Cognitivo",
              "texto": "Correlacionar os itens exigidos na legislação, normas e notas técnicas ao ramo de atuação e ou atividade da empresa para análise da demanda",
              "conhecimentos": []
            },
            {
              "tipo": "Capacidade Técnica",
              "dominio": "Cognitivo",
              "texto": "Identificar legislação, normas e notas técnicas aplicáveis ao ramo de atuação e ou atividade do local a ser inspecionado",
              "conhecimentos": []
            },
            {
              "tipo": "Capacidade Técnica",
              "dominio": "Cognitivo",
              "texto": "Interpretar os dados fornecidos pelo diagnóstico para elaboração do relatório do serviço de assessoria",
              "conhecimentos": []
            },
            {
              "tipo": "Capacidade Técnica",
              "dominio": "Cognitivo",
              "texto": "Cumprir normas e procedimentos de segurança estabelecidos pela empresa para realização das atividades de inspeção, a fim de garantir a saúde e integridade física",
              "conhecimentos": []
            },
            {
              "tipo": "Capacidade Técnica",
              "dominio": "Cognitivo",
              "texto": "Identificar nas avaliações quais agentes apresentam resultado acima do limite de tolerância para análise da demanda",
              "conhecimentos": []
            },
            {
              "tipo": "Capacidade Técnica",
              "dominio": "Cognitivo",
              "texto": "Identificar legislação, normas e notas técnicas aplicáveis a demanda",
              "conhecimentos": []
            }
          ]
        },
        {
          "id": "ME3_UC2",
          "codigo": "UC2",
          "nome": "Implementação de Negócios Inovadores",
          "ch": 20,
          "cht": 8,
          "chp": 12,
          "padroes": [],
          "capacidades": [
            {
              "tipo": "Capacidade Técnica",
              "dominio": "Cognitivo",
              "texto": "Selecionar as ferramentas de gestão que melhor atendem o monitoramento e o controle dos indicadores que se aplicam ao planejamento, à produção e à comercialização do produto/serviço.",
              "conhecimentos": [
                "1.1 Detalhamento da solução",
                "1.2 Modelo de negócio",
                "1.3 Plano de Marketing",
                "1.4 Estratégias de Gestão",
                "1.5 Vídeo Pitch",
                "1.6 Protótipo 2. Autoempreendedorismo",
                "2.1 Atitudes empreendedoras",
                "2.2 Perfil do empreendedor",
                "2.3 Independência e autoconfiança",
                "2.4 Intraempreendedorismo",
                "2.5 Características empreendedoras",
                "2.6 Fatores do sucesso",
                "2.6.1 Comportamento do empreendedor",
                "2.6.2 Características do empreendedor",
                "2.7 Autorresponsabilidade e empreendedorismo",
                "2.8 Persuasão e rede de contatos",
                "2.9 Processo empreendedor",
                "2.10 Valores do empreendedor",
                "2.10.1 Persistência",
                "2.10.2 Comprometimento",
                "2.11 Cooperação como ferramenta de desenvolvimento 3. Estratégias de gestão para negócio inovador",
                "3.1 Análise de contexto do negócio — estudos quantitativos e qualitativos",
                "3.1.1 Complexidade",
                "3.1.2 Restrições",
                "3.1.3 Riscos da implementação do negócio",
                "3.1.4 Abrangência",
                "3.1.5 Possibilidades",
                "3.2 Definição de cronogramas",
                "3.2.1 Definição de entregas",
                "3.2.2 Dimensionamento da distribuição financeira",
                "3.2.3 Etapas para a implementação do projeto",
                "3.2.4 Dimensionamento do tempo",
                "3.3 Necessidades de recursos humanos, tecnológicos, financeiros e de infraestrutura",
                "3.4 Metodologias para a diminuição/eliminação de desperdícios",
                "3.5 Fluxo operacional de execução do projeto",
                "3.6 Monitoramento e controle de indicadores",
                "3.6.1 Do planejamento",
                "3.6.2 Da produção",
                "3.6.3 Ferramentas de gestão de negócios",
                "3.6.4 Da comercialização 4. Estratégias de venda de produtos e/ou serviços",
                "4.1 Estratégias de vendas",
                "4.1.1 Ferramentas para a estruturação e a sistematização estratégias de vendas",
                "4.1.2 Estruturação e sistematização da estratégia de vendas",
                "4.2 Ações de marketing para projetos de inovação",
                "4.2.1 Estratégias de Comunicação e Divulgação",
                "4.2.2 Elaboração de ações e estratégias de Divulgação",
                "4.3 Mapeamento do público-alvo",
                "4.3.1 Considerando as características e aplicação do produto/serviço",
                "4.3.2 Considerando o perfil e as características de comportamento do público-alvo: percepções, hábitos de consumo, valores, tendências e necessidades"
              ]
            },
            {
              "tipo": "Capacidade Técnica",
              "dominio": "Cognitivo",
              "texto": "Identificar os riscos inerentes à implementação do negócio inovador. Estruturar o cronograma para a implementação do negócio inovador, considerando etapas, tempo, entregas, recursos financeiros e riscos. Dimensionar as necessidades de recursos humanos, tecnológicos, financeiros e de infraestrutura para a implementação do negócio inovador",
              "conhecimentos": []
            },
            {
              "tipo": "Capacidade Técnica",
              "dominio": "Cognitivo",
              "texto": "Definir estratégias de venda para o produto/serviço a partir das referências estabelecidas na proposta elaborada Sem domínio definido",
              "conhecimentos": []
            },
            {
              "tipo": "Capacidade Técnica",
              "dominio": "Cognitivo",
              "texto": "Definir o público-alvo a partir das características e aplicações do produto ou serviço. Sem domínio definido",
              "conhecimentos": []
            },
            {
              "tipo": "Capacidade Técnica",
              "dominio": "Cognitivo",
              "texto": "Selecionar ferramentas e estratégias de marketing que melhor se adaptam e comunicam os propósitos, resultados, vantagens e diferenciais do produto/serviço.",
              "conhecimentos": []
            },
            {
              "tipo": "Capacidade Técnica",
              "dominio": "Cognitivo",
              "texto": "Definir ações de marketing criativas e eficazes para a venda do produto/serviço",
              "conhecimentos": []
            },
            {
              "tipo": "Capacidade Técnica",
              "dominio": "Psicomotor",
              "texto": "Realizar a estruturação e a sistematização do plano de vendas pela utilização de ferramentas e canais que se aplicam à ação Sem domínio definido Estruturar planos de monitoramento e controle de indicadores para o planejamento, a produção e a comercialização de produtos/serviços.",
              "conhecimentos": []
            },
            {
              "tipo": "Capacidade Técnica",
              "dominio": "Cognitivo",
              "texto": "Analisar a proposta de valor elaborada e o modelo de negócios à luz dos resultados dos estudos e análises do público-alvo. Sem domínio definido Desenvolver estratégias de marketing alinhadas ao perfil do público alvo e características do produto/serviço",
              "conhecimentos": []
            },
            {
              "tipo": "Capacidade Técnica",
              "dominio": "Cognitivo",
              "texto": "Selecionar as ferramentas e canais que melhor se adaptam ou que melhor atendem os requisitos e as necessidades de estruturação e sistematização do plano de venda Sem domínio definido",
              "conhecimentos": []
            },
            {
              "tipo": "Capacidade Técnica",
              "dominio": "Cognitivo",
              "texto": "Identificar os riscos à implementação do negócio inovador.",
              "conhecimentos": []
            },
            {
              "tipo": "Capacidade Técnica",
              "dominio": "Cognitivo",
              "texto": "Reconhecer as diferentes metodologias e ferramentas que se aplicam à diminuição e/ou eliminação de desperdícios em processos produtivos e/ou na prestação de serviços, suas características, finalidades específicas e requisitos de aplicação.",
              "conhecimentos": []
            },
            {
              "tipo": "Capacidade Técnica",
              "dominio": "Psicomotor",
              "texto": "Realizar, pela utilização de ferramentas adequadas, a sistematização e a apresentação pública dos resultados das diferentes etapas e processos",
              "conhecimentos": []
            },
            {
              "tipo": "Capacidade Técnica",
              "dominio": "Psicomotor",
              "texto": "Realizar estudos quantitativos e qualitativos do contexto a ser considerado na implementação do negócio inovador, identificando possibilidades, readequações e restrições. pers Dimensionar o tempo e a distribuição financeira para cada etapa da implementação do negócio inovador, considerando sua abrangência, o contexto e as necessidades do cliente.",
              "conhecimentos": []
            },
            {
              "tipo": "Capacidade Técnica",
              "dominio": "Cognitivo",
              "texto": "Definir o fluxo operacional de execução do projeto (processo produtivo ou do serviço, conforme o caso), assegurando a diminuição e/ou a eliminação de desperdícios e perdas.",
              "conhecimentos": []
            },
            {
              "tipo": "Capacidade Técnica",
              "dominio": "Cognitivo",
              "texto": "Identificar o perfil e as características de comportamento do público alvo, considerando suas percepções, hábitos de consumo, valores, tendências e necessidades. Sem domínio definido",
              "conhecimentos": []
            },
            {
              "tipo": "Capacidade Técnica",
              "dominio": "Cognitivo",
              "texto": "Definir as etapas para a implementação do negócio inovador, considerando tempo, entregas e recursos financeiros. Sem domínio definido",
              "conhecimentos": []
            },
            {
              "tipo": "Capacidade Técnica",
              "dominio": "Cognitivo",
              "texto": "Analisar o contexto que estará envolvido na implementação do negócio, considerando sua abrangência, complexidade, possibilidades e restrições. Sem domínio definido",
              "conhecimentos": []
            }
          ]
        }
      ]
    },
    {
      "id": "ME4",
      "nome": "Módulo Específico IV",
      "ch": 120,
      "ucs": [
        {
          "id": "ME4_UC1",
          "codigo": "UC1",
          "nome": "Gestão de Auditorias em Segurança e Saúde do Trabalho",
          "ch": 60,
          "cht": 24,
          "chp": 36,
          "padroes": [],
          "capacidades": [
            {
              "tipo": "Capacidade Técnica",
              "dominio": "Cognitivo",
              "texto": "Identificar legislação, normas e notas técnicas aplicáveis ao processo de trabalho",
              "conhecimentos": [
                "1.1 Acompanhamento e monitoramento de prazos e ações pertinentes",
                "1.2 Definição de ações",
                "1.3 Responsabilidade",
                "1.4 Prioridades e Prazos 2. Fechamento da auditoria",
                "2.1 Relatório Gerencial",
                "2.2 Apresentação sintetizada 3. Auditorias",
                "3.1 Sistemas de referência",
                "3.1.1 Procedimentos",
                "3.1.2 Normas - internas e externas ISO 9001, 14001, 45001",
                "3.1.3 Processos",
                "3.1.4 Certificações 3.1,555",
                "3.2 Objetivo",
                "3.3 Perfil do auditor",
                "3.4 Definições",
                "3.5 Tipos 4. Programação de Auditorias",
                "4.1 Identificação de processos",
                "4.2 Composição de equipes",
                "4.3 Cronograma",
                "4.4 Plano de comunicação",
                "4.5 Aprovação 5. Ações corretivas",
                "5.1 Tratamento de não conformidades",
                "5.2 Análise de causa (ferramentas da qualidade) 6. Ações de melhoria",
                "6.1 Potenciais não conformidades",
                "6.2 Análise de causa (ferramentas da qualidade) 7. Ética no desenvolvimento das atividades profissionais",
                "7.1 Ética na tomada de decisões",
                "7.2 Valores e virtudes profissionais",
                "7.2.1 Iniciativa",
                "7.2.2 Sigilo",
                "7.2.3 Honestidade",
                "7.2.4 Prudência",
                "7.2.5 Imparcialidade",
                "7.2.6 Responsabilidade",
                "7.2.7 Perseverança",
                "7.3 Ética na inspiração de comportamentos 8. Preparação de Auditorias",
                "8.1 Elaboração do Plano de Auditoria",
                "8.2 Objetivos do programa de auditoria",
                "8.3 Responsabilidades do auditor",
                "8.3.1 Auditor líder",
                "8.3.2 Auditor",
                "8.4 Previsão de recursos para auditoria",
                "8.5 Métodos de auditorias",
                "8.6 Programa da auditoria",
                "8.7 Validação do Plano de Auditoria 9. Execução da Auditoria",
                "9.1 Técnicas de Questionamento",
                "9.2 Comunicação de não conformidades",
                "9.3 Registro das evidências",
                "9.4 Reunião de encerramento",
                "9.5 Tipos e descrição de não conformidades",
                "9.6 Coleta de evidências",
                "9.7 Resolução de conflitos",
                "9.8 Relatório final de Auditoria",
                "9.9 Comunicação de resultados",
                "9.10 Reunião de Abertura 10. Verificação da eficácia pela amostragem de coleta de novas evidências 11. Gestão Ambiental Integrada",
                "11.1 Introdução ao meio ambiente: aspectos e impactos ambientais",
                "11.2 5Rs (Refletir, Recusar, Reduzir, Reutilizar e Reciclar)",
                "11.3 Gestão de resíduos",
                "11.4 Licenciamento Ambiental e suas condicionantes",
                "11.5 Aspectos sociais, culturais e ambientais",
                "11.6 Sustentabilidade",
                "11.7 Responsabilidade socioambiental",
                "11.8 Educação Ambiental"
              ]
            },
            {
              "tipo": "Capacidade Técnica",
              "dominio": "Psicomotor",
              "texto": "Aplicar as técnicas de registro disponibilizadas pela empresa",
              "conhecimentos": []
            },
            {
              "tipo": "Capacidade Técnica",
              "dominio": "Cognitivo",
              "texto": "Correlacionar os itens exigidos na legislação, normas e notas técnicas, ao ambiente laboral",
              "conhecimentos": []
            },
            {
              "tipo": "Capacidade Técnica",
              "dominio": "Cognitivo",
              "texto": "Cumprir normas e procedimentos de segurança estabelecidos pela empresa para avaliação de processo de trabalho, a fim de garantir a saúde e integridade física",
              "conhecimentos": []
            },
            {
              "tipo": "Capacidade Técnica",
              "dominio": "Cognitivo",
              "texto": "Correlacionar os itens identificados nas auditorias em saúde, segurança e meio ambiente do trabalho com os requisitos estabelecidos em normatizações internas e ou externas",
              "conhecimentos": []
            },
            {
              "tipo": "Capacidade Técnica",
              "dominio": "Cognitivo",
              "texto": "Identificar Legislação, normas e notas técnicas aplicáveis ao ambiente laboral",
              "conhecimentos": []
            },
            {
              "tipo": "Capacidade Técnica",
              "dominio": "Cognitivo",
              "texto": "Identificar na legislação e normas técnicas orientações sobre registro e guarda de documentos",
              "conhecimentos": []
            }
          ]
        },
        {
          "id": "ME4_UC2",
          "codigo": "UC2",
          "nome": "Monitoramento dos Programas e Documentos de Segurança e Saúde do Trabalho",
          "ch": 60,
          "cht": 24,
          "chp": 36,
          "padroes": [],
          "capacidades": [
            {
              "tipo": "Capacidade Técnica",
              "dominio": "Cognitivo",
              "texto": "Cumprir normas e procedimentos de segurança estabelecidos pela empresa para avaliação de processo de trabalho e ou novo projeto, a fim de garantir a saúde e integridade física",
              "conhecimentos": [
                "1.1 Sistema Único de Saúde (Política Nacional de saúde do trabalhador)",
                "1.2 Proaramas Relacionados a saúde do trabalhador",
                "1.3 Vigilância epidemiológica do trabalho",
                "1.3.1 Classificação internacional de doenças",
                "1.3.2 Listas de doenças relacionadas ao trabalho 2. Gerenciamento dos Programas e Laudos de Segurança e Saúde no Trabalho exigidos pela legislação",
                "2.1 PCA",
                "2.2 PPEOB",
                "2.3 LTCAT",
                "2.4 Laudo de Insalubridade",
                "2.5 Laudo de Periculosidade",
                "2.6 AET",
                "2.7 Outros documentos aplicáveis",
                "2.8 Documentos revogados que demandam guarda e análise",
                "2.8.1 PPRA",
                "2.8.2 PCMAT",
                "2.8.3 Outros",
                "2.9 PGR",
                "2.10 PCMSO 2. PPR 3. E-Social aplicável a SST",
                "3.1 Legislação aplicada",
                "3.2 Documentação Técnica",
                "3.3 Gestão dos Dados",
                "3.4 Envio dos Dados 4. Gestão de documentos",
                "4.1 Tipos de registros",
                "4.2 Organização",
                "4.3 Rastreabilidade",
                "4.4 Requisitos legais 5. Código de Ética Profissional",
                "5.1 Comunicação profissional",
                "5.2 Postura profissional"
              ]
            },
            {
              "tipo": "Capacidade Técnica",
              "dominio": "Cognitivo",
              "texto": "Avaliar a evolução ou a mitigação dos riscos ocupacionais evidenciados no relatório",
              "conhecimentos": []
            },
            {
              "tipo": "Capacidade Técnica",
              "dominio": "Cognitivo",
              "texto": "Identificar legislação, normas e notas técnicas aplicáveis ao ramo de atuação e ou atividade da empresa",
              "conhecimentos": []
            },
            {
              "tipo": "Capacidade Técnica",
              "dominio": "Cognitivo",
              "texto": "Identificar legislação, normas e notas técnicas aplicáveis ao ambiente laboral",
              "conhecimentos": []
            },
            {
              "tipo": "Capacidade Técnica",
              "dominio": "Cognitivo",
              "texto": "Identificar na legislação e normas técnicas orientações sobre registro e guarda de documentos",
              "conhecimentos": []
            },
            {
              "tipo": "Capacidade Técnica",
              "dominio": "Psicomotor",
              "texto": "Aplicar legislação, normas e notas técnicas referentes a acidentes e doenças ocupacionais",
              "conhecimentos": []
            },
            {
              "tipo": "Capacidade Técnica",
              "dominio": "Psicomotor",
              "texto": "Monitorar a execução dos planos de ação gerados em função dos programas, auditorias e documentos e inspeções técnicas referentes a saúde e segurança do trabalho",
              "conhecimentos": []
            },
            {
              "tipo": "Capacidade Técnica",
              "dominio": "Cognitivo",
              "texto": "Correlacionar as diretrizes de segurança do trabalho descritas nos procedimentos com as atividades desenvolvidas no ambiente laboral Efetuar o registro de dados e informações referentes à gestão de saúde, segurança e meio ambiente do trabalho, com base no monitoramento realizado",
              "conhecimentos": []
            },
            {
              "tipo": "Capacidade Técnica",
              "dominio": "Cognitivo",
              "texto": "Avaliar a necessidade de alteração e ou complementação das diretrizes de segurança do trabalho estabelecidas nos procedimentos operacionais e de emergência",
              "conhecimentos": []
            },
            {
              "tipo": "Capacidade Técnica",
              "dominio": "Cognitivo",
              "texto": "Correlacionar os itens exigidos na legislação, normas e notas técnicas, ao ambiente laboral",
              "conhecimentos": []
            }
          ]
        }
      ]
    }
  ]
};

if (typeof window !== 'undefined') { window.SEGURANCA = SEGURANCA; }
