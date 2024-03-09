import { Link } from "react-router-dom";
import classes from "../styles/bestSellingPosters.module.css";
import PropTypes from "prop-types";
import { ITEM_LINK_PREFIX } from "../constants";

function BestSellingPosters({ bestSelling }) {
  return (
    <div className={classes.bestSellingPosters}>
      <h2 className={classes.title}>Best Selling Posters</h2>
      {bestSelling
        .sort((a, b) => b.sold - a.sold)
        .map((p, i) => (
          <Poster
            key={p.id}
            title={p.title}
            price={p.price}
            itemStorePage={`${ITEM_LINK_PREFIX}/${p.id}`}
            image={p.image}
            quote={p.quote}
            sold={p.sold}
          />
        ))}
    </div>
  );
}

function Poster({ title, price, itemStorePage, image, quote, sold }) {
  return (
    <div className={classes.posterContainer}>
      <div className={classes.poster}>
        <div className={classes.posterDetails}>
          <div>
            <h3>{title}</h3>
            <p className={classes.quote}>
              <b>Quote:</b> {quote}
            </p>
            <p>
              <b>Sold:</b> {sold}
            </p>
            <p>
              <b>Cost:</b> ${price}
            </p>
          </div>
          <div>
            <Link className={classes.posterLink} to={itemStorePage}>
              View Store Page
            </Link>
          </div>
        </div>
        <div className={classes.posterImageContainer}>
          <img src={image} />
        </div>
      </div>
    </div>
  );
}

Poster.propTypes = {
  title: PropTypes.string,
  price: PropTypes.number,
  itemStorePage: PropTypes.string,
  image: PropTypes.string,
};

export default BestSellingPosters;
