import { PageHero } from "@/components/shared/page-hero"
import { RegisterCta } from "@/components/shared/register-cta"
import { FeaturedArticleSection } from "@/components/sections/ipolicy/featured-article-section"
import { LatestArticlesSection } from "@/components/sections/ipolicy/latest-articles-section"

export default function IPolicyPage() {
  return (
    <>
      <PageHero
        breadcrumbLabel="iPolicy"
        title={
          <>
            Stay updated
            <br />
            with the <span className="text-gold-700">Latest</span>
          </>
        }
      />

      <FeaturedArticleSection />
      <LatestArticlesSection />

      <RegisterCta />
    </>
  )
}
