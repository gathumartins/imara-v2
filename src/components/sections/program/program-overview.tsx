import Image from "next/image"

function ProgramOverview({
  title,
  content,
  image,
}: {
  title?: string | null
  content?: string | null
  image?: { src?: string | null; alt?: string | null; width?: number | null; height?: number | null } | null
}) {
  const imageSrc = image?.src ?? null
  const imageAlt = image?.alt ?? title ?? "Programme overview"

  return (
    <section className="bg-white py-10 md:py-14">
      <div className="container-page grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-14">
        <div className="flex flex-col gap-4">
          <h2 className="text-h3 text-blue-700" style={{ fontFamily: "var(--font-quicksand)" }}>
            {title ?? "Programme Overview"}
          </h2>
          <div
            className="text-body-s text-gray-500"
            dangerouslySetInnerHTML={{ __html: content ?? "" }}
          />
        </div>

        {imageSrc && (
          <Image
            src={imageSrc}
            alt={imageAlt}
            width={image?.width ?? 800}
            height={image?.height ?? 600}
            sizes="(min-width: 1024px) 40vw, 90vw"
            className="h-auto w-full rounded-[24px] object-cover shadow-xl"
          />
        )}
      </div>
    </section>
  )
}

export default ProgramOverview
