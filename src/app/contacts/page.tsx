import { PageHero } from "@/components/shared/page-hero"
import { RegisterCta } from "@/components/shared/register-cta"
import { FaqContactSection } from "@/components/sections/contacts/faq-contact-section"
import { MapSection } from "@/components/sections/contacts/map-section"

export default async function ContactsPage() {
     const query = `
  {
  page: page(id: "cG9zdDoyNA==") {
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
    contactUs {
      address
      mapLocation {
        center {
          lat
          lng
        }
        height
        zoom
      }
      faq {
        qandas {
          question
          answer
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
     const location = data.data.page.contactUs.mapLocation;
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

      <MapSection />
      <FaqContactSection />

      <RegisterCta />
    </>
  );
}
