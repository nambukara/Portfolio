// components/Navbar.jsx
import React, { useState, useEffect } from 'react';
import DataImage from "../data";
import { FaBars } from 'react-icons/fa';
import { FaXmark } from 'react-icons/fa6';

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (showMenu) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [showMenu]);

  const toggleMenu = () => setShowMenu(prev => !prev);
  const closeMenu = () => setShowMenu(false);

  const navLinks = [
    { name: "Home", href: ".#hero" },
    { name: "Education", href: ".#education" },
    { name: "Projects", href: ".#projects" },
    { name: "Skills", href: ".#skills" },
    { name: "Certificates", href: ".#certificates" },
    { name: "Contact", href: ".#contact" },
  ];

  return (
    <>
      {/* Fixed Navbar */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md shadow-md py-4 px-6">
        <div className="container mx-auto flex justify-between items-center">
          {/* Logo */}
          <a href="#hero">
            <img src={DataImage.Logo} alt="Logo" className="w-10 h-10 rounded-full object-cover" />
          </a>

          {/* Desktop Menu – Hidden on mobile */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map(link => (
              <a
                key={link.name}
                href={link.href}
                className="relative text-gray-800 font-medium hover:text-blue-600 transition group"
              >
                {link.name}
                <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
          </div>

          {/* Hamburger Icon – Only visible on mobile */}
          <button onClick={toggleMenu} className="md:hidden z-50">
            {showMenu ? (
              <FaXmark className="text-3xl text-gray-800" />
            ) : (
              <FaBars className="text-3xl text-gray-800" />
            )}
          </button>
        </div>
      </nav>

      {/* Mobile Full-Screen Menu – Completely hidden until hamburger is clicked */}
      {showMenu && (
        <div className="fixed inset-0 bg-white z-40 flex flex-col items-center justify-center gap-10 text-black">
          {navLinks.map(link => (
            <a
              key={link.name}
              href={link.href}
              onClick={closeMenu}
              className="text-3xl md:text-4xl font-bold hover:text-yellow-300 transition transform hover:scale-110"
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