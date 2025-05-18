import React, { useState } from 'react';

const MenuHero = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearchChange = (e) => {
    const value = e.target.value;
    setSearchTerm(value);
    onSearch(value);
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    onSearch(searchTerm);
  };

  return (
    <section className="menu-hero pt-30">
      <div className="menu-hero-overlay"></div>
      <img 
        src="https://images.unsplash.com/photo-1601050690597-df0568f70950?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" 
        alt="Indian chef preparing food" 
        className="w-full h-full object-cover"
        loading="lazy"
      />
      
      <div className="menu-hero-contents mt-20">
        <h1 className="text-4xl md:text-6xl font-medium mb-4">Our <span className="text-red-400">Menu</span></h1>
        <p className="text-xl mb-8 max-w-2xl mx-auto">Contemporary Indian cuisine with traditional roots</p>
        
        <form onSubmit={handleSearchSubmit} className="search-container relative">
          <input 
          
            type="text" 
            id="menu-search" 
            placeholder="Search dishes..." 
            className="w-full px-6 py-3 rounded-full border-0 text-black focus:ring-2 focus:ring-red-400 focus:outline-none"
            value={searchTerm}
            onChange={handleSearchChange}
            aria-label="Search menu items"
          />
          <button 
            type="submit"
            className="absolute right-3 top-3 text-gray-500 hover:text-red-600"
            aria-label="Search"
          >
            <i className="fas fa-search"></i>
          </button>
        </form>
      </div>
    </section>
  );
};

export default MenuHero;