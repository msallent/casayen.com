import Image from 'next/image';
import { List } from '@/components/faq/List';
import { TitlePage } from '@/components/TitlePage';
import backgroundGradient from '@/assets/images/gradient-1.png';

export default function FAQ() {
  return (
    <section className="mt-4 mx-5">
      <TitlePage>F.A.Q.</TitlePage>

      <div className="uppercase mt-4 text-center text-primary-blue">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic ab esse illo fuga explicabo.
      </div>

      <List />

      <Image
        aria-hidden
        src={backgroundGradient}
        alt="Background gradient"
        className="absolute top-0 left-0 w-full -z-10"
        loading="eager"
        priority
      />
    </section>
  );
}