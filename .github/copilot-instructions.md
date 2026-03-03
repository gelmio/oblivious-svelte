# Copilot Instructions

## Project Overview

Static website for [Oblivious](https://obliviousthebook.com), a travel book trilogy. Deployed to GitHub Pages at `obliviousthebook.com`.

## Tech Stack

- **Framework:** SvelteKit ^2.0 with Svelte ^5.0 (runes syntax)
- **Language:** TypeScript ^5.0 (strict mode, `allowJs` + `checkJs`)
- **Bundler:** Vite ^6.0
- **Adapter:** @sveltejs/adapter-static — entire site is prerendered
- **CSS:** TailwindCSS ^4.0 (CSS-first config via `@theme` in `src/app.css`), `@tailwindcss/typography`
- **Content rendering:** markdown-it ^14.0
- **Analytics:** Simple Analytics (privacy-first, no cookies)

## Project Structure

- `src/routes/` — Page routes, layouts, and server load functions
- `src/lib/components/` — Reusable Svelte components (`Nav`, `Footer`, `Carousel`, `DownloadBox`, `Spinner`, `PageTransition`, `AsSeenIn`)
- `src/lib/server/` — Server-only modules (`posts.ts` — markdown parsing)
- `src/lib/stores/` — Svelte writable stores synced with `localStorage`
- `src/lib/utils/` — Utility functions (`smooth-scroll.ts`)
- `src/app.css` — Global styles and Tailwind `@theme` config (brand colors, fonts, custom values)
- `src/app.html` — HTML shell (includes Simple Analytics script)
- `static/` — Static assets (fonts, images, favicons, PWA manifest)
- `static/oblivious/` — **Git submodule** (`gelmio/oblivious.git`) — book content (Markdown, EPUBs, images, contacts)
- `scripts/` — Deployment script (`gh-pages.js`)
- `build/` — Build output (do not edit, in `.gitignore`)

## Content Pipeline

The entire trilogy lives in `static/oblivious/Oblivious.md`.

1. `src/lib/server/posts.ts` reads `Oblivious.md` with `fs.readFileSync` at build time
2. Content is split by `# BOOK` headings into books, then `## Chapter` headings into chapters
3. Each chapter is rendered to HTML with `markdown-it`
4. Two exported functions: `getChapterCounts()` and `getBookContents(bookNumber)`
5. SvelteKit `load` functions in `src/routes/read/` serve the data to pages
6. The `[...slug]` reader component renders chapter HTML with `{@html}`
7. An `entries` generator produces all valid book/chapter slugs for prerendering

## Svelte 5 Runes

This codebase uses **Svelte 5 runes exclusively**.

| Pattern         | Syntax                                     |
| --------------- | ------------------------------------------ |
| Props           | `let { prop1, prop2 } = $props()`          |
| Reactive state  | `let value = $state(initial)`              |
| Computed values | `let computed = $derived(expr)`            |
| Side effects    | `$effect(() => { ... })`                   |
| Child content   | `{@render children()}` with `Snippet` type |

## Styling

**TailwindCSS v4** with CSS-first configuration — there is **no `tailwind.config.js`**. All theme customization lives in `src/app.css` using `@theme`.

- **Brand colors:** `oblivious` (#96c8ff), `oblivious-opaque` (#96c8ffad), `oblivious-dark` (#1871d3)
- **Fonts:** `header` (lato-light) for headings, `sans` (Roboto) for body text
- **Lato-Light** loaded via `@font-face` from `static/fonts/Lato-Light.ttf`
- Use **Tailwind utility classes** inline; only use `<style>` blocks for pseudo-elements, CSS animations, or complex selectors
- Book content uses `prose` / `prose-xl` classes with custom overrides in `src/app.css`

## Routing

| Route                     | Purpose                                 |
| ------------------------- | --------------------------------------- |
| `/`                       | Home — carousel, CTAs, book overview    |
| `/about/`                 | About the trilogy                       |
| `/help/`                  | E-book download instructions            |
| `/success/`               | Post-purchase confirmation              |
| `/read/`                  | Reader landing — book index             |
| `/read/[book]/[chapter]/` | Chapter reader (`[...slug]` rest param) |

- `prerender = true` and `trailingSlash = 'always'` in root `+layout.ts`
- Root layout: `Nav` → `PageTransition` → content → `Footer`
- `/read/` has a nested layout with a sliding chapter navigation panel

## State Management

Two `writable` stores in `src/lib/stores/reader-hints.ts`, synced with `localStorage`:

- **`readerPosition`**: `[book, chapter, paragraph] | null` — reader's exact position
- **`giveScrollHint`**: `boolean | null` — first-time reader instructions

## SEO

Every page must set `<svelte:head>` with:

- `<title>`
- `<meta name="description">`
- Open Graph tags (`og:title`, `og:description`, `og:image`, `og:url`)
- Twitter Card tags (`twitter:card`, `twitter:title`, `twitter:description`, `twitter:image`)

## Deployment

```
npm run build    →  vite build  →  build/
npm run deploy   →  vite build && node ./scripts/gh-pages.js  →  publishes build/ to deploy branch
```

Deployment is manual (no CI/CD). The `deploy` branch is served by GitHub Pages. `static/CNAME` contains `obliviousthebook.com`.

## Important Notes

- `static/oblivious/` is a **git submodule** — run `git submodule update --init` after cloning
- No test suite, linter, or formatter is configured
- `build/` is a build artifact — do not edit
- `src/ambient.d.ts` declares image imports (`.gif`, `.jpg`, `.jpeg`, `.png`, `.svg`, `.webp`) as string modules
- The reader component (`src/routes/read/[...slug]/+page.svelte`) is the most complex piece — CSS multi-column pagination, IntersectionObserver for position tracking, custom smooth-scroll utility
