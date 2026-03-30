export default function Hero() {
  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center overflow-hidden bg-[#1C1C1A]"
    >
      {/* Photo — full bleed background, object-right shows Majo on both mobile and desktop */}
      <div className="absolute inset-0">
        <img
          src="/majo_portada.jpeg"
          alt="Dra. María José Toledo"
          className="w-full h-full object-cover object-right"
        />
      </div>

      {/* Marquee text — between photo and overlay, desktop only */}
      <div
        className="absolute bottom-[18%] left-0 right-0 z-[1] overflow-hidden pointer-events-none select-none hidden lg:block opacity-80"
        style={{
          WebkitMaskImage: 'linear-gradient(to right, white 0%, white 80%, transparent 98%)',
          maskImage: 'linear-gradient(to right, white 0%, white 80%, transparent 98%)',
        }}
      >
        <div className="leading-none text-[110px] xl:text-[130px] text-white whitespace-nowrap uppercase tracking-widest" style={{ fontFamily: "'Astor', 'Anton', sans-serif" }}>
          <div style={{ transform: 'translateX(-22%)' }}>
            MASTER INJECTOR · MEDICINA ESTÉTICA · MASTER INJECTOR · MEDICINA ESTÉTICA ·
          </div>
          <div>
            MASTER INJECTOR · MEDICINA ESTÉTICA · MASTER INJECTOR · MEDICINA ESTÉTICA ·
          </div>
        </div>
      </div>

      {/* Desktop overlay: directional gradient, dark left → transparent right */}
      <div className="absolute inset-0 z-[2] hidden lg:block bg-gradient-to-r from-[#1C1C1A] via-[#1C1C1A]/80 to-[#1C1C1A]/15" />
      {/* Mobile overlay: uniform, light enough to see Majo behind */}
      <div className="absolute inset-0 z-[2] lg:hidden bg-[#1C1C1A]/50" />

      {/* Content */}
      <div className="relative z-10 w-full max-w-6xl mx-auto px-6 pt-24 pb-10">
        {/* Mobile: centered — Desktop: left-aligned */}
        <div className="flex flex-col items-center text-center lg:items-start lg:text-left gap-6 lg:max-w-lg">
          <img
            src="/logo.png"
            alt="Dra. María José Toledo"
            className="h-40 lg:h-56 w-auto invert"
          />

          {/* Mobile: MASTER INJECTOR heading */}
          <h1 className="lg:hidden font-serif text-5xl sm:text-6xl text-cream leading-none">
            Master<br />Injector
          </h1>

          <p className="font-sans text-lg lg:text-2xl font-light text-cream/75 leading-relaxed max-w-xs lg:max-w-none">
            Equilibrio y autenticidad<br className="lg:hidden" /> para realzar tu belleza natural
          </p>

          <div className="flex flex-col sm:flex-row gap-4 w-full lg:w-auto">
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
      <div className="absolute bottom-8 z-10 w-full flex justify-center">
        <a
          href="#sobre-mi"
          className="animate-bounce"
          aria-label="Ir a la siguiente sección"
        >
          <div className="w-9 h-9 rounded-full border border-cream/30 flex items-center justify-center bg-white/10 backdrop-blur-sm hover:bg-white/20 transition-colors">
            <svg className="w-4 h-4 text-cream/70" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </div>
        </a>
      </div>
    </section>
  )
}
