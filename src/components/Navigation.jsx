"use client"
import React, { useState } from 'react';
import Link from 'next/link';

const Navigation = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Left Section */}
          <div className="flex-shrink-0 flex items-center">
            <Link href={"/"} className="flex-shrink-0">
              <span className="text-white text-lg font-semibold ml-2 uppercase">Blog</span>
            </Link>
           
          </div>

          {/* Right Section */}
          <div className="hidden md:flex items-center">
            <Link href={"/"} className="text-gray-300 hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium">
                Home
            </Link>
            <Link href={"/about"} className="text-gray-300 hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium">
                About
            </Link>
            <Link href={"/blog"} className="text-gray-300 hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium">
                Blog
            </Link>
            <Link href={"/contact"} className="text-gray-300 hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium">
                Contact
            </Link>
          </div>

          {/* Mobile Menu Icon */}
          <div className="flex md:hidden">
            <button type="button" className="text-gray-300 hover:text-white focus:outline-none focus:text-white" aria-label="Toggle menu" onClick={toggleMenu}>
              {isMenuOpen ? (
                <svg className="h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                  <path className="inline-flex" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                  <path className="inline-flex" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className={`md:hidden ${isMenuOpen ? 'block' : 'hidden'}`}>
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link href={"/"} className="text-gray-300 hover:bg-gray-700 block px-3 py-2 rounded-md text-base font-medium">
                Home
            </Link>
            <Link href={"/about"} className="text-gray-300 hover:bg-gray-700 block px-3 py-2 rounded-md text-base font-medium">
                About
            </Link>
            <Link href={"/blog"} className="text-gray-300 hover:bg-gray-700 block px-3 py-2 rounded-md text-base font-medium">
                Blog
            </Link>
            <Link href={"/contact"} className="text-gray-300 hover:bg-gray-700 block px-3 py-2 rounded-md text-base font-medium">
                Contact
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
