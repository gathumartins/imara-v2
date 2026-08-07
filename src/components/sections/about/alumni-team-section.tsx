import Image from "next/image"
import Link from "next/link"
import { User } from "lucide-react"
import { FaFacebookF, FaLinkedinIn, FaXTwitter } from "react-icons/fa6"

import type { TeamNode } from "@/types/post"

const CARD_COLORS = [
  "from-blue-700/10 to-blue-100 text-blue-700 border-blue-300",
  "from-gold-700/10 to-gold-100/50 text-gold-700 border-gold-600/30",
  "from-navy-900/10 to-gray-100 text-navy-900 border-navy-800/20",
  "from-blue-500/10 to-blue-100 text-blue-700 border-blue-300",
]

const SOCIALS = [
  { icon: FaFacebookF, label: "Facebook", href: "https://www.facebook.com/imaraAfr" },
  { icon: FaXTwitter, label: "Twitter", href: "https://x.com/Imara_Africa" },
  { icon: FaLinkedinIn, label: "LinkedIn", href: "https://www.instagram.com/imarafellowship/" },
]

function getInitials(name: string) {
  return name
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0]?.toUpperCase())
    .join("")
}

export function AlumniTeamSection({
  teams,
}: {
  teams?: Array<{ node?: TeamNode | null }> | null
}) {
  const members = teams?.map((edge) => edge?.node).filter((node): node is TeamNode => Boolean(node)) ?? []

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

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
          {members.map((member, index) => {
            const name = member.title ?? "Team Member"
            const role = member.teamfields?.designation ?? ""
            const imageSrc = member.featuredImage?.node?.sourceUrl ?? null
            const color = CARD_COLORS[index % CARD_COLORS.length]

            return (
              <div
                key={`${name}-${index}`}
                className="group overflow-hidden rounded-[16px] bg-gray-100 border border-gray-200/80 hover:shadow-lg hover:border-blue-300 transition-all duration-300"
              >
                {/* Professional Placeholder Banner */}
                <div
                  className={`relative flex aspect-[1.2] items-center justify-center bg-gradient-to-b ${color} border-b`}
                >
                  {imageSrc ? (
                    <Image
                      src={imageSrc}
                      alt={member.featuredImage?.node?.altText ?? name}
                      fill
                      sizes="(min-width: 1024px) 25vw, 50vw"
                      className="object-cover"
                    />
                  ) : (
                    <div className="relative flex size-20 items-center justify-center rounded-full bg-white shadow-md ring-4 ring-white">
                      <User className="size-10 text-gray-400 group-hover:text-blue-700 transition-colors" />
                      <span className="absolute -bottom-1 -right-1 flex size-6 items-center justify-center rounded-full bg-navy-900 text-caption font-bold text-white shadow-sm">
                        {getInitials(name)}
                      </span>
                    </div>
                  )}
                </div>

                {/* Info Container */}
                <div className="p-5">
                  <p className="text-body-s font-bold text-navy-900">{name}</p>
                  <p className="mt-1 text-caption text-gray-400 font-medium">{role}</p>
                  <div className="mt-5 flex gap-2">
                    {SOCIALS.map((social) => (
                      <Link
                        key={social.label}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`${name} on ${social.label}`}
                        className="flex size-7 items-center justify-center rounded-[4px] bg-white text-caption font-bold text-gray-400 hover:bg-blue-700 hover:text-white transition-all shadow-sm border border-gray-200/60"
                      >
                        <social.icon />
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
