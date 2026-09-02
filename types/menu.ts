export type MenuInternal = {
  __typename: string;
  slug?: string;
  tag?: { slug: string };
};

export type MenuItemRecord = {
  __typename: "MenuItemRecord";
  label: string;
  id?: string;
  description?: string | null;
  internal?: MenuInternal | null;
  external?: string | null;
  icon?: { url: string } | null;
};

export type MenuGroupRecord = {
  __typename: "MenuGroupRecord";
  label: string;
  id?: string;
  submenu: (MenuItemRecord | MenuGroupRecord)[];
};

export type MenuQueryData = {
  menu: {
    main: (MenuItemRecord | MenuGroupRecord)[];
  };
};
