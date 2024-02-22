import { Link } from "react-router-dom";
import star from "../assets/star.png";
import cart from "../assets/cart.png";
import classes from "../styles/header.module.css";

function Header() {
  const COUNT_OF_ITEMS_IN_CART = 1;
  const MAX_ITEMS = 99;

  return (
    <div className={classes.header}>
      <div className={classes.left}>
        <p className={classes.headerTitle}>Posters, Quotes and Gulag</p>
        <img className={classes.star} src={star} />
      </div>

      <div className={classes.center}>
        <Link className={classes.link} to={"/"}>
          Home
        </Link>
        <Link className={classes.link} to={"/Shop"}>
          Shop
        </Link>
      </div>

      <div className={classes.right}>
        <div className={classes.cartAndBadgeContainer}>
          <button
            onClick={() => console.log("Cart button clicked!")}
            className={classes.cartButton}
          >
            <img className={classes.cart} src={cart} />
          </button>
          {COUNT_OF_ITEMS_IN_CART > 0 ? (
            <div className={classes.badge}>
              <p className={classes.badgeText}>
                {COUNT_OF_ITEMS_IN_CART <= MAX_ITEMS
                  ? COUNT_OF_ITEMS_IN_CART
                  : "+99"}
              </p>
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
}

export default Header;
