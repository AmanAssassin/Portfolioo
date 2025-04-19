
import * as React from "react"
import { cn } from "@/lib/utils"

interface ButtonGlowProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string
  children: React.ReactNode
  variant?: "primary" | "secondary"
}

export function ButtonGlow({
  className,
  children,
  variant = "primary",
  ...props
}: ButtonGlowProps) {
  return (
    <button
      className={cn(
        "relative inline-flex items-center justify-center overflow-hidden rounded-md bg-background px-8 py-3 font-medium transition-all duration-300",
        variant === "primary" && "text-white hover:text-white", 
        variant === "secondary" && "border border-slate-800 text-slate-300 hover:text-black",
        className
      )}
      {...props}
    >
      {variant === "primary" && (
        <span className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-700 opacity-70 transition-all duration-300 hover:opacity-100" />
      )}
      <span className="relative z-10">{children}</span>
      <span className="absolute inset-0 -z-10 animate-pulse bg-gradient-to-r from-indigo-500 to-purple-700 opacity-0 blur-xl transition-all duration-300 group-hover:opacity-70" />
    </button>
  )
}
