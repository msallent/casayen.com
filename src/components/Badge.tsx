import { ReactNode } from 'react';

type BadgeProps = {
  children: ReactNode;
};

export function Badge({ children }: BadgeProps) {
  return (
    <span className="uppercase font-medium px-1.5 py-0.5 border rounded-[40px] border-primary-blue">
      {children}
    </span>
  );
}
