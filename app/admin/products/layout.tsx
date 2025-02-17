'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import { supabase } from '@/lib/supabase'

export default function AdminLayout({
    children,
}: {
    children: React.ReactNode
}) {
    const router = useRouter()
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const checkAuth = async () => {
            const { data: { session } } = await supabase.auth.getSession()
            if (!session) {
                router.replace('/admin/products')
            } else {
                setLoading(false)
            }
        }
        checkAuth()
    }, [router])

    if (loading) {
        return <div>Loading...</div>
    }

    return <>{children}</>
} 