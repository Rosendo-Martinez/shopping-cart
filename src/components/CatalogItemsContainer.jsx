import Card from "./Card";
import { ITEM_LINK_PREFIX } from "../constants";
import PropTypes from "prop-types";

function CatalogItemsContainer({ shopItems }) {
  return (
    <div>
      {shopItems.map((cd) => (
        <Card
          key={cd.id}
          image={cd.image}
          title={cd.title}
          cost={cd.cost}
          itemStorePage={`${ITEM_LINK_PREFIX}/${cd.id}`}
        />
      ))}
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
