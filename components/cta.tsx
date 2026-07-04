import { getDictionary, type Locale } from '@/lib/i18n'

type CTAProps = {
  locale?: Locale
}

export function CTA({ locale = 'en' }: CTAProps) {
  const dict = getDictionary(locale).home

  return (
    <section id="contact" className="max-w-3xl mx-auto px-4 py-10 text-center">
      <div className="bg-card/95 border border-border/80 rounded-xl shadow-sm p-8 md:p-12 space-y-8">
        <h2 className="text-3xl md:text-4xl font-bold text-foreground">{dict.ctaTitle}</h2>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          {dict.ctaDescription}
        </p>
        <button className="px-10 py-4 bg-accent text-accent-foreground font-semibold rounded-lg text-lg hover:opacity-90 transition inline-block">
          <a
            href="mailto:hello@nijushidigital.biz.id"
            target="_blank"
            rel="noopener noreferrer"
          >
            {dict.ctaButton}
          </a>
        </button>
      </div>
    </section>
  )
}
