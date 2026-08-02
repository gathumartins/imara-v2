import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

import { Button } from "@/components/ui/button"

export function AboutSection() {
  return (
    <section className="bg-gold-100 py-20 md:py-24">
      <div className="container-page grid grid-cols-1 items-center gap-14 lg:grid-cols-2">
        <div className="flex flex-col gap-6">
          <div className="flex items-center gap-3">
            <span className="h-0.5 w-5 bg-gold-600" />
            <p className="text-tag text-blue-700">About Us</p>
          </div>
          <h2>
            A new generation of <br />
            <span className="text-blue-700">African leaders</span>
          </h2>
          <p className="text-body text-gray-500">
            Imara Fellowship&rsquo;s comprehensive approach to leadership
            development aims to create a new generation of African leaders
            who are not only well-versed in the theories of governance but
            are also equipped with practical experience and the confidence
            to engage in policy and community development. Through a blend
            of immersive training, flexible learning, real-world
            application, expert interaction, and scholarly publication, the
            fellowship cultivates leaders who are prepared to address
            Africa&rsquo;s most pressing challenges.
          </p>
          <div>
            <Button asChild variant="primary" size="md">
              <Link href="/about" className="flex items-center gap-2">
                Read More
                <ArrowRight className="size-4" />
              </Link>
            </Button>
          </div>
        </div>

        <div className="relative">
          <div className="relative aspect-[9/10] w-full overflow-hidden rounded-[32px] shadow-xl">
            <Image
              src="/about-imara-fellows.webp"
              alt="A group of Imara Fellowship fellows and alumni"
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
              <p className="text-h3 text-navy-900">500+</p>
              <p className="text-caption text-gray-400 font-medium tracking-wide">Fellows Trained</p>
            </div>
          </div>
          {/* Bottom Right Badge */}
          <div className="absolute -bottom-6 -right-4 flex items-center gap-4 rounded-[8px] bg-white px-5 py-4 shadow-xl sm:-right-8 lg:-right-10">
            <span className="flex size-10 items-center justify-center rounded-full bg-success/10 text-lg">
              🌍
            </span>
            <div className="flex flex-col text-left">
              <p className="text-h3 text-blue-700">32</p>
              <p className="text-caption text-gray-400 font-medium tracking-wide">
                African Countries
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
