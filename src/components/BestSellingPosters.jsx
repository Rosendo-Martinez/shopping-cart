import { Link } from "react-router-dom";
import classes from "../styles/bestSellingPosters.module.css";
import PropTypes from "prop-types";
import { ITEM_LINK_PREFIX, SHOP_ITEMS_DEV_ONLY } from "../constants";

function BestSellingPosters() {
  return (
    <div className={classes.bestSellingPosters}>
      <h2 className={classes.title}>Best Selling Posters</h2>
      {SHOP_ITEMS_DEV_ONLY.sort((a, b) => a.sold - b.sold).map((p, i) => (
        <Poster
          key={p.id}
          title={p.title}
          bestSellingRank={i + 1}
          cost={p.cost}
          itemStorePage={`${ITEM_LINK_PREFIX}/${p.id}`}
          image={p.image}
        />
      ))}
    </div>
  );
}

function Poster({ title, bestSellingRank, cost, itemStorePage, image }) {
  return (
    <div className={classes.posterContainer}>
      <div className={classes.poster}>
        <div className={classes.posterDetails}>
          <div>
            <h3>{title}</h3>
            <p>#{bestSellingRank} best selling</p>
            <p>Cost: ${cost}</p>
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
  bestSellingRank: PropTypes.number,
  cost: PropTypes.number,
  itemStorePage: PropTypes.string,
  image: PropTypes.string,
};

export default BestSellingPosters;
