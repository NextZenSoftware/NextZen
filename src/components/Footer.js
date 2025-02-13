"use client";
import React, { useEffect } from "react";
import { BsLinkedin } from "react-icons/bs";
import { FaFacebookSquare } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaInstagramSquare } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import Link from "next/link";
import AOS from "aos";
import "aos/dist/aos.css";

const Footer = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration
      offset: 200, // Offset (distance from top to trigger animation)
    });
  }, []);
  return (
    <div
      className="flex flex-col flex-wrap w-full h-auto px-4 pt-8 pb-16 text-black bg-white md:flex-row justify-evenly md:px-12 aos-box "
      data-aos="fade-up"
    >
      <div className="mb-8 md:mb-0">
        <div className="items-center">
          <h1 className="mt-4 text-xl font-bold text-center ">
            NextZen Software
          </h1>
        </div>
        <div>
          <p className="mt-4 text-sm text-center transition-all duration-200 cursor-pointer hover:text-blue-700 ">
            NextZen Website Developed By
            <br />
            NextZen Software Solutions Pvt. Ltd.
          </p>
        </div>
      </div>

      <div className="mb-8 md:mb-0">
        <div>
          <h1 className="mt-4 text-xl font-bold text-center ">Contact Info</h1>
        </div>
        <div className="flex flex-col items-center lg:items-start">
          <div className="flex gap-3 mt-5 transition-all duration-200 cursor-pointer hover:text-blue-700 ">
            <FaLocationDot size={25} />
            <p className="text-sm text-center">
              N-67, N Block, Abul Fazal Enclave,
              <br />
              Jamia Nagar, Okhla, New Delhi, India
            </p>
          </div>
          <div className="flex items-start justify-start gap-3 my-2 text-sm transition-all duration-200 cursor-pointer hover:text-blue-700 ">
            <MdEmail size={25} />
            <Link href={"/contact"}>
              {" "}
              <span>info@nextzen.com</span>{" "}
            </Link>
          </div>
        </div>
      </div>

      <div className="mb-8 md:mb-0">
        <div>
          <h1 className="mt-4 text-xl font-bold text-center">Company</h1>
        </div>
        <div className="flex flex-col items-center">
          <p className="mt-4 text-sm transition-all duration-200 cursor-pointer hover:text-blue-700 ">
            <Link href={"/about"}> About us</Link>
          </p>
          <p className="text-sm transition-all duration-200 cursor-pointer hover:text-blue-700 ">
            <Link href={"/about"}> Our Team</Link>
          </p>
          <p className="text-sm transition-all duration-200 cursor-pointer hover:text-blue-700">
            Privacy Policy
          </p>
          <p className="text-sm transition-all duration-200 cursor-pointer hover:text-blue-700 ">
            Terms & Conditions
          </p>
        </div>
      </div>

      <div className="mb-8 md:mb-0">
        <div>
          <h1 className="mt-4 text-xl font-bold text-center ">
            <Link href={"/contact"}>Support</Link>
          </h1>
        </div>
        <div className="flex flex-col items-center">
          <p className="mt-4 text-sm transition-all duration-200 cursor-pointer hover:text-blue-700 ">
            <Link href={"/contact"}> Contact Us</Link>
          </p>
          <p className="text-sm transition-all duration-200 cursor-pointer hover:text-blue-700">
            FAQs
          </p>
          <p className="text-sm transition-all duration-200 cursor-pointer hover:text-blue-700 ">
            <Link href={"/contact"}> Help Center</Link>
          </p>
          <p className="text-sm transition-all duration-200 cursor-pointer hover:text-blue-700 ">
            Best Website
          </p>
        </div>
      </div>

      <div className="flex flex-col items-center">
        <div className="flex mt-5 space-x-3 ">
          <a
            href="https://www.facebook.com/nextzensoftwaresolutions"
            target="_blank"
          >
            <FaFacebookSquare
              size={25}
              className="transition-all duration-200 cursor-pointer hover:text-blue-700"
            />
          </a>
          <a href="https://x.com/NextZenSoftware" target="_blank">
            <FaSquareXTwitter
              size={25}
              className="transition-all duration-200 cursor-pointer hover:text-blue-700"
            />
          </a>
          <a
            href="https://www.linkedin.com/company/103739440/admin/dashboard/"
            target="_blank"
          >
            <BsLinkedin
              size={25}
              className="transition-all duration-200 cursor-pointer hover:text-blue-700"
            />
          </a>

          <a
            href="https://www.instagram.com/nextzensoftwaresolutionspvtltd/"
            target="_blank"
          >
            <FaInstagramSquare
              size={25}
              className="transition-all duration-200 cursor-pointer hover:text-blue-700"
            />
          </a>
        </div>
        <div>
          <h5 className="mt-4 text-xs text-center ">
            We don’t have any legal agreement with elegant themes. We are
            providing services to our clients as a web designer, Web developer,
            and SEO Expert!
          </h5>
        </div>
        <div className="mt-2">
          <span className="mt-6 text-sm text-center cursor-pointer hover:text-blue-700 ">
            © {new Date().getFullYear()} NextZen. All rights reserved.
          </span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
