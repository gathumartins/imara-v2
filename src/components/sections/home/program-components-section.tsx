import Link from "next/link"

import {
  BrainIcon,
  DocIcon,
  HandshakeIcon,
  WorkflowIcon,
} from "@/components/ui/home-icons"
import type { HomePageHeading, ProgramNode } from "@/types/post"

const PROGRAM_ICONS = [BrainIcon, HandshakeIcon, WorkflowIcon, DocIcon]

function stripHtml(html: string) {
  return html.replace(/<[^>]*>/g, "").trim()
}

export function ProgramComponentsSection({
  heading,
  programs,
}: {
  heading?: HomePageHeading | null
  programs?: Array<{ node?: ProgramNode | null }> | null
}) {
  const programComponents = programs
    ?.map((edge) => edge?.node)
    .filter((node): node is ProgramNode => Boolean(node))
    .map((node, index) => ({
      icon: PROGRAM_ICONS[index % PROGRAM_ICONS.length],
      title: node.title ?? "",
      description: stripHtml(node.excerpt ?? node.content ?? ""),
      slug: node.slug ?? "",
    })) ?? []

  return (
    <section className="bg-gray-100 py-20 md:py-24">
      <div className="container-page flex flex-col gap-12">
        <div className="flex max-w-2xl flex-col gap-4">
          <div className="flex items-center gap-3">
            <span className="h-0.5 w-5 bg-gold-600" />
            <p className="text-tag text-blue-700">The Fellowship Program</p>
          </div>
          <h2>{heading?.title}</h2>
          <div className="text-body text-gray-500" dangerouslySetInnerHTML={{ __html: heading?.subtitle ?? "" }} />
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {programComponents.map((item, index) => (
            <Link
              key={`${item.title}-${index}`}
              href={`/program/${item.slug}`}
              className="flex flex-col gap-4 rounded-2xl border border-gray-200 bg-white p-8 transition-all duration-300 hover:-translate-y-1 hover:border-blue-300 hover:shadow-lg"
            >
              <span className="flex size-11 items-center justify-center rounded-xl bg-blue-100 text-blue-700">
                <item.icon className="size-5" />
              </span>
              <h4 className="text-ui-bold text-navy-900">{item.title}</h4>
              <p className="line-clamp-3 text-body-s text-gray-500">{item.description}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
