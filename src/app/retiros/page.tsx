import { PageEvent } from '@/components/PageEvent';
import { tags } from '@/constants/tags';
import { Event, PageRetirosData } from '@/types/contentful';
import { eventFields, fetchContent } from '@/utils/fetch';

export const metadata = {
  title: 'Retiros',
};

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
        ${eventFields}
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
