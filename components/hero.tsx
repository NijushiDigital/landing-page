export function Hero() {
  return (
    <section className="max-w-7xl mx-auto px-4 py-32 text-center flex flex-col items-center gap-8">
      <div className="space-y-4 max-w-3xl">
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-foreground text-balance leading-tight">
          Your World, Your Decision
        </h1>
        <p className="text-xl md:text-2xl text-muted-foreground text-balance">
          Empower your digital future with intelligent solutions designed for those who value control and autonomy.
        </p>
      </div>
      <div className="flex flex-col sm:flex-row gap-4 mt-8">
        <button className="px-8 py-3 bg-accent text-accent-foreground font-semibold rounded-lg hover:opacity-90 transition">
          Get Started
        </button>
        <button className="px-8 py-3 border-2 border-secondary text-secondary font-semibold rounded-lg hover:bg-secondary hover:text-secondary-foreground transition">
          Learn More
        </button>
      </div>
    </section>
  )
}
