'use client'

import { useEffect } from 'react'
import { usePathname, useRouter } from 'next/navigation'
import { defaultLocale, getLocalizedPath, isValidLocale, type Locale } from '@/lib/i18n'

export function LocaleBootstrap() {
  const pathname = usePathname()
  const router = useRouter()

  useEffect(() => {
    const applyLocale = async () => {
      if (typeof window === 'undefined') return

      const stored = window.localStorage.getItem('preferred-locale')
      if (stored && isValidLocale(stored)) {
        const nextLocale = stored as Locale
        const currentLocale = pathname.split('/').filter(Boolean)[0]
        if (currentLocale && currentLocale !== nextLocale) {
          router.replace(getLocalizedPath(pathname, nextLocale))
        }
        return
      }

      const hostname = window.location.hostname
      const isLocalhost = ['localhost', '127.0.0.1', '::1', '[::1]'].includes(hostname)

      if (isLocalhost) {
        const browserLocale = navigator.language?.toLowerCase() ?? ''
        const inferredLocale: Locale = browserLocale.startsWith('id') ? 'id' : 'en'
        window.localStorage.setItem('preferred-locale', inferredLocale)
        document.cookie = `NEXT_LOCALE=${inferredLocale}; path=/; max-age=${60 * 60 * 24 * 365}; SameSite=Lax`

        const currentLocale = pathname.split('/').filter(Boolean)[0]
        if (currentLocale && currentLocale !== inferredLocale) {
          router.replace(getLocalizedPath(pathname, inferredLocale))
        }
        return
      }

      try {
        const response = await fetch('https://ipapi.co/json/', { cache: 'no-store' })
        if (!response.ok) throw new Error('ip lookup failed')
        const data = await response.json()
        const inferredLocale: Locale = data?.country_code === 'ID' ? 'id' : defaultLocale
        window.localStorage.setItem('preferred-locale', inferredLocale)
        document.cookie = `NEXT_LOCALE=${inferredLocale}; path=/; max-age=${60 * 60 * 24 * 365}; SameSite=Lax`

        console.log('Inferred locale from IP:', inferredLocale)
        const currentLocale = pathname.split('/').filter(Boolean)[0]
        if (currentLocale && currentLocale !== inferredLocale) {
          router.replace(getLocalizedPath(pathname, inferredLocale))
        }
      } catch {
        const fallbackLocale: Locale = navigator.language?.toLowerCase().startsWith('id') ? 'id' : defaultLocale
        window.localStorage.setItem('preferred-locale', fallbackLocale)
        document.cookie = `NEXT_LOCALE=${fallbackLocale}; path=/; max-age=${60 * 60 * 24 * 365}; SameSite=Lax`

        const currentLocale = pathname.split('/').filter(Boolean)[0]
        if (currentLocale && currentLocale !== fallbackLocale) {
          router.replace(getLocalizedPath(pathname, fallbackLocale))
        }
      }
    }

    void applyLocale()
  }, [pathname, router])

  return null
}
