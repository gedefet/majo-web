export default function Contact() {
  return (
    <section id="contacto" className="py-24 lg:py-32 bg-[#FAF9F8]">
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

            {/* Contact links */}
            <div className="flex flex-col gap-5">
              <div className="flex gap-4 items-start">
                <div className="w-10 h-10 border border-gold/30 flex items-center justify-center flex-shrink-0">
                  <svg className="w-4 h-4 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <p className="font-sans text-sm tracking-widest uppercase text-gold/70 mb-1">Horarios</p>
                  <p className="font-sans text-base text-ink/70">Lunes a Viernes: 12:00 – 20:00</p>
                  <p className="font-sans text-base text-ink/70">Sábados: 12:00 – 17:00</p>
                </div>
              </div>

              <div className="flex gap-3">
                <a
                  href="https://instagram.com/dramajotoledo"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-2 border border-gold/20 px-4 py-3 hover:border-gold/50 transition-colors duration-300"
                >
                  <svg className="w-4 h-4 text-gold" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
                  <span className="font-sans text-sm text-ink/70">Instagram</span>
                </a>
                <a
                  href="https://tiktok.com/@dramajotoledo"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-2 border border-gold/20 px-4 py-3 hover:border-gold/50 transition-colors duration-300"
                >
                  <svg className="w-4 h-4 text-gold" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V8.69a8.17 8.17 0 004.78 1.52V6.75a4.85 4.85 0 01-1.01-.06z" />
                  </svg>
                  <span className="font-sans text-sm text-ink/70">TikTok</span>
                </a>
              </div>
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
                  href="https://maps.google.com/?q=Marcelo+Torcuato+de+Alvear+1966+Recoleta+Buenos+Aires"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-sans text-base text-ink/70 hover:text-ink transition-colors leading-relaxed"
                >
                  Marcelo Torcuato de Alvear 1966<br />
                  Recoleta, Buenos Aires
                </a>
              </div>
            </div>

            <div className="w-full h-80 lg:h-full min-h-72 overflow-hidden border border-gold/20">
              <iframe
                src="https://maps.google.com/maps?q=Marcelo+Torcuato+de+Alvear+1966+Recoleta+Buenos+Aires+Argentina&output=embed"
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
