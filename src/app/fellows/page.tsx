import { PageHero } from "@/components/shared/page-hero"
import { RegisterCta } from "@/components/shared/register-cta"
import { CohortsSection } from "@/components/sections/fellows/cohorts-section"

export default function FellowsPage() {
  return (
    <>
      <PageHero
        breadcrumbLabel="Fellows"
        title={
          <>
            Meet the
            <br />
            <span className="text-gold-700">Imara Fellows</span>
          </>
        }
      />

      <CohortsSection />

      <RegisterCta />
    </>
  )
}
