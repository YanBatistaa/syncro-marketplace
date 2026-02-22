'use client'

import { useEffect, useState } from 'react'
import type { Template } from '@/data/templates'

const WA = '55SEU_NUMERO'

const devices = [
  { key: 'desktop', icon: <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><rect x="2" y="3" width="20" height="14" rx="2"/><path d="M8 21h8M12 17v4"/></svg>, width: '100%' },
  { key: 'mobile', icon: <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><rect x="5" y="2" width="14" height="20" rx="2"/><path d="M12 18h.01"/></svg>, width: '390px' },
] as const

export default function PreviewModal({ template, onClose }: { template: Template; onClose: () => void }) {
  const [device, setDevice] = useState<'desktop' | 'mobile'>('desktop')

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') onClose() }
    document.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => { document.removeEventListener('keydown', onKey); document.body.style.overflow = '' }
  }, [onClose])

  const waHref = `https://wa.me/${WA}?text=${encodeURIComponent(`Olá! Quero o template "${template.title}" para o meu site.`)}`
  const w = devices.find(d => d.key === device)?.width ?? '100%'

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-0 md:p-6">
      <div className="absolute inset-0 bg-black/90 backdrop-blur-xl" onClick={onClose} />

      <div className="relative z-10 flex flex-col w-full h-full md:h-[90vh] md:max-w-[1280px] bg-bg-secondary border-0 md:border md:border-border rounded-none md:rounded-3xl overflow-hidden modal-shadow">

        {/* Top Bar */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-border bg-bg-primary flex-shrink-0">
          <div className="flex items-center gap-4">
            <button onClick={onClose} className="text-text-secondary hover:text-white transition-colors">
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12"/></svg>
            </button>
            <div className="h-4 w-px bg-border hidden sm:block" />
            <h2 className="text-[15px] font-bold text-white hidden sm:block">{template.title}</h2>
          </div>

          <div className="flex items-center gap-3">
            <div className="hidden sm:flex items-center bg-bg-surface border border-border rounded-full p-1">
              {devices.map((d) => (
                <button
                  key={d.key}
                  onClick={() => setDevice(d.key)}
                  className={`flex items-center justify-center w-8 h-8 rounded-full transition-all ${device === d.key ? 'bg-white text-bg-primary' : 'text-text-muted hover:text-white'}`}
                >
                  {d.icon}
                </button>
              ))}
            </div>
            <a
              href={waHref} target="_blank" rel="noopener noreferrer"
              className="px-5 py-2 bg-accent hover:bg-accent-hover text-white text-[13px] font-bold rounded-full transition-all"
            >
              Usar este Template
            </a>
          </div>
        </div>

        {/* Frame Wrapper */}
        <div className="flex-1 bg-bg-secondary flex items-center justify-center p-0 md:p-4 overflow-hidden relative">
          <div className="w-full h-full md:rounded-2xl overflow-hidden border-0 md:border md:border-border transition-all duration-500 ease-out flex mx-auto bg-white" style={{ maxWidth: w }}>
            <iframe
              src={template.previewUrl}
              className="w-full h-full bg-white"
              frameBorder="0"
              sandbox="allow-scripts allow-same-origin allow-forms allow-popups"
            />
          </div>
        </div>
      </div>
    </div>
  )
}
