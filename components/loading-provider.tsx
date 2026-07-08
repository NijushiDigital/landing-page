'use client'

import { useEffect, useState, useRef } from 'react'
import { usePathname } from 'next/navigation'
import { LoadingScreen } from '@/components/loading-screen'

export function LoadingProvider({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()
  const [loading, setLoading] = useState(true)
  const prevPath = useRef(pathname)

  // Initial load — LoadingScreen calls onFinish when done
  useEffect(() => {
    // loading already true from useState
  }, [])

  // Route change detection
  useEffect(() => {
    if (prevPath.current !== pathname) {
      setLoading(true)
      prevPath.current = pathname
    }
  }, [pathname])

  return (
    <>
      {loading && <LoadingScreen onFinish={() => setLoading(false)} />}
      {children}
    </>
  )
}
