export default function Contact() {
  return (
    <section id="contacto" className="py-16 lg:py-24 bg-[#FAF9F8]">
      <div className="max-w-6xl mx-auto px-6">

        <div className="mb-16">
          <p className="font-sans text-sm tracking-widest uppercase text-gold mb-3">Contacto</p>
          <h2 className="font-serif text-4xl lg:text-5xl font-light text-ink leading-tight">
            Agendá tu consulta
          </h2>
          <div className="w-10 h-px bg-gold mt-5" />
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">

          {/* Left: Agenda card + contact info */}
          <div className="flex flex-col gap-8">

            {/* Agenda card */}
            <div className="bg-blush p-8 lg:p-10 flex flex-col gap-6">
              <div>
                <h3 className="font-serif text-2xl text-ink">Agendá tu Consulta</h3>
                <p className="font-sans text-base text-ink/60 mt-2 leading-relaxed">
                  La primera consulta incluye:
                </p>
              </div>

              <ul className="flex flex-col gap-4">
                {[
                  'Evaluación completa de tu rostro',
                  'Plan de tratamiento personalizado',
                  'Presupuesto detallado',
                  'Resolución de todas tus dudas',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-gold mt-2.5 flex-shrink-0" />
                    <span className="font-sans text-base text-ink/70 leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>

              <a
                href="https://dramariajosetoledo.site.agendapro.com/ar/sucursal/36768"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary text-center block"
              >
                Agendar ahora
              </a>
            </div>

          </div>

          {/* Right: Map */}
          <div className="flex flex-col gap-4">
            <div className="flex gap-4 items-start mb-2">
              <div className="w-10 h-10 border border-gold/30 flex items-center justify-center flex-shrink-0">
                <svg className="w-4 h-4 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <div>
                <p className="font-sans text-sm tracking-widest uppercase text-gold/70 mb-1">Ubicación</p>
                <a
                  href="https://maps.google.com/?q=Thames+2210+Palermo+Soho+Buenos+Aires"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-sans text-base text-ink/70 hover:text-ink transition-colors leading-relaxed"
                >
                  Thames 2210<br />
                  Palermo Soho, Buenos Aires
                </a>
              </div>
            </div>

            <div className="w-full h-80 lg:h-full min-h-72 overflow-hidden border border-gold/20">
              <iframe
                src="https://maps.google.com/maps?q=Thames+2210+Palermo+Soho+Buenos+Aires+Argentina&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Ubicación Dra. María José Toledo"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
