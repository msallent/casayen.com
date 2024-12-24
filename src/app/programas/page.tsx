import { PageEvent } from '@/components/PageEvent';
import { openGraph } from '@/constants/metadata';
import { tags } from '@/constants/tags';
import { Event, PageProgramasData } from '@/types/contentful';
import { eventFields, fetchContent } from '@/utils/fetch';

const title = 'Programas';
const description = 'Todos los programas virtuales y sus próximas fechas de inicio';

export const metadata = {
  title,
  description,
  openGraph: { ...openGraph, title, description, url: '/programas' },
};

export default async function Programas() {
  const {
    data: {
      pageProgramas: { title, subtitle, disclaimer, programasCollection },
    },
  } = await fetchContent<PageProgramasData>(
    `query PageProgramas {
    pageProgramas(id: "${process.env.CONTENTFUL_PAGE_PROGRAMAS_ID}") {
      title
      subtitle
      disclaimer
      programasCollection {
        ${eventFields}
      }
    }
  }`,
    { next: { tags: [tags.programas] } },
  );

  return (
    <PageEvent
      title={title}
      subtitle={subtitle}
      disclaimer={disclaimer}
      events={programasCollection.items.map((programa) => ({ ...programa, type: 'programa' }))}
    />
  );
}
