import { PageHero } from "@/components/shared/page-hero"
import { RegisterCta } from "@/components/shared/register-cta"
import { TermsContent } from "@/components/sections/terms/terms-content"

export default function TermsAndConditionsPage() {
  return (
    <>
      <PageHero
        breadcrumbLabel="Terms & Conditions"
        title={
          <>
            Program Rules and
            <br />
            <span className="text-gold-700">Guidelines</span>
          </>
        }
      />
      <TermsContent />
      <RegisterCta />
    </>
  )
}
