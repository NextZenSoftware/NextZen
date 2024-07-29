"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { FaChevronDown } from "react-icons/fa";
import { FaAngleRight } from "react-icons/fa";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isServicesOpen, setServicesOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };
  const toggleServicesDropdown = () => {
    setServicesOpen(!isServicesOpen);
  };

  return (
    <header>
      <div className="bg-white fixed top-0 left-0 right-0 z-20 container border-b-2 border-gray-200 shadow-md">
        <div className="flex justify-between items-center max-w-6xl mx-auto py-4 px-6 md:px-8 lg:px-10">
          <div className="text-2xl md:text-3xl font-medium text-purple-700">
            <Link href={"/"}>
              <Image
                src={"/images/logo2.png"}
                width={170}
                height={170}
                alt="Logo"
                objectFit="cover"
                loading="lazy"
              />
            </Link>
          </div>
          <div className="hidden md:flex space-x-4 items-center">
            <Link
              href="/"
              className="text-gray-500 font-sans font-medium hover:border-b-2 hover:border-black transition-all duration-300"
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
                className="text-gray-500 font-sans font-medium transition-all duration-300 flex"
              >
                SERVICES <FaChevronDown className=" mt-1 ml-1" />
              </Link>
              <div className="absolute hidden group-hover:block bg-white  w-44 rounded-md shadow-lg ring-1 ring-black ring-opacity-5">
                <div
                  className="py-1"
                  role="menu"
                  aria-orientation="vertical"
                  aria-labelledby="options-menu"
                >
                  <Link
                    href="/services/service1"
                    className="flex px-4 py-3 gap-1 text-sm text-gray-700 hover:bg-gray-200"
                  >
                    BUILDING WEBSITE{" "}
                    <div>
                      {" "}
                      <div className=" items-end">
                        {" "}
                        <FaAngleRight className="mt-1" size={15} />
                      </div>
                    </div>
                  </Link>
                  <Link
                    href="/services/service2"
                    className="flex gap-1 px-4 py-2 text-sm text-gray-700 hover:bg-gray-200"
                  >
                    WEBSITE MAINTENANCE{" "}
                    <div>
                      {" "}
                      <FaAngleRight className="mt-1" size={15} />
                    </div>
                  </Link>
                  <Link
                    href="/services/service3"
                    className="flex gap-1 px-4 py-2 text-sm text-gray-700 hover:bg-gray-200"
                  >
                    E-COMMERCE DEVELOPMENT{" "}
                    <div>
                      {" "}
                      <FaAngleRight className="mt-1" size={15} />
                    </div>
                  </Link>
                  <Link
                    href="/services/service4"
                    className="flex px-4 w-fit py-2 text-sm text-gray-700 hover:bg-gray-200"
                  >
                    SEARCH ENGINE OPTIMIZATION{" "}
                    <div>
                      {" "}
                      <FaAngleRight className="mt-1" size={15} />
                    </div>
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
          <div className="md:hidden">
            {/* Mobile menu button */}
            <button
              onClick={toggleMobileMenu}
              className="text-gray-500 focus:outline-none"
              aria-label="Open menu"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                ></path>
              </svg>
            </button>
          </div>
        </div>
        {/* Mobile menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden">
            <div className="flex flex-col items-center space-y-4 py-4">
              <Link
                href="/"
                className="text-gray-500 font-sans font-medium hover:border-b-2 hover:border-black transition-all duration-300"
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
                <button
                  className="text-gray-500 font-sans flex font-medium transition-all duration-300"
                  onClick={toggleServicesDropdown}
                >
                  SERVICES
                  <FaChevronDown className=" mt-1 ml-1 text-gray-500 " />
                </button>
                {isServicesOpen && (
                  <div className="absolute bg-white w-48 rounded-md shadow-lg ring-1 ring-black ring-opacity-5">
                    <div
                      className="py-1"
                      role="menu"
                      aria-orientation="vertical"
                      aria-labelledby="options-menu"
                    >
                      <Link
                        href="/services/service1"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-200"
                      >
                        BUILDING WEBSITE{" "}
                        <div>
                          {" "}
                          <FaAngleRight className="mt-1" size={15} />
                        </div>
                      </Link>
                      <Link
                        href="/services/service2"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-200"
                      >
                        WEBSITE MAINTENANCE
                        <div>
                          {" "}
                          <FaAngleRight className="mt-1" size={15} />
                        </div>
                      </Link>
                      <Link
                        href="/services/service3"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-200"
                      >
                        E-COMMERCE DEVELOPMENT
                        <div>
                          {" "}
                          <FaAngleRight className="mt-1" size={15} />
                        </div>
                      </Link>
                      <Link
                        href="/services/service4"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-200"
                      >
                        SEARCH ENGINE OPTIMIZATION
                        <div>
                          {" "}
                          <FaAngleRight className="mt-1" size={15} />
                        </div>
                      </Link>
                    </div>
                  </div>
                )}
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
        )}
      </div>
    </header>
  );
};

export default Navbar;
