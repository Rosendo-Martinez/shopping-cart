import { Link } from "react-router-dom";
import PropTypes from "prop-types";

export default function PageSelector({ shopPageURLS, activePageURLIndex }) {
  return (
    <div>
      <div>Current page: {activePageURLIndex + 1}</div>
      {activePageURLIndex != 0 ? (
        <Link to={shopPageURLS[activePageURLIndex - 1]}>Back</Link>
      ) : null}
      {shopPageURLS.map((url, i) => (
        <Link key={url} to={url}>
          {i + 1}
        </Link>
      ))}
      {activePageURLIndex < shopPageURLS.length - 1 ? (
        <Link to={shopPageURLS[activePageURLIndex + 1]}>Next</Link>
      ) : null}
    </div>
  );
}

PageSelector.propTypes = {
  shopPageURLS: PropTypes.arrayOf(PropTypes.string),
  activePageURLIndex: PropTypes.number,
};
