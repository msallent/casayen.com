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
    <section className="mx-5 mt-4 sm:mx-10 lg:mx-20">
      <TitlePage title={title} subtitle={subtitle} />

      <div className="mt-12 mb-20 border-b border-primary-blue">
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
        className="absolute top-0 left-0 -z-10 w-full"
        placeholder="blur"
      />
    </section>
  );
}
