import Image from 'next/image';
import { Title } from '@/components/Title';
import { TitlePage } from '@/components/TitlePage';
import camiImage from '@/assets/images/cami.png';
import uterusImage from '@/assets/images/uterus.png';
import StarSVG from '@/assets/svgs/star.svg';
import StarSlimSVG from '@/assets/svgs/star-slim.svg';
import GridSVG from '@/assets/svgs/grid.svg';
import InstagramSVG from '@/assets/svgs/instagram.svg';
import backgroundGradient1 from '@/assets/images/gradient-2.png';
import backgroundGradient2 from '@/assets/images/gradient-3.png';

export default function Yen() {
  return (
    <>
      <section className="mt-4 mx-5">
        <TitlePage>DETRÁS DE YEN</TitlePage>

        <div className="relative mb-8">
          <Image
            src={camiImage}
            className="mt-4 px-2"
            alt="Cami Yen"
            loading="eager"
            quality={100}
            priority
          />
          <StarSVG className="absolute bottom-[-20px] left-[-15px] w-[130px]" />
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
          src={backgroundGradient1}
          alt="Background gradient"
          className="absolute top-0 right-0 -z-10"
          loading="eager"
          priority
        />

        <div className="flex flex-col items-center justify-center text-center mt-20 mb-16">
          <div className="flex items-center gap-2 mb-4">
            <div className="w-10 border border-primary-blue" />
            <span className="uppercase font-medium text-primary-blue">Convertí mi proceso de</span>
          </div>
          <div className="relative">
            <Title>
              <div>Desintoxicación</div>
              <div>y Reconexión en</div>
              <div>el Eje Central</div>
              <div>de mi Vida</div>
            </Title>
            <Image
              src={uterusImage}
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[200px] pb-3"
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
          <div className="flex flex-col items-end text-2xl">
            <a href="mailto:info@casayen.com">info@casayen.com</a>
            <a
              className="flex items-center"
              aria-label="Instagram"
              href="https://instagram.com/casa.yen"
              target="_blank"
              rel="noreferrer"
            >
              <InstagramSVG className="w-5 mr-2.5" />
              <span>@casa.yen</span>
            </a>
          </div>
        </div>
      </section>

      <div className="relative mt-8">
        <Image
          aria-hidden
          src={backgroundGradient2}
          alt="Background gradient"
          className="w-full -z-10"
        />
        <StarSlimSVG className="absolute left-[40%] top-0 w-[70px]" />
        <StarSlimSVG className="absolute left-0 bottom-[14.5%] w-[170px]" />
        <GridSVG className="absolute left-1/2 -translate-x-1/2 bottom-0 w-[calc(100%-2.5rem)]" />
      </div>
    </>
  );
}
