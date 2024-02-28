import SortBy from "./SortBy";
import CardsContainer from "./CardsContainer";
import { getShopData } from "../functions/functions";
import { useLoaderData, useParams, useSearchParams } from "react-router-dom";
import PageSelector from "./PageSelector";
import { SORT_BY_VALUES, DEFAULT_SORT_BY_VALUE } from "../constants";

function ShopCatalog() {
  const shopItems = useLoaderData();
  const { pageNumber } = useParams();

  const [searchParams, setSearchParams] = useSearchParams();

  return (
    <div>
      <SortBy
        sortByValues={SORT_BY_VALUES}
        activeValue={
          searchParams.get("sortby")
            ? searchParams.get("sortby")
            : SORT_BY_VALUES[DEFAULT_SORT_BY_VALUE]
        }
        onChange={(newValue) =>
          setSearchParams((prev) => {
            prev.set("sortby", newValue);
            return prev;
          })
        }
      />
      <CardsContainer shopItems={shopItems} />
      <PageSelector
        shopPageURLS={getShopPageURLS(5, `?${searchParams.toString()}`)}
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
 * @param {string} queries example: ?color=red&width=12
 * @returns
 */
function getShopPageURLS(numberOfPages, queries = "") {
  return Array(numberOfPages)
    .fill(null)
    .map((v, i) => `/shop/page/${1 + i}${queries}`);
}

export default ShopCatalog;
