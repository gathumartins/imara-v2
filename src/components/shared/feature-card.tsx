import Link from "next/link"
import { ArrowRight } from "lucide-react"

import { Card, CardContent } from "@/components/ui/card"
import { cn } from "@/lib/utils"

interface FeatureCardProps {
  badge: string
  title: string
  description: string
  href: string
  className?: string
}

export function FeatureCard({
  badge,
  title,
  description,
  href,
  className,
}: FeatureCardProps) {
  return (
    <Card className={cn("ring-border bg-card", className)}>
      <CardContent className="flex h-full flex-col gap-3">
        <span className="w-fit rounded-full bg-blue-100 px-3 py-1 text-caption text-blue-700">
          {badge}
        </span>
        <h4 className="text-ui-bold text-navy-900">{title}</h4>
        <p className="text-body-s text-gray-500">{description}</p>
        <Link
          href={href}
          className="mt-auto flex w-fit items-center gap-1 text-ui-medium text-blue-700 hover:underline"
        >
          Learn More
          <ArrowRight className="size-4" />
        </Link>
      </CardContent>
    </Card>
  )
}
