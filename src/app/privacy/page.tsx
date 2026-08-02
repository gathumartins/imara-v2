import { PageHero } from "@/components/shared/page-hero"
import { RegisterCta } from "@/components/shared/register-cta"
import { PrivacyContent } from "@/components/sections/privacy/privacy-content"

export default function PrivacyPolicyPage() {
  return (
    <>
      <PageHero
        breadcrumbLabel="Privacy Policy"
        title={
          <>
            Our Commitment to
            <br />
            <span className="text-gold-700">Your Privacy</span>
          </>
        }
      />
      <PrivacyContent />
      <RegisterCta />
    </>
  )
}
