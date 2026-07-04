'use client'

import { socials } from '@/lib/socials'
import { getDictionary, type Locale } from '@/lib/i18n'

type SocialLinksProps = {
  locale?: Locale
}

export function SocialLinks({ locale = 'en' }: SocialLinksProps) {
  const dict = getDictionary(locale).home

  return (
    <div className="text-center px-4 py-15">
      <div className="text-center mb-16 space-y-4">
        <h3 className="text-4xl md:text-5xl font-bold text-foreground">{dict.socialTitle}</h3>
        <p className="text-md text-muted-foreground max-w-xl mx-auto">{dict.socialDescription}</p>
      </div>

      <div className="flex flex-wrap items-center justify-center gap-6 md:gap-10">
        {socials.map((social) => (
          <a
            key={social.name}
            href={social.url}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-3 rounded-full border border-border px-6 py-3 text-foreground transition-all duration-300 hover:text-accent hover:border-accent hover:scale-105 hover:-translate-y-1 hover:shadow-lg"
          >
            <social.icon className="w-6 h-6 transition-transform duration-300 group-hover:rotate-6" />
            <span className="text-base font-medium">{social.name}</span>
          </a>
        ))}
      </div>
    </div>
  )
}
