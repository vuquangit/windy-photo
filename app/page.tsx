"use client"

import { useState } from "react"
import { LanguageProvider } from "@/context/language-context"
import Navigation from "@/components/navigation"
import HeroIntro from "@/components/hero-intro"
import AboutSection from "@/components/about-section"
import ServicesSection from "@/components/services-section"
import WhyFilm from "@/components/why-film"
import Portfolio from "@/components/portfolio"
import Instagram from "@/components/instagram"
import Footer from "@/components/footer"
import ContactPopup from "@/components/contact-popup"

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <LanguageProvider>
      <main className="bg-background text-foreground">
        <Navigation isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
        <HeroIntro />
        <AboutSection />
        <ServicesSection />
        <WhyFilm />
        <Portfolio />
        <Instagram />
        <Footer />
        <ContactPopup />
      </main>
    </LanguageProvider>
  )
}
