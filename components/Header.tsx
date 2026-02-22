'use client'

import { useState } from 'react'
import Link from 'next/link'

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-bg-primary/80 backdrop-blur-xl">
      <div className="mx-auto max-w-7xl px-6 h-14 flex items-center justify-between gap-8">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 flex-shrink-0">
          <span className="text-lg font-black tracking-tight logo-gradient">Syncro</span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-1 flex-1">
          {['Todos os templates', 'Infoprodutor', 'Arquitetura', 'Energia Solar', 'Framer'].map((item) => (
            <button
              key={item}
              className="px-3 py-1.5 text-sm text-text-secondary hover:text-text-primary hover:bg-white/5 rounded-lg transition-all duration-150 font-medium"
            >
              {item}
            </button>
          ))}
        </nav>

        {/* CTA */}
        <a
          href={`https://wa.me/55SEU_NUMERO?text=${encodeURIComponent('Olá! Vim pela biblioteca da Syncro e quero criar meu site 🚀')}`}
          target="_blank"
          rel="noopener noreferrer"
          className="hidden md:flex items-center gap-2 px-4 py-2 text-sm font-semibold bg-accent hover:bg-accent-hover text-white rounded-lg transition-all duration-150 hover:-translate-y-px hover:shadow-lg hover:shadow-accent/25"
        >
          Falar no WhatsApp
        </a>

        {/* Mobile menu btn */}
        <button
          className="md:hidden p-2 text-text-secondary hover:text-text-primary"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Menu"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            {mobileOpen
              ? <><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></>
              : <><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="18" x2="21" y2="18"/></>
            }
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden border-t border-border bg-bg-secondary px-6 py-3 flex flex-col gap-1">
          {['Todos', 'Infoprodutor', 'Arquitetura', 'Energia Solar', 'Framer'].map((item) => (
            <button key={item} className="text-left px-3 py-2 text-sm text-text-secondary hover:text-text-primary rounded-lg hover:bg-white/5 transition-all">
              {item}
            </button>
          ))}
          <a
            href="https://wa.me/55SEU_NUMERO"
            target="_blank"
            className="mt-2 px-4 py-2 text-sm font-semibold bg-accent text-white rounded-lg text-center"
          >
            Falar no WhatsApp
          </a>
        </div>
      )}
    </header>
  )
}
