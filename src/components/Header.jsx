import { Link } from "react-router-dom";
import star from "../assets/star.png";
import cart from "../assets/cart.png";
import classes from "../styles/header.module.css";

function Header({ itemsInCartCount, handleCartClick }) {
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
          <button onClick={handleCartClick} className={classes.cartButton}>
            <img className={classes.cart} src={cart} />
          </button>
          {itemsInCartCount > 0 ? (
            <div className={classes.badge}>
              <p className={classes.badgeText}>
                {itemsInCartCount <= MAX_ITEMS ? itemsInCartCount : "+99"}
              </p>
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
}

export default Header;
