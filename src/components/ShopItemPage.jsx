import { useLoaderData } from "react-router-dom";
import { fetchItemData } from "../function/function";

function ShopItemPage() {
  const item = useLoaderData();

  return <h2>Shop Item Page!</h2>;
}

export async function loadShopItem({ params }) {
  return fetchItemData(params.itemID);
}

export default ShopItemPage;
