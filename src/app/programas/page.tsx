import { PageEvent } from '@/components/PageEvent';
import { tags } from '@/constants/tags';
import { Event, PageProgramasData } from '@/types/contentful';
import { fetchContent } from '@/utils/fetch';

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
