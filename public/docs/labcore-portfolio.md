# LabCore — Portfolio page content

Use the sections below on your portfolio site. Copy or adapt tone to match your personal brand.

---

## [Hero]

**LabCore LIMS**  
Affordable laboratory information management for small diagnostic and pathology labs — built for real-world workflows, starting with a Kerala-first focus.

**One-liner:** Full-stack LIMS MVP: patient → order → sample → result → authorised report → delivery, with a modern web app and a typed NestJS API on PostgreSQL.

**Optional subline:** Monorepo · Next.js · NestJS · Prisma · Supabase-ready

---

## [Overview / Problem]

Small and mid-size labs often rely on paper, spreadsheets, or fragmented tools that do not scale with sample volume, regulatory expectations, or staff handoffs. Commercial LIMS products can be costly and heavy for lean teams.

**LabCore** targets that gap: a **focused LIMS** for **patient registration, orders, samples, results, reporting, and operational visibility**, with infrastructure choices that keep **hosting costs low** (e.g. Vercel + Supabase free tiers for MVP) while staying **maintainable in a small team** (TypeScript end-to-end, shared types, clear package boundaries).

The product direction in the repo emphasizes **affordable SaaS for Indian labs**, with documentation covering market fit, scope, security/compliance considerations, and deployment — so engineering decisions stay tied to business constraints, not only to technical preferences.

---

## [Tech Stack + Architecture]

### Stack (as implemented in the repo)

| Layer | Technology |
|--------|------------|
| **Monorepo** | pnpm workspaces (`packages/web`, `packages/api`, `packages/shared`, `packages/pdf-service`) |
| **Web** | Next.js 14 (App Router), React 18, TypeScript, Tailwind CSS |
| **UI / data viz** | Recharts (dashboard trends), Lucide icons, TipTap (rich text where used) |
| **API** | NestJS (Node 20+) |
| **Data** | PostgreSQL via **Prisma**; schema and migrations live at repo root (`prisma/`) |
| **Auth** | JWT access/refresh pattern; secrets via env (`JWT_ACCESS_SECRET`, `JWT_REFRESH_SECRET`); password hashing with bcrypt (see API and security docs) |
| **PDF** | Dedicated **`pdf-service`** package using **Puppeteer** (HTML → PDF pipeline) |
| **Identifiers** | JsBarcode, `qrcode` for labels and report verification patterns |
| **Local DB** | Docker Compose for PostgreSQL (see `docker/`) |

### Architecture notes

- **Client ↔ server:** Browser-facing app calls a **separate NestJS API** (`NEXT_PUBLIC_API_URL`); the web tier does not embed database credentials.
- **Multi-tenancy:** Product docs specify **shared schema + `lab_id`** and **PostgreSQL Row Level Security (RLS)** as the target model; the API is the primary place for authZ, with the database as a defence-in-depth layer.
- **Long-term vision (documented):** Offline-first PWA patterns (service worker, IndexedDB sync queue) are described in architecture docs; the current `web` package ships as a **modern responsive web app** — position roadmap vs shipped features clearly on your portfolio if you highlight offline/PWA.

---

## [Features]

- **Operational dashboard** — KPIs (patients, orders, reports, revenue, samples), order status breakdown, workload tiles (e.g. pending samples, results pending authorisation), revenue/trend visualisations, and navigation into lab workflows.
- **End-to-end lab workflow (domain)** — Patients, orders, samples, tests/results, reporting, and delivery-related metrics — aligned with a typical diagnostic path from registration to report.
- **Role-aware product design** — Documentation defines roles (e.g. Admin, Pathologist, Senior Tech, Technician, Front Desk) and permission matrices; the API is structured for **guards and server-side enforcement**, not UI-only checks.
- **Report PDF pipeline** — Centralised PDF generation via **Puppeteer** in `packages/pdf-service`, keeping report layout close to web technologies (HTML/CSS).
- **Barcode / QR** — Dependencies and docs support labelling and verification flows without locking to a single vendor.
- **Auditability** — Schema/migrations include **audit log immutability** (PostgreSQL trigger) for production-hardening; deployment docs call out applying or baselining this in production.
- **Database tooling** — Prisma migrate/push, seed scripts for demo labs/users, and **Supabase-focused** workflows: pooler vs direct URLs, seeding, optional **local → Supabase** data sync and **row-count comparison** scripts for environment parity checks.

---

## [Challenges & Solutions]

| Challenge | How the project addresses it |
|-----------|-------------------------------|
| **Monorepo + shared contracts** | `packages/shared` and a single Prisma schema reduce drift between UI and API; root scripts orchestrate install, generate, build. |
| **Supabase / managed Postgres networking** | Docs spell out **transaction vs session poolers**, `pgbouncer=true`, `sslmode=require`, and IPv4 pitfalls — so `DATABASE_URL` vs `DIRECT_URL` is a first-class concern, not an afterthought. |
| **Affordable hosting** | README and deployment docs standardise on **Vercel (web)** + **Supabase (Postgres)** with explicit env split: public API URL for the browser vs secrets only on the API host. |
| **Regulatory-sensitive data** | Security documentation maps encryption, sessions, RBAC, and audit trails; portfolio can honestly note **deployment region / DPDP** as evolving with scale (as the repo’s security doc states). |
| **PDF at scale** | Isolating **Puppeteer** in `pdf-service` keeps the core API lean and allows independent scaling or swapping the PDF worker later. |
| **Production DB history** | Guides cover baselining Prisma migrations when the database already matches schema — practical ops, not happy-path-only tutorials. |

---

## [Performance / Security / Testing]

### Performance

- **Next.js** for a fast, route-based UI; dashboard charts use **Recharts** for trend views without pulling heavy bespoke charting code.
- **API separation** allows caching and scaling policies independent of static/SSR assets.
- **Connection pooling** (Supabase) documented for Prisma’s `DATABASE_URL` to avoid exhausting DB connections under load.

### Security

- **JWT-based auth** with refresh flow; secrets required in production (minimum length documented in README).
- **bcrypt** for password storage; RBAC described at API level; **audit logs** with immutability migration for tamper-evident records.
- **TLS** for client–server and server–database paths assumed in deployment (Vercel/Supabase defaults).
- **Secrets hygiene** — `.env.example` as template; `.env.supabase` gitignored; no DB passwords in client bundles.

### Testing & quality gates

- **GitHub Actions CI** on `main` / PRs: `pnpm install`, **Prisma generate**, **lint**, **typecheck**, and **full monorepo build** — catches broken types and build regressions early.
- **Jest** is configured in the API package; expanding unit/integration coverage is a natural next step for a portfolio “testing” story.
- **Manual validation** supported by seed data and documented post-deploy checks (health endpoint, login, full workflow in `docs/deployment.md`).

---

## [Deployment]

- **Web:** Vercel (or similar) with monorepo-aware build: install at root, build Next app under `packages/web`, set `NEXT_PUBLIC_API_URL` to the live API.
- **API:** Deploy NestJS to any Node host (Railway, Render, Fly.io, etc.) or explore serverless adapters; requires `DATABASE_URL`, `DIRECT_URL`, and JWT secrets.
- **Database:** Supabase PostgreSQL (or self-hosted Postgres); run **`prisma migrate deploy`** (or `db push` for dev), then optional seed; apply **audit log trigger** migration for production as documented.
- **Node:** Engine **≥ 20** at repo root for consistency with CI.

---

## [Learnings]

- **Monorepo discipline** — Shared types and one schema beat ad-hoc API contracts when the same person touches both sides.
- **Environment parity** — Scripts that **compare** and **sync** local vs Supabase data turn “works on my machine” into a repeatable story.
- **Docs-driven delivery** — Architecture, security, and deployment write-ups keep **MVP scope** and **compliance expectations** explicit — valuable when solo or on a small team.
- **Cost-aware architecture** — Choosing stack pieces with strong free tiers and clear upgrade paths matches the product’s **affordable LIMS** positioning.
- **Operations as code** — Prisma migrations, seeders, and CI builds are the backbone of confident releases.

---

## [Links / CTA]

**Suggested CTAs (edit with your real URLs):**

- **Live demo** — `[deployment URL]` *(if public)*  
- **Source** — `[GitHub repository URL]`  
- **Documentation** — Deep dives in-repo: `docs/technical/architecture.md`, `docs/technical/security-and-compliance.md`, `docs/deployment.md`

**Closing line for your portfolio:**  
*If you are hiring for full-stack TypeScript, healthcare workflows, or SaaS infra — LabCore is a concrete example of product thinking plus shipping code.*

---

*Generated for the LabCore repository; align claims with what you personally implemented vs team contributions when you publish.*
