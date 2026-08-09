"use client"

import { useState } from "react"
import { Quote } from "lucide-react"

import { Card, CardContent } from "@/components/ui/card"
import { cn } from "@/lib/utils"
import type { ImpactCapacityField, ImpactSubgroup, TestimonialNode } from "@/types/post"

import { SectionEyebrow } from "./section-helpers"

const DEFAULT_SUBGROUPS: ImpactSubgroup[] = [
  {
    title: "Individual Impact",
    shortname: "individual",
    description:
      "Our fellows have advanced their careers and studies in policy and governance. Notable examples include Ms. Gladys Ndanu, promoted for her role in Universal Health Care in Muranga County, influenced by a youth baraza panel discussion. Mr. Shadrack Osero earned a DAAD Helmut Schmidt Program scholarship for a Master's in Public Management at the University of Potsdam, based on work addressing TVET policy gaps in Kericho. Additionally, Mr. Mathew Ndolo and Ms. Ivy Wandia Gathoni pursued policy studies at UC Berkeley and the Geneva Graduate Institute — testament to the fellowship's reach into global academic institutions.",
  },
  {
    title: "Community & County",
    shortname: "community",
    description:
      "The community youth served as local partners during implementation, actively engaging Members of the County Assembly (MCAs) to lobby for the adoption of key project report recommendations. For instance, members of the Kericho Youth Network held two strategic meetings with youthful MCAs to push for report implementation. The same success was replicated in Busia County, where the steering committee convinced youthful MCAs to raise a motion on the Youth Internship Policy. Furthermore, two fellows — Dr. Edwin Rono and Mr. Brian Keter — were recommended by the Chief Officer to the County Governor for appointment to the boards of two technical training institutions.",
  },
]

const DEFAULT_TESTIMONIALS: TestimonialNode[] = [
  {
    title: "Gladys Ndanu",
    content:
      "The fellowship gave me the frameworks and the confidence to push for Universal Health Care policy in Muranga County.",
    testimonialFields: { cohort: "Cohort 3" },
  },
  {
    title: "Shadrack Osero",
    content:
      "Working on TVET policy gaps in Kericho through Imara opened the door to a DAAD scholarship at the University of Potsdam.",
    testimonialFields: { cohort: "Cohort 2" },
  },
]

function initialsFor(value?: string | null) {
  if (!value) return "IF"
  const parts = value.trim().split(/\s+/)
  return parts
    .slice(0, 2)
    .map((part) => part[0]?.toUpperCase())
    .join("")
}

export function CapacityBuildingSection({
  capacity,
  testimonials,
}: {
  capacity?: ImpactCapacityField | null
  testimonials?: Array<{ node?: TestimonialNode | null }> | null
}) {
  const subgroups = capacity?.subgroups?.list?.length ? capacity.subgroups.list : DEFAULT_SUBGROUPS

  const defaultShortname = capacity?.defaultValue ?? subgroups[0]?.shortname ?? subgroups[0]?.title ?? ""
  const [activeTab, setActiveTab] = useState(defaultShortname)

  const activeSubgroup =
    subgroups.find((group) => (group.shortname ?? group.title) === activeTab) ?? subgroups[0]

  const cmsTestimonials = testimonials
    ?.map((edge) => edge?.node)
    .filter((node): node is TestimonialNode => Boolean(node))
    .slice(0, 2)
  const highlightTestimonials = cmsTestimonials?.length ? cmsTestimonials : DEFAULT_TESTIMONIALS

  return (
    <section id="capacity-building" className="scroll-mt-20 bg-white py-20 md:py-24">
      <div className="container-page flex flex-col gap-10">
        <div className="flex flex-col gap-5">
          <SectionEyebrow label="01 — Capacity Building" />
          <div className="flex w-full flex-col gap-5">
            <h2
              className="text-h2 text-navy-900"
              dangerouslySetInnerHTML={{
                __html: capacity?.title ?? "Building the capacity of Kenya's next leaders",
              }}
            />
            <div
              className="text-body text-gray-500 w-full [&_p]:mb-0"
              dangerouslySetInnerHTML={{
                __html:
                  capacity?.description ??
                  "The project continues to register progress in building the capacity of the youth in two levels — the Imara Fellows who are recruited to be trained in policy-making in partnership with county governments, and the community youth who serve as local partners during implementation.",
              }}
            />
          </div>
        </div>

        <div className="grid gap-10 lg:grid-cols-2 lg:gap-14">
          <div className="flex flex-col">
            {/* Interactive Tab Switcher */}
            <div className="mb-8 inline-flex w-full flex-wrap items-center gap-1 rounded-[4px] border border-gray-200 bg-white p-1 sm:w-fit">
              {subgroups.map((group) => {
                const key = group.shortname ?? group.title ?? ""
                return (
                  <button
                    key={key}
                    type="button"
                    onClick={() => setActiveTab(key)}
                    className={cn(
                      "flex-1 rounded-[2px] px-8 py-3 text-center text-ui-medium transition-all sm:flex-none",
                      activeTab === key
                        ? "bg-gold-700 text-navy-900 shadow-sm"
                        : "text-gray-500 hover:text-navy-900"
                    )}
                  >
                    {group.title}
                  </button>
                )
              })}
            </div>

            {/* Active Subgroup Content */}
            {activeSubgroup && (
              <div
                key={activeSubgroup.shortname ?? activeSubgroup.title}
                className="flex flex-col gap-5 text-body text-gray-500 animate-fadeIn [&_p]:mb-0"
                dangerouslySetInnerHTML={{ __html: activeSubgroup.description ?? "" }}
              />
            )}
          </div>

          {/* Right Side — Fellow Testimonials */}
          <div className="flex flex-col gap-4">
            {highlightTestimonials.map((testimonial, index) => {
              const name = testimonial.title ?? "Imara Fellow"
              const cohort = testimonial.testimonialFields?.cohort

              return (
                <Card
                  key={`${name}-${index}`}
                  className="border border-gray-200 bg-gray-100 ring-0 hover:shadow-md transition-all"
                >
                  <CardContent className="flex gap-4">
                    <span className="flex size-10 shrink-0 items-center justify-center rounded-full bg-gold-700 text-navy-900 text-ui-bold">
                      {initialsFor(name)}
                    </span>
                    <div className="flex flex-col gap-1.5">
                      <div className="flex items-center gap-2">
                        <Quote className="size-4 text-blue-700" strokeWidth={2} />
                        <p className="text-ui-bold text-navy-900">{name}</p>
                      </div>
                      <div
                        className="text-body-s text-gray-500 line-clamp-3 [&_p]:mb-0"
                        dangerouslySetInnerHTML={{ __html: testimonial.content ?? "" }}
                      />
                      {cohort && (
                        <span className="w-fit rounded-full bg-blue-100 px-3 py-1 text-caption text-blue-700 ring-1 ring-blue-300">
                          {cohort}
                        </span>
                      )}
                    </div>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
