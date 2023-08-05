import Image from 'next/image';
import { TitlePage } from '@/components/TitlePage';
import { Expandable } from '@/components/Expandable';
import { parseRichText } from '@/utils/richText';
import { fetchContent } from '@/utils/fetch';
import { PageFAQData } from '@/types/contentful';
import backgroundGradient1 from '@/assets/images/gradient-1.webp';
import backgroundGradient2 from '@/assets/images/gradient-4.webp';

export default async function FAQ() {
  const {
    data: {
      pageFaq: { title, subtitle, faqsCollection },
    },
  } = await fetchContent<PageFAQData>(`query PageFAQ {
    pageFaq(id: "${process.env.CONTENTFUL_PAGE_FAQ_ID}") {
      title
      subtitle
      faqsCollection {
        items {
          title
          content {
            json
          }
        }
      }
    }
  }`);

  return (
    <section className="mx-5 sm:mx-10 lg:mx-20 xl:relative xl:mt-28">
      <div className="xl:flex xl:items-start xl:gap-28">
        <TitlePage title={title} subtitle={subtitle} vertical />
        <div className="mb-20 mt-12 border-b border-primary-blue xl:mt-0">
          {faqsCollection.items.map((faq, index) => (
            <Expandable key={faq.title} title={faq.title} noBorder={index === 0}>
              <div className="text-primary-blue">{parseRichText(faq.content.json)}</div>
            </Expandable>
          ))}
        </div>
      </div>

      <Image
        aria-hidden
        src={backgroundGradient1}
        alt="Background gradient"
        className="absolute left-0 top-0 -z-10 max-h-[1200px] w-full xl:hidden"
        placeholder="blur"
      />

      <Image
        aria-hidden
        src={backgroundGradient2}
        alt="Background gradient"
        className="hidden xl:absolute xl:-bottom-48 xl:-left-20 xl:-z-10 xl:block xl:w-2/3"
        placeholder="blur"
      />
    </section>
  );
}
