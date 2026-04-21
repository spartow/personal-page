# Soraya Partow — Academic Personal Website

A clean, content-first academic homepage for PhD applications and research visibility. Built with **Next.js 14 (App Router) + TypeScript + Tailwind CSS**.

> Design language: minimal, serif-led typography, strong hierarchy, neutral palette — in the spirit of MIT / Stanford / CMU faculty pages.

## Branding

- Suggested title: **Soraya Partow | AI Safety, Alignment, and Autonomous Systems**
- Suggested domain: **sorayapartow.com**
- Favicon initials: **SP** (see `src/app/icon.svg`)

## Tech stack

- Next.js 14 (App Router)
- TypeScript (strict)
- Tailwind CSS
- `lucide-react` for icons
- Zero client-side data fetching — fully static-friendly

## Project structure

```
src/
  app/                Next.js routes (Home, About, Research, Publications, Projects, Experience, CV, Contact)
    layout.tsx        Global layout, metadata, SEO, Open Graph
    globals.css       Tailwind + base typography
    sitemap.ts        Auto-generated sitemap
    robots.ts         robots.txt
    icon.svg          Favicon (SP initials)
  components/         Reusable UI (Nav, Footer, Section, PublicationList, ProjectCard, ...)
  content/            *** Edit here first ***
    site.ts           Name, tagline, URLs, social links, nav
    research.ts       Research themes + current directions
    publications.ts   Publications with accurate status labels
    projects.ts       Project entries (overview, problem, contribution, methods, outcomes)
    experience.ts     Industry experience
public/
  cv/                 Drop your CV PDF here as Soraya_Partow_CV.pdf
```

## Getting started

Requires Node.js 18.17+ (Node 20 LTS recommended).

```bash
npm install
npm run dev
```

Open http://localhost:3000.

Production build:

```bash
npm run build
npm run start
```

## What to customize first

Edit these files in order — the whole site updates automatically:

1. **`src/content/site.ts`** — email, social links, Google Scholar, GitHub, LinkedIn, domain.
2. **`src/content/publications.ts`** — keep status labels honest (`accepted` / `under-review` / `in-preparation`).
3. **`src/content/projects.ts`** — overviews, contributions, links to papers/code.
4. **`src/content/research.ts`** — research themes + current directions.
5. **`src/content/experience.ts`** — roles, highlights.
6. **`public/cv/Soraya_Partow_CV.pdf`** — drop your CV file here.
7. Optional: replace the `SP` avatar in `src/components/Avatar.tsx` with a real headshot (use `next/image`).

## Deployment

### Vercel (recommended)

1. Push this repo to GitHub.
2. Import the repo on [vercel.com](https://vercel.com).
3. Framework preset: **Next.js**. No env vars required.
4. Set your custom domain (e.g., `sorayapartow.com`) in Vercel → Project → Domains.

### GitHub Pages (static export)

Add `output: "export"` to `next.config.mjs`, then:

```bash
npm run build
# static site is emitted to ./out
```

Push `./out` to a `gh-pages` branch, or use a GitHub Action such as `actions/deploy-pages`.

## SEO

- Global metadata, Open Graph, and Twitter cards are set in `src/app/layout.tsx`.
- `sitemap.xml` and `robots.txt` are generated automatically.
- Update `site.url` in `src/content/site.ts` to your final domain before publishing.

## Suggestions for final polish

- Add a real headshot and optimize it with `next/image`.
- Replace placeholder `#` links in `publications.ts` / `projects.ts` with real preprint / code URLs as they become available.
- Add BibTeX entries behind each publication `"BibTeX"` link.
- Consider adding a short `News` section on the homepage once you have 3–4 items (acceptances, talks, reviewing service).
- Run a final pass for accuracy: every "accepted" label should correspond to a real acceptance email/notification.

## License

© Soraya Partow. All rights reserved. Code structure available for personal reuse; please swap content before republishing under your own name.
