# Oblivious

Static website for [Oblivious](https://obliviousthebook.com), a travel book trilogy by Luke Gelmi.

## Tech Stack

SvelteKit 2 · Svelte 5 · TypeScript · Vite 6 · TailwindCSS 4 · adapter-static · GitHub Pages

## Setup

```bash
git clone --recurse-submodules https://github.com/gelmio/oblivious-svelte.git
cd oblivious-svelte
npm install
```

If you already cloned without `--recurse-submodules`:

```bash
git submodule update --init
```

## Development

```bash
npm run dev       # Start dev server
npm run build     # Build static site to build/
npm run preview   # Preview built site
npm run check     # TypeScript validation
```

## Deployment

```bash
npm run deploy    # Build + publish to deploy branch (GitHub Pages)
```

Serves at [obliviousthebook.com](https://obliviousthebook.com) via the `deploy` branch.

## Content

The book trilogy lives in `static/oblivious/Oblivious.md` (git submodule from [gelmio/oblivious](https://github.com/gelmio/oblivious)). Chapters are parsed from Markdown at build time and served as prerendered HTML.
