export const CONTACT = {
  phoneDisplay: '+55 81 99341-8470',
  whatsapp: 'https://wa.me/5581993418470',
  whatsappWithMessage: (msg: string) =>
    `https://wa.me/5581993418470?text=${encodeURIComponent(msg)}`,
  email: 'contato@artcodedigital.com',
  linkedin: 'https://www.linkedin.com/company/artcodesolutions/',
  city: 'Recife, PE — atendimento em todo o Brasil',
};

export const NAV = [
  { label: 'Serviços', href: '#servicos' },
  { label: 'Processo', href: '#processo' },
  { label: 'Trabalhos', href: '#trabalhos' },
  { label: 'Depoimentos', href: '#depoimentos' },
  { label: 'FAQ', href: '#faq' },
];

export const TECH_STACK = [
  'React',
  'Next.js',
  'TypeScript',
  'Node.js',
  'React Native',
  'Python',
  'FastAPI',
  'PostgreSQL',
  'MongoDB',
  'Redis',
  'Docker',
  'AWS',
  'Vercel',
  'Stripe',
  'OpenAI',
  'Anthropic',
  'Tailwind',
  'Figma',
];

export type Service = {
  id: string;
  title: string;
  description: string;
  bullets: string[];
  icon: 'globe' | 'smartphone' | 'layers' | 'sparkles' | 'pen' | 'cloud';
  span?: 'wide' | 'tall';
};

export const SERVICES: Service[] = [
  {
    id: 'sites',
    title: 'Sites & Landing Pages',
    description:
      'Sites institucionais, landing pages e e-commerces que carregam rápido, ranqueiam bem e convertem visitantes em clientes.',
    bullets: ['SEO técnico', 'Performance 90+', 'CMS editável'],
    icon: 'globe',
    span: 'wide',
  },
  {
    id: 'apps',
    title: 'Aplicativos iOS & Android',
    description:
      'Apps nativos e multiplataforma publicados nas lojas, com notificações, pagamentos e analytics.',
    bullets: ['React Native', 'Publicação nas lojas', 'Push & pagamentos'],
    icon: 'smartphone',
  },
  {
    id: 'sistemas',
    title: 'Sistemas sob medida',
    description:
      'ERPs, CRMs, painéis administrativos e plataformas SaaS desenhados em torno do processo do seu negócio.',
    bullets: ['Dashboards', 'Automação de rotinas', 'Integrações e APIs'],
    icon: 'layers',
    span: 'tall',
  },
  {
    id: 'ia',
    title: 'Integração com IA',
    description:
      'Assistentes, chatbots, classificação de documentos e automações com LLMs conectados aos seus dados.',
    bullets: ['Chatbots & agentes', 'RAG com seus dados', 'Automação de atendimento'],
    icon: 'sparkles',
    span: 'wide',
  },
  {
    id: 'design',
    title: 'UX/UI Design',
    description:
      'Pesquisa, protótipos navegáveis e design systems que deixam o produto bonito e fácil de usar.',
    bullets: ['Protótipos no Figma', 'Design system', 'Testes de usabilidade'],
    icon: 'pen',
  },
  {
    id: 'cloud',
    title: 'Cloud & DevOps',
    description:
      'Infraestrutura escalável, CI/CD, monitoramento e segurança para o seu produto rodar sem sustos.',
    bullets: ['AWS / GCP', 'CI/CD & Docker', 'Monitoramento 24/7'],
    icon: 'cloud',
  },
];

export const PROCESS = [
  {
    step: '01',
    title: 'Descoberta',
    description:
      'Entendemos o problema, o público e as metas. Saímos com escopo, prioridades e um plano claro.',
    duration: '1 semana',
  },
  {
    step: '02',
    title: 'Design',
    description:
      'Wireframes e protótipos navegáveis validados com você antes de escrever uma linha de código.',
    duration: '1–2 semanas',
  },
  {
    step: '03',
    title: 'Desenvolvimento',
    description:
      'Sprints curtos com entregas semanais em ambiente de homologação. Você acompanha tudo evoluindo.',
    duration: '3–8 semanas',
  },
  {
    step: '04',
    title: 'Lançamento',
    description:
      'Deploy, testes finais, publicação nas lojas e monitoramento. Nada vai ao ar sem checklist.',
    duration: '1 semana',
  },
  {
    step: '05',
    title: 'Evolução',
    description:
      'Suporte, métricas e novas funcionalidades. Produto bom é produto que continua melhorando.',
    duration: 'contínuo',
  },
];

export type Project = {
  id: string;
  name: string;
  category: 'Site' | 'App' | 'Sistema' | 'IA';
  segment: string;
  summary: string;
  result: string;
  stack: string[];
  hue: number; // accent hue for the mock preview
  mock: 'browser' | 'phone' | 'dashboard';
};

export const PROJECTS: Project[] = [
  {
    id: 'clinica',
    name: 'Agenda+ Clínicas',
    category: 'Sistema',
    segment: 'Saúde',
    summary:
      'Plataforma de agendamento online, prontuário e lembretes automáticos por WhatsApp para rede de clínicas.',
    result: '-38% de faltas em consultas',
    stack: ['Next.js', 'Node.js', 'PostgreSQL', 'WhatsApp API'],
    hue: 258,
    mock: 'dashboard',
  },
  {
    id: 'delivery',
    name: 'Rota Delivery',
    category: 'App',
    segment: 'Food service',
    summary:
      'App iOS/Android para pedidos, com rastreamento em tempo real, cupons e painel para o restaurante.',
    result: '12k pedidos no 1º trimestre',
    stack: ['React Native', 'Firebase', 'Stripe'],
    hue: 164,
    mock: 'phone',
  },
  {
    id: 'ecommerce',
    name: 'Atelier Moda',
    category: 'Site',
    segment: 'Varejo',
    summary:
      'E-commerce headless com checkout otimizado, integração com ERP e busca inteligente por catálogo.',
    result: '+64% de conversão no checkout',
    stack: ['Next.js', 'Shopify', 'Algolia'],
    hue: 330,
    mock: 'browser',
  },
  {
    id: 'atendimento',
    name: 'Assistente Nexo',
    category: 'IA',
    segment: 'Serviços financeiros',
    summary:
      'Agente de IA que responde dúvidas de clientes usando a base de conhecimento interna, com handoff humano.',
    result: '71% dos tickets resolvidos sem humano',
    stack: ['Python', 'FastAPI', 'RAG', 'Claude'],
    hue: 200,
    mock: 'dashboard',
  },
  {
    id: 'erp',
    name: 'Fluxo Distribuidora',
    category: 'Sistema',
    segment: 'Logística',
    summary:
      'ERP sob medida para controle de estoque, rotas de entrega e faturamento integrado com NF-e.',
    result: '3 sistemas substituídos por 1',
    stack: ['React', 'NestJS', 'PostgreSQL', 'Docker'],
    hue: 36,
    mock: 'dashboard',
  },
  {
    id: 'academia',
    name: 'Pulse Fitness',
    category: 'App',
    segment: 'Fitness',
    summary:
      'App de treinos com check-in por QR code, planos, evolução do aluno e área do professor.',
    result: '4.8★ nas lojas',
    stack: ['React Native', 'Supabase'],
    hue: 290,
    mock: 'phone',
  },
];

export const STATS = [
  { value: 60, suffix: '+', label: 'Projetos entregues' },
  { value: 5, suffix: '+', label: 'Anos de mercado' },
  { value: 40, suffix: '+', label: 'Clientes ativos' },
  { value: 98, suffix: '%', label: 'Satisfação dos clientes' },
];

export const TESTIMONIALS = [
  {
    quote:
      'A ArtCode entendeu nosso processo melhor que a gente. O sistema substituiu três planilhas e um software antigo, e a equipe adotou no primeiro dia.',
    name: 'Mariana Lopes',
    role: 'Diretora de operações, distribuidora de alimentos',
  },
  {
    quote:
      'Lançamos o app em 9 semanas, dentro do orçamento. O que mais me impressionou foi a comunicação: sabíamos exatamente em que pé estava toda semana.',
    name: 'Rafael Menezes',
    role: 'Fundador, startup de delivery',
  },
  {
    quote:
      'O assistente de IA reduziu nossa fila de atendimento pela metade. E o time explicou tudo em português claro, sem jargão.',
    name: 'Camila Andrade',
    role: 'Gerente de CX, fintech',
  },
  {
    quote:
      'Nosso site antigo demorava 8 segundos para abrir. O novo carrega instantâneo, e as vendas pelo checkout subiram no primeiro mês.',
    name: 'Eduardo Farias',
    role: 'CEO, e-commerce de moda',
  },
];

export const FAQ = [
  {
    q: 'Quanto custa desenvolver um site, app ou sistema?',
    a: 'Depende do escopo. Landing pages começam em faixas mais acessíveis; apps e sistemas sob medida são orçados após a etapa de descoberta, quando definimos funcionalidades e prioridades juntos. Você recebe uma proposta fechada, sem surpresas.',
  },
  {
    q: 'Quanto tempo leva um projeto?',
    a: 'Sites e landing pages: de 2 a 4 semanas. Apps e sistemas: de 6 a 12 semanas em média, com entregas semanais em ambiente de homologação para você acompanhar tudo evoluindo.',
  },
  {
    q: 'Vocês fazem manutenção e suporte depois do lançamento?',
    a: 'Sim. Oferecemos planos de suporte e evolução contínua: correções, monitoramento, atualizações de segurança e novas funcionalidades por demanda.',
  },
  {
    q: 'O código-fonte é meu?',
    a: 'Sim. Todo o código, design e infraestrutura são de propriedade do cliente. Entregamos repositório, documentação e acessos.',
  },
  {
    q: 'Como funciona a integração com Inteligência Artificial?',
    a: 'Conectamos modelos de linguagem (como Claude e GPT) aos dados e sistemas da sua empresa para automatizar atendimento, classificar documentos, gerar relatórios e muito mais — sempre com controle sobre custos e privacidade.',
  },
  {
    q: 'Atendem empresas fora de Recife?',
    a: 'Sim. Trabalhamos de forma remota com clientes em todo o Brasil, com reuniões online e acompanhamento contínuo.',
  },
];
