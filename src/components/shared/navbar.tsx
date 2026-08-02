import Image from "next/image"
import Link from "next/link"

import { Button } from "@/components/ui/button"
import { MobileMenu } from "@/components/shared/mobile-menu"
import { NavLinks } from "@/components/shared/nav-links"

const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Fellows", href: "/fellows" },
  { label: "Impact", href: "/impact" },
  { label: "Reports", href: "/reports" },
  { label: "iPolicy", href: "/ipolicy" },
  { label: "Contacts", href: "/contacts" },
]

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 bg-blue-700">
      <div className="container-page flex h-[70px] items-center justify-between">
        <Link href="/" className="flex items-center">
          <Image src="/imara-logo.svg" alt="Imara Fellowship" width={109} height={50} priority />
        </Link>

        <NavLinks
          links={NAV_LINKS}
          className="hidden items-center gap-7 lg:flex"
          linkClassName="text-ui-medium text-blue-100 transition-colors hover:text-white"
          activeLinkClassName="text-gold-500 font-bold hover:text-gold-500"
        />

        <div className="flex items-center gap-5">
          <Button asChild variant="gold" size="md" className="hidden sm:inline-flex">
            <a href="#" target="_blank" rel="noopener noreferrer">Apply Now</a>
          </Button>
          <MobileMenu links={NAV_LINKS} />
        </div>
      </div>
    </header>
  )
}
