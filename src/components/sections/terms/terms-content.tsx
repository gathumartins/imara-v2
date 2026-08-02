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

export function TermsContent() {
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
          <div>
            <p className="text-body-lg">
              Welcome to Imara Africa. By participating in our programs, accessing our website, or using our services, you agree to comply with the following Terms and Conditions (“Terms”). Please read these Terms carefully. If you do not agree with them, you may not participate in our programs or use our services.
            </p>
          </div>

          <div id="introduction" className="scroll-mt-32">
            <h2 className="text-h3 text-navy-900 mb-6">1. Introduction</h2>
            <p className="mb-4">Imara Africa is a leadership development program collaboratively convened by:</p>
            <ul className="list-disc pl-5 space-y-2 mb-4">
              <li><strong>Siasa Place (SP):</strong> A CSO focused on advocacy, education, and capacity building.</li>
              <li><strong>Africa Youth Leadership Forum (AYLF):</strong> A leadership trust fostering values and skills among young leaders.</li>
              <li><strong>Mark Appeal Group (MA):</strong> A social consultancy designing high-impact programs and strategic collaborations.</li>
            </ul>
            <p>These Terms govern your participation in our programs, use of our resources, and interaction with our website and services.</p>
          </div>

          <div id="eligibility" className="scroll-mt-32">
            <h2 className="text-h3 text-navy-900 mb-6">2. Eligibility</h2>
            <p className="mb-4">To participate in Imara Africa programs or access certain services:</p>
            <ul className="list-disc pl-5 space-y-2">
              <li>You must be at least 18 years old or meet the eligibility criteria specified for a particular program.</li>
              <li>You must provide accurate and truthful information when applying for programs or using our services.</li>
            </ul>
          </div>

          <div id="program-participation" className="scroll-mt-32">
            <h2 className="text-h3 text-navy-900 mb-6">3. Program Participation</h2>
            
            <h3 className="text-body-l font-bold text-navy-800 mb-4 mt-6">a. Application and Selection</h3>
            <ul className="list-disc pl-5 space-y-2 mb-6">
              <li>Applications to our programs are subject to review and approval. Acceptance into a program is at the sole discretion of Imara Africa and its convening organizations.</li>
              <li>Misrepresentation of information during the application process may result in disqualification.</li>
            </ul>

            <h3 className="text-body-l font-bold text-navy-800 mb-4 mt-6">b. Participation Requirements</h3>
            <ul className="list-disc pl-5 space-y-2 mb-6">
              <li>Participants are expected to adhere to program guidelines, schedules, and any rules communicated during the program.</li>
              <li>Disruptive behavior or failure to comply with guidelines may result in removal from the program.</li>
            </ul>

            <h3 className="text-body-l font-bold text-navy-800 mb-4 mt-6">c. Certificates and Recognition</h3>
            <ul className="list-disc pl-5 space-y-2">
              <li>Certificates or acknowledgments of participation may be provided based on completion of the program’s requirements, at the sole discretion of Imara Africa.</li>
            </ul>
          </div>

          <div id="intellectual-property" className="scroll-mt-32">
            <h2 className="text-h3 text-navy-900 mb-6">4. Intellectual Property</h2>
            
            <h3 className="text-body-l font-bold text-navy-800 mb-4 mt-6">a. Ownership</h3>
            <p className="mb-6">All content, materials, and resources provided during the program or made available on our website are the intellectual property of Imara Africa or its partners unless otherwise stated.</p>

            <h3 className="text-body-l font-bold text-navy-800 mb-4 mt-6">b. Restrictions</h3>
            <ul className="list-disc pl-5 space-y-2">
              <li>You may not reproduce, distribute, or share program materials without prior written permission from Imara Africa.</li>
              <li>Use of materials is restricted to personal and non-commercial purposes unless expressly authorized.</li>
            </ul>
          </div>

          <div id="privacy" className="scroll-mt-32">
            <h2 className="text-h3 text-navy-900 mb-6">5. Privacy</h2>
            <p>Your personal information is handled in accordance with our Privacy Policy. By participating in our programs or using our services, you consent to the collection, use, and sharing of your information as outlined in the Privacy Policy.</p>
          </div>

          <div id="code-of-conduct" className="scroll-mt-32">
            <h2 className="text-h3 text-navy-900 mb-6">6. Code of Conduct</h2>
            <p className="mb-4">As a participant or user of our services, you agree to:</p>
            <ul className="list-disc pl-5 space-y-2 mb-4">
              <li>Treat others with respect and dignity.</li>
              <li>Avoid any form of harassment, discrimination, or inappropriate behavior.</li>
              <li>Abide by the rules and expectations set forth by Imara Africa and its partner organizations.</li>
            </ul>
            <p>Failure to adhere to the Code of Conduct may result in immediate removal from programs or restricted access to our services.</p>
          </div>

          <div id="limitation-of-liability" className="scroll-mt-32">
            <h2 className="text-h3 text-navy-900 mb-6">7. Limitation of Liability</h2>
            
            <h3 className="text-body-l font-bold text-navy-800 mb-4 mt-6">a. No Guarantees</h3>
            <p className="mb-6">Imara Africa makes no guarantees about the outcomes or results of participating in its programs or using its services.</p>

            <h3 className="text-body-l font-bold text-navy-800 mb-4 mt-6">b. Indemnification</h3>
            <p className="mb-6">You agree to indemnify and hold harmless Imara Africa, its partner organizations, and affiliates from any claims, losses, or damages resulting from your participation in programs or use of our services.</p>

            <h3 className="text-body-l font-bold text-navy-800 mb-4 mt-6">c. Program Changes</h3>
            <p>We reserve the right to modify, cancel, or reschedule programs or events at our discretion.</p>
          </div>

          <div id="third-party-services" className="scroll-mt-32">
            <h2 className="text-h3 text-navy-900 mb-6">8. Third-Party Services</h2>
            <p>Our programs may involve third-party services or platforms (e.g., registration systems, collaboration tools). Your use of these services is subject to their respective terms and conditions.</p>
          </div>

          <div id="termination" className="scroll-mt-32">
            <h2 className="text-h3 text-navy-900 mb-6">9. Termination</h2>
            <p>Imara Africa reserves the right to terminate your participation in any program or restrict access to services if you violate these Terms or engage in behavior deemed harmful to the program or its participants.</p>
          </div>

          <div id="governing-law" className="scroll-mt-32">
            <h2 className="text-h3 text-navy-900 mb-6">10. Governing Law</h2>
            <p>These Terms are governed by and construed in accordance with the laws of Kenya. Any disputes arising under these Terms shall be resolved in the courts of Kenya.</p>
          </div>

          <div id="changes" className="scroll-mt-32">
            <h2 className="text-h3 text-navy-900 mb-6">11. Changes to These Terms</h2>
            <p>We may update these Terms from time to time to reflect changes in our operations or legal requirements. Updates will be posted on our website with a revised “Effective Date.” Continued use of our services or participation in our programs constitutes your acceptance of the updated Terms.</p>
          </div>
        </div>
      </div>
    </section>
  )
}
