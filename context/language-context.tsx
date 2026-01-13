"use client"

import { createContext, useContext, useState, type ReactNode } from "react"

export const translations = {
  en: {
    // Navigation
    about: "ABOUT",
    services: "SERVICES",
    outdoorPhotography: "OUTDOOR PHOTOGRAPHY",
    wedding: "WEDDING",
    stories: "STORIES",

    // Services Section
    ourServices: "Our Services",
    ourServicesDesc: "Capturing life's most precious moments with elegance and authenticity",
    portraitPhotography: "Portrait Photography",
    portraitPhotographyDesc:
      "Beautiful outdoor portrait sessions that showcase your natural beauty and personality in authentic settings",
    weddingPhotography: "Wedding Photography",
    weddingPhotographyDesc:
      "Preserve your special day with stunning outdoor wedding photography capturing every emotional moment",
    photobooth: "Photobooth",
    photoboothDesc:
      "Interactive photobooth experience for your wedding reception with instant prints and digital copies",

    // Other sections
    getInTouch: "Get In Touch",
    contactUs: "Contact Us",
    email: "Email",
    phone: "Phone",
    followUs: "Follow Us",
    explorePortfolio: "Explore Our Portfolio",
    portfolioTitle: "Portfolio",
    aboutUs: "About Us",
    privacyPolicy: "Privacy Policy",
    terms: "Terms of Service",
    allRightsReserved: "All rights reserved",
  },
  vi: {
    // Navigation
    about: "GIỚI THIỆU",
    services: "DỊCH VỤ",
    outdoorPhotography: "Chụp ngoại cảnh",
    wedding: "Chụp Ảnh Cưới",
    stories: "CÂU CHUYỆN",

    // Services Section
    ourServices: "Dịch Vụ Của Chúng Tôi",
    ourServicesDesc: "Ghi lại những khoảnh khắc quý giá nhất trong cuộc sống với sự tinh tế và chân thực",
    portraitPhotography: "Chụp Ảnh Chân Dung Ngoài Trời",
    portraitPhotographyDesc:
      "Những buổi chụp ảnh chân dung ngoài trời tuyệt đẹp thể hiện vẻ đẹp tự nhiên và cá tính của bạn",
    weddingPhotography: "Chụp Ảnh Cưới Ngoại Cảnh",
    weddingPhotographyDesc: "Lưu giữ ngày trọng đại của bạn với những bức ảnh cưới ngoài trời tuyệt đẹp",
    photobooth: "Photobooth",
    photoboothDesc: "Trải nghiệm photobooth tương tác cho tiệc cưới của bạn với in ấn tức thì và bản sao kỹ thuật số",

    // Other sections
    getInTouch: "Liên Hệ Với Chúng Tôi",
    contactUs: "Liên Hệ",
    email: "Email",
    phone: "Điện Thoại",
    followUs: "Theo Dõi",
    explorePortfolio: "Khám Phá Danh Mục",
    portfolioTitle: "Danh Mục",
    aboutUs: "Về Chúng Tôi",
    privacyPolicy: "Chính Sách Bảo Mật",
    terms: "Điều Khoản Dịch Vụ",
    allRightsReserved: "Bản quyền được bảo vệ",
  },
}

type Language = "en" | "vi"

interface LanguageContextType {
  language: Language
  setLanguage: (lang: Language) => void
  t: (key: keyof (typeof translations)[Language]) => string
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>("vi")

  const t = (key: keyof (typeof translations)[Language]) => {
    return translations[language][key]
  }

  return <LanguageContext.Provider value={{ language, setLanguage, t }}>{children}</LanguageContext.Provider>
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (!context) {
    throw new Error("useLanguage must be used within LanguageProvider")
  }
  return context
}
