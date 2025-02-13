"use client";
import Image from "next/image";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Testroml = [
  {
    title: "Hitesh .S",
    description:
      "Excellent work done by the experts as per my requirements. Great communication and high quality service. Would love to work with them again",
    img: "/images/33.jpg",
  },
  {
    title: "T. JOY",
    description:
      "Outstanding work delivered by the professionals, perfectly aligned with my specifications. Excellent communication and top-notch quality service. I am eager to contact again.",
    img: "/images/32.jpg",
  },
  {
    title: "S.Yusuf",
    description:
      "Exceptional job completed by the team, exactly as I envisioned. Great communication and superb quality of service. I look forward to partnering with them again.",
    img: "/images/31.jpg",
  },
];
const Testorimonial = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration
      offset: 200, // Offset (distance from top to trigger animation)
    });
  }, []);
  return (
    <div className="max-w-5xl px-4 py-12 mx-auto mt-10 lg:mt-24 lg:px-2 md:px-3 ">
      <div className="mb-5 text-center">
        <h2
          className="text-xl font-bold md:text-2xl lg:text-3xl aos-box "
          data-aos="fade-up"
        >
          What <span className="text-purple-700">clients</span> Says
        </h2>
        <p
          className="mt-5 font-sans font-medium text-center text-gray-600 aos-box "
          data-aos="fade-up"
        >
          We are highly fortunate to create good partnership with numerous
          clients. We are always happy to hear our services are appreciated.
          Take a look at what our clients says:
        </p>
      </div>

      <div className="grid grid-cols-1 mt-10 lg:grid-cols-3 md:grid-cols-2 lg:gap-2 md:gap-4 gap-14">
        {Testroml.map((project, index) => (
          <div
            key={index}
            className="gap-10 text-center h-72 w-76 aos-box "
            data-aos="fade-up"
          >
            <div
              className="flex flex-col items-center justify-center p-5 mb-5 overflow-hidden bg-white rounded-lg shadow-lg aos-box "
              data-aos="fade-up"
            >
              <Image
                src={project.img}
                alt={project.title}
                width={300}
                height={200}
                className="object-cover w-16 h-16 mb-5 rounded-full blur"
              />
              <div className="p-4">
                <h3
                  className="font-semibold text-[14px] text-black mb-5 text-center aos-box "
                  data-aos="fade-up"
                >
                  {project.description}
                </h3>
                <p
                  className="font-semibold text-gray-600 aos-box "
                  data-aos="fade-up"
                >
                  {project.title}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testorimonial;
