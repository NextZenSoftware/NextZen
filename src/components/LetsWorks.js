import Link from 'next/link';
import React from 'react'

const LetsWorks = () => {
  return (
    <>
      <div className=" mt-12 w-full h-96 bg-blue-600  flex  justify-center items-center ">
       
        <div className="flex flex-col justify-center items-center">
          <div className=" max-w-2xl mx-auto  flex-col text-center space-y-4">
            <h1 className=" text-white  lg:text-3xl md:text-2xl text-xl font-extrabold">
              Let's Work Together!
            </h1>
            <p className=" text-white lg:[16px] text[14px] px-2 text-center font-sans ">
              So, if you are interested in working with us with your exciting
              new project choose a package to start with and customize from
              there! We will work closely with you to achieve your goals.
            </p>
            <button className=" btn-4 px-6 py-3 rounded-3xl font-semibold  bg-white">
              <Link href={"/contact"}>GET IN TOUCH</Link>
            </button>
          </div>
        </div>
      
      </div>
    </>
  );
}

export default LetsWorks