import Image from 'next/image';
import { BadgeMulti } from '@/components/BadgeMulti';
import { Title } from '@/components/Title';
import { openGraph } from '@/constants/metadata';
import GridSVG from '@/assets/svgs/grid.svg';
import Globes1SVG from '@/assets/svgs/globes-1.svg';
import Globes2SVG from '@/assets/svgs/globes-2.svg';
import EllipsisSVG from '@/assets/svgs/ellipsis-4.svg';
import backgroundGradient from '@/assets/images/gradient-3.webp';
import backgroundGradientLarge from '@/assets/images/gradient-3-large.webp';

const title = 'Contacto';
const description = 'Hablemos!';

export const metadata = {
  title,
  description,
  openGraph: { ...openGraph, title, description, url: '/contacto' },
};

export default function Contacto() {
  return (
    <section className="relative mt-10 xl:mt-[7.5rem]">
      <div className="mx-5 uppercase text-primary-blue sm:mx-10 lg:mx-20 xl:mx-10">
        <div className="flex items-baseline justify-between border-y border-primary-blue pb-3 pt-7">
          <div className="hidden xl:block xl:self-center">
            <a className="hover:text-secondary-white" href="mailto:info@casayen.com">
              <BadgeMulti title="Yen" description="info@casayen.com" />
            </a>
          </div>
          <Title>Tenés dudas /</Title>
          <Globes1SVG className="h-5 xl:h-10" />
        </div>
        <div className="flex items-baseline justify-between border-b border-primary-blue pb-3 pt-7">
          <Globes2SVG className="h-5 xl:h-10" />
          <div className="relative flex items-center">
            <Title>comentarios?</Title>
            <div className="font-title-full absolute -left-7 -top-3 rotate-90 text-[2rem] xl:-top-9 xl:left-[-3.75rem] xl:text-7xl">
              ‡
            </div>
          </div>
          <div className="hidden xl:block xl:self-center">
            <a className="hover:text-secondary-white" href="mailto:shop@casayen.com">
              <BadgeMulti title="Shop" description="shop@casayen.com" />
            </a>
          </div>
        </div>
        <div className="flex items-baseline justify-end border-b border-primary-blue pb-3 pt-7 xl:justify-between">
          <div className="hidden xl:block xl:self-center">
            <a
              className="flex items-center hover:text-secondary-white"
              aria-label="Instagram"
              href="https://instagram.com/casa.yen"
              target="_blank"
              rel="noreferrer"
            >
              <BadgeMulti title="Instagram" description="@casa.yen" />
            </a>
          </div>
          <div className="relative flex items-center xl:mr-20">
            <Title>→→ hablemos</Title>
            <EllipsisSVG className="absolute -right-12 -top-4 w-full xl:-right-32 xl:-top-8 xl:w-[110%]" />
          </div>
        </div>

        <ul className="mb-28 mt-10 space-y-5 xl:hidden">
          <li>
            <a href="mailto:info@casayen.com">
              <BadgeMulti title="Yen" description="info@casayen.com" />
            </a>
          </li>
          <li>
            <a href="mailto:shop@casayen.com">
              <BadgeMulti title="Shop" description="shop@casayen.com" />
            </a>
          </li>
          <li>
            <a
              className="flex items-center"
              aria-label="Instagram"
              href="https://instagram.com/casa.yen"
              target="_blank"
              rel="noreferrer"
            >
              <BadgeMulti title="Instagram" description="@casa.yen" />
            </a>
          </li>
        </ul>

        <div className="h-20 xl:mt-32 2xl:mt-56">
          <GridSVG className="xl:opacity-50" />
        </div>
      </div>

      <Image
        aria-hidden
        src={backgroundGradient}
        alt="Background gradient"
        className="pointer-events-none absolute -top-36 left-0 -z-10 w-full sm:-top-64 md:-top-96 xl:hidden"
        placeholder="blur"
      />

      <Image
        aria-hidden
        src={backgroundGradientLarge}
        alt="Background gradient"
        className="hidden xl:pointer-events-none xl:absolute xl:-bottom-24 xl:-right-32 xl:-z-10 xl:block"
        placeholder="blur"
      />
    </section>
  );
}
