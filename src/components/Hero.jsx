import { Link } from "react-router-dom";
import aleksandrSolzhenitsyn from "../assets/aleksandrSolzhenitsyn.jpg";
import classes from "../styles/hero.module.css";
import { SHOP_LINK } from "../constants";

function Hero() {
  return (
    <div className={classes.hero}>
      <div className={classes.CTAContainer}>
        <div className={classes.left}></div>
        <div className={classes.right}>
          <h1>
            Buy Posters <br />
            with Quotes from <br />
            "The Gulag Archipelago"
          </h1>
          <div>
            <Link className={classes.shopLink} to={SHOP_LINK}>
              Shop
            </Link>
          </div>
        </div>
      </div>

      <div>
        <img className={classes.heroImage} src={aleksandrSolzhenitsyn} />
      </div>
    </div>
  );
}

export default Hero;
