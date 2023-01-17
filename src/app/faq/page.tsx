import Image from 'next/image';
import { TitlePage } from '@/components/TitlePage';
import { Expandable } from '@/components/Expandable';
import { PageFAQData } from '@/types/contentful';
import { parseRichText } from '@/utils/richText';
import { fetchContent } from '@/utils/fetch';
import backgroundGradient from '@/assets/images/gradient-1.webp';

export default async function FAQ() {
  const { data } = await fetchContent<PageFAQData>(`query PageFAQ {
    pageFaq(id: "${process.env.CONTENTFUL_PAGE_FAQ_ID}") {
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

  const faqs = data.pageFaq.faqsCollection.items;

  return (
    <section className="mx-5 mt-4">
      <TitlePage>F.A.Q.</TitlePage>

      <div className="mt-4 text-center uppercase text-primary-blue">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic ab esse illo fuga explicabo.
      </div>

      <div className="mt-12 mb-20">
        {faqs.map((faq) => (
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
        priority
      />
    </section>
  );
}
