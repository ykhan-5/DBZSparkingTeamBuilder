import React from "react";

function Filters({ onFilterChange }) {
  const handleDifficultyChange = (event) => {
    onFilterChange(event.target.value);
  };

  return (
    <div className="filters">
      <h3>Filters</h3>
      <label>
        Difficulty:
        <select onChange={handleDifficultyChange}>
          <option value="easy">Easy</option>
          <option value="medium">Medium</option>
          <option value="hard">Hard</option>
        </select>
      </label>
      {/* Add more filters here */}
    </div>
  );
}

export default Filters;
