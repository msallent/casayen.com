import Image from 'next/image';
import { List } from '@/components/talleres-online/List';
import { TitlePage } from '@/components/TitlePage';
import backgroundGradient from '@/assets/images/gradient-1.png';

export default function Talleres() {
  return (
    <section className="mt-4 mx-5">
      <TitlePage>TALLERES ONLINE</TitlePage>

      <div className="uppercase mt-4 text-center text-primary-blue">
        En esta sección vas a encontrar TODOS los talleres pregrabados para que hagas a tu propio
        ritmo.
      </div>

      <List />

      <Image
        aria-hidden
        src={backgroundGradient}
        alt="Background gradient"
        className="absolute top-0 left-0 w-full -z-10"
        placeholder="blur"
        priority
      />
    </section>
  );
}
