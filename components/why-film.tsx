'use client';

import { useLanguage } from '@/context/language-context';

const whyFilmContent = {
  en: {
    title: 'Why Windy?',
    description1:
      'Film photography is an art form that has been beloved and preserved since the dawn of photography. It is a craft that the follow is how to work with over the years. Not only does it acquire that organic, old timey aesthetic through its dynamic range of color and perfect combination of bold and soft tones and texture, but there is something so special and intangible about a film photo that gives you the essence of nostalgia.',
    description2:
      'As a hybrid photographer I aim to emulate the quality in my digital photos through composition and editing but in my experience there is nothing like the real thing. I am so happy to be offering digital and film images as an add on to all my sessions – delivering my clients a gallery of both digital and film images.',
  },
  vi: {
    title: 'Tại sao là Windy?',
    description1:
      'Nhiếp ảnh phim là một hình thức nghệ thuật được yêu thích và bảo tồn từ những ngày đầu của nhiếp ảnh. Đó là một nghề mà tôi đã học cách làm việc với nó qua nhiều năm. Không chỉ là nó có được thẩm mỹ hữu cơ, cũ đã lỗi thời thông qua phạm vi động của nó và kết hợp hoàn hảo của tones và kết cấu.',
    description2:
      'Là một nhiếp ảnh gia lai tôi muốn bắt chước chất lượng trong những bức ảnh kỹ thuật số của tôi thông qua thành phần và chỉnh sửa nhưng trong kinh nghiệm của tôi không có gì giống như thứ thực.',
  },
};

export default function WhyFilm() {
  const { language } = useLanguage();
  const content = language === 'en' ? whyFilmContent.en : whyFilmContent.vi;

  return (
    <section className='py-20 px-4 sm:px-6 lg:px-8 bg-neutral-100'>
      <div className='max-w-7xl mx-auto'>
        <div className='grid md:grid-cols-2 gap-12 items-start'>
          {/* Left: Image */}
          <div className='relative aspect-[3/4] rounded-lg overflow-hidden bg-muted'>
            <img
              src='/film-photography-black-and-white-artistic.jpg'
              alt='Film photography art'
              className='w-full h-full object-cover'
            />
          </div>

          {/* Right: Text */}
          <div className='flex flex-col justify-start pt-8 space-y-6'>
            <h2 className='text-4xl font-serif font-light italic'>
              {content.title}
            </h2>
            <div className='space-y-4'>
              <p className='text-sm leading-relaxed text-muted-foreground'>
                {content.description1}
              </p>
              <p className='text-sm leading-relaxed text-muted-foreground'>
                {content.description2}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
