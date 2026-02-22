import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })

export const metadata: Metadata = {
  title: 'Syncro — Biblioteca de Templates',
  description: 'Escolha o template ideal para o seu negócio e entre em contato.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR" className={inter.variable}>
      <body className="bg-bg-primary text-text-primary antialiased">{children}</body>
    </html>
  )
}
