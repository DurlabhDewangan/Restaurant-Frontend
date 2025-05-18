import React, { useState, useEffect } from 'react';
import GalleryHero from '../components/gallery/GalleryHero';
import GalleryFilter from '../components/gallery/GalleryFilter';
import GalleryGrid from '../components/gallery/GalleryGrid';
import AOS from 'aos';
import 'aos/dist/aos.css';
import "../style/common.css";
import "../style/gallery.css";
import "../style/menu.css";

const GalleryPage = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [galleryData, setGalleryData] = useState([]);

  useEffect(() => {
    // In a real app, you would fetch this from an API
    const data =[
        {
            id: 1,
            imageUrl: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=880&q=80',
            title: 'Signature Dish',
            category: 'food',
            description: 'Our chef\'s special creation with authentic spices'
        },
        {
            id: 2,
            imageUrl: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80',
            title: 'Restaurant Interior',
            category: 'interior',
            description: 'Elegant dining area with traditional decor'
        },
        {
            id: 3,
            imageUrl: 'https://images.unsplash.com/photo-1565557623262-b51c2513a641?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1371&q=80',
            title: 'Chef Preparing Food',
            category: 'chefs',
            description: 'Our master chef crafting authentic dishes'
        },
        {
            id: 4,
            imageUrl: 'https://images.unsplash.com/photo-1601050690597-df0568f70950?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
            title: 'Traditional Cooking',
            category: 'food',
            description: 'Prepared with authentic techniques'
        },
        {
            id: 5,
            imageUrl: 'https://images.unsplash.com/photo-1600891964599-f61ba0e24092?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
            title: 'Modern Plating',
            category: 'food',
            description: 'Contemporary presentation of classic dishes'
        },
        {
            id: 6,
            imageUrl: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
            title: 'Bar Area',
            category: 'interior',
            description: 'Our fully stocked bar with signature cocktails'
        },
        {
            id: 7,
            imageUrl: 'https://images.unsplash.com/photo-1555244162-803834f70033?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
            title: 'Private Dining',
            category: 'interior',
            description: 'Exclusive space for special occasions'
        },
        {
            id: 8,
            imageUrl: 'https://images.unsplash.com/photo-1544025162-d76694265947?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1469&q=80',
            title: 'Chef Team',
            category: 'chefs',
            description: 'Our talented culinary team'
        },
        {
            id: 9,
            imageUrl: 'https://images.unsplash.com/photo-1547592180-85f173990554?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
            title: 'Dessert Selection',
            category: 'food',
            description: 'Traditional Indian sweets with modern twist'
        },
        {
            id: 10,
            imageUrl: 'https://images.unsplash.com/photo-1537047902294-62a40c20a6ae?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1450&q=80',
            title: 'Outdoor Seating',
            category: 'interior',
            description: 'Al fresco dining with garden view'
        },
        {
            id: 11,
            imageUrl: 'https://images.unsplash.com/photo-1519671482749-fd09be7ccebf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
            title: 'Wine Collection',
            category: 'interior',
            description: 'Curated selection of international wines'
        },
        {
            id: 12,
            imageUrl: 'https://images.unsplash.com/photo-1514933651103-005eec06c04b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80',
            title: 'Live Cooking Station',
            category: 'events',
            description: 'Interactive dining experience'
        }
        // ... (keep all your other gallery items here)
    ];


    setGalleryData(data);
    AOS.init({
      duration: 800,
      easing: 'ease-in-out',
      once: true
    });
  }, []);

  return (
    <div className="gallery-page">
      <GalleryHero />
      <GalleryFilter 
        onFilterChange={setActiveFilter} 
      />
      <GalleryGrid 
        items={galleryData} 
        filter={activeFilter} 
      />
    </div>
  );
};

export default GalleryPage;