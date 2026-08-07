import Link from "next/link"
import { ArrowRight } from "lucide-react"

import type { ProgramSummaryEdge } from "@/types/post"

const PROGRAM_EMOJIS = ["🏕️", "💻", "🤝", "🎤"]

function OtherPrograms({ programs }: { programs?: ProgramSummaryEdge[] | null }) {
  const items = programs?.map((edge) => edge?.node).filter((node): node is NonNullable<typeof node> => Boolean(node)) ?? []

  if (items.length === 0) return null

  return (
    <section className="relative overflow-hidden bg-gradient-to-tr from-navy-900 via-blue-700 to-blue-500 py-10 md:py-14">
      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-16 -left-16 size-72 rounded-full bg-blue-300/15 blur-3xl"
      />

      <div className="container-page relative">
        <div className="mb-12 flex flex-col items-start justify-between gap-4 md:flex-row md:items-end">
          <h2 className="text-white">
            Other <span className="text-gold-600">Programs</span>
          </h2>
          <p className="max-w-xs text-body-s text-white md:text-right">
            Explore more ways to grow as a policy leader.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((item, index) => (
            <div
              key={item.id}
              className="flex flex-col rounded-lg border border-white/15 bg-white/5 p-6"
            >
              <span className="text-caption text-blue-300">
                {String(index + 1).padStart(2, "0")}
              </span>
              <div className="mt-4 flex size-11 items-center justify-center rounded-xl bg-white/10 text-xl">
                {PROGRAM_EMOJIS[index % PROGRAM_EMOJIS.length]}
              </div>
              <h4 className="mt-6 text-ui-bold text-white">{item.title}</h4>
              <div
                className="mt-2 line-clamp-3 text-body-s text-blue-300"
                dangerouslySetInnerHTML={{ __html: item.content ?? "" }}
              />
              <Link
                href={`/program/${item.slug}`}
                className="mt-auto flex w-fit items-center gap-1 pt-5 text-ui-medium text-gold-600 hover:underline"
              >
                Learn more
                <ArrowRight className="size-4" />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default OtherPrograms
