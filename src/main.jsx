import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ErrorPage from "./pages/ErrorPage.jsx";
import Layout from "./pages/Layout.jsx";
import Shop from "./pages/Shop.jsx";
import Home from "./pages/Home.jsx";
import ShopCatalog, { loadShopItems } from "./components/ShopCatalog.jsx";
import ShopItemPage from "./components/ShopItemPage.jsx";

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
          { path: "item/:itemID", element: <ShopItemPage /> },
        ],
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
