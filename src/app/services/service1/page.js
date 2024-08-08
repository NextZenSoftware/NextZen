"use client";
import Form from "@/components/Form";
import Layout from "@/components/Layouts/Layout";
import LetsWorks from "@/components/LetsWorks";
import Image from "next/image";
import React from "react";

const page = () => {
  return (
    <>
      <Layout>
        <div>
          <div className="w-full min-h-screen bg-purple-600">
            {/* Container */}
            <div className="max-w-4xl mx-auto flex flex-col md:flex-row mt-16 gap-10 px-4 md:px-0">
              {/* Left Part */}
              <div className="flex flex-col items-center md:items-start justify-center w-full md:w-1/2 lg:mt-5 mt-10">
                <h1 className="lg:text-3xl md:text-2xl text-[24px]  font-sans font-bold text-white text-center md:text-left">
                  BUILDING WEBSITE
                </h1>
                <p className="text-white font-sans lg:text-[16px] md:tet-[14px] text-sm lg:px-0 px-4 text-center md:text-left mt-5 font-semibold">
                  Building a website is a multifaceted process that involves a
                  combination of design, development, and strategic planning to
                  create an effective online presence. We Build Website as the
                  client Requirements, Try to fulfill the Requirements of the
                  client.
                </p>
                <p className="text-white font-sans lg:text-[16px] md:tet-[14px] text-sm lg:px-0 px-4 text-center md:text-left mt-5 font-semibold">
                  This stage involves both front-end and back-end development.
                  Front-end development focuses on the user interface and user
                  experience, ensuring that the website is responsive and
                  performs well on different devices and browsers. Back-end
                  development.
                </p>
              </div>

              {/* Right Part */}
              <div className="w-full md:w-1/2">
                <Form />
              </div>
            </div>
          </div>

          <div className="h-auto max-w-4xl mx-auto flex flex-col justify-center items-center px-4 md:px-0 py-10">
            <h1 className="lg:text-3xl text-[22px] font-sans font-bold text-center">
              BUILDING <span className="text-blue-500">WEBSITE</span>
            </h1>
            <p className="lg:text-[16px] text-sm font-sans font-semibold text-slate-400 mt-5 text-center">
              NextZen Software Build template consists of a custom Header,
              Footer and Body layout. These 3 areas can be built and customized
              using the theme and its full set of modules along with Dynamic
              Content.
            </p>

            <div className="w-full flex flex-col md:flex-row justify-between gap-10 mt-20">
              {/* Left Part */}
              <div className="relative w-full md:w-1/2 h-24">
                <Image
                  src={"/images/51.png"}
                  width={400}
                  height={400}
                  alt="Service1"
                  objectFit="cover"
                />
              </div>

              {/* Right Part */}
              <div className="w-full md:w-1/2 lg:mt-0 mt-12">
                <h1 className="lg:text-[14px] text-sm lg:px-0 px-3 font-sans font-semibold text-slate-500 text-center md:text-left">
                  Using the Our Theme Builder you will be able to create custom
                  headers and footers for any a part of your website. You are no
                  longer limited to Our standard header but instead are given
                  full control over your website is header using the Our Builder
                  and its many modules.
                </h1>
                <h2 className="lg:text-[14px] text-sm lg:px-0 px-3 font-sans font-semibold text-slate-500 mt-5 text-center md:text-left">
                  This update also comes with improvements to the theme menu
                  module, giving you more layout options, more control over its
                  elements and of course full control over its design. You can
                  create a global website header that affects your entire
                  website and you can customize any individual part your website
                  too.
                </h2>
              </div>
            </div>
          </div>
          <LetsWorks />
        </div>
      </Layout>
    </>
  );
};

export default page;
