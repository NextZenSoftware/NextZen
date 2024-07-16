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
            <Link
              href="/services"
              className="text-gray-500 font-sans font-medium hover:border-b-2 hover:border-black transition-all duration-300"
            >
              SERVICES
            </Link>
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