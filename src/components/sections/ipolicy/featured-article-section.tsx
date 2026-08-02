import Link from "next/link"
import { Sparkles } from "lucide-react"

export function FeaturedArticleSection() {
  return (
    <section className="bg-white py-20 md:py-24">
      <div className="container-page">
        <p className="mb-4 text-tag text-blue-700">Featured Article</p>
        <div className="grid overflow-hidden rounded-2xl bg-gold-100 md:grid-cols-2">
          <div className="relative flex min-h-64 items-center justify-center overflow-hidden bg-gradient-to-br from-navy-900 via-blue-700 to-blue-500">
            <Sparkles className="size-20 text-white/20" aria-hidden="true" />
            <span className="absolute top-6 left-6 rounded-full bg-white px-3 py-1 text-tag text-alert">
              Leadership
            </span>
          </div>
          <div className="flex flex-col justify-center gap-5 p-8 md:p-12">
            <div className="flex items-center gap-2 text-caption text-gray-500">
              <span className="text-tag text-blue-700">Leadership</span>
              <span aria-hidden="true">&bull;</span>
              <span>Oct 24, 2024</span>
            </div>
            <h3 className="text-navy-900">
              Leadership Events 2024: Stay ahead of the curve
            </h3>
            <p className="text-body text-gray-600">
              A roundup of the most important leadership and governance events shaping
              Africa&rsquo;s policy landscape in 2024 — and how Imara fellows are showing
              up at every one of them.
            </p>
            <Link
              href="/ipolicy/detail"
              className="w-fit text-ui-medium text-blue-700 underline underline-offset-4 hover:text-navy-900"
            >
              Read the full article
            </Link>
            <div className="mt-2 flex items-center gap-3 border-t border-gold-500/20 pt-5">
              <div className="flex size-9 shrink-0 items-center justify-center rounded-full bg-navy-900 text-caption font-bold text-white">
                BC
              </div>
              <div>
                <p className="text-ui-medium font-bold text-navy-900">Brian Clark</p>
                <p className="text-caption text-gray-500">Imara Fellow &middot; Jan 16, 2024</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
