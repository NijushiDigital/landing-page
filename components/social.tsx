'use client'

import { FaGithub, FaLinkedin, FaInstagram, FaYoutube } from 'react-icons/fa'
import { FaXTwitter } from 'react-icons/fa6'

const socials = [
  { name: 'GitHub', icon: FaGithub, url: 'https://github.com/NijushiDigital' },
  { name: 'X', icon: FaXTwitter, url: 'https://x.com/nijushidigital' },
  { name: 'Instagram', icon: FaInstagram, url: 'https://instagram.com/nijushidigital' },
]

export function SocialLinks() {
  return (
    <div className="flex items-center gap-4">
      {socials.map((social) => (
        <div key={social.name} className="relative group">
          <a
            href={social.url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-foreground hover:text-accent transition"
          >
            <social.icon className="w-5 h-5" />
          </a>

          {/* Tooltip */}
          <span className="absolute -top-9 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-md bg-foreground px-2 py-1 text-xs text-background opacity-0 group-hover:opacity-100 transition pointer-events-none">
            {social.name}
          </span>
        </div>
      ))}
    </div>
  )
}
