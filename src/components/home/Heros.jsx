import React from 'react';
import { Link } from 'react-router-dom';

const HeroSection = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16"
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-60 z-10"></div>
      
      {/* Background Image */}
      <img
        src="https://images.unsplash.com/photo-1547592180-85f173990554?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
        alt="Modern Indian cuisine"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Content */}
      <div className="relative z-20 text-center px-6 max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif font-medium text-white mb-6">
          Modern Indian Cuisine
        </h1>
        <p className="text-xl md:text-2xl text-white mb-8 max-w-2xl mx-auto">
          Where traditional flavors meet contemporary presentation
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
  <Link
    to="/menu"
    className="btn bg-primary hover:bg-secondary text-white px-8 py-3 rounded-full transition-all duration-300 hover:-translate-y-1"
  >
    View Menu
  </Link>
  <Link
    to="/reservation"
    className="btn border-2 border-white text-white hover:bg-white hover:text-primary px-8 py-3 rounded-full transition-all duration-300 hover:-translate-y-1"
  >
    Book a Table
  </Link>
</div>
      </div>
    </section>
  );
};

export default HeroSection;