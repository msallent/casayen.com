'use client';

import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import NextLink from 'next/link';
import { Menu } from '@/components/Menu';
import { MenuList } from '@/components/MenuList';
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
    <nav className="mx-5 mb-6 mt-8 sm:mx-10 lg:mx-20 xl:m-10">
      <div className="flex items-center justify-between">
        <NextLink href="/" aria-label="Home">
          <YenLogoSVG className="h-8 xl:h-12" />
        </NextLink>

        <button
          type="button"
          className="xl:hidden"
          aria-label="Abrir menu"
          onClick={handleOpenMenu}
        >
          <MenuSVG className="w-12" />
        </button>

        <div className="hidden xl:absolute xl:right-10 xl:top-10 xl:z-10 xl:block">
          <MenuList items={menuItems.slice(1)} />
        </div>
      </div>

      {isMenuOpen && <Menu items={menuItems} onClose={handleCloseMenu} />}
    </nav>
  );
}
