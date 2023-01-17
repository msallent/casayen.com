import Image from 'next/image';
import { ExpandableTaller } from '@/components/ExpandableTaller';
import { TitlePage } from '@/components/TitlePage';
import { fetchContent } from '@/utils/fetch';
import { PageTalleresOnlineData } from '@/types/contentful';
import backgroundGradient from '@/assets/images/gradient-1.webp';

export default async function Talleres() {
  const { data } = await fetchContent<PageTalleresOnlineData>(`query PageTalleresOnline {
    pageTalleresOnline(id: "${process.env.CONTENTFUL_PAGE_TALLERES_ONLINE_ID}") {
      talleresCollection {
        items {
          hot
          title
          shortDescription
          longDescription
          duration
          value {
            json
          }
          includes {
            json
          }
          forYou {
            json
          }
          info {
            json
          }
          syllabus {
            json
          }
        }
      }
    }
  }`);

  const talleres = data.pageTalleresOnline.talleresCollection.items;

  return (
    <section className="mx-5 mt-4">
      <TitlePage>TALLERES ONLINE</TitlePage>

      <div className="mt-4 text-center uppercase text-primary-blue">
        En esta sección vas a encontrar TODOS los talleres pregrabados para que hagas a tu propio
        ritmo.
      </div>

      <div className="mt-12 font-serif uppercase italic text-primary-blue">
        (!) Importante: los videos estarán disponibles por 10 días (una vez que envíes tu
        comprobante de pago)
      </div>

      <div className="mt-5 mb-20">
        {talleres.map((taller) => (
          <ExpandableTaller key={taller.title} taller={taller} />
        ))}
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
