import Link from "next/link"

import { cn } from "@/lib/utils"
import type { Cohort } from "./types"

export function RosterToolbarSection({
  cohorts,
  activeYear,
  query,
}: {
  cohorts: Cohort[]
  activeYear: string
  query: string
}) {
  return (
    <section className="border-b border-gray-200/80 bg-white py-6 shadow-sm">
      <div className="container-page flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex w-fit flex-wrap gap-1 rounded-[10px] bg-gray-100 p-1.5">
          {cohorts.map((cohort) => {
            const isActive = activeYear === cohort.year

            return (
              <Link
                key={cohort.year}
                href={`/fellows/profile?year=${cohort.year}`}
                className={cn(
                  "rounded-[8px] px-6 py-2 text-body-s transition-all duration-200",
                  isActive
                    ? "bg-white text-navy-900 shadow-sm font-bold"
                    : "text-gray-500 font-medium hover:text-navy-900 hover:bg-gray-100/50"
                )}
              >
                {cohort.year}
              </Link>
            )
          })}
        </div>

        <form
          method="get"
          className="flex h-[42px] w-full items-center rounded-[10px] border border-gray-200 bg-white px-5 sm:w-72 shadow-sm transition-colors focus-within:border-blue-500 focus-within:ring-1 focus-within:ring-blue-500"
        >
          <input type="hidden" name="year" value={activeYear} />
          <input
            type="text"
            name="q"
            defaultValue={query}
            placeholder="Search fellow..."
            aria-label="Search fellow"
            className="w-full bg-transparent text-body-s text-navy-900 placeholder:text-gray-400 focus:outline-none"
          />
        </form>
      </div>
    </section>
  )
}
