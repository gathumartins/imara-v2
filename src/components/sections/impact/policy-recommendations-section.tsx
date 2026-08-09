import type { ImpactPolicyField } from "@/types/post"

import { HighlightPhoto, SectionEyebrow } from "./section-helpers"

export function PolicyRecommendationsSection({ policy }: { policy?: ImpactPolicyField | null }) {
  return (
    <section id="policy-recommendations" className="scroll-mt-20 bg-white py-20 md:py-24">
      <div className="container-page flex flex-col gap-14">
        <div className="flex flex-col gap-5">
          <SectionEyebrow label="03 — Developing Policy Recommendations" />
          <div className="flex flex-col gap-5 lg:max-w-3xl">
            <h2
              className="text-h2 text-navy-900"
              dangerouslySetInnerHTML={{
                __html: policy?.title ?? "Co-creating solutions that reach the assembly",
              }}
            />
            <div
              className="text-body text-gray-500 [&_p]:mb-0"
              dangerouslySetInnerHTML={{
                __html:
                  policy?.description ??
                  "The project addressed key county policy issues and co-created actionable solutions. From hiring instructors in Technical Vocational centres to entrepreneurship training programmes — Imara fellows moved ideas from community forums into formal policy channels.",
              }}
            />
          </div>
        </div>

        <div className="grid gap-10 lg:grid-cols-2 lg:items-center lg:gap-14">
          <div
            className="flex flex-col gap-5 text-body-s text-gray-500 [&_p]:mb-0"
            dangerouslySetInnerHTML={{
              __html:
                policy?.highlight?.description ??
                "The policy document's infographics were based on insights from government representatives who contributed to its finalisation. Despite challenges like slow progress and political stand-offs, county steering committees pushed recommendations into formal policy motions.",
            }}
          />
          <HighlightPhoto
            media={policy?.highlight?.media}
            captionTitle="Policy recommendations in action"
            captionTitleClassName="text-caption font-bold text-gold-700"
            captionSubtitle="Turning community insight into formal policy channels."
          />
        </div>
      </div>
    </section>
  )
}
