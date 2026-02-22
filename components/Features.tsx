const features = [
  {
    title: 'Design Premium',
    desc: 'Nossos layouts são desenhados com os mesmos padrões e conversões de startups do Vale do Silício.',
    colSpan: 'col-span-1 md:col-span-2',
    icon: <svg className="w-6 h-6 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" /></svg>
  },
  {
    title: 'Foco em Conversão',
    desc: 'Arquitetura pensada para guiar o usuário até o clique final.',
    colSpan: 'col-span-1',
    icon: <svg className="w-6 h-6 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" /></svg>
  },
  {
    title: 'Deploy em Dias',
    desc: 'Você escolhe o template e a mágica acontece. No ar rapidamente.',
    colSpan: 'col-span-1',
    icon: <svg className="w-6 h-6 text-amber-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
  },
  {
    title: 'Perfeito no Mobile',
    desc: 'A maioria do seu tráfego vem do celular. Todos são rigorosamente responsivos.',
    colSpan: 'col-span-1 md:col-span-2',
    icon: <svg className="w-6 h-6 text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" /></svg>
  },
]

export default function Features() {
  return (
    <section className="py-32 px-6 bg-bg-secondary border-y border-border">
      <div className="max-w-6xl mx-auto">
        <div className="mb-16">
          <h2 className="text-[32px] md:text-[40px] font-black tracking-tight text-white mb-4">
            A fundação perfeita <br className="hidden sm:block"/> para o seu projeto.
          </h2>
          <p className="text-text-secondary text-[16px] max-w-2xl">
            Construímos a biblioteca pensando nas dores reais de quem precisa de um site: velocidade, estética impecável e resultados.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {features.map((f, i) => (
            <div key={i} className={`group relative p-8 rounded-3xl bg-bg-primary border border-border hover:border-border-hover transition-colors overflow-hidden ${f.colSpan}`}>
              <div className="relative z-10">
                <div className="w-12 h-12 rounded-2xl bg-bg-surface border border-border-strong flex items-center justify-center mb-6">
                  {f.icon}
                </div>
                <h3 className="text-[20px] font-bold text-white mb-3 tracking-tight">{f.title}</h3>
                <p className="text-[15px] text-text-secondary leading-relaxed">{f.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
