import Image from 'next/image';
import React from 'react'

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
  return (
    <div className="max-w-5xl mx-auto py-12 lg:mt-24 mt-10 lg:px-2 md:px-3 px-4 ">
      <div className="text-center mb-5">
        <h2 className=" text-xl md:text-2xl lg:text-3xl font-bold">
          What <span className="text-purple-700">clients</span> Says
        </h2>
        <p className="mt-5  text-center text-gray-600 font-sans font-medium ">
          We are highly fortunate to create good partnership with numerous
          clients. We are always happy to hear our services are appreciated.
          Take a look at what our clients says:
        </p>
      </div>

      <div className=" grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 mt-10  lg:gap-2  md:gap-4 gap-14  ">
        {Testroml.map((project, index) => (
          <div key={index} className=" h-72 w-76 text-center gap-10  ">
            <div className=" mb-5 shadow-lg rounded-lg flex-col bg-white overflow-hidden p-5 flex items-center justify-center">
              <Image
                src={project.img}
                alt={project.title}
                width={300}
                height={200}
                className="w-16 h-16 object-cover rounded-full mb-5 blur"
              />
              <div className="p-4">
                <h3 className="font-semibold text-[14px] text-black mb-5 text-center">
                  {project.description}
                </h3>
                <p className="text-gray-600 font-semibold">{project.title}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Testorimonial