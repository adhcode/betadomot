"use client"

import { Roboto_Mono } from "next/font/google"

const robotoMono = Roboto_Mono({
  subsets: ["latin"],
  variable: '--font-roboto-mono',
  weight: ['100', '300', '400', '500', '700'],
  display: 'swap',
})

export function FontProvider() {
  return (
    <style jsx global>{`
      :root {
        --font-roboto-mono: ${robotoMono.style.fontFamily};
      }
      body {
        font-family: var(--font-roboto-mono);
      }
    `}</style>
  )
} 