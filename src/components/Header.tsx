import React from 'react';
import logo from '../assets/logo.svg';

const Header = () => (
  <header className="w-full bg-white shadow flex items-center justify-between px-8 py-4 sticky top-0 z-20 font-poppins">
    <div className="flex items-center space-x-4">
      <a href="/" className="flex items-center space-x-2">
        <img src={logo} alt="GSJH Logo" className="h-10 w-10 object-contain" />
        <span className="text-2xl font-bold text-indigo-700 hover:text-indigo-900">GSJH</span>
      </a>
    </div>
    <nav className="space-x-6 text-base font-medium">
      <a href="/jobs" className="text-indigo-600 hover:underline">Jobs</a>
      <a href="/login" className="text-indigo-600 hover:underline">Login</a>
      <a href="/about" className="text-indigo-600 hover:underline">About</a>
      <a href="/contact" className="text-indigo-600 hover:underline">Contact</a>
    </nav>
  </header>
);

export default Header;
