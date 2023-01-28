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
    <section className="mx-5 mt-4">
      <TitlePage title={title} subtitle={subtitle} />

      {disclaimer && (
        <div className="mt-12 font-serif uppercase italic text-primary-blue">{disclaimer}</div>
      )}

      <div className="mt-5 mb-20">
        {talleresCollection.items.map((taller) => (
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
