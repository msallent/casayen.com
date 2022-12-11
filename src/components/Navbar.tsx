'use client';

import { useState } from 'react';
import { Menu } from '@/components/Menu';
import YenSVG from '@/assets/svgs/yen.svg';
import MenuSVG from '@/assets/svgs/menu.svg';

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleOpenMenu = () => {
    setIsMenuOpen(true);
  };

  const handleCloseMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav className="mx-5 mt-[30px]">
      <div className="flex items-center justify-between">
        <YenSVG className="h-8" />
        <button type="button" aria-label="Abrir menu" onClick={handleOpenMenu}>
          <MenuSVG className="w-12" />
        </button>
      </div>
      {isMenuOpen && <Menu onClose={handleCloseMenu} />}
    </nav>
  );
}
