import Image from 'next/image';
import { Title } from '@/components/Title';
import { Button } from '@/components/Button';
import { LinkFeatured } from '@/components/LinkFeatured';
import { fetchContent } from '@/utils/fetch';
import { PageHomeData } from '@/types/contentful';
import GlobeSVG from '@/assets/svgs/globe.svg';
import RunesSVG from '@/assets/svgs/runes.svg';
import StarsSVG from '@/assets/svgs/stars-1.svg';
import GlyphsSVG from '@/assets/svgs/glyphs.svg';
import ChevronSVG from '@/assets/svgs/chevron.svg';
import YenStarsSVG from '@/assets/svgs/yen-stars.svg';
import Ellipsis1SVG from '@/assets/svgs/ellipsis-1.svg';
import Ellipsis2SVG from '@/assets/svgs/ellipsis-2.svg';
import ChevronDouble from '@/assets/svgs/chevron-double.svg';
import TextEllipsisSVG from '@/assets/svgs/text-ellipsis.svg';
import GradientShopSVG from '@/assets/svgs/gradient-shop.svg';
import homeUterusImage from '@/assets/images/home-uterus.webp';
import backgroundGradient1 from '@/assets/images/gradient-1.webp';
import backgroundGradient2 from '@/assets/images/gradient-2.webp';

export default async function Home() {
  const { data } = await fetchContent<PageHomeData>(`query PageHome {
    pageHome(id: "${process.env.CONTENTFUL_PAGE_HOME_ID}") {
      featuredLinksCollection {
        items {
          label
          url
        }
      }
    }
  }`);

  const featuredLinks = data.pageHome.featuredLinksCollection.items;

  return (
    <>
      <section className="mt-24 text-primary-blue">
        <div className="font-title-full flex w-full flex-col text-[24vw]">
          <div className="relative ml-[4%] flex items-center gap-1.5">
            <div className="text-[60px]">→</div>
            <div className="w-20 text-right font-sans text-xs leading-[14px] tracking-normal">
              BIENVENIDX A TU
            </div>
            <h1>VIAJE</h1>
            <Ellipsis1SVG className="pointer-events-none absolute top-[-30%] left-[4%] z-10 w-[230px]" />
            <StarsSVG className="pointer-events-none absolute top-[-60%] left-[80%] z-10 w-[49px]" />
          </div>
          <h1 className="ml-[4%]">INTER-</h1>
          <h1 className="ml-[18%]">GALÁCTICO</h1>
          <h1 className="ml-[14%]">DE REPRO-</h1>
          <h1 className="ml-[4%]">GRAMACION</h1>
          <div className="relative ml-[23%] flex items-center">
            <h1>SEXUAL</h1>
            <div className="absolute top-[-54%] right-[25%] rotate-90 text-[40px]">‡</div>
          </div>
        </div>

        <ChevronDouble className="mx-auto mt-6 mb-10 w-6" />

        <div className="relative left-[-22px] whitespace-nowrap">
          COSMIC SEXUALITY<span className="mx-1.5">≈</span>COSMIC SEXUALITY
          <span className="mx-1.5">≈</span>COSMIC SEXUALITY
        </div>

        <Image
          aria-hidden
          src={backgroundGradient1}
          alt="Background gradient"
          className="absolute top-0 left-0 -z-10 w-full"
          placeholder="blur"
          priority
        />
      </section>

      <section className="mx-5 mt-14 text-primary-blue">
        <YenStarsSVG className="mb-14" />

        <div className="relative text-center">
          <div className="mb-4">¿QUÉ ES YEN?</div>

          <Title>Yen es un proyecto de Sexualidad Consciente</Title>

          <div className="mt-4 uppercase leading-[18px]">
            Un espacio para la liberación del cuerpo y el corazón, la recuperación del placer, la
            soberanía y la autogestión.{' '}
            <span className="font-serif italic">
              Viene a derribar mandatos y a trabajar el trauma que nos habita
            </span>{' '}
            producto de tantas generaciones en las que la sexualidad fue tabú y herramienta de
            sometimiento del alma. La propuesta es trabajo de la sombra desde una óptica super
            occidental.
          </div>

          <Image
            alt="Yen"
            src={homeUterusImage}
            className="absolute top-0 right-0 -z-10 opacity-60"
            placeholder="blur"
          />

          <Image
            alt="Yen"
            src={homeUterusImage}
            className="absolute top-[35%] left-0 -z-10 opacity-60"
            placeholder="blur"
          />
        </div>
      </section>

      <section className="relative mt-32 text-primary-blue">
        <div className="ml-5 flex flex-col">
          <span className="leading-5">UNITE AL</span>
          <span className="leading-5">VIAJE</span>
          <ChevronSVG className="mt-2.5 ml-px w-3" />
        </div>

        <div className="relative mt-9 mb-16">
          <GlobeSVG className="mx-auto h-[50px] w-[50px]" />
          <Ellipsis2SVG className="absolute top-1/2 left-1/2 h-[345px] -translate-x-1/2 -translate-y-1/2" />
          <TextEllipsisSVG className="absolute top-1/2 left-1/2 h-[276px] -translate-x-1/2 -translate-y-1/2" />
        </div>

        <div className="mr-5 flex flex-col">
          <span className="text-right leading-5">UNITE AL</span>
          <span className="text-right leading-5">VIAJE</span>
          <ChevronSVG className="ml-auto mt-2.5 mr-px w-3" />
        </div>

        <Image
          aria-hidden
          src={backgroundGradient2}
          alt="Background gradient"
          className="absolute -top-1/2 right-0 -z-10"
          placeholder="blur"
        />

        <ul className="mx-5 mt-20">
          {featuredLinks.map((link, index) => (
            <li key={index}>
              <LinkFeatured
                href={link.url}
                index={index + 1}
                withBottomBorder={index === featuredLinks.length - 1}
              >
                {link.label}
              </LinkFeatured>
            </li>
          ))}
        </ul>
      </section>

      <section className="relative mt-40 pb-20">
        <RunesSVG className="absolute top-[-45px] mx-5" />

        <div className="relative mx-5 flex flex-col items-center pt-40 text-center">
          <GlyphsSVG className="mb-8 w-28" />

          <Title variant="secondary">Productos YEN</Title>

          <div className="mt-4 mb-11 w-[330px] uppercase leading-[18px]">
            Encontrá en un solo lugar todas las herramientas que necesitás para embarcarte en tu
            viaje de auto-descubrimiento y reprogramación sexual. productos ética y responsablemente
            producidos.
          </div>

          <Button variant="secondary">
            <a
              className="flex h-full items-center justify-center"
              href="https://shop.casayen.com"
              target="_blank"
              rel="noreferrer"
            >
              IR AL SHOP ONLINE →
            </a>
          </Button>
        </div>

        <GradientShopSVG className="absolute top-0 -left-0 -z-10" />
      </section>
    </>
  );
}
