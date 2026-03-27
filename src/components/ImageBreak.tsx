export default function ImageBreak() {
  return (
    <div className="relative h-[55vh] lg:h-[65vh] overflow-hidden">
      <img
        src="/sala.jpeg"
        alt=""
        aria-hidden="true"
        className="absolute inset-0 w-full h-full object-cover object-center"
      />
      <div className="absolute inset-0 bg-ink/65" />
      <div className="relative z-10 flex flex-col items-center justify-center h-full px-6 text-center gap-5">
        <div className="w-10 h-px bg-gold/50" />
        <p className="font-serif italic font-light text-5xl lg:text-7xl text-cream/90">
          Dra. Majo Toledo
        </p>
        <p className="font-sans text-xs tracking-[0.3em] uppercase text-cream/45">
          Master Injector · Palermo, Buenos Aires
        </p>
        <div className="w-10 h-px bg-gold/50" />
      </div>
    </div>
  )
}
