export default function BibliotecaHero() {
  return (
    <section className="relative pt-28 pb-10 px-6 text-center overflow-hidden">
      <div className="pointer-events-none absolute inset-0 hero-glow" />
      <div className="relative mx-auto max-w-2xl">
        <p className="inline-flex items-center gap-2 mb-5 px-3.5 py-1.5 rounded-full border border-border-strong bg-bg-surface text-[11px] font-semibold tracking-widest uppercase text-text-secondary">
          <span className="w-1.5 h-1.5 rounded-full bg-accent-light" />
          Biblioteca de Templates
        </p>
        <h1 className="text-[40px] md:text-[52px] font-black tracking-[-2px] leading-[1.08] mb-4">
          Escolha o seu{' '}
          <span className="text-gradient">template.</span>
        </h1>
        <p className="text-[14px] text-text-secondary leading-relaxed max-w-sm mx-auto">
          Navegue pelos previews e quando encontrar o ideal, fale comigo no WhatsApp.
        </p>
      </div>
    </section>
  )
}
