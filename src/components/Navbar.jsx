// components/Navbar.jsx
import React, { useState, useEffect } from 'react';
import DataImage from "../data";
import { FaBars } from 'react-icons/fa';
import { FaXmark } from 'react-icons/fa6';

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  // Add class to body when mobile menu is open
  useEffect(() => {
    if (showMenu) {
      document.body.classList.add('mobile-menu-open');
    } else {
      document.body.classList.remove('mobile-menu-open');
    }
  }, [showMenu]);

  const toggleMenu = () => setShowMenu(!showMenu);
  const closeMenu = () => setShowMenu(false);

  const navLinks = [
    { name: "Home", href: "#hero" },
    { name: "About", href: "#about" },
    { name: "Projects", href: "#projects" },
    { name: "Skills", href: "#skills" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md shadow-md py-4 px-6 md:px-10">
        <div className="container mx-auto flex justify-between items-center">
          {/* Logo */}
          <div className="logo">
            <img src={DataImage.Logo} alt="Logo" className="w-10 h-10 rounded-full object-cover" />
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="relative text-gray-800 font-medium hover:text-blue-600 transition duration-300 group"
              >
                {link.name}
                <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button onClick={toggleMenu}>
              {showMenu ? (
                <FaXmark className="text-3xl text-gray-800" />
              ) : (
                <FaBars className="text-3xl text-gray-800" />
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* Full Screen Mobile Menu */}
      {showMenu && (
        <div className="fixed inset-0 z-40 bg-gradient-to-b from-blue-600 to-purple-700 flex flex-col items-center justify-center space-y-10 text-white text-3xl font-bold">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={closeMenu}
              className="hover:text-yellow-300 transition duration-300 transform hover:scale-110"
            >
              {link.name}
            </a>
          ))}
        </div>
      )}
    </>
  );
};

export default Navbar;