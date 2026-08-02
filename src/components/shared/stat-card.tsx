import { Card, CardContent } from "@/components/ui/card"
import { cn } from "@/lib/utils"

interface StatCardProps {
  value: string
  label: string
  sublabel: string
  className?: string
}

export function StatCard({ value, label, sublabel, className }: StatCardProps) {
  return (
    <Card className={cn("border-0 bg-blue-700 ring-0", className)}>
      <CardContent className="flex h-full flex-col justify-center gap-2 p-6">
        <p className="text-h1 text-white">{value}</p>
        <p className="text-tag text-gold-600">{label}</p>
        {sublabel && <p className="text-caption text-blue-100">{sublabel}</p>}
      </CardContent>
    </Card>
  )
}
