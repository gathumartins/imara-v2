import { PageHero } from "@/components/shared/page-hero"
import { RegisterCta } from "@/components/shared/register-cta"
import { CohortsSection } from "@/components/sections/fellows/cohorts-section"

export default async function FellowsPage() {
      const query = `
  {
  page:page(id: "cG9zdDoxNg==") {
    id
    title
    content
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
  }
  cohorts:cohorts {
    edges {
      node {
        name
        description
        slug
        id
        fellowCohort {
          cohortImage {
            node {
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
      const breadcrumb = data.data.page.title;
      const cohorts = data.data.cohorts.edges;
  return (
    <>
      <PageHero
        breadcrumbLabel={breadcrumb}
        title={
          <div
            className="[&_span]:text-gold-700 [&_br]:hidden md:[&_br]:block"
            dangerouslySetInnerHTML={{ __html: mini.newPageTitle }}
          />
        }
      />

      <CohortsSection />

      <RegisterCta />
    </>
  );
}
