"use client"
import Link from 'next/link'
import Image from 'next/image'
import { getDictionary, getLocaleFromPathname, getLocalizedPath, type Locale } from '@/lib/i18n'
import { useEffect, useState } from 'react'

import { Menu, Moon, Sun, X } from 'lucide-react'
import { usePathname, useRouter } from 'next/dist/client/components/navigation'

import ReactCountryFlag from "react-country-flag"

type FooterProps = {
  locale?: Locale
}

export function Footer({ locale = 'en' }: FooterProps) {
  
    const [theme, setTheme] = useState<'light' | 'dark'>('light')
  const dict = getDictionary(locale).footer

  
    const toggleTheme = () => {
      const nextTheme = theme === 'dark' ? 'light' : 'dark'
      setTheme(nextTheme)
  
      if (typeof window !== 'undefined') {
        document.documentElement.classList.toggle('dark', nextTheme === 'dark')
        document.documentElement.setAttribute('data-theme', nextTheme)
        document.documentElement.style.colorScheme = nextTheme
        localStorage.setItem('theme', nextTheme)
      }
    }
  
    useEffect(() => {
      if (typeof window !== 'undefined') {
        const savedTheme = localStorage.getItem('theme') as 'light' | 'dark' | null
        const initialTheme = savedTheme === 'dark' || savedTheme === 'light'
          ? savedTheme
          : window.matchMedia('(prefers-color-scheme: dark)').matches
            ? 'dark'
            : 'light'
        setTheme(initialTheme)
        document.documentElement.classList.toggle('dark', initialTheme === 'dark')
        document.documentElement.setAttribute('data-theme', initialTheme)
        document.documentElement.style.colorScheme = initialTheme
      }
    }, [])

      const pathname = usePathname()
        const router = useRouter()
  const resolvedLocale = locale ?? getLocaleFromPathname(pathname)
  
 const switchLanguage = () => {
    const nextLocale = resolvedLocale === 'id' ? 'en' : 'id'

    if (typeof window !== 'undefined') {
      localStorage.setItem('preferred-locale', nextLocale)
      document.cookie = `NEXT_LOCALE=${nextLocale}; path=/; max-age=${60 * 60 * 24 * 365}; SameSite=Lax`
    }

    router.push(getLocalizedPath(pathname, nextLocale))
  }

  return (
    <>
      <footer className="border-t border-border bg-primary text-primary-foreground dark:bg-[#0f1426] dark:text-[#f5f7ff]">
        <div className="max-w-7xl mx-auto px-4 py-13">
          <div className="grid md:grid-cols-4 gap-12 mb-8">
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <Image src="/logo-nijushi.png" width={150} height={150} alt="Logo" />
              </div>
              <p className="text-sm text-primary-foreground/70 dark:text-[#c8d1e8]">{dict.description}</p>
            </div>

            <div>
              <h3 className="font-semibold mb-4 text-primary-foreground dark:text-[#f5f7ff]">{dict.company}</h3>
              <ul className="space-y-2 text-sm text-primary-foreground/70 dark:text-[#c8d1e8]">
                <li>
                  <Link href={getLocalizedPath('/', locale)} className="hover:text-primary-foreground transition dark:hover:text-[#f5f7ff]">
                    {dict.home}
                  </Link>
                </li>
                <li>
                  <Link href={getLocalizedPath('/about', locale)} className="hover:text-primary-foreground transition dark:hover:text-[#f5f7ff]">
                    {dict.about}
                  </Link>
                </li>
                <li>
                  <Link href={getLocalizedPath('/project', locale)} className="hover:text-primary-foreground transition dark:hover:text-[#f5f7ff]">
                    {dict.project}
                  </Link>
                </li>
                <li>
                  <a href="https://status.nijushidigital.biz.id" className="hover:text-primary-foreground transition dark:hover:text-[#f5f7ff]">
                    Status Monitoring
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4 text-primary-foreground dark:text-[#f5f7ff]">{dict.legal}</h3>
              <ul className="space-y-2 text-sm text-primary-foreground/70 dark:text-[#c8d1e8]">
                <li>
                  <Link href={getLocalizedPath('/privacy', locale)} className="hover:text-primary-foreground transition dark:hover:text-[#f5f7ff]">
                    {dict.privacy}
                  </Link>
                </li>
                <li>
                  <Link href={getLocalizedPath('/terms', locale)} className="hover:text-primary-foreground transition dark:hover:text-[#f5f7ff]">
                    {dict.terms}
                  </Link>
                </li>
                <li>
                  <Link href={getLocalizedPath('/cookie-policy', locale)} className="hover:text-primary-foreground transition dark:hover:text-[#f5f7ff]">
                    {dict.cookiePolicy}
                  </Link>
                </li>
                <li>
                  <Link href={getLocalizedPath('/service-fee', locale)} className="hover:text-primary-foreground transition dark:hover:text-[#f5f7ff]">
                    {dict.servicesFee}
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <ul>
                <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={toggleTheme}
              className="rounded-full border border-border p-2 text-white hover:bg-accent/10 transition shrink-0"
              aria-label="Toggle dark mode"
            >
              {theme === 'dark' ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
            </button>

            <button
                          type="button"
                          onClick={switchLanguage}
                          className="text-lg font-medium text-muted-foreground hover:text-foreground border border-border rounded-2xl transition"
                        >
                          <div className="px-3">
                          {resolvedLocale === 'id' ? (
                            <>
                            <div className="flex items-center gap-2">
                            <ReactCountryFlag countryCode="US" className="" svg />
                            <span>EN</span>
                            </div>
                            </>
                          ) : (
                            <>
                            <div className="flex items-center gap-2">
                            <ReactCountryFlag countryCode="ID" className="" svg />
                            <span>ID</span>
                            </div>
                            </>
                          )}
                          </div>
                        </button>
            </div>
            </ul>
            </div>
          </div>
        </div>
      </footer>

      <footer className="bg-black text-white py-5 text-xs">
        <div className="max-w-5xl mx-auto flex flex-col items-center text-center gap-2">
          <p className="text-sm">{dict.copyright}</p>
          <div className="flex flex-wrap justify-center">
            <Link href="https://nijushidigital.biz.id">{dict.mainWebsite}</Link>
            <span className="mx-2">•</span>
            <Link href="https://nijushidigital.biz.id/about">{dict.aboutCompany}</Link>
          </div>
          <Image src="/logo-nijushi.png" width={80} height={80} alt="Logo" />
        </div>
      </footer>
    </>
  )
}
