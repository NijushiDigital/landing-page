import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Social Media',
  description: 'Official social media accounts of Nijushi Digital.',
}

export default function SocialLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
