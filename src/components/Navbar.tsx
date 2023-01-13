'use client';

import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import NextLink from 'next/link';
import { Menu } from '@/components/Menu';
import YenSVG from '@/assets/svgs/yen.svg';
import MenuSVG from '@/assets/svgs/menu.svg';

export function Navbar() {
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
    <nav className="mx-5 mt-[30px]">
      <div className="flex items-center justify-between">
        <NextLink href="/">
          <YenSVG className="h-8" />
        </NextLink>
        <button type="button" aria-label="Abrir menu" onClick={handleOpenMenu}>
          <MenuSVG className="w-12" />
        </button>
      </div>
      {isMenuOpen && <Menu onClose={handleCloseMenu} />}
    </nav>
  );
}
