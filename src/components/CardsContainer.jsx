import Card from "./Card";
function CardsContainer({ shopItems }) {
  return (
    <div>
      {shopItems.map((cd) => (
        <Card
          key={cd.id}
          image={cd.image}
          title={cd.title}
          cost={cd.cost}
          storePage={`item/${cd.id}`}
        />
      ))}
    </div>
  );
}

export default CardsContainer;
