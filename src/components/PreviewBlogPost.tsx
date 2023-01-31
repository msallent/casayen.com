import Image from 'next/image';
import NextLink from 'next/link';
import { Title } from '@/components/Title';
import previewBlogPostPlaceholderImage from '@/assets/images/preview-blog-post-placeholder.webp';

type PreviewBlogPostProps = {
  title: string;
  url: string;
  description?: string;
};

export function PreviewBlogPost({ title, url, description }: PreviewBlogPostProps) {
  return (
    <div className="flex flex-col border-b border-primary-blue pb-6">
      <div className="mb-6 flex aspect-square items-center overflow-hidden sm:aspect-video">
        <NextLink href={url} className="w-full">
          <Image
            src={previewBlogPostPlaceholderImage}
            alt="Blog post"
            className="w-full"
            placeholder="blur"
          />
        </NextLink>
      </div>

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
