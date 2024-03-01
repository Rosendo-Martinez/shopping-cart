import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import classes from "../styles/pageSelector.module.css";

export default function PageSelector({ shopPageURLS, activePageURLIndex }) {
  return (
    <div className={classes.container}>
      {activePageURLIndex != 0 ? (
        <Link
          className={classes.link}
          to={shopPageURLS[activePageURLIndex - 1]}
        >
          Back
        </Link>
      ) : null}
      {shopPageURLS.map((url, i) => (
        <Link
          className={`${classes.link} ${i === activePageURLIndex ? classes.activeLink : ""}`}
          key={url}
          to={url}
        >
          {i + 1}
        </Link>
      ))}
      {activePageURLIndex < shopPageURLS.length - 1 ? (
        <Link
          className={classes.link}
          to={shopPageURLS[activePageURLIndex + 1]}
        >
          Next
        </Link>
      ) : null}
    </div>
  );
}

PageSelector.propTypes = {
  shopPageURLS: PropTypes.arrayOf(PropTypes.string),
  activePageURLIndex: PropTypes.number,
};
