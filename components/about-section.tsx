'use client';

import { useLanguage } from '@/context/language-context';

const aboutContent = {
  en: {
    title: '',
    intro:
      'I have always had a passion for the visual arts. I love the rawness of life, human relation and connection, and the rare emotions that a photograph can evoke. I bring my diary life edge, elegant and bold style to naturally transform into my work.',
    goal: "My goal is to capture how it feels to be in a moment with you. I photograph as a documentary and editorial style that preserves time in an honest way. I'm not the photographer that will show you in a few stiff poses and smiles. My job is to make you feel comfortable and confident in front of the camera so that I can showcase your natural beauty. I'm always present in the moment to document the day as purely, joyfully, and honestly as is unfolds because I believe those are the memories worth collecting.",
    cta: 'GET IN TOUCH',
  },
  vi: {
    title: '',
    intro:
      'Tôi luôn có niềm đam mê với các hình thức nghệ thuật. Tôi yêu thích sự nguyên bản của cuộc sống, các mối quan hệ con người và kết nối, và những cảm xúc hiếm có mà một bức ảnh có thể gợi lên. Tôi mang đến phong cách sống dạn dĩ, thanh lịch và táo bạo của tôi để tự nhiên biến thành công việc của tôi.',
    goal: 'Mục tiêu của tôi là ghi lại cảm giác của việc ở trong một khoảnh khắc với bạn. Tôi chụp ảnh theo phong cách phim tài liệu và biên tập bảo tồn thời gian một cách trung thực. Tôi không phải là nhiếp ảnh gia sẽ chỉ cho bạn vài tư thế cứng nhắc và nụ cười. Công việc của tôi là làm cho bạn cảm thấy thoải mái và tự tin trước camera để tôi có thể thể hiện vẻ đẹp tự nhiên của bạn. Tôi luôn có mặt trong khoảnh khắc để ghi lại ngày này một cách tinh khiết, vui vẻ và trung thực vì tôi tin rằng đó là những kỷ niệm đáng để lưu giữ.',
    cta: 'LIÊN HỆ NGAY',
  },
};

export default function AboutSection() {
  const { t, language } = useLanguage();
  const content = language === 'en' ? aboutContent.en : aboutContent.vi;

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
