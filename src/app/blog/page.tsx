import Image from 'next/image';
import { PreviewBlogPost } from '@/components/PreviewBlogPost';
import { TitlePage } from '@/components/TitlePage';
import { fetchContent } from '@/utils/fetch';
import { PageBlogData } from '@/types/contentful';
import backgroundGradient1 from '@/assets/images/gradient-1.webp';
import backgroundGradient1Large from '@/assets/images/gradient-1-large.webp';

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
        src={backgroundGradient1}
        alt="Background gradient"
        className="absolute left-0 top-0 -z-10 w-full xl:hidden"
        placeholder="blur"
        loading="eager"
      />

      <Image
        aria-hidden
        src={backgroundGradient1Large}
        alt="Background gradient"
        className="hidden xl:absolute xl:left-0 xl:top-0 xl:-z-10 xl:block xl:w-full"
        placeholder="blur"
        loading="eager"
      />
    </section>
  );
}
