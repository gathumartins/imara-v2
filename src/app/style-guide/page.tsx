import {
  Award,
  Calendar,
  ChevronRight,
  Globe,
  Mail,
  MapPin,
  Sparkles,
  Users,
} from "lucide-react"

import { Button } from "@/components/ui/button"
import { FeatureCard } from "@/components/shared/feature-card"
import { StatCard } from "@/components/shared/stat-card"
import { TestimonialCard } from "@/components/shared/testimonial-card"

const COLOR_GROUPS = [
  {
    title: "Primary Blues",
    swatches: [
      { name: "Navy 900", value: "#0A1628", className: "bg-navy-900" },
      { name: "Navy 800", value: "#0D1F3C", className: "bg-navy-800" },
      { name: "Blue 700", value: "#1D4C94", className: "bg-blue-700" },
      { name: "Blue 500", value: "#3372C4", className: "bg-blue-500" },
      { name: "Blue 300", value: "#7996C1", className: "bg-blue-300" },
      { name: "Blue 100", value: "#EBF0FB", className: "bg-blue-100" },
    ],
  },
  {
    title: "Gold Accent",
    swatches: [
      { name: "Gold 700", value: "#CC9A34", className: "bg-gold-700" },
      { name: "Gold 600", value: "#B39B47", className: "bg-gold-600" },
      { name: "Gold 500", value: "#9B8340", className: "bg-gold-500" },
      { name: "Gold 100", value: "#F7F1DC", className: "bg-gold-100" },
    ],
  },
  {
    title: "Neutrals",
    swatches: [
      { name: "Gray 700", value: "#374151", className: "bg-gray-700" },
      { name: "Gray 600", value: "#4B5563", className: "bg-gray-600" },
      { name: "Gray 500", value: "#6B7280", className: "bg-gray-500" },
      { name: "Gray 400", value: "#9CA3AF", className: "bg-gray-400" },
      { name: "Gray 300", value: "#D9D9D9", className: "bg-gray-300" },
      { name: "Gray 200", value: "#E5E7EB", className: "bg-gray-200" },
      { name: "Gray 100", value: "#F8F9FC", className: "bg-gray-100" },
      { name: "White", value: "#FFFFFF", className: "bg-white border border-gray-200" },
    ],
  },
  {
    title: "Semantic",
    swatches: [
      { name: "Alert / CTA", value: "#E8532A", className: "bg-alert" },
      { name: "Success", value: "#2A7B6E", className: "bg-success" },
    ],
  },
]

const TYPE_SCALE = [
  { label: "Display", spec: "Playfair Display ExtraBold · 84px", className: "text-display", sample: "Shaping Africa's Future" },
  { label: "H1", spec: "Playfair Display Bold · 48px", className: "text-h1", sample: "Building the Architects of Africa" },
  { label: "H2", spec: "Playfair Display Bold · 40px", className: "text-h2", sample: "Our Impact in Numbers" },
  { label: "H3", spec: "Playfair Display Medium · 30px", className: "text-h3", sample: "Be Part of This Legacy" },
  { label: "Body L", spec: "Quicksand Regular · 19px", className: "text-body-l", sample: "A transformative fellowship for Africa's next generation." },
  { label: "Body", spec: "Quicksand Regular · 16px", className: "text-body", sample: "The Imara Fellowship is a rigorous year-long program for African policy leaders." },
  { label: "Body S", spec: "Quicksand Regular · 14px", className: "text-body-s", sample: "Fellows Trained · Cohort 5 · Policy Advisor, AU" },
  { label: "Caption", spec: "Quicksand Regular · 12px", className: "text-caption", sample: "Trusted by and partnered with leading institutions." },
  { label: "UI Bold", spec: "Space Grotesk Bold · 16px", className: "text-ui-bold", sample: "Apply for Cohort 9" },
  { label: "UI Medium", spec: "Space Grotesk Medium · 14px", className: "text-ui-medium", sample: "Explore the Program" },
  { label: "Tag / Label", spec: "Figtree Bold · 11px", className: "text-tag text-gold-700", sample: "Our Mission" },
]

const ICONS = [Globe, Users, Award, Calendar, Mail, MapPin, Sparkles, ChevronRight]

export default function Home() {
  return (
    <main className="flex flex-1 flex-col bg-gray-100 py-20">
      <div className="container-page flex flex-col gap-24">
        {/* Colors */}
        <section id="colors">
          <p className="text-tag text-gold-700">Colors</p>
          <h2 className="mt-2 mb-8">Color Palette</h2>
          <div className="flex flex-col gap-10">
            {COLOR_GROUPS.map((group) => (
              <div key={group.title}>
                <p className="text-body-s mb-3 text-gray-500">{group.title}</p>
                <div className="flex flex-wrap gap-6">
                  {group.swatches.map((swatch) => (
                    <div key={swatch.name} className="w-32">
                      <div className={`h-20 w-32 rounded-lg ${swatch.className}`} />
                      <p className="text-ui-medium mt-2 text-navy-900">{swatch.name}</p>
                      <p className="text-caption text-gray-500">{swatch.value}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Typography */}
        <section id="typography" className="rounded-2xl bg-gold-100 p-10">
          <p className="text-tag text-gold-700">Typography</p>
          <h2 className="mt-2 mb-8">Type System</h2>
          <div className="flex flex-col">
            {TYPE_SCALE.map((row) => (
              <div
                key={row.label}
                className="grid grid-cols-[100px_220px_1fr] items-center gap-6 border-b border-gray-200 py-5 last:border-0"
              >
                <p className="text-body-s text-gray-500">{row.label}</p>
                <p className="text-caption text-gray-400">{row.spec}</p>
                <p className={row.className}>{row.sample}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Buttons */}
        <section id="buttons">
          <p className="text-tag text-gold-700">Components</p>
          <h2 className="mt-2 mb-8">Button System</h2>

          <p className="text-body-s mb-3 text-gray-500">Style Variants</p>
          <div className="mb-2 flex flex-wrap items-center gap-4">
            <Button variant="primary">Apply for Cohort 9</Button>
            <Button variant="navy">Apply for Cohort 9</Button>
            <Button variant="gold">Explore Program</Button>
            <Button variant="outline">Learn More</Button>
            <Button variant="alert">Get Started</Button>
          </div>
          <div className="mb-10 flex flex-wrap gap-4 text-caption text-gray-500">
            <span className="w-[168px]">Primary</span>
            <span className="w-[168px]">Navy</span>
            <span className="w-[168px]">Gold</span>
            <span className="w-[168px]">Outlined</span>
            <span className="w-[168px]">Alert</span>
          </div>

          <p className="text-body-s mb-3 text-gray-500">Size Variants</p>
          <div className="mb-2 flex flex-wrap items-center gap-4">
            <Button size="lg">Apply for Cohort 9</Button>
            <Button size="md">Apply Now</Button>
            <Button size="sm">Apply</Button>
          </div>
          <div className="flex flex-wrap gap-4 text-caption text-gray-500">
            <span className="w-[220px]">Large</span>
            <span className="w-[170px]">Medium</span>
            <span className="w-[100px]">Small</span>
          </div>
        </section>

        {/* Cards */}
        <section id="cards">
          <p className="text-tag text-gold-700">Cards</p>
          <h2 className="mt-2 mb-8">Card Patterns</h2>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            <TestimonialCard
              quote="The Imara Fellowship transformed how I approach policy work in Africa."
              name="Amara K."
              role="Cohort 5 · Policy Advisor, AU"
            />
            <StatCard value="500+" label="Fellows Trained" sublabel="Across 12 African countries" />
            <FeatureCard
              badge="Policy"
              title="Policy Masterclasses"
              description="Rigorous, evidence-based training for Africa's next policy generation."
              href="#"
            />
          </div>
        </section>

        {/* Icons */}
        <section id="icons">
          <p className="text-tag text-gold-700">Icons</p>
          <h2 className="mt-2 mb-8">Icon Set (lucide-react)</h2>
          <div className="flex flex-wrap gap-6">
            {ICONS.map((Icon, i) => (
              <div
                key={i}
                className="flex size-14 items-center justify-center rounded-xl bg-white text-blue-700 ring-1 ring-gray-200"
              >
                <Icon className="size-6" />
              </div>
            ))}
          </div>
        </section>
      </div>
    </main>
  )
}
