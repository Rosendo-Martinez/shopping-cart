import { SHOP_LINK } from "../constants";
import { Link } from "react-router-dom";
import NumberInput from "./NumberInput";
import classes from "../styles/cart.module.css";

function Cart({ cart, updateItemQuantity, removeItemFromCart }) {
  return (
    <div>
      <h2>Shopping Cart</h2>

      <form>
        <div className={classes.tableContainer}>
          <table className={classes.table}>
            <tbody className={classes.tableBody}>
              <tr className={classes.tableHead}>
                <th>Item</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Total</th>
                <th>?</th>
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

        <div>
          <h3>Total: $1 million</h3>
          <p>Taxes and shipping calculated at checkout.</p>
          <button>Checkout</button>
          <Link to={SHOP_LINK}>Continue Shopping</Link>
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
        <p>${price}</p>
      </td>
      <td className={classes.quantity}>
        <NumberInput
          number={quantity}
          onChange={onQuantityChange}
          max={stock}
        />
      </td>
      <td className={classes.total}>
        <p>{quantity * price}</p>
      </td>
      <td className={classes.removeItem}>
        <button type="button" onClick={() => removeItemFromCart(id)}>
          Remove
        </button>
      </td>
    </tr>
  );
}

export default Cart;
