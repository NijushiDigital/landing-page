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
        <div className="flex items-center gap-4 mt-auto">
              <Link
                href="/about"
                className="inline-flex items-center gap-2 text-sm font-medium text-accent hover:underline"
              >
                Learn More
              </Link>
          <br />
          <br />
          <a classname="text-[5px] underline">Scroll To Continue Reading</a>
      </div>
    </section>
  )
}
