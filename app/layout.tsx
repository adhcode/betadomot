import "./globals.css"
import { Raleway } from 'next/font/google'
import { Toaster } from 'sonner'
import { Header } from '@/components/smart-home/header'
import { Footer } from '@/components/smart-home/footer'

const raleway = Raleway({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  display: 'swap',
})

export const metadata = {
  title: "Betadomot - Modern Home Solutions",
  description: "Transform your space with minimalist home furniture, appliances, and energy-smart solutions.",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={raleway.className}>
      <body className="antialiased min-h-screen overflow-x-hidden">
        <Header />
        {children}
        <Footer />

        <Toaster position="top-right" />
      </body>
    </html>
  )
}
