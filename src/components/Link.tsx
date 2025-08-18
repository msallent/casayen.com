import { ReactNode } from 'react';
import NextLink from 'next/link';

type LinkProps = {
  href: string;
  external: boolean;
  children: ReactNode;
};

export function Link({ href, external, children }: LinkProps) {
  const Component = external ? 'a' : NextLink;

  return (
    <Component
      href={href}
      target={external ? '_blank' : undefined}
      className="font-title-full flex justify-between border-b border-primary-black pb-3 text-[2.85rem] uppercase text-primary-black"
    >
      {children}
      <span>→</span>
    </Component>
  );
}
