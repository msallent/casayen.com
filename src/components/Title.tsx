import { ReactNode } from 'react';

type TitleProps = {
  children: ReactNode;
};

export function Title({ children }: TitleProps) {
  return <h1 className="font-title-full text-[200px] text-primary-blue">{children}</h1>;
}
