import Image from 'next/image';
import classNames from 'classnames';
import { TitlePage } from '@/components/TitlePage';
import { ExpandableEvent } from '@/components/ExpandableEvent';
import { Event } from '@/types/contentful';
import backgroundGradient1 from '@/assets/images/gradient-1.webp';
import backgroundGradient1Large from '@/assets/images/gradient-1-large.webp';

type PageEvent = {
  title: string;
  subtitle?: string;
  disclaimer?: string;
  events: Array<Event>;
};

export function PageEvent({ title, subtitle, disclaimer, events }: PageEvent) {
  return (
    <section className="mx-5 sm:mx-10 lg:mx-20 xl:min-h-screen 2xl:mx-48">
      <TitlePage title={title} subtitle={subtitle} />

      {disclaimer && (
        <div className="mt-14 font-serif uppercase italic text-primary-blue xl:mt-24">
          {disclaimer}
        </div>
      )}

      <div
        className={classNames(
          'mb-28 border-b border-primary-blue',
          disclaimer ? 'mt-5' : 'mt-14 xl:mt-24',
        )}
      >
        {events.map((event, index) => (
          <ExpandableEvent key={event.title} event={event} index={index + 1} />
        ))}
      </div>

      <Image
        aria-hidden
        src={backgroundGradient1}
        alt="Background gradient"
        className="pointer-events-none absolute left-0 top-0 -z-10 max-h-[1024px] w-full xl:hidden"
        placeholder="blur"
      />

      <Image
        aria-hidden
        src={backgroundGradient1Large}
        alt="Background gradient"
        className="hidden xl:pointer-events-none xl:absolute xl:-left-20 xl:-top-20 xl:-z-10 xl:block xl:w-full"
        placeholder="blur"
      />
    </section>
  );
}
