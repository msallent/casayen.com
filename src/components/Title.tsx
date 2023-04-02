import { ReactNode } from 'react';
import classNames from 'classnames';

type TitleSize = 'small' | 'default';
type TitleVariant = 'primary' | 'secondary';

type TitleProps = {
  size?: TitleSize;
  variant?: TitleVariant;
  children: ReactNode;
};

export function Title({ size = 'default', variant = 'primary', children }: TitleProps) {
  return (
    <h1
      className={classNames(
        'font-title-full',
        { 'text-[4.285rem] leading-[78.5%] xl:text-[10rem]': size === 'default' },
        { 'text-[2.85rem] leading-[78.5%] xl:text-[3.75rem]': size === 'small' },
        { 'text-primary-blue': variant === 'primary' },
        { 'text-primary-black': variant === 'secondary' }
      )}
    >
      {children}
    </h1>
  );
}
