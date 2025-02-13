"use client";
import Image from "next/image";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Hero = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration
      offset: 200, // Offset (distance from top to trigger animation)
    });
  }, []);
  return (
    <div className="container px-5 md:px-10 lg:px-14">
      <div className="flex flex-col items-center justify-between mx-auto mt-24 md:flex-row md:mt-28">
        {/* Left part */}
        <div className="space-y-4 md:space-y-6 lg:space-y-7 max-w-full md:max-w-[50%] p-5 md:p-10 lg:ml-10">
          <h1
            className="text-4xl font-extrabold md:text-6xl lg:text-7xl aos-box "
            data-aos="fade-up"
          >
            Maximize
          </h1>
          <h2
            className="text-4xl font-extrabold md:text-6xl lg:text-7xl aos-box "
            data-aos="fade-up"
          >
            Your
          </h2>
          <h3
            className="text-4xl font-extrabold text-purple-700 md:text-6xl lg:text-7xl aos-box "
            data-aos="fade-up"
          >
            Visibility
          </h3>
          <p
            className="pt-5 font-sans font-medium text-gray-600 md:pt-6 aos-box "
            data-aos="fade-up"
          >
            Do you want to step up your game and make the best out of the world
            is most popular page builder Then you have come to the right place.
            Our mission is to provide you with the best tools available and
            enable you to build stunning & fabulous website designs.
          </p>
          <button
            className="px-6 py-3 font-medium text-white bg-purple-700 rounded-lg aos-box "
            data-aos="fade-up"
          >
            <a href="/contact">Contact Us</a>
          </button>
        </div>
        {/* Right part */}
        <div
          className="w-full mt-10 bg-purple-700 rounded-md md:w-1/2 md:mt-0 aos-box "
          data-aos="fade-up"
        >
          <Image
            src="/images/01.jpg"
            alt="Hero Image"
            width={800}
            height={900}
            className="rounded-md"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
