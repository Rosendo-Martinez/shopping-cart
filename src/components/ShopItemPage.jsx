import { useLoaderData } from "react-router-dom";
import { fetchItemData } from "../function/function";
import classes from "../styles/shopItemPage.module.css";

function ShopItemPage({ addItemToCart }) {
  const item = useLoaderData();

  return (
    <div className={classes.container}>
      <div className={classes.flex}>
        <div className={classes.left}>
          <img className={classes.image} src={item.image} />
        </div>

        <div className={classes.right}>
          <div>
            <h2 className={classes.title}>{item.title}</h2>
            <p className={classes.cost}>${item.price}</p>
            <p className={classes.description}>{item.description}</p>
          </div>
          <div>
            <button
              className={classes.addToCart}
              onClick={() => addItemToCart(item)}
            >
              Add To Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export async function loadShopItem({ params }) {
  return fetchItemData(params.itemID);
}

export default ShopItemPage;
