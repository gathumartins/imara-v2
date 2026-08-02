import Link from "next/link"
import { ArrowRight } from "lucide-react"

const PROGRAMME_COMPONENTS = [
  {
    number: "01",
    id: "residential-academy",
    emoji: "🏕️",
    title: "Residential Academy",
    description:
      "Intensive residential sessions structured around core themes — leadership principles, policy frameworks, and the socio-political landscape of Kenya.",
  },
  {
    number: "02",
    id: "online-learning",
    emoji: "💻",
    title: "Online Learning",
    description:
      "Fellows are sponsored to undertake a certificate course in policy and governance from a globally recognised university.",
  },
  {
    number: "03",
    id: "experiential-learning",
    emoji: "🤝",
    title: "Community Collaboration",
    description:
      "A year of community engagement through county government visits, focus group discussions, and community forums.",
  },
  {
    number: "04",
    id: "lectures",
    emoji: "🎤",
    title: "Public Lectures & Leadership Cafes",
    description:
      "Curated public forums and leadership café discussions bringing fellows into conversation with senior policymakers.",
  },
]

export function ProgrammeComponentsSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-tr from-navy-900 via-blue-700 to-blue-500 py-20 md:py-24">
      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-16 -left-16 size-72 rounded-full bg-blue-300/15 blur-3xl"
      />

      <div className="container-page relative">
        <div className="mb-12 flex flex-col items-start justify-between gap-4 md:flex-row md:items-end">
          <h2 className="text-white">
            Programme <span className="text-gold-600">Components</span>
          </h2>
          <p className="max-w-xs text-body-s text-blue-300 md:text-right">
            Four interconnected pillars that build complete, confident policy leaders.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {PROGRAMME_COMPONENTS.map((item) => (
            <div
              key={item.id}
              id={item.id}
              className="scroll-mt-24 flex flex-col rounded-lg border border-white/15 bg-white/5 p-6"
            >
              <span className="text-caption text-blue-300">{item.number}</span>
              <div className="mt-4 flex size-11 items-center justify-center rounded-xl bg-white/10 text-xl">
                {item.emoji}
              </div>
              <h4 className="mt-6 text-ui-bold text-white">
                {item.title}
              </h4>
              <p className="mt-2 text-body-s text-blue-300">{item.description}</p>
              <Link
                href={`/about#${item.id}`}
                className="mt-auto flex w-fit items-center gap-1 pt-5 text-ui-medium text-gold-600 hover:underline"
              >
                Learn more
                <ArrowRight className="size-4" />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
