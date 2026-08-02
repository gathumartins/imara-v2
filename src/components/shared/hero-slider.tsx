import Image from "next/image"

import { cn } from "@/lib/utils"

export interface HeroSlide {
  /** Path to the slide image (e.g. "/hero.webp"). */
  src: string
  /** Accessible description of the image. Leave empty if purely decorative. */
  alt?: string
  /**
   * Tailwind classes controlling the static crop/pan (e.g. `object-[20%_50%]`)
   * for this slide. Zoom is handled separately by the generated per-slide
   * animation — don't add `scale-*` here, it'll be overridden every frame.
   */
  frame?: string
}

interface HeroSliderProps {
  slides: HeroSlide[]
  /** Seconds each slide stays visible before crossfading to the next. */
  secondsPerSlide?: number
  className?: string
  children?: React.ReactNode
}

/**
 * Infinite-loop crossfade slider with clickable dots — no useState/useEffect.
 * Autoplay is driven by per-slide @keyframes (percentage-positioned within
 * one shared cycle). Clicking a dot checks a hidden radio for that slide;
 * a `:has()` rule then pauses+hides every slide's animation and a higher-
 * specificity id-selector rule shows just the checked one — same "checkbox
 * hack" family as the testimonial carousel and mobile menu, extended so
 * manual navigation can override a running animation. No radio is checked
 * by default, so autoplay runs freely until the first click, then manual
 * control takes over (the same trade-off most carousel libraries make).
 */
export function HeroSlider({
  slides,
  secondsPerSlide = 6,
  className,
  children,
}: HeroSliderProps) {
  const n = slides.length
  const duration = n * secondsPerSlide
  const fade = Math.min(4, 100 / n / 4)

  const css = slides
    .map((_, i) => {
      const start = (i / n) * 100
      const end = ((i + 1) / n) * 100
      const fadeInEnd = Math.min(start + fade, end)
      const fadeOutStart = Math.max(end - fade, start)
      // Slide 0 is what's on screen the instant the page loads, so it must
      // be fully opaque and unzoomed at 0% — fading it in from nothing here
      // (like every other slide does at its own "start") produced a brief
      // blank flash on load that read as a slow-loading hero image. Every
      // other transition still crossfades; only the loop seam (last slide
      // -> slide 0) is a hard cut now, which is far less noticeable than a
      // flash on first paint. A slow continuous scale (Ken Burns) is layered
      // onto the same keyframes so each slide keeps drifting through its
      // own crossfade instead of blending between two static crops, which
      // was reading as an abrupt "jump" rather than a smooth transition.
      const fadeKeyframe =
        i === 0
          ? `
@keyframes hero-fade-${i} {
  0% { opacity: 1; transform: scale(1); }
  ${fadeOutStart}% { opacity: 1; transform: scale(1.06); }
  ${end}%, 100% { opacity: 0; transform: scale(1.08); }
}`
          : `
@keyframes hero-fade-${i} {
  0%, ${start}% { opacity: 0; transform: scale(1); }
  ${fadeInEnd}% { opacity: 1; transform: scale(1.02); }
  ${fadeOutStart}% { opacity: 1; transform: scale(1.06); }
  ${end}%, 100% { opacity: 0; transform: scale(1.08); }
}`
      return `
${fadeKeyframe}
@keyframes hero-dot-${i} {
  0%, ${start}% { width: 6px; background-color: color-mix(in oklch, var(--imara-white) 50%, transparent); }
  ${fadeInEnd}% { width: 32px; background-color: var(--imara-gold-600); }
  ${fadeOutStart}% { width: 32px; background-color: var(--imara-gold-600); }
  ${end}%, 100% { width: 6px; background-color: color-mix(in oklch, var(--imara-white) 50%, transparent); }
}
.hero-slide-${i} { animation: hero-fade-${i} ${duration}s infinite ease-in-out; will-change: opacity, transform; }
.hero-dots label[for="hero-radio-${i}"] { animation: hero-dot-${i} ${duration}s infinite ease-in-out; }
.hero-slider-root:hover .hero-slide-${i} { animation-play-state: paused; }
.hero-slider-root:hover .hero-dots label[for="hero-radio-${i}"] { animation-play-state: paused; }
#hero-radio-${i}:checked ~ .hero-slides .hero-slide-${i} { animation: none; opacity: 1; transform: scale(1); }
#hero-radio-${i}:checked ~ .hero-dots label[for="hero-radio-${i}"] { animation: none; width: 32px; background-color: var(--imara-gold-600); }
@media (prefers-reduced-motion: reduce) {
  .hero-slide-${i} { animation: none; opacity: ${i === 0 ? 1 : 0}; transform: none; }
  .hero-dots label[for="hero-radio-${i}"] {
    animation: none;
    width: ${i === 0 ? "32px" : "6px"};
    background-color: ${i === 0 ? "var(--imara-gold-600)" : "color-mix(in oklch, var(--imara-white) 50%, transparent)"};
  }
}`
    })
    .join("\n")

  return (
    <div className={cn("hero-slider-root relative isolate overflow-hidden", className)}>
      {n > 1 && (
        <style>{`
${css}
.hero-slider-root:has(input[name="hero-radio"]:checked) .hero-slide {
  animation: none;
  opacity: 0;
}
.hero-slider-root:has(input[name="hero-radio"]:checked) .hero-dots label {
  animation: none;
  width: 6px;
  background-color: color-mix(in oklch, var(--imara-white) 50%, transparent);
}`}</style>
      )}

      {n > 1 &&
        slides.map((_, i) => (
          <input
            key={i}
            type="radio"
            name="hero-radio"
            id={`hero-radio-${i}`}
            className="sr-only"
          />
        ))}

      <div aria-hidden className="hero-slides absolute inset-0">
        {slides.map((slide, i) => (
          <Image
            key={slide.src + i}
            src={slide.src}
            alt={slide.alt ?? ""}
            fill
            priority={i === 0}
            sizes="100vw"
            className={cn(
              "hero-slide object-cover",
              slide.frame,
              n > 1 ? `hero-slide-${i}` : "opacity-100"
            )}
          />
        ))}
        <div className="absolute inset-0 bg-hero-overlay" />
      </div>

      <div className="relative">{children}</div>

      {n > 1 && (
        <div className="hero-dots absolute inset-x-0 bottom-8 z-10 flex items-center justify-center gap-2">
          {slides.map((_, i) => (
            <label
              key={i}
              htmlFor={`hero-radio-${i}`}
              aria-label={`Show slide ${i + 1} of ${n}`}
              className="h-1.5 w-1.5 cursor-pointer rounded-full bg-white/50 transition-all hover:bg-white/70"
            />
          ))}
        </div>
      )}
    </div>
  )
}
