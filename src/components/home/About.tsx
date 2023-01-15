import Image from 'next/image';
import { Title } from '@/components/Title';
import YenStarsSVG from '@/assets/svgs/yen-stars.svg';
import homeUterusImage from '@/assets/images/home-uterus.webp';

export function About() {
  return (
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
  );
}
