import { ReactNode } from 'react';
import classNames from 'classnames';
import Balancer from 'react-wrap-balancer';

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
        'font-title-full text-primary-blue',
        { 'text-[60px]': size === 'default' },
        { 'text-[40px]': size === 'small' },
        { 'text-primary-blue': variant === 'primary' },
        { 'text-primary-black': variant === 'secondary' }
      )}
    >
      <Balancer>{children}</Balancer>
    </h1>
  );
}
