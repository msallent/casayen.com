import Image from 'next/image';
import { LinkFeatured } from '@/components/LinkFeatured';
import GlobeSVG from '@/assets/svgs/globe.svg';
import ChevronSVG from '@/assets/svgs/chevron.svg';
import EllipsisSVG from '@/assets/svgs/ellipsis-2.svg';
import TextEllipsisSVG from '@/assets/svgs/text-ellipsis.svg';
import backgroundGradient from '@/assets/images/gradient-2.webp';

const LINKS = [
  { label: 'Yoniverse', path: '/' },
  { label: 'Talleres Online', path: '/talleres-online' },
  { label: 'Presenciales', path: '/' },
] as const;

export function Links() {
  return (
    <section className="relative mt-32 text-primary-blue">
      <div className="ml-5 flex flex-col">
        <span className="leading-5">UNITE AL</span>
        <span className="leading-5">VIAJE</span>
        <ChevronSVG className="mt-2.5 ml-px w-3" />
      </div>

      <div className="relative mt-9 mb-16">
        <GlobeSVG className="mx-auto h-[50px] w-[50px]" />
        <EllipsisSVG className="absolute top-1/2 left-1/2 h-[345px] -translate-x-1/2 -translate-y-1/2" />
        <TextEllipsisSVG className="absolute top-1/2 left-1/2 h-[276px] -translate-x-1/2 -translate-y-1/2" />
      </div>

      <div className="mr-5 flex flex-col">
        <span className="text-right leading-5">UNITE AL</span>
        <span className="text-right leading-5">VIAJE</span>
        <ChevronSVG className="ml-auto mt-2.5 mr-px w-3" />
      </div>

      <Image
        aria-hidden
        src={backgroundGradient}
        alt="Background gradient"
        className="absolute -top-1/2 right-0 -z-10"
        placeholder="blur"
      />

      <ul className="mx-5 mt-20">
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
