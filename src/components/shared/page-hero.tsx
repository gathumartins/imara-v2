import Link from "next/link"
import { ChevronRight } from "lucide-react"

interface Crumb {
  label: string
  href?: string
}

/**
 * Shared navy hero band used at the top of every interior page: breadcrumb
 * + heading over a subtle grid texture. Compose the heading yourself
 * (line breaks, gold highlight span) and pass it as `title`.
 *
 * Pass `breadcrumbLabel` for the common "Home / X" case, or `breadcrumbs`
 * for deeper trails (e.g. "Home / Fellows / Cohort Roster") — items without
 * an `href` render as the current page.
 */
export function PageHero({
  breadcrumbLabel,
  breadcrumbs,
  eyebrow,
  title,
  titleClassName = "text-h1",
  className = "",
  align = "left",
  children,
}: {
  breadcrumbLabel?: string
  breadcrumbs?: Crumb[]
  eyebrow?: React.ReactNode
  title: React.ReactNode
  titleClassName?: string
  className?: string
  align?: "left" | "center"
  children?: React.ReactNode
}) {
  const crumbs = breadcrumbs ?? (breadcrumbLabel ? [{ label: breadcrumbLabel }] : [])

  return (
    <section
      className={`relative overflow-hidden bg-navy-900 bg-page-hero py-20 md:py-28 ${className}`}
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "repeating-linear-gradient(45deg, var(--imara-white) 0, var(--imara-white) 1px, transparent 1px, transparent 120px), repeating-linear-gradient(-45deg, var(--imara-white) 0, var(--imara-white) 1px, transparent 1px, transparent 120px)",
        }}
      />
      <div
        className={`container-page relative ${
          align === "center" ? "flex flex-col items-center text-center" : ""
        }`}
      >
        <nav
          aria-label="Breadcrumb"
          className="mb-6 flex items-center gap-2 text-caption text-white/70"
        >
          <Link href="/" className="transition-colors hover:text-white">
            Home
          </Link>
          {crumbs.map((crumb, i) => (
            <span key={crumb.label} className="flex items-center gap-2">
              <ChevronRight className="size-3.5" />
              {crumb.href && i < crumbs.length - 1 ? (
                <Link href={crumb.href} className="transition-colors hover:text-white">
                  {crumb.label}
                </Link>
              ) : (
                <span className="text-gold-700">{crumb.label}</span>
              )}
            </span>
          ))}
        </nav>
        {eyebrow}
        <h1
          className={`${titleClassName} text-white`}
          style={{ fontFamily: "var(--font-playfair)", fontWeight: 800 }}
        >
          {title}
        </h1>
        {children}
      </div>
    </section>
  )
}
