'use client'

import { useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { supabase } from '@/lib/supabase'
import { Button } from '@/components/ui/button'
import { LogOut } from 'lucide-react'

export function AdminLayout({ children }: { children: React.ReactNode }) {
    const router = useRouter()

    useEffect(() => {
        const checkSession = async () => {
            const { data: { session } } = await supabase.auth.getSession()
            if (!session) {
                router.replace('/admin/login')
            }
        }
        checkSession()
    }, [router])

    const handleSignOut = async () => {
        await supabase.auth.signOut()
        router.replace('/admin/login')
    }

    return (
        <div className="min-h-screen bg-gray-50">
            <header className="bg-white border-b">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center h-16">
                        <h1 className="text-xl font-semibold">Admin Dashboard</h1>
                        <Button
                            variant="ghost"
                            onClick={handleSignOut}
                            className="flex items-center gap-2"
                        >
                            <LogOut className="h-4 w-4" />
                            Sign Out
                        </Button>
                    </div>
                </div>
            </header>

            <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                {children}
            </main>
        </div>
    )
} 