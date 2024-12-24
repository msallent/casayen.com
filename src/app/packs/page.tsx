import { PageEvent } from '@/components/PageEvent';
import { openGraph } from '@/constants/metadata';
import { tags } from '@/constants/tags';
import { Event, PagePacksData } from '@/types/contentful';
import { eventFields, fetchContent } from '@/utils/fetch';

const title = 'Packs';
const description =
  'El universo Yen como lo conocés está por llegar a su final. Por eso es que te ofrecemos una última oportunidad de adquirir todos nuestros cursos grabados con un 35% de descuento';

export const metadata = {
  title,
  description,
  openGraph: { ...openGraph, title, description, url: '/packs' },
};

export default async function Sesiones() {
  const {
    data: {
      pagePacks: { title, subtitle, disclaimer, packsCollection },
    },
  } = await fetchContent<PagePacksData>(
    `query PageSesiones {
    pagePacks(id: "${process.env.CONTENTFUL_PAGE_PACKS_ID}") {
      title
      subtitle
      disclaimer
      packsCollection {
        ${eventFields}
      }
    }
  }`,
    { next: { tags: [tags.packs] } },
  );

  return (
    <PageEvent
      title={title}
      subtitle={subtitle}
      disclaimer={disclaimer}
      events={packsCollection.items.map((pack) => ({ ...pack, type: 'pack' }))}
    />
  );
}
