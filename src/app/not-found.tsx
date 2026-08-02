import Link from "next/link"
import { ArrowLeft, Home } from "lucide-react"

import { Button } from "@/components/ui/button"

export default function NotFound() {
  return (
    <div className="container-page flex flex-col items-center gap-6 bg-gray-100 py-32 text-center">
      <p className="text-display text-blue-700">
        404
      </p>
      <h1 className="text-h2">Page Not Found</h1>
      <p className="max-w-lg text-body text-gray-500">
        The page you&apos;re looking for doesn&apos;t exist or may have
        been moved. Let&apos;s get you back on track.
      </p>
      <div className="mt-4 flex flex-col items-center gap-4 sm:flex-row">
        <Button asChild size="md">
          <Link href="/">
            <Home className="size-4" />
            Back to Home
          </Link>
        </Button>
        <Button asChild variant="outline" size="md">
          <Link href="/contacts">
            <ArrowLeft className="size-4" />
            Contact Us
          </Link>
        </Button>
      </div>
    </div>
  )
}
