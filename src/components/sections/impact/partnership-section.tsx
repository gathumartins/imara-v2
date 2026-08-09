import { MissionShape } from "@/components/shared/mission-shape"
import { Card, CardContent } from "@/components/ui/card"
import type { ImpactPartnershipField } from "@/types/post"

import { HighlightPhoto, SectionEyebrow } from "./section-helpers"

export function PartnershipSection({ partnership }: { partnership?: ImpactPartnershipField | null }) {
  return (
    <section id="partnerships" className="scroll-mt-20 relative overflow-hidden bg-gold-100 py-20 md:py-24">
      <MissionShape
        className="pointer-events-none absolute"
        style={{
          bottom: "-10%",
          left: "-80%",
          width: "180%",
          height: "auto",
          minWidth: "1200px",
        }}
      />
      <div className="container-page relative flex flex-col gap-14">
        <div className="flex flex-col gap-5">
          <SectionEyebrow label="02 — Partnership" />
          <div className="flex flex-col gap-5 lg:max-w-3xl">
            <h2
              className="text-h2 text-navy-900"
              dangerouslySetInnerHTML={{
                __html: partnership?.title ?? "Building a coalition for change",
              }}
            />
            <div
              className="text-body text-gray-500 [&_p]:mb-0"
              dangerouslySetInnerHTML={{
                __html:
                  partnership?.description ??
                  "The implementation of this work has seen the project establish firm partnerships with county governments and local organisations — creating a durable infrastructure for youth-led policy engagement across Kenya.",
              }}
            />
          </div>
        </div>

        <Card className="border-0 p-0 shadow-md ring-1 ring-black/5">
          <CardContent className="grid gap-0 px-0 md:grid-cols-2">
            <HighlightPhoto
              media={partnership?.highlight?.media}
              className="min-h-[360px] rounded-none rounded-l-2xl md:rounded-r-none"
              captionTitle="Partnership in action"
              captionSubtitle="Fellows and stakeholders in dialogue"
            />
            <div
              className="flex flex-col justify-center gap-5 p-8 text-body text-gray-500 [&_p]:mb-0 md:p-10"
              dangerouslySetInnerHTML={{
                __html:
                  partnership?.highlight?.description ??
                  "The project was able to develop partnerships with county governments and youth serving organisations — a two-way channel where Imara fellows brought policy frameworks to community spaces, while local organisations provided grassroots credibility and community trust that no government institution could replicate.",
              }}
            />
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
