"use client"

import { useState, useEffect } from "react"
import { cn } from "@/lib/utils"

const IN_PAGE_NAV = [
  { number: "1", label: "Capacity Building", id: "capacity-building" },
  { number: "2", label: "Partnerships", id: "partnerships" },
  { number: "3", label: "Developing Policy Recommendations", id: "policy-recommendations" },
]

export function InPageNavSection() {
  const [activeSection, setActiveSection] = useState(IN_PAGE_NAV[0].id)

  useEffect(() => {
    const handleScroll = () => {
      const sectionElements = IN_PAGE_NAV.map((section) => document.getElementById(section.id))
      const scrollPosition = window.scrollY + 200 // Offset to trigger early enough

      for (let i = sectionElements.length - 1; i >= 0; i--) {
        const element = sectionElements[i]
        if (element && element.offsetTop <= scrollPosition) {
          setActiveSection(IN_PAGE_NAV[i].id)
          break
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <nav aria-label="Page sections" className="sticky top-[70px] z-40 border-b border-gray-200 bg-white/90 backdrop-blur-md">
      <div className="container-page flex flex-wrap justify-left gap-10 md:gap-20 overflow-x-auto no-scrollbar">
        {IN_PAGE_NAV.map((item) => {
          const isActive = activeSection === item.id

          return (
            <a
              key={item.number}
              href={`#${item.id}`}
              onClick={(e) => {
                e.preventDefault()
                const element = document.getElementById(item.id)
                if (element) {
                  const offset = 140 // Account for both header and sticky nav
                  const elementPosition = element.getBoundingClientRect().top
                  const offsetPosition = elementPosition + window.pageYOffset - offset
                  window.scrollTo({
                    top: offsetPosition,
                    behavior: "smooth"
                  })
                }
              }}
              className={cn(
                "flex items-center gap-3 border-b-2 py-4 transition-colors cursor-pointer",
                isActive ? "border-blue-700" : "border-transparent hover:border-gray-200"
              )}
            >
              <span
                className={cn(
                  "flex size-6 shrink-0 items-center justify-center rounded-full text-caption font-bold transition-colors",
                  isActive ? "bg-gold-700 text-white" : "bg-gray-200 text-gray-500"
                )}
              >
                {item.number}
              </span>
              <span
                className={cn(
                  "text-ui-medium whitespace-nowrap transition-colors",
                  isActive ? "text-blue-700" : "text-gray-500"
                )}
              >
                {item.label}
              </span>
            </a>
          )
        })}
      </div>
    </nav>
  )
}
