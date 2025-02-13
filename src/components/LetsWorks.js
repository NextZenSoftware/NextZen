"use client";
import Link from "next/link";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const LetsWorks = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration
      offset: 200, // Offset (distance from top to trigger animation)
    });
  }, []);
  return (
    <>
      <div className="flex items-center justify-center w-full mt-12 bg-blue-600 h-96">
        <div className="flex flex-col items-center justify-center">
          <div className="flex-col max-w-2xl mx-auto space-y-4 text-center ">
            <h1
              className="text-xl font-extrabold text-white lg:text-3xl md:text-2xl aos-box "
              data-aos="fade-up"
            >
              Lets Work Together!
            </h1>
            <p
              className=" text-white lg:[16px] text[14px] px-2 text-center font-sans aos-box"
              data-aos="fade-up"
            >
              So, if you are interested in working with us with your exciting
              new project choose a package to start with and customize from
              there! We will work closely with you to achieve your goals.
            </p>
            <button
              className="px-6 py-3 font-semibold bg-white btn-4 rounded-3xl aos-box "
              data-aos="fade-up"
            >
              <Link href={"/contact"}>GET IN TOUCH</Link>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default LetsWorks;
