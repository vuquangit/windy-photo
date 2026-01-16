'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';

interface IconShakingWaveProps {
  isShaking: boolean;
  href: string;
  icon: string;
}

export const IconShakingWave = ({
  isShaking,
  href,
  icon,
}: IconShakingWaveProps) => {
  return (
    <a
      href={href}
      target='_blank'
      rel='noopener noreferrer'
      className={`flex items-center transition-colors group relative ${
        isShaking ? 'animate-phone-shake' : ''
      }`}
    >
      {isShaking && (
        <>
          <span
            className='absolute inset-0 rounded-full bg-blue-400/30 animate-ripple'
            style={{ animationDelay: '0s' }}
          />
          <span
            className='absolute inset-0 rounded-full bg-blue-400/20 animate-ripple'
            style={{ animationDelay: '0.6s' }}
          />
          <span
            className='absolute inset-0 rounded-full bg-blue-400/10 animate-ripple'
            style={{ animationDelay: '1.2s' }}
          />
        </>
      )}
      <Image
        src={icon}
        alt='Zalo'
        width={40}
        height={40}
        className='relative z-10'
      />
    </a>
  );
};

export default function ContactPopup() {
  const [isShaking, setIsShaking] = useState(false);

  useEffect(() => {
    const handleShake = () => {
      setIsShaking(true);
      setTimeout(() => setIsShaking(false), 3000); // Shake for 3 seconds
    };

    window.addEventListener('contact-shake', handleShake);
    return () => window.removeEventListener('contact-shake', handleShake);
  }, []);

  return (
    <div className='fixed bottom-20 right-4 z-40 animate-in fade-in slide-in-from-bottom-4'>
      <div className='space-y-4'>
        {/* Zalo */}
        <IconShakingWave
          isShaking={isShaking}
          icon='/icons/zalo.svg'
          href='https://zalo.me/YOUR_ZALO_NUMBER'
        />

        {/* Messenger */}
        <IconShakingWave
          isShaking={isShaking}
          icon='/icons/messenger.svg'
          href='https://m.me/YOUR_FACEBOOK_PAGE'
        />

        {/* Instagram */}
        <IconShakingWave
          isShaking={isShaking}
          icon='/images/instagram.png'
          href='https://instagram.com/YOUR_INSTAGRAM_HANDLE'
        />
      </div>
    </div>
  );
}
