import { PageEvent } from '@/components/PageEvent';
import { tags } from '@/constants/tags';
import { Event, PagePresencialesData } from '@/types/contentful';
import { fetchContent } from '@/utils/fetch';

export default async function Presenciales() {
  const {
    data: {
      pagePresenciales: { title, subtitle, disclaimer, presencialesCollection },
    },
  } = await fetchContent<PagePresencialesData>(
    `query PagePresenciales {
    pagePresenciales(id: "${process.env.CONTENTFUL_PAGE_PRESENCIALES_ID}") {
      title
      subtitle
      disclaimer
      presencialesCollection {
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
  }`,
    { next: { tags: [tags.presenciales] } }
  );

  return (
    <PageEvent
      title={title}
      subtitle={subtitle}
      disclaimer={disclaimer}
      events={presencialesCollection.items.map<Event>((presencial) => ({
        ...presencial,
        type: 'encuentro',
      }))}
    />
  );
}
