
import React, { useState, useRef } from 'react';
import logo from '../assets/logo.svg';
import { Link } from 'react-router-dom';

type HeaderProps = {
  user?: {
    displayName?: string;
    photoURL?: string;
  };
  onLogout?: () => void;
};

const Header: React.FC<HeaderProps> = ({ user, onLogout }) => {
  const [dropdown, setDropdown] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown on click outside
  React.useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setDropdown(false);
      }
    }
    if (dropdown) document.addEventListener('mousedown', handleClick);
    return () => document.removeEventListener('mousedown', handleClick);
  }, [dropdown]);

  return (
    <header className="w-full bg-white shadow flex items-center justify-between px-8 py-4 sticky top-0 z-20 font-poppins">
      <div className="flex items-center space-x-4">
        <Link to="/" className="flex items-center space-x-2">
          <img src={logo} alt="GSJH Logo" className="h-10 w-10 object-contain" />
          <span className="text-2xl font-bold text-indigo-700 hover:text-indigo-900">GSJH</span>
        </Link>
      </div>
      <nav className="space-x-6 text-base font-medium flex items-center">
        <Link to="/jobs" className="text-indigo-600 hover:underline">Jobs</Link>
        {!user && <Link to="/login" className="text-indigo-600 hover:underline">Login</Link>}
        <Link to="/about" className="text-indigo-600 hover:underline">About</Link>
        <Link to="/contact" className="text-indigo-600 hover:underline">Contact</Link>
        {user && (
          <div className="relative ml-4" ref={dropdownRef}>
            <button onClick={() => setDropdown((d) => !d)} className="flex items-center focus:outline-none">
              <img src={user.photoURL} alt={user.displayName} className="w-10 h-10 rounded-full border-2 border-indigo-500 shadow" />
            </button>
            {dropdown && (
              <div className="absolute right-0 mt-2 w-40 bg-white rounded-lg shadow-lg py-2 z-30 border">
                <div className="px-4 py-2 text-gray-700 font-semibold">{user.displayName}</div>
                <button
                  className="w-full text-left px-4 py-2 text-red-600 hover:bg-gray-100"
                  onClick={onLogout}
                >
                  Logout
                </button>
              </div>
            )}
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
