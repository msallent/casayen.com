import { ReactNode } from 'react';
import { Title } from '@/components/Title';
import StarsSVG from '@/assets/svgs/stars-2.svg';

type TitlePageProps = {
  children: ReactNode;
};

export function TitlePage({ children }: TitlePageProps) {
  return (
    <div className="flex flex-col items-center justify-center">
      <StarsSVG className="mx-auto mt-2 mb-4 h-6 w-6 text-primary-blue" />
      <Title>{children}</Title>
    </div>
  );
}
