'use client';

import { useLanguage } from '@/context/language-context';

export default function Portfolio() {
  const { t } = useLanguage();

  const images = [
    { src: '/images/portfolios/1.jpg', alt: 'Work 1' },
    { src: '/images/portfolios/2.jpg', alt: 'Work 2' },
    { src: '/images/portfolios/3.jpg', alt: 'Work 3' },
    { src: '/images/portfolios/4.jpg', alt: 'Work 4' },
    { src: '/images/portfolios/5.jpg', alt: 'Work 5' },
    { src: '/images/portfolios/6.jpg', alt: 'Work 6' },
    { src: '/images/portfolios/7.jpg', alt: 'Work 7' },
    { src: '/images/portfolios/8.jpg', alt: 'Work 8' },
    { src: '/images/portfolios/9.jpg', alt: 'Work 9' },
    { src: '/images/portfolios/10.jpg', alt: 'Work 10' },
    { src: '/images/portfolios/11.jpg', alt: 'Work 11' },
    { src: '/images/portfolios/12.jpg', alt: 'Work 12' },
    { src: '/images/portfolios/13.jpg', alt: 'Work 13' },
    { src: '/images/portfolios/14.jpg', alt: 'Work 14' },
  ];

  return (
    <section id='portfolio' className='py-24 px-4 sm:px-6 lg:px-8 bg-white'>
      <div className='max-w-7xl mx-auto'>
        <div className='text-center mb-16'>
          <h2 className='text-xl sm:text-2xl font-serif font-light tracking-[0.4em] uppercase text-gray-800 uppercase'>
            {t('latestWorks')}
          </h2>
        </div>

        <div className='columns-1 md:columns-2 lg:columns-3 gap-8 space-y-8'>
          {images.map((image, index) => (
            <div
              key={index}
              className='relative break-inside-avoid overflow-hidden rounded-sm group'
            >
              <img
                src={image.src}
                alt={image.alt}
                className='w-full h-auto object-cover grayscale transition-all duration-500 group-hover:grayscale-0 group-hover:scale-105'
                // Fallback to placeholder if image doesn't exist
                onError={(e) => {
                  (
                    e.target as HTMLImageElement
                  ).src = `https://picsum.photos/seed/${index + 10}/800/${
                    600 + (index % 3) * 200
                  }`;
                }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
