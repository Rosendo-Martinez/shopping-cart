import { Link } from "react-router-dom";
import PropTypes from "prop-types";

function Card({ image, title, cost, itemStorePage }) {
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

Card.propTypes = {
  image: PropTypes.string,
  title: PropTypes.string,
  cost: PropTypes.number,
  itemStorePage: PropTypes.string,
};

export default Card;
