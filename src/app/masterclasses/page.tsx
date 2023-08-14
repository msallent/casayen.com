import { PageEvent } from '@/components/PageEvent';
import { tags } from '@/constants/tags';
import { Event, PageMasterclassesData } from '@/types/contentful';
import { eventFields, fetchContent } from '@/utils/fetch';

export const metadata = {
  title: 'Masterclasses',
  openGraph: {
    title: 'Masterclasses',
  },
};

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
        ${eventFields}
      }
    }
  }`,
    { next: { tags: [tags.masterclasses] } }
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
