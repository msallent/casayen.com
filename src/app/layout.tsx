import { ReactNode } from 'react';
import { EB_Garamond, Inter } from '@next/font/google';
import localFont from '@next/font/local';
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
      <body className="overscroll-none bg-primary-black selection:bg-secondary-white">
        {children}
        <div className="fixed left-0 top-0 mix-blend-overlay bg-grain-texture w-full h-full pointer-events-none" />
      </body>
    </html>
  );
}
