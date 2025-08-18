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
      <Button>
        <a
          className="flex h-full items-center justify-center"
          href="https://shop.casayen.com"
          target="_blank"
        >
          SHOP ARGENTINA
        </a>
      </Button>

      <ul className="mt-6 text-right uppercase text-primary-blue">
        {items.map((link, index) => {
          const Component = link.external ? 'a' : NextLink;

          return (
            <li key={index}>
              <Component
                href={link.url}
                target={link.external ? '_blank' : undefined}
                className="hover:text-secondary-white"
              >
                {link.label} {currentPath === link.url && '←'}
              </Component>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
