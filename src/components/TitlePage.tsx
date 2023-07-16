import Balancer from 'react-wrap-balancer';
import { Title } from '@/components/Title';
import StarsSVG from '@/assets/svgs/stars-2.svg';

type TitlePageProps = {
  title: string;
  subtitle?: string;
};

export function TitlePage({ title, subtitle }: TitlePageProps) {
  return (
    <div className="flex flex-col items-center justify-center text-center uppercase text-primary-blue">
      <StarsSVG className="mx-auto mb-4 mt-2 h-6 w-6 xl:mb-8 xl:mt-0 xl:h-10 xl:w-10" />
      <Title>{title}</Title>
      {subtitle && (
        <div className="mt-4 xl:mt-1 xl:w-3/4">
          <Balancer>{subtitle}</Balancer>
        </div>
      )}
    </div>
  );
}
