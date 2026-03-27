export default function Hero() {
  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#1C1C1A]"
    >
      {/* Photo — full bleed background */}
      <div className="absolute inset-0">
        <img
          src="/consultorio.jpeg"
          alt="Consultorio Dra. María José Toledo"
          className="w-full h-full object-cover object-top"
        />
      </div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-[#1C1C1A]/80" />

      {/* Content — centered */}
      <div className="relative z-10 flex flex-col items-center text-center gap-6 px-6 pt-20 pb-10">
        <img
          src="/logo.png"
          alt="Dra. María José Toledo"
          className="h-48 lg:h-64 w-auto invert"
        />

        <div className="flex flex-col gap-4 max-w-lg">
          <p className="font-sans text-xl lg:text-2xl font-light text-cream/75 leading-loose">
            Medicina estética especializada en inyectables.
          </p>
          <p className="font-sans text-xl lg:text-2xl font-light text-cream/75 leading-loose">
            Equilibrio y autenticidad para realzar tu belleza natural en el corazón de Palermo.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4">
          <a href="https://dramariajosetoledo.site.agendapro.com/ar/sucursal/36768" target="_blank" rel="noopener noreferrer" className="btn-primary">
            Agendar consulta
          </a>
          <a href="#tratamientos" className="btn-outline">
            Ver tratamientos
          </a>
        </div>

        <a
          href="#sobre-mi"
          className="animate-bounce mt-2"
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
