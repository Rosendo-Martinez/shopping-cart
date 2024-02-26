import Card from "./Card";
import { getShopPageData } from "../functions/functions";

function CardsContainer() {
  const cardsData = getShopPageData();

  return (
    <div>
      {cardsData.map((cd) => (
        <Card
          key={cd.id}
          image={cd.image}
          title={cd.title}
          cost={cd.cost}
          storePage={`shop/${cd.id}`}
        />
      ))}
    </div>
  );
}

export default CardsContainer;
