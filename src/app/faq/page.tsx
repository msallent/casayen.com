import Image from 'next/image';
import { TitlePage } from '@/components/TitlePage';
import { Expandable } from '@/components/Expandable';
import backgroundGradient from '@/assets/images/gradient-1.webp';

export default function FAQ() {
  return (
    <section className="mx-5 mt-4">
      <TitlePage>F.A.Q.</TitlePage>

      <div className="mt-4 text-center uppercase text-primary-blue">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic ab esse illo fuga explicabo.
      </div>

      <div className="mt-12 mb-20">
        <Expandable title="¿Cómo sé si necesito sanar mi energía sexual?">
          <div className="text-primary-blue">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad est provident voluptas qui
            optio tenetur eveniet, ipsam tempore dolorem laboriosam rerum explicabo nam perferendis,
            tempora laborum, ea omnis sed sequi!
          </div>
        </Expandable>
        <Expandable title="¿Qué es un huevo Yoni?">
          <div className="text-primary-blue">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad est provident voluptas qui
            optio tenetur eveniet, ipsam tempore dolorem laboriosam rerum explicabo nam perferendis,
            tempora laborum, ea omnis sed sequi!
          </div>
        </Expandable>
        <Expandable title="¿Qué son las vaporizaciones Yoni?">
          <div className="text-primary-blue">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad est provident voluptas qui
            optio tenetur eveniet, ipsam tempore dolorem laboriosam rerum explicabo nam perferendis,
            tempora laborum, ea omnis sed sequi!
          </div>
        </Expandable>
        <Expandable title="¿Cómo curar infecciones con Aceite de Neem?" withBottomBorder>
          <div className="text-primary-blue">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad est provident voluptas qui
            optio tenetur eveniet, ipsam tempore dolorem laboriosam rerum explicabo nam perferendis,
            tempora laborum, ea omnis sed sequi!
          </div>
        </Expandable>
      </div>

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
