import { useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
import { clearAllBodyScrollLocks, disableBodyScroll } from 'body-scroll-lock';
import { Link } from '@/components/Link';
import { Button } from '@/components/Button';
import { Link as TLink } from '@/types/contentful';
import CloseSVG from '@/assets/svgs/close.svg';
import StarsSVG from '@/assets/svgs/stars-2.svg';
import YenLogoSVG from '@/assets/svgs/yen-logo.svg';

type MenuProps = {
  items: Array<TLink>;
  onClose: () => void;
};

export function Menu({ items, onClose }: MenuProps) {
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (menuRef.current) disableBodyScroll(menuRef.current);
    return () => clearAllBodyScrollLocks();
  }, []);

  return createPortal(
    <div
      ref={menuRef}
      className="fixed inset-0 z-10 overflow-auto bg-primary-blue px-5 py-9 sm:px-10"
    >
      <div className="flex items-center justify-between">
        <YenLogoSVG className="h-8" />

        <button type="button" aria-label="Cerrar menu" onClick={onClose}>
          <CloseSVG className="h-8 w-8 text-white" />
        </button>
      </div>

      <StarsSVG className="mx-auto mt-2 mb-3 h-6 w-6" />

      <Button variant="secondary">
        <a
          className="flex h-full items-center justify-center"
          href="https://shop.casayen.com"
          target="_blank"
          rel="noreferrer"
        >
          IR AL SHOP ONLINE →
        </a>
      </Button>

      <ul className="mt-12 space-y-6">
        {items.map((link, index) => (
          <li key={index}>
            <Link href={link.url}>{link.label}</Link>
          </li>
        ))}
      </ul>
    </div>,
    document.body
  );
}
