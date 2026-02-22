const WA = '55SEU_NUMERO'

export default function FooterHome() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto max-w-6xl px-6 py-7 flex flex-col sm:flex-row items-center justify-between gap-4">
        <span className="text-[14px] font-black tracking-tight logo-gradient">Syncro</span>
        <p className="text-[11px] text-text-muted text-center">
          Templates do Framer são propriedade de seus respectivos criadores.
        </p>
        <a
          href={`https://wa.me/${WA}?text=${encodeURIComponent('Olá! Vim pelo site da Syncro 🚀')}`}
          target="_blank"
          rel="noopener noreferrer"
          className="px-4 py-1.5 text-[13px] font-semibold bg-accent hover:bg-accent-hover text-white rounded-lg transition-all"
        >
          Falar no WhatsApp
        </a>
      </div>
    </footer>
  )
}
