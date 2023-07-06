import Image from 'next/image';
import { TitlePage } from '@/components/TitlePage';
import { Expandable } from '@/components/Expandable';
import { parseRichText } from '@/utils/richText';
import { fetchContent } from '@/utils/fetch';
import { PageFAQData } from '@/types/contentful';
import backgroundGradient from '@/assets/images/gradient-1.webp';

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
    <section className="mx-5 sm:mx-10 lg:mx-20">
      <TitlePage title={title} subtitle={subtitle} />

      <div className="mb-20 mt-12 border-b border-primary-blue">
        {faqsCollection.items.map((faq) => (
          <Expandable key={faq.title} title={faq.title}>
            <div className="text-primary-blue">{parseRichText(faq.content.json)}</div>
          </Expandable>
        ))}
      </div>

      <Image
        aria-hidden
        src={backgroundGradient}
        alt="Background gradient"
        className="absolute left-0 top-0 -z-10 max-h-[1200px] w-full"
        placeholder="blur"
      />
    </section>
  );
}
