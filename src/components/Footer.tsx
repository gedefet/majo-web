export default function Footer() {
  return (
    <footer className="bg-[#8C8C8C] py-6">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 pb-4 border-b border-cream/10">

          <div>
            <p className="font-sans text-sm font-medium text-cream">Dra. María José Toledo</p>
            <p className="font-sans text-xs tracking-widest uppercase text-gold">Master Injector · Palermo, Buenos Aires</p>
          </div>

          <div className="flex flex-col md:flex-row gap-4 md:gap-8 font-sans text-xs text-cream/50">
            <p>+54 9 11 4099-6884</p>
            <a href="https://instagram.com/dramajotoledo" className="hover:text-gold transition-colors">@dramajotoledo</a>
          </div>

        </div>

        <p className="font-sans text-xs text-cream/30 pt-4">
          © {new Date().getFullYear()} Dra. María José Toledo · Todos los derechos reservados
        </p>
      </div>
    </footer>
  )
}
