export default function Philosophy() {
  return (
    <section id="filosofia" className="py-24 lg:py-32 bg-[#F7F2ED]">
      <div className="max-w-6xl mx-auto px-6">

        {/* Header */}
        <div className="text-center mb-20">
          <h2 className="font-serif text-4xl lg:text-5xl font-light text-ink">
            Mi filosofía
          </h2>
          <div className="section-divider" />
        </div>

        {/* Pillars */}
        <div className="grid lg:grid-cols-3 gap-0 divide-y lg:divide-y-0 lg:divide-x divide-gold/20">

          <div className="flex flex-col gap-4 p-8 lg:p-10 lg:pr-14">
            <span className="font-sans text-6xl font-light text-gold/40 leading-none">01</span>
            <h3 className="font-serif text-2xl text-ink">Arte</h3>
            <p className="font-sans text-base text-ink/60 leading-loose">
              Cada rostro es una obra única. Mi trabajo es realzar la belleza natural respetando la armonía y las proporciones individuales de cada paciente.
            </p>
          </div>

          <div className="flex flex-col gap-4 p-8 lg:p-10 lg:px-14">
            <span className="font-sans text-6xl font-light text-gold/40 leading-none">02</span>
            <h3 className="font-serif text-2xl text-ink">Estética</h3>
            <p className="font-sans text-base text-ink/60 leading-loose">
              La búsqueda de la belleza natural a través de técnicas precisas y productos de la más alta calidad, siempre con resultados sutiles y elegantes.
            </p>
          </div>

          <div className="flex flex-col gap-4 p-8 lg:p-10 lg:pl-14">
            <span className="font-sans text-6xl font-light text-gold/40 leading-none">03</span>
            <h3 className="font-serif text-2xl text-ink">Ética</h3>
            <p className="font-sans text-base text-ink/60 leading-loose">
              Transparencia, honestidad y seguridad son pilares fundamentales. Cada tratamiento se realiza con el máximo profesionalismo y cuidado hacia la paciente.
            </p>
          </div>
        </div>

        {/* Quote */}
        <div className="mt-20 pt-16 border-t border-gold/20">
          <div className="max-w-2xl mx-auto text-center">
            <span className="font-sans text-5xl text-gold/30 leading-none block mb-4">"</span>
            <blockquote className="font-sans text-xl lg:text-2xl font-light italic text-ink/70 leading-loose">
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
