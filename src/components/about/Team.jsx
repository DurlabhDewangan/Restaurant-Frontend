import React from 'react';
import { FaInstagram, FaTwitter, FaLinkedinIn } from 'react-icons/fa';

const Team = () => {
  return (
    <section className="py-20 bg-gray-50 mt-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            Meet Our <span className="text-primary">Team</span>
          </h2>
          <p className="text-lg max-w-2xl mx-auto">
            The talented chefs and staff behind YourRestaurant
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {/* Team Member 1 */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="relative h-80 overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1581299894007-aaa50297cf16?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" 
                alt="Chef Arjun" 
                className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
                loading="lazy"
              />
            </div>
            <div className="p-6 text-center">
              <h3 className="text-xl font-bold mb-2">Chef Arjun Patel</h3>
              <p className="text-primary mb-2">Head Chef</p>
              <p className="text-gray-600">15 years of culinary expertise with Michelin-star experience</p>
              <div className="flex justify-center space-x-2 mt-4">
                <a href="#" className="text-gray-400 hover:text-primary transition-colors">
                  <FaInstagram className="text-xl" />
                </a>
                <a href="#" className="text-gray-400 hover:text-primary transition-colors">
                  <FaTwitter className="text-xl" />
                </a>
              </div>
            </div>
          </div>
          
          {/* Team Member 2 */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="relative h-80 overflow-hidden">
              <img 
                src="https://plus.unsplash.com/premium_photo-1661766386981-1140b7b37193?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fHByb2Zlc3Npb25hbHxlbnwwfHwwfHx8MA%3D%3D" 
                alt="Manager Neha" 
                className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
                loading="lazy"
              />
            </div>
            <div className="p-6 text-center">
              <h3 className="text-xl font-bold mb-2">Neha Gupta</h3>
              <p className="text-primary mb-2">Restaurant Manager</p>
              <p className="text-gray-600">Hospitality specialist with 12 years in luxury dining</p>
              <div className="flex justify-center space-x-2 mt-4">
                <a href="#" className="text-gray-400 hover:text-primary transition-colors">
                  <FaInstagram className="text-xl" />
                </a>
                <a href="#" className="text-gray-400 hover:text-primary transition-colors">
                  <FaLinkedinIn className="text-xl" />
                </a>
              </div>
            </div>
          </div>
          
          {/* Team Member 3 */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="relative h-80 overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1524952249965-023a2a31663d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDh8fHByb2Zlc3Npb25hbHxlbnwwfHwwfHx8MA%3D%3D" 
                alt="Sommelier Raj" 
                className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
                loading="lazy"
              />
            </div>
            <div className="p-6 text-center">
              <h3 className="text-xl font-bold mb-2">Raj Malhotra</h3>
              <p className="text-primary mb-2">Master Sommelier</p>
              <p className="text-gray-600">India's first certified wine expert, specializing in pairings</p>
              <div className="flex justify-center space-x-2 mt-4">
                <a href="#" className="text-gray-400 hover:text-primary transition-colors">
                  <FaTwitter className="text-xl" />
                </a>
                <a href="#" className="text-gray-400 hover:text-primary transition-colors">
                  <FaLinkedinIn className="text-xl" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;