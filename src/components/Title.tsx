import { ReactNode } from 'react';

type TitleProps = {
  children: ReactNode;
};

export function Title({ children }: TitleProps) {
  return (
    <h1 className="font-title text-[200px] leading-[78.5%] tracking-[-0.02em] [text-shadow:0_0_19px_rgba(0,59,195,0.4)] text-primary-blue">
      {children}
    </h1>
  );
}
