import { Card, CardContent } from "@/components/ui/card"

import { PlaceholderPhoto, SectionEyebrow } from "./section-helpers"

const POLICY_OUTCOMES = [
  {
    location: "Kericho",
    title: "TVET Instructor Hiring Recommendations",
    description:
      "A report led to recommendations for hiring more instructors in Technical Vocational and Educational Training Centers in Kericho County.",
  },
  {
    location: "Kisumu",
    title: "Entrepreneurial Training Programme",
    description:
      "Engagements identified youth income sources like betting and adult content creation, resulting in recommendations for entrepreneurial training, now implemented by Jiwo Paro.",
  },
]

export function PolicyRecommendationsSection() {
  return (
    <section id="policy-recommendations" className="scroll-mt-20 bg-white py-20 md:py-24">
      <div className="container-page flex flex-col gap-14">
        <div className="flex flex-col gap-5">
          <SectionEyebrow label="03 — Developing Policy Recommendations" />
          <div className="flex flex-col gap-5 lg:max-w-3xl">
            <h2 className="text-h2 text-navy-900">
              Co-creating solutions that
              <br />
              <span className="text-blue-700">reach the assembly</span>
            </h2>
            <p className="text-body text-gray-500">
              The project addressed key county policy issues and co-created actionable
              solutions. From hiring instructors in Technical Vocational centres to
              entrepreneurship training programmes — Imara fellows moved ideas from
              community forums into formal policy channels.
            </p>
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {POLICY_OUTCOMES.map((outcome) => (
            <Card
              key={outcome.title}
              className="relative overflow-hidden border-0 bg-white shadow-md ring-1 ring-black/5"
            >
              <div
                aria-hidden
                className="pointer-events-none absolute -right-6 -top-6 size-24 rounded-full bg-gold-700/10 blur-2xl"
              />
              <CardContent className="relative flex flex-col gap-3">
                <span className="inline-flex w-fit items-center gap-1.5 rounded-full bg-gold-100 px-3 py-1.5 text-caption font-semibold text-gold-700">
                  📍 {outcome.location}
                </span>
                <p className="text-ui-bold text-navy-900">{outcome.title}</p>
                <p className="text-body-s text-gray-500">{outcome.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid gap-10 lg:grid-cols-2 lg:items-center lg:gap-14">
          <div className="flex flex-col gap-5">
            <p className="text-body-s text-gray-500">
              The policy document&apos;s infographics were based on insights from
              government representatives who contributed to its finalisation. Key
              departments, including the Youth Office, Education and ICT, and
              Industrialisation &amp; Enterprise Development, supported data collection.
            </p>
            <p className="text-body-s text-gray-500">
              Despite challenges like slow progress and political stand-offs, the Busia
              steering committee&apos;s efforts led to the assembly tabling a youth
              internship policy motion on <span className="font-bold text-navy-900">August 6, 2019</span>.
            </p>
          </div>
          <PlaceholderPhoto
            captionTitle="August 6, 2019"
            captionTitleClassName="text-caption font-bold text-gold-700"
            captionSubtitle="The Busia steering committee's efforts led to the assembly tabling a youth internship policy motion."
          />
        </div>
      </div>
    </section>
  )
}
