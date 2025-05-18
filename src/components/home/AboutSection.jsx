import React from 'react';
import { Link } from 'react-router-dom';

const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          
          {/* Image Section */}
          <div className="lg:w-1/2 relative">
            <div className="relative overflow-hidden rounded-lg shadow-xl transform hover:scale-105 transition-transform duration-700">
              <img
                src="https://images.unsplash.com/photo-1601050690597-df0568f70950?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
                alt="Indian chef preparing food"
                className="w-full h-auto transition-transform duration-700 hover:scale-110 rounded-lg"
                loading="lazy"
              />
              <div className="absolute -bottom-6 -right-6 bg-transparent text-white p-6 w-40 h-40 flex flex-col items-center justify-center">
                <span className="text-3xl font-bold">25+</span>
                <span className="text-sm">Years Experience</span>
              </div>
            </div>
          </div>

          {/* Text Content */}
          <div className="lg:w-1/2">
            <h2 className="text-4xl font-bold mb-6">Our Story</h2>
            <p className="text-lg mb-6">
              Founded in 1998 by Chef Rajiv Kapoor, YourRestaurant reimagines Indian cuisine for the modern palate. Our dishes honor traditional recipes while embracing contemporary techniques and presentation.
            </p>
            <p className="text-lg mb-8">
              Each plate tells a story – of your roots, royal kitchens, and home cooking passed through generations, now presented with artistic flair for today&apos;s discerning diners.
            </p>
           <Link
  to="/about"
  className="inline-flex items-center text-primary font-medium group transform hover:scale-105 transition-transform"
>
  View More
  <i className="fas fa-arrow-right ml-2 group-hover:ml-4 transition-all"></i>
</Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
