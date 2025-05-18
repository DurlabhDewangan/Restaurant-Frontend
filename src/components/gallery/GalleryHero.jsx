import React from 'react';

const GalleryHero = () => {
  return (
    <section className="menu-hero relative h-[400px]">
      <div className="gallery-hero-overlay absolute inset-0 bg-black bg-opacity-40"></div>
      <img 
        src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" 
        alt="Restaurant interior" 
        className="w-full h-full object-cover"
        loading="lazy"
      />
      
     <div className="relative mt-[60px] z-10">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 text-white">Our <span className="text-red-400">Gallery</span></h1>
          <p className="text-xl  text-white max-w-2xl mx-auto">
            A visual journey through our culinary creations and ambiance
          </p>
        </div>
      </div>
    </section>
  );
};

export default GalleryHero;