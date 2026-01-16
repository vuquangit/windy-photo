'use client';

import { createContext, useContext, useState, type ReactNode } from 'react';

export const translations = {
  en: {
    // Navigation
    about: 'ABOUT',
    services: 'SERVICES',
    portfolio: 'PORTFOLIO',
    pricing: 'PRICING',
    latestWorks: 'MY WORKS',

    // Services Section
    ourServices: 'Our Services',
    ourServicesDesc:
      "Capturing life's most precious moments with elegance and authenticity",
    portraitPhotography: 'Portrait Photography',
    portraitPhotographyDesc:
      'Beautiful outdoor portrait sessions that showcase your natural beauty and personality in authentic settings',
    weddingPhotography: 'Wedding Photography',
    weddingPhotographyDesc:
      'Preserve your special day with stunning outdoor wedding photography capturing every emotional moment',
    photobooth: 'Photobooth',
    photoboothDesc:
      'Interactive photobooth experience for your wedding reception with instant prints and digital copies',

    // Other sections
    getInTouch: 'Get In Touch',
    contactUs: 'Contact Us',
    email: 'Email',
    phone: 'Phone',
    followUs: 'Follow Us',
    explorePortfolio: 'Explore Our Portfolio',
    portfolioTitle: 'Portfolio',
    aboutUs: 'About Us',
    privacyPolicy: 'Privacy Policy',
    terms: 'Terms of Service',
    allRightsReserved: 'All rights reserved',

    // Pricing Section
    pricingTitle: 'Pricing Services',
    pricingSubtitle: 'Choose the Perfect Package for Your Needs',

    // About Section
    aboutSection: {
      intro:
        'I have always had a passion for the visual arts. I love the rawness of life, human relation and connection, and the rare emotions that a photograph can evoke. I bring my diary life edge, elegant and bold style to naturally transform into my work.',
      goal: "My goal is to capture how it feels to be in a moment with you. I photograph as a documentary and editorial style that preserves time in an honest way. I'm not the photographer that will show you in a few stiff poses and smiles. My job is to make you feel comfortable and confident in front of the camera so that I can showcase your natural beauty. I'm always present in the moment to document the day as purely, joyfully, and honestly as is unfolds because I believe those are the memories worth collecting.",
      cta: 'GET IN TOUCH',
    },
  },
  vi: {
    // Navigation
    about: 'GIỚI THIỆU',
    services: 'DỊCH VỤ',
    portfolio: 'PORTFOLIO',
    pricing: 'BẢNG GIÁ',
    latestWorks: 'các tác phẩm của tôi',

    // Services Section
    ourServices: 'Dịch Vụ Của Chúng Tôi',
    ourServicesDesc:
      'Ghi lại những khoảnh khắc quý giá nhất trong cuộc sống với sự tinh tế và chân thực',
    portraitPhotography: 'Chân Dung',
    portraitPhotographyDesc:
      'Những buổi chụp ảnh chân dung ngoài trời tuyệt đẹp thể hiện vẻ đẹp tự nhiên và cá tính của bạn',
    weddingPhotography: 'Ảnh Cưới Ngoại Cảnh',
    weddingPhotographyDesc:
      'Lưu giữ ngày trọng đại của bạn với những bức ảnh cưới ngoài trời tuyệt đẹp',
    photobooth: 'Photobooth',
    photoboothDesc:
      'Trải nghiệm photobooth tương tác cho tiệc cưới của bạn với in ấn tức thì và bản sao kỹ thuật số',

    // Other sections
    getInTouch: 'Liên Hệ Với Chúng Tôi',
    contactUs: 'Liên Hệ',
    email: 'Email',
    phone: 'Điện Thoại',
    followUs: 'Theo Dõi',
    explorePortfolio: 'Khám Phá Danh Mục',
    portfolioTitle: 'Danh Mục',
    aboutUs: 'Về Chúng Tôi',
    privacyPolicy: 'Chính Sách Bảo Mật',
    terms: 'Điều Khoản Dịch Vụ',
    allRightsReserved: 'Bản quyền được bảo vệ',

    // Pricing Section
    pricingTitle: 'Bảng Giá Dịch Vụ',
    pricingSubtitle: 'Chọn Gói Dịch Vụ Phù Hợp Với Nhu Cầu Của Bạn',

    // About Section
    aboutSection: {
      intro:
        'Tôi luôn có niềm đam mê với các hình thức nghệ thuật. Tôi yêu thích sự nguyên bản của cuộc sống, các mối quan hệ con người và kết nối, và những cảm xúc hiếm có mà một bức ảnh có thể gợi lên. Tôi mang đến phong cách sống dạn dĩ, thanh lịch và táo bạo của tôi để tự nhiên biến thành công việc của tôi.',
      goal: 'Mục tiêu của tôi là ghi lại cảm giác của việc ở trong một khoảnh khắc với bạn. Tôi chụp ảnh theo phong cách phim tài liệu và biên tập bảo tồn thời gian một cách trung thực. Tôi không phải là nhiếp ảnh gia sẽ chỉ cho bạn vài tư thế cứng nhắc và nụ cười. Công việc của tôi là làm cho bạn cảm thấy thoải mái và tự tin trước camera để tôi có thể thể hiện vẻ đẹp tự nhiên của bạn. Tôi luôn có mặt trong khoảnh khắc để ghi lại ngày này một cách tinh khiết, vui vẻ và trung thực vì tôi tin rằng đó là những kỷ niệm đáng để lưu giữ.',
      cta: 'LIÊN HỆ NGAY',
    },
  },
};

type Language = 'en' | 'vi';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: keyof (typeof translations)[Language]) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(
  undefined
);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>('vi');

  const t = (key: keyof (typeof translations)[Language]) => {
    return translations[language][key] as string;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within LanguageProvider');
  }
  return context;
}
