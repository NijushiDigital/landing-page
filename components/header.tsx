'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Menu, X, ChevronDown } from 'lucide-react'
import { socials } from '@/lib/socials'

const navLinks = [
  { name: 'Home', href: '/' },
  { name: 'Project', href: '/project' },
  { name: 'About Company', href: '/about' },
]

const MOBILE_MENU_ANIM_MS = 300

export function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [isClosing, setIsClosing] = useState(false)
  const [contactOpen, setContactOpen] = useState(false)
  const [mobileContactOpen, setMobileContactOpen] = useState(false)

  const openMenu = () => {
    setIsClosing(false)
    setIsOpen(true)
  }

  const closeMenu = () => {
    setIsClosing(true)
    setTimeout(() => {
      setIsOpen(false)
      setIsClosing(false)
      setMobileContactOpen(false)
    }, MOBILE_MENU_ANIM_MS)
  }

  // Lock body scroll when mobile menu is open
  useEffect(() => {
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
        <Link href="/">
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

        {/* Desktop navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-muted-foreground hover:text-foreground transition"
            >
              {link.name}
            </Link>
          ))}

          <div
            className="relative"
            onMouseEnter={() => setContactOpen(true)}
            onMouseLeave={() => setContactOpen(false)}
          >
            <button
              className="flex items-center gap-1 text-muted-foreground hover:text-foreground transition"
              onClick={() => setContactOpen((prev) => !prev)}
            >
              Contact Us
              <ChevronDown
                className={`w-4 h-4 transition-transform duration-300 ${contactOpen ? 'rotate-180' : ''}`}
              />
            </button>

            <div
              className={`absolute right-0 top-full pt-2 transition-all duration-300 ${
                contactOpen
                  ? 'opacity-100 translate-y-0 visible'
                  : 'opacity-0 -translate-y-2 invisible pointer-events-none'
              }`}
            >
              <div className="bg-card border border-border rounded-lg shadow-lg p-2 min-w-[220px] flex flex-col gap-1">
                {socials.map((social) => (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 px-3 py-2 rounded-md text-foreground hover:bg-accent hover:text-accent-foreground transition"
                  >
                    <social.icon className="w-4 h-4 shrink-0" />
                    <span className="text-sm font-medium">{social.name}</span>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </nav>

        {/* Mobile menu trigger */}
        <button
          onClick={openMenu}
          className="md:hidden p-2 -mr-2 text-foreground"
          aria-label="Open menu"
        >
          <Menu className="w-7 h-7" />
        </button>
      </div>

      {/* Mobile menu overlay */}
      {isOpen && (
        <div className="md:hidden fixed inset-0 z-50">
          {/* Backdrop */}
          <div
            className={`absolute inset-0 bg-black/50 backdrop-blur-sm duration-300 ${
              isClosing ? 'animate-out fade-out' : 'animate-in fade-in'
            }`}
            onClick={closeMenu}
          />

          {/* Sliding panel */}
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
                  href={link.href}
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

              <div
                className={`fill-mode-backwards ${
                  isClosing
                    ? 'animate-out fade-out slide-out-to-right-8'
                    : 'animate-in fade-in slide-in-from-right-8'
                }`}
                style={{
                  animationDelay: isClosing ? '0ms' : `${100 + navLinks.length * 80}ms`,
                  animationDuration: '300ms',
                }}
              >
                <button
                  onClick={() => setMobileContactOpen((prev) => !prev)}
                  className="flex items-center justify-between w-full text-lg font-medium text-foreground py-4 border-b border-border hover:text-accent transition-colors duration-300"
                >
                  Contact Us
                  <ChevronDown
                    className={`w-5 h-5 transition-transform duration-300 ${mobileContactOpen ? 'rotate-180' : ''}`}
                  />
                </button>

                <div
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${
                    mobileContactOpen ? 'max-h-[260px] opacity-100' : 'max-h-0 opacity-0'
                  }`}
                >
                  <div className="flex flex-col gap-1 py-2">
                    {socials.map((social, i) => (
                      <a
                        key={social.name}
                        href={social.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={closeMenu}
                        className={`flex items-center gap-3 py-3 pl-2 text-muted-foreground hover:text-foreground hover:pl-4 transition-all duration-300 ${
                          mobileContactOpen ? 'animate-in fade-in slide-in-from-right-4' : ''
                        }`}
                        style={{ animationDelay: `${i * 60}ms`, animationDuration: '300ms' }}
                      >
                        <social.icon className="w-5 h-5 shrink-0" />
                        <span className="text-base font-medium">{social.name}</span>
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </nav>
          </div>
        </div>
      )}
    </header>
  )
}
