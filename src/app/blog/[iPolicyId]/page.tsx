import { PageHero } from "@/components/shared/page-hero"
import { ArticleBodySection } from "@/components/sections/ipolicy-detail/article-body-section"
import { AuthorBioSection } from "@/components/sections/ipolicy-detail/author-bio-section"
import { OtherArticlesSection } from "@/components/sections/ipolicy-detail/other-articles-section"
import { ShareArticleSection } from "@/components/sections/ipolicy-detail/share-article-section"
import type { PostEdge } from "@/types/post"

export default async function IPolicyDetailPage({params}: {params: Promise<{iPolicyId: string}>}) {

  const resolvedParams = await params
  const { iPolicyId } = resolvedParams
const query = `
query NewQuery($iPolicyId:ID!){
  post:post(id:$iPolicyId, idType: SLUG) {
    id
    slug
    title
    content
    date
    author {
      node {
        name
        avatar {
          url
        }
      }
    }
    featuredImage {
      node {
        altText
        mediaDetails {
          width
          height
        }
        sourceUrl
      }
    }
  }
  posts:posts(first:6) {
    edges {
      node {
        id
        title
        content
        date
        slug
        featuredImage {
          node {
            altText
            mediaDetails {
              width
              height
            }
            sourceUrl
          }
        }
      }
    }
  }
  page:page(id: "cG9zdDoyMg==") {
    id
    title
    uri
    slug
    link
    pageBanners {
      pageTitle
      bannerImage {
        node {
          mediaItemUrl
        }
      }
    }
  }

}`;
const variables = {
  iPolicyId,
};
const res = await fetch(`${process.env.WORDPRESS_API_URL}`, {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  next: { revalidate: 60 },
  body: JSON.stringify({ query, variables }),
});
const data = await res.json();
const mini = data.data.page.pageBanners;
const date = new Date(data.data.post.date);
const formattedDate = new Intl.DateTimeFormat("en-US", {
  month: "short",
  day: "2-digit",
  year: "numeric",
}).format(date);
const otherPosts = data.data.posts.edges.filter(
  (post: PostEdge) => post.node.id !== data.data.post.id,
);
  return (
    <>
      <PageHero
        breadcrumbs={[{ label: "Blog", href: "/blog" }]}
        align="center"
        className="pb-48 md:pb-56"
        title={data.data.post.title}
        titleClassName="text-h3 md:text-h2"
      >
        <div className="mt-10 flex max-w-3xl flex-wrap items-center justify-center gap-3">
          <div className="flex size-9 items-center justify-center overflow-hidden rounded-full bg-gold-600 text-caption font-bold text-white">
            {data.data.post.author?.node?.avatar?.url ? (
              <img
                src={data.data.post.author.node.avatar.url}
                alt={data.data.post.author.node.name}
                className="size-full object-cover"
              />
            ) : (
              data.data.post.author?.node?.name?.charAt(0)?.toUpperCase() || "A"
            )}
          </div>
          <span className="text-body-s font-medium text-white/60">
            {data.data.post.author?.node?.name || "Author"}
          </span>
          <span className="text-white/60" aria-hidden="true">
            &middot;
          </span>
          <span className="text-body-s text-white/60">{formattedDate}</span>
        </div>
      </PageHero>

      {/* Overlapping Featured Image */}
      <div className="container-page relative z-10 -mt-32 flex justify-center pb-16">
        <div
          className="flex aspect-21/9 w-full max-w-5xl items-center justify-center overflow-hidden rounded-2xl bg-blue-100/80 shadow-sm backdrop-blur-sm"
          style={{
            backgroundImage: `url(${data.data.post.featuredImage?.node?.sourceUrl})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
      </div>

      {/* Article */}
      <section className="bg-white pb-16 md:pb-24">
        <div className="container-page grid grid-cols-1 gap-12 lg:grid-cols-12">
          {/* Main column */}
          <div className="lg:col-span-8">
            <ArticleBodySection content={data.data.post.content}/>
            <AuthorBioSection />
            <ShareArticleSection />
          </div>

          {/* Sidebar */}
          <OtherArticlesSection />
        </div>
      </section>
    </>
  )
}
