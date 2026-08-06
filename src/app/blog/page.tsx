import { PageHero } from "@/components/shared/page-hero"
import { RegisterCta } from "@/components/shared/register-cta"
import { FeaturedArticleSection } from "@/components/sections/ipolicy/featured-article-section"
import { LatestArticlesSection } from "@/components/sections/ipolicy/latest-articles-section"
import type { PostEdge } from "@/types/post"

export default async function IPolicyPage() {
  const query = `
  {
  page:page(id: "cG9zdDoyMg==") {
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
  }
  posts:posts(first:1000) {
    edges {
      node {
        id
        ipolicyFields {
          author {
            name
            image {
              node {
                mediaItemUrl
              }
            }
          }
        }
        title
        content
        date
        slug
        categories {
          edges {
            node {
              id
              name
            }
          }
        }
        author {
          node {
            name
            avatar {
              url
            }
          }
        }
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
}
  `;

      const result = await fetch(
        `${process.env.WORDPRESS_API_URL}?query=${encodeURIComponent(query)}`,
        { headers: { "Content-Type": "application/json" } },
      );
      const data = await result.json();
      const mini = data.data.page.pageBanners;
      const breadcrumb = data.data.page.title;
      const posts = data.data.posts.edges as PostEdge[];
      const categoryId = "dGVybToxMw==";
      const post = posts
        .filter((post: PostEdge) =>
          post.node.categories.edges.some(
            (category) => category.node.id === categoryId,
          ),
        )
        .sort(
          (a: PostEdge, b: PostEdge) =>
            new Date(b.node.date).getTime() - new Date(a.node.date).getTime(),
        )[0];
      const otherPosts = posts.filter(
        (otherPost: PostEdge) => otherPost.node.id !== post?.node.id,
      );

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

      <FeaturedArticleSection post={post} />
      <LatestArticlesSection posts={otherPosts} />

      <RegisterCta />
    </>
  );
}
