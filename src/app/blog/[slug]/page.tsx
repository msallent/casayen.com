import Image from 'next/image';
import Balancer from 'react-wrap-balancer';
import { Title } from '@/components/Title';
import { fetchContent } from '@/utils/fetch';
import { parseRichText } from '@/utils/richText';
import { formateDateString } from '@/utils/dates';
import { PageBlogPostData, PageBlogPostParams } from '@/types/contentful';
import previewBlogPostPlaceholderImage from '@/assets/images/preview-blog-post-placeholder.webp';

type BlogPostProps = {
  params: {
    slug: string;
  };
};

export default async function BlogPost({ params }: BlogPostProps) {
  const {
    data: {
      pageBlogPostCollection: {
        items: [blogPost],
      },
    },
  } = await fetchContent<PageBlogPostData>(`query PageBlogPostData {
    pageBlogPostCollection(limit: 1, where: { url: "${params.slug}" }) {
      items {
        title
        description
        body {
          json
          links {
            assets {
              block {
                sys {
                  id
                }
                url
                title
                width
                height
              }
            }
          }
        }
        sys {
          publishedAt
        }
      }
    }
  }`);

  return (
    <section className="mb-20 mt-2 text-primary-blue">
      <div className="relative h-80">
        <Image
          src={previewBlogPostPlaceholderImage}
          alt="Blog post"
          className="h-full w-full object-cover brightness-75"
          placeholder="blur"
        />

        <div className="inset-center absolute w-full text-center uppercase sm:max-w-[90%] lg:max-w-[80%]">
          <Title>
            <Balancer>{blogPost.title}</Balancer>
          </Title>
        </div>
      </div>

      <div className="mx-5 mt-14 sm:mx-10 lg:mx-20">
        <span>{formateDateString(blogPost.sys.publishedAt)}</span>

        <div className="my-5 italic">{blogPost.description}</div>

        <div className="space-y-4">
          {parseRichText(blogPost.body.json, blogPost.body.links.assets.block)}
        </div>
      </div>
    </section>
  );
}

export async function generateStaticParams() {
  const {
    data: { pageBlogPostCollection },
  } = await fetchContent<PageBlogPostParams>(`query PageBlogPostParams {
    pageBlogPostCollection {
      items {
        url
      }
    }
  }`);

  return pageBlogPostCollection.items.map((blogPost) => ({
    slug: blogPost.url,
  }));
}

export const dynamicParams = false;
