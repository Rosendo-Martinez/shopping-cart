import { useLoaderData } from "react-router-dom";
import { fetchCart } from "../function/function";

function Cart() {
  const cartData = useLoaderData();

  return <h2>Cart!</h2>;
}

export async function loadCart() {
  return fetchCart({ email: "fake@gmail.com", password: "123abc" });
}

export default Cart;
