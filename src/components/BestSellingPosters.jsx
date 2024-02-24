import placeHolder from "../assets/placeholder.png";
import { Link } from "react-router-dom";
import classes from "../styles/bestSellingPosters.module.css";

function BestSellingPosters() {
  const posters = [
    {
      id: 1,
      title: "TITLE",
      description:
        "DESCRIPTION: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent elementum pellentesque sem, sit amet sodales diam varius a.",
      image: placeHolder,
      cost: "40",
      sold: 6,
    },
    {
      id: 2,
      title: "TITLE",
      description:
        "DESCRIPTION: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent elementum pellentesque sem, sit amet sodales diam varius a.",
      image: placeHolder,
      cost: "40",
      sold: 5,
    },
    {
      id: 3,
      title: "TITLE",
      description:
        "DESCRIPTION: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent elementum pellentesque sem, sit amet sodales diam varius a.",
      image: placeHolder,
      cost: "40",
      sold: 10,
    },
    {
      id: 4,
      title: "TITLE",
      description:
        "DESCRIPTION: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent elementum pellentesque sem, sit amet sodales diam varius a.",
      image: placeHolder,
      cost: "40",
      sold: 3,
    },
  ];

  return (
    <div className={classes.bestSellingPosters}>
      <h2 className={classes.title}>Best Selling Posters</h2>
      {posters
        .sort((a, b) => a.sold - b.sold)
        .map((p, i) => (
          <Poster
            key={p.id}
            title={p.title}
            bestSellingRank={i + 1}
            cost={p.cost}
            storePage={`store/${p.id}`}
            image={p.image}
          />
        ))}
    </div>
  );
}

function Poster({ title, bestSellingRank, cost, storePage, image }) {
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
            <Link className={classes.posterLink} to={storePage}>
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

export default BestSellingPosters;
