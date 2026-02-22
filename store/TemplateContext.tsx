'use client'

import { createContext, useContext, useState, useEffect } from 'react'
import { Template, defaultTemplates } from '@/data/templates'

interface TemplateContextType {
  templates: Template[]
  addTemplate: (template: Omit<Template, 'id'>) => void
  removeTemplate: (id: string) => void
}

const TemplateContext = createContext<TemplateContextType | undefined>(undefined)

export function TemplateProvider({ children }: { children: React.ReactNode }) {
  const [templates, setTemplates] = useState<Template[]>([])

  // Hydrate from localStorage or use defaults
  useEffect(() => {
    const stored = localStorage.getItem('@syncro:templates')
    if (stored) {
      setTemplates(JSON.parse(stored))
    } else {
      setTemplates(defaultTemplates)
      localStorage.setItem('@syncro:templates', JSON.stringify(defaultTemplates))
    }
  }, [])

  const addTemplate = (newTemplate: Omit<Template, 'id'>) => {
    const template: Template = {
      ...newTemplate,
      id: crypto.randomUUID(),
    }
    const updated = [template, ...templates]
    setTemplates(updated)
    localStorage.setItem('@syncro:templates', JSON.stringify(updated))
  }

  const removeTemplate = (id: string) => {
    const updated = templates.filter(t => t.id !== id)
    setTemplates(updated)
    localStorage.setItem('@syncro:templates', JSON.stringify(updated))
  }

  return (
    <TemplateContext.Provider value={{ templates, addTemplate, removeTemplate }}>
      {children}
    </TemplateContext.Provider>
  )
}

export function useTemplates() {
  const context = useContext(TemplateContext)
  if (!context) throw new Error('useTemplates must be used within TemplateProvider')
  return context
}
