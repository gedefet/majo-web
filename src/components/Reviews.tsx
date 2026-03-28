const reviews = [
  {
    name: 'Luján Acuña',
    time: 'Hace 2 semanas',
    text: 'Me atiendo con la Dra. hace muchos años y la volvería a elegir siempre por su profesionalismo y dedicación. Recomiendo con los ojos cerrados atenderse con ella.',
  },
  {
    name: 'Federico',
    time: 'Hace 1 mes',
    text: 'Absolutamente conforme con los resultados, la metodología de trabajo, información brindada en todo momento y su calidez.',
  },
  {
    name: 'Rocío Ávila',
    time: 'Hace 3 semanas',
    text: 'Muy conforme con los resultados, con procedimientos sin dolor y molestias. Se nota el profesionalismo y la constante capacitación en el área.',
  },
]

function Stars() {
  return (
    <div className="flex gap-0.5">
      {[...Array(5)].map((_, i) => (
        <svg key={i} className="w-4 h-4 text-gold fill-current" viewBox="0 0 20 20">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  )
}

export default function Reviews() {
  return (
    <section className="py-16 lg:py-24 bg-[#FAF9F8]">
      <div className="max-w-6xl mx-auto px-6">

        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6 mb-12">
          <div>
            <h2 className="font-serif text-4xl lg:text-5xl font-light text-ink">
              Lo que dicen<br />
              mis pacientes
            </h2>
            <div className="w-10 h-px bg-gold mt-5" />
          </div>

          {/* Score */}
          <div className="flex items-center gap-4 bg-[#1C1C1A] px-8 py-5 flex-shrink-0">
            <div className="text-center">
              <p className="font-sans text-5xl font-light text-cream">5.0</p>
              <Stars />
            </div>
            <div className="w-px h-12 bg-gold/30" />
            <div>
              <p className="font-sans text-sm text-cream/50 tracking-wide">Basado en</p>
              <p className="font-sans text-sm text-cream/50 tracking-wide">reseñas de Google</p>
              <a
                href="https://www.google.com/search?q=dra+majo+toledo+maps&rlz=1C1ONGR_esAR1178AR1178&oq=dra+majo+toledo+maps&gs_lcrp=EgZjaHJvbWUyBggAEEUYOdIBCDI2MDdqMGo0qAIAsAIB&sourceid=chrome&ie=UTF-8#lrd=0x95bccb7a8a368e21:0xaae558e94082288b,1,,,,"
                className="font-sans text-sm text-gold hover:text-gold-dark transition-colors mt-1 inline-block tracking-wide"
                target="_blank"
                rel="noopener noreferrer"
              >
                Ver todas →
              </a>
            </div>
          </div>
        </div>

        {/* Review cards */}
        <div className="grid md:grid-cols-3 gap-6">
          {reviews.map((r) => (
            <div
              key={r.name}
              className="flex flex-col gap-4 p-8 border border-cream-dark hover:border-gold/30 transition-colors duration-300"
            >
              <Stars />
              <p className="font-sans text-base text-ink/70 leading-loose flex-1 italic">
                "{r.text}"
              </p>
              <div className="pt-4 border-t border-cream-dark">
                <p className="font-sans text-base font-medium text-ink">{r.name}</p>
                <p className="font-sans text-sm text-ink/40 mt-0.5">{r.time}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
