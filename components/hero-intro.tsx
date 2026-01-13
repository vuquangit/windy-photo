"use client"

import { useLanguage } from "@/context/language-context"

const heroContent = {
  en: {
    hi: 'Hi, I\'m Windy.',
    description: 'A portrait & wedding photographer based in Ho Chi Minh City, welcoming travel worldwide.'
  },
  vi: {
    hi: 'Xin chào, tôi là Windy.',
    description: 'Tôi là nhiếp ảnh gia chuyên chụp ảnh chân dung và ảnh cưới, hiện đang sống tại Thành phố Hồ Chí Minh.'
  },
}

export default function HeroIntro() {
  const { language } = useLanguage()

  return (
    <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-start pt-12">
          {/* Left: Images with overlap */}
          <div className="relative h-96 md:h-[500px]">
            <div className="absolute top-0 left-0 w-40 h-48 rounded-lg overflow-hidden bg-muted">
              <img src="/professional-camera-hands.jpg" alt="Camera" className="w-full h-full object-cover" />
            </div>
            <div className="absolute top-20 left-32 w-48 h-80 rounded-lg overflow-hidden bg-muted shadow-lg">
              <img
                src="/professional-photographer-portrait-woman.jpg"
                alt="Photographer portrait"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Right: Text content */}
          <div className="flex flex-col justify-start pt-8 space-y-6">
            <div>
              <h1 className="text-5xl sm:text-6xl font-serif font-light italic mb-6">
                {heroContent[language].hi}
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed">
                {heroContent[language].description}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
