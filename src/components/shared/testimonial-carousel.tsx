import Image from "next/image"
import { ChevronLeft, ChevronRight, Quote } from "lucide-react"

export interface Testimonial {
  quote: string
  name: string
  initials: string
  role: string
  cohortBadge: string
  /** Omit when no real photo exists yet — renders a gradient + initials placeholder instead. */
  photoSrc?: string
  photoAlt?: string
}

/**
 * Data-driven testimonial carousel — no useState/useEffect. Navigation
 * (dots + prev/next) is driven entirely by a hidden radio-per-slide group
 * (the "checkbox hack", extended to radios so only one is ever checked)
 * plus a small generated <style> block scoping visibility/active-state
 * rules to this instance's ids. Controls always render — even with a
 * single slide they're real, just inert (nowhere else to go).
 */
export function TestimonialCarousel({
  testimonials,
  id = "testimonial",
}: {
  testimonials: Testimonial[]
  /** Unique id prefix — pass a distinct value if this component appears more than once on a page. */
  id?: string
}) {
  const n = testimonials.length
  if (n === 0) return null

  // ID-selector specificity ensures these beat the base `.hidden` class on
  // each panel once its radio is checked — no inline styles needed (which
  // would otherwise always win over the stylesheet regardless of state).
  const css = testimonials
    .map(
      (_, i) => `
#${id}-radio-${i}:checked ~ .${id}-panels #${id}-panel-${i} { display: flex; }
#${id}-radio-${i}:checked ~ .${id}-panels .${id}-dots label[for="${id}-radio-${i}"] { width: 32px; background-color: var(--imara-gold-600); }`
    )
    .join("\n")

  return (
    <div className="relative">
      <style>{css}</style>

      {testimonials.map((_, i) => (
        <input
          key={i}
          type="radio"
          name={`${id}-radio`}
          id={`${id}-radio-${i}`}
          defaultChecked={i === 0}
          className="sr-only"
        />
      ))}

      <div className={`${id}-panels`}>
        {testimonials.map((t, i) => {
          const next = (i + 1) % n
          const prev = (i - 1 + n) % n
          return (
            <div
              key={t.name + i}
              id={`${id}-panel-${i}`}
              className="hidden flex-col items-center gap-10 md:flex-row md:items-center md:gap-16"
            >
              <div className="relative w-full max-w-[288px] shrink-0">
                <span className="absolute -top-3 left-6 z-10 rounded-full bg-gold-600 px-3 py-1 text-caption font-bold text-navy-900">
                  {t.cohortBadge}
                </span>
                <div
                  aria-hidden
                  className="absolute -bottom-3 -right-3 h-full w-full rounded-2xl border-2 border-white/20"
                />
                <div className="relative aspect-[9/10] overflow-hidden rounded-2xl shadow-lg">
                  {t.photoSrc ? (
                    <Image
                      src={t.photoSrc}
                      alt={t.photoAlt ?? t.name}
                      fill
                      sizes="288px"
                      className="object-cover"
                    />
                  ) : (
                    <div className="flex size-full items-center justify-center bg-gradient-to-br from-blue-500 to-navy-900">
                      <span className="text-h1 text-white/25">
                        {t.initials}
                      </span>
                    </div>
                  )}
                </div>
              </div>

              <div className="flex flex-1 flex-col gap-6">
                <Quote className="size-10 text-blue-300" strokeWidth={1.5} />
                <p className="text-h3 font-normal italic text-white">
                  &ldquo;{t.quote}&rdquo;
                </p>
                <div className="flex items-center gap-3">
                  <span className="flex size-12 shrink-0 items-center justify-center rounded-full bg-white text-ui-bold text-blue-700">
                    {t.initials}
                  </span>
                  <div>
                    <p className="text-ui-medium font-bold text-white">{t.name}</p>
                    <p className="text-caption text-blue-300">{t.role}</p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <label
                    htmlFor={`${id}-radio-${prev}`}
                    aria-label="Previous testimonial"
                    className="flex size-11 cursor-pointer items-center justify-center rounded-full border border-white/30 text-white transition-colors hover:bg-white/10"
                  >
                    <ChevronLeft className="size-4" />
                  </label>
                  <div className={`${id}-dots flex items-center gap-1.5`}>
                    {testimonials.map((_, dotIndex) => (
                      <label
                        key={dotIndex}
                        htmlFor={`${id}-radio-${dotIndex}`}
                        aria-label={`Show testimonial ${dotIndex + 1} of ${n}`}
                        className="h-1.5 w-1.5 cursor-pointer rounded-full bg-white/40 transition-all"
                      />
                    ))}
                  </div>
                  <label
                    htmlFor={`${id}-radio-${next}`}
                    aria-label="Next testimonial"
                    className="flex size-11 cursor-pointer items-center justify-center rounded-full border border-white/30 text-white transition-colors hover:bg-white/10"
                  >
                    <ChevronRight className="size-4" />
                  </label>
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
