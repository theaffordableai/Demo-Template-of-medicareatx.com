# Demo Template — medicareatx.com

A demo marketing website template for **medicareatx.com**, built with [Astro](https://astro.build/).
This repository contains the complete site source plus the `.claude/` tooling folder
(Claude Code skills and agents) used to build and maintain it.

## Tech stack

- **Astro 5** — static / hybrid site framework
- **Sharp** — build-time image optimization
- Deploy targets: **Vercel** / **Cloudflare**

## Getting started

```bash
# 1. Install dependencies
npm install

# 2. Start the local dev server (http://localhost:4321)
npm run dev

# 3. Production build (runs image optimization first)
npm run build

# 4. Preview the production build locally
npm run preview
```

## Project structure

```
.
├── src/
│   ├── components/      # Reusable Astro components (Nav, Footer, tools, forms)
│   ├── config/         # site.config.ts — single source of truth (brand, identity)
│   ├── data/           # Structured content (plans, etc.)
│   ├── pages/          # Routes
│   └── styles/         # Global CSS + design tokens
├── public/             # Static assets (images, brand, robots.txt, llms.txt)
├── scripts/            # Build utilities (image optimization)
├── .claude/            # Claude Code skills & agents used to build the site
├── astro.config.mjs
└── package.json
```

## Branding & content

Site-wide brand, identity, and configuration live in `src/config/site.config.ts`.
Update that file to re-brand the template.

## `.claude/` tooling

The `.claude/` folder ships with the project and contains the Claude Code **skills**
and **agents** (SEO, design, blog, brand) used to generate and maintain this site.

---

*Demo template — for evaluation and demonstration purposes.*
