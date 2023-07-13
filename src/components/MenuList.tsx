import NextLink from 'next/link';
import { Button } from '@/components/Button';
import { Link } from '@/types/contentful';

type MenuListProps = {
  items: Array<Link>;
};

export function MenuList({ items }: MenuListProps) {
  return (
    <div className="w-56">
      <Button>
        <a
          className="flex h-full items-center justify-center"
          href="https://shop.casayen.com"
          target="_blank"
          rel="noreferrer"
        >
          SHOP ONLINE
        </a>
      </Button>

      <ul className="mt-6 text-right uppercase text-primary-blue">
        {items.map((link, index) => (
          <li key={index}>
            <NextLink href={link.url} className="hover:text-secondary-white">
              {link.label}
            </NextLink>
          </li>
        ))}
      </ul>
    </div>
  );
}
