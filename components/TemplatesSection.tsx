'use client'

import { useState, useMemo } from 'react'
import { templates, niches } from '@/data/templates'
import TemplateCard from './TemplateCard'
import PreviewModal from './PreviewModal'
import type { Template } from '@/data/templates'

export default function TemplatesSection() {
  const [activeNiche, setActiveNiche] = useState('all')
  const [search, setSearch]           = useState('')
  const [selected, setSelected]       = useState<Template | null>(null)

  const filtered = useMemo(() => {
    return templates.filter((t) => {
      const matchNiche  = activeNiche === 'all' || t.niche === activeNiche
      const matchSearch = t.title.toLowerCase().includes(search.toLowerCase())
      return matchNiche && matchSearch
    })
  }, [activeNiche, search])

  return (
    <section className="flex-1 pb-28 px-6">
      <div className="mx-auto max-w-6xl">

        {/* Toolbar */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 mb-8">
          {/* Tabs */}
          <div className="flex items-center gap-1 p-1 rounded-xl border border-border bg-bg-secondary">
            {niches.map((n) => (
              <button
                key={n.key}
                onClick={() => setActiveNiche(n.key)}
                className={`flex items-center gap-1.5 px-3.5 py-1.5 text-[12px] font-semibold rounded-lg transition-all duration-150 ${
                  activeNiche === n.key
                    ? 'bg-bg-surface text-text-primary border border-border-hover shadow-sm'
                    : 'text-text-muted hover:text-text-secondary'
                }`}
              >
                {n.label}
                {n.key === 'framer' && (
                  <span className="text-[9px] font-black bg-accent-muted text-accent-light border border-border-strong px-1.5 py-0.5 rounded-full tracking-wide">FREE</span>
                )}
              </button>
            ))}
          </div>

          {/* Search */}
          <div className="relative">
            <svg className="absolute left-3 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-text-muted" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/>
            </svg>
            <input
              type="text"
              placeholder="Buscar..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="pl-8 pr-4 py-1.5 text-[12px] bg-bg-secondary border border-border rounded-lg text-text-primary placeholder:text-text-muted focus:outline-none focus:border-accent-light focus:glow-accent transition-all w-44"
            />
          </div>
        </div>

        {/* Count */}
        <p className="text-[11px] text-text-muted font-medium mb-5 tracking-wide">
          {filtered.length} {filtered.length === 1 ? 'template' : 'templates'}
        </p>

        {/* Grid */}
        {filtered.length > 0 ? (
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3">
            {filtered.map((t) => (
              <TemplateCard key={t.id} template={t} onClick={() => setSelected(t)} />
            ))}
          </div>
        ) : (
          <div className="text-center py-28 text-text-muted">
            <p className="text-3xl mb-3 opacity-30">◻</p>
            <p className="text-[14px] font-semibold text-text-secondary">Nenhum template encontrado</p>
            <p className="text-[12px] mt-1">Tente outro filtro ou termo.</p>
          </div>
        )}
      </div>

      {selected && <PreviewModal template={selected} onClose={() => setSelected(null)} />}
    </section>
  )
}
