import { TestimonialCarousel, type Testimonial } from "@/components/shared/testimonial-carousel"

// Only one testimonial has confirmed real copy + a matching photo (see the
// Mission section rebuild notes on the Kwabena Asante photo/name mismatch
// fix). TestimonialCarousel is fully data-driven — add more real entries
// here as they become available.
const TESTIMONIALS: Testimonial[] = [
  {
    quote:
      "Imara didn't just teach me about policy — it immersed me in it. I left with the analytical tools, the mentors, and frankly the audacity to walk into a minister's office and make the case for change.",
    name: "Kwabena Asante",
    initials: "KA",
    role: "Cohort 3 Fellow · Nairobi",
    cohortBadge: "Cohort 3",
    photoSrc: "/kwabena-asante.webp",
    photoAlt: "Kwabena Asante, Imara Fellowship Cohort 3",
  },
  // Placeholder slides (no real quote/photo sourced yet) — demonstrates the
  // carousel with real navigation. Names reused from the Fellows page's
  // placeholder roster for continuity; swap for real fellow testimonials
  // as they're collected.
  {
    quote:
      "The Residential Academy pushed me further than I expected — I came in with theory and left with a network I still lean on today.",
    name: "Amina Otieno",
    initials: "AO",
    role: "Cohort 4 Fellow · Health Policy",
    cohortBadge: "Cohort 4",
  },
  {
    quote:
      "What stuck with me was the honesty of the mentorship — no one pretended governance work is easy, but they showed me how to do it well.",
    name: "Faith Wanjiru",
    initials: "FW",
    role: "Cohort 2 Fellow · Youth Inclusion",
    cohortBadge: "Cohort 2",
  },
]

export function TestimonialsSection() {
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

        <TestimonialCarousel testimonials={TESTIMONIALS} />
      </div>
    </section>
  )
}
