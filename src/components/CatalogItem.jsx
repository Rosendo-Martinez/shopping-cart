import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import classes from "../styles/catalogItem.module.css";

function CatalogItem({ image, title, price, itemStorePage }) {
  return (
    <div className={classes.container}>
      <Link className={classes.link} to={itemStorePage}>
        <div className={classes.imageContainer}>
          <img className={classes.image} src={image} />
        </div>
        <div>
          <p className={classes.title}>{title}</p>
          <p className={classes.cost}>{price}</p>
        </div>
      </Link>
    </div>
  );
}

CatalogItem.propTypes = {
  image: PropTypes.string,
  title: PropTypes.string,
  price: PropTypes.number,
  itemStorePage: PropTypes.string,
};

export default CatalogItem;
