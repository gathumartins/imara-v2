import { MapPin } from "lucide-react"

export function MapSection() {
  return (
    <section className="bg-gold-100">
      <div
        className="relative h-72 w-full overflow-hidden md:h-80"
        style={{
          backgroundImage:
            "linear-gradient(var(--imara-gray-300) 1px, transparent 1px), linear-gradient(90deg, var(--imara-gray-300) 1px, transparent 1px)",
          backgroundSize: "36px 36px",
          backgroundColor: "var(--imara-blue-100)",
        }}
      >
        <div className="absolute top-1/2 left-1/2 flex -translate-x-1/2 -translate-y-1/2 flex-col items-center gap-2">
          <div className="rounded-lg bg-white px-4 py-2 text-ui-medium text-navy-800 shadow-md">
            Imara Fellowship — Westlands, Nairobi
          </div>
          <span className="size-4 rounded-full border-2 border-white bg-alert shadow" />
        </div>
      </div>

      <div className="container-page flex flex-col gap-2 py-6 sm:flex-row sm:items-center sm:gap-3">
        <MapPin className="size-4 shrink-0 text-gray-500" />
        <p className="text-body-s text-gray-700">
          <span className="font-bold text-navy-900">4th Floor, Middle East Bank Towers</span>{" "}
          <span className="text-gray-500">— General Mathenge Road, Westlands, Nairobi</span>
        </p>
      </div>
    </section>
  )
}
