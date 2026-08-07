import { AwardIcon, BadgeIcon, BookIcon, UsersIcon } from "@/components/ui/home-icons"
import { StatCounter } from "@/components/shared/stat-counter"
import type { HomeStatsSection } from "@/types/post"

const IMPACT_ICONS = [UsersIcon, BadgeIcon, AwardIcon, BookIcon]

const DEFAULT_IMPACT_STATS = [
  { icon: UsersIcon, figures: 100, suffix: "+", label: "Fellows Trained" },
  { icon: BadgeIcon, figures: 5, suffix: "+", label: "Major Policy Contributions" },
  { icon: AwardIcon, figures: 50, suffix: "+", label: "Public Participation Initiatives" },
  { icon: BookIcon, figures: 30, suffix: "+", label: "High-Level Governance Dialogues Held" },
]

export function ImpactSection({ stats }: { stats?: HomeStatsSection | null }) {
  const impactStats = stats?.stats?.length
    ? stats.stats.map((stat, index) => ({
        icon: IMPACT_ICONS[index % IMPACT_ICONS.length],
        figures: Number(stat.figures ?? 0),
        suffix: stat.suffix ?? "",
        label: stat.title ?? "",
      }))
    : DEFAULT_IMPACT_STATS

  return (
    <section className="bg-white py-20 md:py-24">
      <div className="container-page flex flex-col gap-12">
        <div className="mx-auto flex max-w-2xl flex-col items-center gap-4 text-center">
          <h2>{stats?.title ?? "Our Impact in Numbers"}</h2>
          <p className="text-body text-gray-500">
            {stats?.description ??
              "Every number represents a person, a policy, a community — a step toward a more equitable, well-governed Africa."}
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          {impactStats.map((stat, index) => (
            <div
              key={stat.label || index}
              className="group flex flex-col gap-4 rounded-2xl bg-blue-100 p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
            >
              <span className="flex size-11 items-center justify-center rounded-xl bg-white text-gold-700 transition-transform duration-300 group-hover:scale-110">
                <stat.icon className="size-5" />
              </span>
              <StatCounter to={stat.figures} suffix={stat.suffix} className="text-h2 text-blue-700" />
              <span className="text-ui-medium text-navy-900">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
