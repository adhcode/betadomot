import "./globals.css"
import { Raleway } from 'next/font/google'
import { Toaster } from 'sonner'
import { Header } from './components/layout/header'
import { Footer } from './components/layout/footer'
import { MarketingModal } from './components/marketing/marketing-modal'

const raleway = Raleway({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-raleway',
  display: 'swap',
})

export const metadata = {
  title: "Betadomot - Modern Home Solutions",
  description: "Transform your space with minimalist home furniture, appliances, and energy-smart solutions.",
}

export const viewport = {
  themeColor: '#ffffff',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning className="h-full">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Ojuju:wght@200..800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className={`${raleway.variable} font-sans antialiased min-h-full bg-white`}>
        <div className="relative flex min-h-screen flex-col max-w-[1920px] mx-auto">
          <Header />
          <main className="flex-1 w-full">
            {children}
          </main>
          <Footer />
          <MarketingModal />
          <Toaster />
        </div>
      </body>
    </html>
  )
}
