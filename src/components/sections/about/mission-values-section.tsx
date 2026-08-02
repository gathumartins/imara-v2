"use client"

import { useState } from "react"
import { MissionShape } from "@/components/shared/mission-shape"
import { Card, CardContent } from "@/components/ui/card"
import { ShieldCheck, HeartHandshake, Lightbulb, Users, Compass, Eye, Award, Target } from "lucide-react"

const MISSION_PILLARS = [
  { title: "Integrity", description: "Ethical leadership at every level of public service", color: "bg-alert" },
  { title: "Social Empathy", description: "Deep understanding of community needs and aspirations", color: "bg-gold-700" },
  { title: "Creativity", description: "Innovative thinking to solve complex policy challenges", color: "bg-navy-900" },
  { title: "Public Participation", description: "Civic engagement as the foundation of governance", color: "bg-alert" },
]

const VISION_PILLARS = [
  {
    title: "Responsive Leadership",
    description: "Listening and reacting promptly to citizen needs across Kenya and Africa.",
    icon: Compass,
    color: "bg-blue-700 text-white",
  },
  {
    title: "Participatory Governance",
    description: "Inclusive decision-making where every voice contributes to sustainable policy.",
    icon: Users,
    color: "bg-gold-700 text-navy-900",
  },
  {
    title: "Empathetic Public Service",
    description: "Grounding public governance in deep understanding of community challenges.",
    icon: HeartHandshake,
    color: "bg-navy-900 text-white",
  },
  {
    title: "Active Engagement",
    description: "Fostering vibrant civic spaces for long-term betterment of society.",
    icon: Lightbulb,
    color: "bg-alert text-white",
  },
]

const CORE_VALUES = [
  {
    title: "Integrity",
    description: "Upholding honesty and moral principles in leadership.",
    icon: ShieldCheck,
    badgeBg: "bg-blue-100 text-blue-700 border-blue-300",
    iconBg: "bg-blue-700 text-white",
  },
  {
    title: "Social Empathy",
    description: "Prioritizing understanding and addressing societal needs.",
    icon: HeartHandshake,
    badgeBg: "bg-gold-100 text-gold-700 border-gold-600",
    iconBg: "bg-gold-700 text-navy-900",
  },
  {
    title: "Creativity",
    description: "Encouraging innovative approaches to public service challenges.",
    icon: Lightbulb,
    badgeBg: "bg-navy-900 text-white border-navy-800",
    iconBg: "bg-navy-900 text-white",
  },
  {
    title: "Public Participation",
    description: "Championing inclusive and collaborative governance.",
    icon: Users,
    badgeBg: "bg-blue-100 text-blue-700 border-blue-300",
    iconBg: "bg-blue-500 text-white",
  },
  {
    title: "Service",
    description: "Emphasizing public service as a core duty and responsibility of leadership.",
    icon: Award,
    badgeBg: "bg-gold-100 text-gold-700 border-gold-600",
    iconBg: "bg-gold-600 text-white",
  },
]

const MISSION_TABS = [
  { id: "mission", label: "Our Mission" },
  { id: "vision", label: "Our Vision" },
  { id: "values", label: "Core Values" },
]

export function MissionValuesSection() {
  const [activeTab, setActiveTab] = useState<"mission" | "vision" | "values">("mission")

  return (
    <section className="relative overflow-hidden bg-gold-100 py-20 md:py-24">
      <MissionShape
        className="pointer-events-none absolute"
        style={{
          bottom: "-10%",
          left: "0%",
          width: "120%",
          height: "auto",
          minWidth: "1200px"
        }}
      />
      <div className="container-page relative z-10">
        <div className="mb-10 text-center">
          <p className="text-tag text-blue-700">Imara Fellowship Commitment</p>
          <h2 className="mt-3">What drives everything we do</h2>
        </div>

        {/* Interactive Tabs */}
        <div className="mx-auto mb-10 flex w-fit rounded-[10px] bg-white p-[5px] ring-1 ring-gray-200 shadow-sm">
          {MISSION_TABS.map((tab) => {
            const isActive = activeTab === tab.id
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as "mission" | "vision" | "values")}
                className={
                  isActive
                    ? "block rounded-[7px] bg-gold-700 px-8 py-2 text-ui-medium font-semibold text-blue-700 shadow-sm transition-all"
                    : "block rounded-[7px] px-8 py-2 text-ui-medium text-gray-500 hover:text-navy-900 hover:bg-gray-100 transition-colors"
                }
              >
                {tab.label}
              </button>
            )
          })}
        </div>

        {/* Tab 1: Our Mission */}
        {activeTab === "mission" && (
          <Card className="rounded-[16px] border-0 shadow-sm ring-1 ring-gray-200 bg-white [--card-spacing:2rem] md:[--card-spacing:3rem] transition-all animate-fadeIn">
            <CardContent className="grid grid-cols-1 gap-12 md:grid-cols-[1.1fr_1fr]">
              <div className="flex flex-col justify-center">
                <div className="mb-8 flex size-14 items-center justify-center rounded-[14px] bg-gold-100 text-gold-700">
                  <Target className="size-8 text-blue-700" />
                </div>
                <h3 className="text-h3 text-navy-900">
                  To develop African leaders who{" "}
                  <span className="text-blue-700">transform</span> Kenya&apos;s public sector
                </h3>
                <p className="mt-6 text-body text-gray-500 font-medium leading-relaxed">
                  To develop African leaders who exemplify integrity, social empathy, creativity,
                  and public participation — equipping them with the skills and capacity to serve
                  in and transform Kenya&apos;s public sector through meaningful public service.
                </p>
              </div>
              <div className="rounded-[12px] bg-gray-100 p-8 border border-gray-200/50">
                <p className="mb-6 text-tag text-blue-700">Mission pillars</p>
                <ul className="flex flex-col gap-6">
                  {MISSION_PILLARS.map((pillar) => (
                    <li key={pillar.title} className="flex gap-4">
                      <span className={`mt-2 size-2 shrink-0 rounded-full ${pillar.color}`} />
                      <div>
                        <p className="text-body-s font-bold text-navy-900">{pillar.title}</p>
                        <p className="text-body-s text-gray-400 font-medium mt-1">{pillar.description}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </CardContent>
          </Card>
        )}

        {/* Tab 2: Our Vision */}
        {activeTab === "vision" && (
          <Card className="rounded-[16px] border-0 shadow-sm ring-1 ring-gray-200 bg-white [--card-spacing:2rem] md:[--card-spacing:3rem] transition-all animate-fadeIn">
            <CardContent className="grid grid-cols-1 gap-12 md:grid-cols-[1.1fr_1fr]">
              <div className="flex flex-col justify-center">
                <div className="mb-8 flex size-14 items-center justify-center rounded-[14px] bg-blue-100">
                  <Eye className="size-8 text-blue-700" />
                </div>
                <h3 className="text-h3 text-navy-900">
                  A responsive, participatory &amp;{" "}
                  <span className="text-blue-700">empathetic</span> public leadership
                </h3>
                <p className="mt-6 text-body text-gray-500 font-medium leading-relaxed">
                  A responsive, participatory, and empathetic public leadership in Kenya and Africa,
                  fostering a culture of integrity, creativity, and active public engagement for the betterment of society.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {VISION_PILLARS.map((vPillar) => {
                  const Icon = vPillar.icon
                  return (
                    <div
                      key={vPillar.title}
                      className="flex flex-col gap-3 rounded-[14px] bg-gray-100 p-5 border border-gray-200/60 hover:shadow-md transition-all"
                    >
                      <div className={`flex size-10 items-center justify-center rounded-xl ${vPillar.color}`}>
                        <Icon className="size-5" />
                      </div>
                      <p className="text-body-s font-bold text-navy-900">{vPillar.title}</p>
                      <p className="text-caption text-gray-500 leading-relaxed">{vPillar.description}</p>
                    </div>
                  )
                })}
              </div>
            </CardContent>
          </Card>
        )}

        {/* Tab 3: Core Values */}
        {activeTab === "values" && (
          <Card className="rounded-[16px] border-0 shadow-sm ring-1 ring-gray-200 bg-white [--card-spacing:2rem] md:[--card-spacing:3rem] transition-all animate-fadeIn">
            <CardContent className="flex flex-col gap-8">
              <div>
                <span className="inline-block text-tag text-blue-700 mb-2">
                  Our Guiding Principles
                </span>
                <h3 className="text-h3 text-navy-900">
                  The values that shape every <span className="text-blue-700">Imara Fellow</span>
                </h3>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {CORE_VALUES.map((val) => {
                  const Icon = val.icon
                  return (
                    <div
                      key={val.title}
                      className="flex flex-col justify-between gap-4 rounded-[16px] bg-gray-100 p-6 border border-gray-200/70 hover:border-blue-300 hover:bg-white hover:shadow-md transition-all"
                    >
                      <div className="flex items-center gap-3">
                        <div className={`flex size-10 shrink-0 items-center justify-center rounded-xl ${val.iconBg}`}>
                          <Icon className="size-5" />
                        </div>
                        <h4 className="text-ui-bold text-navy-900">{val.title}</h4>
                      </div>
                      <p className="text-body-s text-gray-500 font-medium leading-relaxed">{val.description}</p>
                    </div>
                  )
                })}
              </div>
            </CardContent>
          </Card>
        )}
      </div>
    </section>
  )
}
