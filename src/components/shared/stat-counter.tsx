/**
 * Pure-CSS count-up number — no useState/useEffect. The animated value
 * comes from the `.stat-counter` keyframe + CSS counter defined in
 * globals.css; this component just wires the target value in via a
 * CSS custom property.
 */
export function StatCounter({
  to,
  suffix = "",
  className,
}: {
  to: number
  suffix?: string
  className?: string
}) {
  return (
    <span className={className}>
      <span
        className="stat-counter"
        style={{ "--to": to } as React.CSSProperties}
      />
      {suffix}
    </span>
  )
}
