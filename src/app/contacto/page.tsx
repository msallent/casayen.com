import Image from 'next/image';
import { Badge } from '@/components/Badge';
import { Title } from '@/components/Title';
import GridSVG from '@/assets/svgs/grid.svg';
import Globes1SVG from '@/assets/svgs/globes-1.svg';
import Globes2SVG from '@/assets/svgs/globes-2.svg';
import EllipsisSVG from '@/assets/svgs/ellipsis-4.svg';
import ChevronSVG from '@/assets/svgs/chevron.svg';
import backgroundGradient from '@/assets/images/gradient-3.png';

export default function Contacto() {
  return (
    <section className="mt-16 mx-5">
      <div className="uppercase text-primary-blue">
        <div className="flex items-baseline justify-between pt-7 pb-3 border-y border-primary-blue">
          <Title>Tenés dudas /</Title>
          <Globes1SVG className="h-5" />
        </div>
        <div className="flex items-baseline justify-between pt-7 pb-3 border-b border-primary-blue">
          <Globes2SVG className="h-5" />
          <div className="relative flex items-center">
            <Title>comentarios?</Title>
            <div className="absolute font-title-full top-[-12px] left-[-25px] text-[30px] rotate-90">
              ‡
            </div>
          </div>
        </div>
        <div className="flex items-baseline justify-end pt-7 pb-3 border-b border-primary-blue">
          <div className="relative flex items-center">
            <Title>→→ hablemos</Title>
            <EllipsisSVG className="absolute top-[-15px] right-[-20px] w-full" />
          </div>
        </div>

        <ul className="mt-10 mb-16 space-y-5">
          <li className="flex items-center gap-5">
            <ChevronSVG className="rotate-[270deg] w-5" />
            <div>
              <Badge>Yen</Badge>
              <Badge>info@casayen.com</Badge>
            </div>
          </li>
          <li className="flex items-center gap-5">
            <ChevronSVG className="rotate-[270deg] w-5" />
            <div>
              <Badge>Shop</Badge>
              <Badge>shop@casayen.com</Badge>
            </div>
          </li>
          <li className="flex items-center gap-5">
            <ChevronSVG className="rotate-[270deg] w-5" />
            <div>
              <Badge>Instagram</Badge>
              <Badge>@casa.yen</Badge>
            </div>
          </li>
        </ul>

        <div className="h-[45px]">
          <GridSVG />
        </div>
      </div>

      <Image
        aria-hidden
        src={backgroundGradient}
        alt="Background gradient"
        className="absolute top-0 left-0 w-full -z-10"
        loading="eager"
        priority
      />
    </section>
  );
}
