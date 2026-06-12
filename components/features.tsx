'use client'

const features = [
  {
    number: '01',
    title: 'User-Centric Design',
    description: 'Every solution is built with you at the center, ensuring your needs and preferences guide our development.'
  },
  {
    number: '02',
    title: 'Complete Control',
    description: 'Take full ownership of your digital ecosystem. Customize, configure, and command your experience.'
  },
  {
    number: '03',
    title: 'Intelligent Innovation',
    description: 'Leverage cutting-edge technology that adapts to your unique requirements and evolves with your goals.'
  },
  {
    number: '04',
    title: 'Seamless Integration',
    description: 'Connect effortlessly with your existing systems and tools for a unified digital experience.'
  },
  {
    number: '05',
    title: 'Security First',
    description: 'Your data and privacy are paramount. Enterprise-grade protection across all platforms.'
  },
  {
    number: '06',
    title: 'Always Available',
    description: '24/7 support from our dedicated team ensuring your operations never skip a beat.'
  }
]

export function Features() {
  return (
    <section id="features" className="max-w-7xl mx-auto px-4 py-24">
      <div className="text-center mb-16 space-y-4">
        <h2 className="text-4xl md:text-5xl font-bold text-foreground">Why Choose Nijushi Digital</h2>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Our commitment to your autonomy sets us apart. Experience digital solutions that respect your choices.
        </p>
      </div>
      
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {features.map((feature) => (
          <div key={feature.number} className="bg-white border border-border rounded-lg p-8 hover:shadow-md transition group">
            <div className="text-4xl font-bold text-accent mb-4">
              {feature.number}
            </div>
            <h3 className="text-xl font-semibold text-foreground mb-3">{feature.title}</h3>
            <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
