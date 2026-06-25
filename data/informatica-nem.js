/* =============================================================
   data/informatica-nem.js
   Fonte: Plano de Curso Técnico em Informática para Internet
          Ensino Médio com Itinerário (NEM) — SENAI DR-BA — Jan/2022
   NADA INVENTADO — base oficial literal
   ============================================================= */

const INFORMATICA_NEM = {
  area: { nome: 'Informática para Internet · NEM', cor: '#6A0DAD' },
  curso: 'Técnico em Informática para Internet — NEM · SENAI DR-BA · 1200h',
  cargaHoraria: 1200,
  eixo: 'Informação e Comunicação',

  modulos: [
    {
      id: 'MT',
      nome: 'Módulo Mundo do Trabalho (1º Ano)',
      ch: 200,
      ucs: [
        {
          id: 'MT_UC1', codigo: 'MT_UC1',
          nome: 'Autoconhecimento', ch: 30,
          objetivo: 'Desenvolver a capacidade de reflexão sobre si mesmo, identidade, valores e potencialidades para a inserção no mundo do trabalho.',
          capacidades: [
            'Reconhecer as próprias habilidades e competências',
            'Identificar valores pessoais alinhados ao mundo do trabalho',
            'Desenvolver autogestão e protagonismo juvenil'
          ],
          conhecimentos: ['Identidade e autoconhecimento', 'Competências socioemocionais', 'Projeto de vida', 'Autogestão'],
          socioemocionais: ['Autoconhecimento', 'Inteligência emocional', 'Protagonismo'],
          ambientes: ['Sala de aula', 'Laboratório de informática'],
          equipamentos: ['Computador', 'Projetor', 'Material didático']
        },
        {
          id: 'MT_UC2', codigo: 'MT_UC2',
          nome: 'Projeto de Vida e Carreira', ch: 50,
          objetivo: 'Desenvolver habilidades de planejamento de projeto de vida e trajetória profissional alinhadas ao mundo do trabalho.',
          capacidades: [
            'Elaborar projeto de vida alinhado às aspirações profissionais',
            'Identificar oportunidades de carreira na área de TI',
            'Planejar trajetória de formação e desenvolvimento profissional'
          ],
          conhecimentos: ['Projeto de vida', 'Mercado de trabalho em TI', 'Planejamento de carreira', 'Empreendedorismo', 'Networking'],
          socioemocionais: ['Protagonismo', 'Resiliência', 'Pensamento crítico'],
          ambientes: ['Sala de aula', 'Laboratório de informática'],
          equipamentos: ['Computador', 'Projetor']
        },
        {
          id: 'MT_UC3', codigo: 'MT_UC3',
          nome: 'Mundo do Trabalho', ch: 120,
          objetivo: 'Compreender o contexto do mundo do trabalho, relações de emprego, legislação trabalhista e tendências do mercado de TI.',
          capacidades: [
            'Reconhecer os direitos e deveres nas relações de trabalho',
            'Identificar tendências e demandas do mercado de TI',
            'Desenvolver postura profissional e ética no ambiente de trabalho'
          ],
          conhecimentos: ['Legislação trabalhista', 'CLT e contratos de trabalho', 'Ética profissional', 'Mercado de TI', 'Tendências tecnológicas', 'Empreendedorismo digital'],
          socioemocionais: ['Ética', 'Responsabilidade', 'Comunicação', 'Trabalho em equipe'],
          ambientes: ['Sala de aula', 'Laboratório de informática'],
          equipamentos: ['Computador', 'Projetor', 'Material didático']
        }
      ]
    },
    {
      id: 'MIB',
      nome: 'Módulo Integrador Básico (2º Ano)',
      ch: 240,
      ucs: [
        {
          id: 'MIB_UC1', codigo: 'MIB_UC1',
          nome: 'Fundamentos de Tecnologia da Informação', ch: 80,
          objetivo: 'Propiciar o desenvolvimento de fundamentos técnicos e científicos relativos à tecnologia da informação que subsidiarão o desenvolvimento das capacidades técnicas dos cursos técnicos de referência.',
          capacidades: [
            'Reconhecer componentes e periféricos de computadores',
            'Identificar os cuidados de segurança no manuseio de sistemas computacionais',
            'Identificar ameaças virtuais de segurança nos sistemas computacionais',
            'Interpretar termos técnicos, inclusive em inglês, utilizados em sistemas computacionais',
            'Identificar simbologias utilizadas em sistemas computacionais',
            'Identificar tipos, características e funcionalidades dos diferentes sistemas operacionais',
            'Correlacionar as características do hardware com os requisitos mínimos de software',
            'Empregar procedimentos para instalação e configuração de periféricos',
            'Empregar procedimentos para gerenciamento de pastas e arquivos',
            'Empregar procedimentos para gerenciamento de aplicativos',
            'Reconhecer mensagens de erro em sistemas computacionais',
            'Definir configurações dos sistemas operacionais de acordo com as necessidades',
            'Identificar aplicativos e suas funcionalidades de acordo com as necessidades do usuário',
            'Definir configurações dos aplicativos de acordo com as necessidades',
            'Identificar os tipos, características e funcionalidades dos softwares de escritório'
          ],
          conhecimentos: ['Hardware: componentes e periféricos', 'Sistemas operacionais', 'Segurança da informação', 'Ameaças virtuais', 'Software de escritório', 'Gerenciamento de arquivos e aplicativos', 'Terminologia técnica em TI'],
          socioemocionais: ['Atenção e concentração', 'Disciplina', 'Autogestão'],
          ambientes: ['Laboratório de informática', 'Sala de aula'],
          equipamentos: ['Computadores', 'Periféricos', 'Softwares de escritório', 'Projetor']
        },
        {
          id: 'MIB_UC2', codigo: 'MIB_UC2',
          nome: 'Fundamentos de Bancos de Dados', ch: 40,
          objetivo: 'Propiciar o desenvolvimento de fundamentos técnicos e científicos relativos a banco de dados que subsidiarão o desenvolvimento das capacidades técnicas.',
          capacidades: [
            'Reconhecer conceitos fundamentais de banco de dados',
            'Identificar tipos de bancos de dados relacionais e não-relacionais',
            'Identificar linguagem de banco de dados relacionais e não-relacionais para consulta, manipulação, controle e definição',
            'Identificar ferramentas de manipulação de banco de dados',
            'Empregar comentários para documentação do código fonte'
          ],
          conhecimentos: ['Banco de dados', 'Modelagem de Dados', 'Normalização', 'SQL básico', 'Bancos relacionais e não-relacionais', 'Gerenciadores de banco de dados'],
          socioemocionais: ['Atenção', 'Disciplina', 'Organização'],
          ambientes: ['Laboratório de informática'],
          equipamentos: ['Computadores', 'SGBDs (MySQL, PostgreSQL)', 'Projetor']
        },
        {
          id: 'MIB_UC3', codigo: 'MIB_UC3',
          nome: 'Fundamentos de Redes de Computadores', ch: 60,
          objetivo: 'Propiciar o desenvolvimento de fundamentos técnicos e científicos relativos à infraestrutura e tecnologias de redes de computadores do ambiente de usuário.',
          capacidades: [
            'Reconhecer unidades de medida empregadas na transmissão e armazenamento de dados',
            'Reconhecer as simbologias básicas de rede',
            'Reconhecer componentes e ativos de redes',
            'Identificar tipos e tecnologias de conexão a redes de computadores',
            'Reconhecer tipos e características (classificação, estrutura e modelos) de redes'
          ],
          conhecimentos: ['Unidades de medida de transferência de dados (bps, Kbps, Mbps, Gbps)', 'Tipos de interfaces de rede', 'Tipos de serviços de Internet', 'Armazenamento em redes', 'Conceitos básicos de rede', 'Topologias de rede', 'Modelo OSI e TCP/IP'],
          socioemocionais: ['Atenção', 'Raciocínio lógico', 'Trabalho em equipe'],
          ambientes: ['Laboratório de informática', 'Sala de aula'],
          equipamentos: ['Computadores', 'Switches', 'Roteadores', 'Cabos de rede', 'Projetor']
        },
        {
          id: 'MIB_UC4', codigo: 'MIB_UC4',
          nome: 'Lógica Computacional', ch: 60,
          objetivo: 'Propiciar o desenvolvimento de fundamentos de lógica computacional que subsidiarão o desenvolvimento das capacidades técnicas.',
          capacidades: [
            'Aplicar abstração lógica na solução de problemas computacionais',
            'Reconhecer álgebra booleana e sua aplicação',
            'Elaborar fluxogramas e representações gráficas de algoritmos',
            'Aplicar tipos de dados, variáveis e constantes',
            'Empregar expressões lógicas e aritméticas',
            'Elaborar pseudocódigo seguindo padrões de legibilidade',
            'Aplicar estruturas de controle e repetição',
            'Reconhecer estruturas de dados (vetores, matrizes, pilha, fila)'
          ],
          conhecimentos: ['Abstração lógica', 'Álgebra booleana', 'Fluxogramas e organogramas', 'Tipos de dados, variáveis e constantes', 'Expressões lógicas e aritméticas', 'Pseudocódigo', 'Estruturas de controle', 'Estruturas de dados', 'Algoritmos de ordenação e busca', 'Modularização e recursividade'],
          socioemocionais: ['Raciocínio lógico', 'Resolução de problemas', 'Persistência'],
          ambientes: ['Laboratório de informática', 'Sala de aula'],
          equipamentos: ['Computadores', 'Ferramentas de algoritmos (Visualg, Flowgorithm)', 'Projetor']
        }
      ]
    },
    {
      id: 'MII',
      nome: 'Módulo Integrador Introdutório (2º Ano)',
      ch: 160,
      ucs: [
        {
          id: 'MII_UC1', codigo: 'MII_UC1',
          nome: 'Fundamentos de UI / UX', ch: 40,
          objetivo: 'Desenvolver as capacidades básicas e as socioemocionais requeridas para compreender os princípios de design, considerando a experiência do usuário no desenvolvimento de interfaces.',
          capacidades: [
            'Reconhecer formas geométricas para produção de interfaces',
            'Empregar técnicas de processos de criação na concepção de interfaces e experiência do usuário',
            'Identificar princípios básicos e contexto histórico de Design',
            'Identificar conceito de direito autoral no processo de criação de produtos gráficos'
          ],
          conhecimentos: ['Princípios de design', 'Direito autoral', 'Estratégias de coleta de informações', 'User Experience (UX)', 'User Interface (UI)', 'Prototipagem', 'Resolução de Problemas e Análise de Cenários'],
          socioemocionais: ['Criatividade', 'Empatia', 'Trabalho em equipe'],
          ambientes: ['Laboratório de informática', 'Sala de aula'],
          equipamentos: ['Computadores', 'Figma', 'Adobe XD', 'Projetor']
        },
        {
          id: 'MII_UC2', codigo: 'MII_UC2',
          nome: 'Lógica de Programação', ch: 80,
          objetivo: 'Propiciar o desenvolvimento de capacidades básicas e socioemocionais relativas à lógica de programação que subsidiarão o desenvolvimento das capacidades técnicas da ocupação.',
          capacidades: [
            'Aplicar técnicas de programação na elaboração de algoritmos inerentes aos sistemas de TI',
            'Aplicar linguagens de programação para elaborar programas e sistemas de TI',
            'Reconhecer os paradigmas de programação de computadores',
            'Aplicar estruturas de dados na resolução de problemas computacionais'
          ],
          conhecimentos: ['Abstração lógica', 'Álgebra booleana', 'Fluxogramas', 'Tipos de dados, variáveis e constantes', 'Expressões lógicas e aritméticas', 'Pseudocódigo', 'Padrões de nomenclatura e convenções', 'Recursividade', 'Estruturas de dados (vetores, matrizes, pilha, fila)', 'Algoritmos de ordenação e busca', 'Modularização e indentação'],
          socioemocionais: ['Raciocínio lógico', 'Persistência', 'Resolução de problemas', 'Autogestão'],
          ambientes: ['Laboratório de informática'],
          equipamentos: ['Computadores', 'IDEs (VSCode, PyCharm)', 'Python ou JavaScript', 'Projetor']
        },
        {
          id: 'MII_UC3', codigo: 'MII_UC3',
          nome: 'Versionamento e Colaboração', ch: 20,
          objetivo: 'Desenvolver as capacidades básicas e socioemocionais requeridas para utilizar ferramentas de versionamento e colaboração em projetos de software.',
          capacidades: [
            'Desenvolver visão sistêmica de projetos de software',
            'Aplicar ferramentas de controle de versão (Git)',
            'Colaborar em projetos usando plataformas de repositório remoto',
            'Empregar boas práticas de documentação de código'
          ],
          conhecimentos: ['Controle de versão com Git', 'GitHub e GitLab', 'Branches e merge', 'Pull requests e code review', 'Documentação de projetos', 'Markdown'],
          socioemocionais: ['Trabalho em equipe', 'Comunicação', 'Responsabilidade'],
          ambientes: ['Laboratório de informática'],
          equipamentos: ['Computadores', 'Git', 'GitHub', 'VSCode', 'Projetor']
        },
        {
          id: 'MII_UC4', codigo: 'MII_UC4',
          nome: 'Metodologias de Desenvolvimento de Projetos', ch: 20,
          objetivo: 'Propiciar o desenvolvimento de capacidades básicas e socioemocionais para aplicação de metodologias ágeis no desenvolvimento de projetos de software.',
          capacidades: [
            'Reconhecer metodologias ágeis de desenvolvimento de software',
            'Aplicar Scrum e Kanban no gerenciamento de projetos',
            'Elaborar e gerenciar backlog de produto',
            'Planejar sprints e acompanhar entregas'
          ],
          conhecimentos: ['Metodologias ágeis (Scrum, Kanban, XP)', 'Product Backlog', 'Sprint Planning', 'Daily Scrum', 'Revisão e Retrospectiva', 'Ferramentas de gestão (Trello, Jira)'],
          socioemocionais: ['Trabalho em equipe', 'Comunicação', 'Adaptabilidade', 'Liderança'],
          ambientes: ['Laboratório de informática', 'Sala de aula'],
          equipamentos: ['Computadores', 'Trello ou Jira', 'Projetor', 'Quadro branco']
        }
      ]
    },
    {
      id: 'MEI',
      nome: 'Módulo Específico I — Front-End (3º Ano)',
      ch: 260,
      ucs: [
        {
          id: 'MEI_UC1', codigo: 'MEI_UC1',
          nome: 'Codificação para Front-End', ch: 80,
          objetivo: 'Propiciar desenvolvimento de capacidades básicas e socioemocionais para codificação de interfaces baseadas em UX e UI em aplicações web, considerando as necessidades do usuário.',
          capacidades: [
            'Reconhecer as técnicas de levantamento de requisitos',
            'Reconhecer os padrões atuais para a implementação da interface',
            'Reconhecer os princípios de usabilidade para a produção de interfaces',
            'Reconhecer os princípios de design de interação e experiência do usuário (UI e UX) na produção de interfaces',
            'Utilizar técnicas de interação e codificação, considerando particularidades e funcionalidades da linguagem',
            'Utilizar linguagem para manipulação e validação de dados na interface',
            'Reconhecer boas práticas de programação para melhoria do código',
            'Correlacionar o levantamento de requisitos com a arquitetura da informação',
            'Reconhecer as técnicas de testes',
            'Reconhecer normas e procedimentos de testes'
          ],
          conhecimentos: ['Linguagem de marcação (HTML5)', 'Folha de Estilos (CSS3)', 'Frameworks CSS (Bootstrap, Tailwind)', 'Linguagens de programação (JavaScript)', 'Estrutura organizacional de projetos', 'Prototipagem e Cases de protótipos', 'Responsividade e acessibilidade'],
          socioemocionais: ['Criatividade', 'Atenção a detalhes', 'Autogestão', 'Disciplina'],
          ambientes: ['Laboratório de informática'],
          equipamentos: ['Computadores', 'VSCode', 'Navegadores web', 'Ferramentas de DevTools', 'Figma']
        },
        {
          id: 'MEI_UC2', codigo: 'MEI_UC2',
          nome: 'Interação com APIs', ch: 40,
          objetivo: 'Propiciar o desenvolvimento de capacidades básicas e socioemocionais que permitam desenvolver aplicações que consumam serviços do servidor exibindo-os na aplicação Front-End.',
          capacidades: [
            'Reconhecer os serviços disponíveis no servidor',
            'Aplicar boas práticas relativas à segurança da informação',
            'Reconhecer as necessidades de utilização dos serviços do servidor',
            'Aplicar tratamento de falhas nas mensagens do servidor',
            'Reconhecer as especificações dos serviços disponíveis no servidor'
          ],
          conhecimentos: ['Serviços server-side', 'Documentação de APIs', 'Operações CRUD', 'Tratamento de mensagens do server-side', 'Segurança da informação', 'Fetch API e Axios', 'JSON e XML', 'Autogestão e Disciplina'],
          socioemocionais: ['Autogestão', 'Disciplina', 'Resolução de problemas'],
          ambientes: ['Laboratório de informática'],
          equipamentos: ['Computadores', 'VSCode', 'Postman', 'Navegadores web']
        },
        {
          id: 'MEI_UC3', codigo: 'MEI_UC3',
          nome: 'Testes de Front-End', ch: 40,
          objetivo: 'Propiciar desenvolvimento de capacidades básicas e socioemocionais para codificação de interfaces baseadas em UX e UI em aplicações web, considerando as necessidades do usuário.',
          capacidades: [
            'Reconhecer as especificações técnicas da interface',
            'Reconhecer os requisitos da documentação de testes',
            'Reconhecer as etapas de planejamento de testes',
            'Aplicar testes definidos no Plano de Testes',
            'Desenvolver conjunto de testes automatizados'
          ],
          conhecimentos: ['Processo fundamental de teste', 'Planejamento de testes client-side', 'Conceitos fundamentais de testes', 'Tipos de testes (unitário, integração, E2E)', 'Técnicas de testes', 'Automação de Testes (Jest, Cypress)', 'Autogestão e Responsabilidade'],
          socioemocionais: ['Atenção a detalhes', 'Responsabilidade', 'Autogestão'],
          ambientes: ['Laboratório de informática'],
          equipamentos: ['Computadores', 'VSCode', 'Jest', 'Cypress', 'Navegadores web']
        },
        {
          id: 'MEI_UC4', codigo: 'MEI_UC4',
          nome: 'Projeto de Front-End', ch: 100,
          objetivo: 'Propiciar o desenvolvimento de capacidades técnicas e socioemocionais para o desenvolvimento de projetos de Front-End.',
          capacidades: [
            'Definir tipo de protótipo de interface para web',
            'Prototipar a interface para web',
            'Aplicar padrões de UX no projeto da interface para web',
            'Aplicar padrões de UI no projeto de interface para web',
            'Aplicar técnicas de levantamento de requisitos',
            'Considerar necessidades para a aplicação em nuvem',
            'Aplicar técnicas de levantamento de demandas do cliente',
            'Definir procedimento de modelagem',
            'Aplicar procedimento de modelagem'
          ],
          conhecimentos: ['Prototipagem de interfaces', 'Padrões de UX/UI', 'Levantamento de requisitos', 'Modelagem de projetos web', 'Deploy em nuvem', 'Frameworks JavaScript (React, Vue)', 'Gestão de projetos ágeis'],
          socioemocionais: ['Criatividade', 'Trabalho em equipe', 'Liderança', 'Comunicação', 'Gestão do tempo'],
          ambientes: ['Laboratório de informática'],
          equipamentos: ['Computadores', 'VSCode', 'Figma', 'GitHub', 'Vercel/Netlify', 'Navegadores web']
        }
      ]
    },
    {
      id: 'MEII',
      nome: 'Módulo Específico II — Back-End (3º Ano)',
      ch: 340,
      ucs: [
        {
          id: 'MEII_UC1', codigo: 'MEII_UC1',
          nome: 'Codificação para Back-End', ch: 80,
          objetivo: 'Propiciar desenvolvimento de capacidades básicas e socioemocionais para codificação de sistemas web server-side, considerando as necessidades do usuário.',
          capacidades: [
            'Reconhecer as linguagens de programação dedicadas ao Server-side',
            'Aplicar técnicas e métodos de desenvolvimento conforme a linguagem de programação empregada',
            'Reconhecer processos de depuração e tratamento de erros',
            'Gerenciar o versionamento dos sistemas',
            'Reconhecer as metodologias de desenvolvimento de software',
            'Aplicar metodologia ágil no desenvolvimento de sistema web',
            'Reconhecer os diferentes tipos e formatos de dados e arquivo',
            'Aplicar técnicas de conversão e manipulação de dados e arquivos',
            'Aplicar técnicas para segurança da informação',
            'Reconhecer as etapas do processo de implantação do sistema web',
            'Aplicar, no servidor, as configurações requeridas pelo sistema web',
            'Configurar políticas de segurança no servidor',
            'Aplicar procedimentos técnicos para documentação da implantação',
            'Aplicar procedimentos técnicos para instalação, migração e atualização do sistema web',
            'Aplicar procedimentos de validação do sistema web'
          ],
          conhecimentos: ['Linguagens server-side (Node.js, Python, PHP, Java)', 'Frameworks Back-End (Express, Django, Laravel)', 'Segurança da informação', 'Validação e implantação de sistemas web', 'Estrutura organizacional e relações com o mercado', 'Metodologias ágeis', 'Versionamento com Git'],
          socioemocionais: ['Disciplina', 'Atenção a detalhes', 'Raciocínio lógico', 'Autogestão'],
          ambientes: ['Laboratório de informática'],
          equipamentos: ['Computadores', 'VSCode', 'Node.js', 'Python', 'Git', 'Postman', 'Projetor']
        },
        {
          id: 'MEII_UC2', codigo: 'MEII_UC2',
          nome: 'Desenvolvimento de APIs', ch: 40,
          objetivo: 'Propiciar o desenvolvimento de capacidades técnicas e socioemocionais requeridas para o desenvolvimento de sistemas em arquitetura de serviços com aplicação de boas práticas de programação.',
          capacidades: [
            'Identificar, no escopo do projeto, a necessidade do uso de APIs',
            'Reconhecer as funcionalidades requeridas da linguagem de programação a ser empregada',
            'Aplicar linguagem de programação específica para desenvolvimento de APIs',
            'Aplicar técnicas e métodos de desenvolvimento de APIs',
            'Empregar frameworks para desenvolvimento de APIs',
            'Reconhecer métricas para garantir a integridade da informação',
            'Implementar regras de segurança para armazenamento, consulta e proteção da informação'
          ],
          conhecimentos: ['Interface de Programação de Aplicativos (API)', 'Formatos de API (REST, GraphQL)', 'Protocolo de comunicação HTTP', 'Metodologias ágeis para desenvolvimento de APIs', 'Pilares da Segurança da informação', 'Métodos de requisição HTTP (GET, POST, PUT, DELETE)', 'Padrão MVC', 'Frameworks (Express, FastAPI, Spring Boot)', 'Tratamento de exceções', 'Autogestão e Concentração'],
          socioemocionais: ['Autogestão', 'Concentração', 'Resolução de problemas'],
          ambientes: ['Laboratório de informática'],
          equipamentos: ['Computadores', 'VSCode', 'Postman', 'Node.js ou Python', 'Git']
        },
        {
          id: 'MEII_UC3', codigo: 'MEII_UC3',
          nome: 'Banco de Dados', ch: 80,
          objetivo: 'Propiciar o desenvolvimento de capacidades básicas e socioemocionais que permitem realizar a interação entre a aplicação Back-End e um banco de dados, de acordo com a metodologia e padrão de qualidade, usabilidade, ergonomia, acessibilidade e segurança.',
          capacidades: [
            'Reconhecer as demandas do cliente',
            'Aplicar os procedimentos do modelo de modelagem entidade-relacionamento',
            'Aplicar os procedimentos de normalização e padronização de dados',
            'Reconhecer as características e funcionalidades do banco de dados',
            'Correlacionar as características e funcionalidades do banco de dados com a infraestrutura do sistema',
            'Reconhecer os diferentes níveis de gerenciamento de dados',
            'Aplicar linguagem de definição de dados (DDL)',
            'Aplicar linguagem de manipulação de dados (DML)',
            'Reconhecer os diferentes gerenciadores de bancos de dados',
            'Instalar e configurar gerenciadores de bancos de dados',
            'Reconhecer os pilares da segurança da informação',
            'Aplicar boas práticas de segurança da informação'
          ],
          conhecimentos: ['Documentação técnica', 'Modelo entidade-relacionamento (MER)', 'Banco de dados relacional e não-relacional', 'Linguagem SQL (DDL, DML, DCL)', 'Normalização de dados', 'SGBDs (MySQL, PostgreSQL, MongoDB)', 'Segurança da informação em bancos de dados', 'Autogestão e Gestão do tempo'],
          socioemocionais: ['Atenção a detalhes', 'Organização', 'Gestão do tempo'],
          ambientes: ['Laboratório de informática'],
          equipamentos: ['Computadores', 'MySQL', 'PostgreSQL', 'MongoDB', 'VSCode', 'DBeaver']
        },
        {
          id: 'MEII_UC4', codigo: 'MEII_UC4',
          nome: 'Testes de Back-End', ch: 40,
          objetivo: 'Propiciar o desenvolvimento de capacidades básicas e socioemocionais para execução de testes de sistemas web server-side, considerando as necessidades do usuário.',
          capacidades: [
            'Empregar ferramenta de documentação de teste para registro do resultado obtido',
            'Identificar problemas de sistemas por meio de aplicação de teste',
            'Organizar o ambiente para o desenvolvimento das rotinas de testes',
            'Definir roteiro de teste para execução conforme recomendações técnicas',
            'Reconhecer normas, métodos e técnicas de testes para correção de falhas de sistema',
            'Analisar documentação de teste para planejamento da rotina',
            'Identificar tipos, função, ferramentas e plano de teste'
          ],
          conhecimentos: ['Processo de teste de software', 'Tipos de testes (unitário, integração, carga, stress)', 'Ferramentas de testes Back-End (Jest, Mocha, Pytest)', 'Documentação de testes', 'TDD (Test Driven Development)', 'Plano de testes', 'Automação de testes'],
          socioemocionais: ['Atenção a detalhes', 'Responsabilidade', 'Organização'],
          ambientes: ['Laboratório de informática'],
          equipamentos: ['Computadores', 'VSCode', 'Jest ou Pytest', 'Postman', 'Git']
        },
        {
          id: 'MEII_UC5', codigo: 'MEII_UC5',
          nome: 'Projeto de Back-End', ch: 100,
          objetivo: 'Propiciar o desenvolvimento de capacidades técnicas e socioemocionais para o desenvolvimento de projetos de Back-End.',
          capacidades: [
            'Instalar e configurar banco de dados',
            'Aplicar técnicas de segurança e tratamento de dados',
            'Aplicar técnicas de normalização e padronização de dados',
            'Seguir recomendações técnicas na aplicação da linguagem de definição e manipulação de dados',
            'Aplicar técnicas de versionamento de software',
            'Aplicar técnicas de modelagem de dados',
            'Aplicar técnicas de levantamento de requisitos de armazenamento de dados',
            'Determinar técnicas de manipulação de dados requeridas pelo projeto',
            'Determinar o tipo do banco de dados empregado',
            'Aplicar técnicas de levantamento de requisitos',
            'Aplicar técnicas de levantamento de demandas do cliente',
            'Aplicar princípios de metodologias ágeis para desenvolvimento de projetos',
            'Seguir recomendações técnicas na aplicação da linguagem de programação',
            'Aplicar técnicas de versionamento de software',
            'Seguir recomendações técnicas na aplicação de frameworks',
            'Elaborar plano de testes de sistemas para web',
            'Executar testes de acordo com o plano proposto',
            'Aplicar boas práticas na execução dos testes'
          ],
          conhecimentos: ['Modelagem de dados', 'Desenvolvimento Full-Stack (integração Front + Back)', 'Deploy em nuvem (AWS, GCP, Azure, Heroku)', 'Containers (Docker)', 'CI/CD', 'Documentação de APIs (Swagger)', 'Metodologias ágeis aplicadas a projetos', 'Gestão de repositório e versionamento'],
          socioemocionais: ['Trabalho em equipe', 'Liderança', 'Comunicação', 'Gestão do tempo', 'Criatividade'],
          ambientes: ['Laboratório de informática'],
          equipamentos: ['Computadores', 'VSCode', 'GitHub', 'Docker', 'Node.js', 'Python', 'MySQL ou PostgreSQL', 'Postman']
        }
      ]
    }
  ]
};

if (typeof window !== 'undefined') { window.INFORMATICA_NEM = INFORMATICA_NEM; }
if (typeof module !== 'undefined') { module.exports = { INFORMATICA_NEM }; }
