import { cn } from "../../../lib/utils"

interface LoadingSpinnerProps {
    className?: string
    size?: "sm" | "md" | "lg"
}

export function LoadingSpinner({ className, size = "md" }: LoadingSpinnerProps) {
    const sizeClasses = {
        sm: "h-4 w-4 border-2",
        md: "h-6 w-6 border-2",
        lg: "h-8 w-8 border-3"
    }

    return (
        <div
            className={cn(
                "animate-spin rounded-full border-t-transparent border-[#E4A853]",
                sizeClasses[size],
                className
            )}
            role="status"
            aria-label="loading"
        >
            <span className="sr-only">Loading...</span>
        </div>
    )
} 