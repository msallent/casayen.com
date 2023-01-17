import { Document } from '@contentful/rich-text-types';

export type ContentfulResponse<T> = {
  data: T;
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

export type PageTalleresOnlineData = {
  pageTalleresOnline: {
    talleresCollection: {
      items: Array<Taller>;
    };
  };
};

export type PageFAQData = {
  pageFaq: {
    faqsCollection: {
      items: Array<FAQ>;
    };
  };
};

export type ContentfulRichText = {
  json: Document;
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

export type FAQ = {
  title: string;
  content: ContentfulRichText;
};
