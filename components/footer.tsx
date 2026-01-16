'use client';
import { useLanguage } from '@/context/language-context';

export default function Footer() {
  const { language } = useLanguage();

  const currentYear = new Date().getFullYear();

  return (
    <footer className='bg-background border-t border-border'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16'>
        <div className='flex flex-col sm:flex-row justify-between items-start sm:items-center gap-8 pb-8 border-b border-border'>
          <div>
            <h3 className='text-xl font-serif font-light tracking-wide'>
              <span className='font-normal'>Q&A</span>
              <span className='italic font-light ml-1'>Photo</span>
            </h3>
            <p className='text-sm text-muted-foreground mt-2'>
              {language === 'en'
                ? 'Photography & Visual Storytelling'
                : 'Nhiếp Ảnh & Kể Chuyện Bằng Hình Ảnh'}
            </p>
          </div>

          {/* Social Links */}
          <div className='flex gap-6'>
            <a
              href='https://instagram.com/qaphoto.vn'
              target='_blank'
              rel='noopener noreferrer'
              className='text-sm uppercase tracking-widest hover:text-muted-foreground transition-colors'
            >
              Instagram
            </a>
            <a
              href='https://facebook.com/qaphoto.vn'
              target='_blank'
              rel='noopener noreferrer'
              className='text-sm uppercase tracking-widest hover:text-muted-foreground transition-colors'
            >
              Facebook
            </a>
            <a
              href='mailto:contact@vuquangit@gmail.com'
              target='_blank'
              rel='noopener noreferrer'
              className='text-sm uppercase tracking-widest hover:text-muted-foreground transition-colors'
            >
              Email
            </a>
          </div>
        </div>

        {/* Bottom */}
        <div className='pt-8 text-center text-xs text-muted-foreground'>
          <p>
            &copy; {currentYear}{' '}
            {language === 'en'
              ? 'Q&A Photography. All rights reserved.'
              : 'Q&A Photography. Bản quyền được bảo vệ.'}
          </p>
        </div>
      </div>
    </footer>
  );
}
