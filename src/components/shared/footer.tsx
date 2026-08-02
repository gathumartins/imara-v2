import Image from "next/image"
import Link from "next/link"

import {
  InstagramIcon,
  LinkedinIcon,
  TwitterIcon,
  YoutubeIcon,
} from "@/components/ui/icons"
import { Tooltip } from "@/components/shared/tooltip"
import type { FooterMenuItem } from "@/components/shared/navigation-types"

interface FooterProps {
  programs?: FooterMenuItem[]
  orgs?: FooterMenuItem[]
  quicks?: FooterMenuItem[]
}

const COLUMNS: { title: string; links: { label: string; href: string; disabled?: boolean }[] }[] = [
  {
    title: "Programs",
    links: [],
  },
  {
    title: "Organization",
    links: [],
  },
  {
    title: "Quick Links",
    links: [],
  },
]

const SOCIALS = [
  { label: "Twitter", href: "https://twitter.com", Icon: TwitterIcon },
  { label: "LinkedIn", href: "https://linkedin.com", Icon: LinkedinIcon },
  { label: "Instagram", href: "https://instagram.com", Icon: InstagramIcon },
  { label: "YouTube", href: "https://youtube.com", Icon: YoutubeIcon },
]

export function Footer({ programs = [], orgs = [], quicks = [] }: FooterProps) {
  const privacyLink = quicks.find((item) => /privacy/i.test(item.node.label))
  const termsLink = quicks.find((item) => /terms/i.test(item.node.label))

  const columns = [
    {
      title: "Programs",
      links: programs.map((item) => ({ label: item.node.label, href: item.node.uri, disabled: false })),
    },
    {
      title: "Organization",
      links: orgs.map((item) => ({ label: item.node.label, href: item.node.uri, disabled: false })),
    },
    {
      title: "Quick Links",
      links: quicks.map((item) => ({ label: item.node.label, href: item.node.uri, disabled: false })),
    },
  ]

  return (
    <footer className="bg-navy-900 text-white">
      <div className="container-page py-16">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
          {columns.map((col) => {
            // Guarantee sorting from shortest (fewest letters) to longest (most letters)
            const sortedLinks = [...col.links].sort((a, b) => a.label.length - b.label.length)

            return (
              <div key={col.title} className="flex flex-col">
                <p className="text-ui-bold mb-6 text-gold-700">{col.title}</p>
                <ul className="flex flex-col gap-4">
                  {sortedLinks.map((link) => (
                    <li key={link.label}>
                      {link.disabled ? (
                        <Tooltip label="Page coming soon">
                          <span className="text-body-s cursor-not-allowed text-blue-100 transition-colors hover:text-white">
                            {link.label}
                          </span>
                        </Tooltip>
                      ) : (
                        <Link
                          href={link.href}
                          className="text-body-s text-blue-100 transition-colors hover:text-gold-700"
                        >
                          {link.label}
                        </Link>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            )
          })}

          <div className="flex flex-col">
            <p className="text-ui-bold mb-6 text-gold-700">Contacts</p>
            <ul className="flex flex-col gap-4">
              <li className="text-body-s text-blue-100">Nairobi, Kenya</li>
              <li>
                <a
                  href="tel:+254700000000"
                  className="text-body-s text-blue-100 transition-colors hover:text-gold-700"
                >
                  +254 700 000 000
                </a>
              </li>
              <li>
                <a
                  href="mailto:fellowship@imarafellowship.org"
                  className="text-body-s text-blue-100 transition-colors hover:text-gold-700"
                >
                  fellowship@imarafellowship.org
                </a>
              </li>
            </ul>
            <div className="mt-6 flex gap-3">
              {SOCIALS.map(({ label, href, Icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="flex size-9 items-center justify-center rounded-full bg-white/10 text-blue-100 transition-colors hover:bg-white/20 hover:text-white"
                >
                  <Icon className="size-4" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-page flex flex-col items-center justify-between gap-4 py-6 text-caption text-blue-300 sm:flex-row">
          <p>Copyright © 2026 Imara Fellowship | All Rights Reserved</p>
          <div className="flex gap-6">
            <Link
              href={termsLink?.node.uri ?? "/terms"}
              className="hover:text-white transition-colors"
            >
              {termsLink?.node.label ?? "Terms of Use"}
            </Link>
            <Link
              href={privacyLink?.node.uri ?? "/privacy"}
              className="hover:text-white transition-colors"
            >
              {privacyLink?.node.label ?? "Privacy Policy"}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
