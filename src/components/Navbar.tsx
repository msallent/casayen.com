'use client';

import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import NextLink from 'next/link';
import { Menu } from '@/components/Menu';
import { Link } from '@/types/contentful';
import YenLogoSVG from '@/assets/svgs/yen-logo.svg';
import MenuSVG from '@/assets/svgs/menu.svg';

type NavbarProps = {
  menuItems: Array<Link>;
};

export function Navbar({ menuItems }: NavbarProps) {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleOpenMenu = () => {
    setIsMenuOpen(true);
  };

  const handleCloseMenu = () => {
    setIsMenuOpen(false);
  };

  useEffect(() => {
    setIsMenuOpen(false);
  }, [pathname]);

  return (
    <nav className="mx-5 mt-8 mb-6 sm:mx-10 lg:mx-20">
      <div className="flex items-center justify-between">
        <NextLink href="/" aria-label="Home">
          <YenLogoSVG className="h-8" />
        </NextLink>

        <button type="button" aria-label="Abrir menu" onClick={handleOpenMenu}>
          <MenuSVG className="w-12" />
        </button>
      </div>

      {isMenuOpen && <Menu items={menuItems} onClose={handleCloseMenu} />}
    </nav>
  );
}
