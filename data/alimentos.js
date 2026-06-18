/**
 * SENAI BAHIA · Hub MQCT
 * data/alimentos.js — Área: Alimentos e Bebidas
 * Fonte: Itinerário Nacional SENAI — Versão 2025.1 — Emissão: 17/06/2026
 * Extração: Claude Sonnet 4.6 a partir dos documentos oficiais PDF
 *
 * Estrutura:
 *   AREA          → dados gerais do curso
 *   PERFIL        → competência geral + funções e subfunções com padrões de desempenho
 *   MODULOS       → array de módulos, cada um com array de UCs
 *   Cada UC contém:
 *     id, nome, ch (total), cht (teórica), chp (prática)
 *     capacidades[] → { tipo, dominio, texto, conhecimentos[] }
 *     padroes[]     → padrões de desempenho do Perfil Profissional
 */

const ALIMENTOS = {

  // ─────────────────────────────────────────────────────────────────────────
  // DADOS GERAIS
  // ─────────────────────────────────────────────────────────────────────────
  area: {
    nome:    'Alimentos e Bebidas',
    curso:   'Técnico em Alimentos',
    nivel:   'Técnico — Nível 2 · Tático',
    cbo:     '3252-05',
    ch:      1200,
    validade:'06/02/2031',
    versao:  '2025.1',
    emissao: '17/06/2026',
    cor:     '#F4A020',
    emoji:   '🍞',
  },

  // ─────────────────────────────────────────────────────────────────────────
  // COMPETÊNCIA GERAL
  // ─────────────────────────────────────────────────────────────────────────
  competenciaGeral: 'Industrializar alimentos, realizar análises e coordenar a produção de alimentos, conforme procedimentos, normas e legislações vigentes de qualidade e segurança dos alimentos, de saúde e segurança do trabalho e de sustentabilidade.',

  // ─────────────────────────────────────────────────────────────────────────
  // COMPETÊNCIAS SOCIOEMOCIONAIS (documento oficial)
  // ─────────────────────────────────────────────────────────────────────────
  socioemocionais: [
    {
      id: 'SE1',
      nome: 'Aprendizagem Ativa e Estratégias de Aprendizagem',
      descricao: 'Compreender as implicações de novas informações para a resolução de problemas atuais e futuros e tomada de decisão. Conscientizar-se da importância da formação continuada, reconhecendo a pesquisa como fonte de inovação e formação de um espírito empreendedor.',
      capacidades: [
        'Aplicar estratégias de aprendizagem autônoma e adaptativa para construção, consolidação e transferência dos conhecimentos de forma contínua.',
        'Buscar atualização constante para embasamento de sua prática.',
      ],
    },
    {
      id: 'SE2',
      nome: 'Empreendedorismo',
      descricao: 'Pensar e agir sobre as oportunidades com criatividade e inovação para a geração de valor individual e coletivo.',
      capacidades: [
        'Contribuir para objetivos coletivos em processos de trabalho.',
        'Buscar proativamente soluções para desafios em situações de trabalho.',
      ],
    },
    {
      id: 'SE3',
      nome: 'Inteligência Emocional / Autoconhecimento',
      descricao: 'Ler e entender suas emoções e reconhecer o impacto das mesmas. Reconhecer suas forças e limitações para adquirir auto-confiança.',
      capacidades: [
        'Reconhecer o seu estado emocional.',
        'Ter autoconfiança em suas habilidades.',
      ],
    },
    {
      id: 'SE4',
      nome: 'Inteligência Emocional / Autorregulação',
      descricao: 'Manter emoções fortes sob controle e gerir relacionamentos positivos. Transmitir um senso ético e otimista por meio de comportamentos e reações construtivas.',
      capacidades: [
        'Regular emoções intensas em situações de pressão, mantendo postura profissional e equilibrada.',
      ],
    },
    {
      id: 'SE5',
      nome: 'Inteligência Emocional / Habilidades de Relacionamento',
      descricao: 'Trabalhar de forma colaborativa e construtiva em pequenos ou grandes grupos, assumindo a liderança quando necessário. Motivar e influenciar seu grupo de pares, de maneira ética e positiva.',
      capacidades: [
        'Apresentar devolutivas de maneira construtiva.',
        'Demonstrar capacidade de adaptação a diferentes grupos e ambientes.',
        'Estar aberto a feedback na busca de seu crescimento profissional.',
      ],
    },
    {
      id: 'SE6',
      nome: 'Liderança e Influência Social',
      descricao: 'Ter a disposição para liderar, encarregar-se e oferecer opiniões e direção. Impactar os outros na organização, atuando com energia e liderança.',
      capacidades: [
        'Apresentar opiniões divergentes em discussões de forma construtiva, de maneira respeitosa e firme no seu propósito.',
        'Comunicar-se de forma objetiva, simples e clara, adequando sua linguagem aos diferentes públicos.',
        'Trabalhar de forma colaborativa.',
      ],
    },
    {
      id: 'SE7',
      nome: 'Pensamento Crítico e Inovação',
      descricao: 'Ter uma visão ampliada sobre processos, compreendendo a interdependência entre suas partes. Desenvolver um raciocínio lógico com ênfase na relação de causa e efeito.',
      capacidades: [
        'Determinar as melhores soluções para um problema complexo com argumentos para suas escolhas.',
        'Criar forma inovadora para resolução de problemas comuns.',
      ],
    },
    {
      id: 'SE8',
      nome: 'Resolução de Problemas Complexos',
      descricao: 'Identificar problemas complexos e rever informações relacionadas para desenvolver, avaliar opções e implementar soluções.',
      capacidades: [
        'Analisar a causa de problemas com foco em sua origem.',
      ],
    },
  ],

  // ─────────────────────────────────────────────────────────────────────────
  // MÓDULOS E UCs
  // ─────────────────────────────────────────────────────────────────────────
  modulos: [

    // ═══════════════════════════════════════════════════════════════════════
    // MÓDULO BÁSICO
    // ═══════════════════════════════════════════════════════════════════════
    {
      id: 'MB',
      nome: 'Módulo Básico',
      ucs: [
        {
          id: 'MB_UC1',
          codigo: 'UC1',
          nome: 'Princípios de Higiene e Segurança dos Alimentos e Bebidas',
          ch: 20, cht: 12, chp: 8,
          padroes: [], // UC básica — sem padrão de desempenho específico no perfil
          capacidades: [
            {
              tipo: 'Capacidade Básica',
              dominio: 'Cognitivo',
              texto: 'Reconhecer os fundamentos da microbiologia para a fabricação de alimentos e bebidas.',
              conhecimentos: [
                '1. Fundamentos de microbiologia dos alimentos e bebidas',
                '  1.1 Classificação dos microrganismos: Bactérias, Fungos/bolores, Leveduras, Vírus, Parasitas/protozoários',
                '  1.2 Morfologia',
                '  1.3 Fatores que influenciam o desenvolvimento microbiano: Intrínsecos, Extrínsecos',
                '  1.4 Microrganismos de interesse: Patogênicos, Deteriorantes, Benéficos',
                '  1.5 Doenças veiculadas por alimentos: Toxi-infecções, Sintomas, Agentes causadores',
                '  1.6 Prevenção da contaminação cruzada durante o processamento',
              ],
            },
            {
              tipo: 'Capacidade Básica',
              dominio: 'Cognitivo',
              texto: 'Reconhecer os princípios de higiene e saúde aplicáveis à produção de alimentos e bebidas.',
              conhecimentos: [
                '2. Princípios de higiene aplicados à produção de alimentos',
                '  2.1 Higiene pessoal: Estado de saúde, Doenças, Conduta, Vestimenta, Lavagem das mãos',
                '  2.2 Higiene ambiental: Instalações, Equipamentos, Utensílios',
                '  2.3 Higiene na manipulação e processamento dos alimentos e bebidas',
                '  2.4 Documentação de higiene operacional (POP, PPHO, IT)',
                '  2.5 Legislação e normas técnicas relacionadas à higiene industrial',
              ],
            },
            {
              tipo: 'Capacidade Básica',
              dominio: 'Cognitivo',
              texto: 'Reconhecer os princípios de Boas Práticas de Fabricação (BPF) utilizados na indústria de alimentos e bebidas.',
              conhecimentos: [
                '3. Boas Práticas de Fabricação (BPF) na produção de alimentos',
                '  3.1 Definição e objetivos das BPF',
                '  3.2 Documentação técnica: Manual de BPF, POP, PPHO, Instrução de Trabalho (IT)',
                '  3.3 Aplicação das BPF: Higiene pessoal, Higiene de instalações, Higiene de máquinas/equipamentos/utensílios',
                '  3.4 Análise de Perigos e Pontos Críticos de Controle (APPCC): Plano APPCC e seus fundamentos',
                '  3.5 Normas técnicas e legislação aplicadas (ANVISA, MAPA, ABNT)',
                '  3.6 Responsabilidade dos colaboradores no cumprimento das BPF',
                '  3.7 Controle e auditoria dos processos de fabricação segundo BPF',
              ],
            },
          ],
        },
      ],
    },

    // ═══════════════════════════════════════════════════════════════════════
    // MÓDULO DA INDÚSTRIA
    // ═══════════════════════════════════════════════════════════════════════
    {
      id: 'MI',
      nome: 'Módulo da Indústria',
      ucs: [
        {
          id: 'MI_UC1',
          codigo: 'UC1',
          nome: 'Linguagens e Multimeios',
          ch: 40, cht: 24, chp: 16,
          padroes: [],
          capacidades: [
            {
              tipo: 'Capacidade Básica',
              dominio: 'Cognitivo',
              texto: 'Aplicar os princípios e padrões de linguagem na comunicação organizacional.',
              conhecimentos: [
                '1. Fundamentos da comunicação: Emissor, Receptor, Mensagem, Contexto, Canal, Código, Feedback, Ruídos, Estrutura básica de argumentação',
                '2. Linguagens: Tipos (verbal/não-verbal, escrita/falada, formal/informal), Influência da cultura, Vícios de linguagem, Linguagem corporal',
              ],
            },
            {
              tipo: 'Capacidade Básica',
              dominio: 'Cognitivo',
              texto: 'Classificar os documentos técnicos com base na sua aplicação no ambiente profissional.',
              conhecimentos: [
                '3. Textos técnicos: Catálogos, Manuais, Relatórios, Atas, Memorandos, Resumo, Ordem de serviço, Procedimentos, Orçamentos, Boletins técnicos, Checklist, Permissão de trabalho, Normas técnicas',
              ],
            },
            {
              tipo: 'Capacidade Básica',
              dominio: 'Psicomotor',
              texto: 'Aplicar recursos digitais no processo de comunicação com diferentes públicos do ambiente profissional.',
              conhecimentos: [
                '4. Comunicação digital: Plataformas audiovisuais, Aplicativos de mensagem, Videoconferência, E-mail, Redes sociais, Streaming, Responsabilidade digital (netiqueta, LGPD)',
              ],
            },
            {
              tipo: 'Capacidade Básica',
              dominio: 'Psicomotor',
              texto: 'Elaborar apresentações com uso de recursos multimeios aplicados ao ambiente profissional.',
              conhecimentos: [
                '5. Apresentações corporativas: Planejamento, Editores de apresentação, Recursos, Aplicação (Videoconferência, Entrevista, Debate, Dinâmica, Webinar)',
              ],
            },
            {
              tipo: 'Capacidade Básica',
              dominio: 'Cognitivo',
              texto: 'Analisar o impacto da comunicação organizacional em um ambiente profissional.',
              conhecimentos: [
                '6. O valor da comunicação no ambiente profissional: Comunicação em equipes de trabalho',
              ],
            },
          ],
        },
        {
          id: 'MI_UC2',
          codigo: 'UC2',
          nome: 'Ferramentas Digitais para o Mercado de Trabalho',
          ch: 40, cht: 24, chp: 16,
          padroes: [],
          capacidades: [
            {
              tipo: 'Capacidade Básica',
              dominio: 'Cognitivo',
              texto: 'Compreender os conceitos básicos de tecnologia digital, hardware, software e redes de computadores.',
              conhecimentos: [
                '1. Tecnologia digital: Definição, Linha do tempo, Impactos na sociedade',
                '2. Introdução ao sistema de computação: Hardware (Definição, Componentes, Periféricos), Software (Definição, Tipos, Sistemas operacionais), Redes (cabeada e wireless)',
              ],
            },
            {
              tipo: 'Capacidade Básica',
              dominio: 'Psicomotor',
              texto: 'Empregar procedimentos de segurança referente a dados pessoais e de acesso a ambientes digitais.',
              conhecimentos: [
                '3. Segurança digital: Senhas, Autenticação, Backup, LGPD, Ameaças digitais',
              ],
            },
            {
              tipo: 'Capacidade Básica',
              dominio: 'Psicomotor',
              texto: 'Utilizar ferramentas de escritório digital para produção de documentos, planilhas e apresentações.',
              conhecimentos: [
                '4. Ferramentas de escritório: Processador de texto, Planilha eletrônica, Editor de apresentações, Armazenamento em nuvem',
              ],
            },
            {
              tipo: 'Capacidade Básica',
              dominio: 'Cognitivo',
              texto: 'Identificar oportunidades de trabalho e empreendimento no mercado digital.',
              conhecimentos: [
                '5. Mercado de trabalho digital: Perfil profissional digital, Portfólio, LinkedIn, Trabalho remoto, Empreendedorismo digital',
              ],
            },
          ],
        },
        {
          id: 'MI_UC3',
          codigo: 'UC3',
          nome: 'Neoindustrialização: (R)evolução, Produtividade e Sustentabilidade',
          ch: 20, cht: 12, chp: 8,
          padroes: [],
          capacidades: [
            {
              tipo: 'Capacidade Básica',
              dominio: 'Cognitivo',
              texto: 'Mapear a evolução dos processos industriais até a Indústria 4.0, identificando marcos históricos, características, inovação e transformações tecnológicas.',
              conhecimentos: [
                '1. Introdução à Indústria 4.0: (R)evolução industrial, Competitividade local x global, Importância dos recursos naturais',
                '  1.2 Tecnologias Habilitadoras: Computação em nuvem, IoT, Big data, Segurança digital, Manufatura digital e aditiva, Verticalização integrada, Robótica avançada',
                '  1.3 Inovação: Definição, Inovação x Invenção',
              ],
            },
            {
              tipo: 'Capacidade Básica',
              dominio: 'Cognitivo',
              texto: 'Aplicar os princípios de produtividade para melhoria do processo produtivo, mantendo os parâmetros de qualidade e sustentabilidade.',
              conhecimentos: [
                '2. Produtividade: Conceito, Indicadores, Ferramentas de melhoria contínua',
                '3. Sustentabilidade na indústria: ESG, Descarbonização, Economia circular',
              ],
            },
          ],
        },
        {
          id: 'MI_UC4',
          codigo: 'UC4',
          nome: 'Transformação Pessoal para Trabalho',
          ch: 10, cht: 6, chp: 4,
          padroes: [],
          capacidades: [
            {
              tipo: 'Capacidade Básica',
              dominio: 'Cognitivo',
              texto: 'Reconhecer o seu estado emocional.',
              conhecimentos: ['1. Autopercepção'],
            },
            {
              tipo: 'Capacidade Básica',
              dominio: 'Cognitivo',
              texto: 'Ter autoconfiança em suas habilidades.',
              conhecimentos: ['2. Autoconhecimento'],
            },
            {
              tipo: 'Capacidade Básica',
              dominio: 'Cognitivo',
              texto: 'Determinar as melhores soluções para um problema complexo com argumentos para sua escolha.',
              conhecimentos: [
                '3. Pensamento crítico e inovador: Lógica e raciocínio, Formulação de hipóteses, Postura investigativa, Exploração de ideias, Abstração, Síntese',
              ],
            },
          ],
        },
      ],
    },

    // ═══════════════════════════════════════════════════════════════════════
    // MÓDULO ESPECÍFICO 1 — INDUSTRIALIZAR
    // ═══════════════════════════════════════════════════════════════════════
    {
      id: 'ME1',
      nome: 'Módulo Específico 1 — Industrializar Alimentos',
      funcao: 'Função 1',
      ucs: [
        {
          id: 'ME1_UC1',
          codigo: 'UC1',
          nome: 'Processos de Industrialização de Carnes e Derivados',
          ch: 100, cht: 40, chp: 60,
          subfuncao: '1.1',
          padroes: [
            '1.1.1 Monitorando a rastreabilidade, desde a origem até o produto.',
            '1.1.2 Identificando as características de recebimento de matérias-primas e ingredientes, considerando informações da ficha técnica e resultados de análise.',
            '1.1.3 Elaborando fluxogramas relativos ao processo produtivo de carnes e derivados.',
            '1.1.4 Realizando o processamento de carnes e derivados de acordo com a especificação do produto.',
            '1.1.5 Realizando ajustes no processamento de carnes e derivados, considerando os resultados de análises e medições.',
            '1.1.6 Avaliando as contaminações inerentes ao processo produtivo de carnes e derivados.',
            '1.1.7 Selecionando embalagens, considerando as características do produto e tendências de mercado.',
            '1.1.8 Identificando os processos produtivos de alimentos para animais, considerando a qualidade e a segurança do produto.',
            '1.1.9 Aplicando as boas práticas de fabricação de alimentos no processamento.',
            '1.1.10 Realizando testes em linha para o controle do processo.',
            '1.1.11 Monitorando o funcionamento de máquinas e equipamentos.',
            '1.1.12 Aproveitando subprodutos provenientes dos processos.',
            '1.1.13 Destinando resíduos conforme legislação vigente e medidas de descarbonização.',
            '1.1.14 Identificando as tendências e inovações em ingredientes e processos.',
          ],
          capacidades: [
            {
              tipo: 'Capacidade Técnica',
              dominio: 'Cognitivo',
              texto: 'Identificar as características de matérias-primas, ingredientes e aditivos, considerando informações da ficha técnica e resultados de análise.',
              conhecimentos: [
                '1. Matéria-prima (carne): Tipos (Bovina, Suína, Aves, Pescados), Estrutura dos tecidos (Muscular, Adiposo, Conjuntivo/colágeno), Composição química (Proteínas, Gorduras, Água, Carboidratos, Minerais, Vitaminas, Enzimas), Análises físico-químicas e microbiológicas das matérias-primas',
                '2. Ingredientes e aditivos em produtos cárneos: Funções (Curing agents, Conservantes, Estabilizantes, Corantes, Temperos, Proteínas alternativas, Antioxidantes, Redução do sódio), Interpretação de ficha técnica, Técnicas de análise físico-química e microbiológica',
              ],
            },
            {
              tipo: 'Capacidade Técnica',
              dominio: 'Cognitivo',
              texto: 'Avaliar as contaminações inerentes ao processo produtivo de carnes e derivados, seguindo procedimentos de testes em linha.',
              conhecimentos: [
                '3. BPF na industrialização de carnes e derivados: Tipos de contaminação (Física, Química, Microbiológica), Contaminações no produto (Riscos de contaminação cruzada, PCCs, Manejo pré-abate, Abate/sangria/evisceração, Resfriamento, Armazenagem), Legislação e normas técnicas, Testes em linha (Amostragem microbiológica, Análise de resíduos, Padrões físico-químicos)',
              ],
            },
            {
              tipo: 'Capacidade Técnica',
              dominio: 'Cognitivo',
              texto: 'Selecionar embalagens adequadas para carnes e derivados considerando características do produto, requisitos de conservação e tendências de mercado.',
              conhecimentos: [
                '4. Embalagens para carnes e derivados: Tipos (Plásticos flexíveis, Atmosfera modificada, Vácuo, Papel especial, Biodegradáveis), Critérios de escolha (Compatibilidade, Conservação, Proteção, Transporte, Sustentabilidade, Shelf life), Tendências (Recicláveis, Biodegradáveis, Design), Normas técnicas e requisitos regulatórios',
              ],
            },
            {
              tipo: 'Capacidade Técnica',
              dominio: 'Psicomotor',
              texto: 'Realizar o processamento de carnes e derivados de acordo com especificação do produto, exigências da empresa e normas vigentes.',
              conhecimentos: [
                '5. Processamento de produtos cárneos frescos: Embutidos, Marinados, Empanados — Ingredientes, Contaminações, Etapas de processo, Controle (processo e qualidade), Cálculo do rendimento, Equipamentos, Embalagem',
                '6. Processamento de produtos cárneos curados e salgados: Ingredientes, Etapas (Pesagem, Preparo, Métodos de salga, Embalagem, Armazenamento), Controle, Cálculo do rendimento, Equipamentos',
                '7. Processamento de produtos cárneos processados termicamente: Etapas (Pesagem, Preparo, Mistura e tambleamento, Tratamento térmico, Resfriamento, Embalagem), Controle, Cálculo do rendimento',
                '8. Processamento de produtos cárneos fermentados: Ingredientes, Culturas starters, Etapas (Pesagem, Preparo, Mistura, Fermentação, Maturação, Embalagem), Controle',
                '9. Processamento de produtos emulsionados: Ingredientes, Etapas (Pesagem, Preparo, Formação da emulsão, Embutimento, Cozimento, Resfriamento, Acabamento/tingimento, Embalagem, Armazenamento), Controle',
                '10. Processamento de produtos cárneos defumados: Ingredientes, Etapas, Controle (processo e qualidade), Cálculo do rendimento, Equipamentos',
              ],
            },
            {
              tipo: 'Capacidade Técnica',
              dominio: 'Cognitivo',
              texto: 'Controlar a rastreabilidade desde a origem da carne até o produto final, atendendo aos requisitos normativos e de segurança alimentar.',
              conhecimentos: [
                '11. Rastreabilidade da industrialização de carnes: Origem animal, Registro e documentação ao longo das etapas produtivas, Benefícios para segurança/recall/certificações, Tecnologias de rastreamento (Sistemas digitais, QR code, ERPs)',
              ],
            },
            {
              tipo: 'Capacidade Técnica',
              dominio: 'Cognitivo',
              texto: 'Destinar resíduos do processamento de carnes e derivados conforme legislação vigente e medidas de descarbonização.',
              conhecimentos: [
                '12. Destinação de resíduos da industrialização de carnes: Classificação, Aproveitamento de subprodutos, Descarbonização, Legislação referente ao setor, Impactos ambientais e medidas mitigatórias',
              ],
            },
            {
              tipo: 'Capacidade Técnica',
              dominio: 'Cognitivo',
              texto: 'Identificar os processos produtivos de alimentos para animais, considerando os critérios técnicos de qualidade e segurança do produto.',
              conhecimentos: [
                '13. Processos para alimentos animais: Matérias-primas (Farelados, Extrusados, Peletizados, Enlatados), Ingredientes (Pré-mixes, Mixes, Suplementação, Aditivos), Critérios técnicos, Controles de contaminação e rastreabilidade, Equipamentos, Normas de produção animal',
              ],
            },
            {
              tipo: 'Capacidade Técnica',
              dominio: 'Cognitivo',
              texto: 'Identificar as tendências e inovações em ingredientes e processos produtivos de carnes e derivados.',
              conhecimentos: [
                '14. Inovação na industrialização de carnes: Ingredientes (Proteínas alternativas/plant-based, Redução do sódio, Novos conservantes naturais), Processos (Automação, Controle informatizado, Processamento sustentável, Técnicas para aumento do shelf life), Novos formatos e produtos para consumidores específicos',
              ],
            },
          ],
        },

        {
          id: 'ME1_UC2',
          codigo: 'UC2',
          nome: 'Processos de Industrialização de Pães, Massas Alimentícias e Biscoitos',
          ch: 90, cht: 36, chp: 54,
          subfuncao: '1.4',
          padroes: [
            '1.4.1 Monitorando a rastreabilidade, desde a origem até o produto.',
            '1.4.2 Identificando as características de recebimento de matérias-primas e ingredientes, considerando informações da ficha técnica e resultados de análise.',
            '1.4.3 Calculando as quantidades de matérias-primas e de ingredientes das formulações do produto a ser processado.',
            '1.4.4 Elaborando fluxogramas relativos aos processos produtivos de pães, massas alimentícias e biscoitos.',
            '1.4.5 Realizando o processamento de pães, massas alimentícias e biscoitos de acordo com a especificação do produto.',
            '1.4.6 Realizando ajustes no processo de pães, massas alimentícias e biscoitos, considerando resultados de análises e medições.',
            '1.4.7 Avaliando as contaminações inerentes ao processo produtivo de pães, massas alimentícias e biscoitos.',
            '1.4.8 Selecionando embalagens, considerando as características do produto e tendências de mercado.',
            '1.4.9 Aplicando as boas práticas de fabricação de alimentos no processamento.',
            '1.4.10 Realizando testes em linha para o controle do processo.',
            '1.4.11 Monitorando o funcionamento de máquinas e equipamentos.',
            '1.4.12 Aproveitando subprodutos provenientes dos processos.',
            '1.4.13 Destinando resíduos conforme legislação vigente e medidas de descarbonização.',
            '1.4.14 Identificando as tendências e inovações em ingredientes e processos.',
          ],
          capacidades: [
            {
              tipo: 'Capacidade Técnica',
              dominio: 'Cognitivo',
              texto: 'Identificar as características de matérias-primas, ingredientes e aditivos utilizados no processamento de pães, massas alimentícias e biscoitos, conforme ficha técnica e resultados de análise.',
              conhecimentos: [
                '1. Matérias-primas, ingredientes e aditivos: Grão de trigo (Estrutura, Variedades, Processo de moagem), Farinha de trigo (Características, Composição química, Análises físico-químicas, Análises reológicas, Análises organolépticas), Farinhas alternativas (Características, Composição, Aplicações), Óleos e gorduras (Obtenção, Principais reações, Rancidez), Ingredientes e aditivos (Funções, Critérios de uso, Normas aplicáveis), Interpretação de ficha técnica e resultados analíticos',
              ],
            },
            {
              tipo: 'Capacidade Técnica',
              dominio: 'Cognitivo',
              texto: 'Calcular as quantidades de matérias-primas e ingredientes das formulações de pães, massas alimentícias e biscoitos.',
              conhecimentos: [
                '2. Formulações de produtos de panificação e massas: Balanço de massa, Cálculo de rendimento, Escalonamento de receitas, Fichas técnicas de produção',
              ],
            },
            {
              tipo: 'Capacidade Técnica',
              dominio: 'Psicomotor',
              texto: 'Realizar o processamento de pães, massas alimentícias e biscoitos conforme especificação do produto e normas vigentes.',
              conhecimentos: [
                '3. Processamento de pães: Etapas (Pesagem, Mistura, Fermentação, Modelagem, Forneamento, Resfriamento, Embalagem), Controle de processo e qualidade, Equipamentos',
                '4. Processamento de massas alimentícias: Tipos (Frescas, Secas, Pré-cozidas), Etapas, Controle, Equipamentos',
                '5. Processamento de biscoitos: Tipos (Doces, Salgados, Recheados), Etapas, Controle, Equipamentos',
                '6. BPF no processamento de farináceos: Contaminações, Legislação, Testes em linha',
                '7. Embalagens para produtos farináceos: Tipos, Critérios de escolha, Shelf life',
              ],
            },
            {
              tipo: 'Capacidade Técnica',
              dominio: 'Cognitivo',
              texto: 'Identificar tendências e inovações em ingredientes e processos produtivos de pães, massas e biscoitos.',
              conhecimentos: [
                '8. Inovações em panificação: Ingredientes funcionais, Produtos sem glúten, Redução de açúcar e sódio, Automação, Sustentabilidade',
              ],
            },
          ],
        },

        {
          id: 'ME1_UC3',
          codigo: 'UC3',
          nome: 'Processos de Industrialização de Leites e Derivados',
          ch: 70, cht: 28, chp: 42,
          subfuncao: '1.2',
          padroes: [
            '1.2.1 Monitorando a rastreabilidade, desde a origem até o produto.',
            '1.2.2 Identificando as características de recebimento de matérias-primas e ingredientes, considerando informações da ficha técnica e resultados de análise.',
            '1.2.3 Elaborando fluxogramas relativos aos processos produtivos de leites e derivados.',
            '1.2.4 Avaliando as contaminações inerentes ao processo produtivo de leites e derivados.',
            '1.2.5 Realizando o processamento de leites e derivados de acordo com a especificação do produto.',
            '1.2.6 Realizando ajustes no processamento de leites e derivados, considerando os resultados de análises e medições.',
            '1.2.7 Selecionando embalagens, considerando as características do produto e tendências de mercado.',
            '1.2.8 Aplicando as boas práticas de fabricação de alimentos no processamento.',
            '1.2.9 Realizando testes em linha para o controle do processo.',
            '1.2.10 Monitorando o funcionamento de máquinas e equipamentos.',
            '1.2.11 Aproveitando subprodutos provenientes dos processos.',
            '1.2.12 Destinando resíduos conforme legislação vigente e medidas de descarbonização.',
            '1.2.13 Identificando as tendências e inovações em ingredientes e processos.',
          ],
          capacidades: [
            {
              tipo: 'Capacidade Técnica',
              dominio: 'Cognitivo',
              texto: 'Identificar as características de matérias-primas, ingredientes e aditivos utilizados no processamento de leite e derivados, considerando ficha técnica e análise.',
              conhecimentos: [
                '1. Matéria-prima: leite — Síntese do leite e variações conforme origem, Composição química (Proteínas/caseína/whey, Gorduras, Sais minerais, Carboidratos, Vitaminas, Enzimas), Análises físico-químicas e microbiológicas',
                '2. Ingredientes e aditivos para produtos lácteos: Tipos e características, Funções tecnológicas (Estabilizantes, Corantes, Aromatizantes, Culturas fermentativas, Concentradores), Ficha técnica e resultados analíticos, Critérios para seleção conforme produto',
              ],
            },
            {
              tipo: 'Capacidade Técnica',
              dominio: 'Cognitivo',
              texto: 'Avaliar as contaminações inerentes ao processo produtivo de leite e derivados, seguindo procedimentos de testes em linha e normas de controle higiênico sanitário.',
              conhecimentos: [
                '3. BPF na industrialização de laticínios: Tipos de contaminação, Pontos críticos do processo, Testes em linha, Higienização de equipamentos (CIP), Legislação e normas técnicas (RDC ANVISA, MAPA, IN 76 e 77)',
              ],
            },
            {
              tipo: 'Capacidade Técnica',
              dominio: 'Psicomotor',
              texto: 'Realizar o processamento de leites e derivados de acordo com especificação do produto e normas vigentes.',
              conhecimentos: [
                '4. Tratamentos térmicos do leite: Pasteurização, UHT, Esterilização — Parâmetros, Equipamentos, Controle',
                '5. Processamento de queijos: Tipos, Etapas (Pasteurização, Coagulação, Corte da coalhada, Prensagem, Salga, Maturação, Embalagem), Controle',
                '6. Processamento de iogurtes e fermentados: Culturas starters, Etapas, Controle',
                '7. Processamento de manteiga, creme e nata: Etapas, Controle',
                '8. Processamento de leite em pó: Concentração, Atomização, Controle',
                '9. Embalagens para laticínios: Tipos, Critérios de escolha, Shelf life',
              ],
            },
          ],
        },

        {
          id: 'ME1_UC4',
          codigo: 'UC4',
          nome: 'Processos de Industrialização de Frutas, Hortaliças e Derivados',
          ch: 90, cht: 36, chp: 54,
          subfuncao: '1.3',
          padroes: [
            '1.3.1 Monitorando a rastreabilidade, desde a origem até o produto.',
            '1.3.2 Identificando as características de recebimento de matérias-primas e ingredientes, considerando informações da ficha técnica e resultados de análise.',
            '1.3.3 Avaliando a qualidade de matérias-primas e de produtos, considerando as contaminações e os fatores intrínsecos e extrínsecos dos alimentos.',
            '1.3.4 Elaborando fluxogramas relativos aos processos produtivos de hortaliças, frutas e derivados.',
            '1.3.5 Realizando o processamento de frutas e hortaliças de acordo com a especificação do produto.',
            '1.3.6 Realizando ajustes no processamento de hortaliças e frutas, considerando resultados de análises e de medições.',
            '1.3.7 Selecionando embalagens, considerando as características do produto e tendências de mercado.',
            '1.3.8 Aplicando as boas práticas de fabricação de alimentos no processamento.',
            '1.3.9 Realizando testes em linha para o controle do processo.',
            '1.3.10 Monitorando o funcionamento de máquinas e equipamentos.',
            '1.3.11 Destinando resíduos conforme legislação vigente e medidas de descarbonização.',
            '1.3.12 Aproveitando subprodutos provenientes dos processos.',
            '1.3.13 Identificando as tendências e inovações em ingredientes e processos.',
          ],
          capacidades: [
            {
              tipo: 'Capacidade Técnica',
              dominio: 'Cognitivo',
              texto: 'Identificar as características de matérias-primas, ingredientes e aditivos utilizados no processamento de frutas, hortaliças e derivados, considerando ficha técnica e resultados de análise.',
              conhecimentos: [
                '1. Matérias-primas – frutas e hortaliças: Definição, Características físico-químicas, Principais frutas e hortaliças processadas industrialmente, Classificação (Origem, Variedade, Uso), Fisiologia pós-colheita aplicada à análise de vida útil, Ingredientes e aditivos (Funções, Classificação, Normas para uso, Ficha técnica)',
              ],
            },
            {
              tipo: 'Capacidade Técnica',
              dominio: 'Cognitivo',
              texto: 'Avaliar a qualidade de matérias-primas e produtos de frutas, hortaliças e derivados, considerando contaminações e fatores intrínsecos e extrínsecos dos alimentos.',
              conhecimentos: [
                '2. Controle de qualidade e segurança dos alimentos: Fatores intrínsecos e extrínsecos, Métodos de conservação, Índices de qualidade, Legislação aplicável (RDC ANVISA, MAPA, Codex)',
              ],
            },
            {
              tipo: 'Capacidade Técnica',
              dominio: 'Psicomotor',
              texto: 'Realizar o processamento de frutas e hortaliças de acordo com especificação do produto e normas vigentes.',
              conhecimentos: [
                '3. Processamento de conservas vegetais: Tipos, Etapas, Controle, Equipamentos',
                '4. Processamento de sucos e néctar: Extração, Clarificação, Pasteurização, Envase, Controle',
                '5. Processamento de polpas de frutas: Etapas, Controle, Embalagem',
                '6. Processamento de frutas desidratadas: Métodos de desidratação, Controle, Embalagem',
                '7. Processamento de geleias, doces e compotas: Formulações, Etapas, Controle (Brix, pH, aw)',
                '8. Embalagens para frutas e hortaliças: Tipos, Critérios, Shelf life',
              ],
            },
          ],
        },

        {
          id: 'ME1_UC5',
          codigo: 'UC5',
          nome: 'Processos de Industrialização de Bebidas',
          ch: 40, cht: 16, chp: 24,
          subfuncao: '1.5',
          padroes: [
            '1.5.1 Identificar as características de recebimento de matérias-primas e ingredientes, considerando informações da ficha técnica e resultados de análise.',
            '1.5.2 Calcular a quantidade de matérias-primas e de ingredientes das formulações do produto a ser processado.',
            '1.5.3 Elaborar fluxogramas relativos aos processos produtivos de bebidas fermentadas à base de cereais e à base de frutas, hortaliças e derivados.',
            '1.5.4 Realizar o processamento de bebidas de acordo com a especificação do produto e legislação vigente.',
            '1.5.5 Realizar ajustes no processo de bebidas, considerando os resultados de análises e medições.',
            '1.5.6 Avaliar as contaminações inerentes ao processo produtivo de bebidas.',
            '1.5.7 Selecionando embalagens, considerando as características do produto e tendências de mercado.',
            '1.5.8 Aplicar as boas práticas de fabricação de alimentos no processamento de bebidas.',
            '1.5.9 Realizando testes em linha para o controle do processo.',
            '1.5.10 Aproveitando subprodutos provenientes dos processos.',
            '1.5.11 Destinando resíduos conforme legislação vigente e medidas de descarbonização.',
            '1.5.12 Identificando as tendências e inovações em ingredientes e processos.',
          ],
          capacidades: [
            {
              tipo: 'Capacidade Técnica',
              dominio: 'Cognitivo',
              texto: 'Identificar as características de matérias-primas, ingredientes e aditivos utilizados no processamento de bebidas, considerando ficha técnica e resultados de análise.',
              conhecimentos: [
                '1. Matérias-primas e ingredientes para processamento de bebidas: Características físico-químicas (Água potável, Frutas, Cereais, Vegetais, Açúcar, Mel, Café, Chá, Aromatizantes), Classificação de ingredientes (Fermentos, Enzimas, Estabilizantes, Conservantes, Corantes, Acidulantes), Ficha técnica e resultados laboratoriais, Critérios para seleção, Análises sensoriais, físico-químicas e microbiológicas dos ingredientes',
              ],
            },
            {
              tipo: 'Capacidade Técnica',
              dominio: 'Cognitivo',
              texto: 'Avaliar as contaminações inerentes ao processo produtivo de bebidas, seguindo procedimentos de testes em linha e normas de controle higiênico sanitário.',
              conhecimentos: [
                '2. BPF no processamento de bebidas: Tipos de contaminação, PCCs, Testes em linha, Legislação (RDC ANVISA, MAPA, Decreto 6871)',
              ],
            },
            {
              tipo: 'Capacidade Técnica',
              dominio: 'Psicomotor',
              texto: 'Realizar o processamento de bebidas fermentadas e não alcoólicas de acordo com especificação do produto e legislação vigente.',
              conhecimentos: [
                '3. Processamento de cerveja: Malte, Adjuntos, Lúpulo, Fermentação, Filtração, Envase, Controle',
                '4. Processamento de vinhos: Uvas, Processos de vinificação, Fermentação, Maturação, Engarrafamento',
                '5. Processamento de cachaça e aguardentes: Cana-de-açúcar, Fermentação, Destilação, Envelhecimento',
                '6. Processamento de bebidas não alcoólicas: Sucos, Refrigerantes, Água mineral, Energéticos — Etapas, Controle, Embalagem',
              ],
            },
          ],
        },

        {
          id: 'ME1_UC6',
          codigo: 'UC6',
          nome: 'Processos de Industrialização de Balas, Chocolates e Confeitos',
          ch: 70, cht: 28, chp: 42,
          subfuncao: '1.6',
          padroes: [
            '1.6.1 Monitorando a rastreabilidade, desde a origem até o produto.',
            '1.6.2 Identificando as características de recebimento de matérias-primas e ingredientes, considerando informações da ficha técnica e resultados de análise.',
            '1.6.3 Calculando as quantidades de matérias-primas e de ingredientes das formulações do produto a ser processado.',
            '1.6.4 Elaborando fluxogramas relativos aos processos produtivos de balas, chocolates e confeitos.',
            '1.6.5 Realizando o processamento de balas, chocolates e confeitos de acordo com a especificação do produto.',
            '1.6.6 Realizando ajustes no processamento de balas, chocolates e confeitos, considerando os resultados de análises e medições.',
            '1.6.7 Avaliando as contaminações inerentes ao processo produtivo de balas, chocolates e confeitos.',
            '1.6.8 Selecionando embalagens, considerando as características do produto e tendências de mercado.',
            '1.6.9 Aplicando as boas práticas de fabricação de alimentos no processamento.',
            '1.6.10 Realizando testes em linha para o controle do processo.',
            '1.6.11 Monitorando o funcionamento de máquinas e equipamentos.',
            '1.6.12 Aproveitando subprodutos provenientes dos processos.',
            '1.6.13 Destinando resíduos conforme legislação vigente e medidas de descarbonização.',
            '1.6.14 Identificando as tendências e inovações em ingredientes e processos.',
          ],
          capacidades: [
            {
              tipo: 'Capacidade Técnica',
              dominio: 'Cognitivo',
              texto: 'Identificar as características de matérias-primas, ingredientes e aditivos utilizados no processamento de balas, chocolates e confeitos, considerando ficha técnica e resultados de análise.',
              conhecimentos: [
                '1. Açúcares: Tipos e funções (Sacarose, Glicose, Maltose, Frutose, Edulcorantes), Características (Solubilidade, Higroscopicidade, Granulometria), Processamento de açúcares e adoçantes',
                '2. Cacau: Características, Matéria-prima (Colheita, Fermentação, Secagem, Transporte), Produção de massa/líquor/manteiga/pó, Fatores que influenciam na qualidade',
                '3. Ingredientes e aditivos para balas, chocolates e confeitos: Função e aplicação, Tipos (Gorduras, Aromatizantes, Emulsificantes, Corantes, Conservantes)',
              ],
            },
            {
              tipo: 'Capacidade Técnica',
              dominio: 'Psicomotor',
              texto: 'Realizar o processamento de balas, chocolates e confeitos conforme especificação do produto e normas vigentes.',
              conhecimentos: [
                '4. Processamento de balas: Tipos (Duras, Moles, Mastigáveis, Gomas), Etapas (Cozimento, Moldagem, Resfriamento, Embalagem), Controle (temperatura, umidade, Brix)',
                '5. Processamento de chocolates: Temperagem, Moldagem, Recheios, Coberturas, Controle (temperagem, viscosidade)',
                '6. Processamento de confeitos: Drageamento, Pastilhas, Confetes — Etapas, Controle',
                '7. Embalagens para confeitos: Tipos, Barreira à umidade e oxigênio, Shelf life',
              ],
            },
          ],
        },
      ],
    },

    // ═══════════════════════════════════════════════════════════════════════
    // MÓDULO ESPECÍFICO 2 — ANALISAR + INOVAÇÃO
    // ═══════════════════════════════════════════════════════════════════════
    {
      id: 'ME2',
      nome: 'Módulo Específico 2 — Analisar e Inovar',
      funcao: 'Função 2',
      ucs: [
        {
          id: 'ME2_UC1',
          codigo: 'UC1',
          nome: 'Análises Físico-Químicas de Alimentos',
          ch: 90, cht: 36, chp: 54,
          subfuncao: '2.1',
          padroes: [
            '2.1.1 Planejando a realização das análises laboratoriais, considerando recursos e tempo.',
            '2.1.2 Interpretando plano de amostragem de matérias-primas, insumos, produtos e considerando o plano de amostragem.',
            '2.1.3 Preparando soluções para análises de alimentos, considerando fichas técnicas e de segurança de reagentes.',
            '2.1.4 Preparando amostras para análises laboratoriais.',
            '2.1.5 Executando análises físico-químicas de matérias-primas, insumos e produtos, utilizando metodologias oficiais e validadas.',
            '2.1.6 Calculando resultados a partir de dados obtidos em análises de matérias-primas, insumos e produtos.',
            '2.1.7 Interpretando os dados obtidos nas análises físico-químicas.',
            '2.1.8 Elaborando relatórios ou laudos referentes às análises realizadas.',
            '2.1.9 Realizando estudo de vida de prateleira de produtos alimentícios.',
            '2.1.10 Armazenando amostras, reagentes e resíduos, considerando sua conservação e segurança.',
            '2.1.11 Descartando resíduos resultantes das análises realizadas, segundo normas e legislações ambientais.',
          ],
          capacidades: [
            {
              tipo: 'Capacidade Técnica',
              dominio: 'Cognitivo',
              texto: 'Planejar a realização das análises físico-químicas de alimentos, considerando recursos, tempo e exigências metodológicas.',
              conhecimentos: [
                '1. Planejamento das análises físico-químicas: Definição dos tipos de análises e Seleção, Recursos (Equipamentos, Reagentes, Pessoal, Infraestrutura), Cronogramas de trabalho, Infraestrutura laboratorial, Normas de segurança e BPL',
              ],
            },
            {
              tipo: 'Capacidade Técnica',
              dominio: 'Psicomotor',
              texto: 'Preparar amostras de matérias-primas, insumos e produtos para análises físico-químicas, conforme procedimentos operacionais, armazenamento e plano de amostragem.',
              conhecimentos: [
                '2. Amostragem dos ensaios físico-químicos: Definição, Planos de amostragem (Critérios para coleta e representatividade), Procedimentos operacionais, Conservação e armazenamento de amostras',
              ],
            },
            {
              tipo: 'Capacidade Técnica',
              dominio: 'Psicomotor',
              texto: 'Executar análises físico-químicas de matérias-primas, insumos e produtos, utilizando metodologias oficiais e validadas.',
              conhecimentos: [
                '3. Principais análises físico-químicas: Umidade (Secagem em estufa, Karl Fischer), Cinzas (Incineração), Proteínas (Kjeldahl, Dumas), Lipídios (Soxhlet, Gerber), Carboidratos (Cálculo, Métodos enzimáticos), pH e acidez titulável, Sólidos solúveis (Brix), Atividade de água (aw), Análises específicas por produto (RDC ANVISA, IAL, AOAC, ABNT)',
              ],
            },
            {
              tipo: 'Capacidade Técnica',
              dominio: 'Cognitivo',
              texto: 'Calcular e interpretar resultados de análises físico-químicas e elaborar laudos técnicos.',
              conhecimentos: [
                '4. Cálculo e interpretação de resultados: Estatística básica aplicada a análises, Incerteza de medição, Limites estabelecidos em legislação, Elaboração de relatórios e laudos técnicos',
                '5. Estudo de vida de prateleira (shelf life): Métodos acelerados e em tempo real, Parâmetros físico-químicos de controle',
              ],
            },
          ],
        },

        {
          id: 'ME2_UC2',
          codigo: 'UC2',
          nome: 'Análises Sensoriais de Alimentos',
          ch: 60, cht: 24, chp: 36,
          subfuncao: '2.2',
          padroes: [
            '2.2.1 Planejando análises sensoriais, de acordo com os tipos de alimentos.',
            '2.2.2 Selecionando provadores para as análises sensoriais.',
            '2.2.3 Preparando amostra sensorial para a realização das análises.',
            '2.2.4 Realizando análises sensoriais utilizando metodologias oficiais.',
            '2.2.5 Executando as análises sensoriais de acordo com as metodologias padrões e procedimentos operacionais.',
            '2.2.6 Calculando resultados a partir dos dados obtidos nas análises sensoriais de matérias-primas, insumos e produtos.',
            '2.2.7 Interpretando os dados obtidos nas análises sensoriais.',
            '2.2.8 Elaborando laudo de análise ou relatório técnico, de acordo com os procedimentos operacionais.',
            '2.2.9 Descartando resíduos resultantes das análises realizadas, segundo normas e legislações ambientais.',
            '2.2.10 Realizando estudo de vida de prateleira de produtos alimentícios.',
          ],
          capacidades: [
            {
              tipo: 'Capacidade Técnica',
              dominio: 'Cognitivo',
              texto: 'Planejar análises sensoriais de alimentos considerando os tipos de produtos e critérios de qualidade.',
              conhecimentos: [
                '1. Planejamento das análises sensoriais: Definição dos objetivos do painel sensorial, Seleção (Recursos, Equipamentos, Amostras, Provadores, Infraestrutura), Cronogramas do painel, Normas de segurança e BPL, Critérios de qualidade exigidos para diferentes tipos de produtos',
              ],
            },
            {
              tipo: 'Capacidade Técnica',
              dominio: 'Cognitivo',
              texto: 'Selecionar provadores para as análises sensoriais, levando em conta perfil sensorial e parâmetros estatísticos.',
              conhecimentos: [
                '2. Seleção de provadores: Critérios de seleção (Sensibilidade, Experiência, Treinamento prévio), Perfil sensorial, Análise estatística',
              ],
            },
            {
              tipo: 'Capacidade Técnica',
              dominio: 'Psicomotor',
              texto: 'Executar análises sensoriais utilizando metodologias oficiais e procedimentos operacionais.',
              conhecimentos: [
                '3. Métodos de análise sensorial: Testes discriminativos (Triangular, Duo-trio, Diferença do controle), Testes descritivos (ADQ, Perfil de textura), Testes afetivos (Aceitação, Preferência, Intenção de compra), Preparação de amostras (Codificação, Temperatura, Quantidade)',
                '4. Atributos sensoriais avaliados: Aparência, Cor, Aroma, Sabor, Textura, Textura bucal',
                '5. Análise e interpretação de resultados: Análise estatística (ANOVA, Teste de Tukey, Análise de Componentes Principais), Elaboração de laudos e relatórios',
              ],
            },
          ],
        },

        {
          id: 'ME2_UC3',
          codigo: 'UC3',
          nome: 'Análises Microbiológicas em Alimentos',
          ch: 90, cht: 36, chp: 54,
          subfuncao: '2.3',
          padroes: [
            '2.3.1 Planejando a realização das análises laboratoriais, considerando recursos e tempo.',
            '2.3.2 Realizando amostragem de matérias-primas, insumos e produtos considerando o plano de amostragem.',
            '2.3.3 Preparando meios de cultura e materiais para análises de alimentos, considerando fichas técnicas e de segurança.',
            '2.3.4 Pesquisando ferramentas alternativas para análises.',
            '2.3.5 Preparando amostras para análises laboratoriais.',
            '2.3.6 Executando análises microbiológicas e microscópicas de matérias-primas, insumos e produtos, utilizando metodologias oficiais e validadas.',
            '2.3.7 Calculando resultados a partir de dados obtidos em análises microbiológicas, microscópicas, macroscópicas e de contaminantes.',
            '2.3.8 Elaborando relatórios ou laudos referentes às análises realizadas.',
            '2.3.9 Realizando estudo de vida de prateleira de produtos alimentícios.',
            '2.3.10 Armazenando amostras, meios de cultura e resíduos, considerando sua conservação e segurança.',
            '2.3.11 Descartando resíduos laboratoriais e biológicos, de acordo com normas ambientais, saúde, segurança e BPL.',
          ],
          capacidades: [
            {
              tipo: 'Capacidade Técnica',
              dominio: 'Cognitivo',
              texto: 'Planejar a realização das análises microbiológicas, microscópicas, macroscópicas e de contaminantes em alimentos, considerando recursos, tempo e exigências metodológicas.',
              conhecimentos: [
                '1. Planejamento de análises microbiológicas: Definição dos tipos de análises e Seleção, Recursos (Equipamentos, Reagentes, Pessoal, Infraestrutura), Cronogramas de trabalho, Infraestrutura laboratorial, Normas de segurança e BPL',
              ],
            },
            {
              tipo: 'Capacidade Técnica',
              dominio: 'Psicomotor',
              texto: 'Preparar amostras de matérias-primas, insumos e produtos para análises laboratoriais conforme procedimentos operacionais, armazenamento e plano de amostragem.',
              conhecimentos: [
                '2. Amostragem das análises microbiológicas: Definição, Planos de amostragem (Critérios para coleta e representatividade), Procedimentos operacionais, Conservação',
              ],
            },
            {
              tipo: 'Capacidade Técnica',
              dominio: 'Psicomotor',
              texto: 'Executar análises microbiológicas e microscópicas utilizando metodologias oficiais e validadas.',
              conhecimentos: [
                '3. Principais análises microbiológicas: Microrganismos indicadores (Coliformes, E. coli, Aeróbios mesófilos), Patógenos (Salmonella, Listeria, Staphylococcus, Bacillus cereus, Clostridium), Fungos e leveduras, Preparação de meios de cultura, Técnicas de plaqueamento (Pour plate, Spread plate, MPN), Leitura e contagem de colônias',
                '4. Análises microscópicas e macroscópicas: Microscopia óptica, Coloração de Gram, Análise macroscópica de contaminantes',
                '5. Cálculo e interpretação de resultados: UFC/g, UFC/mL, NMP, Limites da RDC 331/2019 e legislações específicas, Elaboração de laudos',
                '6. Descarte de resíduos biológicos: Autoclaving, Descarte conforme RDC 222/2018',
              ],
            },
          ],
        },

        {
          id: 'ME2_UC4',
          codigo: 'UC4',
          nome: 'Criatividade e Ideação em Projetos de Inovação',
          ch: 16, cht: 10, chp: 6,
          padroes: [],
          capacidades: [
            {
              tipo: 'Capacidade Básica',
              dominio: 'Cognitivo',
              texto: 'Delimitar os resultados parciais esperados e o resultado final a ser alcançado pelo projeto.',
              conhecimentos: ['Definição de escopo, metas e entregáveis do projeto de inovação'],
            },
            {
              tipo: 'Capacidade Básica',
              dominio: 'Cognitivo',
              texto: 'Analisar as características e transformações que têm impactado mais significativamente, no passado recente e no presente, a área ou segmento tecnológico de seu perfil profissional.',
              conhecimentos: ['Tendências tecnológicas na indústria alimentícia: IA, IoT, Automação, Novos ingredientes, Sustentabilidade'],
            },
            {
              tipo: 'Capacidade Técnica',
              dominio: 'Cognitivo',
              texto: 'Elaborar o plano de gerenciamento do projeto a partir das necessidades dos interessados (stakeholders), considerando cronograma, escopo, aquisições e recursos.',
              conhecimentos: ['Gestão de projetos: Cronograma, EAP, Stakeholders, Recursos, Gestão de riscos'],
            },
            {
              tipo: 'Capacidade Técnica',
              dominio: 'Cognitivo',
              texto: 'Selecionar as metodologias e ferramentas que melhor atendem aos objetivos da pesquisa e realidade estudada.',
              conhecimentos: ['Design Thinking, Lean Startup, SCRUM, Canvas, Brainstorming, Benchmarking'],
            },
            {
              tipo: 'Capacidade Técnica',
              dominio: 'Cognitivo',
              texto: 'Conduzir sessões de ideação colaborativa para inspirar a geração de ideias que visem a encontrar soluções alternativas para necessidades, gargalos, oportunidades e desafios da indústria.',
              conhecimentos: ['Técnicas de ideação: Brainstorming, Brainwriting, SCAMPER, Mapa mental, Prototipagem rápida'],
            },
          ],
        },

        {
          id: 'ME2_UC5',
          codigo: 'UC5',
          nome: 'Modelagem de Projetos de Inovação',
          ch: 20, cht: 12, chp: 8,
          padroes: [],
          capacidades: [
            {
              tipo: 'Capacidade Básica',
              dominio: 'Cognitivo',
              texto: 'Selecionar as metodologias e ferramentas que permitem levar em consideração o tipo e as características do projeto, bem como os pontos de vista, as expectativas e as necessidades do cliente ou usuário na definição da proposta de valor e do modelo de negócios.',
              conhecimentos: ['Business Model Canvas, Lean Canvas, Proposta de valor, Validação com clientes'],
            },
            {
              tipo: 'Capacidade Técnica',
              dominio: 'Psicomotor',
              texto: 'Organizar as necessidades de recursos humanos para cada etapa e necessidade do projeto de inovação.',
              conhecimentos: ['Dimensionamento de equipe, Papéis e responsabilidades, Matriz RACI'],
            },
            {
              tipo: 'Capacidade Técnica',
              dominio: 'Psicomotor',
              texto: 'Elaborar, de forma clara e objetiva, os documentos demandados pela proposta de valor e pelo modelo de negócio do projeto a ser desenvolvido.',
              conhecimentos: ['Documentação de projeto: Proposta de valor, Modelo de negócios, Plano de implementação'],
            },
            {
              tipo: 'Capacidade Técnica',
              dominio: 'Psicomotor',
              texto: 'Sistematizar dados e informações resultantes de estudos de viabilidade técnica e financeira para projetos de inovação.',
              conhecimentos: ['Viabilidade técnica: TRL, Análise de custos, Viabilidade financeira: VPL, TIR, Payback'],
            },
            {
              tipo: 'Capacidade Técnica',
              dominio: 'Cognitivo',
              texto: 'Definir os pilares do modelo de negócio para as diferentes propostas de valor do projeto a ser desenvolvido.',
              conhecimentos: ['Business Model Canvas: 9 blocos, Proposta de valor, Segmentos de clientes, Canais, Fontes de receita'],
            },
          ],
        },

        {
          id: 'ME2_UC6',
          codigo: 'UC6',
          nome: 'Prototipagem de Negócios Inovadores',
          ch: 24, cht: 12, chp: 12,
          padroes: [],
          capacidades: [
            {
              tipo: 'Capacidade Básica',
              dominio: 'Cognitivo',
              texto: 'Selecionar as ferramentas que melhor se adaptam ou atendem as necessidades de sistematização de dados e a estruturação da documentação referente ao processo de prototipagem.',
              conhecimentos: ['Ferramentas de documentação e sistematização de dados de prototipagem'],
            },
            {
              tipo: 'Capacidade Básica',
              dominio: 'Cognitivo',
              texto: 'Definir os testes de funcionalidade da solução a partir das características, requisitos e objetivos estabelecidos para o projeto de inovação.',
              conhecimentos: ['Definição de critérios de sucesso, KPIs de prototipagem, Testes de funcionalidade'],
            },
            {
              tipo: 'Capacidade Técnica',
              dominio: 'Cognitivo',
              texto: 'Elaborar a documentação técnica referente aos processos de prototipagem das soluções de inovação, considerando padrões e referências técnicas estabelecidas.',
              conhecimentos: ['Documentação técnica de protótipos, Relatórios de testes, Padrões técnicos'],
            },
            {
              tipo: 'Capacidade Técnica',
              dominio: 'Psicomotor',
              texto: 'Organizar fontes fornecedoras das tecnologias necessárias para o desenvolvimento dos protótipos.',
              conhecimentos: ['Mapeamento de fornecedores de tecnologia, Parcerias tecnológicas, Ecossistema de inovação'],
            },
            {
              tipo: 'Capacidade Técnica',
              dominio: 'Cognitivo',
              texto: 'Realizar testes e/ou provas de conceito relacionados aos protótipos de baixa fidelidade, utilizando as técnicas e ferramentas definidas.',
              conhecimentos: ['MVP (Produto Mínimo Viável), Prova de conceito (PoC), Prototipagem rápida, Testes com usuários'],
            },
          ],
        },
      ],
    },

    // ═══════════════════════════════════════════════════════════════════════
    // MÓDULO ESPECÍFICO 3 — COORDENAR
    // ═══════════════════════════════════════════════════════════════════════
    {
      id: 'ME3',
      nome: 'Módulo Específico 3 — Coordenar a Produção',
      funcao: 'Função 3',
      ucs: [
        {
          id: 'ME3_UC1',
          codigo: 'UC1',
          nome: 'Gestão Integrada da Produção',
          ch: 90, cht: 36, chp: 54,
          subfuncao: '3.1 / 3.2',
          padroes: [
            '3.1.1 Elaborando o plano de produção.',
            '3.1.2 Definindo as matérias-primas utilizadas no processamento.',
            '3.1.3 Definindo os recursos humanos utilizados no processamento.',
            '3.1.4 Definindo as máquinas e utensílios utilizados no processamento.',
            '3.1.5 Elaborando o custo da produção.',
            '3.2.1 Monitorando os indicadores de desempenho estabelecidos para o processo de produção.',
            '3.2.2 Monitorando os processos de produção tendo em vista o comportamento das variáveis de processo, por meio de dispositivos digitais.',
            '3.2.3 Interpretando os dados e indicadores de desempenho.',
            '3.2.4 Propondo a integração dos sistemas produtivos por meio de IoT, IA, robótica e computação em nuvem.',
            '3.2.5 Corrigindo os desvios nos processos manuais e automatizados.',
            '3.2.6 Realizando o controle de estoques de matéria-prima e produto acabado.',
            '3.2.7 Elaborando relatórios de produção.',
            '3.2.8 Monitorando o processo produtivo considerando os pilares da ESG.',
          ],
          capacidades: [
            {
              tipo: 'Capacidade Técnica',
              dominio: 'Cognitivo',
              texto: 'Elaborar o plano de produção de alimentos considerando etapas do processamento, metas produtivas e recursos necessários.',
              conhecimentos: [
                '1. Planejamento e controle da produção (PCP) de alimentos: Etapas do processamento, Identificação e descrição de etapas críticas, Metas produtivas (Quantidade, Qualidade, Prazo, Recursos envolvidos), Organização industrial (Layout, Fluxo de produção, Tipos, Simbologia), Coordenação da execução do plano de produção',
              ],
            },
            {
              tipo: 'Capacidade Técnica',
              dominio: 'Cognitivo',
              texto: 'Corrigir os desvios nos processos manuais e automatizados de produção de alimentos.',
              conhecimentos: [
                '2. Controle do processo de industrialização de alimentos: Identificação de desvios em processos manuais e automáticos, Fundamentos de estatística aplicados ao controle (Média, Desvio padrão, CEP — Gráficos de controle), Ferramentas da qualidade (Diagrama de causa e efeito, Pareto, 5 Por quês, Fluxograma)',
              ],
            },
            {
              tipo: 'Capacidade Técnica',
              dominio: 'Cognitivo',
              texto: 'Monitorar e interpretar indicadores de desempenho do processo produtivo, integrando sistemas por meio de IoT, IA e computação em nuvem.',
              conhecimentos: [
                '3. Indicadores de desempenho (KPIs): OEE, Taxa de refugo, Produtividade, Custo de produção, Lead time',
                '4. Integração digital da produção: IoT na indústria alimentícia (Sensores de temperatura, umidade, pH), Sistemas SCADA e MES, IA para controle preditivo, Computação em nuvem, Dashboards digitais, ERPs',
                '5. ESG na produção de alimentos: Indicadores ambientais (Energia, Água, Resíduos), Indicadores sociais, Relatórios de sustentabilidade',
              ],
            },
            {
              tipo: 'Capacidade Técnica',
              dominio: 'Psicomotor',
              texto: 'Elaborar relatórios de produção e controlar estoques de matéria-prima e produto acabado.',
              conhecimentos: [
                '6. Gestão de estoques: FIFO/FEFO, Estoque de segurança, Lote econômico de compra, Inventário',
                '7. Elaboração de relatórios: Estrutura, Indicadores, Análise crítica, Planos de ação',
              ],
            },
          ],
        },

        {
          id: 'ME3_UC2',
          codigo: 'UC2',
          nome: 'Segurança dos Alimentos',
          ch: 90, cht: 36, chp: 54,
          subfuncao: '3.3 / 3.4',
          padroes: [
            '3.3.1 Coletando dados de qualidade de entrada e saída da produção de alimentos.',
            '3.3.2 Identificando a sustentabilidade nos processos de alimentos.',
            '3.3.3 Pesquisando ferramentas para o controle da qualidade de alimentos.',
            '3.3.4 Interpretando normas e legislações de qualidade e identidade dos alimentos.',
            '3.4.1 Avaliando o nível de atendimento dos requisitos de BPF, POP e PPHO.',
            '3.4.2 Elaborando documentação de Boas Práticas de Fabricação.',
            '3.4.3 Elaborando procedimentos operacionais padronizados (POP) de segurança dos alimentos.',
            '3.4.4 Elaborando Plano de Análise de Perigos e Pontos Críticos de Controle (APPCC).',
            '3.4.5 Elaborando os documentos por meio de Inteligência Artificial (IA).',
            '3.4.6 Treinando equipes de trabalho para aplicação dos conceitos de segurança dos alimentos.',
          ],
          capacidades: [
            {
              tipo: 'Capacidade Técnica',
              dominio: 'Cognitivo',
              texto: 'Avaliar a conformidade legal e a eficácia do sistema de gestão da segurança dos alimentos.',
              conhecimentos: [
                '1. Gestão da segurança dos alimentos: Contaminações em alimentos (Definição, Perigos, Medidas de controle para cada tipo de perigo), Métodos de conservação (Físicos, Químicos, Biológicos, Teoria dos obstáculos), Legislação e normas de segurança dos alimentos (Requisitos legais nacionais e internacionais, ANVISA, MAPA, Codex Alimentarius, ISO 22000, FSSC 22000)',
              ],
            },
            {
              tipo: 'Capacidade Técnica',
              dominio: 'Psicomotor',
              texto: 'Avaliar o nível de atendimento dos requisitos de BPF, elaborar documentação e treinar equipes.',
              conhecimentos: [
                '2. Conformidade com BPF: Avaliação de projeto e construção das instalações (Localização, Edifícios, Prevenção de contaminação cruzada, Equipamento, Abastecimento de água, Escoamento de resíduos, Higienização, Temperatura, Ar e ventilação, Iluminação, Armazenamento), Insumos, Controle de pragas, Higiene pessoal',
                '3. POP e PPHO: Elaboração de Procedimentos Operacionais Padrão, Procedimento Padrão de Higiene Operacional, Instrução de Trabalho',
                '4. APPCC: 12 etapas (Formação da equipe, Descrição do produto, Uso pretendido, Fluxograma, Verificação in loco, Análise de perigos, PCCs, Limites críticos, Monitoramento, Ações corretivas, Verificação, Documentação)',
                '5. Uso de IA na elaboração de documentos: GenAI para redigir POPs, BPFs e planos APPCC, Verificação humana obrigatória',
                '6. Treinamento de equipes: Métodos, Avaliação de eficácia, Registros de treinamento',
              ],
            },
            {
              tipo: 'Capacidade Técnica',
              dominio: 'Cognitivo',
              texto: 'Coletar dados de qualidade e interpretar normas e legislações de qualidade e identidade dos alimentos.',
              conhecimentos: [
                '7. Controle de qualidade: Coleta e análise de dados de qualidade, Ferramentas da qualidade (Gráfico de controle, Histograma, Diagrama de dispersão, Análise de causa-raiz), Normas de identidade e qualidade de alimentos (RDC ANVISA, Instruções Normativas MAPA)',
              ],
            },
          ],
        },

        {
          id: 'ME3_UC3',
          codigo: 'UC3',
          nome: 'Melhorias em Processos e Produtos Alimentícios',
          ch: 110, cht: 44, chp: 66,
          subfuncao: '3.5',
          padroes: [
            '3.5.1 Implementando as melhorias do processo por meio da gestão de projetos.',
            '3.5.2 Monitorando a gestão de projetos dentro das fábricas.',
            '3.5.3 Mapeando processos e produtos de alimentos por meio de ferramentas.',
            '3.5.4 Diagnosticando oportunidades de melhorias por meio da análise de dados.',
            '3.5.5 Propondo melhorias no leiaute para processamento de alimentos.',
            '3.5.6 Elaborando plano de ação para melhorias de processo, com base nos fundamentos da gestão de projetos.',
            '3.5.7 Executando as ações planejadas de acordo com o plano de ação.',
            '3.5.8 Atribuindo responsabilidades pertinentes ao plano de ação.',
            '3.5.9 Providenciando recursos físicos para implementação de melhorias do processo.',
            '3.5.10 Apresentando resultados por meio de ferramentas digitais.',
            '3.5.11 Avaliando os resultados da implementação por meio de metodologias.',
            '3.5.12 Padronizando processos com base nas melhorias implementadas.',
          ],
          capacidades: [
            {
              tipo: 'Capacidade Técnica',
              dominio: 'Cognitivo',
              texto: 'Avaliar os resultados da implementação de melhorias, utilizando metodologias e ferramentas digitais para apresentar os resultados.',
              conhecimentos: [
                '1. Avaliação de resultados de melhorias: Conceitos (KPIs, Métricas de sucesso), Análise de dados (Estatística básica, Softwares de BI, Dashboards), Ferramentas digitais para monitoramento (Sistemas ERP, Planilhas, Aplicativos específicos), Relatórios parciais e finais, Técnicas de visualização de dados (Gráficos, Diagramas, Tabelas dinâmicas), Documentação técnica, Métodos de feedback e validação dos resultados',
              ],
            },
            {
              tipo: 'Capacidade Técnica',
              dominio: 'Cognitivo',
              texto: 'Mapear os processos e oportunidades de melhoria por meio da análise de dados e de ferramentas da qualidade.',
              conhecimentos: [
                '2. Mapeamento de processos: BPMN, Fluxograma, VSM (Mapeamento do Fluxo de Valor), Diagrama SIPOC',
                '3. Ferramentas de qualidade e melhoria: PDCA, DMAIC, Lean Manufacturing, Kaizen, 5S, Diagrama de Ishikawa, Pareto, 5 Por Quês, Poka-Yoke, FMEA',
              ],
            },
            {
              tipo: 'Capacidade Técnica',
              dominio: 'Psicomotor',
              texto: 'Elaborar e implementar planos de ação para melhorias de processos e produtos alimentícios, padronizando os resultados.',
              conhecimentos: [
                '4. Plano de ação: 5W2H, Matriz GUT, Priorização de ações',
                '5. Padronização de processos: Procedimentos Operacionais Padrão, Instruções de trabalho, Gestão visual',
                '6. Gestão de projetos de melhoria: Cronograma, Recursos, Riscos, Stakeholders, Comunicação',
              ],
            },
          ],
        },

        {
          id: 'ME3_UC4',
          codigo: 'UC4',
          nome: 'Implementação de Negócios Inovadores',
          ch: 20, cht: 10, chp: 10,
          padroes: [],
          capacidades: [
            {
              tipo: 'Capacidade Técnica',
              dominio: 'Cognitivo',
              texto: 'Estruturar ações e estratégias de venda para o produto/serviço com referência nos pilares estabelecidos na proposta de valor e modelo de negócios.',
              conhecimentos: ['Estratégias de venda: Funil de vendas, Pitch, Go-to-market, Canais de distribuição'],
            },
            {
              tipo: 'Capacidade Técnica',
              dominio: 'Cognitivo',
              texto: 'Desenvolver estratégias de marketing alinhadas ao perfil do público-alvo e características do produto/serviço.',
              conhecimentos: ['Marketing 4Ps, Marketing digital, Branding, Posicionamento de marca, Personas'],
            },
            {
              tipo: 'Capacidade Técnica',
              dominio: 'Psicomotor',
              texto: 'Produzir a documentação demandada para a implementação do negócio inovador, considerando as necessidades de recursos humanos, tecnológicos, financeiros e de infraestrutura.',
              conhecimentos: ['Plano de negócios, Pitch deck, Documentação legal, Estrutura operacional'],
            },
            {
              tipo: 'Capacidade Técnica',
              dominio: 'Cognitivo',
              texto: 'Selecionar ferramentas e estratégias de marketing que melhor comunicam os propósitos, resultados, vantagens e diferenciais do produto/serviço.',
              conhecimentos: ['Ferramentas de marketing digital: SEO, Redes sociais, E-mail marketing, Google Ads, Análise de métricas'],
            },
            {
              tipo: 'Capacidade Técnica',
              dominio: 'Cognitivo',
              texto: 'Identificar o perfil e as características de comportamento do público alvo, considerando suas percepções, hábitos de consumo, valores, tendências e necessidades.',
              conhecimentos: ['Pesquisa de mercado, Análise do consumidor, Tendências de consumo alimentar, Pesquisa qualitativa e quantitativa'],
            },
          ],
        },
      ],
    },
  ],

  // ─────────────────────────────────────────────────────────────────────────
  // COMPETÊNCIAS DE IA (documento oficial)
  // ─────────────────────────────────────────────────────────────────────────
  competenciasIA: [
    {
      id: 'IA1',
      nome: 'Alfabetização em IA',
      descricao: 'Compreender os fundamentos da Inteligência Artificial, seu funcionamento, limitações e aspectos éticos para uso responsável na área de alimentos.',
      capacidades: [
        'Compreender o que é IA, como funciona e quais são seus tipos (IA generativa, machine learning, visão computacional).',
        'Identificar aplicações de IA na indústria alimentícia: inspeção visual de qualidade, controle preditivo, rastreabilidade, laudos automáticos.',
        'Reconhecer limitações e riscos éticos do uso de IA (alucinações, viés, privacidade de dados).',
        'Usar IA de forma responsável, validando sempre os outputs com conhecimento técnico humano.',
      ],
    },
    {
      id: 'IA2',
      nome: 'Análise de Dados com IA',
      descricao: 'Utilizar ferramentas de IA generativa e análise de dados para otimizar processos, controle de qualidade e tomada de decisão na produção de alimentos.',
      capacidades: [
        'Formular prompts eficazes para obter resultados úteis de IAs generativas (ChatGPT, Gemini, Claude).',
        'Usar IA para análise de dados de produção: identificação de padrões, previsão de desvios, otimização de processos.',
        'Elaborar documentos técnicos (POPs, laudos, planos APPCC) com auxílio de IA generativa, com revisão crítica humana.',
        'Aplicar ferramentas de BI com IA para visualização e interpretação de indicadores da produção alimentícia.',
      ],
    },
  ],

}; // fim ALIMENTOS

// Exporta para uso nos módulos HTML
if (typeof module !== 'undefined') module.exports = ALIMENTOS;

// Disponibiliza a base oficial no navegador (HTML estático/Vercel)
if (typeof window !== 'undefined') window.ALIMENTOS = ALIMENTOS;
