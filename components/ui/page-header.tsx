interface PageHeaderProps {
    title: string
    description: string
}

export function PageHeader({ title, description }: PageHeaderProps) {
    return (
        <section className="py-20 px-4 bg-[#003366]">
            <div className="max-w-7xl mx-auto text-center text-white">
                <h1 className="text-4xl md:text-5xl font-bold mb-6">
                    {title}
                </h1>
                <p className="text-xl text-white/80 max-w-3xl mx-auto">
                    {description}
                </p>
            </div>
        </section>
    )
} 