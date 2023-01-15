import { createPortal } from 'react-dom';
import { Link } from '@/components/Link';
import { Button } from '@/components/Button';
import CloseSVG from '@/assets/svgs/close.svg';
import StarsSVG from '@/assets/svgs/stars-2.svg';
import YenLogoSVG from '@/assets/svgs/yen-logo.svg';

const MENU_LINKS = [
  { label: 'Home', path: '/' },
  { label: 'Yoniverse', path: '/' },
  { label: 'Talleres Online', path: '/talleres-online' },
  { label: 'Presenciales', path: '/' },
  { label: 'Yen', path: '/detras-de-yen' },
  { label: 'Blog', path: '/blog' },
  { label: 'FAQ', path: '/faq' },
  { label: 'Contacto', path: '/contacto' },
] as const;

type MenuProps = {
  onClose: () => void;
};

export function Menu({ onClose }: MenuProps) {
  return createPortal(
    <div className="fixed inset-0 px-5 py-[30px] overflow-auto z-10 bg-primary-blue">
      <div className="flex items-center justify-between">
        <YenLogoSVG className="h-8" />

        <button type="button" aria-label="Cerrar menu" onClick={onClose}>
          <CloseSVG className="w-8 h-8 text-white" />
        </button>
      </div>

      <StarsSVG className="w-6 h-6 mt-2 mx-auto mb-3" />

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

      <ul className="space-y-6 mt-12">
        {MENU_LINKS.map((link, index) => (
          <li key={index}>
            <Link href={link.path}>{link.label}</Link>
          </li>
        ))}
      </ul>
    </div>,
    document.body
  );
}
