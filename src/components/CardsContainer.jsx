import Card from "./Card";
import { ITEM_LINK_PREFIX } from "../constants";

function CardsContainer({ shopItems }) {
  return (
    <div>
      {shopItems.map((cd) => (
        <Card
          key={cd.id}
          image={cd.image}
          title={cd.title}
          cost={cd.cost}
          storePage={`${ITEM_LINK_PREFIX}/${cd.id}`}
        />
      ))}
    </div>
  );
}

export default CardsContainer;
