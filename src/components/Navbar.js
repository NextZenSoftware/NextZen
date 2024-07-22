import Link from 'next/link';
import React from 'react'

const Navbar = () => {
  return (
    <header>
      <div className=" bg-white fixed top-0 left-0 right-0 z-20   container border-b-2 border-gray-200 shadow-md ">
        <div className=" flex justify-between max-w-6xl mx-auto py-5  ">
          <div className=" text-3xl font-medium text-purple-700 ">NextZen</div>
          <div className=" flex space-x-4 justify-center items-center">
            <Link
              href="/"
              className="  text-gray-500 font-sans font-medium hover:border-b-2 hover:border-black transition-all duration-300"
            >
              HOME
            </Link>
            <Link
              href="/about"
              className="text-gray-500 font-sans font-medium hover:border-b-2 hover:border-black transition-all duration-300"
            >
              ABOUT
            </Link>
            <div className="relative group">
              <Link
                href="#"
                className="text-gray-500 font-sans font-medium transition-all duration-300"
              >
                SERVICES
                <select></select>
              </Link>
              <div className="absolute hidden  group-hover:block bg-gradient-to-r from-purple-500 via-white to-blue-500  -translate-x-16 w-56 rounded-md shadow-lg  ring-1 ring-black ring-opacity-5">
                <div
                  className="py-1 "
                  role="menu"
                  aria-orientation="vertical"
                  aria-labelledby="options-menu"
                  
                >
                
                 
                  <Link
                    href="/services/service1"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    BUILDING WEBSITE
                  </Link>
                  <Link
                    href="/services/service2"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    WEBSITE MAINTENANCE
                  </Link>
                  <Link
                    href="/services/service3"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    E-COMMERCE DEVELOPMENT
                  </Link>
                  <Link
                    href="/services/service4"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    SEARCH ENGINE OPTIMIZATION
                  </Link>
                </div>
              </div>
            </div>
            <Link
              href="/portfolio"
              className="text-gray-500 font-sans font-medium hover:border-b-2 hover:border-black transition-all duration-300"
            >
              PORTFOLIO
            </Link>
            <Link
              href="/contact"
              className="text-gray-500 font-sans font-medium hover:border-b-2 hover:border-black transition-all duration-300"
            >
              CONTACT
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Navbar