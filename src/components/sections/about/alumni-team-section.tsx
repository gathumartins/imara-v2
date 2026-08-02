import { User } from "lucide-react"

const ALUMNI_TEAM = [
  {
    name: "Robbin Murimi Karani",
    role: "Chairperson",
    initials: "RK",
    color: "from-blue-700/10 to-blue-100 text-blue-700 border-blue-300",
  },
  {
    name: "Brian Fidel",
    role: "Vice Chairperson",
    initials: "BF",
    color: "from-gold-700/10 to-gold-100/50 text-gold-700 border-gold-600/30",
  },
  {
    name: "Victoe Tum",
    role: "Secretary-General",
    initials: "VT",
    color: "from-navy-900/10 to-gray-100 text-navy-900 border-navy-800/20",
  },
  {
    name: "Immaculate Anyokot",
    role: "Endowment Fund Secretary",
    initials: "IA",
    color: "from-blue-500/10 to-blue-100 text-blue-700 border-blue-300",
  },
]

const SOCIALS = [
  { icon: "in", label: "LinkedIn" },
  { icon: "𝕏", label: "Twitter" },
  { icon: "f", label: "Facebook" },
]

export function AlumniTeamSection() {
  return (
    <section className="bg-white py-20 md:py-24">
      <div className="container-page">
        <div className="mb-12 max-w-xl">
          <p className="text-tag text-blue-700">Alumni Leadership</p>
          <h2 className="mt-3 text-navy-900">Meet our Alumni Leadership Team</h2>
          <p className="mt-4 text-body-s text-gray-500 font-medium">
            Fellows who have gone on to lead the Imara community and shape its next chapter.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {ALUMNI_TEAM.map((member) => (
            <div
              key={member.name}
              className="group overflow-hidden rounded-[16px] bg-gray-100 border border-gray-200/80 hover:shadow-lg hover:border-blue-300 transition-all duration-300"
            >
              {/* Professional Placeholder Banner */}
              <div
                className={`relative flex aspect-[1.2] items-center justify-center bg-gradient-to-b ${member.color} border-b`}
              >
                <div className="relative flex size-20 items-center justify-center rounded-full bg-white shadow-md ring-4 ring-white">
                  <User className="size-10 text-gray-400 group-hover:text-blue-700 transition-colors" />
                  <span className="absolute -bottom-1 -right-1 flex size-6 items-center justify-center rounded-full bg-navy-900 text-caption font-bold text-white shadow-sm">
                    {member.initials}
                  </span>
                </div>
              </div>

              {/* Info Container */}
              <div className="p-5">
                <p className="text-body-s font-bold text-navy-900">{member.name}</p>
                <p className="mt-1 text-caption text-gray-400 font-medium">{member.role}</p>
                <div className="mt-5 flex gap-2">
                  {SOCIALS.map((social) => (
                    <span
                      key={social.label}
                      role="button"
                      tabIndex={0}
                      aria-label={`${member.name} on ${social.label}`}
                      className="flex size-7 items-center justify-center rounded-[4px] bg-white text-caption font-bold text-gray-400 cursor-pointer hover:bg-blue-700 hover:text-white transition-all shadow-sm border border-gray-200/60"
                    >
                      {social.icon}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
