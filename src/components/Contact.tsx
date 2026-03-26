export default function Contact() {
  return (
    <section id="contacto" className="py-24 lg:py-32 bg-cream">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">

          {/* Left: info */}
          <div className="flex flex-col gap-8">
            <div>
              <p className="font-sans text-xs tracking-ultra uppercase text-gold mb-3">Contacto</p>
              <h2 className="font-serif text-4xl lg:text-5xl font-light text-ink leading-tight">
                Agendá tu consulta
              </h2>
              <div className="w-10 h-px bg-gold mt-5" />
            </div>

            <p className="font-sans text-sm text-ink/55 leading-relaxed max-w-sm">
              La primera consulta es personalizada, sin compromiso. Evaluación completa de tu rostro y plan de tratamiento adaptado a vos.
            </p>

            {/* Info blocks */}
            <div className="flex flex-col gap-6">
              <div className="flex gap-4 items-start">
                <div className="w-10 h-10 border border-gold/30 flex items-center justify-center flex-shrink-0">
                  <svg className="w-4 h-4 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <p className="font-sans text-xs tracking-wide uppercase text-gold/70 mb-1">Ubicación</p>
                  <a
                    href="https://maps.google.com/?q=Marcelo+Torcuato+de+Alvear+1966+Recoleta+Buenos+Aires"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-sans text-sm text-ink/70 hover:text-ink transition-colors"
                  >
                    Marcelo Torcuato de Alvear 1966<br />
                    Recoleta, Buenos Aires
                  </a>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <div className="w-10 h-10 border border-gold/30 flex items-center justify-center flex-shrink-0">
                  <svg className="w-4 h-4 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <p className="font-sans text-xs tracking-wide uppercase text-gold/70 mb-1">Horarios</p>
                  <p className="font-sans text-sm text-ink/70">Lunes a Viernes: 12:00 – 20:00</p>
                  <p className="font-sans text-sm text-ink/70">Sábados: 12:00 – 17:00</p>
                </div>
              </div>
            </div>

            {/* Contact buttons */}
            <div className="flex flex-col gap-3 mt-2">
              <a
                href="https://wa.me/5491140996884"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 px-6 py-4 border border-ink/10 hover:border-gold/40 transition-all duration-300 group"
              >
                <svg className="w-5 h-5 text-gold" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                <span className="font-sans text-sm text-ink tracking-wide">WhatsApp: +54 9 11 4099-6884</span>
                <svg className="w-4 h-4 text-ink/30 ml-auto group-hover:text-gold transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5l7 7-7 7" />
                </svg>
              </a>

              <a
                href="https://instagram.com/dramajotoledo"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 px-6 py-4 border border-ink/10 hover:border-gold/40 transition-all duration-300 group"
              >
                <svg className="w-5 h-5 text-gold" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
                <span className="font-sans text-sm text-ink tracking-wide">@dramajotoledo</span>
                <svg className="w-4 h-4 text-ink/30 ml-auto group-hover:text-gold transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5l7 7-7 7" />
                </svg>
              </a>
            </div>
          </div>

          {/* Right: Consultation card */}
          <div className="bg-blush p-10 lg:p-12 flex flex-col gap-6 self-start">
            <div>
              <p className="font-sans text-xs tracking-ultra uppercase text-gold mb-2">Primera consulta</p>
              <h3 className="font-serif text-2xl text-ink">Incluye sin costo</h3>
            </div>

            <ul className="flex flex-col gap-4">
              {[
                'Evaluación completa de tu rostro',
                'Plan de tratamiento personalizado',
                'Presupuesto detallado',
                'Resolución de todas tus dudas',
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-gold mt-2 flex-shrink-0" />
                  <span className="font-sans text-sm text-ink/70">{item}</span>
                </li>
              ))}
            </ul>

            <div className="border-t border-cream-dark pt-6 mt-2">
              <a
                href="https://wa.me/5491140996884?text=Hola%20Dra.%20Toledo%2C%20me%20gustar%C3%ADa%20agendar%20una%20consulta"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary w-full text-center block"
              >
                Agendar por WhatsApp
              </a>
              <p className="font-sans text-xs text-ink/40 text-center mt-3">
                Respuesta en menos de 24hs · Sin compromiso
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
