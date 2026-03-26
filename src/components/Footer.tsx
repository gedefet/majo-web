export default function Footer() {
  return (
    <footer className="bg-[#8C8C8C] py-12">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-10 pb-10 border-b border-cream/10">

          {/* Brand */}
          <div className="flex flex-col gap-3">
            <div>
              <p className="font-sans text-base font-medium text-cream">Dra. María José Toledo</p>
              <p className="font-sans text-sm tracking-widest uppercase text-gold mt-0.5">Master Injector</p>
            </div>
            <p className="font-sans text-sm text-cream/40 leading-loose max-w-xs">
              Medicina estética especializada en inyectables faciales. Arte, estética y ética en cada tratamiento.
            </p>
          </div>

          {/* Contacto */}
          <div className="flex flex-col gap-2">
            <p className="font-sans text-sm tracking-widest uppercase text-gold mb-2">Contacto</p>
            <p className="font-sans text-sm text-cream/50">Palermo, Buenos Aires</p>
            <p className="font-sans text-sm text-cream/50">+54 9 11 4099-6884</p>
            <a href="https://instagram.com/dramajotoledo" className="font-sans text-sm text-cream/50 hover:text-gold transition-colors">@dramajotoledo</a>
          </div>

          {/* Tratamientos */}
          <div className="flex flex-col gap-2">
            <p className="font-sans text-sm tracking-widest uppercase text-gold mb-2">Tratamientos</p>
            {['Toxina Botulínica', 'Ácido Hialurónico', 'Radiesse & Sculptra', 'PDRN & Exosomas'].map((t) => (
              <a key={t} href="#tratamientos" className="font-sans text-sm text-cream/50 hover:text-gold transition-colors">
                {t}
              </a>
            ))}
          </div>

        </div>

        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-2">
          <p className="font-sans text-sm text-cream/30">
            © {new Date().getFullYear()} Dra. María José Toledo · Todos los derechos reservados
          </p>
          <p className="font-sans text-sm text-cream/20">
            Palermo · Buenos Aires · Argentina
          </p>
        </div>
      </div>
    </footer>
  )
}
