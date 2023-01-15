import Image from 'next/image';
import { List } from '@/components/faq/List';
import { TitlePage } from '@/components/TitlePage';
import backgroundGradient from '@/assets/images/gradient-1.webp';

export default function FAQ() {
  return (
    <section className="mx-5 mt-4">
      <TitlePage>F.A.Q.</TitlePage>

      <div className="mt-4 text-center uppercase text-primary-blue">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic ab esse illo fuga explicabo.
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
