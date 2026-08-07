import Link from "next/link"
import { ChevronRight, Play } from "lucide-react"

import { Button } from "@/components/ui/button"
import { HeroSlider, type HeroSlide } from "@/components/shared/hero-slider"
import { StatCounter } from "@/components/shared/stat-counter"
import type { HomeHeroCta, HomeHeroSection, HomeStatsSection } from "@/types/post"

const HERO_SLIDE_FRAMES = ["object-[50%_35%]", "object-[20%_50%]", "object-[80%_20%]"]

const DEFAULT_HERO_CTAS: HomeHeroCta[] = [
  { label: "Get In Touch", value: "/contacts" },
  { label: "Apply Now", value: "#" },
]

export function HeroSection({ hero, stats }: { hero?: HomeHeroSection | null; stats?: HomeStatsSection | null }) {
  const statItems = stats?.stats ?? []

  const ctaItems = hero?.ctas?.map((item) => item?.cta).filter((cta): cta is HomeHeroCta => Boolean(cta)) ?? []
  const heroCtas = ctaItems.length > 0 ? ctaItems : DEFAULT_HERO_CTAS

  const heroSlides: HeroSlide[] =
    hero?.heroimages
      ?.map((item) => item?.himage?.node?.mediaItemUrl)
      .filter((src): src is string => Boolean(src))
      .map((src, index) => ({
        src,
        alt: "Imara Fellows collaborating during a training session",
        frame: HERO_SLIDE_FRAMES[index % HERO_SLIDE_FRAMES.length],
      })) ?? []
  const slides = heroSlides.length > 0 ? heroSlides : [];

  return (
    <HeroSlider slides={slides} className="min-h-288.5">
      <div className="container-page flex min-h-288.5 flex-col items-center justify-center gap-10 pt-12 pb-24 text-center">
        <div className="flex max-w-4xl flex-col items-center gap-6">
          <div className="text-white text-h1 md:text-display [&_span]:text-gold-700 [&_br]:hidden md:[&_br]:inline-block" dangerouslySetInnerHTML={{ __html: hero?.newherotitle ?? "Imara Fellows" }} />
          <p className="max-w-2xl text-body-l text-blue-100">
            {hero?.herosubtitle ?? "Imara Fellows are a community of leaders committed to driving positive change in their communities and beyond."}
          </p>
        </div>

        <div className="flex flex-col items-center gap-4 sm:flex-row">
          {heroCtas.map((cta, index) => {
            const isPrimary = index === 0
            const href = cta.value ?? "#"
            const isExternal = /^https?:\/\//.test(href)

            return (
              <Button
                key={`${cta.label ?? "cta"}-${index}`}
                asChild
                variant={isPrimary ? "white" : "glass"}
                size="xl"
              >
                <Link href={href} {...(isExternal ? { target: "_blank", rel: "noopener noreferrer" } : {})}>
                  {isPrimary ? (
                    <>
                      {cta.label}
                      <ChevronRight className="size-4" />
                    </>
                  ) : (
                    <>
                      <span className="flex size-7 items-center justify-center rounded-full bg-white/20">
                        <Play className="size-3.5 fill-current" />
                      </span>
                      {cta.label}
                    </>
                  )}
                </Link>
              </Button>
            )
          })}
        </div>

        <div className="mt-6 grid w-full max-w-5xl grid-cols-2 divide-x divide-y divide-white/15 rounded-2xl border border-white/15 bg-white/10 backdrop-blur md:grid-cols-4 md:divide-y-0">
          {statItems.map((stat, index) => (
            <div key={stat.title ?? `stat-${index}`} className="flex flex-col gap-1 px-3 py-6">
              <StatCounter
                to={Number(stat.figures ?? 0)}
                suffix={stat.suffix ?? undefined}
                className="text-h2 text-white"
              />
              <span className="text-caption uppercase tracking-wide text-blue-100 md:whitespace-nowrap">
                {stat.title ?? "Stat"}
              </span>
            </div>
          ))}
        </div>
      </div>
    </HeroSlider>
  );
}
