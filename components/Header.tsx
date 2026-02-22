'use client'

import { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const WA = '55SEU_NUMERO'

export default function Header() {
  const [open, setOpen] = useState(false)
  const path = usePathname()

  const links = [
    { href: '/',           label: 'Início' },
    { href: '/biblioteca', label: 'Templates' },
  ]

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div className="absolute inset-0 bg-bg-primary/70 backdrop-blur-xl border-b border-border" />

      <div className="relative mx-auto max-w-7xl px-6 h-[64px] flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 select-none group">
          <div className="w-6 h-6 rounded bg-accent flex items-center justify-center group-hover:scale-105 transition-transform">
            <svg className="w-3.5 h-3.5 text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/></svg>
          </div>
          <span className="text-[16px] font-black tracking-tight text-white">Syncro</span>
        </Link>

        {/* Nav desktop */}
        <nav className="hidden md:flex items-center gap-1 bg-bg-surface/50 border border-border rounded-full px-2 py-1">
          {links.map(l => (
            <Link
              key={l.href}
              href={l.href}
              className={`px-4 py-1.5 text-[13px] font-semibold rounded-full transition-all duration-200 ${
                path === l.href
                  ? 'bg-white text-bg-primary shadow-sm'
                  : 'text-text-secondary hover:text-white'
              }`}
            >
              {l.label}
            </Link>
          ))}
        </nav>

        {/* Actions desktop */}
        <div className="hidden md:flex items-center gap-4">
          <Link href="/admin" className="text-[12px] font-medium text-text-muted hover:text-text-secondary transition-colors">
            Admin
          </Link>
          <a
            href={`https://wa.me/${WA}?text=${encodeURIComponent('Olá! Quero criar um site com a Syncro 🚀')}`}
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2 text-[13px] font-semibold bg-white text-bg-primary hover:bg-gray-200 rounded-full transition-all duration-150 hover:-translate-y-0.5 hover:shadow-[0_0_20px_rgba(255,255,255,0.3)]"
          >
            Começar Projeto
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden p-2 text-text-secondary"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            {open ? <path d="M18 6L6 18M6 6l12 12"/> : <path d="M3 12h18M3 6h18M3 18h18"/>}
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="relative md:hidden border-t border-border bg-bg-secondary/95 backdrop-blur-xl px-6 py-5 flex flex-col gap-2">
          {links.map(l => (
            <Link key={l.href} href={l.href} onClick={() => setOpen(false)}
              className="px-4 py-3 text-[14px] font-medium text-text-secondary hover:text-white rounded-lg hover:bg-white/5 transition-all"
            >
              {l.label}
            </Link>
          ))}
          <div className="h-px bg-border my-2" />
          <Link href="/admin" onClick={() => setOpen(false)} className="px-4 py-3 text-[14px] font-medium text-text-muted">Painel Admin</Link>
          <a href={`https://wa.me/${WA}`} target="_blank" className="mt-2 px-4 py-3 text-[14px] font-semibold bg-white text-bg-primary rounded-lg text-center">
            Começar Projeto
          </a>
        </div>
      )}
    </header>
  )
}
