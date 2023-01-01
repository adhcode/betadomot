export type UserRole = 'admin' | 'customer' | 'guest'

export interface UserProfile {
    id: string
    email: string
    role: UserRole
    full_name?: string
    phone?: string
    shipping_address?: {
        street: string
        city: string
        state: string
        postal_code: string
    }
    created_at: string
} 