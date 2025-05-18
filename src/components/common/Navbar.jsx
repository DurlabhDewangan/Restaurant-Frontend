import React, { useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen((prev) => !prev);
    document.body.classList.toggle('overflow-hidden');
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
    document.body.classList.remove('overflow-hidden');
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        closeMobileMenu();
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <>
      {/* Navigation */}
      <nav className="fixed w-full bg-white shadow-lg z-50 transition-all duration-500" id="navbar">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <Link to="/" className="text-3xl font-bold transform hover:scale-105 transition-transform">
            <span>YourRestaurant</span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8 items-center">
            <NavLink 
              to="/" 
              end
              className={({ isActive }) => 
                `nav-link underline-animation ${isActive ? 'active-link' : ''}`
              }
            >
              Home
            </NavLink>
            <NavLink 
              to="/about" 
              className={({ isActive }) => 
                `nav-link underline-animation ${isActive ? 'active-link' : ''}`
              }
            >
              About
            </NavLink>
            <NavLink 
              to="/menu" 
              className={({ isActive }) => 
                `nav-link underline-animation ${isActive ? 'active-link' : ''}`
              }
            >
              Menu
            </NavLink>
            <NavLink 
              to="/gallery" 
              className={({ isActive }) => 
                `nav-link underline-animation ${isActive ? 'active-link' : ''}`
              }
            >
              Gallery
            </NavLink>
          
            <Link
              to="/reservation"
              className="btn btn-primary ml-4 animate__animated animate__pulse animate__infinite animate__slower"
            >
              Reservations
            </Link>
          </div>

          {/* Hamburger Button */}
          <button className="md:hidden focus:outline-none" onClick={toggleMobileMenu} id="hamburger-btn">
            <div className={`hamburger ${mobileMenuOpen ? 'active' : ''}`}>
              <span className={`block w-6 h-0.5 bg-secondary mb-1.5 transition-all duration-300 ${mobileMenuOpen ? 'transform rotate-45 translate-y-2' : ''}`}></span>
              <span className={`block w-6 h-0.5 bg-secondary mb-1.5 transition-all duration-300 ${mobileMenuOpen ? 'opacity-0' : ''}`}></span>
              <span className={`block w-6 h-0.5 bg-secondary transition-all duration-300 ${mobileMenuOpen ? 'transform -rotate-45 -translate-y-2' : ''}`}></span>
            </div>
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`mobile-menu fixed inset-0 bg-white z-40 pt-20 px-6 md:hidden transition-all duration-500 ease-in-out transform ${mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}
        id="mobile-menu"
      >
        <div className="flex flex-col space-y-6 text-xl">
          <NavLink 
            to="/" 
            end
            className={({ isActive }) => 
              `nav-link py-2 underline-animation ${isActive ? 'active-link' : ''}`
            }
            onClick={closeMobileMenu}
          >
            Home
          </NavLink>
          <NavLink 
            to="/about" 
            className={({ isActive }) => 
              `nav-link py-2 underline-animation ${isActive ? 'active-link' : ''}`
            }
            onClick={closeMobileMenu}
          >
            About
          </NavLink>
          <NavLink 
            to="/menu" 
            className={({ isActive }) => 
              `nav-link py-2 underline-animation ${isActive ? 'active-link' : ''}`
            }
            onClick={closeMobileMenu}
          >
            Menu
          </NavLink>
          <NavLink 
            to="/gallery" 
            className={({ isActive }) => 
              `nav-link py-2 underline-animation ${isActive ? 'active-link' : ''}`
            }
            onClick={closeMobileMenu}
          >
            Gallery
          </NavLink>
       
          <Link
            to="/reservation"
            className="btn btn-primary px-6 py-3 rounded-full w-full text-center mt-4"
            onClick={closeMobileMenu}
          >
            Reservations
          </Link>
        </div>
      </div>
    </>
  );
};

export default Navbar;