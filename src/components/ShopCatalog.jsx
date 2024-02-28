import SortBy from "./SortBy";
import CardsContainer from "./CardsContainer";
import { getShopData } from "../functions/functions";
import { useLoaderData, useParams } from "react-router-dom";
import PageSelector from "./PageSelector";

function ShopCatalog() {
  const shopItems = useLoaderData();
  const { pageNumber } = useParams();

  return (
    <div>
      <SortBy />
      <CardsContainer shopItems={shopItems} />
      <PageSelector
        shopPageURLS={getShopPageURLS(5, "?col=12")}
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
