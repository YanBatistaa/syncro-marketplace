export default function Footer() {
  return (
    <footer className="border-t border-border bg-bg-secondary">
      <div className="mx-auto max-w-7xl px-6 py-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <span className="text-base font-black tracking-tight logo-gradient">Syncro</span>
          <span className="text-text-muted text-sm">— Biblioteca de Templates</span>
        </div>
        <p className="text-xs text-text-muted">Templates do Framer são propriedade de seus respectivos criadores.</p>
        <a
          href={`https://wa.me/55SEU_NUMERO?text=${encodeURIComponent('Olá! Vim pela biblioteca da Syncro 🚀')}`}
          target="_blank"
          rel="noopener noreferrer"
          className="px-4 py-2 text-sm font-semibold bg-accent hover:bg-accent-hover text-white rounded-lg transition-all"
        >
          Falar no WhatsApp
        </a>
      </div>
    </footer>
  )
}
