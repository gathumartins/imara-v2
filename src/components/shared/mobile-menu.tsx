"use client"

import Image from "next/image"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import { usePathname } from "next/navigation"

import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

interface MobileMenuProps {
  links: { label: string; href: string }[]
}

/**
 * CSS-only slide-in drawer — no useState/useEffect. A hidden checkbox
 * drives open/close entirely via the `peer-checked:` variant; `key={pathname}`
 * remounts (and so resets) the checkbox on navigation, which is what makes
 * the menu auto-close when a link is followed. Body-scroll lock is a plain
 * `body:has(#mobile-menu-toggle:checked)` rule in globals.css.
 */
export function MobileMenu({ links }: MobileMenuProps) {
  const pathname = usePathname()

  return (
    <div key={pathname}>
      <input type="checkbox" id="mobile-menu-toggle" className="peer hidden" />

      <label
        htmlFor="mobile-menu-toggle"
        aria-label="Open menu"
        className="flex size-10 cursor-pointer items-center justify-center text-white lg:hidden"
      >
        <Menu className="size-6" />
      </label>

      <div
        role="dialog"
        aria-label="Mobile navigation"
        className={cn(
          "pointer-events-none fixed inset-0 z-50 flex translate-x-full flex-col overflow-y-auto bg-blue-700 p-6 opacity-0 transition-[transform,opacity] duration-300 ease-out lg:hidden",
          "peer-checked:pointer-events-auto peer-checked:translate-x-0 peer-checked:opacity-100"
        )}
      >
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center">
            <Image src="/imara-logo.svg" alt="Imara Fellowship" width={92} height={42} />
          </Link>
          <label
            htmlFor="mobile-menu-toggle"
            aria-label="Close menu"
            className="flex size-10 cursor-pointer items-center justify-center text-white"
          >
            <X className="size-6" />
          </label>
        </div>

        <nav className="mt-10 flex flex-col gap-1">
          {links.map((link, i) => {
            const active =
              pathname === link.href ||
              (link.href !== "/" && pathname.startsWith(link.href))
            return (
              <Link
                key={`${link.label}-${i}`}
                href={link.href}
                aria-current={active ? "page" : undefined}
                className={cn(
                  "rounded-lg px-3 py-4 text-ui-bold transition-colors",
                  active
                    ? "text-gold-700"
                    : "text-blue-100 hover:bg-white/10 hover:text-white"
                )}
              >
                {link.label}
              </Link>
            )
          })}
        </nav>

        <div className="mt-auto flex flex-col gap-4 border-t border-white/15 pt-6">
          <Link
            href="/sign-in"
            className="text-center text-ui-medium text-blue-100 transition-colors hover:text-white"
          >
            Sign In
          </Link>
          <Button asChild variant="gold" size="md" className="w-full">
            <a href="#" target="_blank" rel="noopener noreferrer">Apply Now</a>
          </Button>
        </div>
      </div>
    </div>
  )
}
