import PropTypes from "prop-types";
import classes from "../styles/sortBy.module.css";

function SortBy({ sortByValues, onChange, activeValue }) {
  return (
    <div className={classes.container}>
      <label className={classes.label} htmlFor="sortBy">
        Sort By:
      </label>

      <select
        className={classes.select}
        onChange={(event) => {
          onChange(event.target.value);
        }}
        value={activeValue}
        id="sortBy"
      >
        {sortByValues.map((val, i) => (
          <option key={i} value={val}>
            {val}
          </option>
        ))}
      </select>
    </div>
  );
}

SortBy.propTypes = {
  sortByValues: PropTypes.arrayOf(PropTypes.string),
  onChange: PropTypes.func,
  activeValue: PropTypes.string,
};

export default SortBy;
