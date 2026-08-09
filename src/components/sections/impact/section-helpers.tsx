import Image from "next/image"

import { cn } from "@/lib/utils"
import type { ImpactMedia } from "@/types/post"

/**
 * Small presentational helpers shared across several Impact page sections
 * (Capacity Building, Partnership, Policy Recommendations). Colocated here
 * rather than duplicated per-section since they're identical in each use.
 */
export function PlaceholderPhoto({
  captionTitle,
  captionSubtitle,
  captionTitleClassName,
  className,
}: {
  captionTitle: string
  captionSubtitle: string
  captionTitleClassName?: string
  className?: string
}) {
  return (
    <div
      className={cn(
        "relative flex min-h-[320px] flex-col justify-end overflow-hidden rounded-2xl bg-navy-800",
        className
      )}
    >
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="flex flex-col items-center gap-2 opacity-40">
          <span className="size-24 rounded-full bg-blue-300" />
          <span className="h-24 w-40 rounded-t-full bg-blue-300" />
        </div>
      </div>
      <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-navy-900 via-navy-900/80 to-transparent px-5 pt-16 pb-5">
        <p className={captionTitleClassName ?? "text-ui-medium text-white"}>
          {captionTitle}
        </p>
        <p className="text-caption text-blue-200">{captionSubtitle}</p>
      </div>
    </div>
  )
}

/**
 * Renders a real CMS media image when available, falling back to the
 * decorative PlaceholderPhoto otherwise.
 */
export function HighlightPhoto({
  media,
  captionTitle,
  captionSubtitle,
  captionTitleClassName,
  className,
}: {
  media?: ImpactMedia | null
  captionTitle: string
  captionSubtitle: string
  captionTitleClassName?: string
  className?: string
}) {
  const src = media?.node?.mediaItemUrl

  if (!src) {
    return (
      <PlaceholderPhoto
        captionTitle={captionTitle}
        captionSubtitle={captionSubtitle}
        captionTitleClassName={captionTitleClassName}
        className={className}
      />
    )
  }

  return (
    <div
      className={cn(
        "relative flex min-h-[320px] flex-col justify-end overflow-hidden rounded-2xl bg-navy-800",
        className
      )}
    >
      <Image
        src={src}
        unoptimized
        alt={media?.node?.altText ?? captionTitle}
        fill
        sizes="(min-width: 768px) 50vw, 100vw"
        className="object-cover"
      />
      <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-navy-900 via-navy-900/80 to-transparent px-5 pt-16 pb-5">
        <p className={captionTitleClassName ?? "text-ui-medium text-white"}>
          {captionTitle}
        </p>
        <p className="text-caption text-blue-200">{captionSubtitle}</p>
      </div>
    </div>
  )
}

export function SectionEyebrow({ label }: { label: string }) {
  return (
    <div className="flex flex-col gap-3">
      <span className="text-tag text-gold-700">{label}</span>
      <span className="h-[3px] w-9 rounded-full bg-blue-700" />
    </div>
  )
}
