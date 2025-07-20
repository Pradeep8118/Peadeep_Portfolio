import React, { useState, useEffect } from 'react';
import { HiMenu, HiX } from 'react-icons/hi';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const toggleMenu = () => setIsOpen(!isOpen);

  // === Scrollspy to highlight active section ===
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'education', 'skills', 'experience', 'project', 'contact'];
      const scrollY = window.scrollY + 160;

      for (let id of sections) {
        const el = document.getElementById(id);
        if (el && el.offsetTop <= scrollY && el.offsetTop + el.offsetHeight > scrollY) {
          setActiveSection(id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // === Custom smooth scroll with offset ===
  const handleSmoothScroll = (id) => {
    const el = document.getElementById(id);
    if (el) {
      const yOffset = -100; // Offset for fixed navbar
      const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;

      window.scrollTo({
        top: y,
        behavior: 'smooth',
      });

      setIsOpen(false); // Close mobile menu
    }
  };

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'education', label: 'Education' },
    { id: 'skills', label: 'Skill' },
    { id: 'experience', label: 'Experience' },
    { id: 'project', label: 'Projects' },
    { id: 'contact', label: 'Contact' },
  ];

  const navLinkClass = (id) =>
    `cursor-pointer hover:text-gray-400 transition duration-300 ${
      activeSection === id ? 'text-green-400 font-semibold' : ''
    }`;

  return (
    <nav className="bg-black text-white px-4 sm:px-6 md:px-12 lg:px-20 fixed top-0 left-0 w-full z-50 shadow-md">
      <div className="flex justify-between items-center py-4">
        {/* Logo */}
        <div className="text-2xl font-bold">Pradeep</div>

        {/* Desktop & Tablet Menu */}
        <div className="hidden md:flex items-center space-x-6">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleSmoothScroll(item.id)}
              className={navLinkClass(item.id)}
            >
              {item.label}
            </button>
          ))}
        </div>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="focus:outline-none">
            {isOpen ? <HiX size={28} /> : <HiMenu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className="md:hidden bg-black px-6 pb-4 space-y-3">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleSmoothScroll(item.id)}
              className={`block w-full text-left ${navLinkClass(item.id)}`}
            >
              {item.label}
            </button>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
