import Link from 'next/link'
import { getDictionary, getLocalizedPath, type Locale } from '@/lib/i18n'
import { ScrollDownArrow } from './ui/scroll'

type HeroProps = {
  locale?: Locale
}

export function Hero({ locale = 'en' }: HeroProps) {
  const dict = getDictionary(locale).home

  return (
    <section className="max-w-7xl mx-auto px-4 pt-30 pb-15 text-center flex flex-col items-center gap-8">
      <div className="space-y-4 max-w-3xl">
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-foreground text-balance leading-tight">
          Your World, Your{' '}
          <span className="relative inline-block px-2 py-1">
            <span className="absolute inset-0 bg-amber-300/70 -rotate-1 rounded-sm" />
            <span className="relative text-foreground">Decision</span>
          </span>
        </h1>
        <p className="text-xl md:text-2xl text-muted-foreground text-balance">
          {dict.heroDescription}
        </p>
        <div className="flex flex-col items-center gap-3 mt-6">
          <Link
            href={getLocalizedPath('/about', locale)}
            className="px-5 py-3 bg-accent text-accent-foreground font-semibold rounded-lg text-md hover:opacity-90 transition inline-block"
          >
            {dict.heroButton}
          </Link>
        </div>
<ScrollDownArrow target="#features" className="mt-15"/>

      </div>
    </section>
  )
}
