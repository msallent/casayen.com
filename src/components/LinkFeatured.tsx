import { ReactNode } from 'react';
import NextLink from 'next/link';
import classNames from 'classnames';
import SnowflakeSVG from '@/assets/svgs/snowflake.svg';

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
      <SnowflakeSVG className="absolute top-1/2 left-0 w-2 -translate-y-1/2" />

      <div className="relative w-full text-center">
        <span className="absolute top-[-20%] font-sans text-xs">
          {index.toString().padStart(2, '0')}
        </span>
        <span className="ml-5">{children} →</span>
      </div>

      <SnowflakeSVG className="absolute top-1/2 right-0 w-2 -translate-y-1/2" />
    </NextLink>
  );
}
