import { useState } from "react";
import { getSortByValues } from "../functions/functions";

function SortBy() {
  const sortByValues = getSortByValues();

  const [sortBy, setSortBy] = useState(sortByValues[0]);
  return (
    <div>
      <label htmlFor="sortBy">Sort By:</label>

      <select
        onChange={(event) => setSortBy(event.target.value)}
        value={sortBy}
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
