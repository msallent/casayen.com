import { ReactNode } from 'react';
import NextLink from 'next/link';

type LinkProps = {
  href: string;
  children: ReactNode;
};

export function Link({ href, children }: LinkProps) {
  return (
    <NextLink
      href={href}
      className="font-title-full flex justify-between border-b border-primary-black pb-3 text-[2.85rem] uppercase text-primary-black"
    >
      {children}
      <span>→</span>
    </NextLink>
  );
}
