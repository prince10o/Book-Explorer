import React from "react";
import "./Filter.css";

const Filter = ({ filter, handleFilterChange }) => {
  return (
    <input
      className="filter-input"
      type="text"
      value={filter}
      onChange={handleFilterChange}
      placeholder="Search by title..."
    />
  );
};

export default Filter;
