import { Document } from '@contentful/rich-text-types';

export type ContentfulResponse<T> = {
  data: T;
};

export type ContentfulPage = {
  title: string;
  subtitle?: string;
};

export type ContentfulDynamicPage = {
  url: string;
};

export type ContentfulRichText = {
  json: Document;
};

export type ContentfulAsset = {
  sys: {
    id: string;
  };
  url: string;
  title: string;
  width: number;
  height: number;
};

export type ContentfulRichTextWithAssets = ContentfulRichText & {
  links: {
    assets: {
      block: Array<ContentfulAsset>;
    };
  };
};

export type NavbarMenuData = {
  navbarMenu: {
    menuItemsCollection: {
      items: Array<Link>;
    };
  };
};

export type PageHomeData = {
  pageHome: {
    featuredLinksCollection: {
      items: Array<Link>;
    };
  };
};

export type PageProgramasData = {
  pageProgramas: ContentfulPage & {
    disclaimer?: string;
    programasCollection: {
      items: Array<Event>;
    };
  };
};

export type PagePresencialesData = {
  pagePresenciales: ContentfulPage & {
    disclaimer?: string;
    presencialesCollection: {
      items: Array<Event>;
    };
  };
};

export type PageMasterclassesData = {
  pageMasterclasses: ContentfulPage & {
    disclaimer?: string;
    masterclassesCollection: {
      items: Array<Event>;
    };
  };
};

export type PageSesionesData = {
  pageSesiones: ContentfulPage & {
    disclaimer?: string;
    sesionesCollection: {
      items: Array<Event>;
    };
  };
};

export type PageYenData = {
  pageYen: ContentfulPage & {
    description: ContentfulRichText;
  };
};

export type PageBlogData = {
  pageBlog: ContentfulPage;
  pageBlogPostCollection: {
    items: Array<PreviewBlogPost>;
  };
};

export type PageBlogPostParams = {
  pageBlogPostCollection: {
    items: Array<ContentfulDynamicPage>;
  };
};

export type PageBlogPostData = {
  pageBlogPostCollection: {
    items: [BlogPost];
  };
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

export type Event = {
  title: string;
  hot?: boolean;
  shortDescription?: string;
  longDescription?: string;
  startDate?: string;
  duration?: string;
  photosFirstRowCollection: {
    items: Array<ContentfulAsset>;
  };
  photosSecondRowCollection: {
    items: Array<ContentfulAsset>;
  };
  mercadoPagoUrl?: string;
  payPalUrl?: string;
  value?: ContentfulRichText;
  includes?: ContentfulRichText;
  photosThirdRowCollection: {
    items: Array<ContentfulAsset>;
  };
  forYou?: ContentfulRichText;
  info?: ContentfulRichText;
  syllabus?: ContentfulRichText;
  participation?: ContentfulRichText;
  photosFourthRowCollection: {
    items: Array<ContentfulAsset>;
  };
  photosFifthRowCollection: {
    items: Array<ContentfulAsset>;
  };
  type: 'encuentro' | 'programa' | 'sesion' | 'taller';
};

export type BlogPost = {
  title: string;
  url: string;
  description?: string;
  body: ContentfulRichTextWithAssets;
  sys: {
    publishedAt: string;
  };
};

export type PreviewBlogPost = Pick<BlogPost, 'title' | 'url' | 'description'>;

export type FAQ = {
  title: string;
  content: ContentfulRichText;
};
