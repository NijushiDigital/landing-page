'use client'

import { ChevronDown } from 'lucide-react'

type ScrollDownArrowProps = {
  /** CSS selector or element id of the section to scroll to. e.g. "#next-section" */
  target?: string
  /** Optional click handler if you want custom scroll logic instead of `target` */
  onClick?: () => void
  className?: string
  label?: string
}

export function ScrollDownArrow({
  target,
  onClick,
  className = '',
  label = 'Scroll down',
}: ScrollDownArrowProps) {
  const handleClick = () => {
    if (onClick) {
      onClick()
      return
    }
    if (target) {
      const el = document.querySelector(target)
      el?.scrollIntoView({ behavior: 'smooth', block: 'start' })
    } else {
      window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })
    }
  }

  return (
    <button
      type="button"
      onClick={handleClick}
      aria-label={label}
      className={`group cursor-pointer inline-flex flex-col items-center gap-2 text-muted-foreground transition-colors hover:text-orange-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-500 focus-visible:ring-offset-2 rounded-full ${className}`}
    >
      <span className="flex h-10 w-10 items-center justify-center rounded-full group-hover:border-orange-500 transition-colors animate-bounce motion-reduce:animate-none">
        <ChevronDown className="h-5 w-5" />
      </span>
    </button>
  )
}