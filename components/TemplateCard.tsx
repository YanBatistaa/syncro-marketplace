import Image from 'next/image'
import type { Template } from '@/data/templates'

const nicheColors: Record<string, string> = {
  infoprodutor:  'text-violet-400',
  arquitetura:   'text-sky-400',
  'energia-solar': 'text-amber-400',
  framer:        'text-blue-400',
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
      {/* Thumbnail */}
      <div className="relative w-full aspect-[4/3] rounded-xl overflow-hidden bg-bg-card border border-border group-hover:border-border-hover transition-all duration-200 card-shadow group-hover:card-shadow-hover">
        <Image
          src={template.thumb}
          alt={template.title}
          fill
          sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 20vw"
          className="object-cover transition-transform duration-300 group-hover:scale-[1.03]"
        />

        {/* Hover overlay */}
        <div className="absolute inset-0 bg-bg-primary/60 opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex items-center justify-center backdrop-blur-[2px]">
          <span className="flex items-center gap-2 px-4 py-2 bg-accent text-white text-sm font-semibold rounded-lg translate-y-2 group-hover:translate-y-0 transition-transform duration-200">
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/>
              <circle cx="12" cy="12" r="3"/>
            </svg>
            Ver preview
          </span>
        </div>

        {/* Framer badge */}
        {template.isFramer && (
          <span className="absolute top-2 right-2 text-[10px] font-bold bg-bg-primary/80 text-accent-light border border-border px-2 py-0.5 rounded-full backdrop-blur-sm">
            Framer
          </span>
        )}
      </div>

      {/* Info */}
      <div className="mt-2.5 px-0.5">
        <p className="text-sm font-semibold text-text-primary truncate leading-tight">{template.title}</p>
        <p className={`text-xs font-medium mt-0.5 ${nicheColors[template.niche]}`}>
          {template.nicheLabel}
        </p>
      </div>
    </button>
  )
}
