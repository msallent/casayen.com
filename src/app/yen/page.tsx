import Image from 'next/image';
import { Title } from '@/components/Title';
import { TitlePage } from '@/components/TitlePage';
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
      pageYen: { title, subtitle },
    },
  } = await fetchContent<PageYenData>(`query PageYen {
    pageYen(id: "${process.env.CONTENTFUL_PAGE_YEN_ID}") {
      title
      subtitle
    }
  }`);

  return (
    <>
      <section className="mx-5 mt-4">
        <TitlePage title={title} subtitle={subtitle} />

        <div className="relative mb-8">
          <Image
            src={yenCamiImage}
            className="mt-4 sm:mx-auto sm:w-4/5"
            alt="Cami Yen"
            placeholder="blur"
            quality={100}
            priority
          />
          <Star1SVG className="absolute bottom-[-20px] left-[-15px] w-[130px]" />
        </div>

        <Title size="small">Hola, soy Cami :)</Title>

        <div className="mt-2.5 space-y-6 text-primary-blue">
          <div>BIENVENIDX A LA CASA VIRTUAL DE YEN</div>
          <div>
            Tengo 31 años y soy de Buenos Aires, Argentina, viviendo entre la ciudad y la selva en
            Santa Teresa. Originalmente me forme con una licencitura en comunicación y tengo una
            Maestría en estrategias de comunicación y dirección de arte de la Universidad Elisava de
            Barcelona. Trabajé en producción de moda y música durante varios años hasta que mi
            corazón me puso un freno, solté todo lo que creí que era y que quería ser.
          </div>
          <div>
            Convertí mi proceso de desintoxicación y reconexión en el eje central de mi vida y hoy
            es mi trabajo. Encontrarme con mi sexualidad fue la experiencia más revolucionaria y
            transformadora de mi vida que me dio herramientas que simplemente no me pude quedar para
            mí.{' '}
            <span className="font-bold">
              Me dedico a la sanación sexual holística haciendo foco en el trabajo del trauma. La
              liberación de los cuerpos y la recuperación de la soberanía sobre la salud y el placer
              es mi absoluta pasión y misión.
            </span>{' '}
            Trabajo con herramientas como el huevo Yoni, las vaporizaciones Yoni (de las que tengo
            mi propia línea de productos) y la experiencia somática del Dr. Peter Levine. Tengo
            programas grupales, talleres online y experiencias presenciales a través de los cuales
            comparto todo lo que se.
          </div>
          <div>
            Además soy la productora general de los retiros que organizo junto a Mila de No Spoon en
            Costa Rica.
          </div>
          <div>
            Tuve la fortuna de instruirme con algunos seres increíbles como Sofia Sundari, Mantak
            Chia y Dr. Gabor Maté aunque soy muy autodidacta y estoy permanentemente en proceso de
            aprendizaje y formación.
          </div>
        </div>

        <Image
          aria-hidden
          src={backgroundGradient2}
          alt="Background gradient"
          className="absolute top-0 right-0 -z-10"
          placeholder="blur"
          priority
        />

        <div className="mt-20 mb-16 flex flex-col items-center justify-center text-center">
          <div className="mb-4 flex items-center gap-2">
            <div className="w-10 border border-primary-blue" />
            <span className="font-medium uppercase text-primary-blue">Convertí mi proceso de</span>
          </div>
          <div className="relative">
            <Title>
              <div>Desintoxicación</div>
              <div>y Reconexión en</div>
              <div>el Eje Central</div>
              <div>de mi Vida</div>
            </Title>
            <Image
              src={yenUterusImage}
              className="inset-center absolute w-[200px] pb-3"
              placeholder="blur"
              alt="Uterus"
            />
          </div>
        </div>

        <div className="flex flex-col items-end space-y-5 text-primary-blue">
          <div>↓ CONTACTAME ↓</div>
          <div>
            <div>↓</div>
            <div>↓</div>
          </div>
          <div className="flex flex-col items-end space-y-0.5 text-xl">
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
          className="absolute top-0 left-0 -z-10 w-full"
          placeholder="blur"
          priority
        />
      </section>

      <div className="relative mt-8 h-[280px]">
        <GradientYenSVG />
        <Star2SVG className="absolute left-[40%] top-0 w-[70px]" />
        <Star2SVG className="absolute left-0 bottom-[14.5%] w-[170px]" />
        <GridSVG className="absolute left-1/2 bottom-0 w-[calc(100%-2.5rem)] -translate-x-1/2" />
      </div>
    </>
  );
}
