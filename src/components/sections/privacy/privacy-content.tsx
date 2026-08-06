"use client"

import { useState, useEffect } from "react"
import Link from "next/link"

const SECTIONS = [
  { id: "introduction", title: "Introduction" },
  { id: "who-we-are", title: "1. Who We Are" },
  { id: "information-we-collect", title: "2. Information We Collect" },
  { id: "how-we-use", title: "3. How We Use Your Information" },
  { id: "sharing-your-information", title: "4. Sharing Your Information" },
  { id: "data-protection", title: "5. Data Protection and Retention" },
  { id: "your-rights", title: "6. Your Rights" },
  { id: "third-party-services", title: "7. Third-Party Services" },
  { id: "changes", title: "8. Changes to This Privacy Policy" },
]

export function PrivacyContent({content}: {content: string}) {
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
