

import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";


const Navbar = () => {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const navItem = (
    <>
        <Link
        to="/"
        className={`text-black hover:text-yellow-500 px-3 py-2 rounded-md text-sm font-medium ${
          location.pathname === "/"
            ? "bg-yellow-300 text-black"
            : "text-gray-100"
        }`}
      >
        Home
      </Link>
      <Link
        to="/skill"
        className={`text-black hover:text-yellow-500 px-3 py-2 rounded-md text-sm font-medium ${
          location.pathname === "/skill"
            ? "bg-yellow-300 text-black"
            : "text-gray-100"
        }`}
      >
        Skills
      </Link>
      
      <Link
        to="/project"
        className={`text-black hover:text-yellow-500 px-3 py-2 rounded-md text-sm font-medium ${
          location.pathname === "/project"
            ? "bg-yellow-300 text-black"
            : "text-gray-100"
        }`}
      >
        Project
      </Link>
      <Link
        to="/experience"
        className={`text-black hover:text-yellow-500 px-3 py-2 rounded-md text-sm font-medium ${
          location.pathname === "/experience"
            ? "bg-yellow-300 text-black"
            : "text-gray-100"
        }`}
      >
        Experience
      </Link>
      <Link
        to="/education"
        className={`text-black hover:text-yellow-500 px-3 py-2 rounded-md text-sm font-medium ${
          location.pathname === "/education"
            ? "bg-yellow-300 text-black"
            : "text-gray-100"
        }`}
      >
        Education
      </Link>
      <Link
        to="/contact"
        className={`text-black hover:text-yellow-500 px-3 py-2 rounded-md text-sm font-medium ${
          location.pathname === "/contact"
            ? "bg-yellow-300 text-black"
            : "text-gray-100"
        }`}
      >
        Contact
      </Link>
    </>
  );
  return (
 
      <nav className=" bg-gray-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex">
              <Link to="/">
                <span className="text-white">MAKBUL </span>
                <span className="font-bold text-2xl text-yellow-300">
                   PORTFOLIO
                </span>

              </Link>
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                {navItem}
              </div>
            </div>
            <div className="-mr-2 flex md:hidden">
              <button
                onClick={toggleMenu}
                type="button"
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-black hover:bg-gray-700 focus:outline-none focus:bg-gray-700 focus:text-black transition duration-150 ease-in-out"
              >
                <svg
                  className={`${isOpen ? "hidden" : "block"} h-6 w-6`}
                  stroke="currentColor"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
                <svg
                  className={`${isOpen ? "block" : "hidden"} h-6 w-6`}
                  stroke="currentColor"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
          </div>
          <div className={`${isOpen ? "block" : "hidden"} md:hidden`}>
            <div className="px-2 pt-2 pb-3 sm:px-3">{navItem}</div>
          </div>
        </div>
      </nav>

  );
};

export default Navbar;
