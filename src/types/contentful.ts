type ContentfulEntry<T> = {
  fields: T;
};

export type ContentfulResponse<T> = {
  total: number;
  skip: number;
  limit: number;
  items: Array<ContentfulEntry<T>>;
};

export type TLinkFeatured = {
  name: string;
  url: `/${string}`;
};
