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
    { href: '/biblioteca', label: 'Biblioteca' },
  ]

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      {/* Blurred bg */}
      <div className="absolute inset-0 bg-bg-primary/70 backdrop-blur-xl border-b border-border" />

      <div className="relative mx-auto max-w-6xl px-6 h-[56px] flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="text-[15px] font-black tracking-tight logo-gradient select-none">
          Syncro
        </Link>

        {/* Nav desktop */}
        <nav className="hidden md:flex items-center gap-0.5">
          {links.map(l => (
            <Link
              key={l.href}
              href={l.href}
              className={`px-3.5 py-1.5 text-[13px] font-medium rounded-lg transition-all duration-150 ${
                path === l.href
                  ? 'text-text-primary bg-white/[0.06]'
                  : 'text-text-secondary hover:text-text-primary hover:bg-white/[0.04]'
              }`}
            >
              {l.label}
            </Link>
          ))}
        </nav>

        {/* CTA desktop */}
        <div className="hidden md:flex items-center gap-3">
          <a
            href={`https://wa.me/${WA}?text=${encodeURIComponent('Olá! Vim pelo site da Syncro e quero criar meu site 🚀')}`}
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-1.5 text-[13px] font-semibold bg-accent hover:bg-accent-hover text-white rounded-lg transition-all duration-150 hover:shadow-lg hover:shadow-accent/20 hover:-translate-y-px"
          >
            Falar no WhatsApp
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden p-1.5 rounded-lg text-text-secondary hover:text-text-primary hover:bg-white/5 transition-all"
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            {open
              ? <><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></>
              : <><line x1="3" y1="7" x2="21" y2="7"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="17" x2="21" y2="17"/></>
            }
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="relative md:hidden border-t border-border bg-bg-secondary/95 backdrop-blur-xl px-6 py-4 flex flex-col gap-1">
          {links.map(l => (
            <Link key={l.href} href={l.href} onClick={() => setOpen(false)}
              className="px-3 py-2.5 text-[13px] font-medium text-text-secondary hover:text-text-primary rounded-lg hover:bg-white/5 transition-all"
            >
              {l.label}
            </Link>
          ))}
          <a
            href={`https://wa.me/${WA}`} target="_blank"
            className="mt-2 px-4 py-2.5 text-sm font-semibold bg-accent text-white rounded-lg text-center"
          >
            Falar no WhatsApp
          </a>
        </div>
      )}
    </header>
  )
}
