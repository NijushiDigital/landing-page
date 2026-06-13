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
            href="/about"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-md bg-orange-500 hover:bg-orange-600 text-white text-sm font-medium transition-colors duration-200"
          >
            Learn More
          </Link>
          <span className="text-xs text-muted-foreground">Scroll To Continue Reading</span>
        </div>
      </div>
    </section>
  )
}
