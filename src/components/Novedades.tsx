export default function Novedades() {
  return (
    <section id="novedades" className="py-24 lg:py-32 bg-blush">
      <div className="max-w-6xl mx-auto px-6">

        <div className="mb-16">
          <p className="font-sans text-sm tracking-widest uppercase text-gold mb-3">Novedades</p>
          <h2 className="font-serif text-4xl lg:text-5xl font-light text-ink leading-tight">
            Formación continua
          </h2>
          <div className="w-10 h-px bg-gold mt-5" />
        </div>

        {/* Certificate */}
        <div className="max-w-3xl mx-auto">
          <div className="relative bg-cream border border-gold/30 p-12 lg:p-16">

            {/* Badge / Cucarda */}
            <div className="absolute -top-6 -right-6 w-24 h-24 rounded-full bg-gold flex items-center justify-center z-10 shadow-lg">
              <div className="w-[76px] h-[76px] rounded-full border border-cream/40 flex flex-col items-center justify-center text-center gap-0.5 px-1">
                <span className="font-sans text-cream text-[7px] tracking-widest uppercase leading-none">Congreso</span>
                <span className="font-serif text-cream text-xl font-light leading-none">2025</span>
                <span className="font-sans text-cream text-[7px] tracking-widest uppercase leading-none">Masterhub</span>
              </div>
            </div>

            {/* Corner ornaments */}
            <div className="absolute top-4 left-4 w-8 h-8 border-t border-l border-gold/50" />
            <div className="absolute top-4 right-4 w-8 h-8 border-t border-r border-gold/50" />
            <div className="absolute bottom-4 left-4 w-8 h-8 border-b border-l border-gold/50" />
            <div className="absolute bottom-4 right-4 w-8 h-8 border-b border-r border-gold/50" />

            {/* Inner border */}
            <div className="border border-gold/15 p-8 lg:p-12 flex flex-col items-center text-center gap-8">

              {/* Header */}
              <div className="flex flex-col items-center gap-3">
                <div className="flex items-center gap-4 w-full">
                  <div className="flex-1 h-px bg-gold/30" />
                  <span className="font-sans text-xs tracking-widest uppercase text-gold/70">Certificado de Participación</span>
                  <div className="flex-1 h-px bg-gold/30" />
                </div>
              </div>

              {/* Institution */}
              <div className="flex flex-col items-center gap-2">
                <h3 className="font-serif text-3xl lg:text-4xl font-light text-ink">
                  Congreso Masterhub
                </h3>
                <p className="font-sans text-lg text-gold tracking-wide">Buenos Aires</p>
              </div>

              {/* Divider dot */}
              <div className="w-1.5 h-1.5 rounded-full bg-gold/50" />

              {/* Body */}
              <div className="flex flex-col gap-4">
                <p className="font-sans text-sm tracking-widest uppercase text-ink/40">Se certifica la participación de</p>
                <p className="font-serif text-2xl lg:text-3xl font-light text-ink">
                  Dra. María José Toledo
                </p>
                <p className="font-sans text-base text-ink/60 leading-loose max-w-md">
                  Participación en el congreso internacional de medicina estética más importante del país.
                </p>
              </div>

              {/* Date */}
              <div className="flex flex-col items-center gap-2 mt-4">
                <div className="w-16 h-px bg-gold/30" />
                <p className="font-sans text-sm tracking-widest uppercase text-ink/40">Septiembre 2025</p>
              </div>

            </div>
          </div>
        </div>

      </div>
    </section>
  )
}
