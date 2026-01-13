'use client';

import Image from 'next/image';

export default function ContactPopup() {
  return (
    <div className='fixed bottom-20 right-4 z-40 animate-in fade-in slide-in-from-bottom-4'>
      {/* Contact Links */}
      <div className='space-y-3'>
        {/* Zalo */}
        <a
          href='https://zalo.me/YOUR_ZALO_NUMBER'
          target='_blank'
          rel='noopener noreferrer'
          className='flex items-center transition-colors group'
        >
          <Image src='/icons/zalo.svg' alt='Zalo' width={40} height={40} />
        </a>

        {/* Messenger */}
        <a
          href='https://m.me/YOUR_FACEBOOK_PAGE'
          target='_blank'
          rel='noopener noreferrer'
          className='flex items-center transition-colors group'
        >
          <Image
            src='/icons/messenger.svg'
            alt='Messenger'
            width={40}
            height={40}
          />
        </a>

        {/* Instagram */}
        <a
          href='https://instagram.com/YOUR_INSTAGRAM_HANDLE'
          target='_blank'
          rel='noopener noreferrer'
          className='flex items-center transition-colors group'
        >
          <Image
            src='/images/instagram.png'
            alt='Instagram'
            width={40}
            height={40}
          />
        </a>
      </div>
    </div>
  );
}
