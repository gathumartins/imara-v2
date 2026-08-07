import { PageHero } from "@/components/shared/page-hero"
import { RegisterCta } from "@/components/shared/register-cta"
import { AlumniTeamSection } from "@/components/sections/about/alumni-team-section"
import { IntroSection } from "@/components/sections/about/intro-section"
import { MissionValuesSection } from "@/components/sections/about/mission-values-section"
import { ProgrammeComponentsSection } from "@/components/sections/about/programme-components-section"

export default async function AboutPage() {
  const query = `
  {
  page: page(id: "cG9zdDoxMg==") {
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
    content
    featuredImage {
      node {
        altText
        mediaDetails {
          height
          width
        }
        sourceUrl
      }
    }
    aboutfields {
      coreStatements {
        defaultvalue
        statements {
          title
          content
          shortname
          icon {
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
  }
  programs:programs {
    edges {
      node {
        title
        slug
        content
        excerpt
        uri
        programfields {
          icon {
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
  }
  teams:teams {
    edges {
      node {
        title
        content
        featuredImage {
          node {
            altText
            mediaDetails {
              height
              width
            }
            sourceUrl
          }
        }
        teamfields {
          designation
        }
      }
    }
  }
  headings:heading(id: "cG9zdDozODM=", idType: ID) {
    siteheadings {
      headings {
        program {
          title
          subtitle
        }
        testimonials {
          title
          subtitle
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
  const homePrograms = data.data.programs.edges;
  const teams = data.data.teams.edges;
  const breadcrumb = data.data.page.title;

  return (
    <>
      <PageHero
        breadcrumbLabel={breadcrumb}
        title={
          <div className="[&_span]:text-gold-700 [&_br]:hidden md:[&_br]:block" dangerouslySetInnerHTML={{ __html: mini.newPageTitle }} />
        }
      />

      <IntroSection />
      <MissionValuesSection />
      <ProgrammeComponentsSection programs={homePrograms} />
      <AlumniTeamSection teams={teams} />

      <RegisterCta />
    </>
  );
}
