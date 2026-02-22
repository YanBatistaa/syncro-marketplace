import Image from 'next/image'
import type { Template } from '@/data/templates'

const nicheStyle: Record<string, string> = {
  infoprodutor:    'text-violet-500',
  arquitetura:     'text-sky-500',
  'energia-solar': 'text-amber-500',
  framer:          'text-blue-400',
}

interface Props {
  template: Template
  onClick: () => void
}

export default function TemplateCard({ template, onClick }: Props) {
  return (
    <button
      onClick={onClick}
      className="group text-left w-full focus:outline-none focus-visible:ring-2 focus-visible:ring-accent rounded-xl"
    >
      {/* Thumb */}
      <div className="relative w-full aspect-[3/2] rounded-xl overflow-hidden bg-bg-card border border-border group-hover:border-border-hover transition-all duration-200 card-shadow group-hover:card-shadow-hover">
        <Image
          src={template.thumb}
          alt={template.title}
          fill
          sizes="(max-width:640px) 50vw,(max-width:1024px) 33vw, 20vw"
          className="object-cover transition-transform duration-500 group-hover:scale-[1.04]"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-bg-primary/65 opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex items-center justify-center">
          <span className="flex items-center gap-1.5 px-3.5 py-1.5 bg-white text-bg-primary text-[12px] font-bold rounded-lg -translate-y-1.5 group-hover:translate-y-0 transition-transform duration-200">
            <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/>
              <circle cx="12" cy="12" r="3"/>
            </svg>
            Ver preview
          </span>
        </div>

        {/* Framer badge */}
        {template.isFramer && (
          <span className="absolute top-2 left-2 text-[9px] font-black bg-bg-primary/80 text-accent-light border border-border-strong px-2 py-0.5 rounded-full backdrop-blur-sm tracking-wide uppercase">
            Framer
          </span>
        )}
      </div>

      {/* Info */}
      <div className="mt-2 px-0.5">
        <p className="text-[13px] font-semibold text-text-primary truncate leading-snug">{template.title}</p>
        <p className={`text-[11px] font-medium mt-0.5 ${nicheStyle[template.niche]}`}>
          {template.nicheLabel}
        </p>
      </div>
    </button>
  )
}
