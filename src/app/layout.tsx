import { ReactNode } from 'react';
import { EB_Garamond, Inter } from 'next/font/google';
import localFont from 'next/font/local';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { fetchContent } from '@/utils/fetch';
import { NavbarMenuData } from '@/types/contentful';
import { openGraph } from '@/constants/metadata';
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

const title = {
  default: 'Yen',
  template: 'Yen | %s',
};

const description = 'Bienvenidx a tu viaje intergaláctico de reprogramación sexual';

export const metadata = {
  title,
  description,
  keywords: ['casa', 'yen'],
  metadataBase: new URL(`${process.env.SITE_URL}`),
  openGraph: { ...openGraph, title, description, url: '/' },
  authors: [{ name: 'Camila Sallent' }, { name: 'Matias Sallent' }],
};

export default async function Layout({ children }: LayoutProps) {
  const {
    data: {
      navbarMenu: { menuItemsCollection },
    },
  } = await fetchContent<NavbarMenuData>(
    `query NavbarMenu {
      navbarMenu(id: "${process.env.CONTENTFUL_NAVBAR_MENU_ID}") {
        menuItemsCollection {
          items {
            label
            url
          }
        }
      }
    }`
  );

  return (
    <html lang="es" className={`${inter.variable} ${ebGaramond.variable} ${ppNeueWorld.variable}`}>
      <body className="flex min-h-screen flex-col overscroll-none bg-primary-black selection:bg-secondary-white">
        <Navbar menuItems={menuItemsCollection.items} />
        <main className="flex-1 overflow-hidden">{children}</main>
        <Footer />
        <div className="pointer-events-none fixed left-0 top-0 z-30 h-full w-full bg-grain-texture mix-blend-overlay" />
      </body>
    </html>
  );
}
