export default function Novedades() {
  return (
    <section id="novedades" className="py-24 lg:py-32 bg-[#FBFAF9]">
      <div className="max-w-6xl mx-auto px-6">

        <div className="mb-16">
          <p className="font-sans text-sm tracking-widest uppercase text-gold mb-3">Novedades</p>
          <h2 className="font-serif text-4xl lg:text-5xl font-light text-ink leading-tight">
            Formación continua
          </h2>
          <div className="w-10 h-px bg-gold mt-5" />
        </div>

        {/* Certificate image */}
        <div className="max-w-3xl mx-auto">
          <img
            src="/certificado-masterhub.jpg"
            alt="Certificado Congreso Masterhub – Buenos Aires, Septiembre 2025"
            className="w-full h-auto shadow-md border border-gold/20"
          />
        </div>

      </div>
    </section>
  )
}
