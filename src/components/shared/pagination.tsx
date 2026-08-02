"use client"

import { ChevronLeft, ChevronRight } from "lucide-react"
import Link from "next/link"
import { usePathname, useSearchParams } from "next/navigation"

interface PaginationProps {
  totalPages: number
  currentPage: number
}

export function Pagination({ totalPages, currentPage }: PaginationProps) {
  const pathname = usePathname()
  const searchParams = useSearchParams()

  const createPageURL = (pageNumber: number | string) => {
    const params = new URLSearchParams(searchParams)
    params.set("page", pageNumber.toString())
    return `${pathname}?${params.toString()}`
  }

  // Logic to display up to 5 pages
  const getVisiblePages = () => {
    if (totalPages <= 5) {
      return Array.from({ length: totalPages }, (_, i) => i + 1)
    }

    if (currentPage <= 3) {
      return [1, 2, 3, 4, "...", totalPages]
    }

    if (currentPage >= totalPages - 2) {
      return [1, "...", totalPages - 3, totalPages - 2, totalPages - 1, totalPages]
    }

    return [1, "...", currentPage - 1, currentPage, currentPage + 1, "...", totalPages]
  }

  const visiblePages = getVisiblePages()

  return (
    <nav
      aria-label="Pagination"
      className="mt-14 flex items-center justify-center gap-2"
    >
      {/* Previous Button (Square) */}
      <Link
        href={currentPage > 1 ? createPageURL(currentPage - 1) : "#"}
        aria-label="Previous page"
        className={`flex size-11 items-center justify-center rounded-md border border-gray-200 text-ui-medium transition-all ${
          currentPage <= 1
            ? "pointer-events-none opacity-40 bg-gray-100 text-gray-400"
            : "bg-white text-navy-900 shadow-sm hover:bg-navy-900 hover:text-white hover:border-navy-900"
        }`}
      >
        <ChevronLeft className="size-4" />
      </Link>

      {/* Page Numbers (Square) */}
      {visiblePages.map((page, index) => {
        if (page === "...") {
          return (
            <span
              key={`ellipsis-${index}`}
              className="flex size-11 items-center justify-center text-ui-bold text-gray-400"
            >
              ...
            </span>
          )
        }

        const isActive = page === currentPage
        return (
          <Link
            key={page}
            href={createPageURL(page)}
            aria-current={isActive ? "page" : undefined}
            className={`flex size-11 items-center justify-center rounded-md border text-ui-bold transition-all ${
              isActive
                ? "border-navy-900 bg-gold-700 text-navy-900 shadow-md ring-1 ring-gold-700/50"
                : "border-gray-200 bg-white text-navy-900 shadow-sm hover:bg-navy-900 hover:text-white hover:border-navy-900"
            }`}
          >
            {page}
          </Link>
        )
      })}

      {/* Next Button (Square) */}
      <Link
        href={currentPage < totalPages ? createPageURL(currentPage + 1) : "#"}
        aria-label="Next page"
        className={`flex size-11 items-center justify-center rounded-md border border-gray-200 text-ui-medium transition-all ${
          currentPage >= totalPages
            ? "pointer-events-none opacity-40 bg-gray-100 text-gray-400"
            : "bg-white text-navy-900 shadow-sm hover:bg-navy-900 hover:text-white hover:border-navy-900"
        }`}
      >
        <ChevronRight className="size-4" />
      </Link>
    </nav>
  )
}
