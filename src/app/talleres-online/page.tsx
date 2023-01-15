import Image from 'next/image';
import { List } from '@/components/talleres-online/List';
import { TitlePage } from '@/components/TitlePage';
import backgroundGradient from '@/assets/images/gradient-1.webp';

export default function Talleres() {
  return (
    <section className="mx-5 mt-4">
      <TitlePage>TALLERES ONLINE</TitlePage>

      <div className="mt-4 text-center uppercase text-primary-blue">
        En esta sección vas a encontrar TODOS los talleres pregrabados para que hagas a tu propio
        ritmo.
      </div>

      <List />

      <Image
        aria-hidden
        src={backgroundGradient}
        alt="Background gradient"
        className="absolute top-0 left-0 -z-10 w-full"
        placeholder="blur"
        priority
      />
    </section>
  );
}
