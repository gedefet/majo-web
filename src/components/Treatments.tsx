const SyringeIcon = () => (
  <svg className="w-8 h-8 text-gold" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
    <path d="M17 3l4 4" />
    <path d="M19 5L9 15" />
    <path d="M11 7l2 2" />
    <path d="M9 9l2 2" />
    <path d="M7 13l-4 4 1 3 3 1 4-4" />
    <path d="M3 21l2.5-2.5" />
  </svg>
)

const DropletIcon = () => (
  <svg className="w-8 h-8 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 3C12 3 5 10.5 5 15a7 7 0 0014 0c0-4.5-7-12-7-12z" />
  </svg>
)

const DiamondIcon = () => (
  <svg className="w-8 h-8 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 3h12l4 6-10 12L2 9l4-6z" />
  </svg>
)

const LeafIcon = () => (
  <svg className="w-8 h-8 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 22C6 22 3 16 3 10c0-4 3-7 9-7 3 0 9 3 9 9 0 3-1.5 7.5-6 9.5" />
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 10c3 2 6 3 9 2" />
  </svg>
)

const treatments = [
  {
    icon: <SyringeIcon />,
    name: 'Toxina Botulínica',
    tagline: 'Movimiento natural, no congelado',
    description:
      'Aplicación precisa en frente, entrecejo y zona periocular para un resultado natural y armonioso. También indicado para bruxismo e hiperhidrosis.',
  },
  {
    icon: <DropletIcon />,
    name: 'Ácido Hialurónico',
    tagline: 'Volumen, hidratación y contorno',
    description:
      'Rellenos faciales avanzados para labios, pómulos, mentón, rinomodelación, ojeras y surcos. Técnica de depósito profundo para resultados duraderos.',
  },
  {
    icon: <DiamondIcon />,
    name: 'Radiesse & Sculptra',
    tagline: 'Tu colágeno, reactivado',
    description:
      'Bioestimuladores de colágeno para rejuvenecimiento progresivo y natural. Estimulan la producción propia del cuerpo para resultados que mejoran con el tiempo.',
  },
  {
    icon: <LeafIcon />,
    name: 'PDRN & Exosomas',
    tagline: 'Regeneración de última generación',
    description:
      'Medicina regenerativa avanzada para la reparación celular y mejora de la calidad de la piel. Tecnología de vanguardia para resultados visibles y duraderos.',
  },
]

export default function Treatments() {
  return (
    <section id="tratamientos" className="py-16 lg:py-24 bg-[#FBFAF9]">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-16">
          <div>
            <p className="font-sans text-sm tracking-widest uppercase text-gold mb-3">Tratamientos</p>
            <h2 className="font-serif text-4xl lg:text-5xl font-light text-ink leading-tight">
              Tratamientos
            </h2>
            <div className="w-10 h-px bg-gold mt-5" />
          </div>
          <p className="font-sans text-base text-ink/50 max-w-xs leading-loose">
            Especializada en medicina estética con inyectables, ofrezco tratamientos personalizados utilizando las técnicas más avanzadas y productos de la más alta calidad.
          </p>
        </div>

        {/* Treatment cards */}
        <div className="grid md:grid-cols-2 gap-px bg-gold/10">
          {treatments.map((t) => (
            <div
              key={t.name}
              className="bg-[#FBFAF9] p-8 lg:p-10 flex flex-col gap-4 group hover:bg-cream transition-colors duration-300"
            >
              <div className="flex items-start">
                {t.icon}
              </div>
              <div>
                <h3 className="font-serif text-2xl font-light text-ink">{t.name}</h3>
                <p className="font-sans text-sm text-gold mt-1">{t.tagline}</p>
              </div>
              <p className="font-sans text-base text-ink/60 leading-loose">{t.description}</p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <p className="font-sans text-lg italic font-light text-ink/50 mb-6">
            ¿Necesitas asesoramiento personalizado?
          </p>
          <a href="https://dramariajosetoledo.site.agendapro.com/ar/sucursal/36768" target="_blank" rel="noopener noreferrer" className="btn-primary inline-block">
            Agendar consulta
          </a>
        </div>
      </div>
    </section>
  )
}
