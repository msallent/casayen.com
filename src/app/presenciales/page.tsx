import Image from 'next/image';
import { ExpandableEvent } from '@/components/ExpandableEvent';
import { TitlePage } from '@/components/TitlePage';
import { fetchContent } from '@/utils/fetch';
import { PagePresencialesData } from '@/types/contentful';
import backgroundGradient from '@/assets/images/gradient-1.webp';

export default async function Presenciales() {
  const {
    data: {
      pagePresenciales: { title, subtitle, disclaimer, talleresCollection },
    },
  } = await fetchContent<PagePresencialesData>(`query PagePresenciales {
    pagePresenciales(id: "${process.env.CONTENTFUL_PAGE_PRESENCIALES_ID}") {
      title
      subtitle
      disclaimer
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

  return (
    <section className="mx-5 sm:mx-10 lg:mx-20 2xl:mx-48">
      <TitlePage title={title} subtitle={subtitle} />

      {disclaimer && (
        <div className="mt-12 font-serif uppercase italic text-primary-blue xl:mt-24">
          {disclaimer}
        </div>
      )}

      <div className="mb-20 mt-5 border-b border-primary-blue">
        {talleresCollection.items.map((taller, index) => (
          <ExpandableEvent key={taller.title} type="taller" event={taller} index={index + 1} />
        ))}
      </div>

      <Image
        aria-hidden
        src={backgroundGradient}
        alt="Background gradient"
        className="absolute left-0 top-0 -z-10 max-h-[1200px] w-full"
        placeholder="blur"
      />
    </section>
  );
}
