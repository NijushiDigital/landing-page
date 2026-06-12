export function CTA() {
  return (
    <section id="contact" className="max-w-7xl mx-auto px-4 py-24 text-center">
      <div className="bg-white border border-border rounded-lg p-12 md:p-16 space-y-8">
        <h2 className="text-4xl md:text-5xl font-bold text-foreground">
          Interested in Working Together?
        </h2>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          You can contact us as soon as you can! <strong>#YourDecision</strong> awaits.
        </p>
        <button className="px-10 py-4 bg-accent text-accent-foreground font-semibold rounded-lg text-lg hover:opacity-90 transition inline-block">
          <a
  href={"email:hello@nijushidigital.biz.id"}
  target="_blank"
  rel="noopener noreferrer">
          Start The Journey
        </a>
        </button>
      </div>
    </section>
  )
}
