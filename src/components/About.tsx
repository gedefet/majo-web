export default function About() {
  return (
    <section id="sobre-mi" className="py-16 lg:py-24 bg-[#F0EBE6]">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">

          {/* Photo */}
          <div className="relative order-2 lg:order-1">
            <div className="absolute -top-4 -left-4 w-full h-full border border-gold/30" />
            <div className="relative bg-cream-dark aspect-[4/5] overflow-hidden">
              <img
                src="/majo.png"
                alt="Dra. María José Toledo — Master Injector"
                className="absolute inset-0 w-full h-full object-cover object-top"
              />
            </div>
            <div className="absolute -bottom-4 -right-4 w-8 h-8 bg-gold/20 rounded-full" />
          </div>

          {/* Content */}
          <div className="order-1 lg:order-2 flex flex-col gap-6">
            <div>
              <p className="font-sans text-sm tracking-widest uppercase text-gold mb-3">Sobre mí</p>
              <h2 className="font-serif text-4xl lg:text-5xl font-light text-ink leading-tight">
                Sobre mí
              </h2>
              <div className="w-10 h-px bg-gold mt-5" />
            </div>

            <div className="flex flex-col gap-5 font-sans text-base text-ink/70 leading-loose">
              <p>
                Soy la <strong className="text-ink font-medium">Dra. María José Toledo</strong>, Master Injector especializada en medicina estética, con formación continua para acercar a mis pacientes las técnicas más innovadoras.
              </p>
              <p>
                Mi enfoque se centra en la armonización facial natural mediante el uso de toxina botulínica, ácido hialurónico, bioestimuladores y técnicas de medicina regenerativa de última generación.
              </p>
              <p>
                Cada tratamiento es personalizado, priorizando la seguridad de la paciente y resultados que respeten la belleza única de cada persona.
              </p>
            </div>

            <p className="font-signature text-5xl text-ink/60 pt-1 leading-none">Dra. Majo Toledo</p>

            <a href="https://dramariajosetoledo.site.agendapro.com/ar/sucursal/36768" target="_blank" rel="noopener noreferrer" className="btn-primary self-start mt-2">
              Agendar consulta
            </a>
          </div>

        </div>
      </div>
    </section>
  )
}
