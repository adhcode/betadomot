'use client'

import { useState } from 'react'
import { useCart } from '../../hooks/use-cart'
import { handleGuestCheckout } from '../../lib/checkout'
import { Button } from '../../components/ui/button'
import { Input } from '../../components/ui/input'
import { toast } from 'sonner'
import type { CartItem } from '../../hooks/use-cart'

export function GuestCheckoutForm() {
    const { cart, clearCart } = useCart()
    const [loading, setLoading] = useState(false)
    const [email, setEmail] = useState('')

    async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault()
        setLoading(true)

        try {
            const formData = new FormData(e.currentTarget)
            const checkoutData = {
                email: email || undefined,
                shipping_address: {
                    name: formData.get('name') as string,
                    street: formData.get('street') as string,
                    city: formData.get('city') as string,
                    state: formData.get('state') as string,
                    postal_code: formData.get('postal_code') as string,
                    phone: formData.get('phone') as string
                },
                items: cart
            }

            const result = await handleGuestCheckout(checkoutData)

            if (result.success) {
                clearCart()
                toast.success('Order placed successfully!')

                // If email was provided, show account creation prompt
                if (result.createAccountUrl) {
                    // Show modal or redirect to sign up
                }
            }
        } catch (error) {
            toast.error('Failed to place order')
            console.error(error)
        } finally {
            setLoading(false)
        }
    }

    return (
        <form onSubmit={onSubmit} className="space-y-6">
            <div className="space-y-4">
                <Input
                    type="email"
                    placeholder="Email (optional)"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                {/* Add other address fields */}
            </div>

            <Button
                type="submit"
                className="w-full"
                disabled={loading}
            >
                {loading ? "Processing..." : "Place Order"}
            </Button>
        </form>
    )
} 