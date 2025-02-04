'use client'

import { Montserrat } from 'next/font/google'
import { Header } from './smart-home/header'
import { HeroSection } from './smart-home/hero-section'
import { SavingsSection } from './smart-home/savings-section'
import { HelpSection } from './smart-home/help-section'
import { NewsletterSection } from './smart-home/newsletter-section'
import { Footer } from './smart-home/footer'
import { AssessmentPopup } from './smart-home/assessment-popup'
import { ScrollToTopButton } from './smart-home/scroll-to-top-button'

const montserrat = Montserrat({ subsets: ['latin'] })

export function SmartHomeLandingComponent() {
  return (
    <div className={`flex flex-col min-h-screen ${montserrat.className}`}>
      <Header />

      <main className="flex-grow">
        <HeroSection />
        <SavingsSection />
        <HelpSection />
        <NewsletterSection />
      </main>

      <Footer />
      <AssessmentPopup />
      <ScrollToTopButton />
    </div>
  )
}
