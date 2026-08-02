"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"

import { cn } from "@/lib/utils"
import type { NavLink } from "@/components/shared/navigation-types"

export function NavLinks({
  links,
  className,
  linkClassName,
  activeLinkClassName,
}: {
  links: NavLink[]
  className?: string
  linkClassName?: string
  activeLinkClassName?: string
}) {
  const pathname = usePathname()

  return (
    <nav className={className}>
      {links.map((link, i) => {
        const active =
          pathname === link.href ||
          (link.href !== "/" && pathname.startsWith(link.href))
        return (
          <Link
            key={`${link.label}-${i}`}
            href={link.href}
            aria-current={active ? "page" : undefined}
            className={cn(linkClassName, active && activeLinkClassName)}
          >
            {link.label}
          </Link>
        )
      })}
    </nav>
  )
}
