import SortBy from "./SortBy";
import CardsContainer from "./CardsContainer";
import { getShopData } from "../functions/functions";
import { useLoaderData, useParams, useSearchParams } from "react-router-dom";
import PageSelector from "./PageSelector";
import {
  SORT_BY_VALUES,
  DEFAULT_SORT_BY_VALUE,
  SORT_BY_PARAM_KEY,
  SHOP_PAGE_LINK_PREFIX,
} from "../constants";

function ShopCatalog() {
  const shopItems = useLoaderData();
  const { pageNumber } = useParams();

  const [searchParams, setSearchParams] = useSearchParams();

  // temporary
  const NUMBER_OF_PAGES = 5;
  const SEARCH_QUERY =
    searchParams.toString().length !== 0 ? `?${searchParams.toString()}` : "";

  return (
    <div>
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
      <CardsContainer shopItems={shopItems} />
      <PageSelector
        shopPageURLS={createPageShopURLS(NUMBER_OF_PAGES, SEARCH_QUERY)}
        activePageURLIndex={
          pageNumber === undefined ? 0 : Number(pageNumber) - 1
        }
      />
    </div>
  );
}

export async function loadShopItems() {
  return getShopData();
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
