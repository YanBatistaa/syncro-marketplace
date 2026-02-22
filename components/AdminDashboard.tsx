'use client'

import { useState, useEffect } from 'react'
import { useTemplates } from '@/store/TemplateContext'
import { niches, NicheType } from '@/data/templates'

export default function AdminDashboard() {
  const { templates, addTemplate, removeTemplate } = useTemplates()
  const [mounted, setMounted] = useState(false)
  const [isAdding, setIsAdding] = useState(false)

  // Form state
  const [title, setTitle] = useState('')
  const [niche, setNiche] = useState<NicheType>('infoprodutor')
  const [thumb, setThumb] = useState('')
  const [previewUrl, setPreviewUrl] = useState('')

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return <div className="animate-pulse h-64 bg-bg-secondary rounded-2xl border border-border" />

  const handleAdd = (e: React.FormEvent) => {
    e.preventDefault()
    if (!title || !thumb || !previewUrl) return alert('Preencha todos os campos.')

    const nicheLabel = niches.find(n => n.key === niche)?.label || niche

    addTemplate({
      title,
      niche,
      nicheLabel,
      thumb,
      previewUrl
    })

    // Reset form
    setTitle('')
    setThumb('')
    setPreviewUrl('')
    setIsAdding(false)
  }

  const activeNiches = niches.filter(n => n.key !== 'all')

  return (
    <div className="space-y-6">
      {/* Top action */}
      <div className="flex justify-end">
        <button
          onClick={() => setIsAdding(!isAdding)}
          className="px-5 py-2.5 bg-accent hover:bg-accent-hover text-white font-bold text-sm rounded-xl transition-all"
        >
          {isAdding ? 'Cancelar' : '+ Novo Template'}
        </button>
      </div>

      {/* Add Form */}
      {isAdding && (
        <form onSubmit={handleAdd} className="bg-bg-secondary border border-border rounded-2xl p-6 mb-8 animate-fade-up">
          <h2 className="text-lg font-bold text-white mb-4">Adicionar Novo Template</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
            <div>
              <label className="block text-xs font-semibold text-text-secondary uppercase mb-1.5">Título do Template</label>
              <input type="text" value={title} onChange={e => setTitle(e.target.value)} placeholder="Ex: SaaS Dark Theme"
                className="w-full bg-bg-primary border border-border rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-accent" required />
            </div>
            <div>
              <label className="block text-xs font-semibold text-text-secondary uppercase mb-1.5">Nicho / Categoria</label>
              <select value={niche} onChange={e => setNiche(e.target.value as NicheType)}
                className="w-full bg-bg-primary border border-border rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-accent appearance-none">
                {activeNiches.map(n => (
                  <option key={n.key} value={n.key}>{n.label}</option>
                ))}
              </select>
            </div>
            <div className="md:col-span-2">
              <label className="block text-xs font-semibold text-text-secondary uppercase mb-1.5">URL da Imagem (Thumbnail)</label>
              <input type="url" value={thumb} onChange={e => setThumb(e.target.value)} placeholder="https://..."
                className="w-full bg-bg-primary border border-border rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-accent" required />
            </div>
            <div className="md:col-span-2">
              <label className="block text-xs font-semibold text-text-secondary uppercase mb-1.5">URL do Preview (Figma Embed / Link)</label>
              <input type="url" value={previewUrl} onChange={e => setPreviewUrl(e.target.value)} placeholder="https://www.figma.com/embed?..."
                className="w-full bg-bg-primary border border-border rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-accent" required />
            </div>
          </div>
          <button type="submit" className="px-6 py-2.5 bg-white text-bg-primary font-bold text-sm rounded-xl hover:bg-gray-200 transition-colors">
            Salvar Template
          </button>
        </form>
      )}

      {/* Table */}
      <div className="bg-bg-secondary border border-border rounded-2xl overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm">
            <thead className="bg-bg-primary/50 border-b border-border">
              <tr>
                <th className="px-6 py-4 font-semibold text-text-secondary">Template</th>
                <th className="px-6 py-4 font-semibold text-text-secondary">Nicho</th>
                <th className="px-6 py-4 font-semibold text-text-secondary text-right">Ação</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border">
              {templates.map(t => (
                <tr key={t.id} className="hover:bg-bg-primary/30 transition-colors">
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-8 rounded bg-bg-primary border border-border overflow-hidden flex-shrink-0">
                        <img src={t.thumb} alt="" className="w-full h-full object-cover opacity-80" />
                      </div>
                      <span className="font-bold text-white">{t.title}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <span className="px-2.5 py-1 bg-bg-primary border border-border rounded-lg text-xs font-medium text-text-secondary">
                      {t.nicheLabel}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-right">
                    <button
                      onClick={() => {
                        if(confirm('Tem certeza que deseja remover este template?')) removeTemplate(t.id)
                      }}
                      className="text-red-400 hover:text-red-300 font-semibold px-3 py-1.5 rounded-lg hover:bg-red-400/10 transition-colors"
                    >
                      Remover
                    </button>
                  </td>
                </tr>
              ))}
              {templates.length === 0 && (
                <tr>
                  <td colSpan={3} className="px-6 py-8 text-center text-text-muted">
                    Nenhum template cadastrado.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}
