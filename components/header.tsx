'use client'

import { useEffect, useLayoutEffect, useState } from 'react'
import { usePathname, useRouter } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'
import { Menu, Moon, Sun, X } from 'lucide-react'
import ReactCountryFlag from "react-country-flag"
import {
  getLocaleFromPathname,
  getLocalizedPath,
  getLocaleLabel,
  type Locale,
} from '@/lib/i18n'
import { RxGlobe2 } from "react-icons/rx";

const MOBILE_MENU_ANIM_MS = 300

type HeaderProps = {
  locale?: Locale
}

export function Header({ locale }: HeaderProps) {
  const pathname = usePathname()
  const router = useRouter()
  const resolvedLocale = locale ?? getLocaleFromPathname(pathname)
  const [isOpen, setIsOpen] = useState(false)
  const [isClosing, setIsClosing] = useState(false)
  const [theme, setTheme] = useState<'light' | 'dark'>('light')
  const [scrolled, setScrolled] = useState(false)
  // Set initial scroll state synchronously before first paint so no
  // transition runs on mount.  No skipTransition needed — the class
  // only changes when the user actually scrolls past the threshold.
  useLayoutEffect(() => {
    setScrolled(window.scrollY > 24)
  }, [pathname])

  useEffect(() => {
    let ticking = false

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setScrolled(window.scrollY > 24)
          ticking = false
        })
        ticking = true
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks =
    resolvedLocale === 'id'
      ? [
          { name: 'Beranda', href: '/' },
          { name: 'Produk', href: '/product' },
          { name: 'Tentang Perusahaan', href: '/about' },
        ]
      : [
          { name: 'Home', href: '/' },
          { name: 'Product', href: '/product' },
          { name: 'About Company', href: '/about' },
        ]

  const openMenu = () => {
    setIsClosing(false)
    setIsOpen(true)
  }

  const closeMenu = () => {
    setIsClosing(true)
    setTimeout(() => {
      setIsOpen(false)
      setIsClosing(false)
    }, MOBILE_MENU_ANIM_MS)
  }

  const switchLanguage = () => {
    const nextLocale = resolvedLocale === 'id' ? 'en' : 'id'

    if (typeof window !== 'undefined') {
      localStorage.setItem('preferred-locale', nextLocale)
      document.cookie = `NEXT_LOCALE=${nextLocale}; path=/; max-age=${60 * 60 * 24 * 365}; SameSite=Lax`
    }

    router.push(getLocalizedPath(pathname, nextLocale))
    closeMenu()
  }

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

    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [isOpen])

  return (
  <>
    <header
      className={`sticky z-50 px-3 transition-all duration-200 ease-in-out ${
        scrolled
          ? 'top-3 w-[calc(100%-1.5rem)] max-w-7xl mx-auto rounded-full border border-border bg-background/80 backdrop-blur-md shadow-lg'
          : 'top-0 w-full max-w-full mx-auto rounded-none border border-transparent bg-background/0 backdrop-blur-md shadow-none'
      }`}
    >
      <div
        className={`mx-auto grid grid-cols-[1fr_auto_1fr] items-center transition-all duration-300 ease-in-out ${
          scrolled ? 'max-w-7xl px-4 sm:px-6 py-3' : 'max-w-full md:max-w-7xl px-4 sm:px-5 md:px-7 py-5'
        }`}
      >
          <Link href={getLocalizedPath('/', resolvedLocale)} className="justify-self-start min-w-0">
            <div className="flex items-center gap-2 sm:gap-3 min-w-0">
              <Image
                src="/logo.png"
                alt="Nijushi Digital Logo"
                width={48}
                height={48}
                className="w-7 h-7 sm:w-8 sm:h-8 shrink-0"
              />
              <span className="text-xs sm:text-md md:text-xl font-bold text-foreground whitespace-nowrap truncate">Nijushi Digital</span>
            </div>
          </Link>

          <nav
            className={`hidden lg:flex items-center justify-self-center transition-all duration-300 ease-in-out ${
              scrolled ? 'gap-4' : 'gap-6'
            }`}
          >
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={getLocalizedPath(link.href, resolvedLocale)}
                className="group relative inline-block whitespace-nowrap text-foreground py-1"
              >
                {link.name}
                <span className="pointer-events-none absolute left-1/2 bottom-0 h-[1.5px] w-full origin-center -translate-x-1/2 scale-x-0 bg-accent transition-transform duration-300 ease-out group-hover:scale-x-100" />
              </Link>
            ))}
          </nav>

          <div
            className={`hidden lg:flex items-center justify-self-end transition-all duration-300 ease-in-out ${
              scrolled ? 'gap-4' : 'gap-4'
            }`}
          >

            <button
              type="button"
              onClick={switchLanguage}
              className="text-lg cursor-pointer font-medium text-muted-foreground hover:text-foreground border border-border rounded-2xl transition"
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


            <Link
              href={getLocalizedPath('/social', resolvedLocale)}
              className="px-4 py-2 rounded-md bg-orange-500 hover:bg-orange-600 text-white font-medium transition-colors duration-200 whitespace-nowrap"
            >
              {resolvedLocale === 'id' ? 'Hubungi Kami' : 'Contact Us'}
            </Link>
            
            
          </div>

          <div className="flex items-center gap-2 lg:hidden justify-self-end col-start-3 min-w-0 shrink-0">
            <button
              type="button"
              onClick={switchLanguage}
              className="text-xs sm:text-sm md:text-lg font-medium text-muted-foreground hover:text-foreground border border-border rounded-2xl transition shrink-0"
            >
              <div className="px-2 sm:px-3">
              {resolvedLocale === 'id' ? (
                <>
                <div className="flex items-center gap-1 sm:gap-2">
                <ReactCountryFlag countryCode="US" className="" svg />
                <span>EN</span>
                </div>
                </>
              ) : (
                <>
                <div className="flex items-center gap-1 sm:gap-2">
                <ReactCountryFlag countryCode="ID" className="" svg />
                <span>ID</span>
                </div>
                </>
              )}
              </div>
            </button>

            <button
              onClick={openMenu}
              className="p-2 -mr-2 text-foreground cursor-pointer hover:text-accent transition-colors duration-300 shrink-0"
              aria-label="Open menu"
            >
              <Menu className="w-7 h-7" />
            </button>
          </div>
        </div>
      </header>

      {isOpen && (
        <div className="lg:hidden fixed inset-0 z-50">
          <div
            className={`absolute inset-0 bg-black/50 backdrop-blur-sm duration-300 ${
              isClosing ? 'animate-out fade-out' : 'animate-in fade-in'
            }`}
            onClick={closeMenu}
          />

          <div
            className={`absolute right-0 top-0 h-full w-[80%] max-w-sm bg-background border-l border-border shadow-2xl flex flex-col duration-300 fill-mode-forwards overflow-hidden ${
              isClosing
                ? 'animate-out slide-out-to-right ease-in'
                : 'animate-in slide-in-from-right ease-out'
            }`}
          >
            <div className="flex items-center justify-between px-6 py-5 border-b border-border shrink-0">
              <div className="flex items-center gap-3">
                <Image
                  src="/logo.png"
                  alt="Nijushi Digital Logo"
                  width={48}
                  height={48}
                  className="w-7 h-7"
                />
                <span className="text-base font-bold text-foreground">Nijushi Digital</span>
              </div>
              <button
                onClick={closeMenu}
                className="p-2 -mr-2 text-foreground hover:rotate-90 transition-transform duration-300 cursor-pointer hover:text-accent transition-colors duration-300"
                aria-label="Close menu"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            <nav className="flex flex-col px-6 py-6 overflow-y-auto flex-1">
              {navLinks.map((link, index) => (
                <Link
                  key={link.name}
                  href={getLocalizedPath(link.href, resolvedLocale)}
                  onClick={closeMenu}
                  className={`text-lg font-medium text-foreground py-4 border-b border-border hover:text-accent hover:pl-2 transition-all duration-300 fill-mode-backwards ${
                    isClosing
                      ? 'animate-out fade-out slide-out-to-right-8'
                      : 'animate-in fade-in slide-in-from-right-8'
                  }`}
                  style={{
                    animationDelay: isClosing
                      ? `${(navLinks.length - index - 1) * 60}ms`
                      : `${100 + index * 80}ms`,
                    animationDuration: '300ms',
                  }}
                >
                  {link.name}
                </Link>
              ))}

              <Link
                href={getLocalizedPath('/social', resolvedLocale)}
                onClick={closeMenu}
                className={`mt-6 text-center text-lg font-semibold text-white bg-orange-500 hover:bg-orange-600 py-3 rounded-md transition-colors duration-200 fill-mode-backwards ${
                  isClosing
                    ? 'animate-out fade-out slide-out-to-right-8'
                    : 'animate-in fade-in slide-in-from-right-8'
                }`}
                style={{
                  animationDelay: isClosing ? '0ms' : `${100 + navLinks.length * 80}ms`,
                  animationDuration: '300ms',
                }}
              >
                {resolvedLocale === 'id' ? 'Hubungi Kami' : 'Contact Us'}
              </Link>

            </nav>
          </div>
        </div>
      )}
    </>
  )
}