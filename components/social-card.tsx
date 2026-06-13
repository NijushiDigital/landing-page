'use client'

import { useState } from 'react'
import { ArrowUpRight, ChevronDown } from 'lucide-react'
import type { SocialEntry } from '@/lib/socials-full'

export function SocialCard({ social }: { social: SocialEntry }) {
  const [open, setOpen] = useState(false)
  const hasMultiple = social.accounts.length > 1
const displayUrl = (url: string) => {
  const cleaned = url.replace(/^https?:\/\/(www\.)?/, '')

  if (cleaned.startsWith('wa.me/')) {
    return '+' + cleaned.replace('wa.me/', '')
  }

  return cleaned
}
  
  // Single account — render as a direct link card
  if (!hasMultiple) {
    const account = social.accounts[0]
    return (
      <a
        href={account.url}
        target="_blank"
        rel="noopener noreferrer"
        className="group bg-white border border-border rounded-lg p-6 flex items-center gap-4 hover:shadow-md hover:border-accent transition-all duration-300 min-w-0"
      >
        <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center shrink-0">
          <social.icon className="w-6 h-6 text-accent" />
        </div>
        <div className="flex-1 min-w-0">
          <h3 className="text-lg font-semibold text-foreground truncate">{social.name}</h3>
          <p className="text-sm text-muted-foreground truncate">{displayUrl(account.url)}</p>
        </div>
        <ArrowUpRight className="w-5 h-5 text-muted-foreground shrink-0 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-accent" />
      </a>
    )
  }

  // Multiple accounts — render as an expandable dropdown card
  return (
    <div
      className={`bg-white border rounded-lg transition-all duration-300 min-w-0 ${
        open ? 'border-accent shadow-md' : 'border-border'
      }`}
    >
      <button
        onClick={() => setOpen((prev) => !prev)}
        className="w-full p-6 flex items-center gap-4 text-left min-w-0"
        aria-expanded={open}
      >
        <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center shrink-0">
          <social.icon className="w-6 h-6 text-accent" />
        </div>
        <div className="flex-1 min-w-0">
          <h3 className="text-lg font-semibold text-foreground truncate">{social.name}</h3>
          <p className="text-sm text-muted-foreground">{social.accounts.length} accounts</p>
        </div>
        <ChevronDown
          className={`w-5 h-5 text-muted-foreground shrink-0 transition-transform duration-300 ${
            open ? 'rotate-180 text-accent' : ''
          }`}
        />
      </button>

      <div
        className={`overflow-hidden transition-all ease-in-out duration-300 ${
          open ? 'max-h-96' : 'max-h-0'
        }`}
      >
        <div className="border-t border-border px-6">
          {social.accounts.map((account, i) => (
            <a
              key={account.url}
              href={account.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`group flex items-center justify-between gap-4 py-3 min-w-0 ${
                i < social.accounts.length - 1 ? 'border-b border-border' : ''
              } hover:text-accent transition-colors duration-200 ${
                open ? 'animate-in fade-in slide-in-from-top-2 fill-mode-backwards' : ''
              }`}
              style={{ animationDelay: `${i * 60}ms`, animationDuration: '250ms' }}
            >
              <div className="min-w-0">
                <p className="text-sm font-medium text-foreground group-hover:text-accent truncate">
                  {account.label}
                </p>
                <p className="text-xs text-muted-foreground truncate">{displayUrl(account.url)}</p>
              </div>
              <ArrowUpRight className="w-4 h-4 text-muted-foreground shrink-0 group-hover:text-accent transition-all duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
            </a>
          ))}
        </div>
      </div>
    </div>
  )
}
