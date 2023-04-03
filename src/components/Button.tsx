import { ReactNode } from 'react';
import classNames from 'classnames';

type ButtonVariant = 'primary' | 'secondary';

type ButtonProps = {
  children: ReactNode;
  variant?: ButtonVariant;
  onClick?: () => void;
};

export function Button({ children, variant = 'primary', onClick }: ButtonProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={classNames(
        'w-full h-16 rounded-sm font-serif font-medium uppercase tracking-[0.075em] [text-shadow:0_0_7px_rgba(255,255,255,0.65)] text-secondary-white xl:h-12',
        { 'bg-primary-blue': variant === 'primary' },
        { 'bg-primary-black': variant === 'secondary' }
      )}
    >
      {children}
    </button>
  );
}
