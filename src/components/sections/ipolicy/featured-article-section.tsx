import Link from "next/link"
import { Sparkles } from "lucide-react"
import type { PostEdge } from "@/types/post";

export function FeaturedArticleSection({post}: {post?: PostEdge}) {
  const featuredImageUrl = post?.node.featuredImage?.node?.sourceUrl
  const date = post?.node.date ? new Date(post.node.date) : null
  const formattedDate = date
    ? new Intl.DateTimeFormat("en-US", {
        month: "short",
        day: "2-digit",
        year: "numeric",
      }).format(date)
    : null
  return (
    <section className="bg-white py-20 md:py-24">
      <div className="container-page">
        <p className="mb-4 text-tag text-blue-700">Featured Policy</p>
        <div className="grid overflow-hidden rounded-2xl bg-gold-100 md:grid-cols-2">
          <div
            className="relative flex min-h-64 items-center justify-center overflow-hidden bg-cover bg-center bg-linear-to-br from-navy-900 via-blue-700 to-blue-500"
            style={
              featuredImageUrl
                ? {
                    backgroundImage: `linear-gradient(135deg, rgba(2, 10, 31, 0.8), rgba(37, 99, 235, 0.7)), url(${featuredImageUrl})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }
                : undefined
            }
          >
            {/* <Sparkles className="size-20 text-white/20" aria-hidden="true" />
            <span className="absolute top-6 left-6 rounded-full bg-white px-3 py-1 text-tag text-alert">
              Leadership
            </span> */}
          </div>
          <div className="flex flex-col justify-center gap-5 p-8 md:p-12">
            <div className="flex items-center gap-2 text-caption text-gray-500">
              {/* <span className="text-tag text-blue-700">Leadership</span> */}
              {/* <span aria-hidden="true">&bull;</span> */}
              <span>{formattedDate}</span>
            </div>
            <h3 className="text-navy-900">{post?.node.title}</h3>
            {post?.node.content ? (
              <div
                className="text-body text-gray-600 line-clamp-3"
                dangerouslySetInnerHTML={{ __html: post.node.content }}
              />
            ) : null}
            <Link
              href={`/blog/${post?.node.slug}`}
              className="w-fit text-ui-medium text-blue-700 underline underline-offset-4 hover:text-navy-900"
            >
              Read the full article
            </Link>
            <div className="mt-2 flex items-center gap-3 border-t border-gold-500/20 pt-5">
              <div className="flex size-9 shrink-0 items-center justify-center rounded-full bg-navy-900 text-caption font-bold text-white">
                {post?.node.author?.node.name
                  .split(" ")
                  .map((n) => n[0])
                  .join("")}
              </div>
              <div>
                <p className="text-ui-medium font-bold text-navy-900">
                  {post?.node.author?.node.name}
                </p>
                <p className="text-caption text-gray-500">
                  Imara Fellow &middot; {formattedDate}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
