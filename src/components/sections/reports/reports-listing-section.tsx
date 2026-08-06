import { PostEdge } from "@/types/post";
import { Download } from "lucide-react"

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

export function ReportsListingSection({reports, content}: {reports?: PostEdge[], content: string}) {
  return (
    <section className="bg-white py-20 md:py-24">
      <div className="container-page">
        <div className="mb-12 max-w-4xl">
          <p className="text-tag text-gold-700">All Reports</p>
          <h2 className="mt-3">Programme documentation</h2>
          <div
            className="mt-4 text-body text-gray-500"
            dangerouslySetInnerHTML={{ __html: content }}
          />
        </div>

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {reports?.map((report, i) => (
            <article
              key={`${report.node.title}-${report.node.reportfields?.year ?? "unknown"}-${i}`}
              className="flex flex-col overflow-hidden rounded-[16px] bg-white ring-1 ring-gray-200"
            >
              <div
                className={`relative flex h-52 items-center justify-center bg-navy-800`}
              >
                <span className="absolute right-4 top-4 rounded-full bg-alert px-3 py-1 text-tag text-white">
                  {report.node.reportfields?.year ?? "N/A"}
                </span>
                <DocumentIcon />
              </div>

              <div className="flex flex-1 flex-col gap-3 p-6">
                <span className="text-tag text-blue-700">{report.node.reportfields?.tag ?? "Report"}</span>
                <h4 className="text-ui-bold text-navy-900">{report.node.title}</h4>
                <div className="text-body-s font-light leading-relaxed text-gray-500" dangerouslySetInnerHTML={{ __html: report.node.excerpt || "No description available." }} />
                <a
                  href={report.node.reportfields?.report?.node?.mediaItemUrl || "#"}
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
  );
}
