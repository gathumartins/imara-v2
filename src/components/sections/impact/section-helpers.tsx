import { cn } from "@/lib/utils"

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
      <div className="relative bg-gradient-to-t from-navy-900/90 to-transparent p-5">
        <p className={captionTitleClassName ?? "text-ui-medium text-white"}>
          {captionTitle}
        </p>
        <p className="text-caption text-blue-300">{captionSubtitle}</p>
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
