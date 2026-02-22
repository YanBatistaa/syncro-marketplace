import Image from 'next/image'
import type { Template } from '@/data/templates'

interface Props {
  template: Template
  onClick: () => void
}

export default function TemplateCard({ template, onClick }: Props) {
  return (
    <button
      onClick={onClick}
      className="group text-left w-full focus:outline-none focus-visible:ring-2 focus-visible:ring-white rounded-[20px]"
    >
      {/* Thumb (Linear style borderless images with subtle outline) */}
      <div className="relative w-full aspect-[4/3] rounded-[20px] overflow-hidden bg-bg-surface border border-border group-hover:border-border-hover transition-all duration-300">
        <Image
          src={template.thumb}
          alt={template.title}
          fill
          sizes="(max-width:640px) 100vw, (max-width:1024px) 50vw, 25vw"
          className="object-cover transition-transform duration-700 group-hover:scale-105 opacity-80 group-hover:opacity-100"
        />

        {/* Overlay Action */}
        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center backdrop-blur-[2px]">
          <span className="px-5 py-2.5 bg-white text-bg-primary text-[13px] font-bold rounded-full translate-y-4 group-hover:translate-y-0 transition-transform duration-300 shadow-xl">
            Explorar Design
          </span>
        </div>
      </div>

      {/* Info */}
      <div className="mt-4 px-1 flex flex-col items-center text-center">
        <h3 className="text-[16px] font-bold text-white tracking-tight">{template.title}</h3>
        <p className="text-[12px] font-medium text-text-secondary mt-1">{template.nicheLabel}</p>
      </div>
    </button>
  )
}
