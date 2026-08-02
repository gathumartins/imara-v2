import { PageHero } from "@/components/shared/page-hero"
import { RegisterCta } from "@/components/shared/register-cta"
import { ReportsListingSection } from "@/components/sections/reports/reports-listing-section"

export default function ReportsPage() {
  return (
    <>
      <PageHero
        breadcrumbLabel="Reports"
        title={
          <>
            Get updated with
            <br />
            Our <span className="text-gold-700">Report</span>
          </>
        }
      />

      <ReportsListingSection />

      <RegisterCta />
    </>
  )
}
