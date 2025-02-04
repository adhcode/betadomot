'use client'

import { ArrowUp } from 'lucide-react'

export function ScrollToTopButton() {
    return (
        <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="fixed bottom-8 right-8 p-4 bg-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 z-50 group"
        >
            <ArrowUp className="h-6 w-6 text-[#003366] group-hover:translate-y-[-2px] transition-transform" />
        </button>
    )
} 