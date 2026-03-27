# Dra. María José Toledo — Medicina Estética

Web site for **Dra. María José Toledo**, Master Injector specialized in natural facial harmonization in Palermo, Buenos Aires.

Live: [majo-web.vercel.app](https://majo-web.vercel.app)

## Stack

- **Core**: React 19 + TypeScript
- **Bundler**: Vite
- **Styling**: Tailwind CSS v3
- **Deployment**: Vercel (auto-deploy on push to `master` via GitHub `gedefet/majo-web`)

## Typography

All fonts are self-hosted in `public/fonts/` — no external font dependencies at runtime.

| Token | Font | Usage |
|-------|------|-------|
| `font-serif` | Anton | All headings (h1–h4), uppercase |
| `font-cormorant` | Cormorant Garamond | Italic decorative accents only |
| `font-signature` | Mr Sheffield | Signature "Dra. Majo Toledo" |
| `font-sans` | PP Neue Montreal | Body, labels, buttons, everything else |

Cormorant Garamond is loaded via Google Fonts (italic variants only needed).

## Color palette

| Token | Hex | Usage |
|-------|-----|-------|
| `cream` / `cream-dark` | `#f6f6f0` / `#ede9e3` | Light section backgrounds |
| `blush` | `#ece7e0` | Alternate backgrounds |
| `nude` | `#D4B9A6` | Unused (kept in config) |
| `gold` | `#8C8C8C` | Accents, borders, CTAs |
| `ink` | `#242424` | Body text |

Dark chrome color (`#1C1C1A`) is used inline in: Nav (scrolled), Hero overlay, Philosophy section, ImageBreak overlay, Footer.

## Section order

```
Nav → Hero → About → Treatments → Philosophy → ImageBreak → Novedades → Reviews → Contact → Footer
```

- **Hero**: Full-bleed `consultorio.jpeg` with dark `#1C1C1A` overlay
- **About**: Doctor profile + Mr Sheffield signature
- **Treatments**: 6 treatments with inline SVG icons
- **Philosophy**: Dark section (`#1C1C1A` bg) with three pillars
- **ImageBreak**: Full-bleed `sala.jpeg` with logo overlay — purely atmospheric
- **Novedades**: Masterhub certificate image
- **Reviews**: 3 Google reviews + 5.0 score
- **Contact**: Booking card, hours, social icons, Google Maps embed

## Development

```bash
npm install
npm run dev       # Vite dev server with HMR
npm run build     # Production build → dist/
npm run preview   # Preview production build
npm run lint      # ESLint
```
