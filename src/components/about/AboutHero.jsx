import React from 'react';
import { FaArrowRight, FaLeaf } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const AboutHero = () => {
  return (
    <>
      {/* About Hero Section */}
      <section className="pt-32 pb-20 px-6">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Our <span className="text-primary">Story</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A tradition of culinary excellence since 1998
          </p>
        </div>
      </section>

      {/* About Content */}
      <section className="bg-white">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="flex flex-col lg:flex-row items-center gap-12 mb-20">
            <div className="lg:w-1/2 relative">
              <div className="relative overflow-hidden rounded-lg shadow-xl transform hover:scale-105 transition-transform duration-700">
                <img
                  src="https://images.unsplash.com/photo-1601050690597-df0568f70950?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
                  alt="Indian chef preparing food"
                  className="w-full h-auto transition-transform duration-700 hover:scale-110 rounded-lg"
                  loading="lazy"
                />
              </div>
            </div>
            <div className="lg:w-1/2">
              <h2 className="text-4xl font-bold mb-6">
                Who <span className="text-primary">We Are</span>
              </h2>
              <p className="text-lg mb-6">
                Founded in 1998 by Chef Rajiv Kapoor, YourRestaurant reimagines Indian cuisine for the modern palate. Our
                dishes honor traditional recipes while embracing contemporary techniques and presentation.
              </p>
              <p className="text-lg mb-8">
                Each plate tells a story - of your roots, royal kitchens, and home cooking passed through generations,
                now presented with artistic flair for today's discerning diners.
              </p>
       <Link
  to="/gallery"
  className="inline-flex items-center text-primary font-medium group transform hover:scale-105 transition-transform"
>
  View Our Gallery
  <FaArrowRight className="ml-2 group-hover:ml-4 transition-all" />
</Link>
            </div>
          </div>

          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-1/2 order-1">
              <h2 className="text-4xl font-bold mb-6">
                Our <span className="text-primary">Philosophy</span>
              </h2>
              <p className="text-lg mb-6">
                We believe in farm-to-table freshness, supporting local producers, and sustainable practices that honor
                India's rich agricultural heritage.
              </p>
              <p className="text-lg mb-6">
                Our menu changes seasonally to showcase the best ingredients at their peak, with modern interpretations
                of regional specialties from across India.
              </p>
              <div className="flex items-center space-x-4">
                <div className="bg-primary/10 p-4 rounded-lg">
                  <FaLeaf className="text-primary text-2xl" />
                </div>
                <div>
                  <h4 className="font-bold">Sustainable Sourcing</h4>
                  <p className="text-gray-600">Partnering with local farmers and producers</p>
                </div>
              </div>
            </div>
            <div className="lg:w-1/2 relative order-2">
              <div className="relative overflow-hidden rounded-lg shadow-xl transform hover:scale-105 transition-transform duration-700">
                <img
                  src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
                  alt="Restaurant interior"
                  className="w-full h-auto transition-transform duration-700 hover:scale-110 rounded-lg"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutHero;