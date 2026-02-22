import Link from 'next/link'

const WA = '55SEU_NUMERO'

export default function HeroHome() {
  return (
    <section className="relative flex-1 flex flex-col items-center justify-center text-center pt-32 pb-28 px-6 overflow-hidden">
      {/* Radial glow */}
      <div className="pointer-events-none absolute inset-0 hero-glow" />
      {/* Grid lines subtle */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: 'linear-gradient(rgba(96,165,250,1) 1px, transparent 1px), linear-gradient(90deg, rgba(96,165,250,1) 1px, transparent 1px)',
          backgroundSize: '80px 80px',
        }}
      />

      <div className="relative max-w-3xl mx-auto">
        {/* Pill */}
        <div className="inline-flex items-center gap-2 mb-7 px-3.5 py-1.5 rounded-full border border-border-strong bg-bg-surface text-[11px] font-semibold tracking-widest uppercase text-text-secondary">
          <span className="w-1.5 h-1.5 rounded-full bg-accent-light animate-pulse" />
          Sites & Landing Pages
        </div>

        {/* Heading */}
        <h1 className="text-[52px] md:text-[68px] font-black tracking-[-2.5px] leading-[1.05] mb-6">
          Seu site pronto{' '}
          <br />
          <span className="text-gradient">para converter.</span>
        </h1>

        <p className="text-[15px] text-text-secondary leading-relaxed max-w-lg mx-auto mb-10">
          Explore a biblioteca de templates, escolha o estilo do seu negócio e fale comigo — entrego em dias, não semanas.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
          <Link
            href="/biblioteca"
            className="group flex items-center gap-2.5 px-6 py-3 bg-accent hover:bg-accent-hover text-white text-[14px] font-semibold rounded-xl transition-all duration-150 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-accent/25"
          >
            Ver todos os templates
            <svg className="w-4 h-4 transition-transform duration-150 group-hover:translate-x-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
          </Link>
          <a
            href={`https://wa.me/${WA}?text=${encodeURIComponent('Olá! Vim pelo site da Syncro e quero criar meu site 🚀')}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2.5 px-6 py-3 border border-border-strong hover:border-border-hover text-text-primary text-[14px] font-semibold rounded-xl transition-all duration-150 hover:bg-white/[0.04] hover:-translate-y-0.5"
          >
            <svg className="w-4 h-4 text-accent-light" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347"/>
            </svg>
            Falar no WhatsApp
          </a>
        </div>
      </div>

      {/* Bottom fade */}
      <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-bg-primary to-transparent" />
    </section>
  )
}
