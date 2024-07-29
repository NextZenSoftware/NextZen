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
        <div className="">
          <div className="w-full min-h-screen bg-purple-600">
            {/* Main Container */}
            <div className="max-w-4xl mx-auto flex flex-col lg:flex-row mt-16 gap-10 px-4">
              {/* Left Part */}
              <div className="flex flex-col items-center lg:items-start justify-center lg:w-[50%] w-full text-center lg:text-left lg:mt-0 mt-10">
                <h1 className="lg:text-3xl md:text-2xl text-xl font-sans font-bold text-white">
                  Search Engine Optimization
                </h1>
                <p className="text-white font-sans text-base mt-5 font-semibold">
                  SEO (Search engine optimization) is important for the success
                  of any online business. It is a set of rules for optimizing
                  your site so that it can achieve higher rankings in the search
                  engines results.
                </p>
                <p className="text-white font-sans text-base mt-5 font-semibold">
                  It is the best way to increase the quality of your website by
                  making it user-friendly, faster, and easier to navigate.
                </p>
              </div>
              {/* Right Part */}
              <div className="lg:w-[45%] w-full">
                <Form />
              </div>
            </div>
          </div>
          <div className="h-auto max-w-4xl mx-auto flex flex-col justify-center items-center px-4 py-10">
            <h1 className="lg:text-3xl text-2xl font-sans font-bold text-center">
              Search <span className="text-blue-500">Engine</span> Optimization
            </h1>
            <p className="text-base font-sans font-semibold text-slate-400 mt-5 text-center">
              Search engine optimization is the process of optimizing websites
              and their content to be easily discoverable by users searching for
              terms relevant to your website.
            </p>
            <div className="flex flex-col lg:flex-row justify-between items-center mt-10 w-full gap-10">
              {/* Left Part */}
              <div className="relative lg:w-[50%] w-full h-52">
                <Image
                  src={"/images/54.png"}
                  objectFit="contain"
                  layout="fill"
                  alt="SEO Image"
                />
              </div>
              {/* Right Part */}
              <div className="lg:w-[50%] w-full">
                <h1 className="text-base font-sans font-semibold text-slate-500 text-center lg:text-left">
                  The professional SEO team can lift your website above your
                  competitors. According to the SEO experts, they help business
                  owners deliver their sites to top rank on the search engine.
                  They ensure that the website has a unique setting that
                  attracts your Internet users.
                </h1>
                <h2 className="text-base font-sans font-semibold text-slate-500 mt-5 text-center lg:text-left">
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
