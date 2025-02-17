import { Toaster } from 'sonner'

export const metadata = {
    title: "Admin Portal - Safirox",
    description: "Admin portal for managing Safirox content",
}

export default function AdminLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return children
} 