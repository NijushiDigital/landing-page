import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import './globals.css'

const geistSans = Geist({ variable: '--font-geist-sans', subsets: ['latin'] })
const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: {
    default: "Nijushi Digital",
    template: "%s | Nijushi Digital",
  },
  description: 'Nijushi Digital provides a wide range of digital services and goods to help everyone. Find #YourDecision with Nijushi Digital!',
  
  openGraph: {
  images: [
    {
      url: 'https://nijushidigital.biz.id/opengraph-image.png', // Must be an absolute URL
    },
  ],
  },
}

export const viewport: Viewport = {
  colorScheme: 'light',
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#F7F3EA' },
    { media: '(prefers-color-scheme: dark)', color: '#F7F3EA' },
  ],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable} bg-background`}>
      <body className="font-sans antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
