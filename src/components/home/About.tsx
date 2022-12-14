import Image from 'next/image';
import { Title } from '@/components/Title';
import StarsYenSVG from '@/assets/svgs/stars-yen.svg';
import backgroundImage from '@/assets/images/background-1.png';

export function About() {
  return (
    <section className="mt-14 mx-5 text-primary-blue">
      <StarsYenSVG className="mb-14" />
      <div className="relative text-center">
        <div className="mb-4">¿QUÉ ES YEN?</div>
        <Title size="small">Yen es un proyecto de Sexualidad Consciente</Title>
        <div className="mt-4 uppercase leading-[18px]">
          Un espacio para la liberación del cuerpo y el corazón, la recuperación del placer, la
          soberanía y la autogestión.{' '}
          <span className="italic font-serif">
            Viene a derribar mandatos y a trabajar el trauma que nos habita
          </span>{' '}
          producto de tantas generaciones en las que la sexualidad fue tabú y herramienta de
          sometimiento del alma. La propuesta es trabajo de la sombra desde una óptica super
          occidental.
        </div>
        <Image
          alt="Yen"
          src={backgroundImage}
          className="absolute top-0 right-0 opacity-60 -z-10"
        />
        <Image
          alt="Yen"
          src={backgroundImage}
          className="absolute top-[35%] left-0 opacity-60 -z-10"
        />
      </div>
    </section>
  );
}
