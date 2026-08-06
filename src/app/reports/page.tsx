import { PageHero } from "@/components/shared/page-hero"
import { RegisterCta } from "@/components/shared/register-cta"
import { ReportsListingSection } from "@/components/sections/reports/reports-listing-section"

export default async function ReportsPage() {
      const query = `
  {
  page:page(id: "cG9zdDoyMA==") {
    id
    title
    uri
    slug
    link
    content
    pageBanners {
      newPageTitle
      bannerImage {
        node {
          mediaItemUrl
        }
      }
    }
  }
  reports:reports(first:1000) {
    edges {
      node {
        title
        id
        excerpt
        reportfields {
          report {
            node {
              mediaItemUrl
            }
          }
          year
          tag
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
      const reports = data.data.reports.edges;
      const itemsPerPage = 6;
      const comp = "report";
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

      <ReportsListingSection content={data.data.page.content} reports={reports} />

      <RegisterCta />
    </>
  );
}
