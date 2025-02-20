import React from 'react'
import { colors, spacing } from "@/lib/styles"

export const sectionHeader = (title: string, subtitle: string, color: "light" | "dark" = "dark") => {
    return (
        <div className={spacing.sectionHead}>
            <span className={`text-sm font-medium text-[${colors.primary}]`}>
                {subtitle}
            </span>
            <h2 className={`text-3xl sm:text-4xl font-bold mt-4 mb-6 text-${color === "light" ? "white" : colors.dark}`}>
                {title}
            </h2>
        </div>
    )
} 