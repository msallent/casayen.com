import { PageEvent } from '@/components/PageEvent';
import { tags } from '@/constants/tags';
import { Event, PageRetirosData } from '@/types/contentful';
import { fetchContent } from '@/utils/fetch';

export default async function Programas() {
  const {
    data: {
      pageRetiros: { title, subtitle, disclaimer, retirosCollection },
    },
  } = await fetchContent<PageRetirosData>(
    `query PageRetiros {
    pageRetiros(id: "${process.env.CONTENTFUL_PAGE_RETIROS_ID}") {
      title
      subtitle
      disclaimer
      retirosCollection {
        items {
          hot
          title
          shortDescription
          longDescription
          startDate
          duration
          mercadoPagoUrl
          payPalUrl
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
          participation {
            json
          }
        }
      }
    }
  }`,
    { next: { tags: [tags.retiros] } }
  );

  return (
    <PageEvent
      title={title}
      subtitle={subtitle}
      disclaimer={disclaimer}
      events={retirosCollection.items.map<Event>((retiro) => ({ ...retiro, type: 'retiro' }))}
    />
  );
}
