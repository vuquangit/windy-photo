'use client';

import { useLanguage } from '@/context/language-context';

const heroContent = {
  en: {
    hi: "Hi, I'm Q&A Photo.",
    description:
      'A portrait & wedding photographer based in Ho Chi Minh City, welcoming travel worldwide.',
  },
  vi: {
    hi: 'Xin chào, tôi là Q&A Photo.',
    description:
      'Tôi là nhiếp ảnh gia chuyên chụp ảnh chân dung và ảnh cưới, hiện đang sống tại Thành phố Hồ Chí Minh.',
  },
};

export default function HeroIntro() {
  const { language } = useLanguage();

  return (
    <section className='pt-32 pb-15 px-4 md:mb-20 sm:px-6 lg:px-8 bg-background'>
      <div className='max-w-7xl mx-auto'>
        <div className='grid md:grid-cols-2 gap-12 items-start  md:pt-12'>
          {/* Left: Images with overlap */}
          <div className='relative pb-20 md:pb-0'>
            <div className='w-5/6 h-auto rounded-lg overflow-hidden bg-muted'>
              <img
                src='/images/hero-intro-1.jpg'
                alt='Camera'
                className='w-full h-full object-cover'
              />
            </div>
            <div className='absolute top-20 left-1/2 w-1/2 h-auto rounded-lg overflow-hidden bg-muted shadow-lg'>
              <img
                src='/images/hero-intro-2.jpg'
                alt='Photographer portrait'
                className='w-full h-full object-cover'
              />
            </div>
          </div>

          {/* Right: Text content */}
          <div className='flex flex-col justify-start pt-8 space-y-6'>
            <div>
              <h1 className='text-5xl sm:text-6xl font-serif font-light italic mb-6'>
                {heroContent[language].hi}
              </h1>
              <p className='text-lg text-muted-foreground leading-relaxed'>
                {heroContent[language].description}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
