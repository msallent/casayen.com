import Image from 'next/image';
import { ExpandableTaller } from '@/components/ExpandableTaller';
import { TitlePage } from '@/components/TitlePage';
import { fetchContent } from '@/utils/fetch';
import { PageTalleresOnlineData } from '@/types/contentful';
import backgroundGradient from '@/assets/images/gradient-1.webp';

export default async function Talleres() {
  const {
    data: {
      pageTalleresOnline: { title, subtitle, disclaimer, talleresCollection },
    },
  } = await fetchContent<PageTalleresOnlineData>(`query PageTalleresOnline {
    pageTalleresOnline(id: "${process.env.CONTENTFUL_PAGE_TALLERES_ONLINE_ID}") {
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
    <section className="mx-5 sm:mx-10 lg:mx-20">
      <TitlePage title={title} subtitle={subtitle} />

      {disclaimer && (
        <div className="mt-12 font-serif uppercase italic text-primary-blue">{disclaimer}</div>
      )}

      <div className="mb-20 mt-5 border-b border-primary-blue">
        {talleresCollection.items.map((taller) => (
          <ExpandableTaller key={taller.title} taller={taller} />
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
