import { PageHero } from "@/components/shared/page-hero"
import { RegisterCta } from "@/components/shared/register-cta"
import { RosterGridSection } from "@/components/sections/fellows-profile/roster-grid-section"
import { RosterToolbarSection } from "@/components/sections/fellows-profile/roster-toolbar-section"
import type { CohortDetail, CohortListItem } from "@/components/sections/fellows-profile/types"

async function getCohortsList(): Promise<CohortListItem[]> {
  const query = `
    {
      cohorts {
        edges {
          node {
            id
            slug
            name
          }
        }
      }
    }
  `

  const res = await fetch(
    `${process.env.WORDPRESS_API_URL}?query=${encodeURIComponent(query)}`,
    { headers: { "Content-Type": "application/json" } }
  )
  const data = await res.json()
  return data.data.cohorts.edges.map((edge: { node: CohortListItem }) => edge.node)
}

async function getCohort(slug: string): Promise<CohortDetail | null> {
  const query = `
    query NewQuery($slug:ID!){
    cohort(id: $slug, idType: SLUG) {
    id
    slug
    name
    fellows(first:1000) {
      edges {
        node {
          title
          featuredImage {
            node {
              altText
              mediaDetails {
                height
                width
              }
              sourceUrl
            }
          }
        }
      }
    }
    fellowCohort {
      pageBanners {
        bannerImage {
          node {
            mediaItemUrl
          }
        }
        pageTitle
      }
    }
  }
}
  `
  const variables = { slug }

  const res = await fetch(`${process.env.WORDPRESS_API_URL}`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    next: { revalidate: 60 },
    body: JSON.stringify({ query, variables }),
  })
  const data = await res.json()
  return data.data.cohort
}

export default async function FellowProfileRosterPage({
  searchParams,
}: {
  searchParams: Promise<{ slug?: string; q?: string; page?: string }>
}) {
  const params = await searchParams
  const cohortsList = await getCohortsList()
  const activeSlug = params.slug ?? cohortsList[0]?.slug ?? ""
  const query = params.q ?? ""
  const page = parseInt(params.page ?? "1", 10) || 1

  const activeCohort = activeSlug ? await getCohort(activeSlug) : null

  const allFellows = activeCohort?.fellows.edges.map((edge) => edge.node) ?? []

  const filteredFellows = allFellows.filter((f) =>
    f.title.toLowerCase().includes(query.trim().toLowerCase())
  )

  const pageSize = 6
  const totalPages = Math.ceil(filteredFellows.length / pageSize) || 1
  const currentPage = Math.max(1, Math.min(page, totalPages))

  const visibleFellows = filteredFellows.slice(
    (currentPage - 1) * pageSize,
    currentPage * pageSize
  )

  const bannerTitle = activeCohort?.fellowCohort?.pageBanners?.pageTitle

  return (
    <>
      <PageHero
        breadcrumbs={[{ label: "Fellows", href: "/fellows" }, { label: "Cohort Roster" }]}
        title={
          bannerTitle ? (
            <div
              className="[&_span]:text-gold-700"
              dangerouslySetInnerHTML={{ __html: bannerTitle }}
            />
          ) : (
            <>
              Meet the
              <br />
              <span className="text-gold-700">Imara Fellows</span>
            </>
          )
        }
      />

      <RosterToolbarSection cohorts={cohortsList} activeSlug={activeSlug} query={query} />

      {activeCohort ? (
        <RosterGridSection
          activeCohort={activeCohort}
          visibleFellows={visibleFellows}
          totalFellows={filteredFellows.length}
          currentPage={currentPage}
          totalPages={totalPages}
        />
      ) : null}

      <RegisterCta />
    </>
  )
}
