import React from 'react';
import { Link } from 'react-router-dom';

const MenuSection = () => {
  return (
    <section id="menu" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Our Menu</h2>
          <p className="text-lg max-w-2xl mx-auto">
            A contemporary take on classic Indian dishes
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
{/* Starters */}
<div className="dish-card bg-white p-8 rounded-lg shadow-md">
  <div className="text-center mb-6">
    <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center transform hover:rotate-12 transition-transform">
      <i className="fas fa-utensils text-primary text-2xl"></i>
    </div>
    <h3 className="text-2xl font-bold mb-2">Starters</h3>
    <div className="w-20 h-1 bg-primary mx-auto"></div>
  </div>
  <ul className="space-y-6">
    <li className="border-b border-gray-100 pb-4 transform hover:translate-x-2 transition-transform">
      <div className="flex justify-between items-start">
        <h4 className="font-bold">Samosa Chaat</h4>
        <span className="font-bold text-primary">₹180</span>
      </div>
      <p className="text-sm text-gray-600 mt-1">Deconstructed samosa with tamarind foam</p>
    </li>
    <li className="border-b border-gray-100 pb-4 transform hover:translate-x-2 transition-transform">
      <div className="flex justify-between items-start">
        <h4 className="font-bold">Paneer Tikka</h4>
        <span className="font-bold text-primary">₹220</span>
      </div>
      <p className="text-sm text-gray-600 mt-1">Smoked cottage cheese, bell pepper gel</p>
    </li>
    <li className="border-b border-gray-100 pb-4 transform hover:translate-x-2 transition-transform">
      <div className="flex justify-between items-start">
        <h4 className="font-bold">Chicken 65</h4>
        <span className="font-bold text-primary">₹240</span>
      </div>
      <p className="text-sm text-gray-600 mt-1">Crispy chicken, curry leaf powder</p>
    </li>
  </ul>
</div>

          {/* Mains */}
          <div className="dish-card bg-white p-8 rounded-lg shadow-md">
            <div className="text-center mb-6">
              <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center transform hover:rotate-12 transition-transform">
                <i className="fa-solid fa-drumstick-bite text-primary text-2xl"></i>
              </div>
              <h3 className="text-2xl font-bold mb-2">Main Courses</h3>
              <div className="w-20 h-1 bg-primary mx-auto"></div>
            </div>
            <ul className="space-y-6">
              <li className="border-b border-gray-100 pb-4 transform hover:translate-x-2 transition-transform">
                <div className="flex justify-between items-start">
                  <h4 className="font-bold">Butter Chicken</h4>
                  <span className="font-bold text-primary">₹320</span>
                </div>
                <p className="text-sm text-gray-600 mt-1">
                  Tandoori chicken, tomato butter emulsion
                </p>
              </li>
              <li className="border-b border-gray-100 pb-4 transform hover:translate-x-2 transition-transform">
                <div className="flex justify-between items-start">
                  <h4 className="font-bold">Lamb Rogan Josh</h4>
                  <span className="font-bold text-primary">₹380</span>
                </div>
                <p className="text-sm text-gray-600 mt-1">
                  Slow-cooked lamb, Kashmiri yogurt air
                </p>
              </li>
              <li className="border-b border-gray-100 pb-4 transform hover:translate-x-2 transition-transform">
                <div className="flex justify-between items-start">
                  <h4 className="font-bold">Dal Makhani</h4>
                  <span className="font-bold text-primary">₹260</span>
                </div>
                <p className="text-sm text-gray-600 mt-1">
                  48-hour black lentils, smoked ghee
                </p>
              </li>
            </ul>
          </div>

          {/* Breads & Rice */}
          <div className="dish-card bg-white p-8 rounded-lg shadow-md">
            <div className="text-center mb-6">
              <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center transform hover:rotate-12 transition-transform">
                <i className="fa-solid fa-bread-slice text-primary text-2xl"></i>
              </div>
              <h3 className="text-2xl font-bold mb-2">Breads & Rice</h3>
              <div className="w-20 h-1 bg-primary mx-auto"></div>
            </div>
            <ul className="space-y-6">
              <li className="border-b border-gray-100 pb-4 transform hover:translate-x-2 transition-transform">
                <div className="flex justify-between items-start">
                  <h4 className="font-bold">Garlic Naan</h4>
                  <span className="font-bold text-primary">₹80</span>
                </div>
                <p className="text-sm text-gray-600 mt-1">
                  Tandoor-baked, black garlic butter
                </p>
              </li>
              <li className="border-b border-gray-100 pb-4 transform hover:translate-x-2 transition-transform">
                <div className="flex justify-between items-start">
                  <h4 className="font-bold">Hyderabadi Biryani</h4>
                  <span className="font-bold text-primary">₹350</span>
                </div>
                <p className="text-sm text-gray-600 mt-1">
                  Basmati rice, sous vide meat, saffron foam
                </p>
              </li>
              <li className="border-b border-gray-100 pb-4 transform hover:translate-x-2 transition-transform">
                <div className="flex justify-between items-start">
                  <h4 className="font-bold">Jeera Rice</h4>
                  <span className="font-bold text-primary">₹150</span>
                </div>
                <p className="text-sm text-gray-600 mt-1">
                  Basmati, toasted cumin, edible flowers
                </p>
              </li>
            </ul>
          </div>
        </div>

     <div className="text-center mt-16">
  <Link to="/menu" className="btn btn-primary">
    View Full Menu
  </Link>
</div>
      </div>
    </section>
  );
};

export default MenuSection;
