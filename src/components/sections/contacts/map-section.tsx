import { MapPin } from "lucide-react"

import type { MapLocationField } from "@/types/post"

export function MapSection({
  location,
  address,
}: {
  location?: MapLocationField | null
  address?: string | null
}) {
  const lat = location?.center?.lat
  const lng = location?.center?.lng
  const zoom = location?.zoom ?? 15
  const height = location?.height ?? 320

  const mapSrc =
    lat != null && lng != null
      ? `https://www.google.com/maps?q=${lat},${lng}&z=${zoom}&output=embed`
      : null

  return (
    <section className="bg-gold-100">
      <div className="relative w-full overflow-hidden" style={{ height }}>
        {mapSrc ? (
          <iframe
            src={mapSrc}
            className="absolute inset-0 size-full border-0"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Imara Fellowship location"
          />
        ) : (
          <div
            className="flex size-full items-center justify-center"
            style={{
              backgroundImage:
                "linear-gradient(var(--imara-gray-300) 1px, transparent 1px), linear-gradient(90deg, var(--imara-gray-300) 1px, transparent 1px)",
              backgroundSize: "36px 36px",
              backgroundColor: "var(--imara-blue-100)",
            }}
          >
            <div className="flex flex-col items-center gap-2">
              <div className="rounded-lg bg-white px-4 py-2 text-ui-medium text-navy-800 shadow-md">
                Imara Fellowship
              </div>
              <span className="size-4 rounded-full border-2 border-white bg-alert shadow" />
            </div>
          </div>
        )}
      </div>

      {address && (
        <div className="container-page flex flex-col gap-2 py-6 sm:flex-row sm:items-center sm:gap-3">
          <MapPin className="size-4 shrink-0 text-gray-500" />
          <p className="text-body-s text-gray-700">{address}</p>
        </div>
      )}
    </section>
  )
}
