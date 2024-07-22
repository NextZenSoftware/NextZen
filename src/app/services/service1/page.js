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
        <div className=" ">
          <div className=" w-full min-h-screen bg-purple-600 ">
            {/* Left Part */}

            <div className="max-w-4xl mx-auto flex mt-20 gap-10">
              <div className=" flex flex-col items-center justify-center w-[50%]">
                <h1 className=" text-3xl font-sans font-bold text-start text-white">
                  BUILDING WEBSITE
                </h1>
                <p className=" text-white font-sans text-[16px] text-center mt-5 font-semibold">
                  Building a website is a multifaceted process that involves a
                  combination of design, development, and strategic planning to
                  create an effective online presence. We Build Website as the
                  client Requirements , Try to fullfill the Requirements of the
                  client.
                </p>
                <p className=" text-white font-sans text-[16px] text-center mt-5 font-semibold">
                  {" "}
                  This stage involves both front-end and back-end development.
                  Front-end development focuses on the user interface and user
                  experience, ensuring that the website is responsive and
                  performs well on different devices and browsers. Back-end
                  development.
                </p>
              </div>

              {/* Right Part */}
              <div className="w-[45%]">
                <Form />
              </div>
            </div>
          </div>

          <div className=" h-[600px] max-w-4xl mx-auto flex flex-col justify-center items-center">
            <h1 className=" text-3xl font-sans font-bold">
              BUILDING <span className=" text-blue-500">WEBSITE</span>
            </h1>
            <p className=" text-[16px] font-sans font-semibold text-slate-400 mt-5 text-center">
              NextZen Software Build template consists of a custom Header,
              Footer and Body layout. These 3 areas can be built and customized
              using the theme and its full set of modules along with Dynamic
              Content.
            </p>

            <div className=" max-w-4xl mx-auto flex  justify-between gap-10 mt-20">
              {/* Left Part */}
              <div className=" relative w-[50%] h-24">
                <Image
                  src={"/images/51.png"}
                  width={400}
                  height={400}
                  objectFit="cover"
                />
              </div>

              {/* Right Part */}
              <div className=" w-[50%]">
                <h1 className=" text-[14px] font-sans font-semibold text-slate-500  text-center" >
                  Using the Our Theme Builder you’ll be able to create custom
                  headers and footers for any a part of your website. You are no
                  longer limited to Our standard header but instead are given
                  the full control over your website’s header using the Our
                  Builder and its many modules.
                </h1>
                <h2 className=" text-[14px] font-sans font-semibold text-slate-500 mt-5 text-center">
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
