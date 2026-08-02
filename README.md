# Imara Fellowship

Marketing site for the Imara Fellowship — built with Next.js 16 (App Router), Tailwind CSS v4, and a hook-free, mostly-CSS approach to interactivity.

## Tech stack

- **Framework:** [Next.js 16](https://nextjs.org) (App Router, Turbopack, React 19)
- **Styling:** [Tailwind CSS v4](https://tailwindcss.com) — CSS-based config (`@theme inline`), no `tailwind.config.ts`
- **Components:** [shadcn/ui](https://ui.shadcn.com) "radix-nova" style, built on the consolidated [`radix-ui`](https://www.radix-ui.com) package and [`class-variance-authority`](https://cva.style/docs) for variants
- **Icons:** [`lucide-react`](https://lucide.dev), plus hand-converted inline SVGs for a few Figma-specific icons
- **Fonts:** self-hosted via explicit `@font-face` (not `next/font`) — see [Fonts](#fonts) below
- **Package manager:** pnpm

## Getting started

```bash
pnpm install
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000).

### Scripts

| Command       | Description                                    |
| ------------- | ----------------------------------------------- |
| `pnpm dev`    | Start the dev server (Turbopack)                 |
| `pnpm build`  | Production build                                 |
| `pnpm start`  | Serve the production build                       |
| `pnpm lint`   | Run ESLint                                       |

Type-check with `pnpm exec tsc --noEmit` (no dedicated script — run directly).

## Project structure

```
src/
  app/                        Routing only — no markup/logic beyond composing sections
    page.tsx                  Home
    about/page.tsx
    contacts/page.tsx
    fellows/page.tsx
    fellows/profile/page.tsx  Cohort roster (searchParams-driven filtering)
    impact/page.tsx
    ipolicy/page.tsx
    ipolicy/detail/page.tsx
    reports/page.tsx
    style-guide/page.tsx      Live reference for the design system
    globals.css                Design-system source of truth (see below)
    layout.tsx                 Root layout — renders Navbar/Footer

  components/
    ui/                       Primitives (Button, Card, icon sets)
    shared/                   Cross-page components (Navbar, Footer, PageHero,
                               RegisterCta, Tooltip, Pagination, carousels, ...)
    sections/<page>/          Page-unique section components, one file per
                               section, colocated with their own data

  lib/
    utils.ts                  `cn()` helper (clsx + tailwind-merge)
```

Every page under `src/app/` is a thin composition of section components — e.g. `src/app/fellows/page.tsx` just renders `<PageHero>`, `<CohortsSection>`, `<RegisterCta>`. All actual markup and copy lives in `src/components/sections/<page>/*.tsx`. This keeps `app/` purely about routing and makes each section independently editable.

## Design system

Everything — color tokens, typography, radii, gradients — is defined as CSS custom properties in `src/app/globals.css` and exposed to Tailwind via `@theme inline`. There is no `tailwind.config.ts`; Tailwind v4's CSS-first config is the single source of truth.

- **Colors:** `--imara-*` tokens (navy, blue, gold, gray, alert, success, gold-cta, cream, blush, orange), mapped to Tailwind utilities like `bg-navy-900`, `text-blue-700`, `border-gold-500`.
- **Typography:** custom utilities (`text-display`, `text-h1`…`text-h3`, `text-body-l`, `text-body`, `text-body-s`, `text-caption`, `text-ui-bold`, `text-ui-medium`, `text-tag`) rather than raw Tailwind font-size classes, so type scale changes happen in one place.
- **Gradients:** named custom properties (`--gradient-hero-overlay`, `--gradient-page-hero`, `--gradient-cta-linear` / `--gradient-cta-radial`) exposed as utilities (`bg-hero-overlay`, `bg-page-hero`, `bg-cta`, `bg-cta-linear`, `bg-cta-radial`).
- **Layout:** `container-page` caps content at 1280px with responsive gutters (design canvas is 1440px wide).
- **Live reference:** `/style-guide` renders the palette, type scale, and button/card variants together.

See `src/app/globals.css` for the full token list — it's organized top-to-bottom as fonts → theme mapping → raw values → typography utilities → layout utilities.

## Fonts

Fonts are self-hosted as `.woff2` files in `public/fonts/` and loaded via explicit `@font-face` rules in `globals.css` — **not** `next/font`. This was a deliberate choice: `next/font/google` requires network access at build time, which broke `pnpm build` in offline/restricted environments, and using explicit `@font-face` also guarantees the computed `font-family` in devtools reads the real name (e.g. "Playfair Display") instead of an internal generated one.

Families in use: Playfair Display (display/headings), Quicksand (body), Space Grotesk (UI text), Figtree (tags/labels).

## Interactivity: no `useState`/`useEffect`

This codebase deliberately avoids client-side React state. All interactivity is built with native HTML and CSS instead:

- **Mobile menu, carousels, toggles:** the checkbox/radio "CSS hack" — a hidden `<input type="radio">` / `<input type="checkbox">` paired with `<label htmlFor>`, driven entirely by `:checked` and `:has()` selectors (see `src/components/shared/mobile-menu.tsx`, `hero-slider.tsx`, `testimonial-carousel.tsx`).
- **Accordions/disclosure:** native `<details>`/`<summary>`.
- **Tooltips:** `group-hover` / `group-focus-within` (see `src/components/shared/tooltip.tsx`) — keyboard-accessible without JS.
- **Filtering/search (Fellows roster):** Next.js `searchParams` server-side, via plain `<form method="get">` — no client fetch, no state.
- **Animated counters:** pure CSS via `@property --num` + `@keyframes` + `counter()`.
- **Carousels:** per-slide `@keyframes` positioned as percentages of one shared animation cycle, generated server-side into a `<style>` tag.

The one exception is `mobile-menu.tsx`, which uses `usePathname()` purely as a React `key` to force a remount (and thus auto-close) on navigation — no state, no effect.

When adding new interactive UI, prefer these patterns over `useState`/`useEffect`.

## Working with images

Any `<Image fill>` usage **must** include a `sizes` prop matching its responsive layout (e.g. a 3-column grid → `sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"`), otherwise Next.js logs a dev-time warning and the browser downloads a larger image than necessary.

## Content accuracy

Page copy is sourced from the project's Figma file and real project data wherever possible — see comments in data arrays (e.g. `src/app/fellows/profile/page.tsx`) for provenance notes. Do not fabricate biographical details, quotes, or achievements attributed to real, named individuals; synthetic placeholder names are fine where explicitly marked as such.

## Verification checklist

Before considering a change done, run:

```bash
pnpm exec tsc --noEmit
pnpm exec eslint .
pnpm build
```

and spot-check the affected route(s) with `pnpm dev`.
