import {
  BrainIcon,
  DocIcon,
  HandshakeIcon,
  WorkflowIcon,
} from "@/components/ui/home-icons"

const PROGRAM_COMPONENTS = [
  {
    icon: BrainIcon,
    title: "Residential Academy",
    description:
      "The Imara Fellowship begins with a Residential Academy, an intensive, in-person training program that immerses fellows in the core principles of leadership. This experience blends theoretical grounding with hands-on practice among peers from across the continent.",
  },
  {
    icon: HandshakeIcon,
    title: "Interactive Online Learning Modules",
    description:
      "To complement the in-person training, the fellowship offers flexible, interactive online learning modules. These courses, often from world-class universities, cover a broad range of topics essential to modern policy leadership.",
  },
  {
    icon: WorkflowIcon,
    title: "Experiential Learning",
    description:
      "Experiential learning is a cornerstone of the Imara Fellowship, with fellows participating in community engagement clinics across select counties. Here, participants actively identify pressing community issues, develop policy solutions, and present their proposals to local leaders.",
  },
  {
    icon: DocIcon,
    title: "Public Lectures, Workshops, and Leadership Cafes",
    description:
      "Imara Fellowship provides numerous opportunities for fellows to learn from and engage with leaders in various fields through public lectures, workshops, and leadership cafes.",
  },
]

export function ProgramComponentsSection() {
  return (
    <section className="bg-gray-100 py-20 md:py-24">
      <div className="container-page flex flex-col gap-12">
        <div className="flex max-w-2xl flex-col gap-4">
          <div className="flex items-center gap-3">
            <span className="h-0.5 w-5 bg-gold-600" />
            <p className="text-tag text-blue-700">The Fellowship Program</p>
          </div>
          <h2>Program Components</h2>
          <p className="text-body text-gray-500">
            The Imara Fellowship equips young leaders with transformative
            training, community engagement, policy advocacy, and
            mentorship, creating a comprehensive pathway for leadership
            excellence.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {PROGRAM_COMPONENTS.map((item) => (
            <div
              key={item.title}
              className="flex flex-col gap-4 rounded-2xl border border-gray-200 bg-white p-8"
            >
              <span className="flex size-11 items-center justify-center rounded-xl bg-blue-100 text-blue-700">
                <item.icon className="size-5" />
              </span>
              <h4 className="text-ui-bold text-navy-900">{item.title}</h4>
              <p className="line-clamp-3 text-body-s text-gray-500">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
