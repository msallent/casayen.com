import Image from 'next/image';
import { PreviewBlogPost } from '@/components/PreviewBlogPost';
import { TitlePage } from '@/components/TitlePage';
import { fetchContent } from '@/utils/fetch';
import { PageBlogData } from '@/types/contentful';
import backgroundGradient from '@/assets/images/gradient-1.webp';

export default async function Blog() {
  const {
    data: {
      pageBlog: { title, subtitle },
      pageBlogPostCollection,
    },
  } = await fetchContent<PageBlogData>(`query PageBlog {
    pageBlog(id: "${process.env.CONTENTFUL_PAGE_BLOG_ID}") {
      title
      subtitle
    }
    pageBlogPostCollection {
      items {
        title
        url
        description
      }
    }
  }`);

  return (
    <section className="mx-5 mt-4 mb-20 sm:mx-10">
      <TitlePage title={title} subtitle={subtitle} />

      <div className="mt-12 mb-20 space-y-16">
        {pageBlogPostCollection.items.map((blogPost) => (
          <PreviewBlogPost
            key={blogPost.title}
            title={blogPost.title}
            description={blogPost.description}
            url={`blog/${blogPost.url}`}
          />
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
