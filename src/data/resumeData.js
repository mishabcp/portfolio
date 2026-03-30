import { portfolioProjects } from './projects';

const skillCategories = [
  {
    name: 'Backend',
    skills: [
      'PHP',
      'Laravel',
      'CodeIgniter',
      'Node.js',
      'NestJS',
      'RESTful APIs',
      'API Integration',
      'Database Design',
      'Query Optimization',
    ],
  },
  {
    name: 'Frontend',
    skills: [
      'React',
      'Next.js',
      'TypeScript',
      'JavaScript',
      'jQuery',
      'Bootstrap',
      'Tailwind CSS',
      'Responsive Web Design',
    ],
  },
  {
    name: 'Databases',
    skills: ['MySQL', 'PostgreSQL', 'Prisma ORM', 'Supabase'],
  },
  {
    name: 'AI & Integrations',
    skills: [
      'Google Generative AI',
      'Groq (LLM)',
      'Puppeteer (PDF)',
      'WhatsApp API',
      'Third-party Payment APIs',
    ],
  },
  {
    name: 'Tools & Workflow',
    skills: [
      'Git',
      'Postman',
      'cPanel',
      'Vercel',
      'pnpm Monorepo',
      'System Deployment',
      'Performance Optimization',
    ],
  },
];

export const resumeData = {
  name: 'Mishab CP',
  title: 'Full Stack Developer',
  tagline:
    'Production-grade fintech and enterprise web apps — full stack from APIs and data layers to responsive frontends.',
  /** Hero-only lines (below main tagline) */
  heroSubline: '2+ years at Netplex IT Solutions, Dubai, UAE · Based in Kerala, India',
  heroTechLine: 'PHP · Laravel · CodeIgniter · React · MySQL · REST API integrations',
  /** Hero rotating emphasis (shown instead of heroTechLine when non-empty) */
  heroRotatingPhrases: [
    'Fintech & enterprise web platforms',
    'Laravel · React · REST APIs · MySQL',
    'Production performance, data layers, and integrations',
  ],
  location: 'Kerala, India',
  phone: ['+91 88486 59419'],
  email: 'mishabcp01@gmail.com',
  linkedin: 'https://linkedin.com/in/mishab-c-p',
  github: 'https://github.com/mishabcp',
  whatsapp: 'https://wa.me/919645719276',
  whatsappDisplay: '+91 96457 19276',
  portfolio: 'https://mishabcp.github.io/portfolio',
  resumePdf: '/resume.pdf',
  summary:
    'Full Stack Web Developer with 2+ years at Netplex IT Solutions, building production-grade fintech and enterprise web apps. Specialist in PHP (Laravel, CodeIgniter), React, MySQL, and REST API integrations — delivering scalable platforms from backend architecture to responsive frontends, with up to 80% performance gains through database optimization.',
  /** Second paragraph in About (personal projects & stack) */
  aboutContinuation:
    'Alongside client work, I build full-stack products with Next.js, NestJS, TypeScript, PostgreSQL, Prisma, and Supabase — including a diagnostic-lab LIMS (LabCore), construction operations tooling (BuildOps), and ClariSpec, an AI-assisted requirements platform using Google Generative AI and Groq for LLM-driven spec generation, diff editing, and exports.',
  aboutHeadline: 'Full Stack Web Developer',
  process: [
    {
      title: 'Discovery & architecture',
      desc: 'Align workflows with Laravel, CodeIgniter, React, or Node/NestJS; design REST APIs, MySQL/PostgreSQL data models, and integrations — payments, WhatsApp, PDFs, and third-party services.',
    },
    {
      title: 'Build across the stack',
      desc: 'Ship secure backends and responsive frontends: fintech flows, multi-department RBAC, reporting and exports, plus AI-assisted features (e.g. LLM-driven specs) when they fit the product.',
    },
    {
      title: 'Performance & launch',
      desc: 'Tune queries, indexing, and caching for real gains, then own deployment, database setup, and post-launch support through steady-state operations.',
    },
  ],
  services: [
    {
      title: 'Fintech & enterprise web apps',
      desc: 'Platforms for payments, recharges, billing, vouchers, and multi-department ERP-style workflows.',
    },
    {
      title: 'APIs & data layer',
      desc: 'RESTful APIs, third-party integrations, and MySQL/PostgreSQL design with a focus on reliability and speed.',
    },
    {
      title: 'Modern frontends',
      desc: 'React and Next.js experiences — responsive, consistent with your stack, and ready for production traffic.',
    },
    {
      title: 'AI & automation hooks',
      desc: 'Where it fits: LLM-assisted flows (Google AI, Groq), PDF output, and channels like WhatsApp.',
    },
  ],
  skillCategories,
  skills: skillCategories.flatMap((c) => c.skills),
  skillsSectionHeadline: 'What I do',
  skillsSectionIntro:
    'Full stack delivery from Laravel and Node APIs to React and Next.js frontends — databases, integrations, and production performance.',
  experience: {
    role: 'PHP Full Stack Developer',
    company: 'Netplex IT Solutions',
    location: 'Dubai, UAE',
    period: 'May 2024 — Present',
    points: [
      'Developed PlexPay fintech platform (CodeIgniter, MySQL) supporting mobile recharges, bill payments, and voucher services.',
      'Built ISL Laboratory Management ERP (Laravel) with role-based access across departments.',
      'Integrated third-party APIs and improved system performance by 80% via query optimization, indexing, and caching.',
      'Managed full deployment lifecycle: server configuration, database setup, and post-launch support.',
    ],
  },
  projects: portfolioProjects,
};
