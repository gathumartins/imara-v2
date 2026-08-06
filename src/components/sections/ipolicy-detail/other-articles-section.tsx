import Link from "next/link"
import { Scale } from "lucide-react"
import { PostEdge } from "@/types/post"

export function OtherArticlesSection({otherPosts}: {otherPosts: PostEdge[]}) {
  return (
    <aside className="lg:col-span-4">
      <div className="sticky top-24">
        <h4 className="text-ui-bold text-blue-700">Other Policies</h4>
        <ul className="mt-4 divide-y divide-gray-100">
          {otherPosts.map((post) => {
            const date = new Date(post.node.date);
            const formattedDate = new Intl.DateTimeFormat("en-US", {
              month: "short",
              day: "2-digit",
              year: "numeric",
            }).format(date);

            return (
              <li key={post.node.id} className="py-4 first:pt-0">
                <Link
                  href={`/blog/${post.node.slug}`}
                  className="group flex gap-3"
                >
                  <span
                    className={`h-16 w-16 shrink-0 rounded-lg bg-gradient-to-br from-blue-100 to-blue-200 p-3 text-blue-700 group-hover:from-blue-200 group-hover:to-blue-300`}
                    style={{
                      backgroundImage: `url(${post.node.featuredImage?.node?.sourceUrl})`,
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                    }}
                    aria-hidden="true"
                  />
                  <span className="flex flex-col gap-1">
                    <span className="text-caption text-gray-500">
                      {formattedDate}
                    </span>
                    <span className="text-body-s font-medium text-navy-900 group-hover:text-blue-700">
                      {post.node.title}
                    </span>
                  </span>
                </Link>
              </li>
            )
          })}
        </ul>

        <Link
          href="/blog"
          className="mt-4 inline-flex items-center gap-2 text-ui-medium text-blue-700 hover:underline"
        >
          <Scale className="size-4" />
          Back to iPolicy
        </Link>
      </div>
    </aside>
  );
}
