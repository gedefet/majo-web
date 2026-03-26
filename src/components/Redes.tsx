const redes = [
  {
    name: 'Instagram',
    handle: '@dramajotoledo',
    url: 'https://instagram.com/dramajotoledo',
    description: 'Resultados, tips de medicina estética y el día a día del consultorio.',
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
      </svg>
    ),
  },
  {
    name: 'TikTok',
    handle: '@dramajotoledo',
    url: 'https://tiktok.com/@dramajotoledo',
    description: 'Videos educativos sobre tratamientos, mitos y realidades de la medicina estética.',
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V8.69a8.17 8.17 0 004.78 1.52V6.75a4.85 4.85 0 01-1.01-.06z" />
      </svg>
    ),
  },
]

export default function Redes() {
  return (
    <section id="redes" className="py-24 lg:py-32 bg-[#FAF9F8]">
      <div className="max-w-6xl mx-auto px-6">

        <div className="mb-12">
          <p className="font-sans text-sm tracking-widest uppercase text-gold mb-3">Seguime</p>
          <h2 className="font-serif text-4xl lg:text-5xl font-light text-ink leading-tight">
            Mis redes
          </h2>
          <div className="w-10 h-px bg-gold mt-5" />
        </div>

        <div className="flex flex-col sm:flex-row gap-4 max-w-xl">
          {redes.map((red) => (
            <a
              key={red.name}
              href={red.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-3 bg-cream border border-gold/20 px-5 py-4 hover:border-gold/50 transition-colors duration-300 flex-1"
            >
              <span className="text-gold flex-shrink-0">{red.icon}</span>
              <div className="flex flex-col">
                <span className="font-sans text-sm font-medium text-ink leading-tight">{red.handle}</span>
                <span className="font-sans text-xs text-gold tracking-wide uppercase">{red.name}</span>
              </div>
              <svg className="w-4 h-4 text-ink/20 group-hover:text-gold transition-colors ml-auto flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
          ))}
        </div>

      </div>
    </section>
  )
}
