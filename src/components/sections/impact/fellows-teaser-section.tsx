import Link from "next/link"
import { ArrowRight } from "lucide-react"

import { FeatureCard } from "@/components/shared/feature-card"

const FELLOW_CARDS = [
  {
    badge: "Health Policy",
    title: "Gladys Ndanu",
    description:
      "Promoted for her role in Universal Health Care, Muranga County — influenced by a youth baraza panel discussion.",
    href: "/fellows/profile",
  },
  {
    badge: "Academic Achievement",
    title: "Shadrack Osero",
    description:
      "DAAD Helmut Schmidt Scholar pursuing a Master's in Public Management at the University of Potsdam, addressing TVET policy gaps in Kericho.",
    href: "/fellows/profile",
  },
  {
    badge: "Global Policy",
    title: "Mathew Ndolo & Ivy Wandia Gathoni",
    description:
      "Pursued policy studies at UC Berkeley and the Geneva Graduate Institute, extending the fellowship's reach into global academic institutions.",
    href: "/fellows/profile",
  },
]

export function FellowsTeaserSection() {
  return (
    <section className="bg-gray-100 py-20 md:py-24">
      <div className="container-page flex flex-col gap-10">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <h2 className="text-h2 text-navy-900">Meet the Fellows</h2>
          <Link
            href="/fellows"
            className="flex items-center gap-1.5 text-ui-medium text-blue-700 hover:underline"
          >
            View All Fellows
            <ArrowRight className="size-4" />
          </Link>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {FELLOW_CARDS.map((fellow) => (
            <FeatureCard key={fellow.title} {...fellow} />
          ))}
        </div>
      </div>
    </section>
  )
}
