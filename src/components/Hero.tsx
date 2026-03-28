export default function Hero() {
  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center overflow-hidden bg-[#1C1C1A]"
    >
      {/* Photo — full bleed background */}
      <div className="absolute inset-0">
        <img
          src="/majo_portada.jpeg"
          alt="Dra. María José Toledo"
          className="w-full h-full object-cover object-right"
        />
      </div>

      {/* Marquee text — above overlays, masked to fade before reaching Majo */}
      <div
        className="absolute bottom-[18%] left-0 right-0 z-[5] overflow-hidden pointer-events-none select-none"
        style={{
          WebkitMaskImage: 'linear-gradient(to right, transparent 5%, white 28%, white 58%, transparent 82%)',
          maskImage: 'linear-gradient(to right, transparent 5%, white 28%, white 58%, transparent 82%)',
        }}
      >
        <div className="leading-none text-[72px] lg:text-[110px] xl:text-[130px] text-white/18 whitespace-nowrap uppercase tracking-widest" style={{ fontFamily: "'Astor', 'Anton', sans-serif" }}>
          <div style={{ transform: 'translateX(-22%)' }}>
            MASTER INJECTOR · MEDICINA ESTÉTICA · MASTER INJECTOR · MEDICINA ESTÉTICA ·
          </div>
          <div>
            MASTER INJECTOR · MEDICINA ESTÉTICA · MASTER INJECTOR · MEDICINA ESTÉTICA ·
          </div>
        </div>
      </div>

      {/* Gradient overlay — dark left for text, fades right to show Majo */}
      <div className="absolute inset-0 z-[2] bg-gradient-to-r from-[#1C1C1A] via-[#1C1C1A]/80 to-[#1C1C1A]/15" />
      {/* Extra overlay on mobile where layout is full-width */}
      <div className="absolute inset-0 z-[3] bg-[#1C1C1A]/55 lg:hidden" />

      {/* Content — left aligned */}
      <div className="relative z-10 w-full max-w-6xl mx-auto px-6 pt-24 pb-10">
        <div className="flex flex-col items-start text-left gap-6 max-w-lg">
          <img
            src="/logo.png"
            alt="Dra. María José Toledo"
            className="h-40 lg:h-56 w-auto invert"
          />

          <div className="flex flex-col gap-4">
            <p className="font-sans text-xl lg:text-2xl font-light text-cream/75 leading-loose">
              Medicina estética especializada en inyectables.
            </p>
            <p className="font-sans text-xl lg:text-2xl font-light text-cream/75 leading-loose">
              Equilibrio y autenticidad para realzar tu belleza natural en el corazón de Palermo.
            </p>
          </div>

          <div className="flex flex-row gap-4">
            <a href="https://dramariajosetoledo.site.agendapro.com/ar/sucursal/36768" target="_blank" rel="noopener noreferrer" className="btn-primary whitespace-nowrap">
              Agendar consulta
            </a>
            <a href="#tratamientos" className="btn-outline whitespace-nowrap">
              Ver tratamientos
            </a>
          </div>
        </div>
      </div>

      {/* Scroll indicator — centered at bottom */}
      <a
        href="#sobre-mi"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce z-10"
        aria-label="Ir a la siguiente sección"
      >
        <div className="w-9 h-9 rounded-full border border-cream/30 flex items-center justify-center bg-white/10 backdrop-blur-sm hover:bg-white/20 transition-colors">
          <svg className="w-4 h-4 text-cream/70" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </a>
    </section>
  )
}
