import { Card, CardContent } from "@/components/ui/card"
import { cn } from "@/lib/utils"

interface TestimonialCardProps {
  quote: string
  name: string
  role: string
  avatarSrc?: string
  className?: string
}

export function TestimonialCard({
  quote,
  name,
  role,
  avatarSrc,
  className,
}: TestimonialCardProps) {
  return (
    <Card
      className={cn(
        "border-0 bg-navy-900 text-white ring-0",
        className
      )}
    >
      <CardContent className="flex h-full flex-col gap-6">
        <span className="h-1 w-8 rounded-full bg-gold-600" />
        <p className="text-body-l text-white">&ldquo;{quote}&rdquo;</p>
        <div className="mt-auto flex items-center gap-3">
          <div className="flex size-9 items-center justify-center overflow-hidden rounded-full bg-blue-700">
            {avatarSrc ? (
              // eslint-disable-next-line @next/next/no-img-element
              <img src={avatarSrc} alt={name} className="size-full object-cover" />
            ) : null}
          </div>
          <div>
            <p className="text-ui-medium font-bold text-white">{name}</p>
            <p className="text-caption text-blue-300">{role}</p>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
