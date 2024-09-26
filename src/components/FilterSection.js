import React from 'react';

const FilterSection = ({ selectedCategory, onFilter }) => {
  const categories = ['All', 'Category 1', 'Category 2', 'Category 3'];

  return (
    <div className="filter-section">
      {categories.map((category) => (
        <button
          key={category}
          className={`filter-btn ${selectedCategory === category ? 'active' : ''}`}
          onClick={() => onFilter(category)}
        >
          {category}
        </button>
      ))}
    </div>
  );
};

export default FilterSection;
