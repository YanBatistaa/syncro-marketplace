const items = [
  {
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z"/>
      </svg>
    ),
    title: 'Entrega rápida',
    desc: 'Sites e landing pages entregues em dias, sem enrolação.',
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path d="M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25m18 0A2.25 2.25 0 0018.75 3H5.25A2.25 2.25 0 003 5.25m18 0H3"/>
      </svg>
    ),
    title: 'Templates prontos',
    desc: 'Explore a biblioteca e escolha o layout perfeito para o seu nicho.',
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3"/>
      </svg>
    ),
    title: '100% responsivo',
    desc: 'Perfeito em qualquer dispositivo — desktop, tablet e celular.',
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941"/>
      </svg>
    ),
    title: 'Alta conversão',
    desc: 'Estrutura pensada para transformar visitantes em clientes.',
  },
]

export default function Features() {
  return (
    <section className="relative py-24 px-6">
      <div className="pointer-events-none absolute inset-0 section-glow" />
      <div className="relative mx-auto max-w-6xl">
        <div className="text-center mb-14">
          <p className="text-[11px] font-bold tracking-widest uppercase text-text-secondary mb-3">Por que a Syncro</p>
          <h2 className="text-[36px] md:text-[44px] font-black tracking-[-1.5px] leading-tight">
            Tudo que seu site<br />
            <span className="text-gradient">precisa ter.</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {items.map((item) => (
            <div
              key={item.title}
              className="group p-5 rounded-2xl border border-border bg-bg-card hover:bg-bg-surface hover:border-border-hover transition-all duration-200"
            >
              <div className="w-9 h-9 rounded-xl bg-accent-muted border border-border-strong flex items-center justify-center text-accent-light mb-4 group-hover:bg-accent/20 transition-colors">
                {item.icon}
              </div>
              <p className="text-[14px] font-bold text-text-primary mb-1.5">{item.title}</p>
              <p className="text-[13px] text-text-secondary leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
