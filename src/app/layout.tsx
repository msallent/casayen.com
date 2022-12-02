import { ReactNode } from 'react';
import '@/styles/globals.css';

type LayoutProps = {
  children: ReactNode;
};

export default function Layout({ children }: LayoutProps) {
  return (
    <html lang="en">
      <head />
      <body className="bg-primary-black overscroll-none">
        {children}
        <div className="fixed left-0 top-0 mix-blend-overlay bg-grain-texture w-full h-full pointer-events-none" />
      </body>
    </html>
  );
}
