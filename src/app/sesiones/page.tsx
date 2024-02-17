import { PageEvent } from '@/components/PageEvent';
import { openGraph } from '@/constants/metadata';
import { tags } from '@/constants/tags';
import { Event, PageSesionesData } from '@/types/contentful';
import { eventFields, fetchContent } from '@/utils/fetch';

const title = 'Sesiones';
const description =
  'Una hermosa cartera de profesionales de la salud holísticxs, licenciadxs en psicología, coaches y más que están disponibles para acompañarte si necesitás o deseas profundizar tu proceso en espacios individuales';

export const metadata = {
  title,
  description,
  openGraph: { ...openGraph, title, description, url: '/sesiones' },
};

export default async function Sesiones() {
  const {
    data: {
      pageSesiones: { title, subtitle, disclaimer, sesionesCollection },
    },
  } = await fetchContent<PageSesionesData>(
    `query PageSesiones {
    pageSesiones(id: "${process.env.CONTENTFUL_PAGE_SESIONES_ID}") {
      title
      subtitle
      disclaimer
      sesionesCollection {
        ${eventFields}
      }
    }
  }`,
    { next: { tags: [tags.sesiones] } }
  );

  return (
    <PageEvent
      title={title}
      subtitle={subtitle}
      disclaimer={disclaimer}
      events={sesionesCollection.items.map<Event>((sesion) => ({ ...sesion, type: 'sesion' }))}
    />
  );
}
