import React, { useState } from 'react';
import { HiMenu, HiX } from 'react-icons/hi';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="bg-black text-white px-6 md:px-16 lg:px-24 fixed top-0 left-0 w-full z-50 shadow-md">
      <div className="container mx-auto py-4 flex justify-between items-center">
        {/* Logo */}
        <div className="text-2xl font-bold">Pradeep</div>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6">
          <a href="#home" className="hover:text-gray-400">Home</a>
          <a href="#about" className="hover:text-gray-400">About Me</a>
          <a href="#education" className="hover:text-gray-400">Education</a>
          <a href="#skills" className="hover:text-gray-400">Skill</a>
          <a href="#experience" className="hover:text-gray-400">Experience</a>
          <a href="#project" className="hover:text-gray-400">Projects</a>
          <a href="#contact" className="hover:text-gray-400">Contact</a>
        </div>

        {/* Mobile Toggle */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="focus:outline-none">
            {isOpen ? <HiX size={28} /> : <HiMenu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-black px-6 pb-4 space-y-3">
          <a href="#home" className="block hover:text-gray-400" onClick={toggleMenu}>Home</a>
          <a href="#about" className="block hover:text-gray-400" onClick={toggleMenu}>About Me</a>
          <a href="#education" className="block hover:text-gray-400" onClick={toggleMenu}>Education</a>
          <a href="#skills" className="block hover:text-gray-400" onClick={toggleMenu}>Skill</a>
          <a href="#experience" className="block hover:text-gray-400" onClick={toggleMenu}>Experience</a>
          <a href="#project" className="block hover:text-gray-400" onClick={toggleMenu}>Projects</a>
          <a href="#contact" className="block hover:text-gray-400" onClick={toggleMenu}>Contact</a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
