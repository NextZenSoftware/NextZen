// import Image from 'next/image';
// import React from 'react'

// const Hero = () => {
//   return (
//     <div className=" container pl-14">
//       <div className=" flex justify-between max-w-6xl mx-auto items-center mt-40 ">
//         {/* left part */}
//         <div className="p-10 space-y-5 max-w-[50%] ">
//           <h1 className=" text-7xl font-extrabold mt-6  ">Maximize</h1>
//           <h2 className="text-7xl font-extrabold"> Your</h2>
//           <h3 className=" text-purple-700 text-7xl font-extrabold ">
//             Visibility
//           </h3>

//           <p className=" pt-10 text-gray-600 font-sans font-medium">
//             Do you want to step up your game and make the best out of the worlds
//             most popular page builder? Then you have come to the right place.
//             Our mission is to provide you with the best tools available and
//             enable you to build stunning & fabulous website Designs.
//           </p>

//           <button className=" px-6 py-3 rounded-lg bg-purple-700 text-white font-medium">
//             <a href="/contact">Contact Us</a>
//           </button>
//         </div>
//         {/* Right PArt */}

//         <div className="bg-purple-700 rounded-md ">
          
//           <div>
//             <Image src={"/images/01.jpg"} width={800} height={900} />
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Hero

import Image from "next/image";
import React from "react";

const Hero = () => {
  return (
    <div className="container px-4 md:px-8 lg:px-14">
      <div className="flex flex-col md:flex-row justify-between items-center max-w-6xl mx-auto mt-20 md:mt-40">
        {/* Left part */}
        <div className="space-y-5 md:space-y-7 lg:space-y-10 max-w-full md:max-w-[50%] p-5 md:p-10 lg:ml-10">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold">
            Maximize
          </h1>
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-extrabold">
            Your
          </h2>
          <h3 className="text-purple-700 text-4xl md:text-6xl lg:text-7xl font-extrabold">
            Visibility
          </h3>
          <p className="pt-5 md:pt-10 text-gray-600 font-sans font-medium">
            Do you want to step up your game and make the best out of the
            world's most popular page builder? Then you have come to the right
            place. Our mission is to provide you with the best tools available
            and enable you to build stunning & fabulous website designs.
          </p>
          <button className="px-6 py-3 rounded-lg bg-purple-700 text-white font-medium">
            <a href="/contact">Contact Us</a>
          </button>
        </div>
        {/* Right part */}
        <div className="w-full md:w-1/2 mt-10 md:mt-0 bg-purple-700 rounded-md">
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
