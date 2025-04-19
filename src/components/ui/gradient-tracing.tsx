
import React from "react"

interface GradientTracingProps {
  width: number
  height: number
  baseColor?: string
  gradientColors?: [string, string, string]
  animationDuration?: number
  strokeWidth?: number
  path?: string
}

export const GradientTracing: React.FC<GradientTracingProps> = ({
  width,
  height,
  baseColor = "black",
  gradientColors = ["#2EB9DF", "#2EB9DF", "#9E00FF"],
  animationDuration = 2,
  strokeWidth = 2,
  path = `M0,${height / 2} L${width},${height / 2}`,
}) => {
  const gradientId = `pulse-${Math.random().toString(36).substr(2, 9)}`

  // Define animation keyframes in CSS
  const keyframesStyle = `
    @keyframes gradientMove-${gradientId} {
      0% {
        transform: translateX(-${width}px);
      }
      100% {
        transform: translateX(${width}px);
      }
    }
  `;

  return (
    <div className="relative" style={{ width, height }}>
      {/* Inject keyframes animation */}
      <style dangerouslySetInnerHTML={{ __html: keyframesStyle }} />
      
      <svg
        width={width}
        height={height}
        viewBox={`0 0 ${width} ${height}`}
        fill="none"
      >
        <path
          d={path}
          stroke={baseColor}
          strokeOpacity="0.2"
          strokeWidth={strokeWidth}
        />
        <path
          d={path}
          stroke={`url(#${gradientId})`}
          strokeLinecap="round"
          strokeWidth={strokeWidth}
        />
        <defs>
          <linearGradient
            id={gradientId}
            gradientUnits="userSpaceOnUse"
            style={{
              animation: `gradientMove-${gradientId} ${animationDuration}s linear infinite`
            }}
          >
            <stop stopColor={gradientColors[0]} stopOpacity="0" />
            <stop stopColor={gradientColors[1]} />
            <stop offset="1" stopColor={gradientColors[2]} stopOpacity="0" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  )
}
