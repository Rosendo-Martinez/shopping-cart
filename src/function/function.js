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
