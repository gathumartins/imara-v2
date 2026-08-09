import Link from "next/link"
import { ArrowRight } from "lucide-react"

import { Button } from "@/components/ui/button"

export type CohortEdge = {
  node: {
    id: string
    name: string
    description: string
    slug: string
    fellows: {
      edges: {
        node: {
          id: string
          slug: string
        }
      }[]
    }
    fellowCohort: {
      cohortImage: {
        node: {
          mediaItemUrl: string
          mediaDetails: {
            width: number
            height: number
          }
        } | null
      } | null
    } | null
  }
}

function CohortCard({
  index,
  name,
  fellowCount,
  slug,
}: {
  index: number
  name: string
  fellowCount: number
  slug: string
}) {
  return (
    <div className="flex flex-col overflow-hidden rounded-[16px] border border-gray-200 bg-white shadow-sm sm:flex-row sm:min-h-[320px]">
      <div className="flex w-full shrink-0 flex-col items-center justify-center bg-gradient-to-b from-blue-700 to-navy-900 py-12 text-center sm:w-[210px] sm:py-16">
        <span className="text-caption text-blue-300 font-medium">Cohort</span>
        <span className="text-h1 text-white">{slug}</span>
        <span className="mt-2 h-[3px] w-8 rounded-full bg-gold-700" />
      </div>
      <div className="flex flex-1 flex-col items-start justify-center gap-3 p-6 sm:px-10 sm:py-16">
        <span className="rounded-full border border-blue-300 bg-white px-3 py-1 text-caption font-semibold text-blue-300">
          Cohort {name}
        </span>
        <p className="text-h3 text-navy-900">{`${name} - ${slug}`}</p>
        <p className="text-body-s font-medium text-gray-500">{fellowCount} Fellows</p>

        <Button variant="gold" size="md" className="mt-1" asChild>
          <Link href={`/fellows/profile?slug=${slug}`}>
            View Cohort
            <ArrowRight className="size-4" />
          </Link>
        </Button>
      </div>
    </div>
  )
}

export function CohortsSection({ cohorts }: { cohorts: CohortEdge[] }) {
  return (
    <section className="bg-white py-20 md:py-24">
      <div className="container-page flex flex-col gap-10">
        <div className="flex flex-col gap-4">
          <p className="text-tag text-gold-500">All Cohorts</p>
          <h2 className="text-h2 text-navy-900">Cohorts across the years</h2>
          <p className="w-full text-body text-gray-500">
            At the heart of the Imara Fellowship are our Fellows—dynamic, passionate young
            leaders who are transforming communities, influencing policies, and driving
            governance excellence across Kenya and beyond. Each of our fellows embodies the
            spirit of leadership, equipped with the knowledge, skills, and networks gained
            through intensive training, mentorship, and real-world policy engagement. From
            advocating for social accountability in healthcare to championing climate justice
            and youth inclusion, our fellows are at the forefront of creating meaningful,
            lasting change. Explore their stories and witness the impact of transformative
            leadership.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
          {cohorts.map(({ node }, index) => (
            <CohortCard
              key={node.id}
              index={index}
              name={node.name}
              fellowCount={node.fellows.edges.length}
              slug={node.slug}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
