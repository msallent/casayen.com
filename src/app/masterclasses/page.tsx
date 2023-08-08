import { PageEvent } from '@/components/PageEvent';
import { Event, PageMasterclassesData } from '@/types/contentful';
import { fetchContent } from '@/utils/fetch';

export default async function Masterclasses() {
  const {
    data: {
      pageMasterclasses: { title, subtitle, disclaimer, masterclassesCollection },
    },
  } = await fetchContent<PageMasterclassesData>(
    `query PageMasterclasses {
    pageMasterclasses(id: "${process.env.CONTENTFUL_PAGE_MASTERCLASSES_ID}") {
      title
      subtitle
      disclaimer
      masterclassesCollection {
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
    { next: { tags: ['pageMasterclasses'] } }
  );

  return (
    <PageEvent
      title={title}
      subtitle={subtitle}
      disclaimer={disclaimer}
      events={masterclassesCollection.items.map<Event>((masterclass) => ({
        ...masterclass,
        type: 'taller',
      }))}
    />
  );
}
