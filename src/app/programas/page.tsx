import { PageEvent } from '@/components/PageEvent';
import { tags } from '@/constants/tags';
import { Event, PageProgramasData } from '@/types/contentful';
import { eventFields, fetchContent } from '@/utils/fetch';

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
    { next: { tags: [tags.programas] } }
  );

  return (
    <PageEvent
      title={title}
      subtitle={subtitle}
      disclaimer={disclaimer}
      events={programasCollection.items.map<Event>((programa) => ({
        ...programa,
        type: 'programa',
      }))}
    />
  );
}
