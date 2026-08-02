import { RegisterCta } from "@/components/shared/register-cta"
import { AboutSection } from "@/components/sections/home/about-section"
import { HeroSection } from "@/components/sections/home/hero-section"
import { ImpactSection } from "@/components/sections/home/impact-section"
import { MissionSection } from "@/components/sections/home/mission-section"
import { PartnersSection } from "@/components/sections/home/partners-section"
import { ProgramComponentsSection } from "@/components/sections/home/program-components-section"
import { TestimonialsSection } from "@/components/sections/home/testimonials-section"

export default function Home() {
  return (
    <>
      <HeroSection />
      <PartnersSection />
      <MissionSection />
      <ImpactSection />
      <ProgramComponentsSection />
      <TestimonialsSection />
      <AboutSection />
      <RegisterCta />
    </>
  )
}
