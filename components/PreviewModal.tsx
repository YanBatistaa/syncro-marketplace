'use client'

import { useEffect, useState } from 'react'
import type { Template } from '@/data/templates'

const WHATSAPP = '55SEU_NUMERO'

const devices = [
  { key: 'desktop', label: 'Desktop', width: '100%',
    icon: <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><rect x="2" y="3" width="20" height="14" rx="2"/><path d="M8 21h8M12 17v4"/></svg> },
  { key: 'tablet',  label: 'Tablet',  width: '768px',
    icon: <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><rect x="4" y="2" width="16" height="20" rx="2"/><line x1="12" y1="18" x2="12.01" y2="18"/></svg> },
  { key: 'mobile',  label: 'Mobile',  width: '390px',
    icon: <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><rect x="5" y="2" width="14" height="20" rx="2"/><line x1="12" y1="18" x2="12.01" y2="18"/></svg> },
]

interface Props {
  template: Template
  onClose: () => void
}

export default function PreviewModal({ template, onClose }: Props) {
  const [device, setDevice] = useState<'desktop' | 'tablet' | 'mobile'>('desktop')

  // Fechar com Escape
  useEffect(() => {
    const handler = (e: KeyboardEvent) => { if (e.key === 'Escape') onClose() }
    document.addEventListener('keydown', handler)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', handler)
      document.body.style.overflow = ''
    }
  }, [onClose])

  const waMsg  = encodeURIComponent(`Olá! Vi o template "${template.title}" na biblioteca da Syncro e quero saber mais! 🚀`)
  const waLink = `https://wa.me/${WHATSAPP}?text=${waMsg}`
  const currentWidth = devices.find(d => d.key === device)?.width ?? '100%'

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/80 backdrop-blur-md"
        onClick={onClose}
      />

      {/* Container */}
      <div className="relative z-10 flex flex-col w-full max-w-6xl h-[90vh] bg-bg-secondary border border-border rounded-2xl overflow-hidden modal-shadow">

        {/* Header */}
        <div className="flex items-center justify-between gap-4 px-5 py-3.5 border-b border-border flex-shrink-0">
          {/* Info */}
          <div className="flex items-center gap-3 min-w-0">
            <div className="min-w-0">
              <p className="text-base font-bold text-text-primary truncate leading-tight">{template.title}</p>
              {template.isFramer && (
                <p className="text-xs text-text-muted">Template gratuito do Framer</p>
              )}
            </div>
          </div>

          {/* Controls */}
          <div className="flex items-center gap-3 flex-shrink-0">
            {/* Device toggle */}
            <div className="hidden sm:flex items-center bg-bg-primary border border-border rounded-lg overflow-hidden p-0.5 gap-0.5">
              {devices.map((d) => (
                <button
                  key={d.key}
                  onClick={() => setDevice(d.key as typeof device)}
                  title={d.label}
                  className={`flex items-center justify-center w-8 h-8 rounded-md transition-all duration-150 ${
                    device === d.key
                      ? 'bg-accent text-white'
                      : 'text-text-muted hover:text-text-secondary hover:bg-bg-card'
                  }`}
                >
                  {d.icon}
                </button>
              ))}
            </div>

            {/* WhatsApp CTA */}
            <a
              href={waLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 bg-accent hover:bg-accent-hover text-white text-sm font-semibold rounded-lg transition-all duration-150 hover:-translate-y-px hover:shadow-lg hover:shadow-accent/25"
            >
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347"/>
              </svg>
              <span className="hidden sm:inline">Quero esse template</span>
              <span className="sm:hidden">Quero</span>
            </a>

            {/* Close */}
            <button
              onClick={onClose}
              className="flex items-center justify-center w-9 h-9 rounded-lg bg-bg-card border border-border text-text-muted hover:text-text-primary hover:bg-bg-hover hover:border-border-hover transition-all"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>
              </svg>
            </button>
          </div>
        </div>

        {/* Preview body */}
        <div className="flex-1 flex items-center justify-center overflow-hidden bg-bg-primary px-4 py-4">
          <div
            className="h-full rounded-xl overflow-hidden border border-border bg-white transition-all duration-300"
            style={{ width: currentWidth, maxWidth: '100%' }}
          >
            <iframe
              src={template.previewUrl}
              className="w-full h-full"
              frameBorder="0"
              sandbox="allow-scripts allow-same-origin allow-forms allow-popups"
              title={`Preview — ${template.title}`}
            />
          </div>
        </div>
      </div>
    </div>
  )
}
