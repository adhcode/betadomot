interface PageHeaderProps {
    title: string
    description?: string
    children?: React.ReactNode
}

export function PageHeader({
    title,
    description,
    children,
}: PageHeaderProps) {
    return (
        <div className="flex flex-col items-center justify-center text-center px-4 py-12 md:py-16">
            <h1 className="text-3xl font-bold leading-tight tracking-tighter md:text-5xl lg:text-6xl lg:leading-[1.1]">
                {title}
            </h1>
            {description && (
                <p className="max-w-[750px] text-lg text-muted-foreground sm:text-xl mt-4">
                    {description}
                </p>
            )}
            {children}
        </div>
    )
} 