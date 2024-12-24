import { PageEvent } from '@/components/PageEvent';
import { openGraph } from '@/constants/metadata';
import { tags } from '@/constants/tags';
import { Event, PageMasterclassesData } from '@/types/contentful';
import { eventFields, fetchContent } from '@/utils/fetch';

const title = 'Masterclasses';
const description = 'Masterclasses y talleres on demand y en vivo';

export const metadata = {
  title,
  description,
  openGraph: { ...openGraph, title, description, url: '/masterclasses' },
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
    { next: { tags: [tags.masterclasses] } },
  );

  return (
    <PageEvent
      title={title}
      subtitle={subtitle}
      disclaimer={disclaimer}
      events={masterclassesCollection.items.map((masterclass) => ({
        ...masterclass,
        type: 'taller',
      }))}
    />
  );
}
