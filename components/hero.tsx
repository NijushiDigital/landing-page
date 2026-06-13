import Link from 'next/link'

export function Hero() {
  return (
    <section className="max-w-7xl mx-auto px-4 py-15 text-center flex flex-col items-center gap-8">
      <div className="space-y-4 max-w-3xl">
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-foreground text-balance leading-tight">
          Your World, Your Decision
        </h1>
        <p className="text-xl md:text-2xl text-muted-foreground text-balance">
          Empower your digital future with intelligent solutions designed for those who value control and autonomy.
        </p>
        <div className="flex flex-col items-center gap-3 mt-4">
          <Link
          href="/project"
          className="px-10 py-4 bg-accent text-accent-foreground font-semibold rounded-lg text-lg hover:opacity-90 transition inline-block">
        Learn More
          
        </Link>
        
        </div>
      </div>
    </section>
  )
}
