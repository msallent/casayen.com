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
  } = await fetchContent<PageBlogData>(
    `query PageBlog {
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
  }`,
    { next: { tags: ['pageBlog', 'pageBlogPostCollection'] } }
  );

  return (
    <section className="mx-5 mb-20 sm:mx-10 lg:mx-20">
      <TitlePage title={title} subtitle={subtitle} />

      <div className="mb-20 mt-12 space-y-16">
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
        className="absolute left-0 top-0 -z-10 max-h-[1200px] w-full"
        placeholder="blur"
      />
    </section>
  );
}
