import Image from "next/image"
import { User } from "lucide-react"
import { Pagination } from "@/components/shared/pagination"
import type { Cohort, Fellow } from "./types"

function getInitials(name: string) {
  const parts = name.trim().split(" ")
  if (parts.length >= 2) {
    return `${parts[0][0]}${parts[parts.length - 1][0]}`.toUpperCase()
  }
  return name.slice(0, 2).toUpperCase()
}

export function RosterGridSection({
  activeCohort,
  visibleFellows,
  totalFellows,
  currentPage,
  totalPages,
}: {
  activeCohort: Cohort
  visibleFellows: Fellow[]
  totalFellows: number
  currentPage: number
  totalPages: number
}) {
  return (
    <section className="bg-white py-20 md:py-24">
      <div className="container-page">
        <div className="mb-10 flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
          <h2>
            {activeCohort.label.split("—")[0]}
            <span className="text-blue-700">— {activeCohort.year}</span>
          </h2>
          <p className="text-body-s text-gray-500">
            Showing {visibleFellows.length} of {totalFellows} fellows
          </p>
        </div>

        {visibleFellows.length > 0 ? (
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {visibleFellows.map((fellow) => {
              const initials = getInitials(fellow.name)
              return (
                <div
                  key={fellow.name}
                  className="group relative h-[360px] w-full overflow-hidden rounded-2xl bg-gray-100 border border-gray-200/80 shadow-sm hover:shadow-md transition-all duration-300"
                >
                  {fellow.image ? (
                    <Image
                      src={fellow.image}
                      alt={fellow.name}
                      fill
                      sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  ) : (
                    <div className="flex h-full w-full flex-col items-center justify-center bg-gradient-to-br from-blue-700 to-navy-900 pb-20">
                      <div className="flex size-24 items-center justify-center rounded-full bg-white/10 ring-4 ring-white/20 text-gold-700 backdrop-blur-md">
                        <User className="size-12 text-gold-500" />
                      </div>
                      <span className="mt-3 text-tag text-blue-300">
                        {initials}
                      </span>
                    </div>
                  )}

                  <div className="absolute inset-x-0 bottom-0 bg-navy-900/80 p-5 backdrop-blur-sm transition-colors duration-300 group-hover:bg-navy-900/95">
                    <p className="text-body font-bold text-white">{fellow.name}</p>
                    <p className="mt-1 text-caption text-gold-500 font-semibold">
                      Imara Fellow · {activeCohort.year}
                    </p>
                  </div>
                </div>
              )
            })}
          </div>
        ) : (
          <div className="flex flex-col items-center gap-3 rounded-2xl border border-dashed border-gray-200 py-20 text-center">
            <p className="text-ui-bold text-navy-900">No fellows match your search</p>
            <p className="max-w-sm text-body-s text-gray-500">
              Try a different name or clear the search field.
            </p>
          </div>
        )}

        {/* Pagination */}
        <Pagination currentPage={currentPage} totalPages={totalPages} />
      </div>
    </section>
  )
}
