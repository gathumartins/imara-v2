import { StatCard } from "@/components/shared/stat-card"

const STATS = [
  { value: "100+", label: "Fellows trained across Africa", sublabel: "" },
  { value: "5+", label: "Major Policy Contributions", sublabel: "" },
]

const PARTNERS = [
  {
    number: "01",
    name: "Siasa Place",
    badge: "CSO",
    badgeClass: "bg-alert/10 text-alert", // alert tint
    description:
      "CSO focused on advocacy through education and capacity building, with targeted programme implementation.",
  },
  {
    number: "02",
    name: "Africa Youth Leadership Forum",
    badge: "Trust",
    badgeClass: "bg-gold-100 text-gold-700", // gold tint
    description:
      "Leadership trust working across East Africa, developing skills and values amongst young leaders.",
  },
  {
    number: "03",
    name: "Mark Appeal Group",
    badge: "Consultancy",
    badgeClass: "bg-blue-100 text-blue-700", // blue tint
    description:
      "Social consultancy designing high-impact programmes through strategic alliances and creative collaboration.",
  },
]

export function IntroSection() {
  return (
    <section className="bg-white py-20 md:py-24">
      <div className="container-page grid grid-cols-1 gap-16 lg:grid-cols-2">
        <div>
          <p className="text-tag text-gold-700">About Imara</p>
          <h2 className="mt-3">
            A programme born from <span className="text-blue-700">collaboration</span>
          </h2>
          <p className="mt-5 text-body text-gray-500">
            Imara Africa is a leadership development programme collaboratively convened by
            three pioneering institutions — bringing together advocacy, pan-African leadership
            development, and high-impact programme design to cultivate the next generation of
            Kenya&apos;s public servants.
          </p>
          <div className="my-8 h-px bg-gray-200" />
          <div className="grid  grid-cols-2 gap-4">
            {STATS.map((stat) => (
              <StatCard
                key={stat.label}
                value={stat.value}
                label={stat.label}
                sublabel={stat.sublabel}
              />
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-6">
          {PARTNERS.map((partner) => (
            <div
              key={partner.name}
              className="flex gap-4 border-b border-gray-200 pb-6 last:border-0"
            >
              <span className="text-caption text-gray-400 pt-1">{partner.number}</span>
              <div className="flex-1">
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <h4 className="text-ui-bold text-navy-900">
                    {partner.name}
                  </h4>
                  <span className={`shrink-0 rounded-full px-3 py-1 text-tag ${partner.badgeClass}`}>
                    {partner.badge}
                  </span>
                </div>
                <p className="mt-2 text-body-s text-gray-400 leading-relaxed font-medium max-w-sm">{partner.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
