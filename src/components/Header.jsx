import { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav className="bg-gray-800 p-4 text-white shadow-md relative z-50">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-xl font-bold">Wildan Apps</h1>

        <div className="relative">
          <button
            onClick={toggleMenu}
            className="flex items-center space-x-2 hover:text-gray-300 focus:outline-none"
          >
            <span>Menu</span>
            <svg
              className={`w-4 h-4 transition-transform ${isMenuOpen ? "transform rotate-180" : ""}`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M19 9l-7 7-7-7"
              ></path>
            </svg>
          </button>

          {isMenuOpen && (
            <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 text-gray-800 border border-gray-200">
              <Link
                to="/"
                className="block px-4 py-2 hover:bg-gray-100 transition-colors"
                onClick={closeMenu}
              >
                Task Manager
              </Link>
              <Link
                to="/calculator"
                className="block px-4 py-2 hover:bg-gray-100 transition-colors"
                onClick={closeMenu}
              >
                Calculator
              </Link>
              <Link
                to="/temperature-converter"
                className="block px-4 py-2 hover:bg-gray-100 transition-colors"
                onClick={closeMenu}
              >
                Temperature Converter
              </Link>
              <div className="border-t border-gray-100 my-1"></div>
              <Link
                to="/company"
                className="block px-4 py-2 hover:bg-gray-100 transition-colors text-yellow-600 font-semibold"
                onClick={closeMenu}
              >
                Company Profile
              </Link>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Header;
