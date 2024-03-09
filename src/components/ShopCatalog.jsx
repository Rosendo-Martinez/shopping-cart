import SortBy from "./SortBy";
import CatalogItemsContainer from "./CatalogItemsContainer";
import { useLoaderData, useParams, useSearchParams } from "react-router-dom";
import PageSelector from "./PageSelector";
import {
  SORT_BY_VALUES,
  DEFAULT_SORT_BY_VALUE,
  SORT_BY_PARAM_KEY,
  SHOP_PAGE_LINK_PREFIX,
} from "../constants";
import { fetchShopData } from "../function/function";
import classes from "../styles/shopCatalog.module.css";

function ShopCatalog() {
  const shop = useLoaderData();
  const { pageNumber } = useParams();

  const [searchParams, setSearchParams] = useSearchParams();

  const SEARCH_QUERY =
    searchParams.toString().length !== 0 ? `?${searchParams.toString()}` : "";

  return (
    <div className={classes.shopCatalog}>
      <SortBy
        sortByValues={SORT_BY_VALUES}
        activeValue={
          searchParams.get(SORT_BY_PARAM_KEY)
            ? searchParams.get(SORT_BY_PARAM_KEY)
            : SORT_BY_VALUES[DEFAULT_SORT_BY_VALUE]
        }
        onChange={(newSortByValue) =>
          setSearchParams((prev) => {
            prev.set(SORT_BY_PARAM_KEY, newSortByValue);
            return prev;
          })
        }
      />
      <CatalogItemsContainer shopItems={shop.items} />
      <PageSelector
        shopPageURLS={createPageShopURLS(shop.numberOfPages, SEARCH_QUERY)}
        activePageURLIndex={
          pageNumber === undefined ? 0 : Number(pageNumber) - 1
        }
      />
    </div>
  );
}

export async function loadShopItems({ params, request }) {
  const url = new URL(request.url);
  const sortBy =
    url.searchParams.get(SORT_BY_PARAM_KEY) ||
    SORT_BY_VALUES[DEFAULT_SORT_BY_VALUE];
  const pageNumber = params.pageNumber === undefined ? 1 : params.pageNumber;

  // params.pageNumber may be undefined (due to /shop being same as /shop/page/1)
  // sortby may be null (due to /shop being same as /shop?sortBy=<DEFAULT>)
  // Should deal with this eventually
  return fetchShopData(pageNumber, sortBy);
}

/**
 * Creates and returns the links to the shop pages with the given queries.
 *
 * @param {number} numberOfPages
 * @param {string} searchQueries example: ?color=red&width=12
 * @returns
 */
function createPageShopURLS(numberOfPages, searchQueries) {
  return Array(numberOfPages)
    .fill(null)
    .map((v, i) => `${SHOP_PAGE_LINK_PREFIX}/${i + 1}${searchQueries}`);
}

export default ShopCatalog;
