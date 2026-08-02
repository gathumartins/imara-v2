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

export function PrivacyContent() {
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
            <h3 className="mb-2 text-ui-medium font-bold text-navy-900">Contents</h3>
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
                  e.preventDefault()
                  const element = document.getElementById(section.id)
                  if (element) {
                    const offset = 100 // header offset
                    const elementPosition = element.getBoundingClientRect().top
                    const offsetPosition = elementPosition + window.pageYOffset - offset
                    window.scrollTo({
                      top: offsetPosition,
                      behavior: "smooth"
                    })
                  }
                }}
              >
                {section.title}
              </a>
            ))}
          </nav>
        </aside>

        {/* Main Content */}
        <div className="lg:w-3/4 flex flex-col gap-12 text-gray-700 prose prose-blue max-w-none">
          <div id="introduction" className="scroll-mt-32">
            <p className="text-body-lg">
              Imara Africa (“we,” “our,” or “us”) is a leadership development program collaboratively convened by Siasa Place (SP), Africa Youth Leadership Forum (AYLF), and Mark Appeal Group (MA). This Privacy Policy explains how we collect, use, disclose, and protect your personal information when you engage with our programs, website, or other services.
            </p>
            <p className="mt-4 text-body-lg">
              By participating in our programs or accessing our services, you agree to the terms outlined in this Privacy Policy.
            </p>
          </div>

          <div id="who-we-are" className="scroll-mt-32">
            <h2 className="text-h3 text-navy-900 mb-6">1. Who We Are</h2>
            <p className="mb-4">Imara Africa is a collaboration of:</p>
            <ul className="list-disc pl-5 space-y-2">
              <li><strong>Siasa Place (SP):</strong> A Civil Society Organization (CSO) focused on advocacy, education, and capacity building.</li>
              <li><strong>Africa Youth Leadership Forum (AYLF):</strong> A leadership trust working in the East African region to develop leadership skills and values among youth.</li>
              <li><strong>Mark Appeal Group (MA):</strong> A social consultancy that designs high-impact programs and leverages resources through strategic alliances and creative collaboration.</li>
            </ul>
            <p className="mt-4">Together, we work to empower young leaders across Africa by fostering skills, values, and meaningful connections.</p>
          </div>

          <div id="information-we-collect" className="scroll-mt-32">
            <h2 className="text-h3 text-navy-900 mb-6">2. Information We Collect</h2>
            
            <h3 className="text-body-l font-bold text-navy-800 mb-4 mt-6">a. Information You Provide to Us</h3>
            <p className="mb-4">We collect personal information when you:</p>
            <ul className="list-disc pl-5 space-y-2 mb-6">
              <li>Register for our programs, events, or services.</li>
              <li>Communicate with us via email, phone, or other channels.</li>
              <li>Submit applications, feedback, or inquiries.</li>
            </ul>
            <p className="mb-4">This may include:</p>
            <ul className="list-disc pl-5 space-y-2">
              <li>Full name</li>
              <li>Contact information (email address, phone number)</li>
              <li>Professional or academic background</li>
              <li>Gender, age, or other demographic details (when relevant for program eligibility)</li>
            </ul>

            <h3 className="text-body-l font-bold text-navy-800 mb-4 mt-8">b. Automatically Collected Information</h3>
            <p className="mb-4">When you interact with our website or online services, we may automatically collect:</p>
            <ul className="list-disc pl-5 space-y-2">
              <li><strong>Device Information:</strong> IP address, browser type, and operating system.</li>
              <li><strong>Usage Data:</strong> Pages visited, time spent on the site, and user interactions.</li>
            </ul>

            <h3 className="text-body-l font-bold text-navy-800 mb-4 mt-8">c. Third-Party Data Sources</h3>
            <p>We may receive information about you from our partner organizations (SP, AYLF, or MA) or other collaborators, provided you have given them consent to share such data.</p>
          </div>

          <div id="how-we-use" className="scroll-mt-32">
            <h2 className="text-h3 text-navy-900 mb-6">3. How We Use Your Information</h2>
            <p className="mb-4">We use your information to:</p>
            <ul className="list-disc pl-5 space-y-2">
              <li>Deliver and improve our leadership development programs.</li>
              <li>Communicate with you regarding events, updates, and opportunities.</li>
              <li>Assess program applications and participant eligibility.</li>
              <li>Conduct surveys and gather feedback to enhance our services.</li>
              <li>Comply with legal obligations or protect our rights.</li>
            </ul>
          </div>

          <div id="sharing-your-information" className="scroll-mt-32">
            <h2 className="text-h3 text-navy-900 mb-6">4. Sharing Your Information</h2>
            <p className="mb-4">We do not sell your personal information. However, we may share it in the following contexts:</p>
            <ul className="list-disc pl-5 space-y-2">
              <li><strong>Partner Organizations:</strong> Data may be shared among Siasa Place, AYLF, and Mark Appeal Group for program delivery.</li>
              <li><strong>Service Providers:</strong> Third-party vendors that assist us with operations (e.g., event management platforms, IT services).</li>
              <li><strong>Legal Requirements:</strong> To comply with legal obligations or respond to lawful requests from public authorities.</li>
            </ul>
          </div>

          <div id="data-protection" className="scroll-mt-32">
            <h2 className="text-h3 text-navy-900 mb-6">5. Data Protection and Retention</h2>
            <p className="mb-4">We implement appropriate technical and organizational measures to protect your personal data against unauthorized access, alteration, disclosure, or destruction.</p>
            <p>We retain your information only for as long as necessary to fulfill the purposes outlined in this policy or as required by law.</p>
          </div>

          <div id="your-rights" className="scroll-mt-32">
            <h2 className="text-h3 text-navy-900 mb-6">6. Your Rights</h2>
            <p className="mb-4">Depending on your location, you may have the following rights regarding your personal data:</p>
            <ul className="list-disc pl-5 space-y-2 mb-6">
              <li><strong>Access:</strong> Request a copy of the personal information we hold about you.</li>
              <li><strong>Correction:</strong> Request corrections to inaccurate or incomplete information.</li>
              <li><strong>Deletion:</strong> Request deletion of your personal information (subject to legal obligations).</li>
              <li><strong>Restriction:</strong> Limit how your data is processed.</li>
              <li><strong>Objection:</strong> Object to processing based on legitimate interests.</li>
            </ul>
            <p>To exercise your rights, contact us at <a href="mailto:info@imaraafrica.com" className="text-blue-700 hover:underline">info@imaraafrica.com</a>.</p>
          </div>

          <div id="third-party-services" className="scroll-mt-32">
            <h2 className="text-h3 text-navy-900 mb-6">7. Third-Party Services</h2>
            <p>Our programs and website may include links to external platforms or tools (e.g., Google Maps or event registration platforms). These services operate under their own privacy policies, and we are not responsible for their practices.</p>
          </div>

          <div id="changes" className="scroll-mt-32">
            <h2 className="text-h3 text-navy-900 mb-6">8. Changes to This Privacy Policy</h2>
            <p>We may update this Privacy Policy from time to time to reflect changes in our practices or legal requirements. Updates will be posted on our website with a revised “Effective Date.”</p>
          </div>
        </div>
      </div>
    </section>
  )
}
