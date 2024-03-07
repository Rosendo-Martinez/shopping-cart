import placeHolderImage from "./assets/placeholder.png";

export const SORT_BY_VALUES = [
  "Price: low to high",
  "Price: high to low",
  "Alphabetically: A-Z",
  "Alphabetically: Z-A",
];
export const DEFAULT_SORT_BY_VALUE = 0;
export const SORT_BY_PARAM_KEY = "sortby";

export const HOME_LINK = "/";
export const SHOP_LINK = "/shop";
export const CART_LINK = "/shop/cart";
export const ITEM_LINK_PREFIX = "/shop/item";
export const SHOP_PAGE_LINK_PREFIX = "/shop/page";

// Temporary development only constant
export const SHOP_ITEMS_DEV_ONLY = [
  {
    id: 1,
    title: "TITLE",
    description:
      "DESCRIPTION: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent elementum pellentesque sem, sit amet sodales diam varius a.",
    image: placeHolderImage,
    cost: 6001,
    sold: 6,
  },
  {
    id: 2,
    title: "TITLE",
    description:
      "DESCRIPTION: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent elementum pellentesque sem, sit amet sodales diam varius a.",
    image: placeHolderImage,
    cost: 34,
    sold: 5,
  },
  {
    id: 3,
    title: "TITLE",
    description:
      "DESCRIPTION: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent elementum pellentesque sem, sit amet sodales diam varius a.",
    image: placeHolderImage,
    cost: 999,
    sold: 10,
  },
  {
    id: 4,
    title: "TITLE",
    description:
      "DESCRIPTION: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent elementum pellentesque sem, sit amet sodales diam varius a.",
    image: placeHolderImage,
    cost: 256,
    sold: 3,
  },
];
export const CART_DEV_ONLY = {
  1: {
    id: "1",
    title: "TITLE",
    image: placeHolderImage,
    price: 120,
    stock: 12,
    quantity: 2,
  },
  2: {
    id: "2",
    title: "TITLE",
    image: placeHolderImage,
    price: 150,
    stock: 3,
    quantity: 1,
  },
  3: {
    id: "3",
    title: "TITLE",
    image: placeHolderImage,
    price: 25,
    stock: 14,
    quantity: 3,
  },
};

export const NUMBER_OF_PAGES_IN_CATALOG_DEV_ONLY = 7;
