import { FaGithub, FaLinkedin, FaInstagram, FaWhatsapp } from 'react-icons/fa'
import { FaXTwitter } from 'react-icons/fa6'
import type { IconType } from 'react-icons'

export interface SocialAccount {
  /** Label shown when a platform has more than one account (e.g. department/division name) */
  label: string
  url: string
}

export interface SocialEntry {
  name: string
  icon: IconType
  /**
   * A platform can have more than one account (e.g. multiple WhatsApp numbers for
   * different departments). If there's only one account, it's rendered as a direct
   * link. If there's more than one, it's rendered as a dropdown listing each account.
   */
  accounts: SocialAccount[]
}

export const socials: SocialEntry[] = [
  {
    name: 'Nishia Customer Support',
    icon: FaWhatsapp,
    accounts: [
      { label: 'Customer Support', url: 'https://wa.me/6285163614050' },
      // Tambahkan akun WhatsApp lain di sini, contoh:
      // { label: 'Sales', url: 'https://wa.me/62xxxxxxxxxx' },
    ],
  },
  {
    name: 'GitHub',
    icon: FaGithub,
    accounts: [{ label: 'GitHub', url: 'https://github.com/NijushiDigital' }],
  },
  {
    name: 'X',
    icon: FaXTwitter,
    accounts: [{ label: 'X (Twitter)', url: 'https://x.com/nijushidigital' }],
  },
  {
    name: 'Instagram',
    icon: FaInstagram,
    accounts: [{ label: 'Instagram', url: 'https://instagram.com/nijushidigital' }],
  },
  {
    name: 'LinkedIn',
    icon: FaLinkedin,
    accounts: [{ label: 'LinkedIn', url: 'https://www.linkedin.com/company/nijushidigital/' }],
  },
]

/** Primary/default URL for a social entry — used where only a single link makes sense (e.g. header, homepage pills) */
export function getPrimaryUrl(social: SocialEntry): string {
  return social.accounts[0]?.url ?? '#'
}
