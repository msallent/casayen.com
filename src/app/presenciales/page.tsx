import { PageEvent } from '@/components/PageEvent';
import { openGraph } from '@/constants/metadata';
import { tags } from '@/constants/tags';
import { Event, PagePresencialesData } from '@/types/contentful';
import { eventFields, fetchContent } from '@/utils/fetch';

const title = 'Presenciales';
const description = 'Encuentros presenciales en Buenos Aires y en el mundo';

export const metadata = {
  title,
  description,
  openGraph: { ...openGraph, title, description, url: '/presenciales' },
};

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
        ${eventFields}
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
