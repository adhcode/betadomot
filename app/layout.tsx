import "./globals.css"
import { Lora } from "next/font/google"
import type { Metadata } from "next"
import { Toaster } from "./components/ui/toaster"
import { Header } from "./components/layout/header"
import { Footer } from "./components/layout/footer"
import { cn } from "../lib/utils"
import { ThemeProvider } from "./components/theme-provider"

const lora = Lora({
  subsets: ["latin"],
  weight: ['400', '500', '600', '700'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: "BetaDomot",
  description: "Your Home, Only Better",
}

export const viewport = {
  themeColor: '#ffffff',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={cn(
        "min-h-screen bg-background antialiased",
        lora.className
      )}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="relative flex min-h-screen flex-col">
            <Header />
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  )
}
