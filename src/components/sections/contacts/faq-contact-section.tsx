"use client"

import { useState, type SubmitEvent } from "react"
import { CheckCircle2, Mail, MapPin, Phone, Plus } from "lucide-react"

import { Button } from "@/components/ui/button"

import type { ContactField, FaqRow } from "@/types/post"

const CF7_FORM_ID = "395"
const CF7_UNIT_TAG = "wpcf7-f395-p1-o1"
const CF7_ENDPOINT = `https://www.admin.imarafellowship.org/wp-json/contact-form-7/v1/contact-forms/${CF7_FORM_ID}/feedback`

export function FaqContactSection({
  faq,
  address,
  contact,
}: {
  faq?: FaqRow[] | null
  address?: string | null
  contact?: ContactField | null
}) {
  const faqs = faq?.map((row) => row.qandas).filter((qanda) => Boolean(qanda?.question)) ?? []

  const contactDetails = [
    contact?.email && {
      icon: Mail,
      label: "Email",
      value: contact.email,
      href: `mailto:${contact.email}`,
    },
    contact?.phone && {
      icon: Phone,
      label: "Phone",
      value: contact.phone,
      href: `tel:${contact.phone.replace(/\s+/g, "")}`,
    },
    address && {
      icon: MapPin,
      label: "Location",
      value: address,
      href: undefined,
    },
  ].filter(Boolean) as { icon: typeof Mail; label: string; value: string; href?: string }[]

  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(1)
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [phone, setPhone] = useState("")
  const [subject, setSubject] = useState("")
  const [message, setMessage] = useState("")
  const [submitting, setSubmitting] = useState(false)
  const [showSuccessMessage, setShowSuccessMessage] = useState(false)
  const [success, setSuccess] = useState(false)
  const [resMessage, setResMessage] = useState("")

  async function handleSubmit(event: SubmitEvent<HTMLFormElement>) {
    event.preventDefault()
    setSubmitting(true)

    const formData = new FormData(event.currentTarget)
    formData.append("_wpcf7", CF7_FORM_ID)
    formData.append("_wpcf7_unit_tag", CF7_UNIT_TAG)

    try {
      const req = await fetch(CF7_ENDPOINT, {
        method: "POST",
        body: formData,
      })

      if (!req.ok) {
        throw new Error(`HTTP error! status: ${req.status}`)
      }

      const response = await req.json()
      setResMessage(response.message)

      if (response.status === "mail_sent") {
        setSuccess(true)
        setShowSuccessMessage(true)
        setTimeout(() => {
          setShowSuccessMessage(false)
          setName("")
          setEmail("")
          setPhone("")
          setSubject("")
          setMessage("")
        }, 5000)
      } else {
        setSuccess(false)
        setResMessage(response.message || "Failed to send message. Please try again.")
        if (response.invalid_fields?.length) {
          console.error("CF7 invalid fields:", response.invalid_fields)
        }
      }
    } catch (error) {
      console.error("Error submitting form:", error)
      setSuccess(false)
      setResMessage("An error occurred while sending your message. Please try again.")
    } finally {
      setSubmitting(false)
    }
  }
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
            {faqs.map((qanda, index) => {
              const isOpen = openFaqIndex === index
              return (
                <div key={qanda?.question ?? index} className="border-b border-gray-200">
                  <button
                    type="button"
                    aria-expanded={isOpen}
                    onClick={() => setOpenFaqIndex((current) => (current === index ? null : index))}
                    className="flex w-full cursor-pointer items-center justify-between gap-4 py-5 text-left"
                  >
                    <span
                      className={`text-ui-bold transition-colors duration-300 ${isOpen ? "text-blue-700" : "text-navy-900"}`}
                    >
                      {qanda?.question}
                    </span>
                    <span
                      className={`flex size-6 shrink-0 items-center justify-center rounded-md transition-all duration-300 ${
                        isOpen ? "rotate-45 bg-blue-700 text-white" : "bg-gray-100 text-gray-500"
                      }`}
                    >
                      <Plus className="size-3.5" />
                    </span>
                  </button>
                  <div
                    className={`grid transition-all duration-300 ease-in-out ${
                      isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                    }`}
                  >
                    <div
                      className="overflow-hidden pb-5 text-body-s text-gray-500 [&_p]:mb-2 last:[&_p]:mb-0"
                      dangerouslySetInnerHTML={{ __html: qanda?.answer ?? "" }}
                    />
                  </div>
                </div>
              )
            })}
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
            {contactDetails.map(({ icon: Icon, label, value, href }) => (
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

          {showSuccessMessage && (
            <div className="mb-5 flex items-center gap-3 rounded-md border border-success/20 bg-success/10 px-4 py-4 text-body-s text-success">
              <CheckCircle2 className="size-5 shrink-0" />
              {resMessage || "Thanks for reaching out — we'll get back to you shortly."}
            </div>
          )}

          <form className="flex flex-col gap-5" onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
              <div className="flex flex-col gap-2">
                <label htmlFor="name" className="text-ui-medium text-navy-900">
                  Name
                </label>
                <input
                  id="name"
                  name="your-name"
                  type="text"
                  required
                  value={name}
                  onChange={(event) => setName(event.target.value)}
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
                  name="your-email"
                  type="email"
                  required
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
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
                name="your-phone"
                type="tel"
                required
                value={phone}
                onChange={(event) => setPhone(event.target.value)}
                placeholder="+254 700 000 000"
                className="h-12 rounded-md border border-gray-200 px-4 text-body-s text-navy-900 placeholder:text-gray-400 focus:border-blue-500 focus:ring-3 focus:ring-blue-500/20 focus:outline-none"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label htmlFor="subject" className="text-ui-medium text-navy-900">
                Subject
              </label>
              <input
                id="subject"
                name="your-subject"
                type="text"
                required
                value={subject}
                onChange={(event) => setSubject(event.target.value)}
                placeholder="What's this about?"
                className="h-12 rounded-md border border-gray-200 px-4 text-body-s text-navy-900 placeholder:text-gray-400 focus:border-blue-500 focus:ring-3 focus:ring-blue-500/20 focus:outline-none"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label htmlFor="message" className="text-ui-medium text-navy-900">
                Message
              </label>
              <textarea
                id="message"
                name="your-message"
                required
                rows={5}
                value={message}
                onChange={(event) => setMessage(event.target.value)}
                placeholder="How can we help you?"
                className="resize-none rounded-md border border-gray-200 px-4 py-3 text-body-s text-navy-900 placeholder:text-gray-400 focus:border-blue-500 focus:ring-3 focus:ring-blue-500/20 focus:outline-none"
              />
            </div>

            {!success && resMessage && (
              <p className="text-caption text-alert">{resMessage}</p>
            )}

            <Button type="submit" size="lg" className="w-full rounded-md" disabled={submitting}>
              {submitting ? "Sending..." : "Send Message"}
            </Button>
          </form>
        </div>
      </div>
    </section>
  )
}
