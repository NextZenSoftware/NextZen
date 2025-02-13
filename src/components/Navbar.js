"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { FaChevronDown } from "react-icons/fa";
import { FaAngleRight } from "react-icons/fa";
import { HiOutlineMenu, HiOutlineX } from "react-icons/hi";

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
      <div className="fixed top-0 left-0 right-0 z-20 w-full bg-white border-b-2 border-gray-300 shadow-md">
        <div className="flex items-center justify-between px-2 py-4 mx-auto w-[90%] md:px-8 lg:px-10">
          <div className="text-2xl font-medium text-purple-700 md:text-3xl">
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
          <div className="items-center hidden space-x-4 md:flex">
            <Link
              href="/"
              className="font-sans font-medium text-gray-500 transition-all duration-300 hover:border-b-2 hover:border-black"
            >
              HOME
            </Link>
            <Link
              href="/about"
              className="font-sans font-medium text-gray-500 transition-all duration-300 hover:border-b-2 hover:border-black"
            >
              ABOUT
            </Link>
            <div className="relative group">
              <Link
                href="#"
                className="flex font-sans font-medium text-gray-500 transition-all duration-300"
              >
                SERVICES <FaChevronDown className="mt-1 ml-1 " />
              </Link>
              <div className="absolute hidden bg-white rounded-md shadow-lg group-hover:block w-44 ring-1 ring-black ring-opacity-5">
                <div
                  className="py-1"
                  role="menu"
                  aria-orientation="vertical"
                  aria-labelledby="options-menu"
                >
                  <Link
                    href="/services/service1"
                    className="flex gap-1 px-4 py-3 text-sm text-gray-700 hover:bg-gray-200"
                  >
                    BUILDING WEBSITE{" "}
                    <div>
                      {" "}
                      <div className="items-end ">
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
                    className="flex px-4 py-2 text-sm text-gray-700 w-fit hover:bg-gray-200"
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
              className="font-sans font-medium text-gray-500 transition-all duration-300 hover:border-b-2 hover:border-black"
            >
              PORTFOLIO
            </Link>
            <Link
              href="/contact"
              className="font-sans font-medium text-gray-500 transition-all duration-300 hover:border-b-2 hover:border-black"
            >
              CONTACT
            </Link>
          </div>
          <div className="z-50 md:hidden">
            {/* Mobile menu button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-gray-800"
              aria-label="Toggle Menu"
            >
              {isMobileMenuOpen ? (
                <HiOutlineX size={30} />
              ) : (
                <HiOutlineMenu size={30} />
              )}
            </button>
          </div>
        </div>
        {/* Mobile menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-gray-100 w-[70%] absolute right-0 h-[1000px] top-0 py-72 ">
            <div className="flex flex-col items-center py-4 space-y-4">
              <Link
                href="/"
                className="font-sans font-medium text-gray-800 transition-all duration-300 hover:border-b-2 hover:border-black"
              >
                HOME
              </Link>
              <Link
                href="/about"
                className="font-sans font-medium text-gray-800 transition-all duration-300 hover:border-b-2 hover:border-black"
              >
                ABOUT
              </Link>
              <div className="relative group">
                <button
                  className="flex font-sans font-medium text-gray-800 transition-all duration-300"
                  onClick={toggleServicesDropdown}
                >
                  SERVICES
                  <FaChevronDown className="mt-1 ml-1 text-gray-800 " />
                </button>
                {isServicesOpen && (
                  <div className="absolute w-48 bg-white rounded-md shadow-lg ring-1 ring-black ring-opacity-5">
                    <div
                      className="py-1"
                      role="menu"
                      aria-orientation="vertical"
                      aria-labelledby="options-menu"
                    >
                      <Link
                        href="/services/service1"
                        className="block px-4 py-2 text-sm text-gray-800 hover:bg-gray-200"
                      >
                        BUILDING WEBSITE{" "}
                        <div>
                          {" "}
                          <FaAngleRight className="mt-1" size={15} />
                        </div>
                      </Link>
                      <Link
                        href="/services/service2"
                        className="block px-4 py-2 text-sm text-gray-800 hover:bg-gray-200"
                      >
                        WEBSITE MAINTENANCE
                        <div>
                          {" "}
                          <FaAngleRight className="mt-1" size={15} />
                        </div>
                      </Link>
                      <Link
                        href="/services/service3"
                        className="block px-4 py-2 text-sm text-gray-800 hover:bg-gray-200"
                      >
                        E-COMMERCE DEVELOPMENT
                        <div>
                          {" "}
                          <FaAngleRight className="mt-1" size={15} />
                        </div>
                      </Link>
                      <Link
                        href="/services/service4"
                        className="block px-4 py-2 text-sm text-gray-800 hover:bg-gray-200"
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
                className="font-sans font-medium text-gray-800 transition-all duration-300 hover:border-b-2 hover:border-black"
              >
                PORTFOLIO
              </Link>
              <Link
                href="/contact"
                className="font-sans font-medium text-gray-800 transition-all duration-300 hover:border-b-2 hover:border-black"
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
