import { PageHero } from "@/components/shared/page-hero"
import { RegisterCta } from "@/components/shared/register-cta"

import { CapacityBuildingSection } from "@/components/sections/impact/capacity-building-section"
import { InPageNavSection } from "@/components/sections/impact/in-page-nav-section"
import { PartnershipSection } from "@/components/sections/impact/partnership-section"
import { PolicyRecommendationsSection } from "@/components/sections/impact/policy-recommendations-section"

export default async function ImpactPage() {
      const query = `
  {
page: page(id: "cG9zdDoxOA==") {
    id
    title
    uri
    slug
    link
    pageBanners {
      newPageTitle
      bannerImage {
        node {
          mediaItemUrl
        }
      }
    }
    impactfields {
      capacity {
        title
        description
        subgroups {
          list {
            title
            description
            shortname
          }
        }
        defaultValue
      }
      partnership {
        title
        description
        highlight {
          description
          media {
            node {
              altText
              mediaDetails {
                width
                height
              }
              mediaItemUrl
            }
          }
        }
      }
      policy {
        title
        description
        highlight {
          description
          media {
            node {
              altText
              mediaDetails {
                width
                height
              }
              mediaItemUrl
            }
          }
        }
      }
    }
  }
}
  `;

      const result = await fetch(
        `${process.env.WORDPRESS_API_URL}?query=${encodeURIComponent(query)}`,
        { headers: { "Content-Type": "application/json" } },
      );
      const data = await result.json();
      const mini = data.data.page.pageBanners;
      const cats = data.data.page.impactfields.capacity.subgroups;
      const breadcrumb = data.data.page.title;
  return (
    <>
      <PageHero
        breadcrumbLabel={breadcrumb}
        title={
          <div className="[&_span]:text-gold-700 [&_br]:hidden md:[&_br]:block" dangerouslySetInnerHTML={{ __html: mini.newPageTitle }} />
        }
      />

      <InPageNavSection />
      <CapacityBuildingSection />
      <PartnershipSection />
      <PolicyRecommendationsSection />

      <RegisterCta />
    </>
  )
}
