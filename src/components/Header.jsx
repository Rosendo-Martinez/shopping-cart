import { Link } from "react-router-dom";
import star from "../assets/star.png";
import cart from "../assets/cart.png";
import classes from "../styles/header.module.css";

function Header() {
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
        <button className={classes.cartButton}>
          <img className={classes.cart} src={cart} />
        </button>
      </div>
    </div>
  );
}

export default Header;
