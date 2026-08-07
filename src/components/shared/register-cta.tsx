import Link from "next/link"
import { ArrowRight } from "lucide-react"

import { Button } from "@/components/ui/button"
import { NewsletterForm } from "@/components/shared/newsletter-form"

export async function RegisterCta({ cohortLabel = "Cohort 9 — 2026" }: { cohortLabel?: string }) {
  const query = `
  {
    layout: layout(id: "cG9zdDo5OQ==") {
      headerFooter {
        newlogo {
          node {
            sourceUrl
          }
        }
        register {
          registerTitle
          registerDescription
          buttonLink {
            title
            target
            url
          }
          video
          registerImage {
            node {
              sourceUrl
              mediaDetails {
                height
                width
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
  const register = data.data.layout.headerFooter.register;

  const buttonHref = register?.buttonLink?.url ?? "#"
  const buttonLabel = register?.buttonLink?.title ?? "Register for Fellowship"
  const buttonTarget = register?.buttonLink?.target || undefined

  return (
    <section className="bg-blue-100 py-20 md:py-24">
      <div className="container-page">
        <div className="overflow-hidden rounded-3xl bg-cta">
          <div className="grid grid-cols-1 gap-10 p-8 md:p-14 lg:grid-cols-2 lg:items-center">
            <div>
              <span className="inline-flex w-fit items-center gap-2 rounded-full bg-white/10 px-4 py-1.5 text-tag text-gold-700">
                <span className="size-1.5 rounded-full bg-success" />
                {cohortLabel}
              </span>
              <div
                className="mt-5 text-h2 text-white [&_span]:text-gold-700"
                dangerouslySetInnerHTML={{
                  __html:
                    register?.registerTitle ??``,
                }}
              />
              <div
                className="mt-4 text-body text-blue-100"
                dangerouslySetInnerHTML={{
                  __html:
                    register?.registerDescription ?? "",
                }}
              />
              <Button asChild variant="gold" size="md" className="mt-8">
                <a
                  href={buttonHref}
                  {...(buttonTarget ? { target: buttonTarget, rel: "noopener noreferrer" } : {})}
                  className="flex w-fit items-center gap-2"
                >
                  {buttonLabel}
                  <ArrowRight className="size-4" />
                </a>
              </Button>
            </div>

            <div className="rounded-2xl bg-white/5 p-8 ring-1 ring-white/10">
              <h3 className="text-white">Subscribe to Our Newsletter</h3>
              <p className="mt-2 text-body-s text-blue-100">
                Get fellowship updates, policy insights, and alumni stories
                delivered to your inbox.
              </p>
              <NewsletterForm />
              <p className="mt-4 text-caption text-blue-300">
                No spam. Unsubscribe any time. We send 1-2 newsletters per
                month.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
