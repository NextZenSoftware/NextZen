 import Image from 'next/image';
import Link from 'next/link';
import React from 'react'
 
 const ChooseUs = () => {
   return (
     <div className="max-w-4xl mx-auto py-12 flex flex-col md:flex-row items-center lg:px-2 md:px-3 px-2">
       <div className="md:w-1/2 flex justify-center">
         <Image
           src="/images/41.png"
           alt="Why Choose Us"
           width={400}
           height={400}
           className="w-full h-auto"
         />
       </div>
       <div className="md:w-1/2 text-center md:text-left p-8">
         <h2 className=" md:text-2xl lg:text-3xl text-xl font-bold">
           Why <span className="text-purple-700">Choose Us?</span>
         </h2>
         <p className="mt-4 text-gray-600 lg:text-[14px] md:text-[12px] text-[13px] font-semibold text-center">
           We provide the best service and support with our first priority
           towards 100% client satisfaction. We have an expert team of
           professionals that supports and resolves any issues until the client
           is fully satisfied.
         </p>
         <p className="mt-4 text-gray-600 lg:text-[14px] md:text-[12px] text-[13px] font-semibold text-center">
           We pride ourselves on fast requests and high-quality solutions! We
           are constantly improving our products to provide you with the best
           service and support ever!
         </p>
         <button className="mt-6 bg-purple-700 text-white py-3 px-6 font-semibold rounded-full hover:bg-purple-800">
           <Link href={"/contact"}>Contact Us</Link>
         </button>
       </div>
     </div>
   );
 }
 
 export default ChooseUs