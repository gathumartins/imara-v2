import { RegisterCta } from "@/components/shared/register-cta"
import { AboutSection } from "@/components/sections/home/about-section"
import { HeroSection } from "@/components/sections/home/hero-section"
import { ImpactSection } from "@/components/sections/home/impact-section"
import { MissionSection } from "@/components/sections/home/mission-section"
import { PartnersSection } from "@/components/sections/home/partners-section"
import { ProgramComponentsSection } from "@/components/sections/home/program-components-section"
import { TestimonialsSection } from "@/components/sections/home/testimonials-section"

export default async function Home() {
    const query = `
{
page:page(id: "cG9zdDoxMA==") {
  id
    title
    uri
    slug
    link
    content
    homehero {
      hero {
        cta
        heroimage {
          node {
            sourceUrl
          }
        }
        herotitle
      }
      homeabout {
        excerpt
        homeaboutimage {
          node {
            altText
            sourceUrl
            mediaDetails {
              height
              width
            }
          }
        }
        readmore {
          linklabel
          link
        }
        title
      }
      homestats {
        title
        description
        stats {
          figures
          title
          description
        }
      }
      homeapply {
        excerpt
        homeapplymage {
          node {
            altText
            sourceUrl
            mediaDetails {
              height
              width
            }
          }
        }
        title
        readmore {
          linklabel
          link
        }
      }
    }
  }
  partners: partners {
    edges {
      node {
        title
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
  tests: testimonials {
    edges {
      node {
        title
        content
        testimonialFields {
          cohort
        }
      }
    }
  }
  programs: programs {
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
  headings: heading(id: "cG9zdDozODM=", idType: ID) {
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

    const heroData = data.data.page.homehero.hero;
    const homeStats = data.data.page.homehero.homestats;
    const homeAbout = data.data.page.homehero.homeabout;
    const homeApply = data.data.page.homehero.homeapply;
    const homePrograms = data.data.programs.edges;
  return (
    <>
      <HeroSection />
      <PartnersSection />
      <MissionSection />
      <ImpactSection />
      <ProgramComponentsSection />
      <TestimonialsSection />
      <AboutSection />
      <RegisterCta />
    </>
  )
}
