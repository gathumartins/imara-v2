import Image from "next/image"
import Link from "next/link"

import { Button } from "@/components/ui/button"
import { MobileMenu } from "@/components/shared/mobile-menu"
import { NavLinks } from "@/components/shared/nav-links"
import type { LayoutData, MainMenuItem, NavLink } from "@/components/shared/navigation-types"

interface NavbarProps {
  mainMenu?: MainMenuItem[]
  layoutData?: LayoutData
}

function mapMenuToNavLinks(menu: MainMenuItem[] = []): NavLink[] {
  return menu.map((item) => ({
    label: item.node.label,
    href: item.node.uri.replace(/\/$/, "") || "/",
  }))
}

export function Navbar({ mainMenu = [], layoutData }: NavbarProps) {
  const navLinks = mapMenuToNavLinks(mainMenu)
  const logoSrc = layoutData?.logo?.node?.sourceUrl ?? "/imara-logo.svg"
  const applyLink = layoutData?.register?.buttonLink
  const applyHref = applyLink?.url ?? "#"
  const applyLabel = applyLink?.title ?? "Apply Now"
  const applyTarget = applyLink?.target === "_blank" ? "_blank" : undefined

  return (
    <header className="sticky top-0 z-50 bg-blue-700">
      <div className="container-page flex h-17.5 items-center justify-between">
        <Link href="/" className="flex items-center">
          <Image src={logoSrc} alt="Imara Fellowship" width={109} height={50} priority />
        </Link>

        <NavLinks
          links={navLinks}
          className="hidden items-center gap-7 lg:flex"
          linkClassName="text-ui-medium text-blue-100 transition-colors hover:text-white"
          activeLinkClassName="text-gold-500 font-bold hover:text-gold-500"
        />

        <div className="flex items-center gap-5">
          <Button asChild variant="gold" size="md" className="hidden sm:inline-flex">
            <a href={applyHref} target={applyTarget} rel={applyTarget ? "noopener noreferrer" : undefined}>
              {applyLabel}
            </a>
          </Button>
          <MobileMenu links={navLinks} layoutData={layoutData} />
        </div>
      </div>
    </header>
  )
}
