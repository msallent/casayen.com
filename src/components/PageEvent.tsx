import Image from 'next/image';
import { TitlePage } from '@/components/TitlePage';
import { ExpandableEvent } from '@/components/ExpandableEvent';
import { Event } from '@/types/contentful';
import backgroundGradient from '@/assets/images/gradient-1.webp';

type PageEvent = {
  title: string;
  subtitle?: string;
  disclaimer?: string;
  events: Array<Event>;
};

export function PageEvent({ title, subtitle, disclaimer, events }: PageEvent) {
  return (
    <section className="mx-5 sm:mx-10 lg:mx-20 2xl:mx-48">
      <TitlePage title={title} subtitle={subtitle} />

      {disclaimer && (
        <div className="mt-12 font-serif uppercase italic text-primary-blue xl:mt-24">
          {disclaimer}
        </div>
      )}

      <div className="mb-20 mt-5 border-b border-primary-blue">
        {events.map((event, index) => (
          <ExpandableEvent key={event.title} event={event} index={index + 1} />
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
