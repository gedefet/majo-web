function HeartIcon() {
  return (
    <svg className="w-7 h-7 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
    </svg>
  )
}

function EyeIcon() {
  return (
    <svg className="w-7 h-7 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
    </svg>
  )
}

function PeopleIcon() {
  return (
    <svg className="w-7 h-7 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
    </svg>
  )
}

export default function Philosophy() {
  return (
    <section id="filosofia" className="py-16 lg:py-24 bg-[#1C1C1A]">
      <div className="max-w-6xl mx-auto px-6">

        {/* Header */}
        <div className="text-center mb-10">
          <span className="font-serif italic font-light text-2xl lg:text-3xl text-gold/55 block mb-3">
            arte · estética · ética
          </span>
          <h2 className="font-serif text-4xl lg:text-5xl font-light text-cream">
            Mi filosofía
          </h2>
          <div className="section-divider" />
        </div>

        {/* Pillars */}
        <div className="grid lg:grid-cols-3 gap-0 divide-y lg:divide-y-0 lg:divide-x divide-gold/20">

          <div className="flex flex-col gap-4 p-8 lg:p-10 lg:pr-14">
            <HeartIcon />
            <h3 className="font-serif text-2xl text-cream">Arte</h3>
            <p className="font-sans text-base text-cream/55 leading-loose">
              Cada rostro es una obra única. Mi trabajo es realzar la belleza natural respetando la armonía y las proporciones individuales de cada paciente.
            </p>
          </div>

          <div className="flex flex-col gap-4 p-8 lg:p-10 lg:px-14">
            <EyeIcon />
            <h3 className="font-serif text-2xl text-cream">Estética</h3>
            <p className="font-sans text-base text-cream/55 leading-loose">
              La búsqueda de la belleza natural a través de técnicas precisas y productos de la más alta calidad, siempre con resultados sutiles y elegantes.
            </p>
          </div>

          <div className="flex flex-col gap-4 p-8 lg:p-10 lg:pl-14">
            <PeopleIcon />
            <h3 className="font-serif text-2xl text-cream">Ética</h3>
            <p className="font-sans text-base text-cream/55 leading-loose">
              Transparencia, honestidad y seguridad son pilares fundamentales. Cada tratamiento se realiza con el máximo profesionalismo y cuidado hacia la paciente.
            </p>
          </div>
        </div>

        {/* Quote */}
        <div className="mt-10 pt-8 border-t border-gold/20">
          <div className="max-w-2xl mx-auto text-center">
            <span className="font-sans text-5xl text-gold/30 leading-none block mb-4">"</span>
            <blockquote className="font-sans text-xl lg:text-2xl font-light italic text-cream/65 leading-loose">
              Mi compromiso es ayudarte a sentirte más segura y radiante, respetando tu identidad y realzando tu belleza natural con la máxima seguridad y profesionalismo.
            </blockquote>
            <p className="font-sans text-sm tracking-widest uppercase text-gold mt-6">
              — Dra. María José Toledo
            </p>
          </div>
        </div>

      </div>
    </section>
  )
}
