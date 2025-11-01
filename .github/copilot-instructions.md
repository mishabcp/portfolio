## Purpose

This file gives targeted guidance for AI coding agents working on the `portfolio` repository. It explains the app architecture, developer workflows, and project-specific conventions so an agent can make safe, useful edits.

## Big picture

- Single-page React app built with Vite (E SM modules). Entry: `index.html` -> `src/main.jsx` -> `src/App.jsx`.
- Routing: client-side `react-router-dom` used with a `basename` set to `/portfolio` (see `src/App.jsx`). Vite `base` is also set to `/portfolio/` in `vite.config.js` to support GitHub Pages-style deployment. Keep these values in sync.
- Styling: Tailwind CSS (see `tailwind.config.js`) plus some `App.css` and component-level CSS. Some components also use `framer-motion` and `styled-components`.
- Components: `src/components/` contains the main UI pieces (Header, HeroSection, AboutSection, etc.). The single-route `Home` composes these sections into the page.

## Important files to reference

- `vite.config.js` — Vite config and `base` value used for production hosting.
- `package.json` — scripts and Node engine (requires Node >= 20). Useful scripts: `npm run dev`, `npm run build`, `npm run preview`, `npm run lint`.
- `src/App.jsx` and `src/main.jsx` — router and app mount.
- `src/components/Header.jsx` — navigation and the canonical section ID list used for scrolling/highlighting. If you change section IDs, update this file.
- `tailwind.config.js` and `src/index.css` — where Tailwind looks for content and where global styles are imported.

## Project-specific conventions & patterns

- Router basename and Vite base must match: `vite.config.js` sets `base: "/portfolio/"` and `src/App.jsx` uses `<Router basename="/portfolio">`. If you change deployment path, update both.
- Section IDs are used for in-page navigation. Header expects these IDs: `hero-section`, `about-section`, `experience-section`, `skills-section`, `Project-Section`, `Contact-Section`. Note the mixed casing for `Project-Section` — preserve or intentionally normalize across files when changing it.
- Files use `.jsx` (not TypeScript) and the codebase uses ESM (`type: "module"` in `package.json`). Prefer `import`/`export` and update `package.json` if switching module types.
- Assets live in `src/assets/` and some images are referenced directly from GitHub in `index.html` — prefer local `public/` or `src/assets/` copies for offline build reproducibility.
- Animation & visuals: `lottie`, `tsparticles`, and `framer-motion` are used across components — keep performance in mind when adding more animations.

## Dev / build / lint commands (exact)

- Start dev server (with HMR): `npm run dev`
- Build for production: `npm run build`
- Preview production build: `npm run preview`
- Lint: `npm run lint` (ESLint configured to fail on warnings per `--max-warnings 0`).

## Safe edit guidance (how an AI should make changes)

- When adding routes: modify `src/App.jsx` to add new `Route` entries and ensure the Router `basename` remains correct.
- When adding a new visual section: add a component under `src/components/`, include an HTML element with an `id` matching Header’s navigation list if it should be scroll-targetable.
- When changing the deployment path or base URL: update both `vite.config.js` (`base`) and `src/App.jsx` (`basename`) together.
- Avoid changing global HTML structure in `index.html` unless updating the root div or script entry intentionally — these are tightly coupled to Vite and `src/main.jsx`.

## Examples from this repo

- Router basename + Vite base (must stay in sync):
  - `vite.config.js`: `base: "/portfolio/"`
  - `src/App.jsx`: `<Router basename="/portfolio">`
- Header's section list (navigation targets): see `src/components/Header.jsx` where it maps ids such as `hero-section`, `about-section`, etc.

## External/dependency notes

- Node >= 20 is declared in `package.json` engines. Use that when running local dev or CI.
- Key runtime deps: `react`, `react-dom`, `react-router-dom`, `tailwindcss`, `framer-motion`, `lottie-web`, `tsparticles`.

If any part of this file is unclear or you'd like more detail (example PR, typical styling pattern, or preferred commit message format), tell me which area and I'll iterate.
