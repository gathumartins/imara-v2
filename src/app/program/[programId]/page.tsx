import React from 'react'
import type { ProgramSummaryEdge } from "@/types/post"
import { PageHero } from "@/components/shared/page-hero";

const page = async ({ params }: { params: Promise<{ programId: string }> }) => {
  const resolvedParams = await params
  const { programId } = resolvedParams
    const query = `
   query NewQuery($programId:ID!){
    program:program(id: $programId, idType: SLUG) {
    id
    title
    slug
    content
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
    programfields {
      overview
    }
    pageBanners {
      newPageTitle
      bannerImage {
        node {
          mediaItemUrl
        }
      }
    }
  }
  programs:programs {
    edges {
      node {
        title
        id
        content
        slug
        programfields {
          icon {
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
}`;

    const variables = {
      programId,
    };
    const res = await fetch(`${process.env.WORDPRESS_API_URL}`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      next: { revalidate: 60 },
      body: JSON.stringify({ query, variables }),
    });
    const data = await res.json();
    const mini = data.data.program.pageBanners;
    const breadcrumb = data.data.program.title;
    const pId = data.data.program.id;
    const otherPrograms = data.data.programs.edges.filter(
      (program: ProgramSummaryEdge) => program.node.id !== pId,
    );
  return (
    <>
      <PageHero
        breadcrumbLabel={`Program: ${breadcrumb}`}
        title={
          <div
            className="[&_span]:text-gold-700 [&_br]:hidden md:[&_br]:block"
            dangerouslySetInnerHTML={{ __html: mini.newPageTitle }}
          />
        }
      />
    </>
  );
}

export default page