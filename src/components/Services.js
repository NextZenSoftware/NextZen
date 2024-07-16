import React from "react";

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
  return (
    <div className="container mx-auto mt-32">
      <div className="flex flex-col max-w-[950px] mx-auto">
        {/* Top */}
        <div className="flex flex-col items-center max-w-3xl mx-auto">
          <h1 className="text-5xl font-bold font-serif">
            Our <span className="text-purple-700">Services</span>
          </h1>
          <p className="mt-5 text-center text-gray-600 font-sans font-medium">
            The visual design of your website is as crucial as the quality of
            your product or service. We employ innovative web design techniques
            to create visually appealing websites with stunning features. Our
            approach focuses on user experience, ensuring responsive design and
            creative layouts.
          </p>
        </div>

        {/* Bottom */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {cardContent.map((data, index) => (
            <div
              key={index}
              className=" bg-white border-2 border-purple-400 cursor-pointer shadow-md rounded-lg overflow-hidden transform transition duration-500 hover:scale-105 hover:shadow-lg"
            >
              <div className="flex justify-center items-center  p-4">
                <img
                  src={data.img}
                  alt={data.title}
                  className="w-24 h-24 object-cover"
                />
              </div>
              <div className="p-6">
                <h2 className="text-2xl font-title text-center font-medium text-black mb-4">
                  {data.title}
                </h2>
                <p className="leading-snug font-sans font-medium text-center text-gray-600">
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
