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
            <div className="max-w-4xl mx-auto flex flex-col md:flex-row  gap-10 px-4 md:px-0 mt-16  ">
              {/* Left Part */}
              <div className="flex flex-col items-center md:items-start justify-center w-full md:w-1/2 lg:mt-5 mt-10">
                <h1 className="lg:text-3xl md:text-2xl text-[24px] font-sans font-bold text-white text-center md:text-left">
                  Website Maintenance
                </h1>
                <p className="text-white font-sans text-[16px] text-center md:text-left mt-5 font-semibold">
                  Website maintenance is the act of regularly checking your
                  website for issues and mistakes and keeping it updated and
                  relevant. This should be done on a regular basis so as to keep
                  your website healthy, encourage continued traffic growth, and
                  strengthen your SEO and Google rankings.
                </p>
                <p className="text-white font-sans text-[16px] text-center md:text-left mt-5 font-semibold">
                  A website is the critical first impression of your company for
                  your online visitors. It should be dynamic and fresh at all
                  times. Once you have decided to have your online business
                  presence, do it in a professional way.
                </p>
              </div>

              {/* Right Part */}
              <div className="w-full md:w-1/2">
                <Form />
              </div>
            </div>
          </div>

          <div className="h-auto max-w-4xl mx-auto flex flex-col justify-center items-center px-4 md:px-0 py-10 lg:mt-1 mt-10">
            <h1 className="lg:text-3xl text-[22px] font-sans font-bold text-center">
              Website <span className="text-blue-500">Maintenance</span>
            </h1>
            <p className="text-[16px] font-sans font-semibold text-slate-400 mt-5 text-center">
              A well-maintained site is crucial for constant service industries.
              All organizations need regular site maintenance to attract and
              retain customers, maintain search rankings, and present new
              information.
            </p>

            <div className="w-full flex flex-col md:flex-row justify-between gap-10 mt-20">
              {/* Left Part */}
              <div className="relative w-full md:w-1/2 h-24">
                <Image
                  src={"/images/52.png"}
                  width={400}
                  height={400}
                  objectFit="cover"
                />
              </div>

              {/* Right Part */}
              <div className="w-full md:w-1/2 lg:mt-1 mt-10">
                <h1 className="text-[14px] font-sans font-semibold text-slate-500 text-center md:text-left">
                  To make your site bug-free, we offer regular support checkups
                  and improvements. Our team experts take care of any issue
                  arising through third-party plugins or by the core itself.
                  Your website issue would be resolved at the first ticket and
                  first priority.
                </h1>
                <h2 className="text-[14px] font-sans font-semibold text-slate-500 mt-5 text-center md:text-left">
                  The advantage of our website maintenance program is you can
                  edit, add and update content as needed. We take a full backup
                  prior to any major update of the website and can provide
                  on-demand backups from the client if needed.
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
