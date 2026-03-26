# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev       # Start dev server (Vite, HMR enabled)
npm run build     # Production build → dist/
npm run preview   # Preview production build locally
npm run lint      # ESLint
```

After changing `tailwind.config.js`, restart the dev server — Vite's HMR does not pick up config changes.

## Stack

React 19 + TypeScript + Vite + Tailwind CSS v3. Single-page site, no router.

## Architecture

`App.tsx` renders all sections in order: `Nav → Hero → About → Treatments → Philosophy → Reviews → Contact → Footer`. Each section is a standalone component in `src/components/`.

### Design tokens — `tailwind.config.js`

All colors are defined as semantic tokens. Changing hex values here propagates everywhere without touching components:

| Token | Hex | Usage |
|-------|-----|-------|
| `cream` / `cream-dark` | `#f6f6f0` / `#ede9e3` | Main backgrounds |
| `blush` / `blush-dark` | `#ece7e0` / `#e0d9d0` | Alternate section backgrounds |
| `nude` | `#D4B9A6` | Hero overlay only |
| `gold` | `#704c3a` | Accents, CTAs, small details |
| `ink` | `#242424` | All text |

### Typography

Two fonts only — no exceptions:
- **Cormorant Garamond** (serif): headings only (`h1`, `h2`, `h3`). Loaded via Google Fonts.
- **PP Neue Montreal** (sans): everything else — body, labels, buttons, stats, quotes. Self-hosted via `@font-face` in `src/index.css`, files in `public/fonts/PP Neue Montreal - Free for Personal Use v2.6/OTF/`.

The `h1, h2, h3, h4 { @apply font-serif }` rule in `src/index.css` handles headings globally. Explicitly add `font-sans` to any non-heading that might accidentally inherit serif.

### Global styles — `src/index.css`

Defines `.btn-primary` (brown rounded CTA: `#704c3a` bg, `#f6f6f0` text, `rounded-full`) and `.btn-outline` (brown border variant). Also `.section-divider` (short gold line used under headings).

### Static assets

`/public/` contains `logo.png`, `majo.png` (doctor photo), and the font folder. Vite serves these at the root path (`/logo.png`, `/majo.png`).

### Nav scroll behavior

`Nav.tsx` uses two `useEffect`s: one for the scrolled/transparent state (triggers at 40px), and one `IntersectionObserver` to track the active section and highlight the corresponding nav link.

### Color rules

- `#242424` is text color only — never a background.
- Dark sections use `bg-[#3A3A3A]` (footer only).
- Hero uses `bg-nude/50` overlay over the full-bleed photo.
- No split colors within a single text element (e.g., no `<span>` with a different color mid-heading).
