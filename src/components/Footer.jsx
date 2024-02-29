import star from "../assets/star.png";
import github from "../assets/github-logo.png";
import classes from "../styles/footer.module.css";
import { Link } from "react-router-dom";
import { HOME_LINK } from "../constants";

function Footer() {
  return (
    <div className={classes.footer}>
      <div className={classes.top}>
        <div>
          <div className={classes.nameAndLogo}>
            <p className={classes.name}>Posters, Quotes and Gulag</p>
            <img className={classes.star} src={star} />
          </div>
          <p>This is a fake store.</p>
        </div>
        <div className={classes.right}>
          <Link to={HOME_LINK}>Help</Link>
          <Link to={HOME_LINK}>Privacy</Link>
          <Link to={HOME_LINK}>Contact</Link>
          <Link to={HOME_LINK}>Terms & Conditions</Link>
        </div>
      </div>

      <div className={classes.bottom}>
        <a href="https://github.com/Rosendo-Martinez">
          <img className={classes.github} src={github} />
        </a>
        <p>Developed by R. Martinez</p>
      </div>
    </div>
  );
}

export default Footer;
