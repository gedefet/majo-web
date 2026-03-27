import type { ReactNode } from 'react'

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

const SparkleIcon = () => (
  <svg className="w-8 h-8 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 3v2m0 14v2M3 12h2m14 0h2m-3.22-6.78-1.42 1.42M7.64 16.36l-1.42 1.42m0-11.56 1.42 1.42m8.72 8.72 1.42 1.42" />
    <circle cx="12" cy="12" r="3" strokeWidth={1.5} />
  </svg>
)

const IVDripIcon = () => (
  <svg className="w-8 h-8 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
    {/* Hook at top */}
    <path d="M12 1v2" />
    {/* IV bag */}
    <path d="M8 3h8a1 1 0 011 1v5a3 3 0 01-3 3H10a3 3 0 01-3-3V4a1 1 0 011-1z" />
    {/* liquid level line inside bag */}
    <path d="M7.2 8h9.6" />
    {/* tube from bag */}
    <path d="M12 12v2" />
    {/* drip chamber */}
    <rect x="10" y="14" width="4" height="4" rx="0.5" />
    {/* tube going down */}
    <path d="M12 18v3" />
    {/* drip drop */}
    <circle cx="12" cy="22" r="0.6" fill="currentColor" stroke="none" />
  </svg>
)

interface Treatment {
  icon: ReactNode
  name: string
  tagline: string
  description: ReactNode
}

const treatments: Treatment[] = [
  {
    icon: <SyringeIcon />,
    name: 'Toxina Botulínica',
    tagline: 'Movimiento natural, no congelado',
    description: 'Aplicación precisa en frente, entrecejo y zona periocular para un resultado natural y armonioso. También indicado para bruxismo e hiperhidrosis.',
  },
  {
    icon: <DropletIcon />,
    name: 'Ácido Hialurónico',
    tagline: 'Volumen, hidratación y contorno',
    description: 'Rellenos faciales avanzados para labios, pómulos, mentón, rinomodelación, ojeras y surcos. Técnica de depósito profundo para resultados duraderos.',
  },
  {
    icon: <DiamondIcon />,
    name: 'Radiesse & Sculptra',
    tagline: 'Tu colágeno, reactivado',
    description: 'Bioestimuladores de colágeno para rejuvenecimiento progresivo y natural. Estimulan la producción propia del cuerpo para resultados que mejoran con el tiempo.',
  },
  {
    icon: <LeafIcon />,
    name: 'PDRN & Exosomas',
    tagline: 'Regeneración de última generación',
    description: 'Medicina regenerativa avanzada para la reparación celular y mejora de la calidad de la piel. Tecnología de vanguardia para resultados visibles y duraderos.',
  },
  {
    icon: <SparkleIcon />,
    name: 'Aumento de glúteos con ácido hialurónico',
    tagline: 'Contorno definido, resultados naturales',
    description: (
      <div className="flex flex-col gap-3">
        <p>El aumento de glúteos con ácido hialurónico permite definir y armonizar el contorno de manera precisa y natural.</p>
        <p>En algunos casos, se puede complementar con Sculptra para estimular colágeno y mejorar la calidad del tejido, logrando resultados más integrales y duraderos.</p>
      </div>
    ),
  },
  {
    icon: <IVDripIcon />,
    name: 'Sueroterapia',
    tagline: 'Resultados desde adentro',
    description: (
      <div className="flex flex-col gap-3">
        <p>No podés mejorar la piel sin mejorar lo que pasa adentro del cuerpo.</p>
        <p>La energía celular, la inflamación y el estrés se reflejan en cómo se ve tu piel.</p>
        <p>La sueroterapia actúa desde el interior para lograr resultados reales, visibles y sostenidos.</p>
        <p className="text-ink/40 text-sm">Este tratamiento es realizado en conjunto con la Lic. en Hemoterapia Florencia Zalazar.</p>
      </div>
    ),
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
              Facial & Corporal
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
                <h3 className="font-serif text-3xl lg:text-4xl font-light text-ink">{t.name}</h3>
                <p className="font-sans text-sm text-gold mt-1">{t.tagline}</p>
              </div>
              <div className="font-sans text-base text-ink/60 leading-loose">{t.description}</div>
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
