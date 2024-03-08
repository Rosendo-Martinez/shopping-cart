import { SHOP_LINK } from "../constants";
import { Link } from "react-router-dom";
import NumberInput from "./NumberInput";
import classes from "../styles/cart.module.css";

function Cart({ cart, updateItemQuantity, removeItemFromCart }) {
  return (
    <div className={classes.cart}>
      <h2 className={classes.cartTitle}>Shopping Cart</h2>

      <form>
        <div className={classes.tableContainer}>
          <table className={classes.table}>
            <tbody className={classes.tableBody}>
              <tr className={classes.tableHead}>
                <th>Item</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Total</th>
                <th></th>
              </tr>
              {Object.entries(cart).map(([id, item]) => {
                return (
                  <CartItem
                    id={id}
                    image={item.image}
                    title={item.title}
                    price={item.price}
                    quantity={item.quantity}
                    stock={item.stock}
                    onQuantityChange={(newQuantity) =>
                      updateItemQuantity(id, newQuantity)
                    }
                    removeItemFromCart={removeItemFromCart}
                  />
                );
              })}
            </tbody>
          </table>
        </div>

        <div className={classes.flex}>
          <div className={classes.subTotalAndCheckout}>
            <h3 className={classes.subTotal}>Total: $1 million</h3>
            <p>Taxes and shipping calculated at checkout.</p>
            <div>
              <Link className={classes.checkOut}>Checkout</Link>
            </div>
            <div>
              <Link className={classes.continueShopping} to={SHOP_LINK}>
                Continue Shopping
              </Link>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}

function CartItem({
  id,
  image,
  title,
  price,
  quantity,
  stock,
  onQuantityChange,
  removeItemFromCart,
}) {
  return (
    <tr className={classes.tableRow}>
      <td className={classes.imageAndTitle}>
        <div className={classes.itemData}>
          <img src={image} />
          <p>{title}</p>
        </div>
      </td>
      <td className={classes.price}>
        <div className={classes.container + " " + classes.containerPrice}>
          <p>${price}</p>
        </div>
      </td>
      <td className={classes.quantity}>
        <div className={classes.container}>
          <NumberInput
            number={quantity}
            onChange={onQuantityChange}
            max={stock}
          />
        </div>
      </td>
      <td className={classes.total}>
        <div className={classes.container}>
          <p>${quantity * price}</p>
        </div>
      </td>
      <td className={classes.removeItem}>
        <div className={classes.container}>
          <button
            className={classes.remove}
            type="button"
            onClick={() => removeItemFromCart(id)}
          >
            Remove
          </button>
        </div>
      </td>
    </tr>
  );
}

export default Cart;
