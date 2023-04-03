import { ReactNode } from 'react';
import NextLink from 'next/link';
import SnowflakeSVG from '@/assets/svgs/snowflake.svg';
import classNames from 'classnames';

type LinkProps = {
  href: string;
  index: number;
  children: ReactNode;
  isLast?: boolean;
};

export function LinkFeatured({ href, index, children, isLast }: LinkProps) {
  return (
    <NextLink
      href={href}
      className="font-title-full relative flex justify-between text-[2.85rem] uppercase leading-[78.5%] xl:text-[3.75rem]"
    >
      <SnowflakeSVG className="absolute left-0 top-1/2 w-2 -translate-y-1/2 xl:w-5" />

      <div
        className={classNames(
          'relative w-full border-t border-primary-blue pt-8 pb-4 text-center xl:mx-auto xl:w-[45rem] xl:pt-10 xl:pb-6',
          { 'border-b': isLast }
        )}
      >
        <span className="absolute top-6 font-sans text-xs xl:top-8">
          {index.toString().padStart(2, '0')}
        </span>
        <span className="ml-5">{children} →</span>
      </div>

      <SnowflakeSVG className="absolute right-0 top-1/2 w-2 -translate-y-1/2 xl:w-5" />
    </NextLink>
  );
}
