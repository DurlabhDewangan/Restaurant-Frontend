import React from 'react';
import PropTypes from 'prop-types';

const MenuDisplay = ({ menuItems }) => {
  if (!menuItems || menuItems.length === 0) {
    return (
      <section className="py-12 bg-gray-50" >
        <div className="container mx-auto px-6">
          <div id="no-results">
            <h3 className="text-2xl font-bold text-gray-700 mb-2">No items found</h3>
            <p className="text-gray-600">Try a different search term or category</p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-12 bg-gray-50" >
      <div className="container mx-auto px-6">
        <div className="menu-grid">
          {menuItems.map(item => (
            <div 
              key={item.id} 
              className="menu-item bg-white rounded-lg shadow-md overflow-hidden transition-all hover:shadow-lg"
              data-category={item.category}
            >
              <div className="menu-card">
                <div className="relative overflow-hidden h-48">
                  <img 
                    src={item.image} 
                    alt={item.name} 
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                    loading="lazy"
                    onError={(e) => {
                      e.target.src = 'https://via.placeholder.com/400x300?text=Food+Image';
                      e.target.onerror = null;
                    }}
                  />
                  <span className="absolute top-4 right-4 bg-yellow-300 text-red-500 px-3 py-1 rounded-full text-sm font-bold">
                    ₹{item.price}
                  </span>
                </div>
                <div className="p-6 flex-grow">
                  <h3 className="text-xl font-bold mb-2">{item.name}</h3>
                  <p className="text-gray-600 mb-4">{item.description}</p>
                  <div className="flex justify-between items-center mt-auto">
                    <span className={`text-sm font-medium ${item.vegetarian ? 'text-green-600' : 'text-red-600'}`}>
                      {item.vegetarian ? 'Vegetarian' : 'Non-Vegetarian'}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

MenuDisplay.propTypes = {
  menuItems: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
      image: PropTypes.string.isRequired,
      category: PropTypes.string.isRequired,
      vegetarian: PropTypes.bool.isRequired,
    })
  ),
};

export default MenuDisplay;