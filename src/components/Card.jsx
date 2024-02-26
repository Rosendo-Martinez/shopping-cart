import { Link } from "react-router-dom";
import PropTypes from "prop-types";

function Card({ image, title, cost, storePage }) {
  return (
    <div>
      <Link to={storePage}>
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
  storePage: PropTypes.string,
};

export default Card;
