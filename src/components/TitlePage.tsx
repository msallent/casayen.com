import { ReactNode } from 'react';
import { Title } from '@/components/Title';
import SmallStarsSVG from '@/assets/svgs/small-stars.svg';

type TitlePageProps = {
  children: ReactNode;
};

export function TitlePage({ children }: TitlePageProps) {
  return (
    <div className="flex flex-col justify-center items-center">
      <SmallStarsSVG className="w-6 h-6 mt-2 mx-auto mb-4 text-primary-blue" />
      <Title>{children}</Title>
    </div>
  );
}
