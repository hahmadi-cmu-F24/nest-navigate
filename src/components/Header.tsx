import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FiMenu, FiChevronDown, FiChevronUp } from 'react-icons/fi';
import SideMenu from './SideMenu';
import CoinTracker from './CoinTracker';

const Header: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [modulesOpen, setModulesOpen] = useState(false);

  return (
    <>
      <header className="bg-blue-600 text-white p-4 flex items-center justify-between">
        {/* Hamburger menu for small screens */}
        <button
          onClick={() => setMenuOpen(true)}
          className="text-white text-2xl md:hidden"
          aria-label="Open menu"
        >
        {React.createElement(FiMenu as any)}
        </button>

        <h1 className="text-xl font-semibold ml-2">Nest Navigate</h1>

        {/* CoinTracker visible on small screens (always) */}
        <div className="md:hidden">
          <CoinTracker />
        </div>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center space-x-6">
          <Link to="/" className="hover:underline">
            Home
          </Link>
          <Link to="/about" className="hover:underline">
            About
          </Link>

          {/* Modules dropdown */}
          <div className="relative">
            <button
              onClick={() => setModulesOpen(!modulesOpen)}
              className="flex items-center gap-1 hover:underline focus:outline-none"
            >
              Modules
            {modulesOpen ? React.createElement(FiChevronUp as any) : React.createElement(FiChevronDown as any)}
            </button>

            {modulesOpen && (
              <div className="absolute top-full left-0 mt-2 bg-white text-black rounded shadow-lg w-48 z-50">
                <Link
                  to="/modules/understanding-home-inspections"
                  className="block px-4 py-2 hover:bg-blue-100"
                  onClick={() => setModulesOpen(false)}
                >
                  Module 1
                </Link>
                <div className="block px-4 py-2 hover:bg-blue-100">Module 2</div>
                <div className="block px-4 py-2 hover:bg-blue-100">Module 3</div>
              </div>
            )}
          </div>

          {/* CoinTracker visible on desktop inside nav */}
          <CoinTracker />
        </nav>
      </header>

      <SideMenu isOpen={menuOpen} onClose={() => setMenuOpen(false)} />
    </>
  );
};

export default Header;
