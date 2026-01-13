'use client';

import { useLanguage } from '@/context/language-context';

export default function Portfolio() {
  const { language } = useLanguage();

  return (
    <section id='portfolio' className='py-20 px-4 sm:px-6 lg:px-8 bg-white'>
      <div className='max-w-7xl mx-auto'>
        {/* Large hero image with overlay text */}
        <div className='relative aspect-video rounded-lg overflow-hidden bg-muted mb-16 group'>
          <img
            src='/elegant-couple-luxury-car-wedding-photoshoot.jpg'
            alt='Portfolio work'
            className='w-full h-full object-cover group-hover:scale-105 transition-transform duration-300'
          />
          {/* Overlay text */}
          <div className='absolute inset-0 bg-black/30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity'>
            <div className='text-center text-white'>
              <h3 className='text-4xl font-serif font-light italic mb-4'>
                VIEW MY WORK
              </h3>
              <p className='text-lg font-light'>Elegant. Candid. Nostalgic.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
