import Image from "next/image"
import Link from "next/link"

import { Button } from "@/components/ui/button"
import { MissionShape } from "@/components/shared/mission-shape"
import type { HomeApplySection, TestimonialNode } from "@/types/post"

function getInitials(name: string) {
  return name
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0]?.toUpperCase())
    .join("")
}

export function MissionSection({
  apply,
  testimonial,
}: {
  apply?: HomeApplySection | null
  testimonial?: { node?: TestimonialNode | null } | null
}) {
  const imageSrc = apply?.homeapplymage?.node?.sourceUrl ?? null
  const imageAlt = apply?.homeapplymage?.node?.altText ?? "Imara Fellowship Cohort 5 fellows in session"
  const applyHref = apply?.readmore?.link ?? null
  const applyLabel = apply?.readmore?.linklabel ?? "Apply Now"
  const isExternalApply = applyHref ? /^https?:\/\//.test(applyHref) : false

  const testimonialNode = testimonial?.node ?? null
  const testimonialName = testimonialNode?.title ?? "Imara Fellow"
  const testimonialCohort = testimonialNode?.testimonialFields?.cohort ?? null
  const testimonialQuote = testimonialNode?.content ?? null

  return (
    <section className="relative overflow-hidden bg-gold-100 py-20 md:py-24">
      <MissionShape
        className="pointer-events-none absolute"
        style={{
          bottom: "-40px",
          right: "-80%",
          width: "160%",
          height: "auto",
        }}
      />

      <div className="container-page relative z-10 grid grid-cols-1 items-start gap-14 lg:grid-cols-2">
        <div className="relative">
          <div
            aria-hidden
            className="absolute -left-6 -top-6 h-64 w-64 rounded-[24px] bg-gradient-to-br from-gold-600/15 to-success/10"
          />
          <div
            aria-hidden
            className="absolute -bottom-4 -right-4 h-40 w-40 rounded-[16px] border-2 border-gold-500/25"
          />

          <div className="relative flex aspect-[4/5] w-full flex-col justify-end overflow-hidden rounded-[24px] shadow-xl">
            {imageSrc && (
              <Image
                unoptimized
                src={imageSrc}
                alt={imageAlt}
                fill
                sizes="(min-width: 1024px) 40vw, 90vw"
                className="object-cover"
              />
            )}
            {testimonialQuote && (
              <div className="relative z-10 m-4 flex flex-col gap-3 rounded-lg bg-white/95 p-5 shadow-lg sm:m-6">
                <p
                  className="text-body-s text-navy-900"
                  dangerouslySetInnerHTML={{ __html: testimonialQuote }}
                />
                <div className="flex items-center gap-3">
                  <span className="flex size-9 shrink-0 items-center justify-center rounded-full bg-gold-600 text-ui-bold text-navy-900">
                    {getInitials(testimonialName)}
                  </span>
                  <div>
                    <p className="text-ui-medium font-bold text-navy-900">
                      {testimonialName}
                    </p>
                    {testimonialCohort && (
                      <p className="text-caption text-gray-500">
                        {testimonialCohort} Fellow
                      </p>
                    )}
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        <div className="flex flex-col gap-6 [&_h2]:text-navy-900 [&_p]:text-gray-600">
          <div
            className="text-h2 [&_span]:text-blue-700 text-navy-900"
            dangerouslySetInnerHTML={{ __html: apply?.title ?? "" }}
          />
          <div
            className="text-body-s text-gray-600 [&_h4]:text-ui-bold [&_h4]:my-3 [&_h4]:text-navy-900 [&_ol]:list-inside [&_ol]:list-decimal [&_ol]:pl-3 [&_ol>li]:mb-2 [&_ul]:list-inside [&_ul]:list-disc [&_ul]:pl-3 [&_ul>li]:mb-2 [&_p]:mb-4"
            dangerouslySetInnerHTML={{
              __html:
                apply?.excerpt ??
                "",
            }}
          />
          {applyHref && (
            <div>
              <Button asChild size="md">
                <a
                  href={applyHref}
                  {...(isExternalApply
                    ? { target: "_blank", rel: "noopener noreferrer" }
                    : {})}
                >
                  {applyLabel}
                </a>
              </Button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
