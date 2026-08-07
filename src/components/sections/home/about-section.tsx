import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

import { Button } from "@/components/ui/button"
import type { HomeAboutSection, HomeStatsSection } from "@/types/post"

export function AboutSection({
  about,
  stats,
}: {
  about?: HomeAboutSection | null
  stats?: HomeStatsSection | null
}) {
  const imageSrc = about?.homeaboutimage?.node?.sourceUrl ?? "/about-imara-fellows.webp"
  const imageAlt = about?.homeaboutimage?.node?.altText ?? "A group of Imara Fellowship fellows and alumni"
  const readMoreHref = about?.readmore?.link ?? "/about"
  const readMoreLabel = about?.readmore?.linklabel ?? "Read More"
  const isExternalReadMore = /^https?:\/\//.test(readMoreHref)

  const [topStat, bottomStat] = stats?.stats ?? []
  const topBadgeValue = topStat ? `${topStat.figures ?? ""}${topStat.suffix ?? ""}` : "500+"
  const topBadgeLabel = topStat?.title ?? "Fellows Trained"
  const bottomBadgeValue = bottomStat ? `${bottomStat.figures ?? ""}${bottomStat.suffix ?? ""}` : "32"
  const bottomBadgeLabel = bottomStat?.title ?? "African Countries"

  return (
    <section className="bg-gold-100 py-20 md:py-24">
      <div className="container-page grid grid-cols-1 items-center gap-14 lg:grid-cols-2">
        <div className="flex flex-col gap-6">
          <div className="flex items-center gap-3">
            <span className="h-0.5 w-5 bg-gold-600" />
            <p className="text-tag text-blue-700">About Us</p>
          </div>
          {about?.title ? (
            <h2>{about.title}</h2>
          ) : (
            <h2>
              A new generation of <br />
              <span className="text-blue-700">African leaders</span>
            </h2>
          )}
          <div
            className="text-body text-gray-500 max-lg:line-clamp-3 lg:line-clamp-6"
            dangerouslySetInnerHTML={{
              __html: about?.excerpt ?? "",
            }}
          />
          <div>
            <Button asChild variant="primary" size="md">
              <Link
                href={readMoreHref}
                className="flex items-center gap-2"
                {...(isExternalReadMore
                  ? { target: "_blank", rel: "noopener noreferrer" }
                  : {})}
              >
                {readMoreLabel}
                <ArrowRight className="size-4" />
              </Link>
            </Button>
          </div>
        </div>

        <div className="relative">
          <div className="relative aspect-[9/10] w-full overflow-hidden rounded-[32px] shadow-xl">
            <Image
              src={imageSrc}
              unoptimized
              alt={imageAlt}
              fill
              sizes="(min-width: 1024px) 40vw, 90vw"
              className="object-cover"
            />
          </div>
          {/* Top Left Badge */}
          <div className="absolute top-8 -left-4 flex items-center gap-4 rounded-[8px] bg-white px-5 py-4 shadow-xl sm:-left-10 lg:-left-12">
            <span className="flex size-10 items-center justify-center rounded-full bg-blue-100 text-lg">
              👥
            </span>
            <div className="flex flex-col">
              <p className="text-h3 text-navy-900">{topBadgeValue}</p>
              <p className="text-caption text-gray-400 font-medium tracking-wide">
                {topBadgeLabel}
              </p>
            </div>
          </div>
          {/* Bottom Right Badge */}
          <div className="absolute -bottom-6 -right-4 flex items-center gap-4 rounded-[8px] bg-white px-5 py-4 shadow-xl sm:-right-8 lg:-right-10">
            <span className="flex size-10 items-center justify-center rounded-full bg-success/10 text-lg">
              📄
            </span>
            <div className="flex flex-col text-left">
              <p className="text-h3 text-blue-700">{bottomBadgeValue}</p>
              <p className="text-caption text-gray-400 font-medium tracking-wide">
                {bottomBadgeLabel}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
