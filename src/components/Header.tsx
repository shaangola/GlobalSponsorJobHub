import React from 'react';
import logo from '../assets/logo.svg';
import { Link } from 'react-router-dom';

const Header = () => (
  <header className="w-full bg-white shadow flex items-center justify-between px-8 py-4 sticky top-0 z-20 font-poppins">
    <div className="flex items-center space-x-4">
      <Link to="/" className="flex items-center space-x-2">
        <img src={logo} alt="GSJH Logo" className="h-10 w-10 object-contain" />
        <span className="text-2xl font-bold text-indigo-700 hover:text-indigo-900">GSJH</span>
      </Link>
    </div>
    <nav className="space-x-6 text-base font-medium">
      <Link to="/jobs" className="text-indigo-600 hover:underline">Jobs</Link>
      <Link to="/login" className="text-indigo-600 hover:underline">Login</Link>
      <Link to="/about" className="text-indigo-600 hover:underline">About</Link>
      <Link to="/contact" className="text-indigo-600 hover:underline">Contact</Link>
    </nav>
  </header>
);

export default Header;
