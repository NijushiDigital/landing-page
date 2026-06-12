import { Header } from '@/components/header'
import { Hero } from '@/components/hero'
import { Features } from '@/components/features'
import { CTA } from '@/components/cta'
import { Footer } from '@/components/footer'
import { SocialLinks } from '@/components/social'

export default function Page() {
  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col">
      <Header />
      <main className="flex-1">
        <Hero />
        <div className="border-t border-border" />
        <Features />
                <div className="border-t border-border" />
        <SocialLinks />
        <CTA />
      </main>
      <Footer />
    </div>
  )
}
