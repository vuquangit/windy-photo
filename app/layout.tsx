import type React from 'react';
import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import { Analytics } from '@vercel/analytics/next';
import './globals.css';

import { LanguageProvider } from '@/context/language-context';
import Header from '@/components/header';
import Footer from '@/components/footer';
import ContactPopup from '@/components/contact-popup';

const _geist = Geist({ subsets: ['latin'] });
const _geistMono = Geist_Mono({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Q&A Photo',
  description:
    'Premium outdoor, wedding, and photobooth photography services with modern design and exceptional quality.',
  generator: 'Q&A Photo',
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en' className='scroll-smooth'>
      <body className={`font-sans antialiased`}>
        <LanguageProvider>
          <main className='bg-white text-foreground'>
            <Header />
            {children}
            <Footer />
            <ContactPopup />
          </main>
        </LanguageProvider>
        <Analytics />
      </body>
    </html>
  );
}
