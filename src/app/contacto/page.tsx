import Image from 'next/image';
import { BadgeMulti } from '@/components/BadgeMulti';
import { Title } from '@/components/Title';
import GridSVG from '@/assets/svgs/grid.svg';
import Globes1SVG from '@/assets/svgs/globes-1.svg';
import Globes2SVG from '@/assets/svgs/globes-2.svg';
import EllipsisSVG from '@/assets/svgs/ellipsis-4.svg';
import backgroundGradient from '@/assets/images/gradient-3.webp';

export default function Contacto() {
  return (
    <section className="relative mt-10 xl:mt-40">
      <div className="mx-5 uppercase text-primary-blue sm:mx-10 lg:mx-20 xl:mx-10">
        <div className="flex items-baseline justify-between border-y border-primary-blue pb-3 pt-7">
          <div className="hidden xl:block xl:self-center">
            <BadgeMulti title="Yen" description="info@casayen.com" />
          </div>
          <Title>Tenés dudas /</Title>
          <Globes1SVG className="h-5 xl:h-10" />
        </div>
        <div className="flex items-baseline justify-between border-b border-primary-blue pb-3 pt-7">
          <Globes2SVG className="h-5 xl:h-10" />
          <div className="relative flex items-center">
            <Title>comentarios?</Title>
            <div className="font-title-full absolute left-[-1.75rem] top-[-0.75rem] rotate-90 text-[2rem] xl:left-[-3.75rem] xl:top-[-2.25rem] xl:text-7xl">
              ‡
            </div>
          </div>
          <div className="hidden xl:block xl:self-center">
            <BadgeMulti title="Shop" description="shop@casayen.com" />
          </div>
        </div>
        <div className="flex items-baseline justify-end border-b border-primary-blue pb-3 pt-7 xl:justify-between">
          <div className="hidden xl:block xl:self-center">
            <BadgeMulti title="Instagram" description="@casa.yen" />
          </div>
          <div className="relative flex items-center">
            <Title>→→ hablemos</Title>
            <EllipsisSVG className="absolute right-[-3rem] top-[-1rem] w-full xl:top-[-2rem]" />
          </div>
        </div>

        <ul className="mb-28 mt-10 space-y-5 xl:hidden">
          <li>
            <BadgeMulti title="Yen" description="info@casayen.com" />
          </li>
          <li>
            <BadgeMulti title="Shop" description="shop@casayen.com" />
          </li>
          <li>
            <BadgeMulti title="Instagram" description="@casa.yen" />
          </li>
        </ul>

        <div className="h-20 xl:mt-32">
          <GridSVG className="xl:opacity-50" />
        </div>
      </div>

      <Image
        aria-hidden
        src={backgroundGradient}
        alt="Background gradient"
        className="absolute -top-36 left-0 -z-10 w-full sm:-top-64 md:-top-96"
        placeholder="blur"
      />
    </section>
  );
}
