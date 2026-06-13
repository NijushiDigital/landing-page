import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { CTA } from '@/components/cta'
import { SocialLinks } from '@/components/social'
import { Lightbulb, ShieldCheck, Users, Rocket } from 'lucide-react'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About Company',
  description: 'Get to know Nijushi Digital — our story, vision, and mission.',
}

const missions = [
  {
    icon: Rocket,
    title: 'Build Reliable Products',
    description:
      'Deliver digital products and services that are fast, affordable, and genuinely useful for everyday needs.',
  },
  {
    icon: ShieldCheck,
    title: 'Respect Your Autonomy',
    description:
      'Design solutions that put control back in your hands — transparent, secure, and free from unnecessary lock-in.',
  },
  {
    icon: Users,
    title: 'Grow With The Community',
    description:
      'Listen to feedback, support open collaboration, and build long-term relationships with the people we serve.',
  },
  {
    icon: Lightbulb,
    title: 'Keep Innovating',
    description:
      'Continuously explore new ideas and technologies so our solutions stay relevant for years to come.',
  },
]

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col">
      <Header />
      <main className="flex-1">
        {/* Slogan & short description */}
        <section className="max-w-3xl mx-auto px-4 py-15 text-center space-y-4">
          <h1 className="text-5xl md:text-6xl font-bold text-foreground text-balance leading-tight">
            Your World, Your Decision
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground text-balance">
            Nijushi Digital is a digital studio that builds practical websites, tools, and
            services for people and businesses who want more control over their digital lives.
            From small ideas to everyday tools, everything we make is built to be simple,
            honest, and useful.
          </p>
        </section>

        <div className="border-t border-border" />

        {/* Vision */}
        <section className="max-w-4xl mx-auto px-4 py-15 text-center space-y-3">
          <h2 className="text-4xl md:text-6xl font-bold text-foreground text-balance">
            To be a digital partner people can rely on, choose freely, and grow with.
          </h2>
          <p className="text-sm md:text-base text-muted-foreground">
            Our Vision
          </p>
        </section>

        <div className="border-t border-border" />

        {/* Mission */}
        <section className="max-w-7xl mx-auto px-4 py-15">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground">Our Mission</h2>
            <p className="text-md text-muted-foreground max-w-xl mx-auto">
              The principles that guide everything we build at Nijushi Digital.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-6">
            {missions.map((mission) => (
              <div
                key={mission.title}
                className="bg-white border border-border rounded-lg p-8 hover:shadow-md transition flex flex-col gap-4"
              >
                <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center">
                  <mission.icon className="w-6 h-6 text-accent" />
                </div>
                <h3 className="text-xl font-semibold text-foreground">{mission.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{mission.description}</p>
              </div>
            ))}
          </div>
        </section>

        <div className="border-t border-border" />

        <SocialLinks />
        <CTA />
      </main>
      <Footer />
    </div>
  )
}
