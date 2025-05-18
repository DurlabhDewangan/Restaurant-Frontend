import React, { useState } from 'react';
import Lightbox from './Lightbox';

const GalleryGrid = ({ items, filter }) => {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const filteredItems = filter === 'all' 
    ? items 
    : items.filter(item => item.category === filter);

  const openLightbox = (index) => {
    setCurrentIndex(index);
    setLightboxOpen(true);
    document.body.style.overflow = 'hidden';
  };

  return (
    <div className="container mx-auto px-6">
      <div className="gallery-grid">
        {filteredItems.map((item, index) => (
          <div 
            key={item.id}
            className="gallery-item"
            onClick={() => openLightbox(index)}
          
          >
            <img 
              src={item.imageUrl} 
              alt={item.title} 
              className="gallery-img"
              loading="lazy"
            />
            <span className="gallery-category">{item.category}</span>
            <div className="gallery-caption">
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </div>
          </div>
        ))}
      </div>

      {lightboxOpen && (
        <Lightbox
          items={filteredItems}
          currentIndex={currentIndex}
          onClose={() => setLightboxOpen(false)}
          onNavigate={(dir) => setCurrentIndex(prev => 
            (prev + dir + filteredItems.length) % filteredItems.length
          )}
        />
      )}
    </div>
  );
};

export default GalleryGrid;