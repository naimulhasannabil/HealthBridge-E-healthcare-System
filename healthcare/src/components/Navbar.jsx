import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className="bg-blue-600 text-white shadow-md">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="text-2xl font-bold flex items-center">
          <svg
            className="w-8 h-8 mr-2"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"
            />
          </svg>
          HealthBridge
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6 items-center">
          <Link to="/" className="hover:text-blue-200 transition">Home</Link>
          <Link to="/patient" className="hover:text-blue-200 transition">Patient</Link>
          <Link to="/doctor" className="hover:text-blue-200 transition">Doctor</Link>
          <Link to="/admin" className="hover:text-blue-200 transition">Admin</Link>
          <Link to="/login" className="hover:text-blue-200 transition">Login</Link>
          <Link to="/register" className="ml-2 bg-white text-blue-600 px-3 py-1 rounded-lg hover:bg-blue-100 transition">
            Register
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden focus:outline-none"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isMobileMenuOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'} />
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-blue-500 px-4 pb-4 space-y-2">
          <Link to="/" className="block hover:text-blue-200">Home</Link>
          <Link to="/patient" className="block hover:text-blue-200">Patient</Link>
          <Link to="/doctor" className="block hover:text-blue-200">Doctor</Link>
          <Link to="/admin" className="block hover:text-blue-200">Admin</Link>
          <Link to="/login" className="block hover:text-blue-200">Login</Link>
          <Link to="/register" className="block text-blue-600 bg-white px-3 py-1 mt-2 rounded-lg hover:bg-blue-100 transition">
            Register
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
