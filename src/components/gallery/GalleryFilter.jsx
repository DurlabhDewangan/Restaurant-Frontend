import React, { useState } from 'react';

const GalleryFilter = ({ onFilterChange }) => {
  const [activeFilter, setActiveFilter] = useState('all');

  const filters = [
    { id: 'all', name: 'All' },
    { id: 'food', name: 'Food' },
    { id: 'interior', name: 'Interior' },
    { id: 'events', name: 'Events' },
    { id: 'chefs', name: 'Chefs' }
  ];

  const handleFilterClick = (filterId) => {
    setActiveFilter(filterId);
    onFilterChange(filterId);
  };

  return (
    <div className="filter-buttons py-6 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="flex flex-wrap justify-center">
          {filters.map(filter => (
            <button
              key={filter.id}
              className={`category-btn ${activeFilter === filter.id ? 'active' : ''}`}
              onClick={() => handleFilterClick(filter.id)}
            >
              {filter.name}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default GalleryFilter;