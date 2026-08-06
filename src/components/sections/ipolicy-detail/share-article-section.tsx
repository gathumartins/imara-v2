import { Share2 } from "lucide-react"

import { TwitterIcon, LinkedinIcon, FacebookIcon } from "@/components/ui/icons"

export function ShareArticleSection(url: {url: string}) {
  return (
    <div className="mt-8 flex items-center gap-4 border-t border-gray-100 pt-8">
      <span className="flex items-center gap-2 text-ui-medium text-navy-900">
        <Share2 className="size-4" />
        Share this article
      </span>
      <div className="flex items-center gap-2">
        <a
          href={`https://twitter.com/intent/tweet?text=Check out this article:&url=${encodeURIComponent(url.url)}`}
          aria-label="Share on Twitter"
          className="flex size-9 items-center justify-center rounded-full bg-blue-100 text-blue-700 transition-colors hover:bg-blue-700 hover:text-white"
        target="_blank" rel="noopener noreferrer">
          <TwitterIcon className="size-4" />
        </a>
        <a
          href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url.url)}`}
          aria-label="Share on LinkedIn"
          className="flex size-9 items-center justify-center rounded-full bg-blue-100 text-blue-700 transition-colors hover:bg-blue-700 hover:text-white"
        target="_blank" rel="noopener noreferrer">
          <LinkedinIcon className="size-4" />
        </a>
        <a
          href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url.url)}`}
          aria-label="Share on Facebook"
          className="flex size-9 items-center justify-center rounded-full bg-blue-100 text-blue-700 transition-colors hover:bg-blue-700 hover:text-white"
        target="_blank" rel="noopener noreferrer">
          <FacebookIcon className="size-4" />
        </a>
      </div>
    </div>
  )
}
