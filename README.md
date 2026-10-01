# Armin Bakhshi — Portfolio

Personal portfolio built with **Next.js 16, React 19, TypeScript and Tailwind CSS v4**.
Showcases real client work (Web3 gaming, DeFi trading, backend-driven sites, cross-platform mobile)
with case-study detail pages, pinned horizontal galleries and full i18n infrastructure.

## Features

- **Home / Projects / Resume / Profile** pages plus per-project case studies (`/projects/[slug]`)
- **Pinned horizontal galleries** (GSAP ScrollTrigger) with photo + autoplay video support
- **next-intl** — all UI copy lives in `messages/en.json`; data files hold facts only
- **Lenis smooth scrolling** synced with ScrollTrigger, blur-up reveals, animated mobile menu
- Custom 404 page, SEO metadata per route, fully static prerender

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

| Script        | What it does              |
| ------------- | ------------------------- |
| `npm run dev` | Start the dev server      |
| `npm run build` | Production build + prerender |
| `npm run start` | Serve the production build |
| `npm run lint` | Run ESLint                |
| `npm test` | Run unit tests (Vitest)     |
| `npm run test:coverage` | Unit tests + HTML report in `coverage/` |
| `npm run test:e2e` | Run UI tests (Playwright, Chromium) |

## Adding a project

1. Add the entry (facts only) to `projects` in `src/data/portfolio.ts` — slug, title,
   year, category, stack, role, timeline, URLs, hue, cover, gallery, status/links.
2. Add its copy under `ProjectContent.<slug>` in `messages/en.json`
   (`tagline`, `description[]`, `highlights[]`).
3. Drop cover + screenshots into `public/<slug>/`.
4. Rebuild — the card, detail page and static params pick it up automatically.

Optional per-project fields: `cover` (card + hero background), `gallery` (photos and
`.mp4` demos), `status: "offline"` (shows *Offline · Demos* instead of links),
`links: [{ label, href }]` (explicit link list instead of Live/Code).

## Internationalization

- Request config: `src/i18n/request.ts` (currently fixed to `en`)
- Catalog: `messages/en.json` — server pages use `getTranslations`, client
  components use `useTranslations`
- To add a language: copy `en.json`, translate the values, resolve the locale in
  `request.ts`. No component changes needed.

## Project structure

```
messages/            Translation catalogs (en.json)
public/<project>/    Covers, screenshots and demo videos per project
src/app/             Routes: home, projects, resume, profile, 404
src/components/      Header, Footer, ProjectCard, HorizontalGallery, Reveal, …
src/data/portfolio.ts  Facts-only content model (profile, projects, experience…)
src/i18n/            next-intl request configuration
```

## Deploy

Static output — deploy anywhere Next.js runs:

```bash
npm run build && npm run start
```

Or push to [Vercel](https://vercel.com/new) for zero-config hosting.
