import Image from 'next/image';
import { Title } from '@/components/Title';
import { TitlePage } from '@/components/TitlePage';
import GridSVG from '@/assets/svgs/grid.svg';
import Star1SVG from '@/assets/svgs/star-1.svg';
import Star2SVG from '@/assets/svgs/star-2.svg';
import InstagramSVG from '@/assets/svgs/instagram.svg';
import GradientYenSVG from '@/assets/svgs/gradient-yen.svg';
import yenCamiImage from '@/assets/images/yen-cami.webp';
import yenUterusImage from '@/assets/images/yen-uterus.webp';
import backgroundGradient1 from '@/assets/images/gradient-1.webp';
import backgroundGradient2 from '@/assets/images/gradient-2.webp';

export default function Yen() {
  return (
    <>
      <section className="mx-5 mt-4">
        <TitlePage>DETRÁS DE YEN</TitlePage>

        <div className="relative mb-8">
          <Image
            src={yenCamiImage}
            className="mt-4 px-2"
            alt="Cami Yen"
            placeholder="blur"
            quality={100}
            priority
          />
          <Star1SVG className="absolute bottom-[-20px] left-[-15px] w-[130px]" />
        </div>

        <Title size="small">Hola, soy Cami :)</Title>
        <div className="mt-2.5 text-primary-blue">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium praesentium in
          repellendus placeat consequuntur culpa dicta, officia doloribus officiis deleniti totam
          harum atque quod? Voluptatum fugiat quibusdam atque temporibus esse! Beatae, quis aliquid
          vitae quo nesciunt eligendi consequuntur fugiat, maiores nihil ex in accusantium placeat,
          odit iure accusamus. Rem unde natus animi laudantium, inventore possimus voluptatem.
          Debitis facilis similique totam. Consequatur distinctio dolorum natus accusantium beatae
          sapiente nihil debitis? Sit iure nesciunt voluptatum, inventore explicabo est optio quos
          facere iusto dolores illo magni quibusdam provident ut minima. Rem, magnam in!
        </div>
        <div className="mt-2.5 text-primary-blue">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium praesentium in
          repellendus placeat consequuntur culpa dicta, officia doloribus officiis deleniti totam
          harum atque quod? Voluptatum fugiat quibusdam atque temporibus esse! Beatae, quis aliquid
          vitae quo nesciunt eligendi consequuntur fugiat, maiores nihil ex in accusantium placeat,
          odit iure accusamus. Rem unde natus animi laudantium, inventore possimus voluptatem.
          Debitis facilis similique totam. Consequatur distinctio dolorum natus accusantium beatae
          sapiente nihil debitis? Sit iure nesciunt voluptatum, inventore explicabo est optio quos
          facere iusto dolores illo magni quibusdam provident ut minima. Rem, magnam in!
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
              className="absolute top-1/2 left-1/2 w-[200px] -translate-x-1/2 -translate-y-1/2 pb-3"
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
          <div className="flex flex-col items-end space-y-0.5 text-2xl">
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