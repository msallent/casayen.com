import Image from 'next/image';
import { Title } from '@/components/Title';
import { TitlePage } from '@/components/TitlePage';
import { tags } from '@/constants/tags';
import { parseRichText } from '@/utils/richText';
import { fetchContent } from '@/utils/fetch';
import { PageYenData } from '@/types/contentful';
import GridSVG from '@/assets/svgs/grid.svg';
import Star1SVG from '@/assets/svgs/star-1.svg';
import Star2SVG from '@/assets/svgs/star-2.svg';
import InstagramSVG from '@/assets/svgs/instagram.svg';
import GradientYenSVG from '@/assets/svgs/gradient-yen.svg';
import yenCamiImage from '@/assets/images/yen-cami.webp';
import yenUterusImage from '@/assets/images/yen-uterus.webp';
import backgroundGradient1 from '@/assets/images/gradient-1.webp';
import backgroundGradient2 from '@/assets/images/gradient-2.webp';

export default async function Yen() {
  const {
    data: {
      pageYen: { title, subtitle, description },
    },
  } = await fetchContent<PageYenData>(
    `query PageYen {
    pageYen(id: "${process.env.CONTENTFUL_PAGE_YEN_ID}") {
      title
      subtitle
      description {
        json
      }
    }
  }`,
    { next: { tags: [tags.yen] } }
  );

  return (
    <>
      <section className="mx-5 sm:mx-10 lg:mx-20 2xl:mx-48">
        <TitlePage title={title} subtitle={subtitle} />

        <div className="relative mb-8 xl:absolute xl:right-32 xl:top-44 2xl:right-36 2xl:top-52 3xl:right-48 3xl:top-48">
          <Image
            src={yenCamiImage}
            className="mt-2 sm:mx-auto sm:w-4/5 md:w-4/6 lg:w-3/5 xl:w-[25rem] 2xl:w-[30rem] 3xl:w-[34rem]"
            alt="Cami Yen"
            placeholder="blur"
            quality={100}
            priority
          />
          <Star1SVG className="absolute bottom-[-3%] left-[-5%] w-36 sm:bottom-[-1%] sm:left-[8%] md:bottom-[-2%] md:left-[15%] lg:bottom-[-3%] lg:left-[17%] xl:bottom-[-3%] xl:left-[-5%]" />
        </div>

        <div className="mt-20">
          <Title size="small">Hola, soy Cami :)</Title>
        </div>

        <div className="mt-2.5 space-y-6 text-primary-blue xl:max-w-xl">
          {parseRichText(description.json)}
        </div>

        <Image
          aria-hidden
          src={backgroundGradient2}
          alt="Background gradient"
          className="pointer-events-none absolute right-0 top-0 -z-10"
          placeholder="blur"
        />

        <div className="mb-16 mt-20 flex flex-col items-center justify-center text-center xl:my-32 2xl:my-40">
          <div className="mb-4 flex items-center gap-2 xl:mb-6 2xl:mb-8">
            <div className="w-10 border border-primary-blue" />
            <span className="font-medium uppercase text-primary-blue">Convertí mi proceso de</span>
          </div>
          <div className="relative">
            <div className="xl:hidden">
              <Title>
                <div>Desintoxicación</div>
                <div>y Reconexión en</div>
                <div>el Eje Central</div>
                <div>de mi Vida</div>
              </Title>
            </div>
            <div className="hidden xl:block">
              <Title>
                <div>Desintoxicación y</div>
                <div>Reconexión en el Eje</div>
                <div>Central de mi Vida</div>
              </Title>
            </div>
            <Image
              src={yenUterusImage}
              className="inset-center absolute w-56 pb-3 lg:w-64 2xl:w-96"
              placeholder="blur"
              alt="Uterus"
            />
          </div>
        </div>

        <div className="flex flex-col items-end space-y-5 text-primary-blue xl:absolute xl:right-20 xl:mt-20 xl:items-start xl:text-xl 2xl:right-48">
          <div>↓ CONTACTAME ↓</div>
          <div className="xl:my-4">
            <div>↓</div>
            <div>↓</div>
          </div>
          <div className="flex flex-col items-end space-y-0.5 text-xl xl:items-start xl:text-3xl">
            <a href="mailto:info@casayen.com">info@casayen.com</a>
            <a
              className="flex items-center"
              aria-label="Instagram"
              href="https://instagram.com/casa.yen"
              target="_blank"
              rel="noreferrer"
            >
              <InstagramSVG className="mr-2.5 w-5" />
              <span>@casa.yen</span>
            </a>
          </div>
        </div>

        <Image
          aria-hidden
          src={backgroundGradient1}
          alt="Background gradient"
          className="pointer-events-none absolute left-0 top-0 -z-10 w-full xl:hidden"
          placeholder="blur"
        />
      </section>

      <div className="relative mt-8 h-80 sm:h-[25rem] xl:h-[55rem] 2xl:h-[65rem] 3xl:h-[75rem]">
        <GradientYenSVG />
        <Star2SVG className="absolute left-[40%] top-0 w-20 xl:w-40 2xl:w-48" />
        <Star2SVG className="absolute bottom-[16%] left-0 w-48 sm:bottom-[16%] sm:left-2 md:bottom-[14%] md:left-6 lg:left-8 xl:bottom-[9.25%] xl:left-16 xl:w-[30rem] 2xl:bottom-[12.5%] 2xl:left-[4.5rem] 2xl:w-[38rem] 3xl:bottom-[23.25%] 3xl:left-24 3xl:w-[34rem]" />
        <GridSVG className="absolute bottom-0 left-1/2 w-full -translate-x-1/2 px-5 sm:-bottom-14 md:-bottom-28 lg:-bottom-32 xl:opacity-40" />
      </div>
    </>
  );
}
