import { PageHero } from "@/components/shared/page-hero"
import { ArticleBodySection } from "@/components/sections/ipolicy-detail/article-body-section"
import { AuthorBioSection } from "@/components/sections/ipolicy-detail/author-bio-section"
import { OtherArticlesSection } from "@/components/sections/ipolicy-detail/other-articles-section"
import { ShareArticleSection } from "@/components/sections/ipolicy-detail/share-article-section"

export default function IPolicyDetailPage() {
  return (
    <>
      <PageHero
        breadcrumbs={[{ label: "Blog", href: "/ipolicy" }, { label: "Article" }]}
        align="center"
        className="pb-48 md:pb-56"
        eyebrow={
          <span className="mb-6 inline-block w-fit rounded-full bg-white px-4 py-1.5 text-tag text-blue-700">
            Leadership
          </span>
        }
        title="Leadership Events 2024: Stay ahead of the curve"
        titleClassName="text-h2 md:text-h1 max-w-3xl"
      >
        <div className="mt-10 flex max-w-3xl flex-wrap items-center justify-center gap-3">
          <div className="flex size-9 items-center justify-center rounded-full bg-gold-600 text-caption font-bold text-white">
            BC
          </div>
          <span className="text-body-s font-medium text-white/60">Brian Clark</span>
          <span className="text-white/60" aria-hidden="true">
            &middot;
          </span>
          <span className="text-body-s text-white/60">Jan 16, 2024</span>
          <span className="text-white/60" aria-hidden="true">
            &middot;
          </span>
          <span className="text-body-s text-white/60">8 min read</span>
        </div>
      </PageHero>

      {/* Overlapping Featured Image */}
      <div className="container-page relative z-10 -mt-32 flex justify-center pb-16">
        <div className="flex aspect-[21/9] w-full max-w-5xl items-center justify-center rounded-2xl bg-blue-100/80 shadow-sm backdrop-blur-sm">
          {/* Skeleton representation of image */}
          <div className="flex flex-col items-center justify-center opacity-20">
            <div className="mb-6 flex gap-4">
              <div className="h-32 w-48 rounded bg-blue-700/40"></div>
              <div className="flex flex-col gap-4">
                <div className="h-6 w-32 rounded bg-blue-700/40"></div>
                <div className="h-4 w-48 rounded bg-blue-700/40"></div>
                <div className="h-4 w-40 rounded bg-blue-700/40"></div>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="size-16 rounded-full bg-blue-700/40"></div>
              <div className="size-16 rounded-full bg-blue-700/40"></div>
              <div className="size-16 rounded-full bg-blue-700/40"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Article */}
      <section className="bg-white pb-16 md:pb-24">
        <div className="container-page grid grid-cols-1 gap-12 lg:grid-cols-12">
          {/* Main column */}
          <div className="lg:col-span-8">
            <ArticleBodySection />
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
