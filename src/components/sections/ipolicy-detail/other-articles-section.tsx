import Link from "next/link"
import { Scale } from "lucide-react"

const OTHER_ARTICLES = [
  {
    date: "Jan 24, 2024",
    title: "How Imara Fellows Are Reshaping County Governance",
    gradient: "from-navy-900 to-blue-700",
  },
  {
    date: "Jan 24, 2024",
    title: "Community Collaboration: What Listening First Really Looks Like",
    gradient: "from-navy-800 to-navy-900",
  },
  {
    date: "Jan 24, 2024",
    title: "Online Learning: Why We Partner with Global Universities",
    gradient: "from-blue-700 to-navy-800",
  },
  {
    date: "Jan 24, 2024",
    title: "Why Africa's Public Sector Needs More Young Leaders — Now",
    gradient: "from-gold-700 to-navy-900",
  },
]

export function OtherArticlesSection() {
  return (
    <aside className="lg:col-span-4">
      <div className="sticky top-24">
        <h4 className="text-ui-bold text-blue-700">Other Articles</h4>
        <ul className="mt-4 divide-y divide-gray-100">
          {OTHER_ARTICLES.map((item) => (
            <li key={item.title} className="py-4 first:pt-0">
              <Link href="/ipolicy" className="group flex gap-3">
                <span
                  className={`h-16 w-16 shrink-0 rounded-lg bg-gradient-to-br ${item.gradient}`}
                  aria-hidden="true"
                />
                <span className="flex flex-col gap-1">
                  <span className="text-caption text-gray-500">{item.date}</span>
                  <span className="text-body-s font-medium text-navy-900 group-hover:text-blue-700">
                    {item.title}
                  </span>
                </span>
              </Link>
            </li>
          ))}
        </ul>

        <Link
          href="/ipolicy"
          className="mt-4 inline-flex items-center gap-2 text-ui-medium text-blue-700 hover:underline"
        >
          <Scale className="size-4" />
          Back to iPolicy
        </Link>
      </div>
    </aside>
  )
}
