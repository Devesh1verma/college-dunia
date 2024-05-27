import React from 'react';
import './SearchAndSort.css';

const SearchAndSort = ({ onSearch, onSort }) => {
  return (
    <div className="search-sort">
      <input
        type="text"
        placeholder="Search by name"
        onChange={(e) => onSearch(e.target.value)}
      />
      <button onClick={() => onSort('reviews')}>Sort by Reviews</button>
      <button onClick={() => onSort('fees')}>Sort by Fees</button>
      <button onClick={() => onSort('placement')}>Sort by Placement</button>
      <button onClick={() => onSort('ranking')}>Sort by Ranking</button>
    </div>
  );
};

export default SearchAndSort;
