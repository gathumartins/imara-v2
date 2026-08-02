import { MissionShape } from "@/components/shared/mission-shape"
import { Card, CardContent } from "@/components/ui/card"

import { PlaceholderPhoto, SectionEyebrow } from "./section-helpers"

const COUNTY_PARTNERS = [
  "County Government of Kisumu",
  "County Government of Busia",
  "County Government of Kericho",
  "Jiwo Paro — Kisumu",
  "Kondele Social Justice Centre",
]

const YOUTH_ORGS = [
  "PAWA 254",
  "WOSWA",
  "TEAM-Transform Empowerment for Action Initiative (Kisumu)",
  "Busia Youth Steering Committee",
  "Kericho Youth Network",
]

const ORG_CHIPS = [
  "PAWA 254",
  "WOSWA",
  "Youth Baraza",
  "Leadership Cafes",
  "Kericho Youth Network",
]

export function PartnershipSection() {
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
            <h2 className="text-h2 text-navy-900">
              Building a <span className="text-blue-700">coalition for change</span>
            </h2>
            <p className="text-body text-gray-500">
              The implementation of this work has seen the project establish firm
              partnerships with county governments and local organisations — creating a
              durable infrastructure for youth-led policy engagement across Kenya.
            </p>
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          <Card className="border-0 shadow-md ring-1 ring-black/5">
            <CardContent className="flex flex-col gap-4">
              <span className="flex size-12 items-center justify-center rounded-xl bg-gold-100 text-2xl">
                🏛️
              </span>
              <p className="text-ui-bold text-navy-900">
                County Government Partners
              </p>
              <p className="text-justify text-body-s text-gray-500">
                Formal partnerships established with county governments that provide Imara
                fellows with direct access to governance processes, policy formulation
                sessions, and county executive engagements.
              </p>
              <ul className="flex flex-col gap-2">
                {COUNTY_PARTNERS.map((partner) => (
                  <li key={partner} className="flex items-start gap-2 text-body-s text-gray-500">
                    <span className="mt-2 size-1.5 shrink-0 rounded-full bg-gold-600" />
                    {partner}
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-md ring-1 ring-black/5">
            <CardContent className="flex flex-col gap-4">
              <span className="flex size-12 items-center justify-center rounded-xl bg-gold-100 text-2xl">
                🤝
              </span>
              <p className="text-ui-bold text-navy-900">
                Youth Serving Organisations
              </p>
              <p className="text-justify text-body-s text-gray-500">
                Strategic partnerships with youth-focused organisations that extend the
                fellowship&apos;s community reach, mobilise local youth, and co-host
                leadership forums and barazas.
              </p>
              <ul className="flex flex-col gap-2">
                {YOUTH_ORGS.map((org) => (
                  <li key={org} className="flex items-start gap-2 text-body-s text-gray-500">
                    <span className="mt-2 size-1.5 shrink-0 rounded-full bg-gold-600" />
                    {org}
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>

        <Card className="border-0 p-0 shadow-md ring-1 ring-black/5">
          <CardContent className="grid gap-0 px-0 md:grid-cols-2">
            <PlaceholderPhoto
              className="min-h-[360px] rounded-none rounded-l-2xl md:rounded-r-none"
              captionTitle="Community engagement session — Kisumu County"
              captionSubtitle="Fellows and county stakeholders in dialogue"
            />
            <div className="flex flex-col gap-5 p-8 md:p-10">
              <h3 className="text-h3">
                Youth organisations that
                <br />
                <span className="text-blue-700">extended our reach</span>
              </h3>
              <p className="text-body-s text-gray-500">
                The project was able to develop partnerships with different Youth Serving
                Organisations. PAWA 254 and WOSWA collaboratively hosted the leadership
                cafes and the First Youth Baraza respectively, in addition to mobilisation
                of the youth and key stakeholders during these activities.
              </p>
              <p className="text-body-s text-gray-500">
                These partnerships created a two-way channel — Imara fellows brought
                policy frameworks to community spaces, while local organisations provided
                grassroots credibility and community trust that no government institution
                could replicate.
              </p>
              <div className="flex flex-wrap gap-2">
                {ORG_CHIPS.map((chip) => (
                  <span
                    key={chip}
                    className="rounded-full bg-blue-100 px-3 py-1.5 text-caption text-blue-700 ring-1 ring-blue-300"
                  >
                    {chip}
                  </span>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
