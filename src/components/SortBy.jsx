import PropTypes from "prop-types";

function SortBy({ sortByValues, onChange, activeValue }) {
  return (
    <div>
      <label htmlFor="sortBy">Sort By:</label>

      <select
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
