function SortBy({ sortByValues, indexOfActiveValue, onChange }) {
  return (
    <div>
      <label htmlFor="sortBy">Sort By:</label>

      <select
        onChange={(event) => {
          console.log(event.target.value);
          onChange(event.target.value);
        }}
        value={sortByValues[indexOfActiveValue]}
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

export default SortBy;
