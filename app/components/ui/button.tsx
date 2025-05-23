import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cn } from "../../../lib/utils"

const buttonVariants = {
    default: "bg-primary text-primary-foreground shadow hover:bg-primary/90",
    secondary: "bg-secondary text-secondary-foreground shadow hover:bg-secondary/90",
    outline: "border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground",
    ghost: "hover:bg-accent hover:text-accent-foreground",
    sizes: {
        default: "h-9 px-4 py-2",
        sm: "h-8 rounded-md px-3 text-xs",
        lg: "h-10 rounded-md px-8"
    }
}

export interface ButtonProps
    extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: keyof typeof buttonVariants
    size?: keyof typeof buttonVariants['sizes']
    asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
    ({ className, variant = "default", size = "default", asChild = false, ...props }, ref) => {
        const Comp = asChild ? Slot : "button"
        return (
            <Comp
                className={cn(
                    "inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50",
                    buttonVariants[variant],
                    buttonVariants.sizes[size],
                    className
                )}
                ref={ref}
                {...props}
            />
        )
    }
)
Button.displayName = "Button"

export { Button, buttonVariants } 