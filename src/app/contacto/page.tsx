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
    <section className="mx-5 mt-16">
      <div className="uppercase text-primary-blue">
        <div className="flex items-baseline justify-between border-y border-primary-blue pt-7 pb-3">
          <Title>Tenés dudas /</Title>
          <Globes1SVG className="h-5" />
        </div>
        <div className="flex items-baseline justify-between border-b border-primary-blue pt-7 pb-3">
          <Globes2SVG className="h-5" />
          <div className="relative flex items-center">
            <Title>comentarios?</Title>
            <div className="font-title-full absolute top-[-12px] left-[-25px] rotate-90 text-[30px]">
              ‡
            </div>
          </div>
        </div>
        <div className="flex items-baseline justify-end border-b border-primary-blue pt-7 pb-3">
          <div className="relative flex items-center">
            <Title>→→ hablemos</Title>
            <EllipsisSVG className="absolute top-[-15px] right-[-20px] w-full" />
          </div>
        </div>

        <ul className="mt-10 mb-16 space-y-5">
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

        <div className="h-[75px]">
          <GridSVG />
        </div>
      </div>

      <Image
        aria-hidden
        src={backgroundGradient}
        alt="Background gradient"
        className="absolute top-0 left-0 -z-10 w-full"
        placeholder="blur"
        priority
      />
    </section>
  );
}
