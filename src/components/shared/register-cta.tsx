import Link from "next/link"
import { ArrowRight, Mail } from "lucide-react"

import { Button } from "@/components/ui/button"

/**
 * Shared "Register for the next cohort" band used near the bottom of
 * every page, right before the footer: cohort CTA card + newsletter
 * signup. Fully self-contained — drop it in with no props.
 */
export function RegisterCta({ cohortLabel = "Cohort 9 — 2026" }: { cohortLabel?: string }) {
  return (
    <section className="bg-blue-100 py-20 md:py-24">
      <div className="container-page">
        <div className="overflow-hidden rounded-3xl bg-cta">
          <div className="grid grid-cols-1 gap-10 p-8 md:p-14 lg:grid-cols-2 lg:items-center">
            <div>
              <span className="inline-flex w-fit items-center gap-2 rounded-full bg-white/10 px-4 py-1.5 text-tag text-gold-700">
                <span className="size-1.5 rounded-full bg-success" />
                {cohortLabel}
              </span>
              <h2 className="mt-5 text-white">
                Excited to Join us? Register{" "}
                <span className="text-gold-700">for our next intake</span>
              </h2>
              <p className="mt-4 text-body text-blue-100">
                At Imara Fellowship, we nurture bold leaders driving governance
                and policy change. If you&apos;re passionate about leadership
                and impact, this is for you. Applications for our next cohort
                are now open!
              </p>
              <Button asChild variant="gold" size="md" className="mt-8">
                <a href="#" target="_blank" rel="noopener noreferrer" className="flex w-fit items-center gap-2">
                  Register for Fellowship
                  <ArrowRight className="size-4" />
                </a>
              </Button>
            </div>

            <div className="rounded-2xl bg-white/5 p-8 ring-1 ring-white/10">
              <h3 className="text-white">Subscribe to Our Newsletter</h3>
              <p className="mt-2 text-body-s text-blue-100">
                Get fellowship updates, policy insights, and alumni stories
                delivered to your inbox.
              </p>
              <form className="mt-6 flex flex-col gap-3">
                <div className="flex items-center gap-2 rounded-full bg-white/10 px-4 py-3">
                  <Mail className="size-4 text-blue-100" />
                  <input
                    type="email"
                    required
                    name="email"
                    placeholder="Your email address"
                    aria-label="Email address"
                    className="w-full bg-transparent text-body-s text-white placeholder:text-blue-300 focus:outline-none"
                  />
                </div>
                <Button type="submit" variant="white" className="w-full">
                  Subscribe
                </Button>
              </form>
              <p className="mt-4 text-caption text-blue-300">
                No spam. Unsubscribe any time. We send 1-2 newsletters per
                month.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
