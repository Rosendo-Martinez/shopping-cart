import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ErrorPage from "./pages/ErrorPage.jsx";
import Layout from "./pages/Layout.jsx";
import Shop from "./pages/Shop.jsx";
import Home from "./pages/Home.jsx";
import ShopCatalog, { loadShopItems } from "./components/ShopCatalog.jsx";
import ShopItemPage, { loadShopItem } from "./components/ShopItemPage.jsx";
import Cart from "./components/Cart.jsx";
import { useEffect, useReducer } from "react";
import { fetchCart } from "./function/function.js";

function App() {
  const [cart, dispatch] = useReducer(reducer, {});

  useEffect(() => {
    fetchCart().then((cart) => dispatch({ type: "SET", cart: cart }));
  }, []);

  function updateItemQuantity(id, quantity) {
    dispatch({ type: "UPDATE", quantity: quantity, id: id });
  }

  function addItemToCart(item) {
    dispatch({ type: "ADD", item: item });
  }

  function removeItemFromCart(id) {
    dispatch({ type: "REMOVE", id: id });
  }

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      errorElement: <ErrorPage />,
      children: [
        { index: true, element: <Home /> },
        {
          path: "shop",
          element: <Shop />,
          children: [
            { index: true, element: <ShopCatalog />, loader: loadShopItems },
            {
              path: "page/:pageNumber",
              element: <ShopCatalog />,
              loader: loadShopItems,
            },
            {
              path: "item/:itemID",
              element: (
                <ShopItemPage addItemToCart={addItemToCart} cart={cart} />
              ),
              loader: loadShopItem,
            },
            {
              path: "cart",
              element: (
                <Cart
                  cart={cart}
                  updateItemQuantity={updateItemQuantity}
                  removeItemFromCart={removeItemFromCart}
                />
              ),
            },
          ],
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

function reducer(state, action) {
  switch (action.type) {
    case "ADD":
      if (action.item.id in state) {
        return state;
      }
      return { ...state, [action.item.id]: { ...action.item, quantity: 1 } };
    case "UPDATE":
      return {
        ...state,
        [action.id]: { ...state[action.id], quantity: action.quantity },
      };
    case "REMOVE":
      const copy = { ...state };
      delete copy[action.id];
      return copy;
    case "SET":
      return action.cart;
  }
}

export default App;
