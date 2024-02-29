import { Link } from "react-router-dom";
import PropTypes from "prop-types";

function CatalogItem({ image, title, cost, itemStorePage }) {
  return (
    <div>
      <Link to={itemStorePage}>
        <div>
          <img src={image} />
        </div>
        <div>
          <p>{title}</p>
          <p>{cost}</p>
        </div>
      </Link>
    </div>
  );
}

CatalogItem.propTypes = {
  image: PropTypes.string,
  title: PropTypes.string,
  cost: PropTypes.number,
  itemStorePage: PropTypes.string,
};

export default CatalogItem;
