'use client'

import { useEffect, useState } from 'react'
import { usePathname, useRouter } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'
import { Menu, Moon, Sun, X } from 'lucide-react'
import {
  getLocaleFromPathname,
  getLocalizedPath,
  getLocaleLabel,
  type Locale,
} from '@/lib/i18n'

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

  const navLinks =
    resolvedLocale === 'id'
      ? [
          { name: 'Beranda', href: '/' },
          { name: 'Proyek', href: '/project' },
          { name: 'Tentang Perusahaan', href: '/about' },
        ]
      : [
          { name: 'Home', href: '/' },
          { name: 'Project', href: '/project' },
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
    <header className="bg-background border-b border-border sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-5 flex items-center justify-between">
        <Link href={getLocalizedPath('/', resolvedLocale)}>
          <div className="flex items-center gap-3">
            <Image
              src="/logo.png"
              alt="Nijushi Digital Logo"
              width={48}
              height={48}
              className="w-8 h-8"
            />
            <span className="text-xl font-bold text-foreground">Nijushi Digital</span>
          </div>
        </Link>

        <nav className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={getLocalizedPath(link.href, resolvedLocale)}
              className="text-muted-foreground hover:text-foreground transition"
            >
              {link.name}
            </Link>
          ))}

          <Link
            href={getLocalizedPath('/social', resolvedLocale)}
            className="px-4 py-2 rounded-md bg-orange-500 hover:bg-orange-600 text-white font-medium transition-colors duration-200"
          >
            {resolvedLocale === 'id' ? 'Hubungi Kami' : 'Contact Us'}
          </Link>
          <button
            type="button"
            onClick={switchLanguage}
            className="text-sm font-medium text-muted-foreground hover:text-foreground transition"
          >
            {resolvedLocale === 'id' ? 'EN' : 'ID'}
          </button>
          <button
            type="button"
            onClick={toggleTheme}
            className="rounded-full border border-border p-2 text-foreground hover:bg-accent/10 transition"
            aria-label="Toggle dark mode"
          >
            {theme === 'dark' ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
          </button>
        </nav>

        <div className="flex items-center gap-2 md:hidden">
          <button
            type="button"
            onClick={toggleTheme}
            className="rounded-full border border-border p-2 text-foreground hover:bg-accent/10 transition"
            aria-label="Toggle dark mode"
          >
            {theme === 'dark' ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
          </button>
          <button
            onClick={openMenu}
            className="p-2 -mr-2 text-foreground"
            aria-label="Open menu"
          >
            <Menu className="w-7 h-7" />
          </button>
        </div>

          
      </div>

      {isOpen && (
        <div className="md:hidden fixed inset-0 z-50">
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
                className="p-2 -mr-2 text-foreground hover:rotate-90 transition-transform duration-300"
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

              <button
                type="button"
                onClick={switchLanguage}
                className={`mt-4 text-left text-lg font-medium text-foreground py-4 border-b border-border hover:text-accent hover:pl-2 transition-all duration-300 fill-mode-backwards ${
                  isClosing
                    ? 'animate-out fade-out slide-out-to-right-8'
                    : 'animate-in fade-in slide-in-from-right-8'
                }`}
                style={{
                  animationDelay: isClosing ? '0ms' : `${100 + navLinks.length * 80}ms`,
                  animationDuration: '300ms',
                }}
              >
                {getLocaleLabel(resolvedLocale)}
              </button>

              <button
                type="button"
                onClick={toggleTheme}
                className={`mt-4 flex items-center gap-3 text-left text-lg font-medium text-foreground py-4 border-b border-border hover:text-accent hover:pl-2 transition-all duration-300 fill-mode-backwards ${
                  isClosing
                    ? 'animate-out fade-out slide-out-to-right-8'
                    : 'animate-in fade-in slide-in-from-right-8'
                }`}
                style={{
                  animationDelay: isClosing ? '0ms' : `${100 + navLinks.length * 80}ms`,
                  animationDuration: '300ms',
                }}
              >
                {theme === 'dark' ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
                {theme === 'dark' ? 'Light mode' : 'Dark mode'}
              </button>

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
    </header>
  )
}
