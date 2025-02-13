"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Projects = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration
      offset: 200, // Offset (distance from top to trigger animation)
    });
  }, []);
  const projects = [
    {
      title: "Bait Al Tahzeeb",
      type: "Cleaning and Building Maintenance",
      img: "/images/img666.png",
      link: "https://baitaltahzeeb.com/",
    },
    {
      title: "Food Delivery Website",
      type: "Food App",
      img: "/images/67.png",
      link: "https://food-ordering-ed4o.onrender.com/",
    },
    {
      title: "Book Store",
      type: "Education",
      img: "/images/img665.jpg",
      link: "https://bookstore-1-9tyf.onrender.com",
    },
  ];

  return (
    <div className="max-w-6xl px-4 py-12 mx-auto mt-24 md:px-8 lg:px-10">
      <div className="mb-5 text-center">
        <h2
          className="text-2xl font-bold md:text-3xl lg:text-4xl aos-box "
          data-aos="fade-up"
        >
          Our <span className="text-purple-700">Latest</span> Projects
        </h2>
        <p
          className="px-4 mt-5 font-sans text-sm font-medium text-center text-gray-600 md:text-base lg:text-lg aos-box "
          data-aos="fade-up"
        >
          NextZen Support is a unique website design company offering a variety
          of online services from basic Website Design to complete Website
          Development. We have created and launched many successful websites for
          small and medium businesses. We have the ability to turn your
          imagination into reality!
        </p>
      </div>

      <div className="grid grid-cols-1 gap-6 mt-10 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, index) => (
          <div key={index} className="text-center aos-box " data-aos="fade-up">
            <div
              className="p-5 overflow-hidden rounded-lg shadow-lg aos-box "
              data-aos="fade-up"
            >
              <Image
                src={project.img}
                alt={project.title}
                width={300}
                height={200}
                objectFit="cover"
                className="w-full h-56 transition-all duration-300 border-2 border-purple-500 rounded-md hover:transform hover:scale-105"
              />
              <div className="p-2 pt-6">
                <h3 className="text-lg font-bold aos-box " data-aos="fade-up">
                  {project.title}
                </h3>
                <p
                  className="font-semibold text-gray-600 aos-box "
                  data-aos="fade-up"
                >
                  {project.type}
                </p>
                <button
                  className="px-6 py-3 mt-4 font-semibold text-white bg-purple-700 rounded-full hover:bg-purple-800 aos-box "
                  data-aos="fade-up"
                >
                  <Link href={project.link} target="_blank">
                    View
                  </Link>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
