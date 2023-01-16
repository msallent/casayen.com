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

type Link = {
  label: string;
  url: `/${string}`;
};
