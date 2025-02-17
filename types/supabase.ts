export type Database = {
  public: {
    Tables: {
      products: {
        Row: {
          id: string
          name: string
          slug: string
          description: string
          price: number
          monthly_bill: string
          image: string
          benefits: string
          why_it_works: string
          savings: string
          ideal_for: string
          features: string
          category: string
          status: string
          specifications: string
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          name: string
          slug: string
          description: string
          price: number
          monthly_bill: string
          image: string
          benefits: string
          why_it_works: string
          savings: string
          ideal_for: string
          features: string
          category: string
          status?: string
          specifications: string
          created_at?: string
          updated_at?: string
        }
        Update: Partial<Database['public']['Tables']['products']['Insert']>
      }
    }
  }
} 