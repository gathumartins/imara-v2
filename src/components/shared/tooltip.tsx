import type { ReactNode } from "react"

import { cn } from "@/lib/utils"

/**
 * Pure-CSS hover/focus tooltip (group-hover + group-focus-within) — no
 * useState/JS, in line with the rest of this codebase's interactivity.
 * Wrap any focusable trigger (button, link) with it.
 */
export function Tooltip({
  label,
  children,
  className,
}: {
  label: string
  children: ReactNode
  className?: string
}) {
  return (
    <span className={cn("group/tooltip relative inline-flex", className)}>
      {children}
      <span
        role="tooltip"
        className="pointer-events-none absolute -top-2 left-1/2 z-10 w-max max-w-56 -translate-x-1/2 -translate-y-full rounded-md bg-navy-900 px-3 py-1.5 text-center text-caption text-white opacity-0 shadow-lg transition-opacity duration-150 group-hover/tooltip:opacity-100 group-focus-within/tooltip:opacity-100"
      >
        {label}
        <span className="absolute left-1/2 top-full size-2 -translate-x-1/2 -translate-y-1/2 rotate-45 bg-navy-900" />
      </span>
    </span>
  )
}
