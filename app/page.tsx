'use client';

import { useState } from 'react';
import HeroIntro from '@/components/hero-intro';
import AboutSection from '@/components/about-section';
import ServicesSection from '@/components/services-section';
import WhyFilm from '@/components/why-film';
import Portfolio from '@/components/portfolio';
import Instagram from '@/components/instagram';
import PricingSection from '@/components/pricing-section';

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <HeroIntro />
      <Portfolio />
      <ServicesSection />
      <WhyFilm />
      <AboutSection />
      <PricingSection />
      {/* <Instagram /> */}
    </>
  );
}
