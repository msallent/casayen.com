import { ReactNode } from 'react';
import '@/styles/globals.css';

type LayoutProps = {
  children: ReactNode;
};

export default function Layout({ children }: LayoutProps) {
  return (
    <html lang="en">
      <head />
      <body className="overscroll-none bg-primary-black selection:bg-secondary-white">
        {children}
        <div className="fixed left-0 top-0 mix-blend-overlay bg-grain-texture w-full h-full pointer-events-none" />
      </body>
    </html>
  );
}
