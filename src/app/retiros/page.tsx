import { PageEvent } from '@/components/PageEvent';
import { openGraph } from '@/constants/metadata';
import { tags } from '@/constants/tags';
import { Event, PageRetirosData } from '@/types/contentful';
import { eventFields, fetchContent } from '@/utils/fetch';

const title = 'Retiros';
const description = 'Todos los programas virtuales y sus próximas fechas de inicio';

export const metadata = {
  title,
  description,
  openGraph: { ...openGraph, title, description, url: '/retiros' },
};

export default async function Retiros() {
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
