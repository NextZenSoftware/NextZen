"use client";
import Image from "next/image";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const cardContent = [
  {
    img: "/images/10.png",
    title: "Website Development",
    content:
      "We build websites from scratch. Our company also helps our clients develop awesome and attractive landing pages that can help in faster and effective business conversion.",
  },
  {
    img: "/images/13.png",
    title: "Website Maintenance",
    content:
      "NextZen Software Solutions Support is a top website maintenance services company. We offer small content updates, bug fixing, troubleshooting, SSL installation, version upgrades, and much more.",
  },
  {
    img: "/images/12.png",
    title: "E-commerce Development",
    content:
      "E-commerce has changed the way consumers purchase their goods and services online. Our e-commerce platform assists buyers and sellers to connect with each other, offering the best place to buy your goods and services online.",
  },
];

const Services = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration
      offset: 200, // Offset (distance from top to trigger animation)
    });
  }, []);
  return (
    <div className="container px-4 mx-auto mt-16 md:px-8 lg:px-12">
      <div className="flex flex-col max-w-[950px] mx-auto">
        {/* Top */}
        <div className="flex flex-col items-center max-w-3xl mx-auto text-center">
          <h1 className="font-serif text-3xl font-bold md:text-4xl lg:text-5xl aos-box " data-aos="fade-up">
            Our <span className="text-purple-700">Services</span>
          </h1>
          <p className="mt-5 font-sans text-sm font-medium text-gray-600 md:text-base lg:text-lg aos-box " data-aos="fade-up">
            The visual design of your website is as crucial as the quality of
            your product or service. We employ innovative web design techniques
            to create visually appealing websites with stunning features. Our
            approach focuses on user experience, ensuring responsive design and
            creative layouts.
          </p>
        </div>

        {/* Bottom */}
        <div className="grid grid-cols-1 gap-8 mt-12 md:grid-cols-2 lg:grid-cols-3">
          {cardContent.map((data, index) => (
            <div
              key={index}
              className="overflow-hidden transition duration-500 transform bg-white border-2 border-purple-400 rounded-lg shadow-md cursor-pointer hover:shadow-2xl aos-box " data-aos="fade-up"
            >
              <div className="flex items-center justify-center p-4 aos-box " data-aos="fade-up">
                <Image
                src={data.img}
                alt={data.title}
                width={300}
                height={200}
                className="object-cover w-24 h-24 mb-5"
              />
              </div>
              <div className="p-6">
                <h2 className="mb-4 text-lg font-medium text-center text-black md:text-xl lg:text-2xl font-title aos-box " data-aos="fade-up">
                  {data.title}
                </h2>
                <p className="font-sans font-medium leading-snug text-center text-gray-600 aos-box " data-aos="fade-up">
                  {data.content}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
