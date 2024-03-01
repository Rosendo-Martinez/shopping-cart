import CatalogItem from "./CatalogItem";
import { ITEM_LINK_PREFIX } from "../constants";
import PropTypes from "prop-types";
import classes from "../styles/catalogItemsContainer.module.css";

function CatalogItemsContainer({ shopItems }) {
  return (
    <div className={classes.container}>
      <div className={classes.grid}>
        {shopItems.map((cd) => (
          <CatalogItem
            key={cd.id}
            image={cd.image}
            title={cd.title}
            cost={cd.cost}
            itemStorePage={`${ITEM_LINK_PREFIX}/${cd.id}`}
          />
        ))}
      </div>
    </div>
  );
}

CatalogItemsContainer.propTypes = {
  shopItems: PropTypes.arrayOf(
    PropTypes.shape({
      image: PropTypes.string,
      title: PropTypes.string,
      cost: PropTypes.number,
      itemStorePage: PropTypes.string,
    }),
  ),
};

export default CatalogItemsContainer;
