import Image from 'next/image';
import NextLink from 'next/link';
import { Title } from '@/components/Title';
import blogEntryPlaceholderImage from '@/assets/images/blog-entry-placeholder.webp';

type EntryProps = {
  title: string;
  url: string;
  description?: string;
};

export function Entry({ title, url, description }: EntryProps) {
  return (
    <div className="flex flex-col border-b border-primary-blue pb-6">
      <Image
        src={blogEntryPlaceholderImage}
        alt="Blog entry"
        className="mb-6 w-full"
        placeholder="blur"
      />

      <Title size="small">{title}</Title>

      {description && <span className="mt-2.5 text-primary-blue">{description}</span>}

      <NextLink
        href={url}
        className="mt-3 font-serif font-medium uppercase tracking-[0.075em] text-secondary-white [text-shadow:0_0_7px_rgba(255,255,255,0.65)]"
      >
        Leer más →
      </NextLink>
    </div>
  );
}
