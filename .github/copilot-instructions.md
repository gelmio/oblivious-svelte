# Copilot Instructions

## Project Overview

Static website for [Oblivious](https://obliviousthebook.com), a travel book trilogy. Deployed to GitHub Pages at `obliviousthebook.com`.

## Tech Stack

- **Framework:** Sapper ^0.28 (Svelte ^3.17)
- **Language:** TypeScript ^4.0 (partial — mixed with plain JS)
- **Bundler:** Rollup
- **CSS:** TailwindCSS v2 with `@tailwindcss/typography`, PostCSS (`postcss-import`, `postcss-preset-env`, `cssnano`)
- **Server:** Polka + sirv (dev only — production is static export)
- **Content rendering:** markdown-it

## Project Structure

This codebase follows standard Sapper and Svelte file naming and routing conventions.

- `src/components/` — Reusable Svelte components
- `src/routes/` — Page routes and server API endpoints
- `src/assets/` — Source stylesheets (PostCSS)
- `static/` — Static assets served as-is
- `static/oblivious/` — Book content (Markdown source, images, contacts)
- `__sapper__/` — Build artifact (do not edit)

## Content Pipeline

The entire trilogy lives in a single file: `static/oblivious/Oblivious.md`.

1. `src/routes/read/_posts.js` reads `Oblivious.md` with `fs.readFileSync`
2. Content is split by `# BOOK` and `## Chapter` headings
3. Each chapter is rendered to HTML with `markdown-it`
4. JSON API endpoints (`[bookNumber].json.js`, `book-index.json.js`) serve the parsed content
5. The `[...slug].svelte` reader component fetches chapter HTML via Sapper's `preload` and renders it with `{@html}`

## Coding Conventions

- **TypeScript** is used in entry points (`client.ts`, `server.ts`) and some components/utilities, but server API routes are plain JS
- **Tailwind utility classes** are used inline on elements; only use `<style>` blocks for pseudo-elements, CSS animations, or `theme()` references
- **Brand colors:** `oblivious` (#96c8ff), `oblivious-opaque`, `oblivious-dark` (#1871d3) — defined in `tailwind.config.js`
- **Fonts:** `lato-light` for headings, `Roboto` for body text — loaded via `@font-face` in `src/assets/global.pcss`
- **SEO:** Every page must set `<svelte:head>` with title, Open Graph, and Twitter Card meta tags
- **State:** Client-side state uses Svelte `writable` stores; reader position is persisted via `localStorage`

## Deployment

```
npm run export   →  sapper export --legacy  →  __sapper__/export/
npm run deploy   →  publishes to `deploy` branch via gh-pages
```

Deployment is manual (no CI/CD). Analytics via Simple Analytics (privacy-first, no cookies).

## Important Notes

- **Do NOT suggest migrating to SvelteKit** — this project intentionally uses Sapper
- `static/global.css` is generated from `src/assets/global.pcss` — never edit it directly
- `dead-route.svelte` exists solely to force `sapper export` to crawl all book content
- No test suite or linter/formatter is configured
- `__sapper__/` is a build artifact — do not edit files there
