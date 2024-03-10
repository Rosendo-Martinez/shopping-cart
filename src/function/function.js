import { CART_DEV_ONLY } from "../constants";
import { SHOP_ITEMS } from "../shopItems";

/**
 * Fetches the item data for the given page with given sort by option, and the number of catalog pages.
 *
 * @param {number} page the page number of the catalog
 * @param {string} sortBy
 * @returns
 */
export async function fetchShopData(page, sortBy) {
  const itemsPerPage = 6;
  const numberOfPages = Math.ceil(SHOP_ITEMS.length / itemsPerPage);

  const temp = [...SHOP_ITEMS];
  switch (sortBy) {
    case "Price: low to high":
      temp.sort((a, b) => a.price - b.price);
      break;
    case "Price: high to low":
      temp.sort((a, b) => b.price - a.price);
      break;
    case "Alphabetically: A-Z":
      temp.sort(function (a, b) {
        if (a.title.toLocaleLowerCase() < b.title.toLocaleLowerCase()) {
          return -1;
        }
        if (a.title.toLocaleLowerCase() > b.title.toLocaleLowerCase()) {
          return 1;
        }
        return 0;
      });
      break;
    case "Alphabetically: Z-A":
      temp.sort(function (a, b) {
        if (a.title.toLocaleLowerCase() < b.title.toLocaleLowerCase()) {
          return 1;
        }
        if (a.title.toLocaleLowerCase() > b.title.toLocaleLowerCase()) {
          return -1;
        }
        return 0;
      });
      break;
  }

  const start = (page - 1) * itemsPerPage;
  const end =
    start + itemsPerPage > SHOP_ITEMS.length
      ? SHOP_ITEMS.length
      : start + itemsPerPage;

  return {
    numberOfPages: numberOfPages,
    items: temp.slice(start, end),
  };
}

/**
 * Fetches data of the shop item with the given ID.
 *
 * @param {string} id id of shop item
 * @returns {Object} item data
 */
export async function fetchItemData(id) {
  // TODO: error checking for invalid id
  return SHOP_ITEMS.find((item) => item.id === id);
}

/**
 * Adds the item with the given ID to the users cart.
 *
 * @param {string} id
 * @returns {boolean} true if added to cart, else false
 */
export async function addToCart(id) {
  const result = await new Promise((resolve) =>
    setTimeout(() => resolve(true), 3000),
  );

  return result;
}

/**
 * Fetches the user's cart.
 *
 * @param {{email: string, password: string}} credentials
 * @return {{item:{id:string, image:string, title:string, price:Number, stock:Number }, quantity: Number}[]}
 */
export async function fetchCart(credentials) {
  return CART_DEV_ONLY;
}

export async function fetchBestSellingPosters() {
  const temp = [...SHOP_ITEMS];
  temp.sort((a, b) => b.sold - a.sold);
  return temp.slice(0, 5);
}
