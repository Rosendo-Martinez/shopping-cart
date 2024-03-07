import Header from "../components/Header";
import Footer from "../components/Footer";
import { Outlet } from "react-router-dom";

/**
 * Returns the layout for home page.
 *
 * @return Layout for page
 */
function Layout({ totalItemsInCart }) {
  return (
    <div>
      <Header totalItemsInCart={totalItemsInCart} />
      <Outlet />
      <Footer />
    </div>
  );
}

export default Layout;
