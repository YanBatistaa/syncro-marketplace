import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Syncro — Sites & Landing Pages',
  description: 'Criação de sites e landing pages de alta conversão. Explore os templates e solicite o seu.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <body className="bg-bg-primary text-text-primary antialiased">{children}</body>
    </html>
  )
}
