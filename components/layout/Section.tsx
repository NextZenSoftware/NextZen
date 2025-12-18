"use client"

import { cn } from "@/lib/utils"
import { motion, HTMLMotionProps } from "framer-motion"

interface SectionProps extends HTMLMotionProps<"section"> {
  children: React.ReactNode
  className?: string
  containerClassName?: string
  background?: "white" | "gray" | "dark" | "none"
}

export function Section({
  children,
  className,
  containerClassName,
  background = "white",
  ...props
}: SectionProps) {
  const bgStyles = {
    white: "bg-white",
    gray: "bg-slate-50",
    dark: "bg-slate-950",
    none: "bg-transparent",
  }

  return (
    <motion.section
      className={cn("py-16 md:py-24", bgStyles[background], className)}
      {...props}
    >
      <div className={cn("container-custom", containerClassName)}>
        {children}
      </div>
    </motion.section>
  )
}
