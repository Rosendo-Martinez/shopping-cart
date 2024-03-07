import { Navigate, useLoaderData } from "react-router-dom";
import { addToCart, fetchItemData } from "../function/function";
import { useState } from "react";
import classes from "../styles/shopItemPage.module.css";
import { CART_LINK } from "../constants";

function ShopItemPage() {
  const item = useLoaderData();
  const { isInCart, isLoading, now } = useAddToCart(item.id);

  if (isLoading === false && isInCart) {
    return <Navigate to={CART_LINK} />;
  }

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
            <button className={classes.addToCart} onClick={now}>
              Add To Cart
            </button>
            {isLoading ? <p>Item being added to cart...</p> : null}
          </div>
        </div>
      </div>
    </div>
  );
}

/**
 * Hook for adding item to user's cart.
 *
 * Call the now function to start process of adding item to user's cart.
 * isInCart will be true if item successfully added to users cart, else false.
 * isLoading will be true while is in process of being added to cart, and false when process had ended.
 *
 * Note, can only try to add item to cart once.
 *
 * @param {string} id
 * @returns {{isInCart: boolean, isLoading: boolean, now: Function}}
 */
function useAddToCart(id) {
  const [isInCart, setIsInCart] = useState(null);
  const [isLoading, setIsLoading] = useState(null);

  function now() {
    if (isLoading === null) {
      setIsLoading(true);

      addToCart(id)
        .then((result) => setIsInCart(result))
        .finally(() => setIsLoading(false));
    }
  }

  return { isInCart, isLoading, now };
}

export async function loadShopItem({ params }) {
  return fetchItemData(params.itemID);
}

export default ShopItemPage;
