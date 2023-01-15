import Image from 'next/image';
import NextLink from 'next/link';
import { Title } from '@/components/Title';
import blogEntryPlaceholderImage from '@/assets/images/blog-entry-placeholder.png';

type EntryProps = {
  title: string;
  url: string;
  description?: string;
};

export function Entry({ title, url, description }: EntryProps) {
  return (
    <div className="flex flex-col pb-6 border-b border-primary-blue">
      <Image aria-hidden src={blogEntryPlaceholderImage} alt="Blog entry" className="w-full mb-6" />

      <Title size="small">{title}</Title>

      {description && <span className="mt-2.5 text-primary-blue">{description}</span>}

      <NextLink
        href={url}
        className="mt-3 font-serif font-medium uppercase tracking-[0.075em] [text-shadow:0_0_7px_rgba(255,255,255,0.65)] text-secondary-white"
      >
        Leer más →
      </NextLink>
    </div>
  );
}
