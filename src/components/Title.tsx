import { ReactNode } from 'react';
import classNames from 'classnames';

type TitleVariant = 'primary' | 'secondary';

type TitleProps = {
  variant?: TitleVariant;
  children: ReactNode;
};

export function Title({ variant = 'primary', children }: TitleProps) {
  return (
    <h1
      className={classNames(
        'font-title-full text-[60px] text-primary-blue',
        { 'text-primary-blue': variant === 'primary' },
        { 'text-primary-black': variant === 'secondary' }
      )}
    >
      {children}
    </h1>
  );
}
