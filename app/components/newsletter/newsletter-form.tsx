import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { LucideIcon } from "lucide-react"

interface NewsletterFormProps {
    title: string
    description: string
    benefits: {
        icon: LucideIcon
        title: string
        description: string
    }[]
}

export function NewsletterForm({ title, description, benefits }: NewsletterFormProps) {
    return (
        <div className="grid gap-8 lg:grid-cols-[1fr,1fr] items-start">
            <div>
                <h2 className="text-3xl font-bold text-white mb-4">{title}</h2>
                <p className="text-lg text-white/80 mb-8">{description}</p>
                <div className="grid gap-4 md:grid-cols-2">
                    {benefits.map((benefit, index) => {
                        const Icon = benefit.icon
                        return (
                            <div key={index} className="flex gap-3">
                                <Icon className="h-6 w-6 text-[#E4A853]" />
                                <div>
                                    <h3 className="font-medium text-white mb-1">{benefit.title}</h3>
                                    <p className="text-sm text-white/70">{benefit.description}</p>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8">
                <form className="grid gap-4">
                    <Input
                        type="email"
                        placeholder="Enter your email"
                        className="bg-white/10 border-white/20 text-white placeholder:text-white/50"
                    />
                    <Button className="bg-[#E4A853] hover:bg-[#E4A853]/90 text-black">
                        Subscribe Now
                    </Button>
                </form>
            </div>
        </div>
    )
} 