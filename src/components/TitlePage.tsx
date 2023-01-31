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
      <StarsSVG className="mx-auto mt-2 mb-4 h-6 w-6" />
      <Title>{title}</Title>
      {subtitle && (
        <div className="mt-4">
          <Balancer>{subtitle}</Balancer>
        </div>
      )}
    </div>
  );
}
