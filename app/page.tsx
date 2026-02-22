import Header from '@/components/Header'
import HeroHome from '@/components/HeroHome'
import Features from '@/components/Features'
import FooterHome from '@/components/FooterHome'

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <HeroHome />
      <Features />
      <FooterHome />
    </div>
  )
}
