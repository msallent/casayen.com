import { PageEvent } from '@/components/PageEvent';
import { PageTalleresOnlineData } from '@/types/contentful';
import { fetchContent } from '@/utils/fetch';

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
    <PageEvent
      type="taller"
      title={title}
      subtitle={subtitle}
      disclaimer={disclaimer}
      events={talleresCollection.items}
    />
  );
}
