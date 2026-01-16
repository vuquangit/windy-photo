'use client';

import { Menu, X } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { useLanguage, translations } from '@/context/language-context';
import { useState, useEffect } from 'react';

const NavigationItem = ({ href, label }: { href: string; label: string }) => {
  return (
    <Link
      href={href}
      className='text-sm uppercase tracking-widest hover:text-muted-foreground transition-colors'
    >
      {label}
    </Link>
  );
};

export default function Navigation() {
  const { language, setLanguage } = useLanguage();
  const [headerHeight, setHeaderHeight] = useState(80);

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    let lastScrollY = 0;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY) {
        // Scrolling down
        setHeaderHeight(50);
      } else {
        // Scrolling up
        setHeaderHeight(80);
      }

      lastScrollY = currentScrollY;
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className='fixed top-0 left-0 right-0 z-50 bg-white transition-all duration-300 shadow'
      style={{ height: `${headerHeight}px` }}
    >
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full'>
        <div className='flex justify-between items-center h-full'>
          <div className='shrink-0'>
            <Link
              href='/'
              className='text-2xl font-serif font-light tracking-wide flex items-center gap-2'
            >
              <Image
                src='/icon.svg'
                alt='Logo'
                width={40}
                height={40}
                className='relative z-10'
              />
              <span className='font-normal'>Q&A</span>
              <span className='italic font-light ml-1'>Photo</span>
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className='hidden md:flex items-center gap-12'>
            <NavigationItem
              href='/#about'
              label={translations[language].about}
            />

            <NavigationItem
              href='/#portfolio'
              label={translations[language].portfolio}
            />

            <NavigationItem
              href='/#services'
              label={translations[language].services}
            />

            <NavigationItem
              href='/#pricing'
              label={translations[language].pricing}
            />

            <div className='flex items-center gap-3 border-l border-border pl-8'>
              <select
                value={language}
                onChange={(e) => setLanguage(e.target.value as 'en' | 'vi')}
                className='bg-transparent text-xs uppercase tracking-widest font-medium cursor-pointer hover:text-muted-foreground transition-colors appearance-none'
              >
                <option value='en' className='bg-background text-foreground'>
                  EN
                </option>
                <option value='vi' className='bg-background text-foreground'>
                  VI
                </option>
              </select>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className='md:hidden flex items-center gap-4'>
            <select
              value={language}
              onChange={(e) => setLanguage(e.target.value as 'en' | 'vi')}
              className='bg-transparent text-xs uppercase tracking-widest cursor-pointer hover:text-muted-foreground transition-colors appearance-none'
            >
              <option value='en' className='bg-background text-foreground'>
                EN
              </option>
              <option value='vi' className='bg-background text-foreground'>
                VI
              </option>
            </select>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className='p-2 hover:bg-muted rounded-lg transition-colors'
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className='md:hidden pb-6 space-y-4 border-t border-border pt-4'>
            <Link
              href='#about'
              className='block text-sm uppercase tracking-widest hover:text-muted-foreground transition-colors'
            >
              ABOUT
            </Link>
            <Link
              href='#portfolio'
              className='block text-sm uppercase tracking-widest hover:text-muted-foreground transition-colors'
            >
              PORTFOLIO
            </Link>
            <Link
              href='#info'
              className='block text-sm uppercase tracking-widest hover:text-muted-foreground transition-colors'
            >
              INFO
            </Link>
            <Link
              href='#contact'
              className='block text-sm uppercase tracking-widest hover:text-muted-foreground transition-colors'
            >
              CONTACT
            </Link>
            <Link
              href='#stories'
              className='block text-sm uppercase tracking-widest hover:text-muted-foreground transition-colors'
            >
              STORIES
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
}
