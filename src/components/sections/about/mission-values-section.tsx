"use client"

import { useMemo, useState } from "react"
import Image from "next/image"
import { MissionShape } from "@/components/shared/mission-shape"
import { Card, CardContent } from "@/components/ui/card"
import { ShieldCheck, HeartHandshake, Lightbulb, Users, Award } from "lucide-react"

import type { CoreStatementsField, CoreStatementNode } from "@/types/post"

const ICON_BOX_BG = ["bg-gold-100", "bg-blue-100"]

const VALUE_ICONS = [ShieldCheck, HeartHandshake, Lightbulb, Users, Award]
const VALUE_ICON_BG = [
  "bg-blue-700 text-white",
  "bg-gold-700 text-navy-900",
  "bg-navy-900 text-white",
  "bg-blue-500 text-white",
  "bg-gold-600 text-white",
]

function isValuesStatement(statement: CoreStatementNode) {
  return (statement.shortname ?? statement.title ?? "").toLowerCase().includes("value")
}

function stripHtml(html: string) {
  return html.replace(/<[^>]*>/g, "").trim()
}

function parseValueItems(html: string) {
  const liMatches = [...html.matchAll(/<li[^>]*>([\s\S]*?)<\/li>/gi)]
  const rawItems = liMatches.length > 0
    ? liMatches.map((m) => m[1])
    : [...html.matchAll(/<p[^>]*>([\s\S]*?)<\/p>/gi)].map((m) => m[1])

  return rawItems
    .map((raw) => {
      const strongMatch = raw.match(/<(strong|b)[^>]*>([\s\S]*?)<\/\1>/i)
      if (strongMatch) {
        const title = stripHtml(strongMatch[2])
        const description = stripHtml(raw.replace(strongMatch[0], "")).replace(/^[:\-–—]\s*/, "")
        return { title, description }
      }
      return { title: null, description: stripHtml(raw) }
    })
    .filter((item) => item.title || item.description)
}

export function MissionValuesSection({
  coreStatements,
}: {
  coreStatements?: CoreStatementsField | null
}) {
  const allStatements = useMemo(
    () => coreStatements?.statements?.filter((s): s is CoreStatementNode => Boolean(s)) ?? [],
    [coreStatements],
  )

  const valuesStatement = allStatements.find(isValuesStatement)
  const tabs = allStatements.filter((s) => s !== valuesStatement)

  const getTabId = (statement: CoreStatementNode, index: number) => statement.shortname ?? `statement-${index}`

  const defaultMatch = tabs.find((s) => s.shortname?.toLowerCase() === coreStatements?.defaultvalue?.toLowerCase())
  const defaultTabId = tabs.length
    ? defaultMatch
      ? getTabId(defaultMatch, tabs.indexOf(defaultMatch))
      : getTabId(tabs[0], 0)
    : undefined

  const [activeTab, setActiveTab] = useState(defaultTabId)

  if (tabs.length === 0) return null

  const activeStatement = tabs.find((s, index) => getTabId(s, index) === activeTab) ?? tabs[0]
  const activeIndex = tabs.indexOf(activeStatement)
  const activeIcon = activeStatement.icon?.node

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
          {tabs.map((statement, index) => {
            const tabId = getTabId(statement, index)
            const isActive = activeTab === tabId
            return (
              <button
                key={tabId}
                onClick={() => setActiveTab(tabId)}
                className={
                  isActive
                    ? "block rounded-[7px] bg-gold-700 px-8 py-2 text-ui-medium font-semibold text-blue-700 shadow-sm transition-all"
                    : "block rounded-[7px] px-8 py-2 text-ui-medium text-gray-500 hover:text-navy-900 hover:bg-gray-100 transition-colors"
                }
              >
                {statement.shortname ?? statement.title}
              </button>
            )
          })}
        </div>

        <Card
          key={activeTab}
          className="rounded-[16px] border-0 shadow-sm ring-1 ring-gray-200 bg-white [--card-spacing:2rem] md:[--card-spacing:3rem] transition-all animate-fadeIn"
        >
          <CardContent className="grid grid-cols-1 gap-12 md:grid-cols-[1.1fr_1fr]">
            <div className="flex flex-col justify-center">
              <div className="mb-8 flex items-center gap-4">
                <div
                  className={`flex size-14 shrink-0 items-center justify-center rounded-[14px] ${ICON_BOX_BG[activeIndex % ICON_BOX_BG.length]}`}
                >
                  {activeIcon?.sourceUrl && (
                    <Image
                      unoptimized
                      src={activeIcon.sourceUrl}
                      alt={activeIcon.altText ?? activeStatement.title ?? ""}
                      width={activeIcon.mediaDetails?.width ?? 32}
                      height={activeIcon.mediaDetails?.height ?? 32}
                      className="size-8 object-contain"
                    />
                  )}
                </div>
                <h3 className="text-h3 text-navy-900">Imara Fellowship {activeStatement.title}</h3>
              </div>
              <div
                className="mt-6 text-body text-gray-500 font-medium leading-relaxed"
                dangerouslySetInnerHTML={{ __html: activeStatement.content ?? "" }}
              />
            </div>

            {valuesStatement && (
              <div className="rounded-[12px] bg-gray-100 p-8 border border-gray-200/50">
                <p className="mb-6 text-tag text-blue-700">{valuesStatement.title}</p>
                <ul className="flex flex-col gap-6">
                  {parseValueItems(valuesStatement.content ?? "").map((item, index) => {
                    const Icon = VALUE_ICONS[index % VALUE_ICONS.length]
                    return (
                      <li key={item.title ?? index} className="flex gap-4">
                        <div
                          className={`flex size-8 shrink-0 items-center justify-center rounded-lg ${VALUE_ICON_BG[index % VALUE_ICON_BG.length]}`}
                        >
                          <Icon className="size-4" />
                        </div>
                        <div>
                          {item.title && <p className="text-body-s font-bold text-navy-900">{item.title}</p>}
                          <p className="text-body-s text-gray-400 font-medium mt-1">{item.description}</p>
                        </div>
                      </li>
                    )
                  })}
                </ul>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
