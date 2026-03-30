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

`App.tsx` renders all sections in order:

```
Nav → Hero → About → Treatments → Philosophy → ImageBreak → Novedades → Reviews → Redes → Contact → Footer
```

Each section is a standalone component in `src/components/`.

### Design tokens — `tailwind.config.js`

| Token | Hex | Usage |
|-------|-----|-------|
| `cream` / `cream-dark` | `#f6f6f0` / `#ede9e3` | Light section backgrounds |
| `blush` / `blush-dark` | `#ece7e0` / `#e0d9d0` | Alternate section backgrounds |
| `nude` | `#D4B9A6` | Kept in config, unused |
| `gold` | `#8C8C8C` | Accents, borders, small details |
| `ink` | `#242424` | Body text |

The dark chrome color `#1C1C1A` is used as an inline hardcoded value (not a token) in: Nav scrolled bg, Hero overlay, Philosophy bg, ImageBreak overlay, Redes bg, Footer bg.

### Typography

Four fonts — all self-hosted in `public/fonts/` except Cormorant Garamond:

| Token | Font | File | Usage |
|-------|------|------|-------|
| `font-serif` | Anton | `Anton-Regular.ttf` | All headings h1–h4 (globally uppercase via CSS) |
| `font-cormorant` | Cormorant Garamond | Google Fonts | Italic decorative accents only (Philosophy, Redes) |
| `font-signature` | Mr Sheffield | `Mr Sheffield Regular.ttf` | Signature "Dra. Majo Toledo" in About + ImageBreak |
| `font-sans` | PP Neue Montreal | `OTF/PPNeueMontreal-*.otf` | Everything else |

The `h1, h2, h3, h4 { @apply font-serif uppercase; }` rule in `src/index.css` applies Anton + uppercase globally to all headings.

Anton does not have italic — never use `font-serif italic`. Use `font-cormorant italic` for decorative italic text.

### Global styles — `src/index.css`

- `.btn-primary`: gray (`#8C8C8C`) bg, cream text, `rounded-full`, `tracking-ultra`
- `.btn-outline`: `#FAF9F8` bg, gray border/text, `rounded-full`. Used in Hero on dark bg.
- `.section-divider`: short gold (`#8C8C8C`) horizontal line, centered, used under headings.

### Static assets — `public/`

| File | Usage |
|------|-------|
| `logo.png` | Dark/ink logo. Add `invert` class when on dark backgrounds (Nav, Hero, ImageBreak). |
| `majo.png` | Doctor photo — used in About section |
| `consultorio.jpeg` | Hero background (full-bleed) |
| `sala.jpeg` | ImageBreak background (full-bleed) |
| `certificado-masterhub.jpg` | Masterhub certificate shown in Novedades |

### Nav behavior

- Transparent at top, `bg-[#1C1C1A]/98` when scrolled past 40px
- Text is always `text-cream` (site has dark hero at top, dark nav when scrolled)
- Logo always has `invert` class (logo.png is dark, needs to appear white)
- `IntersectionObserver` tracks active section for link highlighting

### Color rules

- `#1C1C1A` is the dark chrome color — used for Nav, Hero overlay, Philosophy section, ImageBreak overlay, Redes section, Footer
- `#242424` (ink) is body text only — never a background
- Light sections use inline `bg-[#FAF9F8]`, `bg-[#F0EBE6]`, `bg-[#FBFAF9]`, `bg-[#F7F2ED]` etc.
- No split colors within a single text element

### Booking URL

All CTAs point to: `https://dramariajosetoledo.site.agendapro.com/ar/sucursal/36768`
