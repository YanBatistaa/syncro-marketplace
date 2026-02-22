'use client'

import { useState, useMemo, useEffect } from 'react'
import { useTemplates } from '@/store/TemplateContext'
import { niches } from '@/data/templates'
import TemplateCard from './TemplateCard'
import PreviewModal from './PreviewModal'
import type { Template } from '@/data/templates'

export default function TemplatesSection() {
  const { templates } = useTemplates()
  const [mounted, setMounted] = useState(false)
  const [activeNiche, setActiveNiche] = useState('all')
  const [selected, setSelected] = useState<Template | null>(null)

  useEffect(() => setMounted(true), [])

  const filtered = useMemo(() => {
    return templates.filter((t) => {
      return activeNiche === 'all' || t.niche === activeNiche
    })
  }, [activeNiche, templates])

  if (!mounted) {
    return <div className="flex-1 min-h-[50vh] bg-bg-primary" />
  }

  return (
    <section className="flex-1 pb-32 px-6 pt-6 bg-bg-primary relative z-10">
      <div className="mx-auto max-w-7xl">

        {/* Top Filters (Webflow style tags) */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {niches.map((n) => (
            <button
              key={n.key}
              onClick={() => setActiveNiche(n.key)}
              className={`px-5 py-2 text-[14px] font-semibold rounded-full border transition-all duration-200 ${
                activeNiche === n.key
                  ? 'bg-white border-white text-bg-primary shadow-sm scale-105'
                  : 'bg-bg-surface/50 border-border text-text-secondary hover:text-white hover:border-border-hover'
              }`}
            >
              {n.label}
            </button>
          ))}
        </div>

        {/* Grid */}
        {filtered.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-6 gap-y-10">
            {filtered.map((t) => (
              <TemplateCard key={t.id} template={t} onClick={() => setSelected(t)} />
            ))}
          </div>
        ) : (
          <div className="text-center py-32 border border-dashed border-border rounded-3xl bg-bg-surface/30">
            <h3 className="text-white font-bold text-lg mb-2">Nenhum template nesta categoria.</h3>
            <p className="text-text-muted text-sm">Adicione novos templates no painel admin.</p>
          </div>
        )}
      </div>

      {selected && <PreviewModal template={selected} onClose={() => setSelected(null)} />}
    </section>
  )
}
