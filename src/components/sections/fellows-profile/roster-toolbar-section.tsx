"use client"

import Link from "next/link"
import { usePathname, useRouter, useSearchParams } from "next/navigation"
import { useEffect, useRef, useState } from "react"

import { cn } from "@/lib/utils"
import type { CohortListItem } from "./types"

export function RosterToolbarSection({
  cohorts,
  activeSlug,
  query,
}: {
  cohorts: CohortListItem[]
  activeSlug: string
  query: string
}) {
  const router = useRouter()
  const pathname = usePathname()
  const searchParams = useSearchParams()
  const [search, setSearch] = useState(query)
  const isFirstRender = useRef(true)

  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false
      return
    }

    const handle = setTimeout(() => {
      const params = new URLSearchParams(searchParams)
      if (search) {
        params.set("q", search)
      } else {
        params.delete("q")
      }
      params.delete("page")
      router.replace(`${pathname}?${params.toString()}`)
    }, 300)

    return () => clearTimeout(handle)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [search])

  return (
    <section className="border-b border-gray-200/80 bg-white py-6 shadow-sm">
      <div className="container-page flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex w-fit flex-wrap gap-1 rounded-[10px] bg-gray-100 p-1.5">
          {cohorts.map((cohort) => {
            const isActive = activeSlug === cohort.slug

            return (
              <Link
                key={cohort.id}
                href={`/fellows/profile?slug=${cohort.slug}`}
                className={cn(
                  "rounded-[8px] px-6 py-2 text-body-s transition-all duration-200",
                  isActive
                    ? "bg-white text-navy-900 shadow-sm font-bold"
                    : "text-gray-500 font-medium hover:text-navy-900 hover:bg-gray-100/50"
                )}
              >
                {cohort.name}
              </Link>
            )
          })}
        </div>

        <div className="flex h-[42px] w-full items-center rounded-[10px] border border-gray-200 bg-white px-5 sm:w-72 shadow-sm transition-colors focus-within:border-blue-500 focus-within:ring-1 focus-within:ring-blue-500">
          <input
            key={activeSlug}
            type="text"
            defaultValue={query}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search fellow..."
            aria-label="Search fellow"
            className="w-full bg-transparent text-body-s text-navy-900 placeholder:text-gray-400 focus:outline-none"
          />
        </div>
      </div>
    </section>
  )
}
