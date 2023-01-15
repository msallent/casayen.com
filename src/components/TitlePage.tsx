import { ReactNode } from 'react';
import { Title } from '@/components/Title';
import StarsSVG from '@/assets/svgs/stars-2.svg';

type TitlePageProps = {
  children: ReactNode;
};

export function TitlePage({ children }: TitlePageProps) {
  return (
    <div className="flex flex-col justify-center items-center">
      <StarsSVG className="w-6 h-6 mt-2 mx-auto mb-4 text-primary-blue" />
      <Title>{children}</Title>
    </div>
  );
}
