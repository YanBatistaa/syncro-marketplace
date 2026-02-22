export default function Hero() {
  return (
    <section className="relative pt-20 pb-14 text-center overflow-hidden">
      {/* Glow bg */}
      <div
        className="pointer-events-none absolute left-1/2 -top-24 -translate-x-1/2 w-[700px] h-[400px]"
        style={{ background: 'radial-gradient(ellipse, rgba(37,99,235,0.10) 0%, transparent 70%)' }}
      />

      <div className="relative mx-auto max-w-3xl px-6">
        <p className="inline-block mb-5 text-xs font-semibold tracking-widest uppercase text-accent-light border border-accent/20 bg-accent-muted px-3 py-1.5 rounded-full">
          Biblioteca de Templates
        </p>

        <h1 className="text-4xl md:text-5xl font-black tracking-tight leading-tight mb-4">
          O template certo para{' '}
          <span className="text-gradient">o seu negócio</span>
        </h1>

        <p className="text-base text-text-secondary max-w-md mx-auto leading-relaxed">
          Explore os previews, escolha o que mais combina e fale comigo para começarmos.
        </p>
      </div>
    </section>
  )
}
