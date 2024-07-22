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
                  Search Engine Optimization
                </h1>
                <p className=" text-white font-sans text-[16px] text-center mt-5 font-semibold">
                  SEO (Search engine optimization) is important for the success
                  of any online business. It is a set of rules for optimizing
                  your site so that it can achieve higher rankings in the search
                  engines’ results.
                </p>
                <p className=" text-white font-sans text-[16px] text-center mt-5 font-semibold">
                  {" "}
                  It is the best way to increase the quality of your website by
                  making it user-friendly, faster and easier to navigate.
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
              Search <span className=" text-blue-500">Engine</span> Optimization
            </h1>
            <p className=" text-[16px] font-sans font-semibold text-slate-400 mt-5 text-center">
              Search engine optimization is the process of optimizing websites
              and their content to be easily discoverable by users searching for
              terms relevant to your website.
            </p>

            <div className=" max-w-4xl mx-auto flex  justify-between mt-20">
              {/* Left Part */}
              <div className=" relative w-[50%] h-52">
                <Image
                  src={"/images/54.png"}
                  objectFit="contain"
                  layout="fill"
                />
              </div>

              {/* Right Part */}
              <div className=" w-[50%]">
                <h1 className=" text-[14px] font-sans font-semibold text-slate-500  text-center">
                  The professional SEO team can lift your website above your
                  competitors. According to the SEO experts, they help business
                  owners deliver their sites to top rank on the search engine.
                  They ensure that the website has a unique setting that
                  attracts your Internet users.
                </h1>
                <h2 className=" text-[14px] font-sans font-semibold text-slate-500 mt-5 text-center">
                  Our SEO experts apply the newest analytics service, which has
                  a positive impact on a website. Search Engine Optimization
                  companies are facing great competition on the Internet. How
                  they introduce guaranteed SEO services to cope with the
                  competition.
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
