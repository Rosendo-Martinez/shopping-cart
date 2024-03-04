import { useLoaderData } from "react-router-dom";
import { fetchCart } from "../function/function";
import { SHOP_LINK } from "../constants";
import { Link } from "react-router-dom";

// use a html table for layout
function Cart() {
  const cartData = useLoaderData();

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
              {cartData.map(({ item, quantity }) => {
                return (
                  <CartItem
                    image={item.image}
                    title={item.title}
                    price={item.price}
                    quantity={quantity}
                  />
                );
              })}
            </tbody>
          </table>
        </div>

        <div>
          <h3>
            Total: $
            {cartData.reduce(
              (acc, current) => acc + current.item.price * current.quantity,
              0,
            )}
          </h3>
          <p>Taxes and shipping calculated at checkout.</p>
          <button>Checkout</button>
          <Link to={SHOP_LINK}>Continue Shopping</Link>
        </div>
      </form>
    </div>
  );
}

function CartItem({ image, title, price, quantity }) {
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
        <input type="number" value={quantity} />
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

export async function loadCart() {
  return fetchCart({ email: "fake@gmail.com", password: "123abc" });
}

export default Cart;
