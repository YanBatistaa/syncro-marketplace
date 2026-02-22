import Link from 'next/link'

export default function HeroHome() {
  return (
    <section className="relative flex-1 flex flex-col items-center justify-center text-center pt-40 pb-32 px-6 overflow-hidden bg-bg-primary">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_-20%,rgba(37,99,235,0.12),transparent_100%)]" />

      <div className="relative max-w-[800px] mx-auto z-10">
        <a href="/biblioteca" className="inline-flex items-center gap-2 mb-8 px-4 py-1.5 rounded-full border border-border-strong bg-white/[0.02] hover:bg-white/[0.04] transition-colors text-[12px] font-semibold text-text-secondary">
          <span className="flex h-2 w-2 relative">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent-light opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-accent"></span>
          </span>
          Novos templates adicionados esta semana →
        </a>

        <h1 className="text-[48px] sm:text-[64px] md:text-[80px] font-black tracking-[-0.04em] leading-[1.05] mb-8 text-white">
          A biblioteca definitiva <br className="hidden md:block"/>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-200 via-gray-400 to-gray-600">para o seu negócio.</span>
        </h1>

        <p className="text-[16px] sm:text-[18px] text-text-secondary leading-relaxed max-w-[600px] mx-auto mb-10 font-medium">
          Pare de perder meses reinventando a roda. Escolha um template validado, solicite sua customização e lance seu projeto em tempo recorde com design de ponta.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/biblioteca"
            className="w-full sm:w-auto px-8 py-3.5 bg-white text-bg-primary hover:bg-gray-200 text-[15px] font-bold rounded-full transition-all duration-200 hover:scale-105 hover:shadow-[0_0_30px_rgba(255,255,255,0.2)]"
          >
            Explorar Templates
          </Link>
          <a
            href="https://wa.me/55SEU_NUMERO"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto px-8 py-3.5 border border-border-strong hover:border-text-secondary text-white text-[15px] font-bold rounded-full transition-all duration-200 bg-bg-surface/50 backdrop-blur-sm hover:bg-bg-surface"
          >
            Falar com Especialista
          </a>
        </div>
      </div>
    </section>
  )
}
