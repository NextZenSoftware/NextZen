import Image from 'next/image';
import React from 'react'

const Hero = () => {
  return (
    <div className=" container pl-8">
      <div className=" flex justify-between max-w-6xl mx-auto items-center mt-40 ">
        {/* left part */}
        <div className="p-10 space-y-5 max-w-[50%]">
          <h1 className=" text-7xl font-extrabold mt-6 ">Maximize</h1>
          <h2 className="text-7xl font-extrabold"> Your</h2>
          <h3 className=" text-purple-700 text-7xl font-extrabold ">
            Visibility
          </h3>

          <p className=" pt-10 text-gray-600 font-sans font-medium">
            Do you want to step up your game and make the best out of the worlds
            most popular page builder? Then you have come to the right place.
            Our mission is to provide you with the best tools available and
            enable you to build stunning & fabulous website Designs.
          </p>

          <button className=" px-6 py-3 rounded-lg bg-purple-700 text-white font-medium">
            <a href="/contact">Contact Us</a>
          </button>
        </div>
        {/* Right PArt */}

        <div className="bg-purple-700 rounded-md ">
          
          <div>
            <Image src={"/images/01.jpg"} width={800} height={900} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero