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
      className="flex justify-between font-title-full uppercase text-[40px] pb-3 border-b border-primary-black text-primary-black"
    >
      {children}
      <span>→</span>
    </NextLink>
  );
}
