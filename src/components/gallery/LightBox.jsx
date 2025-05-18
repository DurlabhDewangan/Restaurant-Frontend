import React, { useEffect } from 'react';
import { FaTimes, FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const Lightbox = ({ items, currentIndex, onClose, onNavigate }) => {
  useEffect(() => {
    // Disable scrolling when lightbox opens
    document.body.style.overflow = 'hidden';
    
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') onNavigate(-1);
      if (e.key === 'ArrowRight') onNavigate(1);
    };

    document.addEventListener('keydown', handleKeyDown);
    
    return () => {
      // Re-enable scrolling when lightbox closes
      document.body.style.overflow = '';
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [onClose, onNavigate]);

  if (!items || items.length === 0) return null;

  const currentItem = items[currentIndex];

  const handleClose = () => {
    document.body.style.overflow = ''; // Ensure scrolling is re-enabled
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4">
      <button 
        onClick={handleClose}
        className="absolute top-4 right-4 text-white text-3xl z-50"
        aria-label="Close lightbox"
      >
        <FaTimes />
      </button>

      <button 
        onClick={() => onNavigate(-1)}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/50 text-white p-3 rounded-full z-50 md:left-8"
        aria-label="Previous image"
      >
        <FaChevronLeft size={24} />
      </button>

      <div className="relative w-full max-w-4xl max-h-[90vh]">
        <img 
          src={currentItem.imageUrl} 
          alt={currentItem.title} 
          className="w-full h-auto max-h-[80vh] object-contain"
        />
        <div className="text-white mt-4 text-center">
          <h3 className="text-xl font-bold">{currentItem.title}</h3>
          <p className="text-gray-300">{currentItem.description}</p>
          <span className="text-sm text-gray-400 capitalize">{currentItem.category}</span>
        </div>
      </div>

      <button 
        onClick={() => onNavigate(1)}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/50 text-white p-3 rounded-full z-50 md:right-8"
        aria-label="Next image"
      >
        <FaChevronRight size={24} />
      </button>

      {/* Mobile swipe area */}
      <div 
        className="absolute left-0 w-1/4 h-full"
        onClick={() => onNavigate(-1)}
      />
      <div 
        className="absolute right-0 w-1/4 h-full"
        onClick={() => onNavigate(1)}
      />
    </div>
  );
};

export default Lightbox;