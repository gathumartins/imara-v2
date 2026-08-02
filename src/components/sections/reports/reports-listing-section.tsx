import { Download } from "lucide-react"

const REPORTS = [
  {
    year: "2024",
    tag: "Site Visit",
    title: "Imara Africa Leadership Program — Kisumu Visit",
    description:
      "A comprehensive field report from the Kisumu county engagement session, documenting fellow interactions, policy discussions, and community outcomes.",
    cover: "bg-navy-800",
    downloadUrl: "#",
  },
  {
    year: "2024",
    tag: "Pre-Site Visit",
    title: "Imara Africa Leadership Program — Kisumu Pre-site Visit",
    description:
      "Pre-visit assessment and stakeholder mapping report for the Kisumu engagement — covering key contacts, focus areas, and logistical preparation.",
    cover: "bg-navy-800",
    downloadUrl: "#",
  },
  {
    year: "2024",
    tag: "Site Visit",
    title: "Imara Africa Leadership Program — Kericho Visit",
    description:
      "Field report from the Kericho county engagement, including documentation of community forums, county government engagement, and fellow reflections.",
    cover: "bg-navy-800",
    downloadUrl: "#",
  },
  {
    year: "2023",
    tag: "Site Visit",
    title: "Imara Africa Leadership Program — Kisumu Visit",
    description:
      "Second Kisumu engagement report documenting follow-up activities, programme outcomes assessment, and community feedback on policy initiatives.",
    cover: "bg-tone-forest",
    downloadUrl: "#",
  },
  {
    year: "2023",
    tag: "Pre-Site Visit",
    title: "Imara Africa Leadership Program — Kisumu Pre-site Visit",
    description:
      "Pre-visit scoping report for the 2023 Kisumu engagement, outlining strategic objectives, fellow assignments, and expected community outcomes.",
    cover: "bg-tone-rust",
    downloadUrl: "#",
  },
  {
    year: "2023",
    tag: "Site Visit",
    title: "Imara Africa Leadership Program — Kericho Visit",
    description:
      "Kericho 2023 field report covering agri-policy engagement, county executive interactions, and fellow-led community dialogue sessions.",
    cover: "bg-tone-olive",
    downloadUrl: "#",
  },
]

function DocumentIcon() {
  return (
    <svg width="44" height="58" viewBox="0 0 44 58" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="44" height="58" rx="6" fill="var(--imara-gray-700)"/>
      <rect x="10" y="16" width="14" height="2" rx="1" fill="var(--imara-white)"/>
      <rect x="10" y="24" width="24" height="2" rx="1" fill="var(--imara-alert)"/>
      <rect x="10" y="32" width="24" height="2" rx="1" fill="var(--imara-gold-700)"/>
      <rect x="10" y="40" width="18" height="2" rx="1" fill="var(--imara-white)"/>
    </svg>
  )
}

export function ReportsListingSection() {
  return (
    <section className="bg-white py-20 md:py-24">
      <div className="container-page">
        <div className="mb-12 max-w-2xl">
          <p className="text-tag text-gold-700">All Reports</p>
          <h2 className="mt-3">Programme documentation</h2>
          <p className="mt-4 text-body text-gray-500">
            Download field reports from our site visits, community engagement sessions, and
            programme evaluations.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {REPORTS.map((report, i) => (
            <article
              key={`${report.title}-${report.year}-${i}`}
              className="flex flex-col overflow-hidden rounded-[16px] bg-white ring-1 ring-gray-200"
            >
              <div
                className={`relative flex h-52 items-center justify-center ${report.cover}`}
              >
                <span className="absolute right-4 top-4 rounded-full bg-alert px-3 py-1 text-tag text-white">
                  {report.year}
                </span>
                <DocumentIcon />
              </div>

              <div className="flex flex-1 flex-col gap-3 p-6">
                <span className="text-tag text-blue-700">{report.tag}</span>
                <h4 className="text-ui-bold text-navy-900">{report.title}</h4>
                <p className="text-body-s font-light leading-relaxed text-gray-500">{report.description}</p>
                <a
                  href={report.downloadUrl}
                  download
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-auto flex w-full items-center justify-center gap-2 rounded-[8px] border border-gray-200 bg-transparent py-3 text-ui-medium text-navy-900 transition-all hover:bg-gold-700 hover:text-navy-900 hover:border-gold-700 shadow-sm"
                >
                  <Download className="size-4" />
                  Download Report
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
