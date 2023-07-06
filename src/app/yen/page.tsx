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
      <section className="mx-5 sm:mx-10 lg:mx-20">
        <TitlePage title={title} subtitle={subtitle} />

        <div className="relative mb-8">
          <Image
            src={yenCamiImage}
            className="mt-2 sm:mx-auto sm:w-4/5 md:w-4/6 lg:w-3/5"
            alt="Cami Yen"
            placeholder="blur"
            quality={100}
            priority
          />
          <Star1SVG className="absolute bottom-[-3%] left-[-5%] w-36 sm:bottom-[-1%] sm:left-[8%] md:bottom-[-2%] md:left-[15%] lg:bottom-[-3%] lg:left-[17%]" />
        </div>

        <Title size="small">Hola, soy Cami :)</Title>

        <div className="mt-2.5 space-y-6 text-primary-blue">
          <div>BIENVENIDX A LA CASA VIRTUAL DE YEN</div>
          <div>
            Tengo 32 años y soy de Buenos Aires, Argentina, viviendo entre la ciudad y la selva en
            Santa Teresa. Originalmente me forme como Licenciada en Comunicación y Master en
            Estrategias de Comunicación y Dirección de Arte de la Universidad Elisava de Barcelona.
            Trabajé en producción de moda y música durante varios años hasta que mi corazón me puso
            un freno, solté todo lo que creí que era y que quería ser.
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
            Trabajo con herramientas como el huevo Yoni y las vaporizaciones Yoni (de las que tengo
            mi propia línea de productos). Tengo programas grupales, talleres online y experiencias
            presenciales a través de los cuales comparto todo lo que se y que me ayudó a mi a
            transformar mi vida.
          </div>

          <div>
            Tuve la fortuna de instruirme con algunos seres increíbles como Sofia Sundari, Mantak
            Chia y Dr. Gabor Maté aunque soy muy autodidacta y estoy permanentemente en proceso de
            aprendizaje y formación. Mi herida, mi corazón y la vida misma son mis principales
            escuelas
          </div>
        </div>

        <Image
          aria-hidden
          src={backgroundGradient2}
          alt="Background gradient"
          className="absolute right-0 top-0 -z-10"
          placeholder="blur"
        />

        <div className="mb-16 mt-20 flex flex-col items-center justify-center text-center">
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
              className="inset-center absolute w-56 pb-3 lg:w-64"
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
          className="absolute left-0 top-0 -z-10 w-full"
          placeholder="blur"
        />
      </section>

      <div className="relative mt-8 h-80 sm:h-[25rem]">
        <GradientYenSVG />
        <Star2SVG className="absolute left-[40%] top-0 w-20" />
        <Star2SVG className="absolute bottom-[16%] left-0 w-48 sm:bottom-[16%] sm:left-2 md:bottom-[14%] md:left-6 lg:left-8" />
        <GridSVG className="absolute bottom-0 left-1/2 w-full -translate-x-1/2 px-5 sm:-bottom-14 md:-bottom-28 lg:-bottom-32" />
      </div>
    </>
  );
}
