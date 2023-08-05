import Image from 'next/image';
import Balancer from 'react-wrap-balancer';
import { Hero } from '@/components/Hero';
import { Shop } from '@/components/Shop';
import { Title } from '@/components/Title';
import { LinkFeatured } from '@/components/LinkFeatured';
import { fetchContent } from '@/utils/fetch';
import { PageHomeData } from '@/types/contentful';
import GlobeSVG from '@/assets/svgs/globe.svg';
import ChevronSVG from '@/assets/svgs/chevron.svg';
import YenStarsSVG from '@/assets/svgs/yen-stars.svg';
import YenStarsLargeSVG from '@/assets/svgs/yen-stars-large.svg';
import EllipsisSVG from '@/assets/svgs/ellipsis-2.svg';
import TextEllipsisSVG from '@/assets/svgs/text-ellipsis.svg';
import homeUterusImage from '@/assets/images/home-uterus.webp';
import backgroundGradient1 from '@/assets/images/gradient-1.webp';
import backgroundGradient2 from '@/assets/images/gradient-2.webp';

export default async function Home() {
  const {
    data: {
      pageHome: { featuredLinksCollection },
    },
  } = await fetchContent<PageHomeData>(`query PageHome {
    pageHome(id: "${process.env.CONTENTFUL_PAGE_HOME_ID}") {
      featuredLinksCollection {
        items {
          label
          url
        }
      }
    }
  }`);

  return (
    <>
      <section className="mt-20 text-primary-blue xl:mt-16">
        <Hero />

        <div className="relative -left-6 whitespace-nowrap">
          COSMIC SEXUALITY<span className="mx-1.5">≈</span>COSMIC SEXUALITY
          <span className="mx-1.5">≈</span>COSMIC SEXUALITY<span className="mx-1.5">≈</span>COSMIC
          SEXUALITY<span className="mx-1.5">≈</span>COSMIC SEXUALITY
          <span className="mx-1.5">≈</span>COSMIC SEXUALITY<span className="mx-1.5">≈</span>COSMIC
          SEXUALITY<span className="mx-1.5">≈</span>COSMIC SEXUALITY
          <span className="mx-1.5">≈</span>COSMIC SEXUALITY
        </div>

        <Image
          aria-hidden
          src={backgroundGradient1}
          alt="Background gradient"
          className="absolute left-0 top-0 -z-10 max-h-[1200px] w-full"
          placeholder="blur"
        />
      </section>

      <section className="mx-5 mt-16 text-primary-blue sm:mx-10 sm:mt-20 lg:mx-20 xl:mx-32 xl:mt-36">
        <YenStarsSVG className="mb-20 xl:hidden" />
        <YenStarsLargeSVG className="hidden xl:mb-20 xl:block" />

        <div className="relative text-center">
          <div className="mb-4 xl:text-xl">¿QUÉ ES YEN?</div>

          <Title>
            <Balancer>Yen es un proyecto de Sexualidad Consciente</Balancer>
          </Title>

          <div className="relative mt-4 uppercase leading-[129%]">
            <div className="xl:font-title-full hidden xl:absolute xl:-left-16 xl:top-2 xl:block xl:rotate-[270deg] xl:text-[5rem]">
              †
            </div>
            <Balancer>
              Un espacio para la liberación del cuerpo y el corazón, la recuperación del placer, la
              soberanía y la autogestión.{' '}
              <span className="font-serif italic">
                Viene a derribar mandatos y a trabajar el trauma que nos habita
              </span>{' '}
              producto de tantas generaciones en las que la sexualidad fue tabú y herramienta de
              sometimiento del alma. La propuesta es trabajo de la sombra desde una óptica super
              occidental.
            </Balancer>
            <div className="xl:font-title-full hidden xl:absolute xl:-right-16 xl:top-2 xl:block xl:rotate-90 xl:text-[5rem]">
              †
            </div>
          </div>

          <Image
            alt="Yen"
            src={homeUterusImage}
            className="absolute -top-8 right-0 -z-10 w-48 opacity-60 xl:-top-4 xl:w-72"
            placeholder="blur"
          />

          <Image
            alt="Yen"
            src={homeUterusImage}
            className="absolute left-0 top-[40%] -z-10 w-48 opacity-60 xl:top-[45%] xl:w-72"
            placeholder="blur"
          />
        </div>
      </section>

      <section className="relative mt-44 text-primary-blue sm:mt-52 xl:mt-[24rem]">
        <div className="mx-5 sm:mx-10 lg:mx-20 xl:mx-32 xl:flex xl:items-center xl:justify-between">
          <div className="flex flex-col">
            <span className="leading-5">UNITE AL</span>
            <span className="leading-5">VIAJE</span>
            <ChevronSVG className="ml-px mt-2.5 w-3" />
          </div>

          <div className="relative mb-16 mt-9 xl:my-0">
            <GlobeSVG className="mx-auto h-14 w-14" />
            <EllipsisSVG className="inset-center absolute h-[25rem]" />
            <TextEllipsisSVG className="inset-center absolute h-[20rem]" />
          </div>

          <div className="flex flex-col">
            <span className="text-right leading-5">UNITE AL</span>
            <span className="text-right leading-5">VIAJE</span>
            <ChevronSVG className="ml-auto mr-px mt-2.5 w-3" />
          </div>
        </div>

        <Image
          aria-hidden
          src={backgroundGradient2}
          alt="Background gradient"
          className="absolute -top-1/2 right-0 -z-10"
          placeholder="blur"
        />

        <ul className="mx-5 mt-24 sm:mx-10 lg:mx-20 xl:mx-32 xl:mt-56">
          {featuredLinksCollection.items.map((link, index) => (
            <li key={index}>
              <LinkFeatured
                href={link.url}
                index={index + 1}
                isLast={index === featuredLinksCollection.items.length - 1}
              >
                {link.label}
              </LinkFeatured>
            </li>
          ))}
        </ul>
      </section>

      <Shop />
    </>
  );
}
