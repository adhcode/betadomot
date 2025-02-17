'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import { supabase } from '@/lib/supabase'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Card } from '@/components/ui/card'
import { Alert, AlertDescription } from '@/components/ui/alert'
import { Lock, Mail, KeyRound, Loader2 } from 'lucide-react'
import Image from 'next/image'

export default function AdminLoginPage() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState<string | null>(null)
    const router = useRouter()

    // Check if already authenticated
    useEffect(() => {
        const checkSession = async () => {
            const { data: { session } } = await supabase.auth.getSession()
            if (session) {
                const { data: profile } = await supabase
                    .from('profiles')
                    .select('role')
                    .eq('id', session.user.id)
                    .single()

                if (profile?.role === 'admin') {
                    router.replace('/admin/products')
                }
            }
        }
        checkSession()
    }, [router])

    const handleLogin = async (e: React.FormEvent) => {
        e.preventDefault()
        setLoading(true)
        setError(null)

        try {
            // First sign in
            const { data, error: signInError } = await supabase.auth.signInWithPassword({
                email,
                password,
            })

            if (signInError) throw signInError

            // Check if we have a user
            if (!data?.user) {
                throw new Error('No user data received')
            }

            // Check admin role directly
            const { data: profile, error: profileError } = await supabase
                .from('profiles')
                .select('role')
                .eq('id', data.user.id)
                .single()

            if (profileError) throw profileError

            if (!profile || profile.role !== 'admin') {
                throw new Error('Access denied. Admin privileges required.')
            }

            // If we get here, user is authenticated and is admin
            window.location.href = '/admin/products'

        } catch (error) {
            console.error('Login error:', error)
            setError(error instanceof Error ? error.message : 'Login failed')
            await supabase.auth.signOut()
            setLoading(false)
        }
    }

    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-gray-50 to-white px-4">
            <div className="w-full max-w-md space-y-8">
                <div className="flex flex-col items-center">
                    <div className="mb-6">
                        <Image
                            src="/logo.png"
                            alt="Logo"
                            width={120}
                            height={40}
                            className="h-auto w-auto"
                        />
                    </div>
                    <div className="bg-[#003366] h-14 w-14 rounded-2xl flex items-center justify-center shadow-lg mb-6 transform rotate-45">
                        <Lock className="h-7 w-7 text-white transform -rotate-45" />
                    </div>
                    <h2 className="mt-2 text-center text-3xl font-bold tracking-tight text-gray-900">
                        Admin Portal
                    </h2>
                    <p className="mt-2 text-center text-sm text-gray-600">
                        Sign in to manage products and content
                    </p>
                </div>

                <Card className="p-6 shadow-xl border-0 ring-1 ring-gray-200">
                    <form className="space-y-6" onSubmit={handleLogin}>
                        {error && (
                            <Alert variant="destructive" className="animate-shake">
                                <AlertDescription>{error}</AlertDescription>
                            </Alert>
                        )}

                        <div className="space-y-4">
                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                                    Email address
                                </label>
                                <div className="mt-1 relative">
                                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                        <Mail className="h-5 w-5 text-gray-400" />
                                    </div>
                                    <Input
                                        id="email"
                                        type="email"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        required
                                        className="pl-10"
                                        placeholder="admin@example.com"
                                    />
                                </div>
                            </div>

                            <div>
                                <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                                    Password
                                </label>
                                <div className="mt-1 relative">
                                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                        <KeyRound className="h-5 w-5 text-gray-400" />
                                    </div>
                                    <Input
                                        id="password"
                                        type="password"
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                        required
                                        className="pl-10"
                                        placeholder="••••••••"
                                    />
                                </div>
                            </div>
                        </div>

                        <Button
                            type="submit"
                            className="w-full bg-[#003366] hover:bg-[#002244] text-white py-6 transition-all duration-200 shadow-lg hover:shadow-xl"
                            disabled={loading}
                        >
                            {loading ? (
                                <>
                                    <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                                    Signing in...
                                </>
                            ) : (
                                'Sign in'
                            )}
                        </Button>
                    </form>
                </Card>

                <p className="mt-6 text-center text-sm text-gray-600">
                    Need help?{' '}
                    <a href="mailto:support@example.com" className="font-medium text-[#003366] hover:text-[#002244]">
                        Contact support
                    </a>
                </p>
            </div>
        </div>
    )
} 