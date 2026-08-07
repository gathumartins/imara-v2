import { TestimonialCarousel, type Testimonial } from "@/components/shared/testimonial-carousel"
import type { TestimonialNode } from "@/types/post"

function getInitials(name: string) {
  return name
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0]?.toUpperCase())
    .join("")
}

export function TestimonialsSection({
  testimonials,
}: {
  testimonials?: Array<{ node?: TestimonialNode | null }> | null
}) {
  const cmsTestimonials: Testimonial[] = testimonials
    ?.map((edge) => edge?.node)
    .filter((node): node is TestimonialNode => Boolean(node))
    .map((node) => {
      const name = node.title ?? "Imara Fellow"
      const cohort = node.testimonialFields?.cohort ?? null

      return {
        quote: node.content ?? "",
        name,
        initials: getInitials(name),
        role: cohort ? `${cohort} Fellow` : "Imara Fellow",
        cohortBadge: cohort ?? "Fellow",
      }
    }) ?? []

  return (
    <section className="bg-blue-700 py-20 md:py-24">
      <div className="container-page flex flex-col gap-14">
        <div className="flex flex-col items-center gap-4 text-center">
          <div className="flex items-center gap-3">
            <span className="h-0.5 w-5 bg-gold-600" />
            <p className="text-tag text-white">Fellow Voices</p>
          </div>
          <h2 className="text-white">Stories of transformation</h2>
        </div>

        <TestimonialCarousel testimonials={cmsTestimonials} />
      </div>
    </section>
  )
}
