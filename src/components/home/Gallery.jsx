import React from "react";
import { Link } from 'react-router-dom';

const galleryItems = [
  {
    src: "https://images.unsplash.com/photo-1542367592-8849eb950fd8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8aW5kaWFuJTIwZm9vZHxlbnwwfHwwfHx8MA%3D%3D",
    alt: "Restaurant interior",
  },
  {
    src: "https://images.unsplash.com/photo-1596797038530-2c107229654b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8aW5kaWFuJTIwZm9vZHxlbnwwfHwwfHx8MA%3D%3D",
    alt: "Chef preparing dish",
  },
  {
    src: "https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGluZGlhbiUyMGZvb2R8ZW58MHx8MHx8fDA%3D",
    alt: "Plated dish",
  },
  {
    src: "https://images.unsplash.com/photo-1505253758473-96b7015fcd40?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGluZGlhbiUyMGZvb2R8ZW58MHx8MHx8fDA%3D",
    alt: "Dessert",
  },
];

const Gallery = () => {
  return (
    <section id="gallery" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Our Gallery</h2>
          <p className="text-lg max-w-2xl mx-auto">
            Visual stories of our culinary creations
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {galleryItems.map((item, idx) => (
            <Link 
              to="/gallery" 
              key={idx} 
              className="gallery-item relative overflow-hidden group aspect-square block"
            >
              <img
                src={item.src}
                alt={item.alt}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                loading="lazy"
              />
              <div className="gallery-overlay absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <i className="fas fa-search-plus text-white text-3xl"></i>
              </div>
            </Link>
          ))}
        </div>

        <div className="text-center mt-16">
          <Link
            to="/gallery"
            className="btn btn-primary inline-block bg-primary text-white px-6 py-3 rounded-full hover:bg-primary-dark transition"
          >
            View Gallery
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Gallery;