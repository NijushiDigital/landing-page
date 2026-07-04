'use client'

import Link from 'next/link'
import { useNavigate } from 'react-router-dom'
import { ArrowLeft, Home } from 'lucide-react'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'

export default function NotFound() {

  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col">
      <Header />

      <main className="flex-1 flex items-center justify-center px-4 py-20">
        <div className="max-w-xl w-full text-center space-y-8">
          <div className="space-y-4">
            <p className="text-sm font-semibold uppercase tracking-[0.35em] text-accent">404</p>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground">Page not found</h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              The page you are looking for does not exist or may have been moved.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <Link
              href="/"
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-accent px-6 py-3 font-semibold text-accent-foreground transition hover:opacity-90"
            >
              <Home className="h-4 w-4" />
              Back to Home
            </Link>
            <button
              type="button"
              onClick={() => window.history.back()}
              className="inline-flex items-center justify-center gap-2 rounded-lg border border-border px-6 py-3 font-semibold text-foreground transition hover:bg-accent/10"
            >
              <ArrowLeft className="h-4 w-4" />
              Go Back
            </button>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
