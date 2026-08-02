import { Mail, MapPin, Phone, Plus } from "lucide-react"

import { Button } from "@/components/ui/button"

const FAQS = [
  {
    question: "Who should apply for the programme?",
    answer:
      "Mid-career professionals, civil servants, and civil-society leaders across Africa who are actively shaping governance and public policy in their communities.",
  },
  {
    question: "What are the key outputs of the fellowship?",
    answer:
      "Fellows complete four programme components — the Residential Academy, Online Learning, Community Collaboration, and Public Lectures & Leadership Cafes. Each produces tangible outputs: a policy paper, a community engagement report, and a certified credential from a global university partner.",
  },
  {
    question: "Is the fellowship fully funded?",
    answer:
      "Yes. Tuition, residency costs, and learning materials are fully covered for admitted fellows through Imara Fellowship's partner network.",
  },
  {
    question: "How do I register or apply?",
    answer:
      "Applications open ahead of each cohort intake. Head to the Apply page to review eligibility criteria and submit your application online.",
  },
]

const CONTACT_DETAILS = [
  {
    icon: Mail,
    label: "General",
    value: "info@imarafellowship.org",
    href: "mailto:info@imarafellowship.org",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+254 700 000 000",
    href: "tel:+254700000000",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "4th Floor, Middle East Bank Towers, Westlands",
    href: undefined,
  },
]

export function FaqContactSection() {
  return (
    <section className="border-t border-gray-200 bg-white py-20 md:py-24">
      <div className="container-page grid grid-cols-1 gap-16 lg:grid-cols-2 lg:gap-12">
        {/* FAQ */}
        <div>
          <p className="text-tag mb-3 text-gold-600">FAQ</p>
          <h2 className="mb-3">Frequently asked questions</h2>
          <p className="mb-8 text-body text-gray-500">
            Can&apos;t find what you&apos;re looking for? Send us a message using the form and
            we&apos;ll get back to you shortly.
          </p>

          <div className="flex flex-col">
            {FAQS.map((faq, index) => (
              <details
                key={faq.question}
                open={index === 1}
                className="group border-b border-gray-200"
              >
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 py-5 text-left marker:content-none [&::-webkit-details-marker]:hidden">
                  <span className="text-ui-bold text-navy-900 group-open:text-blue-700">
                    {faq.question}
                  </span>
                  <span className="flex size-6 shrink-0 items-center justify-center rounded-md bg-gray-100 text-gray-500 transition-transform group-open:rotate-45 group-open:bg-blue-700 group-open:text-white">
                    <Plus className="size-3.5" />
                  </span>
                </summary>
                <p className="pb-5 text-body-s text-gray-500">{faq.answer}</p>
              </details>
            ))}
          </div>
        </div>

        {/* Contact form */}
        <div>
          <p className="text-tag mb-3 text-gold-600">Send a Message</p>
          <h2 className="mb-3">Want to work with us? Talk to us.</h2>
          <p className="mb-8 text-body text-gray-500">
            Whether you&apos;re a potential partner, funder, or just curious — we&apos;re
            always open to a conversation.
          </p>

          <div className="mb-8 flex flex-col gap-5 rounded-md bg-navy-900 p-6 shadow-sm border border-navy-800">
            {CONTACT_DETAILS.map(({ icon: Icon, label, value, href }) => (
              <div key={label} className="flex items-center gap-4">
                <span className="flex size-10 shrink-0 items-center justify-center rounded-md bg-white/10 text-white">
                  <Icon className="size-4" />
                </span>
                <div>
                  <p className="text-caption text-blue-300">{label}</p>
                  {href ? (
                    <a href={href} className="text-body-s text-white transition-colors hover:text-gold-600">
                      {value}
                    </a>
                  ) : (
                    <p className="text-body-s text-white">{value}</p>
                  )}
                </div>
              </div>
            ))}
          </div>

          <form className="flex flex-col gap-5">
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
              <div className="flex flex-col gap-2">
                <label htmlFor="name" className="text-ui-medium text-navy-900">
                  Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  placeholder="Your full name"
                  className="h-12 rounded-md border border-gray-200 px-4 text-body-s text-navy-900 placeholder:text-gray-400 focus:border-blue-500 focus:ring-3 focus:ring-blue-500/20 focus:outline-none"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="email" className="text-ui-medium text-navy-900">
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  placeholder="you@example.com"
                  className="h-12 rounded-md border border-gray-200 px-4 text-body-s text-navy-900 placeholder:text-gray-400 focus:border-blue-500 focus:ring-3 focus:ring-blue-500/20 focus:outline-none"
                />
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <label htmlFor="phone" className="text-ui-medium text-navy-900">
                Phone
              </label>
              <input
                id="phone"
                name="phone"
                type="tel"
                placeholder="+254 700 000 000"
                className="h-12 rounded-md border border-gray-200 px-4 text-body-s text-navy-900 placeholder:text-gray-400 focus:border-blue-500 focus:ring-3 focus:ring-blue-500/20 focus:outline-none"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label htmlFor="message" className="text-ui-medium text-navy-900">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={5}
                placeholder="How can we help you?"
                className="resize-none rounded-md border border-gray-200 px-4 py-3 text-body-s text-navy-900 placeholder:text-gray-400 focus:border-blue-500 focus:ring-3 focus:ring-blue-500/20 focus:outline-none"
              />
            </div>

            <Button type="submit" size="lg" className="w-full rounded-md">
              Send Message
            </Button>
          </form>
        </div>
      </div>
    </section>
  )
}
