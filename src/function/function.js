import {
  SHOP_ITEMS_DEV_ONLY,
  NUMBER_OF_PAGES_IN_CATALOG_DEV_ONLY,
} from "../constants";

/**
 * Fetches the item data for the given page with given sort by option, and the number of catalog pages.
 *
 * @param {number} page the page number of the catalog
 * @param {string} sortBy
 * @returns
 */
export async function fetchShopData(page, sortBy) {
  // no API for now, maybe in future
  return {
    numberOfPages: NUMBER_OF_PAGES_IN_CATALOG_DEV_ONLY,
    items: SHOP_ITEMS_DEV_ONLY,
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
  return SHOP_ITEMS_DEV_ONLY[0];
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
