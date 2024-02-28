import SortBy from "./SortBy";
import CardsContainer from "./CardsContainer";
import { getShopData } from "../functions/functions";
import { useLoaderData } from "react-router-dom";
import PageSelector from "./PageSelector";

function ShopCatalog() {
  const shopItems = useLoaderData();

  return (
    <div>
      <SortBy />
      <CardsContainer shopItems={shopItems} />
      <PageSelector />
    </div>
  );
}

export async function loadShopItems() {
  return getShopData();
}

export default ShopCatalog;
