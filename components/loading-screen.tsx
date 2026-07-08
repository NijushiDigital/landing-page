'use client'

import { useEffect, useState } from 'react'

export function LoadingScreen({ onFinish }: { onFinish?: () => void }) {
  const [progress, setProgress] = useState(0)
  const [exit, setExit] = useState(false)
  const [mounted, setMounted] = useState(false)

  // Fade-in on mount
  useEffect(() => {
    const raf = requestAnimationFrame(() => setMounted(true))
    return () => cancelAnimationFrame(raf)
  }, [])

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((p) => {
        if (p >= 100) {
          clearInterval(interval)
          return 100
        }
        // Ease: slow start, fast middle, slow end
        const inc = p < 30 ? 1.5 : p < 70 ? 3 : 1
        return Math.min(p + inc, 100)
      })
    }, 40)

    return () => clearInterval(interval)
  }, [])

  // Auto-exit after progress completes + delay, then notify parent
  useEffect(() => {
    if (progress >= 100) {
      const timer = setTimeout(() => {
        setExit(true)
        onFinish?.()
      }, 400)
      return () => clearTimeout(timer)
    }
  }, [progress, onFinish])

  if (exit) return null

  return (
    <div
      className={`fixed inset-0 z-[9999] flex items-center justify-center transition-opacity duration-500 ${
        progress >= 100 ? 'opacity-0' : mounted ? 'opacity-100' : 'opacity-0'
      }`}
    >
      {/* Animated gradient background */}
      <div className="absolute inset-0 bg-background">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(236,94,39,0.08)_0%,transparent_60%)] animate-pulse" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(26,31,77,0.06)_0%,transparent_50%)] dark:bg-[radial-gradient(ellipse_at_top_right,rgba(255,138,61,0.1)_0%,transparent_50%)]" />
      </div>

      {/* Content */}
      <div className="relative flex flex-col items-center gap-8">
        {/* Logo */}
        <div className="relative">
          {/* Glow ring */}
          <div className="absolute -inset-6 rounded-full bg-accent/10 blur-xl animate-pulse" />
          <div className="absolute -inset-3 rounded-full border border-accent/20 animate-[spin_4s_linear_infinite]" />

          {/* Logo image */}
          <div className="relative h-16 w-16 overflow-hidden rounded-2xl bg-accent/5 p-3 ring-1 ring-accent/20 backdrop-blur-sm">
            <img
              src="/logo-nijushi.png"
              alt="Nijushi"
              className="h-full w-full object-contain"
            />
          </div>
        </div>

        {/* Brand name */}
        <div className="flex flex-col items-center gap-1">
          <span className="text-lg font-semibold tracking-widest text-foreground/80">
            NIJUSHI
          </span>
          <span className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground/60">
            Digital Creative
          </span>
        </div>

        {/* Progress bar */}
        <div className="w-48 space-y-2">
          <div className="h-[2px] overflow-hidden rounded-full bg-accent/10">
            <div
              className="h-full rounded-full bg-accent transition-all duration-200 ease-out"
              style={{ width: `${progress}%` }}
            />
          </div>
          {/* Shimmer overlay */}
          <div
            className="relative h-[2px] -translate-y-2 overflow-hidden rounded-full"
            aria-hidden
          >
            <div
              className="absolute inset-0 w-1/2 translate-x-[-100%] animate-[shimmer_1.5s_infinite] bg-gradient-to-r from-transparent via-accent/30 to-transparent"
              style={{ left: `${progress}%` }}
            />
          </div>
          <p className="text-center text-[10px] tabular-nums tracking-widest text-muted-foreground/40">
            {Math.round(progress)}%
          </p>
        </div>
      </div>
    </div>
  )
}