export default function Hero() {
  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-cream"
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
      <div className="absolute inset-0 bg-nude/50" />
      <div className="absolute inset-0 bg-cream/30" />

      {/* Content — centered */}
      <div className="relative z-10 flex flex-col items-center text-center gap-8 px-6 pt-20">
        <img
          src="/logo.png"
          alt="Dra. María José Toledo"
          className="h-48 lg:h-64 w-auto"
        />

        <div className="flex flex-col gap-4 max-w-lg">
          <p className="font-sans text-xl lg:text-2xl font-light text-ink/70 leading-loose">
            Master Injector especializada en armonización facial natural.
          </p>
          <p className="font-sans text-xl lg:text-2xl font-light text-ink/70 leading-loose">
            Equilibrio, autenticidad y precisión en cada tratamiento.
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
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <svg className="w-6 h-6 text-ink/40" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 9l-7 7-7-7" />
        </svg>
      </div>
    </section>
  )
}
