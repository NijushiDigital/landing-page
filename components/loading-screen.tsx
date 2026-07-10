'use client'

import { useEffect, useState, useRef } from 'react'

type Stage = 'dom' | 'load' | 'fonts' | 'settle' | 'done'

export function LoadingScreen({ onFinish }: { onFinish?: () => void }) {
  const [progress, setProgress] = useState(0)
  const [exit, setExit] = useState(false)
  const [mounted, setMounted] = useState(false)
  const stageRef = useRef<Stage>('dom')
  const settledRef = useRef(false)

  // Fade-in on mount
  useEffect(() => {
    const raf = requestAnimationFrame(() => setMounted(true))
    return () => cancelAnimationFrame(raf)
  }, [])

  // Track real loading milestones
  useEffect(() => {
    // Stage 1: DOM ready
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', () => {
        stageRef.current = 'load'
        setProgress(30)
      })
    } else {
      stageRef.current = 'load'
      setProgress(30)
    }

    // Stage 2: Window load (images, stylesheets, etc.)
    if (document.readyState !== 'complete') {
      window.addEventListener('load', () => {
        stageRef.current = 'fonts'
        setProgress(70)
      })
    } else {
      stageRef.current = 'fonts'
      setProgress(70)
    }

    // Stage 3: Fonts loaded
    document.fonts.ready.then(() => {
      stageRef.current = 'settle'
      setProgress(90)
    })

    // Stage 4: Settle — give a moment for layout/paint
    const settleTimer = setTimeout(() => {
      if (!settledRef.current) {
        settledRef.current = true
        stageRef.current = 'done'
        setProgress(100)
      }
    }, 600)

    // Safety net: force complete after 5s
    const safetyTimer = setTimeout(() => {
      if (!settledRef.current) {
        settledRef.current = true
        stageRef.current = 'done'
        setProgress(100)
      }
    }, 5000)

    return () => {
      clearTimeout(settleTimer)
      clearTimeout(safetyTimer)
    }
  }, [])

  // Auto-exit after progress completes + fade-out delay
  useEffect(() => {
    if (progress >= 100) {
      const timer = setTimeout(() => {
        setExit(true)
        onFinish?.()
      }, 500)
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
              className="h-full rounded-full bg-accent transition-all duration-300 ease-out"
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