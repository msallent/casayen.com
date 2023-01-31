import Image from 'next/image';
import { Badge } from '@/components/Badge';
import { Title } from '@/components/Title';
import GridSVG from '@/assets/svgs/grid.svg';
import Globes1SVG from '@/assets/svgs/globes-1.svg';
import Globes2SVG from '@/assets/svgs/globes-2.svg';
import EllipsisSVG from '@/assets/svgs/ellipsis-4.svg';
import ChevronSVG from '@/assets/svgs/chevron.svg';
import backgroundGradient from '@/assets/images/gradient-3.webp';

export default function Contacto() {
  return (
    <section className="relative mt-16">
      <div className="mx-5 uppercase text-primary-blue sm:mx-10">
        <div className="flex items-baseline justify-between border-y border-primary-blue pt-7 pb-3">
          <Title>Tenés dudas /</Title>
          <Globes1SVG className="h-5" />
        </div>
        <div className="flex items-baseline justify-between border-b border-primary-blue pt-7 pb-3">
          <Globes2SVG className="h-5" />
          <div className="relative flex items-center">
            <Title>comentarios?</Title>
            <div className="font-title-full absolute top-[-0.75rem] left-[-1.75rem] rotate-90 text-[2rem]">
              ‡
            </div>
          </div>
        </div>
        <div className="flex items-baseline justify-end border-b border-primary-blue pt-7 pb-3">
          <div className="relative flex items-center">
            <Title>→→ hablemos</Title>
            <EllipsisSVG className="absolute top-[-1rem] right-[-3rem] w-full" />
          </div>
        </div>

        <ul className="mt-10 mb-28 space-y-5">
          <li className="flex items-center gap-5">
            <ChevronSVG className="w-5 rotate-[270deg]" />
            <div>
              <Badge>Yen</Badge>
              <Badge>info@casayen.com</Badge>
            </div>
          </li>
          <li className="flex items-center gap-5">
            <ChevronSVG className="w-5 rotate-[270deg]" />
            <div>
              <Badge>Shop</Badge>
              <Badge>shop@casayen.com</Badge>
            </div>
          </li>
          <li className="flex items-center gap-5">
            <ChevronSVG className="w-5 rotate-[270deg]" />
            <div>
              <Badge>Instagram</Badge>
              <Badge>@casa.yen</Badge>
            </div>
          </li>
        </ul>

        <div className="h-20">
          <GridSVG />
        </div>
      </div>

      <Image
        aria-hidden
        src={backgroundGradient}
        alt="Background gradient"
        className="absolute -top-36 left-0 -z-10 w-full sm:-top-64 md:-top-96"
        placeholder="blur"
        priority
      />
    </section>
  );
}
