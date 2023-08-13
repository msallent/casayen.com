import Balancer from 'react-wrap-balancer';
import classNames from 'classnames';
import { Title } from '@/components/Title';
import StarsSVG from '@/assets/svgs/stars-2.svg';

type TitlePageProps = {
  title: string;
  subtitle?: string;
  vertical?: boolean;
};

export function TitlePage({ title, subtitle, vertical }: TitlePageProps) {
  return (
    <div
      className={classNames(
        'flex flex-col items-center justify-center text-center uppercase text-primary-blue',
        { 'xl:relative xl:items-start xl:text-left': vertical }
      )}
    >
      <StarsSVG
        className={classNames(
          'mx-auto mb-4 mt-2 h-6 w-6 xl:mt-0 xl:h-10 xl:w-10 2xl:h-16 2xl:w-16',
          vertical
            ? 'xl:absolute xl:right-0 xl:-top-8 xl:mb-0 2xl:-right-8 2xl:-top-14 3xl:right-0'
            : 'xl:mb-8'
        )}
      />
      <Title>{title}</Title>
      {subtitle && (
        <div className={classNames('mt-4 xl:mt-1 xl:w-3/4', { 'xl:w-auto': vertical })}>
          <Balancer>{subtitle}</Balancer>
        </div>
      )}
    </div>
  );
}
