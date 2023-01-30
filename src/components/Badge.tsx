import { ReactNode } from 'react';

type BadgeProps = {
  children: ReactNode;
};

export function Badge({ children }: BadgeProps) {
  return (
    <span className="rounded-[3rem] border border-primary-blue px-1.5 py-0.5 font-medium uppercase">
      {children}
    </span>
  );
}
