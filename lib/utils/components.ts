import { colors, spacing } from "@/lib/styles"

export const sectionHeader = (title: string, subtitle: string, color: "light" | "dark" = "dark") => {
  const textColor = color === "light" ? "text-white" : `text-[${colors.dark}]`
  return `
    <div class="${spacing.sectionHead}">
      <span class="text-sm font-medium text-[${colors.primary}]">${subtitle}</span>
      <h2 class="text-3xl sm:text-4xl font-bold mt-4 mb-6 ${textColor}">${title}</h2>
    </div>
  `
}

export const aspectRatios = {
  square: "aspect-square",
  video: "aspect-video",
  portrait: "aspect-[3/4]",
  landscape: "aspect-[4/3]",
  wide: "aspect-[16/9]"
}

export const gridLayouts = {
  two: "grid md:grid-cols-2 gap-8 md:gap-12",
  three: "grid md:grid-cols-3 gap-8 md:gap-12",
  four: "grid md:grid-cols-2 lg:grid-cols-4 gap-8"
} 