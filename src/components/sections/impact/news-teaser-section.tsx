import Link from "next/link"
import { ArrowRight } from "lucide-react"

import { FeatureCard } from "@/components/shared/feature-card"

const NEWS_CARDS = [
  {
    badge: "Busia County",
    title: "Assembly Tables Youth Internship Policy Motion",
    description:
      "Despite slow progress and political stand-offs, the Busia steering committee's efforts led to the assembly tabling a youth internship policy motion on August 6, 2019.",
    href: "/reports",
  },
  {
    badge: "Kericho County",
    title: "TVET Instructor Hiring Recommendations Adopted",
    description:
      "A report co-created with fellows led to recommendations for hiring more instructors across Technical Vocational and Educational Training Centers.",
    href: "/reports",
  },
  {
    badge: "Kisumu County",
    title: "Entrepreneurial Training Programme Launched",
    description:
      "Findings on youth income sources informed a new entrepreneurship training recommendation, now implemented by Jiwa Paro.",
    href: "/reports",
  },
]

export function NewsTeaserSection() {
  return (
    <section className="bg-white py-20 md:py-24">
      <div className="container-page flex flex-col gap-10">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <h2 className="text-h2 text-navy-900">Latest Impact Stories</h2>
          <Link
            href="/reports"
            className="flex items-center gap-1.5 text-ui-medium text-blue-700 hover:underline"
          >
            Read More Stories
            <ArrowRight className="size-4" />
          </Link>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {NEWS_CARDS.map((story) => (
            <FeatureCard key={story.title} {...story} />
          ))}
        </div>
      </div>
    </section>
  )
}
