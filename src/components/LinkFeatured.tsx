import { ReactNode } from 'react';
import NextLink from 'next/link';
import SnowflakeSVG from '@/assets/svgs/snowflake.svg';
import classNames from 'classnames';

type LinkProps = {
  href: string;
  index: number;
  children: ReactNode;
  withBottomBorder?: boolean;
};

export function LinkFeatured({ href, index, children, withBottomBorder }: LinkProps) {
  return (
    <NextLink
      href={href}
      className={classNames(
        'flex justify-between relative font-title-full uppercase text-[40px] pt-8 pb-5 border-t border-primary-blue',
        { 'border-b': withBottomBorder }
      )}
    >
      <SnowflakeSVG className="absolute w-2 top-1/2 left-0 -translate-y-1/2" />
      <div className="relative text-center w-full">
        <span className="font-sans text-xs absolute top-[-20%]">
          {index.toString().padStart(2, '0')}
        </span>
        <span className="ml-5">{children} →</span>
      </div>
      <SnowflakeSVG className="absolute w-2 top-1/2 right-0 -translate-y-1/2" />
    </NextLink>
  );
}
