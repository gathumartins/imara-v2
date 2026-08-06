"use client"

import { useState, useEffect } from "react"
import Link from "next/link"

const SECTIONS = [
  { id: "introduction", title: "1. Introduction" },
  { id: "eligibility", title: "2. Eligibility" },
  { id: "program-participation", title: "3. Program Participation" },
  { id: "intellectual-property", title: "4. Intellectual Property" },
  { id: "privacy", title: "5. Privacy" },
  { id: "code-of-conduct", title: "6. Code of Conduct" },
  { id: "limitation-of-liability", title: "7. Limitation of Liability" },
  { id: "third-party-services", title: "8. Third-Party Services" },
  { id: "termination", title: "9. Termination" },
  { id: "governing-law", title: "10. Governing Law" },
  { id: "changes", title: "11. Changes to These Terms" },
]

export function TermsContent({content}: {content: string}) {
  const [activeSection, setActiveSection] = useState(SECTIONS[0].id)

  useEffect(() => {
    const handleScroll = () => {
      const sectionElements = SECTIONS.map((section) => document.getElementById(section.id))
      const scrollPosition = window.scrollY + 200 // Offset for fixed header

      for (let i = sectionElements.length - 1; i >= 0; i--) {
        const element = sectionElements[i]
        if (element && element.offsetTop <= scrollPosition) {
          setActiveSection(SECTIONS[i].id)
          break
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <section className="bg-white py-20 md:py-24">
      <div className="container-page flex flex-col gap-10 lg:flex-row lg:items-start lg:gap-16">
        {/* Sticky Sidebar */}
        <aside className="lg:sticky lg:top-24 lg:w-1/4 shrink-0">
          <nav className="flex flex-col gap-3 rounded-2xl bg-gray-100 p-6 border border-gray-100">
            <h3 className="mb-2 text-ui-medium font-bold text-navy-900">
              Contents
            </h3>
            {SECTIONS.map((section) => (
              <a
                key={section.id}
                href={`#${section.id}`}
                className={`text-ui-medium transition-colors hover:text-blue-700 ${
                  activeSection === section.id
                    ? "text-blue-700 font-bold"
                    : "text-gray-600"
                }`}
                onClick={(e) => {
                  e.preventDefault();
                  const element = document.getElementById(section.id);
                  if (element) {
                    const offset = 100; // header offset
                    const elementPosition = element.getBoundingClientRect().top;
                    const offsetPosition =
                      elementPosition + window.pageYOffset - offset;
                    window.scrollTo({
                      top: offsetPosition,
                      behavior: "smooth",
                    });
                  }
                }}
              >
                {section.title}
              </a>
            ))}
          </nav>
        </aside>

        {/* Main Content */}
        <div
          className="lg:w-3/4 flex flex-col text-gray-700 prose prose-blue max-w-none [&_h2]:text-h3 [&_h2]:text-navy-900 [&_h2]:mb-6 [&_ul]:list-disc [&_ul]:pl-6 [&_ol]:list-decimal [&_ol]:pl-6 [&_h3]:text-body-l [&_h3]:font-bold [&_h3]:text-navy-800 [&_h3]:mb-4 [&_h3]:mt-6 [&_p]:text-body-lg [&_p]:mb-4"
          dangerouslySetInnerHTML={{ __html: content }}
        />
      </div>
    </section>
  );
}
