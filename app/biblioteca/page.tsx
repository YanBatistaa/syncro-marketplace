import Header from '@/components/Header'
import BibliotecaHero from '@/components/BibliotecaHero'
import TemplatesSection from '@/components/TemplatesSection'
import FooterHome from '@/components/FooterHome'

export default function Biblioteca() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <BibliotecaHero />
      <TemplatesSection />
      <FooterHome />
    </div>
  )
}
