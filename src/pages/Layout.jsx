import Header from "../components/Header";
import Home from "../components/Home";
import Footer from "../components/Footer";

/**
 * Returns the layout for home page.
 *
 * @return Layout for page
 */
function Layout() {
  return (
    <div>
      <Header />
      <Home />
      <Footer />
    </div>
  );
}

export default Layout;
