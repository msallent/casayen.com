export type ContentfulResponse<T> = {
  data: T;
};

export type PageHomeData = {
  pageHome: {
    featuredLinksCollection: {
      items: Array<LinkFeatured>;
    };
  };
};

type LinkFeatured = {
  label: string;
  url: `/${string}`;
};
