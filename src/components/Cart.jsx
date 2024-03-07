import { SHOP_LINK } from "../constants";
import { Link } from "react-router-dom";
import NumberInput from "./NumberInput";

function Cart({ cart, updateItemQuantity }) {
  return (
    <div>
      <h2>Shopping Cart</h2>

      <form>
        <div>
          <table>
            <tbody>
              <tr>
                <th>Item</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Total</th>
                <th>?</th>
              </tr>
              {Object.entries(cart).map(([id, item]) => {
                return (
                  <CartItem
                    image={item.image}
                    title={item.title}
                    price={item.price}
                    quantity={item.quantity}
                    onQuantityChange={(newQuantity) =>
                      updateItemQuantity(id, newQuantity)
                    }
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

function CartItem({ image, title, price, quantity, onQuantityChange }) {
  return (
    <tr>
      <td>
        <img src={image} />
        <p>{title}</p>
      </td>
      <td>
        <p>${price}</p>
      </td>
      <td>
        <NumberInput number={quantity} onChange={onQuantityChange} />
        <p>Only 3 in stock!</p>
      </td>
      <td>
        <p>{quantity * price}</p>
      </td>
      <td>
        <button>Remove</button>
      </td>
    </tr>
  );
}

export default Cart;
