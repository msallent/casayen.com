import { ReactNode } from 'react';
import classNames from 'classnames';

type TitleSize = 'small' | 'default';

type TitleProps = {
  size?: TitleSize;
  children: ReactNode;
};

export function Title({ size = 'default', children }: TitleProps) {
  return (
    <h1
      className={classNames(
        'font-title-full text-primary-blue',
        { 'text-[200px]': size === 'default' },
        { 'text-[60px]': size === 'small' }
      )}
    >
      {children}
    </h1>
  );
}
