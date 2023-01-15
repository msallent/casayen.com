import { ReactNode } from 'react';
import { EB_Garamond, Inter } from '@next/font/google';
import localFont from '@next/font/local';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
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
      <body className="overscroll-none bg-primary-black text-sm selection:bg-secondary-white">
        <Navbar />
        <main className="overflow-hidden">{children}</main>
        <Footer />
        <div className="pointer-events-none fixed left-0 top-0 z-20 h-full w-full bg-grain-texture mix-blend-overlay" />
      </body>
    </html>
  );
}
