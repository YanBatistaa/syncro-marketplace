const WA = '55SEU_NUMERO'

export default function FooterHome() {
  return (
    <footer className="bg-bg-primary py-8">
      <div className="mx-auto max-w-7xl px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <span className="text-[14px] font-black tracking-tight text-white">Syncro</span>
        <a
          href={`https://wa.me/${WA}`}
          target="_blank"
          rel="noopener noreferrer"
          className="text-[13px] font-medium text-text-secondary hover:text-white transition-colors"
        >
          Falar no WhatsApp
        </a>
      </div>
    </footer>
  )
}
