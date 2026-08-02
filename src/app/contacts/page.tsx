import { PageHero } from "@/components/shared/page-hero"
import { RegisterCta } from "@/components/shared/register-cta"
import { FaqContactSection } from "@/components/sections/contacts/faq-contact-section"
import { MapSection } from "@/components/sections/contacts/map-section"

export default function ContactsPage() {
  return (
    <>
      <PageHero
        breadcrumbLabel="Contact Us"
        title={
          <>
            Get In
            <br />
            <span className="text-gold-700">Touch</span> with us
          </>
        }
      />

      <MapSection />
      <FaqContactSection />

      <RegisterCta />
    </>
  )
}
