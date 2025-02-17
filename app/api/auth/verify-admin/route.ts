import { createRouteHandlerClient } from '@supabase/auth-helpers-nextjs'
import { cookies } from 'next/headers'
import { NextResponse } from 'next/server'

export async function GET() {
    const supabase = createRouteHandlerClient({ cookies })

    try {
        const { data: { session } } = await supabase.auth.getSession()
        
        if (!session) {
            return NextResponse.json({ error: 'No session' }, { status: 401 })
        }

        const { data: profile } = await supabase
            .from('profiles')
            .select('role')
            .eq('id', session.user.id)
            .single()

        if (!profile || profile.role !== 'admin') {
            return NextResponse.json({ error: 'Not admin' }, { status: 403 })
        }

        return NextResponse.json({ role: profile.role })
    } catch (error) {
        return NextResponse.json({ error: 'Server error' }, { status: 500 })
    }
} 