import { PageHero } from "@/components/shared/page-hero"
import { RegisterCta } from "@/components/shared/register-cta"
import { AlumniTeamSection } from "@/components/sections/about/alumni-team-section"
import { IntroSection } from "@/components/sections/about/intro-section"
import { MissionValuesSection } from "@/components/sections/about/mission-values-section"
import { ProgrammeComponentsSection } from "@/components/sections/about/programme-components-section"

export default function AboutPage() {
  return (
    <>
      <PageHero
        breadcrumbLabel="About Us"
        title={
          <>
            Building Africa&apos;s next
            <br />
            generation of <span className="text-gold-700">policy leaders</span>
          </>
        }
      />

      <IntroSection />
      <MissionValuesSection />
      <ProgrammeComponentsSection />
      <AlumniTeamSection />

      <RegisterCta />
    </>
  )
}
