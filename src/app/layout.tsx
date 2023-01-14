import { ReactNode } from 'react';
import { EB_Garamond, Inter } from '@next/font/google';
import localFont from '@next/font/local';
import Image from 'next/image';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import backgroundGradient from '@/assets/images/gradient-1.png';
import '@/styles/globals.css';

type LayoutProps = {
  children: ReactNode;
};

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
const ebGaramond = EB_Garamond({ subsets: ['latin'], variable: '--font-eb-garamond' });

const ppNeueWorld = localFont({
  src: '../assets/fonts/PPNeueWorld.otf',
  variable: '--font-pp-neue-world',
});

export default function Layout({ children }: LayoutProps) {
  return (
    <html lang="en" className={`${inter.variable} ${ebGaramond.variable} ${ppNeueWorld.variable}`}>
      <head />
      <body className="overscroll-none text-sm bg-primary-black selection:bg-secondary-white">
        <Navbar />
        <main className="overflow-hidden">{children}</main>
        <Footer />
        <div className="fixed left-0 top-0 z-20 mix-blend-overlay bg-grain-texture w-full h-full pointer-events-none" />
        <Image
          aria-hidden
          src={backgroundGradient}
          alt="Background gradient"
          className="absolute top-0 left-0 w-full -z-10"
          loading="eager"
          priority
        />
      </body>
    </html>
  );
}
