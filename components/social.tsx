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
    <div className="text-center space-y-6 px-4 py-15">
      <div className="space-y-2">
        <h3 className="text-3xl md:text-4xl font-bold text-foreground">Let's Connect</h3>
        <p className="text-muted-foreground max-w-md mx-auto">
          Follow us on social media for updates, news, and behind-the-scenes content.
        </p>
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
