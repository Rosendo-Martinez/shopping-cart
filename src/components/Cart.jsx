import { useLoaderData } from "react-router-dom";
import { fetchCart } from "../function/function";
import { SHOP_LINK } from "../constants";
import { Link } from "react-router-dom";
import NumberInput from "./NumberInput";
import { useState } from "react";

function Cart() {
  const cartData = useLoaderData();

  const [formQuantities, setFormQuantities] = useState(
    initialFormQuantitiesState(cartData),
  );

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
              {cartData.map(({ item }) => {
                return (
                  <CartItem
                    image={item.image}
                    title={item.title}
                    price={item.price}
                    quantity={formQuantities[item.id]}
                    onQuantityChange={(newQuantity) =>
                      setFormQuantities({
                        ...formQuantities,
                        [item.id]: newQuantity,
                      })
                    }
                  />
                );
              })}
            </tbody>
          </table>
        </div>

        <div>
          <h3>Total: ${calculateTotal(formQuantities, cartData)}</h3>
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

function initialFormQuantitiesState(cartData) {
  const toReturn = {};
  cartData.forEach(({ item, quantity }) => {
    toReturn[item.id] = quantity;
  });
  return toReturn;
}

function calculateTotal(formQuantities, cartData) {
  return cartData.reduce((prev, { item }) => {
    return prev + item.price * formQuantities[item.id];
  }, 0);
}

export async function loadCart() {
  return fetchCart({ email: "fake@gmail.com", password: "123abc" });
}

export default Cart;
