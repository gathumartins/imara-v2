"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { cn } from "@/lib/utils"

import { SectionEyebrow } from "./section-helpers"

const INDIVIDUAL_HIGHLIGHTS = [
  {
    initials: "GN",
    avatarClass: "bg-gold-700 text-blue-700",
    name: "Gladys Ndanu",
    description:
      "Promoted for her role in Universal Health Care, Muranga County — influenced by a youth baraza panel discussion.",
    tag: "Health Policy",
  },
  {
    initials: "SO",
    avatarClass: "bg-navy-900 text-white",
    name: "Shadrack Osero",
    description:
      "DAAD Helmut Schmidt Scholarship — Master's in Public Management, University of Potsdam. Work focused on TVET policy gaps in Kericho.",
    tag: "Academic Achievement",
  },
  {
    initials: "MN",
    avatarClass: "bg-gold-700 text-blue-700",
    name: "Mathew Ndolo & Ivy Wandia Gathoni",
    description:
      "Policy studies at UC Berkeley and the Geneva Graduate Institute — testament to the fellowship's global academic footprint.",
    tag: "Global Policy",
  },
]

const COMMUNITY_HIGHLIGHTS = [
  {
    initials: "KY",
    avatarClass: "bg-gold-700 text-blue-700",
    name: "Kericho Youth Network",
    description:
      "Held two meetings with youthful members of the County Assembly to push for the implementation of report policy recommendations.",
    tag: "County Engagement",
  },
  {
    initials: "BY",
    avatarClass: "bg-navy-900 text-white",
    name: "Busia Steering Committee",
    description:
      "Convinced MCAs in the youth bracket to table a motion on the Youth Internship Policy bill with Imara team recommendations.",
    tag: "Policy Motion",
  },
  {
    initials: "ER",
    avatarClass: "bg-gold-700 text-blue-700",
    name: "Dr. Edwin Rono & Mr. Brian Keter",
    description:
      "Recommended by the Chief Officer to the County Governor for appointment to the board of two technical training institutions.",
    tag: "Board Appointments",
  },
]

export function CapacityBuildingSection() {
  const [activeTab, setActiveTab] = useState<"individual" | "community">("individual")

  return (
    <section id="capacity-building" className="scroll-mt-20 bg-white py-20 md:py-24">
      <div className="container-page flex flex-col gap-10">
        <div className="flex flex-col gap-5">
          <SectionEyebrow label="01 — Capacity Building" />
          <div className="flex w-full flex-col gap-5">
            <h2 className="text-h2 text-navy-900">
              Building the capacity of
              <br />
              <span className="text-blue-700">Kenya&apos;s next leaders</span>
            </h2>
            <p className="text-body text-gray-500 w-full">
              The project continues to register progress in building the capacity of the
              youth in two levels — the Imara Fellows who are recruited to be trained in
              policy-making in partnership with county governments, and the community youth
              who serve as local partners during implementation.
            </p>
          </div>
        </div>

        <div className="grid gap-10 lg:grid-cols-2 lg:gap-14">
          <div className="flex flex-col">
            {/* Interactive Tab Switcher */}
            <div className="mb-8 inline-flex w-full items-center rounded-[4px] border border-gray-200 bg-white p-1 sm:w-fit">
              <button
                type="button"
                onClick={() => setActiveTab("individual")}
                className={cn(
                  "flex-1 rounded-[2px] px-8 py-3 text-center text-ui-medium transition-all sm:flex-none",
                  activeTab === "individual"
                    ? "bg-gold-700 text-navy-900 shadow-sm"
                    : "text-gray-500 hover:text-navy-900"
                )}
              >
                Individual Impact
              </button>
              <button
                type="button"
                onClick={() => setActiveTab("community")}
                className={cn(
                  "flex-1 rounded-[2px] px-8 py-3 text-center text-ui-medium transition-all sm:flex-none",
                  activeTab === "community"
                    ? "bg-gold-700 text-navy-900 shadow-sm"
                    : "text-gray-500 hover:text-navy-900"
                )}
              >
                Community &amp; County
              </button>
            </div>

            {/* Individual Impact Content */}
            {activeTab === "individual" && (
              <div className="flex flex-col gap-5 animate-fadeIn">
                <p className="text-body text-gray-500">
                  Our fellows have advanced their careers and studies in policy and governance.{" "}
                  <span className="font-bold text-navy-900">
                    Notable examples include Ms. Gladys Ndanu
                  </span>
                  , promoted for her role in Universal Health Care in Muranga County, influenced
                  by a youth baraza panel discussion.
                </p>
                <p className="text-body text-gray-500">
                  <span className="font-bold text-navy-900">Mr. Shadrack Osero</span> earned a
                  DAAD Helmut Schmidt Program scholarship for a Master&apos;s in Public
                  Management at the University of Potsdam, based on work addressing TVET policy
                  gaps in Kericho.
                </p>
                <p className="text-body text-gray-500">
                  <span className="font-bold text-navy-900">
                    Additionally, Mr. Mathew Ndolo and Ms. Ivy Wandia Gathoni
                  </span>{" "}
                  pursued policy studies at UC Berkeley and the Geneva Graduate Institute —
                  testament to the fellowship&apos;s reach into global academic institutions.
                </p>
              </div>
            )}

            {/* Community & County Content */}
            {activeTab === "community" && (
              <div className="flex flex-col gap-5 animate-fadeIn">
                <p className="text-body text-gray-500">
                  The community youth served as local partners during implementation, actively engaging{" "}
                  <span className="font-bold text-navy-900">
                    Members of the County Assembly (MCAs)
                  </span>{" "}
                  to lobby for the adoption of key project report recommendations. For instance, members of the{" "}
                  <span className="font-bold text-navy-900">Kericho Youth Network</span> held two strategic meetings with youthful MCAs to push for report implementation.
                </p>
                <p className="text-body text-gray-500">
                  The same success was replicated in <span className="font-bold text-navy-900">Busia County</span>, where the steering committee convinced youthful MCAs to raise a motion on the <span className="font-bold text-navy-900">Youth Internship Policy</span>. The assembly will be discussing the bill incorporating recommendations co-created with the Imara team.
                </p>
                <p className="text-body text-gray-500">
                  Furthermore, two fellows — <span className="font-bold text-navy-900">Dr. Edwin Rono</span> and <span className="font-bold text-navy-900">Mr. Brian Keter</span> — were recommended by the Chief Officer to the County Governor for appointment to the boards of two technical training institutions.
                </p>
              </div>
            )}
          </div>

          {/* Right Side Cards */}
          <div className="flex flex-col gap-4">
            {(activeTab === "individual" ? INDIVIDUAL_HIGHLIGHTS : COMMUNITY_HIGHLIGHTS).map((item) => (
              <Card key={item.name} className="border border-gray-200 bg-gray-100 ring-0 hover:shadow-md transition-all">
                <CardContent className="flex gap-4">
                  <span
                    className={cn(
                      "flex size-10 shrink-0 items-center justify-center rounded-full text-ui-bold",
                      item.avatarClass
                    )}
                  >
                    {item.initials}
                  </span>
                  <div className="flex flex-col gap-1.5">
                    <p className="text-ui-bold text-navy-900">{item.name}</p>
                    <p className="text-body-s text-gray-500">{item.description}</p>
                    <span className="w-fit rounded-full bg-blue-100 px-3 py-1 text-caption text-blue-700 ring-1 ring-blue-300">
                      {item.tag}
                    </span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
