import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ErrorPage from "./pages/ErrorPage.jsx";
import Layout from "./pages/Layout.jsx";
import Shop from "./pages/Shop.jsx";
import Home from "./pages/Home.jsx";
import ShopCatalog, { loadShopItems } from "./components/ShopCatalog.jsx";
import ShopItemPage, { loadShopItem } from "./components/ShopItemPage.jsx";
import Cart, { loadCart } from "./components/Cart.jsx";

function App() {
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
              element: <ShopItemPage />,
              loader: loadShopItem,
            },
            {
              path: "cart",
              element: <Cart />,
              loader: loadCart,
            },
          ],
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
