import React, { useState, useEffect } from 'react';
import { Menu, X, Moon, Sun } from 'lucide-react';

interface NavItem {
  label: string;
  href: string;
}

const navItems: NavItem[] = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
];

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

  const toggleMenu = () => setIsOpen(!isOpen);
  
  const toggleDarkMode = () => setIsDarkMode(!isDarkMode);

  const closeMenu = () => setIsOpen(false);

  return (
    <header 
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/90 dark:bg-gray-900/90 backdrop-blur-md shadow-sm py-4' 
          : 'bg-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex justify-between items-center">
          <a 
            href="#home" 
            className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white"
          >
            Jaspreet Bhullar- iOS Developer<span className="text-blue-600"></span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-gray-700 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400 font-medium transition-colors"
              >
                {item.label}
              </a>
            ))}
            <button
              onClick={toggleDarkMode}
              className="p-2 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300"
              aria-label="Toggle dark mode"
            >
              {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
            </button>
          </nav>

          {/* Mobile Navigation Toggle */}
          <div className="flex items-center md:hidden">
            <button
              onClick={toggleDarkMode}
              className="p-2 mr-2 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300"
              aria-label="Toggle dark mode"
            >
              {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
            </button>
            <button
              onClick={toggleMenu}
              className="p-2 rounded-lg text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800"
              aria-label="Open menu"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isOpen && (
        <div className="md:hidden bg-white dark:bg-gray-900 shadow-lg rounded-b-lg mt-2 px-4 py-5 absolute w-full">
          <nav className="flex flex-col space-y-4">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={closeMenu}
                className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 font-medium py-2"
              >
                {item.label}
              </a>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;