import Image from 'next/image';
import Link from 'next/link';
import React from 'react'

const Projects = () => {

     const projects = [
       {
         title: "Shopping Website",
         type: "E-Commerce",
         img: "/images/21.png",
       },
       {
         title: "Food Delivery Website",
         type: "Food App",
         img: "/images/22.png",
       },
       {
         title: "Education Platform",
         type: "Education",
         img: "/images/23.png",
       },
     ];
  return (
    <div className="max-w-4xl mx-auto py-12 mt-24">
      <div className="text-center mb-5">
        <h2 className="text-3xl font-bold">
          Our <span className="text-purple-700">Latest</span> Projects
        </h2>
        <p className="mt-5 text-center text-gray-600 font-sans font-medium ">
          NextZen Support is a unique website design company offering a variety
          of online services from basic Website Design to complete Website
          Development. We have created and launched many successful websites for
          small and medium businesses. We have the ability to turn your
          imagination into reality!
        </p>
      </div>

      <div className="flex justify-center mt-10 space-x-8 ">
        {projects.map((project, index) => (
          <div key={index} className="w-1/3 text-center ">
            <div className=" shadow-lg rounded-lg overflow-hidden p-5">
              <Image
                src={project.img}
                alt={project.title}
                width={300}
                height={200}
                className="w-full h-56 object-cover rounded-md"
              />
              <div className="p-4">
                <h3 className="font-bold text-lg">{project.title}</h3>
                <p className="text-gray-600 font-semibold">{project.type}</p>
                <button className="mt-4 bg-purple-700 text-white py-3 px-6 font-semibold rounded-full hover:bg-purple-800">
                  <Link href={"/portfolio"}> View More</Link>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects