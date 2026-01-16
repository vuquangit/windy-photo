'use client';

import { useLanguage, translations } from '@/context/language-context';

export default function AboutSection() {
  const { language } = useLanguage();
  const content = language === 'en' ? translations.en.aboutSection : translations.vi.aboutSection;
  console.log('content', content);

  return (
    <section id='about' className='py-20 px-4 sm:px-6 lg:px-8 bg-white'>
      <div className='max-w-7xl mx-auto'>
        <div className='grid md:grid-cols-2 gap-12'>
          {/* Left: Text */}
          <div className='space-y-8'>
            <div className='space-y-4'>
              <p className='text-sm leading-relaxed text-muted-foreground'>
                {content.intro}
              </p>
              <p className='text-sm leading-relaxed text-muted-foreground'>
                {content.goal}
              </p>
            </div>
            <button
              className='btn-default'
              onClick={() => {
                window.dispatchEvent(new CustomEvent('contact-shake'));
              }}
            >
              {content.cta}
            </button>
          </div>

          {/* Right: Image */}
          <div className='relative aspect-3/4 rounded-lg overflow-hidden bg-muted'>
            <img
              src='/images/about-1.jpg'
              alt='Photographer with camera'
              className='w-full h-full object-cover'
            />
          </div>
        </div>
      </div>
    </section>
  );
}
