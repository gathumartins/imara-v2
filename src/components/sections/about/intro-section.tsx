import { StatCard } from "@/components/shared/stat-card"
import type { ConvenerEdge, HomeStatsSection } from "@/types/post"

const BADGE_CLASSES = [
  "bg-alert/10 text-alert", // alert tint
  "bg-gold-100 text-gold-700", // gold tint
  "bg-blue-100 text-blue-700", // blue tint
]

// The CMS content leads with its own <h3> title, which would duplicate the h2 above it.
function stripLeadingHeading(html: string) {
  return html.replace(/^\s*<h[1-6][^>]*>[\s\S]*?<\/h[1-6]>\s*/i, "")
}

export function IntroSection({
  content,
  conveners,
  stats,
}: {
  content?: string | null
  conveners?: ConvenerEdge[] | null
  stats?: HomeStatsSection | null
}) {
  const partners =
    conveners
      ?.map((edge) => edge?.convener)
      .filter((convener): convener is NonNullable<typeof convener> => Boolean(convener))
      .map((convener) => ({
        name: convener.name ?? "",
        badge: convener.category ?? "",
        description: convener.description ?? "",
      })) ?? []

  const cardStats =
    stats?.stats?.map((stat) => ({
      value: `${stat.figures ?? ""}${stat.suffix ?? ""}`,
      label: stat.title ?? "",
      sublabel: "",
    })) ?? []

  return (
    <section className="bg-white py-20 md:py-24">
      <div className="container-page grid grid-cols-1 gap-16 lg:grid-cols-2">
        <div>
          <p className="text-tag text-gold-700">About Imara</p>
          <h2 className="mt-3">
            A programme born from <span className="text-blue-700">collaboration</span>
          </h2>
          <div
            className="mt-5 text-body text-gray-500 [&_h3]:mb-2 [&_h3]:mt-6 [&_h3]:text-ui-bold [&_h3]:text-navy-900 [&_h3]:first:mt-0 [&_h4]:mb-2 [&_h4]:mt-5 [&_h4]:text-ui-bold [&_h4]:text-navy-900 [&_ol]:list-inside [&_ol]:list-decimal [&_ol]:pl-3 [&_ol>li]:mb-2 [&_p]:mb-4 [&_p:last-child]:mb-0 [&_strong]:font-bold [&_strong]:text-navy-900 [&_ul]:list-inside [&_ul]:list-disc [&_ul]:pl-3 [&_ul>li]:mb-2"
            dangerouslySetInnerHTML={{ __html: stripLeadingHeading(content ?? "") }}
          />
        </div>

        <div className="flex flex-col gap-6">
          {partners.map((partner, index) => (
            <div
              key={partner.name}
              className="flex gap-4 border-b border-gray-200 pb-6 last:border-0"
            >
              <span className="text-caption text-gray-400 pt-1">
                {String(index + 1).padStart(2, "0")}
              </span>
              <div className="flex-1">
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <h4 className="text-ui-bold text-navy-900">
                    {partner.name}
                  </h4>
                  <span
                    className={`shrink-0 rounded-full px-3 py-1 text-tag ${BADGE_CLASSES[index % BADGE_CLASSES.length]}`}
                  >
                    {partner.badge}
                  </span>
                </div>
                <p className="mt-2 text-body-s text-gray-400 leading-relaxed font-medium max-w-sm">{partner.description}</p>
              </div>
            </div>
          ))}

          <div className="grid grid-cols-2 gap-4">
            {cardStats.map((stat) => (
              <StatCard
                key={stat.label}
                value={stat.value}
                label={stat.label}
                sublabel={stat.sublabel}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
