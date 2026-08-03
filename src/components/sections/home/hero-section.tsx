import Link from "next/link"
import { ChevronRight, Play } from "lucide-react"

import { Button } from "@/components/ui/button"
import { HeroSlider, type HeroSlide } from "@/components/shared/hero-slider"
import { StatCounter } from "@/components/shared/stat-counter"

const HERO_SLIDES: HeroSlide[] = [
  {
    src: "/hero.webp",
    alt: "Imara Fellows collaborating during a training session",
    frame: "object-[50%_35%]",
  },
  {
    src: "/hero.webp",
    alt: "Imara Fellows collaborating during a training session",
    frame: "object-[20%_50%]",
  },
  {
    src: "/hero.webp",
    alt: "Imara Fellows collaborating during a training session",
    frame: "object-[80%_20%]",
  },
]

const HERO_STATS = [
  { to: 100, suffix: "+", label: "Fellows Trained" },
  { to: 50, suffix: "+", label: "Public Participation Initiatives" },
  { to: 94, suffix: "%", label: "In Policy Roles" },
  { to: 10, suffix: "", label: "Counties in Kenya" },
]

export function HeroSection() {
  return (
    <HeroSlider slides={HERO_SLIDES} className="min-h-[1154px]">
      <div className="container-page flex min-h-[1154px] flex-col items-center justify-center gap-10 pt-12 pb-24 text-center">
        <div className="flex max-w-4xl flex-col items-center gap-6">
          <div className="[&_h1]:text-h1 [&_h1]:text-white [&_h1]:md:text-display [&_h1>span]:text-gold-700">
            <h1>
              Building a
              <br />
              <span>Community</span> of Young
              <br />
              Africa Policy Leaders
            </h1>
          </div>
          <p className="max-w-2xl text-body-l text-blue-100">
            A transformative fellowship empowering young Africans to drive
            systemic change through evidence-based policy, bold leadership, and
            continental solidarity.
          </p>
        </div>

        <div className="flex flex-col items-center gap-4 sm:flex-row">
          <Button asChild variant="white" size="xl">
            <a href="/contacts">
              Get In Touch
              <ChevronRight className="size-4" />
            </a>
          </Button>
          <Button asChild variant="glass" size="xl">
            <Link href="#" target="_blank" rel="noopener noreferrer">
              <span className="flex size-7 items-center justify-center rounded-full bg-white/20">
                <Play className="size-3.5 fill-current" />
              </span>
              Apply Now
            </Link>
          </Button>
        </div>

        <div className="mt-6 grid w-full max-w-5xl grid-cols-2 divide-x divide-y divide-white/15 rounded-2xl border border-white/15 bg-white/10 backdrop-blur md:grid-cols-4 md:divide-y-0">
          {HERO_STATS.map((stat) => (
            <div key={stat.label} className="flex flex-col gap-1 px-3 py-6">
              <StatCounter
                to={stat.to}
                suffix={stat.suffix}
                className="text-h2 text-white"
              />
              <span className="text-caption uppercase tracking-wide text-blue-100 md:whitespace-nowrap">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </HeroSlider>
  );
}
