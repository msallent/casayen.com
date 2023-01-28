import { Document } from '@contentful/rich-text-types';

export type ContentfulResponse<T> = {
  data: T;
};

export type ContentfulPage = {
  title: string;
  subtitle?: string;
};

export type ContentfulRichText = {
  json: Document;
};

export type NavbarMenuData = {
  navbarMenu: {
    menuItemsCollection: {
      items: Array<Link>;
    };
  };
};

export type PageHomeData = {
  pageHome: ContentfulPage & {
    featuredLinksCollection: {
      items: Array<Link>;
    };
  };
};

export type PageTalleresOnlineData = {
  pageTalleresOnline: ContentfulPage & {
    disclaimer?: string;
    talleresCollection: {
      items: Array<Taller>;
    };
  };
};

export type PageYenData = {
  pageYen: ContentfulPage;
};

export type PageBlogData = {
  pageBlog: ContentfulPage;
  pageBlogPostCollection: {
    items: Array<PreviewBlogPost>;
  };
};

export type PageBlogPostData = {
  pageBlogPost: BlogPost;
};

export type PageFAQData = {
  pageFaq: ContentfulPage & {
    faqsCollection: {
      items: Array<FAQ>;
    };
  };
};

export type Link = {
  label: string;
  url: `/${string}`;
};

export type Taller = {
  title: string;
  hot?: boolean;
  shortDescription?: string;
  longDescription?: string;
  duration?: string;
  value?: ContentfulRichText;
  includes?: ContentfulRichText;
  forYou?: ContentfulRichText;
  info?: ContentfulRichText;
  syllabus?: ContentfulRichText;
};

export type BlogPost = {
  title: string;
  url: string;
  description?: string;
  body: ContentfulRichText;
};

export type PreviewBlogPost = Pick<BlogPost, 'title' | 'url' | 'description'>;

export type FAQ = {
  title: string;
  content: ContentfulRichText;
};
