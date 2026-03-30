# Dra. María José Toledo — Medicina Estética

Web site para **Dra. María José Toledo**, Master Injector especializada en armonización facial natural.

**Consultorio**: Thames 2210, Palermo Soho, Buenos Aires

## Links

| Qué | URL |
|-----|-----|
| Producción | [majo-web.vercel.app](https://majo-web.vercel.app) |
| Repo | [github.com/gedefet/majo-web](https://github.com/gedefet/majo-web) |
| Booking | [AgendaPro](https://dramariajosetoledo.site.agendapro.com/ar/sucursal/36768) |
| Instagram | [@dramajotoledo](https://instagram.com/dramajotoledo) |
| TikTok | [@dramajotoledo](https://tiktok.com/@dramajotoledo) |
| WhatsApp | [+54 9 11 4099-6884](https://wa.me/5491140996884) |

## Deployment (Vercel)

- **Plataforma**: Vercel
- **Deploy automático**: cada push a `master` en GitHub dispara un deploy
- **Framework preset**: Vite
- **Build command**: `npm run build` (genera `dist/`)
- **No hay variables de entorno** ni configuración especial — el proyecto no tiene backend, API keys, ni `.env`
- Si necesitás hacer un deploy manual: hacé push a `master` y listo

## Stack

| Tecnología | Versión | Propósito |
|------------|---------|-----------|
| React | 19 | UI |
| TypeScript | 5.9 | Tipado |
| Vite | 8 | Bundler + dev server |
| Tailwind CSS | 3 | Estilos |
| PostCSS + Autoprefixer | — | Procesamiento CSS |

Single-page app, sin router, sin backend, sin base de datos.

## Comandos

```bash
npm install       # Instalar dependencias
npm run dev       # Dev server con HMR (http://localhost:5173)
npm run build     # Build de producción → dist/
npm run preview   # Preview del build local
npm run lint      # ESLint
```

> Después de cambiar `tailwind.config.js`, reiniciá el dev server — Vite no detecta cambios en la config de Tailwind con HMR.

## Estructura del proyecto

```
majo-web/
├── public/
│   ├── fonts/                  # Tipografías self-hosted
│   │   ├── Anton-Regular.ttf
│   │   ├── Mr Sheffield Regular.ttf
│   │   └── PP Neue Montreal - .../OTF/  (Book, Medium, Bold, Italic)
│   ├── consultorio.jpeg        # Hero background
│   ├── majo_portada.jpeg       # Hero photo (Majo)
│   ├── sala.jpeg               # ImageBreak background
│   ├── majo.png                # Foto doctora (About)
│   ├── logo.png                # Logo oscuro (usar class `invert` sobre fondos oscuros)
│   ├── certificado-masterhub.jpg  # Certificado Masterhub (Novedades)
│   └── favicon.svg
├── src/
│   ├── App.tsx                 # Componente raíz, renderiza todas las secciones
│   ├── index.css               # @font-face, estilos globales, btn-primary, btn-outline
│   └── components/
│       ├── Nav.tsx             # Navbar fija, transparente → #1C1C1A al scrollear
│       ├── Hero.tsx            # Full-bleed con foto, overlay, marquee, CTAs
│       ├── About.tsx           # Bio + foto + firma Mr Sheffield
│       ├── Treatments.tsx      # 6 tratamientos con íconos SVG inline
│       ├── Philosophy.tsx      # 3 pilares, fondo oscuro, Cormorant italic
│       ├── ImageBreak.tsx      # Full-bleed sala.jpeg, logo overlay
│       ├── Novedades.tsx       # Certificado Masterhub
│       ├── Reviews.tsx         # 3 reseñas de Google, score 5.0
│       ├── Redes.tsx           # Sección "Seguime" (oscura) + horarios
│       ├── Contact.tsx         # Booking card + mapa Google Maps
│       └── Footer.tsx          # Footer oscuro
├── tailwind.config.js          # Tokens de color, tipografía, letterSpacing
├── vite.config.ts
├── tsconfig.json
└── CLAUDE.md                   # Instrucciones para Claude Code
```

## Orden de secciones (App.tsx)

```
Nav → Hero → About → Treatments → Philosophy → ImageBreak → Novedades → Reviews → Redes → Contact → Footer
```

## Paleta de colores

| Token | Hex | Uso |
|-------|-----|-----|
| `cream` | `#f6f6f0` | Fondo principal de secciones claras |
| `cream-dark` | `#ede9e3` | Variante más oscura |
| `blush` | `#ece7e0` | Fondos alternos (ej: card de agenda) |
| `gold` | `#8C8C8C` | Acentos, bordes, botones, íconos |
| `ink` | `#242424` | Texto body (nunca como fondo) |
| `#1C1C1A` | — | Color oscuro "chrome": Nav scrolled, Hero overlay, Philosophy, ImageBreak, Redes, Footer |

Secciones claras usan valores inline como `bg-[#FAF9F8]`, `bg-[#FBFAF9]`, `bg-[#F0EBE6]`.

## Tipografía

| Token Tailwind | Fuente | Archivo | Uso |
|----------------|--------|---------|-----|
| `font-serif` | Anton | `fonts/Anton-Regular.ttf` | Todos los headings (h1–h4), siempre uppercase via CSS |
| `font-cormorant` | Cormorant Garamond | Google Fonts (italic) | Acentos decorativos (Philosophy, Redes) |
| `font-signature` | Mr Sheffield | `fonts/Mr Sheffield Regular.ttf` | Firma "Dra. Majo Toledo" en About e ImageBreak |
| `font-sans` | PP Neue Montreal | `fonts/PP Neue Montreal .../OTF/` | Todo el resto: body, labels, botones |

> Anton no tiene italic — nunca usar `font-serif italic`. Para italic decorativo usar `font-cormorant italic`.

## Estilos globales (index.css)

- `h1, h2, h3, h4` → `font-serif uppercase` (Anton, mayúsculas automáticas)
- `.btn-primary` → fondo `#8C8C8C`, texto cream, `rounded-full`, `tracking-ultra`
- `.btn-outline` → fondo `#FAF9F8`, borde gray, `rounded-full` (usado en Hero sobre fondo oscuro)
- `.section-divider` → línea horizontal gold centrada

## Tratamientos actuales

1. Toxina Botulínica
2. Ácido Hialurónico
3. Bioestimuladores (Radiesse, Sculptra, Facetem, Ellansé, HArmoniCa)
4. PDRN & Exosomas
5. Aumento de glúteos con ácido hialurónico
6. Sueroterapia (en conjunto con Lic. Florencia Zalazar)

## Datos de contacto en el sitio

- **Dirección**: Thames 2210, Palermo Soho, Buenos Aires
- **Horarios**: Lunes a Viernes 12:00–20:00 / Sábados 12:00–17:00
- **WhatsApp**: +54 9 11 4099-6884
- **Instagram / TikTok**: @dramajotoledo
- **Booking**: AgendaPro (link arriba)

## Notas para futuros cambios

- El logo (`logo.png`) es oscuro — agregar `className="invert"` cuando se use sobre fondo oscuro
- Las imágenes van en `public/` directamente, se referencian como `/nombre.jpeg`
- No hay CMS ni API — todo el contenido está hardcodeado en los componentes
- El marquee del Hero ("MASTER INJECTOR · MEDICINA ESTÉTICA") solo se ve en desktop
- La sección Redes tiene fondo `#1C1C1A` (oscuro) con íconos de Instagram, TikTok y WhatsApp sin recuadro
