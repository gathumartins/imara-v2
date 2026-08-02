import Image from "next/image"
import Link from "next/link"

import { Button } from "@/components/ui/button"
import { MissionShape } from "@/components/shared/mission-shape"

const GAINS = [
  "Leadership and policy training through the Residential Academy",
  "Mentorship from senior practitioners in government, civil society & academia",
  "Real-world community engagement through Collaboration Clinics",
  "A strong professional network and lifelong alumni community",
  "Platforms for public writing and thought leadership",
]

const ELIGIBILITY = [
  "Be aged 18–35",
  "Show interest or experience in public policy, governance, or civic leadership",
  "Commit to the scheduled fellowship activities throughout the year",
]

export function MissionSection() {
  return (
    <section className="relative overflow-hidden bg-gold-100 py-20 md:py-24">
      <MissionShape
        className="pointer-events-none absolute"
        style={{
          bottom: "-40px",
          right: "-80%",
          width: "160%",
          height: "auto",
        }}
      />

      <div className="container-page relative z-10 grid grid-cols-1 items-start gap-14 lg:grid-cols-2">
        <div className="relative">
          {/* Decorative gradient block, top-left — bleeds out from behind the photo */}
          <div
            aria-hidden
            className="absolute -left-6 -top-6 h-64 w-64 rounded-[24px] bg-gradient-to-br from-gold-600/15 to-success/10"
          />
          {/* Decorative outline block, bottom-right — bleeds out from behind the photo */}
          <div
            aria-hidden
            className="absolute -bottom-4 -right-4 h-40 w-40 rounded-[16px] border-2 border-gold-500/25"
          />

          <div className="relative flex aspect-[4/5] w-full flex-col justify-end overflow-hidden rounded-[24px] shadow-xl">
            <Image
              src="/cohort5-mission.webp"
              alt="Imara Fellowship Cohort 5 fellows in session"
              fill
              sizes="(min-width: 1024px) 40vw, 90vw"
              className="object-cover"
            />
            <div className="relative z-10 m-4 flex flex-col gap-3 rounded-lg bg-white/95 p-5 shadow-lg sm:m-6">
              <p className="text-body-s text-navy-900">
                &ldquo;The Imara Fellowship transformed how I think about
                policy — and gave me the network to actually make change
                happen.&rdquo;
              </p>
              <div className="flex items-center gap-3">
                <span className="flex size-9 shrink-0 items-center justify-center rounded-full bg-gold-600 text-ui-bold text-navy-900">
                  AK
                </span>
                <div>
                  <p className="text-ui-medium font-bold text-navy-900">
                    Amina Kamau
                  </p>
                  <p className="text-caption text-gray-500">
                    Cohort 5 · Policy Advisor, AU
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-6">
          <h2>
            Imara Africa Fellowship -{" "}
            <span className="text-blue-700">Cohort 5</span>
          </h2>
          <p className="text-body text-gray-600">
            The Imara Africa Fellowship is a transformative leadership
            development programme for young Kenyans aged 18–35 who are
            passionate about governance, policy, and civic leadership.
            Through a blend of intensive training, mentorship, and
            experiential learning, the fellowship prepares emerging leaders
            for meaningful roles in public service and community
            transformation.
          </p>

          <div className="flex flex-col gap-3">
            <h4 className="text-ui-bold text-navy-900">
              What You Will Gain
            </h4>
            <ol className="flex flex-col gap-2">
              {GAINS.map((gain, i) => (
                <li key={gain} className="flex gap-3 text-body-s text-gray-600">
                  <span className="shrink-0 text-ui-medium text-blue-700">
                    {i + 1}.
                  </span>
                  {gain}
                </li>
              ))}
            </ol>
          </div>

          <div className="flex flex-col gap-3">
            <h4 className="text-ui-bold text-navy-900">Eligibility</h4>
            <p className="text-body-s text-gray-600">Applicants must:</p>
            <ol className="flex flex-col gap-2">
              {ELIGIBILITY.map((item, i) => (
                <li key={item} className="flex gap-3 text-body-s text-gray-600">
                  <span className="shrink-0 text-ui-medium text-blue-700">
                    {i + 1}.
                  </span>
                  {item}
                </li>
              ))}
            </ol>
            <p className="text-body-s text-gray-600">
              Women, persons with disabilities, and applicants from
              marginalized communities are strongly encouraged to apply.
            </p>
          </div>

          <div>
            <Button asChild size="md">
              <a href="#" target="_blank" rel="noopener noreferrer">Apply Now</a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
