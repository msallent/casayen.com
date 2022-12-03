import { ReactNode } from 'react';
import { EB_Garamond, Inter } from '@next/font/google';
import '@/styles/globals.css';

type LayoutProps = {
  children: ReactNode;
};

const interFont = Inter({ subsets: ['latin'], variable: '--font-inter' });
const ebGaramondFont = EB_Garamond({ subsets: ['latin'], variable: '--font-ebgaramond' });

export default function Layout({ children }: LayoutProps) {
  return (
    <html lang="en" className={`${interFont.variable} ${ebGaramondFont.variable}`}>
      <head />
      <body className="overscroll-none bg-primary-black selection:bg-secondary-white">
        {children}
        <div className="fixed left-0 top-0 mix-blend-overlay bg-grain-texture w-full h-full pointer-events-none" />
      </body>
    </html>
  );
}
