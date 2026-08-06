import { PageHero } from "@/components/shared/page-hero"
import { RegisterCta } from "@/components/shared/register-cta"
import { PrivacyContent } from "@/components/sections/privacy/privacy-content"

export default async function PrivacyPolicyPage() {
      const query = `
  {
  page:page(id: "cG9zdDoyOQ==") {
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
}
  `;

      const result = await fetch(
        `${process.env.WORDPRESS_API_URL}?query=${encodeURIComponent(query)}`,
        { headers: { "Content-Type": "application/json" } },
      );
      const data = await result.json();
      const mini = data.data.page.pageBanners;
      const breadcrumb = data.data.page.title;
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
      <PrivacyContent content={data.data.page.content} />
      <RegisterCta />
    </>
  )
}
