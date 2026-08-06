import Link from "next/link"
import {
  Award,
  BookOpen,
  MessageSquare,
  Scale,
  Users,
} from "lucide-react"
import { PostEdge } from "@/types/post"

const ARTICLES = [
  {
    badge: "Policy",
    badgeColor: "text-blue-700",
    icon: Scale,
    date: "Oct 24, 2024",
    title: "How Imara Fellows Are Reshaping County Governance from the Inside",
    description:
      "Three fellows share what it's really like to implement policy change at the county level in Kenya.",
  },
  {
    badge: "Community",
    badgeColor: "text-gold-700",
    icon: Users,
    date: "Oct 24, 2024",
    title: "Community Collaboration: What Listening First Really Looks Like",
    description:
      "Lessons from the field — how our fellows approach community engagement before proposing solutions.",
  },
  {
    badge: "Education",
    badgeColor: "text-blue-700",
    icon: BookOpen,
    date: "Oct 24, 2024",
    title: "Online Learning in the Fellowship: Why We Partner with Global Universities",
    description:
      "The case for pairing on-the-ground African leadership development with globally recognised academic credentials.",
  },
  {
    badge: "Opinion",
    badgeColor: "text-gold-700",
    icon: MessageSquare,
    date: "Oct 24, 2024",
    title: "Why Africa's Public Sector Needs More Young Leaders — Now",
    description:
      "The urgency of developing a pipeline of ethical, empathetic, and capable public servants across Kenya.",
  },
  {
    badge: "Policy",
    badgeColor: "text-blue-700",
    icon: Scale,
    date: "Oct 24, 2024",
    title: "From Lecture Hall to County Assembly: A Fellow's Journey",
    description:
      "Kiprotich Cheruiyot shares how the Imara Residential Academy prepared him for real legislative work.",
  },
  {
    badge: "Fellowship",
    badgeColor: "text-gold-700",
    icon: Award,
    date: "Oct 24, 2024",
    title: "Reflecting on Five Years of Imara: What We've Learned",
    description:
      "The Imara team looks back at five cohorts — the patterns, the breakthroughs, and what comes next.",
  },
]

export function LatestArticlesSection({ posts }: { posts: PostEdge[] }) {
  return (
    <section className="bg-white pb-20 md:pb-24">
      <div className="container-page">
        <p className="mb-3 text-tag text-alert">Latest Policies</p>
        <h2 className="mb-10 text-navy-900">More from the fellowship</h2>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {posts.map((post) => {
            const date = new Date(post.node.date);
            const formattedDate = new Intl.DateTimeFormat("en-US", {
              month: "short",
              day: "2-digit",
              year: "numeric",
            }).format(date);
            return (
              <article
                key={post.node.id}
                className="flex flex-col overflow-hidden rounded-2xl bg-gold-100"
              >
                <div
                  className="relative flex h-36 items-center justify-center overflow-hidden bg-cover bg-center bg-linear-to-br from-blue-700/10 to-navy-900/10"
                  style={
                    post.node.featuredImage?.node?.sourceUrl
                      ? {
                          backgroundImage: `linear-gradient(135deg, rgba(2, 10, 31, 0.15), rgba(37, 99, 235, 0.2)), url(${post.node.featuredImage.node.sourceUrl})`,
                          backgroundSize: "cover",
                          backgroundPosition: "center",
                        }
                      : undefined
                  }
                />
                <div className="flex flex-1 flex-col gap-3 p-6">
                  <p className="text-caption text-gray-500">{formattedDate}</p>
                  <h4 className="text-ui-bold text-navy-900">
                    {post.node.title}
                  </h4>
                  <div className="text-body-s text-gray-600 line-clamp-3" dangerouslySetInnerHTML={{ __html: post.node.content }} />
                  <Link
                    href={`/blog/${post.node.slug}`}
                    className="mt-auto w-fit text-ui-medium text-blue-700 underline underline-offset-4 hover:text-navy-900"
                  >
                    Read More
                  </Link>
                </div>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
