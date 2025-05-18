import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  // Handle newsletter form submission
  const handleSubscribe = (e) => {
    e.preventDefault();
    alert("Thank you for subscribing to our newsletter!");
    e.target.reset();
  };

  return (
    <footer className="bg-#314E7C text-white py-12 mt-20">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Column 1: Logo and Social */}
          <div>
            <Link to="/" className="footer-logo">
              <span>YourRestaurant</span>
            </Link>
            <p className="mb-6 text-gray-300">
              Modern Indian cuisine blending traditional flavors with contemporary presentation.
            </p>
            <div className="footer-social">
              <a href="#" aria-label="Facebook">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="#" aria-label="Instagram">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="#" aria-label="Twitter">
                <i className="fab fa-twitter"></i>
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h4 className="text-lg font-medium mb-4 text-white">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-300 hover:text-red-500 transition-colors">Home</Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-300 hover:text-red-500 transition-colors">About Us</Link>
              </li>
              <li>
                <Link to="/menu" className="text-gray-300 hover:text-red-500 transition-colors">Menu</Link>
              </li>
              <li>
                <Link to="/gallery" className="text-gray-300 hover:text-red-500 transition-colors">Gallery</Link>
              </li>
              <li>
                <Link to="/reservation" className="text-gray-300 hover:text-red-500 transition-colors">Reservation</Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Legal */}
          <div>
            <h4 className="text-lg font-medium mb-4 text-white">Legal</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/legal" className="text-gray-300 hover:text-red-500 transition-colors">Privacy Policy</Link>
              </li>
              <li>
                <Link to="/legal" className="text-gray-300 hover:text-red-500 transition-colors">Terms of Service</Link>
              </li>
              <li>
                <Link to="/legal" className="text-gray-300 hover:text-red-500 transition-colors">Cookie Policy</Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Newsletter */}
          <div>
            <h4 className="text-lg font-medium mb-4 text-white">Newsletter</h4>
            <p className="mb-4 text-gray-300">
              Subscribe to our newsletter for seasonal menus, special events, and exclusive offers.
            </p>
            <form className="flex" onSubmit={handleSubscribe}>
              <input
                type="email"
                placeholder="Your email"
                className="px-4 py-2 bg-gray-800 text-white border border-gray-700 rounded-l-lg w-full focus:outline-none focus:ring-2 focus:ring-red-400"
                required
              />
              <button
                type="submit"
                className="bg-red-500 text-white px-4 py-2 rounded-r-lg hover:bg-red-600 transition-colors focus:outline-none focus:ring-2 focus:ring-red-300"
                aria-label="Subscribe"
              >
                <i className="fas fa-paper-plane"></i>
              </button>
            </form>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-20 pt-8 text-center text-white">
          <p>© 2025 YourRestaurant. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;