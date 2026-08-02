import { PageHero } from "@/components/shared/page-hero"
import { RegisterCta } from "@/components/shared/register-cta"

import { CapacityBuildingSection } from "@/components/sections/impact/capacity-building-section"
import { InPageNavSection } from "@/components/sections/impact/in-page-nav-section"
import { PartnershipSection } from "@/components/sections/impact/partnership-section"
import { PolicyRecommendationsSection } from "@/components/sections/impact/policy-recommendations-section"

export default function ImpactPage() {
  return (
    <>
      <PageHero
        breadcrumbLabel="Impact"
        title={
          <>
            Changing <span className="text-gold-700">Kenya&apos;s policy</span>
            <br />
            landscape — together
          </>
        }
      />

      <InPageNavSection />
      <CapacityBuildingSection />
      <PartnershipSection />
      <PolicyRecommendationsSection />

      <RegisterCta />
    </>
  )
}
