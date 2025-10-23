import { useState, useEffect, useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const menuButtonRef = useRef(null);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(sectionId);
      setIsMobileMenuOpen(false);
    }
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(prev => !prev);
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'projects', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;

          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isMobileMenuOpen && 
          !event.target.closest('.mobile-menu') && 
          !event.target.closest('.menu-button')) {
        setIsMobileMenuOpen(false);
      }
    };

    const handleEscapeKey = (event) => {
      if (event.key === 'Escape' && isMobileMenuOpen) {
        setIsMobileMenuOpen(false);
      }
    };

    document.addEventListener('click', handleClickOutside);
    document.addEventListener('keydown', handleEscapeKey);
    
    return () => {
      document.removeEventListener('click', handleClickOutside);
      document.removeEventListener('keydown', handleEscapeKey);
    };
  }, [isMobileMenuOpen]);

  useEffect(() => {
    if (isMobileMenuOpen) document.body.style.overflow = 'hidden';
    else document.body.style.overflow = 'unset';

    return () => (document.body.style.overflow = 'unset');
  }, [isMobileMenuOpen]);

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'projects', label: 'Projects' },
    { id: 'contact', label: 'Contact' }
  ];

return (
  <>
    <nav className="bg-white/95 backdrop-blur-md shadow-lg fixed w-full top-0 left-0 z-50 border-b border-gray-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-3 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <div className="w-3 h-3 bg-gradient-to-r from-purple-600 to-pink-500 rounded-full"></div>
          <h1 className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent">
            Portfolio
          </h1>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-4">
          <ul className="flex space-x-1 bg-gray-100/80 rounded-2xl p-1.5 backdrop-blur-sm">
            {navItems.map((item) => (
              <li key={item.id}>
                <button
                  onClick={() => scrollToSection(item.id)}
                  className={`w-full relative px-6 py-2.5 rounded-xl font-medium text-sm transition-all duration-300 ${
                    activeSection === item.id
                      ? 'text-white shadow-lg transform scale-105 bg-gradient-to-r from-purple-600 to-pink-500'
                      : 'text-gray-600 hover:text-white hover:bg-purple-600 hover:shadow-lg'
                  }`}
                >
                  {item.label}
                </button>
              </li>
            ))}
          </ul>

          {/* CTA Button */}
          <button
            onClick={() => scrollToSection('contact')}
            className="bg-gradient-to-r from-purple-600 to-pink-500 text-white px-6 py-2.5 rounded-xl font-medium text-sm shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 hover:from-purple-700 hover:to-pink-600"
          >
            Get In Touch
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          ref={menuButtonRef}
          onClick={toggleMobileMenu}
          className="menu-button md:hidden w-12 h-12 flex items-center justify-center rounded-xl bg-gray-100 hover:bg-gray-200 active:bg-gray-300 transition-all duration-150 cursor-pointer select-none"
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <FaTimes className="w-6 h-6 text-gray-700" /> : <FaBars className="w-6 h-6 text-gray-700" />}
        </button>
      </div> {/* <-- CLOSES the flex container div properly */}

      {/* Mobile Navigation Menu */}
      <div
        className={`mobile-menu md:hidden fixed top-0 left-0 w-full h-screen bg-white/98 backdrop-blur-lg z-40 transition-all duration-300 ${
          isMobileMenuOpen ? 'opacity-100 visible translate-x-0' : 'opacity-0 invisible translate-x-full'
        }`}
      >
        <div className="pt-20 px-6 pb-8 h-full flex flex-col relative">
          {/* Close Button */}
          <button
            onClick={() => setIsMobileMenuOpen(false)}
            className="absolute top-4 right-4 p-3 rounded-xl bg-gray-100 hover:bg-gray-200 active:bg-gray-300 transition-all duration-150 cursor-pointer"
            aria-label="Close menu"
          >
            <FaTimes className="w-6 h-6 text-gray-700" />
          </button>

          {/* Mobile Nav Items */}
          <ul className="space-y-3 flex-1">
            {navItems.map((item) => (
              <li key={item.id}>
                <button
                  onClick={() => scrollToSection(item.id)}
                  className={`w-full text-left px-6 py-4 rounded-2xl font-semibold text-lg transition-all duration-200 cursor-pointer ${
                    activeSection === item.id
                      ? 'text-white bg-gradient-to-r from-purple-600 to-pink-500 shadow-lg'
                      : 'text-gray-800 hover:text-white hover:bg-purple-600 hover:shadow-lg'
                  }`}
                >
                  {item.label}
                </button>
              </li>
            ))}
          </ul>

          {/* Mobile CTA Button */}
          <div className="pt-6 border-t border-gray-200">
            <button
              onClick={() => scrollToSection('contact')}
              className="w-full bg-gradient-to-r from-purple-600 to-pink-500 text-white px-6 py-4 rounded-2xl font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-200 cursor-pointer hover:from-purple-700 hover:to-pink-600"
            >
              Get In Touch
            </button>
          </div>
        </div>
      </div>
    </nav>

    {/* Mobile Menu Overlay */}
    <div
      className={`md:hidden fixed inset-0 bg-black/20 backdrop-blur-sm transition-all duration-300 z-30 ${
        isMobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
      }`}
      onClick={() => setIsMobileMenuOpen(false)}
    ></div>
  </>
);

};

export default Navbar;
