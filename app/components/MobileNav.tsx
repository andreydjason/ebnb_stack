// component MobileNav.tsx
'use client';

import { useState } from 'react';
import NavMenu from './NavMenu';

export default function MobileNav() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="nav-menu-mobile md:hidden">
      {/* Menu Toggler */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="mr-5 p-2 rounded-md ring-1 ring-white focus:outline-none focus:ring-2 focus:ring-sky-500"
        aria-label="Toggle menu"
      >
        <svg
          className="w-6 h-6 text-white"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          {isOpen ? (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          ) : (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          )}
        </svg>
      </button>

      {/* Menu Dropdown */}
      <ul
        className={`justify-left bg-dark bg-gray-800 absolute left-0 w-screen text-white shadow-md origin-top transition-transform transform z-50
          ${isOpen ? 'scale-y-100' : 'scale-y-0 pointer-events-none'}
        `}
        style={{ transitionDuration: '150ms' }}
      >
        <NavMenu isOpen={isOpen} setIsOpen={setIsOpen} />
      </ul>
    </nav>
  );
}