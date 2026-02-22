import type { Metadata } from 'next'
import './globals.css'
import { TemplateProvider } from '@/store/TemplateContext'

export const metadata: Metadata = {
  title: 'Syncro — Templates Premium',
  description: 'A biblioteca definitiva de sites e landing pages de alta conversão.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <body className="bg-bg-primary text-text-primary antialiased">
        <TemplateProvider>
          {children}
        </TemplateProvider>
      </body>
    </html>
  )
}
