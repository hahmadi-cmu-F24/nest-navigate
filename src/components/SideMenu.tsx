import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FiX, FiChevronDown, FiChevronUp } from 'react-icons/fi';

interface SideMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

const SideMenu: React.FC<SideMenuProps> = ({ isOpen, onClose }) => {
  const [modulesOpen, setModulesOpen] = useState(false);

  return (
    <>
      {/* Overlay */}
      {isOpen && (
        <div
          onClick={onClose}
          className="fixed inset-0 bg-black bg-opacity-50 z-40"
        />
      )}

      {/* Sliding menu */}
      <aside
        className={`fixed top-0 left-0 h-full w-64 bg-white shadow-md z-50 transform transition-transform duration-300 ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="flex items-center justify-between p-4 border-b">
          <h2 className="text-lg font-semibold">Menu</h2>
          <button
            onClick={onClose}
            aria-label="Close menu"
            className="text-gray-700 text-2xl"
          >
        {React.createElement(FiX as any)}
          </button>
        </div>
        <nav className="flex flex-col p-4 space-y-4">
          <Link
            to="/"
            className="text-gray-900 hover:text-blue-600"
            onClick={onClose}
          >
            Home
          </Link>
          <Link
            to="/about"
            className="text-gray-900 hover:text-blue-600"
            onClick={onClose}
          >
            About
          </Link>

          {/* Modules dropdown */}
          <div>
            <button
              onClick={() => setModulesOpen(!modulesOpen)}
              className="flex items-center gap-2 w-full text-gray-900 hover:text-blue-600 font-semibold focus:outline-none"
            >
              <span>Modules</span>
{modulesOpen ? React.createElement(FiChevronUp as any) : React.createElement(FiChevronDown as any)}
            </button>

            {modulesOpen && (
              <div className="mt-2 ml-4 flex flex-col space-y-2">
                <Link
                  to="/modules/understanding-home-inspections"
                  className="text-gray-700 hover:text-blue-600"
                  onClick={onClose}
                >
                  Module 1
                </Link>
                <div
                >
                  Module 2
                </div>
                <div
                >
                  Module 3
                </div>
              </div>
            )}
          </div>
        </nav>
      </aside>
    </>
  );
};

export default SideMenu;
