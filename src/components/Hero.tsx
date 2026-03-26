export default function Hero() {
  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center overflow-hidden bg-cream"
    >
      {/* Photo — full bleed background */}
      <div className="absolute inset-0">
        <img
          src="/majo.png"
          alt="Dra. María José Toledo"
          className="w-full h-full object-cover object-top"
        />
      </div>

      {/* Nude translucent overlay */}
      <div className="absolute inset-0 bg-nude/50" />

      {/* Gradient desde la izquierda en desktop */}
      <div className="absolute inset-0 hidden lg:block bg-gradient-to-r from-cream/90 via-cream/60 to-transparent" />
      {/* Mobile: gradiente desde abajo */}
      <div className="absolute inset-0 lg:hidden bg-gradient-to-t from-cream/95 via-cream/50 to-transparent" />

      <div className="relative z-10 max-w-6xl mx-auto px-6 pt-24 pb-20 w-full">
        <div className="max-w-lg">

          <p className="font-sans text-sm tracking-widest uppercase text-gold mb-5">
            Medicina Estética · Recoleta, Buenos Aires
          </p>

          <h1 className="font-serif text-5xl lg:text-7xl font-light text-ink leading-[1.05] tracking-tight">
            Dra. María<br />
            José Toledo
          </h1>

          <div className="w-10 h-px bg-gold mt-6 mb-6" />

          <p className="font-sans text-lg font-light text-ink/70 leading-loose max-w-md">
            Master Injector especializada en armonización facial natural.
            Equilibrio, autenticidad y precisión en cada tratamiento.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mt-8">
            <a href="#contacto" className="btn-primary inline-block text-center">
              Agendar consulta
            </a>
            <a href="#tratamientos" className="btn-outline inline-block text-center">
              Ver tratamientos
            </a>
          </div>

          <div className="flex items-center gap-3 mt-8 pt-6 border-t border-ink/10">
            <div className="w-1.5 h-1.5 rounded-full bg-gold flex-shrink-0" />
            <p className="font-sans text-sm text-ink/50 tracking-wide">
              Master Injector certificada · 500+ pacientes · 5.0 en Google
            </p>
          </div>

        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
        <span className="font-sans text-xs tracking-widest uppercase text-ink/30">Scroll</span>
        <div className="w-px h-12 bg-gradient-to-b from-gold/50 to-transparent" />
      </div>
    </section>
  )
}
