/**
 * Decorative palm-frond background graphic used behind the Mission /
 * Cohort section. Sourced from the Figma export (public/shape.svg),
 * inlined as a component so its color/opacity can be themed via CSS.
 */
export function MissionShape({
  className,
  style,
}: {
  className?: string
  style?: React.CSSProperties
}) {
  return (
    <svg
      aria-hidden="true"
      className={className}
      style={style}
      viewBox="0 0 1617 886"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M725.029 825.481L754.869 855.337L841.163 886L1323.44 748.823L841.163 845.654L1031.49 789.976L1617 555.162L986.33 789.976L1020.2 760.12L1584.74 385.709L1031.49 730.264L1020.2 702.829L1475.87 271.933L998.427 688.304L933.102 760.12L1363.76 155.736L904.875 748.823L915.359 717.353L1227.47 67.7814L897.616 702.829L904.875 688.304L1077.46 0L876.648 680.235L850.84 674.587L892.777 166.226L841.163 668.131H827.452L805.677 215.448V670.552L794.387 677.814L623.412 79.0783L770.192 680.235L765.353 693.953L470.987 115.39L745.997 708.477V717.353L328.239 181.557L723.416 717.353H708.093L208.879 263.056L708.093 748.823H680.672L111.295 387.322L692.77 789.976L563.732 730.264L0 516.43L543.57 748.823L625.025 820.639L588.733 845.654L654.865 835.164H698.415L725.029 825.481Z"
        fill="var(--imara-gold-600)"
        fillOpacity="0.06"
      />
    </svg>
  )
}
