import NextLink from 'next/link';
import { Button } from '@/components/Button';
import { Link } from '@/types/contentful';

type MenuListProps = {
  items: Array<Link>;
  currentPath: string;
};

export function MenuList({ items, currentPath }: MenuListProps) {
  return (
    <div className="w-56">
      <div className="flex flex-col gap-4">
        <Button>
          <a
            className="flex h-full items-center justify-center"
            href="https://shop.casayen.com"
            target="_blank"
            rel="noreferrer"
          >
            SHOP ARGENTINA
          </a>
        </Button>

        <Button>
          <a
            className="flex h-full items-center justify-center"
            href="https://europe.casayen.com/"
            target="_blank"
            rel="noreferrer"
          >
            SHOP EUROPA
          </a>
        </Button>
      </div>

      <ul className="mt-6 text-right uppercase text-primary-blue">
        {items.map((link, index) => (
          <li key={index}>
            <NextLink href={link.url} className="hover:text-secondary-white">
              {link.label} {currentPath === link.url && '←'}
            </NextLink>
          </li>
        ))}
      </ul>
    </div>
  );
}
