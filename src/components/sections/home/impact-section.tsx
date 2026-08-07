import { AwardIcon, BadgeIcon, BookIcon, UsersIcon } from "@/components/ui/home-icons"
import type { HomeStatsSection } from "@/types/post"

const IMPACT_ICONS = [UsersIcon, BadgeIcon, AwardIcon, BookIcon]

const DEFAULT_IMPACT_STATS = [
  { icon: UsersIcon, value: "100+", label: "Fellows Trained" },
  { icon: BadgeIcon, value: "5+", label: "Major Policy Contributions" },
  { icon: AwardIcon, value: "50+", label: "Public Participation Initiatives" },
  { icon: BookIcon, value: "30+", label: "High-Level Governance Dialogues Held" },
]

export function ImpactSection({ stats }: { stats?: HomeStatsSection | null }) {
  const impactStats = stats?.stats?.length
    ? stats.stats.map((stat, index) => ({
        icon: IMPACT_ICONS[index % IMPACT_ICONS.length],
        value: `${stat.figures ?? ""}${stat.suffix ?? ""}`,
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
              className="flex flex-col gap-4 rounded-2xl bg-blue-100 p-8"
            >
              <span className="flex size-11 items-center justify-center rounded-xl bg-white text-gold-700">
                <stat.icon className="size-5" />
              </span>
              <span className="text-h2 text-blue-700">
                {stat.value}
              </span>
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
