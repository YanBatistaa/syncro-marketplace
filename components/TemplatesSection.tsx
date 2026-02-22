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
    <section className="flex-1 pb-24">
      <div className="mx-auto max-w-7xl px-6">

        {/* Toolbar */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-8">
          {/* Nicho tabs */}
          <div className="flex items-center gap-1 bg-bg-secondary border border-border rounded-xl p-1">
            {niches.map((n) => (
              <button
                key={n.key}
                onClick={() => setActiveNiche(n.key)}
                className={`px-3 py-1.5 text-sm font-medium rounded-lg transition-all duration-150 ${
                  activeNiche === n.key
                    ? 'bg-bg-card text-text-primary shadow-sm'
                    : 'text-text-muted hover:text-text-secondary'
                }`}
              >
                {n.label}
                {n.key === 'framer' && (
                  <span className="ml-1.5 text-[10px] font-bold bg-accent/20 text-accent-light px-1.5 py-0.5 rounded-full">Free</span>
                )}
              </button>
            ))}
          </div>

          {/* Search */}
          <div className="relative">
            <svg className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-text-muted" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/>
            </svg>
            <input
              type="text"
              placeholder="Buscar template..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="pl-9 pr-4 py-2 text-sm bg-bg-secondary border border-border rounded-lg text-text-primary placeholder:text-text-muted focus:outline-none focus:border-accent focus:glow-accent transition-all w-56"
            />
          </div>
        </div>

        {/* Count */}
        <p className="text-xs text-text-muted mb-6 font-medium">
          {filtered.length} {filtered.length === 1 ? 'template' : 'templates'}
        </p>

        {/* Grid */}
        {filtered.length > 0 ? (
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
            {filtered.map((t) => (
              <TemplateCard key={t.id} template={t} onClick={() => setSelected(t)} />
            ))}
          </div>
        ) : (
          <div className="text-center py-24 text-text-muted">
            <p className="text-4xl mb-3">🔍</p>
            <p className="font-semibold text-text-secondary">Nenhum template encontrado</p>
            <p className="text-sm mt-1">Tente outro filtro ou busca.</p>
          </div>
        )}
      </div>

      {/* Modal */}
      {selected && (
        <PreviewModal template={selected} onClose={() => setSelected(null)} />
      )}
    </section>
  )
}
