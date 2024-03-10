import { Link, useLoaderData } from "react-router-dom";
import { fetchItemData } from "../function/function";
import classes from "../styles/shopItemPage.module.css";
import { CART_LINK } from "../constants";

function ShopItemPage({ addItemToCart, cart }) {
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
            <p className={classes.description}>
              <b>Description:</b> {item.description}
            </p>
            <p className={classes.quote}>
              <b>Quote:</b> {item.quote}
            </p>
            {item.sold > 10 ? <p>Over {item.sold} sold so far.</p> : null}
            {item.stock < 15 ? (
              <p>Only {item.stock} in stock! Buy one before they run out.</p>
            ) : null}
          </div>
          <div>
            {item.id in cart ? (
              <div>
                <p>Item in cart.</p>
                <Link className={classes.goToCart} to={CART_LINK}>
                  View Cart
                </Link>
              </div>
            ) : (
              <button
                className={classes.addToCart}
                onClick={() => addItemToCart(item)}
              >
                Add To Cart
              </button>
            )}
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
