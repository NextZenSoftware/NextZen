"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const ChooseUs = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration
      offset: 200, // Offset (distance from top to trigger animation)
    });
  }, []);
  return (
    <div className="flex flex-col items-center max-w-4xl px-2 py-12 mx-auto md:flex-row lg:px-2 md:px-3">
      <div className="flex justify-center md:w-1/2 aos-box " data-aos="fade-up">
        <Image
          src="/images/41.png"
          alt="Why Choose Us"
          width={400}
          height={400}
          className="w-full h-auto"
        />
      </div>
      <div className="p-8 text-center md:w-1/2 md:text-left">
        <h2
          className="text-xl font-bold md:text-2xl lg:text-3xl aos-box "
          data-aos="fade-up"
        >
          Why <span className="text-purple-700">Choose Us?</span>
        </h2>
        <p
          className="mt-4 text-gray-600 lg:text-[14px] md:text-[12px] text-[13px] font-semibold text-center aos-box "
          data-aos="fade-up"
        >
          We provide the best service and support with our first priority
          towards 100% client satisfaction. We have an expert team of
          professionals that supports and resolves any issues until the client
          is fully satisfied.
        </p>
        <p
          className="mt-4 text-gray-600 lg:text-[14px] md:text-[12px] text-[13px] font-semibold text-center aos-box "
          data-aos="fade-up"
        >
          We pride ourselves on fast requests and high-quality solutions! We are
          constantly improving our products to provide you with the best service
          and support ever!
        </p>
        <button
          className="px-6 py-3 mt-6 font-semibold text-white bg-purple-700 rounded-full hover:bg-purple-800 aos-box "
          data-aos="fade-up"
        >
          <Link href={"/contact"}>Contact Us</Link>
        </button>
      </div>
    </div>
  );
};

export default ChooseUs;
