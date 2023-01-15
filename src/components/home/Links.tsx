import Image from 'next/image';
import { LinkFeatured } from '@/components/LinkFeatured';
import GlobeSVG from '@/assets/svgs/globe.svg';
import ChevronSVG from '@/assets/svgs/chevron.svg';
import EllipsisSVG from '@/assets/svgs/ellipsis-2.svg';
import TextEllipsisSVG from '@/assets/svgs/text-ellipsis.svg';
import backgroundGradient from '@/assets/images/gradient-2.png';

const LINKS = [
  { label: 'Yoniverse', path: '/' },
  { label: 'Talleres Online', path: '/talleres-online' },
  { label: 'Presenciales', path: '/' },
] as const;

export function Links() {
  return (
    <section className="mt-32 relative text-primary-blue">
      <div className="flex flex-col ml-5">
        <span className="leading-5">UNITE AL</span>
        <span className="leading-5">VIAJE</span>
        <ChevronSVG className="w-3 mt-2.5 ml-px" />
      </div>

      <div className="relative mt-9 mb-16">
        <GlobeSVG className="w-[50px] h-[50px] mx-auto" />
        <EllipsisSVG className="absolute h-[345px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
        <TextEllipsisSVG className="absolute h-[276px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
      </div>

      <div className="flex flex-col mr-5">
        <span className="leading-5 text-right">UNITE AL</span>
        <span className="leading-5 text-right">VIAJE</span>
        <ChevronSVG className="w-3 ml-auto mt-2.5 mr-px" />
      </div>

      <Image
        aria-hidden
        src={backgroundGradient}
        alt="Background gradient"
        className="absolute -top-1/2 right-0 -z-10"
      />

      <ul className="mt-20 mx-5">
        {LINKS.map((link, index) => (
          <li key={index}>
            <LinkFeatured
              href={link.path}
              index={index + 1}
              withBottomBorder={index === LINKS.length - 1}
            >
              {link.label}
            </LinkFeatured>
          </li>
        ))}
      </ul>
    </section>
  );
}
