/**
 * Portfolio project detail data (aligned with public/docs/*.md).
 * Image paths reference files in /public — Vite serves them at site root.
 */

export const portfolioProjects = [
  {
    slug: 'clarispec',
    name: 'ClariSpec — AI-powered requirements platform',
    detailTitle: 'Clarispec — AI-assisted requirements gathering and spec documents',
    detailTagline:
      'Turn structured discovery conversations into versioned Markdown specs (BRD, SRS, user stories, architecture, and more), with exports and a separate operator admin surface.',
    description:
      'Helps teams move from vague ideas to clear, structured requirements. LLM-driven spec generation with diff editing, export, and multi-project support—so rough concepts become consistent, shareable specifications faster.',
    tech: 'Next.js · TypeScript · Tailwind · Supabase · Google AI · Groq',
    detailTech:
      'Next.js 16 (App Router) · React 19 · TypeScript · Tailwind CSS · Supabase (auth + data) · Groq + Google Gemini · Recharts / Framer Motion',
    heroImage: {
      src: '/clarispec_img/Screenshot 2026-03-30 001828.png',
      alt: 'ClariSpec gather chat — questions, suggestions, and requirement coverage',
    },
    gallery: [
      {
        src: '/clarispec_img/Screenshot 2026-03-30 001828.png',
        alt: 'Gather chat with AI-guided questions and progress',
      },
      {
        src: '/clarispec_img/Screenshot 2026-03-30 001959.png',
        alt: 'Requirements conversation and category coverage',
      },
      {
        src: '/clarispec_img/Screenshot 2026-03-30 002028.png',
        alt: 'Document workspace — Markdown spec and tooling',
      },
      {
        src: '/clarispec_img/Screenshot 2026-03-30 002114.png',
        alt: 'Dashboard or project overview',
      },
    ],
    links: [{ label: 'Live demo', href: 'https://clarispec.vercel.app/login' }],
    sections: [
      {
        title: 'Overview / problem',
        paragraphs: [
          'Early product work often lives in scattered notes and ad hoc chats, so scope, stakeholders, and acceptance criteria stay fuzzy until late.',
          'ClariSpec is for teams that need repeatable requirements capture and shareable specification artifacts—projects, briefs, requirement areas, and generated documents.',
          'Users sign up with Supabase, create projects with an initial brief and depth (quick / standard / deep), run an AI-guided gather chat that tracks requirement coverage and score, then select document types and generate Markdown specs. They can view, manually edit, AI-edit with inline diff, and export PDF or Markdown.',
        ],
      },
      {
        title: 'Tech stack & architecture',
        paragraphs: [
          'Frontend: Next.js App Router with route groups for auth, dashboard, and admin; React 19, Tailwind, Framer Motion, Lucide, Recharts, react-markdown + remark-gfm.',
          'Edge routing via proxy.ts records performance events, enforces an admin cookie gate for /admin, and delegates to Supabase middleware for chunked auth cookies (getAll / setAll).',
          'API routes under app/api for projects, AI, perf events, and admin—many wrapped with runTimedApiRoute for server-side latency logging. Supabase powers browser and server clients plus a service role for admin and perf inserts.',
          'AI uses Groq as primary when configured, Gemini as fallback and on Groq 429 for shared generateText paths; edit-document uses Groq only. Document generation sequences selected types with spacing for rate limits. PDF export uses jspdf + html2canvas; inline diff uses diff. Security headers (CSP, HSTS, and more) are set in next.config.mjs.',
        ],
      },
      {
        title: 'Features',
        bullets: [
          'Account & session: login/signup; guests redirect to login; signed-in users at / go to /dashboard.',
          'Projects: list, create, overview with brief, requirement areas, and progress toward depth.',
          'Gather chat: messages via API, brief analysis, question flow with suggestions, category coverage, and completion when the model signals done.',
          'Document generation: BRD, SRS, user stories, architecture, workflow, MVP scope, and more—persisted documents and project status updates.',
          'Document workspace: listing, AI edit bar, inline diff with accept/reject, export Markdown and PDF.',
          'Dashboard: stats and project cards; admin surface for operators (users, projects, documents, messages, selections).',
        ],
      },
      {
        title: 'Challenges & solutions',
        bullets: [
          'Reliable auth across SSR, API routes, and large cookies via Supabase SSR cookie adapters.',
          'AI cost and limits: per-user and per-IP rate limits, sequential document generation with delays, Groq → Gemini fallback on 429 where applicable.',
          'Trusting model output: validation helpers, retries on parse failure, size caps, and prompt redaction for common secret patterns.',
          'Safe AI edits: line-based diff so users accept or reject before committing.',
          'Performance visibility: perf_events pipeline across edge, server API, and client Web Vitals.',
        ],
      },
      {
        title: 'Performance, security & testing',
        paragraphs: [
          'Instrumented for edge proxy duration, server route duration, client Web Vitals, and same-origin API fetch timings—batched to /api/perf/events. Logging is configurable via PERF_LOG; persistence uses the service role where enabled.',
          'Security: same-origin checks where relevant, CSP and related headers, server-only secrets, end-user vs admin separation (session vs signed admin cookie), and optional Redis-backed rate limiting with in-memory fallback.',
          'Quality today: ESLint in the product repo; manual validation—automated tests are a possible next step.',
        ],
      },
      {
        title: 'Deployment',
        paragraphs: [
          'Typical deployment: Next.js on Vercel with Supabase for auth and data. Environment variables include Supabase URL/keys, Groq and Gemini keys, ADMIN_SESSION_SECRET, and optional perf and Redis settings.',
        ],
      },
      {
        title: 'Learnings',
        bullets: [
          'Splitting discovery from artifacts keeps UX clear while producing long-form specs.',
          'Provider abstraction with fallback reduces single-vendor 429 risk for chat and batch generation.',
          'Unified perf telemetry (edge + server + client) supports an evidence-based performance story.',
          'SSR auth cookie edge cases deserve first-class handling on production domains.',
        ],
      },
    ],
  },
  {
    slug: 'buildops',
    name: 'BuildOps — operations platform for construction SMBs',
    detailTitle: 'Buildops — construction business management (MVP)',
    detailTagline:
      'Plan and record money in and money out per project, with dashboards, PDF/Excel reports, and admin settings for users and branches — React + Vite client, Express API, Prisma + PostgreSQL in a monorepo.',
    description:
      'Unified visibility for multi-branch construction teams across projects, revenue, and expenses. Dashboards, reporting, exports, and role-based access in one place for day-to-day operations.',
    tech: 'React · Vite · Node.js · Express · Prisma · PostgreSQL',
    detailTech:
      'React 18 · Vite · Express · Prisma · PostgreSQL · JWT · Zustand · Tailwind · Recharts · Framer Motion · pdfkit · exceljs',
    heroImage: {
      src: '/Buildops_img/Screenshot 2026-03-30 002458.png',
      alt: 'BuildOps dashboard — aggregates and project visibility',
    },
    gallery: [
      {
        src: '/Buildops_img/Screenshot 2026-03-30 002458.png',
        alt: 'Dashboard overview with charts',
      },
      {
        src: '/Buildops_img/Screenshot 2026-03-30 002604.png',
        alt: 'Projects or financial summary view',
      },
      {
        src: '/Buildops_img/Screenshot 2026-03-30 002704.png',
        alt: 'Project detail — stages, labour, or materials',
      },
      {
        src: '/Buildops_img/Screenshot 2026-03-30 002729.png',
        alt: 'Reports or exports context',
      },
      {
        src: '/Buildops_img/Screenshot 2026-03-30 002821.png',
        alt: 'Settings, clients, or branch-scoped data',
      },
    ],
    links: [{ label: 'Live app', href: 'https://cbms-tawny.vercel.app/' }],
    sections: [
      {
        title: 'Overview / problem',
        paragraphs: [
          'Small and mid-sized construction teams often juggle spreadsheets and ad hoc notes for contracts, stage-wise collections, site costs, stock, and payables. That makes it hard to see per-project profitability, receivables, and payables—especially across multiple branches.',
          'BuildOps ties every project to a client and branch, then centralizes payment stages, labour, material movements, associate (subcontractor) payments, bills, and other expenses—with a dashboard and exportable PDF/Excel reports.',
        ],
      },
      {
        title: 'Tech stack & architecture',
        paragraphs: [
          'Monorepo: Vite SPA (React, React Router, Zustand, Axios, Tailwind) talking to an Express API with Prisma and PostgreSQL. JWT + bcrypt for auth; pdfkit and exceljs for exports; Recharts and Framer Motion on the client.',
          'JSON routes live under /api with a health check. Auth: login, /me, Bearer tokens on protected routes with role middleware. Branch scoping limits non–super-admins by branchId on projects and dashboard; clients are org-wide while projects carry branchId.',
          'Split hosting: CORS limited to CLIENT_URL; production API base via VITE_API_URL.',
        ],
      },
      {
        title: 'Features',
        bullets: [
          'Auth: login, session user, JWT on requests, 401 → logout on the client.',
          'Dashboard: aggregates scoped to branch (with admin branch filter where supported).',
          'Clients: CRUD with safeguards when projects exist.',
          'Projects: list/create/edit/detail with nested payment stages, labour, materials, associates, expenses, and summaries.',
          'Payment stages & receipts; labour lines; materials catalog and purchase/usage; associates; bills; other expenses.',
          'Reports: server-side PDF and Excel; settings for users and branches; in-app user guide routes.',
        ],
      },
      {
        title: 'Challenges & solutions',
        bullets: [
          'Multi-branch access via SUPER_ADMIN, BRANCH_MANAGER, and STAFF roles with branch id on the user.',
          'Readable money picture via dashboard tabs and exports for stakeholders.',
          'Split deploys: CORS and env naming for static front + API on different origins; cold starts on free tiers as a practical latency factor.',
        ],
      },
      {
        title: 'Performance, security & testing',
        paragraphs: [
          'Route-level lazy loading on the client; Vite dev proxy to the API in development.',
          'Security: bcrypt passwords, Bearer JWT, role checks, CORS to CLIENT_URL. Production must set a strong JWT_SECRET (no default).',
          'Testing: MVP focused on feature delivery and manual verification; automated tests are a documented gap and next step.',
        ],
      },
      {
        title: 'Deployment',
        paragraphs: [
          'Typical path: Supabase or managed PostgreSQL, API on Render (or similar) with Prisma generate + start, client on Vercel with SPA fallback. DATABASE_URL, JWT_SECRET, CLIENT_URL, NODE_ENV, and VITE_API_URL aligned across hosts.',
        ],
      },
      {
        title: 'Learnings',
        bullets: [
          'A single project hub with tabs maps to how site teams think about stages, labour, materials, subs, and bills.',
          'Branch on project (not on client) trades shared client list for branch-specific execution—worth explaining to stakeholders.',
          'Split deploys make env naming, CORS, and cold starts first-class concerns.',
        ],
      },
    ],
  },
  {
    slug: 'labcore',
    name: 'LabCore — LIMS for diagnostic & pathology labs',
    detailTitle: 'LabCore LIMS',
    detailTagline:
      'Affordable laboratory information management for small diagnostic and pathology labs — patient through order, sample, result, authorised report, and delivery, with a Next.js app and a typed NestJS API on PostgreSQL.',
    description:
      'End-to-end workflows for patient registration, test ordering, barcode tracking, and result delivery. RBAC, PDF reports with QR codes, and a pnpm monorepo—from intake through results with secure roles.',
    tech: 'Next.js · NestJS · Prisma · PostgreSQL · Supabase · Vercel',
    detailTech:
      'pnpm monorepo · Next.js 14 (App Router) · NestJS · Prisma · PostgreSQL · Tailwind · Recharts · Puppeteer PDF service · JWT · bcrypt',
    heroImage: {
      src: '/labcore_img/Screenshot 2026-03-30 041803.png',
      alt: 'LabCore operational dashboard — KPIs and lab workflow entry points',
    },
    gallery: [
      {
        src: '/labcore_img/Screenshot 2026-03-30 041803.png',
        alt: 'Dashboard KPIs and navigation',
      },
      {
        src: '/labcore_img/Screenshot 2026-03-30 041818.png',
        alt: 'Orders, samples, or patient workflow',
      },
      {
        src: '/labcore_img/Screenshot 2026-03-30 041952.png',
        alt: 'Results or reporting context',
      },
      {
        src: '/labcore_img/Screenshot 2026-03-30 042004.png',
        alt: 'Lab operations or authorisation UI',
      },
      {
        src: '/labcore_img/Screenshot 2026-03-30 042120.png',
        alt: 'Reports, PDF, or delivery-related view',
      },
    ],
    links: [{ label: 'Live demo', href: 'https://labcore-web.vercel.app/login' }],
    sections: [
      {
        title: 'Overview / problem',
        paragraphs: [
          'Small and mid-size labs often rely on paper, spreadsheets, or fragmented tools that do not scale with sample volume, regulatory expectations, or staff handoffs. Commercial LIMS products can be costly for lean teams.',
          'LabCore targets patient registration, orders, samples, results, reporting, and operational visibility—with hosting choices that keep MVP costs manageable (e.g. Vercel + Supabase free tiers) while staying maintainable in a small team (TypeScript end-to-end, shared types, clear package boundaries).',
        ],
      },
      {
        title: 'Tech stack & architecture',
        paragraphs: [
          'pnpm workspaces: web (Next.js App Router), API (NestJS), shared types, and a dedicated pdf-service using Puppeteer for HTML → PDF.',
          'PostgreSQL via Prisma; JWT access/refresh with bcrypt; browser calls a separate API (NEXT_PUBLIC_API_URL) so DB credentials never ship to the client.',
          'Product direction includes shared schema with lab_id and Row Level Security as a target model; API is the primary place for authZ with the database as defence in depth.',
        ],
      },
      {
        title: 'Features',
        bullets: [
          'Operational dashboard: KPIs, order status, workload tiles, revenue/trend charts, and navigation into workflows.',
          'End-to-end lab domain: patients, orders, samples, tests/results, reporting, and delivery-related metrics.',
          'Role-aware design with server-side guards and permission matrices—not UI-only checks.',
          'Centralised PDF generation in pdf-service; barcode/QR dependencies for labelling and verification.',
          'Audit log immutability via PostgreSQL trigger for production hardening; Prisma migrate, seeds, and Supabase-focused connection notes.',
        ],
      },
      {
        title: 'Challenges & solutions',
        bullets: [
          'Monorepo + shared contracts: packages/shared and one Prisma schema reduce drift between UI and API.',
          'Supabase networking: transaction vs session poolers, sslmode, and IPv4 called out in docs as first-class.',
          'Affordable hosting: standardised Vercel + Supabase split with clear env boundaries.',
          'PDF at scale: isolating Puppeteer keeps the core API lean and allows independent scaling of the PDF worker.',
        ],
      },
      {
        title: 'Performance, security & testing',
        paragraphs: [
          'Next.js for route-based UI; API separation for independent scaling and caching policies.',
          'JWT with refresh flow, bcrypt, RBAC at the API, audit trails, TLS for client and DB paths, secrets only on the server.',
          'CI on main/PRs: install, Prisma generate, lint, typecheck, and full monorepo build. Jest exists in the API package for expanding automated tests; manual validation supported by seeds and deployment checklists.',
        ],
      },
      {
        title: 'Deployment',
        paragraphs: [
          'Web on Vercel (or similar) with monorepo-aware build; API on a Node host with DATABASE_URL, DIRECT_URL, and JWT secrets; run prisma migrate deploy and optional seed; apply audit trigger migration in production as documented.',
        ],
      },
      {
        title: 'Learnings',
        bullets: [
          'Monorepo discipline: shared types and one schema beat ad-hoc API contracts when one person touches both sides.',
          'Environment parity scripts turn “works on my machine” into a repeatable story.',
          'Docs-driven delivery keeps MVP scope and compliance expectations explicit for small teams.',
        ],
      },
    ],
  },
];

export function getProjectBySlug(slug) {
  return portfolioProjects.find((p) => p.slug === slug);
}
