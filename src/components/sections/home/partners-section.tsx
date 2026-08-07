import type { PartnerNode } from "@/types/post"

export function PartnersSection({
  partners,
}: {
  partners?: Array<{ node?: PartnerNode | null }> | null
}) {
  const logos = partners
    ?.map((edge) => edge?.node)
    .filter((node): node is PartnerNode => Boolean(node))
    .map((node) => ({
      name: node.title ?? "Partner",
      src: node.featuredImage?.node?.sourceUrl ?? null,
    }))
    .filter((partner): partner is { name: string; src: string } => Boolean(partner.src)) ?? []

  return (
    <section className="bg-white py-12 md:py-16 border-y border-gray-100">
      <div className="container-page flex flex-col items-center gap-6 md:gap-8 text-center">
        <p className="text-caption font-bold uppercase tracking-widest text-gray-400">
          Trusted by and partnered with
        </p>
        <div className="grid grid-cols-2 items-center justify-items-center gap-6 w-full max-w-3xl sm:flex sm:flex-wrap sm:justify-center sm:gap-12 md:gap-16">
          {logos.map((partner, index) => (
            <div key={`${partner.name}-${index}`} className="flex h-14 w-full items-center justify-center rounded-xl border border-gray-200 p-2 sm:h-20 sm:w-auto sm:px-6">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={partner.src}
                alt={partner.name}
                className="max-h-10 sm:max-h-14 md:max-h-16 w-auto max-w-[130px] sm:max-w-none object-contain opacity-80 hover:opacity-100 transition-opacity"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
