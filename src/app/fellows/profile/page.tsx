import { PageHero } from "@/components/shared/page-hero"
import { RegisterCta } from "@/components/shared/register-cta"
import { RosterGridSection } from "@/components/sections/fellows-profile/roster-grid-section"
import { RosterToolbarSection } from "@/components/sections/fellows-profile/roster-toolbar-section"
import type { Cohort } from "@/components/sections/fellows-profile/types"

const COHORTS: Cohort[] = [
  {
    year: "2019",
    label: "Cohort One — 2019",
    fellows: [
      { name: "Aimee Adeti", image: "/fellowsView/Aimee.png" },
      { name: "Kiprotich Cheruiyot", image: "/fellowsView/kiprotich.png" },
      { name: "Gladys Ndanu", image: "/fellowsView/gladis.png" },
      { name: "Wandia Ivy", image: "/fellowsView/wandia.png" },
      { name: "Sofina Merinyo", image: "/fellowsView/safina.png" },
      { name: "Gertrude I. Kibare", image: "/fellowsView/getrude.png" },
      { name: "Yvonne Ngicho", image: "/fellowsView/yvone.png" },
      { name: "Moffat Mitugo", image: "/fellowsView/moffat.png" },
      { name: "Loise Kinya", image: "/fellowsView/loise.png" },
      { name: "Mary Oyoo", image: "/fellowsView/mary.png" },
      { name: "Bertha Rinjue", image: "/fellowsView/bertha.png" },
      { name: "Lawrence Nduva", image: "/fellowsView/lawrence.png" },
    ],
  },
  {
    year: "2021",
    label: "Cohort Two — 2021",
    fellows: [
      { name: "Emmanuel Mutua" },
      { name: "Faith Chebet" },
      { name: "Kevin Otieno" },
      { name: "Brenda Wanjiru" },
      { name: "Daniel Kiptoo" },
      { name: "Mercy Mwangi" },
      { name: "Patrick Omwamba" },
      { name: "Stacy Akinyi" },
      { name: "Geoffrey Korir" },
      { name: "Christine Nanjala" },
      { name: "Victor Omondi" },
      { name: "Jackline Njeri" },
    ],
  },
  {
    year: "2022",
    label: "Cohort Three — 2022",
    fellows: [
      { name: "Brian Kiprono" },
      { name: "Sharon Achieng" },
      { name: "Dennis Wafula" },
      { name: "Anita Muthoni" },
      { name: "Samuel Wambugu" },
      { name: "Joy Kwamboka" },
      { name: "Caleb Kiprotich" },
      { name: "Esther Adhiambo" },
      { name: "Francis Njuguna" },
      { name: "Hellen Chepkorir" },
      { name: "Moses Ouma" },
      { name: "Naomi Chepkemoi" },
    ],
  },
  {
    year: "2024",
    label: "Cohort Four — 2024",
    fellows: [
      { name: "Alex Kiptanui" },
      { name: "Purity Wanjiku" },
      { name: "Collins Odhiambo" },
      { name: "Diana Cherono" },
      { name: "Edward Muriithi" },
      { name: "Grace Atieno" },
      { name: "Gideon Rotich" },
      { name: "Jane Nduta" },
      { name: "Kelvin Macharia" },
      { name: "Laura Awuor" },
      { name: "Peter Kamau" },
      { name: "Rose Chebet" },
    ],
  },
]

export default async function FellowProfileRosterPage({
  searchParams,
}: {
  searchParams: Promise<{ year?: string; q?: string; page?: string }>
}) {
  const params = await searchParams
  const activeYear = params.year ?? COHORTS[0].year
  const query = params.q ?? ""
  const page = parseInt(params.page ?? "1", 10) || 1

  const activeCohort = COHORTS.find((c) => c.year === activeYear) ?? COHORTS[0]

  const filteredFellows = activeCohort.fellows.filter((f) =>
    f.name.toLowerCase().includes(query.trim().toLowerCase())
  )

  const pageSize = 6
  const totalPages = Math.ceil(filteredFellows.length / pageSize) || 1
  const currentPage = Math.max(1, Math.min(page, totalPages))
  
  const visibleFellows = filteredFellows.slice(
    (currentPage - 1) * pageSize,
    currentPage * pageSize
  )

  return (
    <>
      <PageHero
        breadcrumbs={[{ label: "Fellows", href: "/fellows" }, { label: "Cohort Roster" }]}
        title={
          <>
            Meet the
            <br />
            <span className="text-gold-700">Imara Fellows</span>
          </>
        }
      />

      <RosterToolbarSection cohorts={COHORTS} activeYear={activeYear} query={query} />

      <RosterGridSection
        activeCohort={activeCohort}
        visibleFellows={visibleFellows}
        totalFellows={filteredFellows.length}
        currentPage={currentPage}
        totalPages={totalPages}
      />

      <RegisterCta />
    </>
  )
}
