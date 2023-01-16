export type ContentfulResponse<T> = {
  data: T;
};

export type PageHomeData = {
  pageHome: {
    featuredLinksCollection: {
      items: Array<Link>;
    };
  };
};

type Link = {
  label: string;
  url: `/${string}`;
};
