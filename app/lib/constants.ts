import { colors, spacing } from "../../lib/styles"

// Layout spacing configuration
export const layoutSpacing = {
    container: {
        padding: {
            default: "px-4 md:px-6 lg:px-8",
            large: "px-6 sm:px-8 lg:px-12"
        },
        maxWidth: {
            default: "max-w-7xl",
            blog: "max-w-6xl"
        }
    },
    section: {
        padding: {
            default: "py-16 md:py-20",
            large: "py-20 md:py-24"
        }
    }
}

// Theme configuration
export const theme = {
    colors: {
        primary: "#E4A853",
        secondary: "#1A1A1A",
        accent: "#003366",
        background: {
            light: "#FFFFFF",
            dark: "#1A1A1A",
            muted: "#F9FAFB"
        },
        text: {
            primary: "#1A1A1A",
            secondary: "#4B5563",
            muted: "#6B7280"
        },
        border: {
            light: "#E5E7EB",
            dark: "#374151"
        }
    },
    typography: {
        fontFamily: {
            heading: "Ojuju",
            body: "var(--font-raleway)"
        },
        fontSize: {
            xs: "0.75rem",
            sm: "0.875rem",
            base: "1rem",
            lg: "1.125rem",
            xl: "1.25rem",
            "2xl": "1.5rem",
            "3xl": "1.875rem",
            "4xl": "2.25rem",
            "5xl": "3rem",
            "6xl": "3.75rem"
        }
    },
    borderRadius: {
        sm: "0.375rem",
        md: "0.5rem",
        lg: "0.75rem",
        xl: "1rem",
        "2xl": "1.5rem",
        full: "9999px"
    }
}

export const sectionHeader = (title: string, subtitle: string, color: "light" | "dark" = "dark") => {
  const textColor = color === "light" ? "text-white" : `text-[${colors.dark}]`
  // ... existing code ...
} 