import Header from '@/components/Header'
import Hero from '@/components/Hero'
import TemplatesSection from '@/components/TemplatesSection'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col">
      <Header />
      <Hero />
      <TemplatesSection />
      <Footer />
    </main>
  )
}
