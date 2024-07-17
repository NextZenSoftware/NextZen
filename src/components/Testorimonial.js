import Image from 'next/image';
import React from 'react'

 const Testroml = [
   {
     title: "Hamid",
     description:
       "Excellent work done by the experts as per my requirements. Great communication and high quality service. Would love to work with them again",
     img: "/images/33.jpg",
   },
   {
     title: "Aamaan",
     description:
       "Excellent work done by the experts as per my requirements. Great communication and high quality service. Would love to work with them again",
     img: "/images/32.jpg",
   },
   {
     title: "SyedYusuf",
     description:
       "Excellent work done by the experts as per my requirements. Great communication and high quality service. Would love to work with them again",
     img: "/images/31.jpg",
   },
 ];
const Testorimonial = () => {
  return (
    <div className="max-w-4xl mx-auto py-12 mt-24">
      <div className="text-center mb-5">
        <h2 className="text-3xl font-bold">
          What <span className="text-purple-700">clients</span> Says
        </h2>
        <p className="mt-5 text-center text-gray-600 font-sans font-medium ">
          We are highly fortunate to create good partnership with numerous
          clients. We are always happy to hear our services are appreciated.
          Take a look at what our clients says:
        </p>
      </div>

      <div className="flex justify-center mt-10 space-x-12  ">
        {Testroml.map((project, index) => (
          <div key={index} className="w-1/3 text-center  ">
            <div className=" mb-5 shadow-lg rounded-lg flex-col bg-white overflow-hidden p-5 flex items-center justify-center">
              <Image
                src={project.img}
                alt={project.title}
                width={300}
                height={200}
                className="w-16 h-16 object-cover rounded-full mb-5"
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