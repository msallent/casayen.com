import { PageEvent } from '@/components/PageEvent';
import { PageProgramasData } from '@/types/contentful';
import { fetchContent } from '@/utils/fetch';

export default async function Talleres() {
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
          duration
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
        }
      }
    }
  }`,
    { next: { tags: ['pageProgramas'] } }
  );

  return (
    <PageEvent
      type="programa"
      title={title}
      subtitle={subtitle}
      disclaimer={disclaimer}
      events={programasCollection.items}
    />
  );
}
