import { Link } from "react-router-dom";
import star from "../assets/star.png";
import cart from "../assets/cart.png";
import classes from "../styles/header.module.css";
import PropTypes from "prop-types";
import { SHOP_LINK, HOME_LINK } from "../constants";

function Header({ itemsInCartCount, handleCartClick }) {
  const MAX_ITEMS = 99;

  return (
    <div className={classes.header}>
      <div className={classes.left}>
        <p className={classes.headerTitle}>Posters, Quotes and Gulag</p>
        <img className={classes.star} src={star} />
      </div>

      <div className={classes.center}>
        <Link className={classes.link} to={HOME_LINK}>
          Home
        </Link>
        <Link className={classes.link} to={SHOP_LINK}>
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

Header.propTypes = {
  itemsInCartCount: PropTypes.number,
  handleCartClick: PropTypes.func,
};

export default Header;
