'use client'

import { useEffect, useState, useRef } from 'react'
import { usePathname } from 'next/navigation'
import { LoadingScreen } from '@/components/loading-screen'

export function LoadingProvider({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()
  const [loading, setLoading] = useState(true)
  const prevPath = useRef(pathname)

  // Initial load
  useEffect(() => {
    setLoading(true)
    const timer = setTimeout(() => setLoading(false), 1200)
    return () => clearTimeout(timer)
  }, [])

  // Route change detection
  useEffect(() => {
    if (prevPath.current !== pathname) {
      setLoading(true)
      prevPath.current = pathname
      const timer = setTimeout(() => setLoading(false), 800)
      return () => clearTimeout(timer)
    }
  }, [pathname])

  return (
    <>
      {loading && <LoadingScreen />}
      {children}
    </>
  )
}