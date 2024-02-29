import { SHOP_ITEMS_DEV_ONLY } from "../constants";

/**
 * Fetches the shop item data.
 *
 * @param {number} page the page number of the catalog
 * @param {string} sortBy
 */
export async function fetchShopData(page, sortBy) {
  // no API for now, maybe in future
  return SHOP_ITEMS_DEV_ONLY;
}
