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
                  Website Maintenance
                </h1>
                <p className=" text-white font-sans text-[16px] text-center mt-5 font-semibold">
                  Website maintenance is that the act of regularly checking your
                  website for issues and mistakes and keeping it updated and
                  relevant. This should be done on a regular basis so as to stay
                  your website healthy, encourage continued traffic growth, and
                  strengthen your SEO and Google rankings..
                </p>
                <p className=" text-white font-sans text-[16px] text-center mt-5 font-semibold">
                  {" "}
                  A website is the critical first impression of your company for
                  your online visitors. It should be dynamic and fresh at all
                  times. Once you have decided to have your online business
                  presence, do it in a professional way.
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
              Website <span className=" text-blue-500">Maintenance</span>
            </h1>
            <p className=" text-[16px] font-sans font-semibold text-slate-400 mt-5 text-center">
              A well-kept up site is crucial for constant service industries.
              All organizations need ordinary site support to pull in and hold
              clients, keep up internet search rankings and present new data.
            </p>

            <div className=" max-w-4xl mx-auto flex  justify-between gap-10 mt-20">
              {/* Left Part */}
              <div className=" relative w-[50%] h-24">
                <Image
                  src={"/images/52.png"}
                  width={400}
                  height={400}
                  objectFit="cover"
                />
              </div>

              {/* Right Part */}
              <div className=" w-[50%]">
                <h1 className=" text-[14px] font-sans font-semibold text-slate-500  text-center">
                  To make your site bug free, we offer regular help checkups and
                  improvements. Our team experts take care of any issue arises
                  through third-party plugins or by the core itself. Your
                  website issue would be resolved at the first ticket and first
                  priority.
                </h1>
                <h2 className=" text-[14px] font-sans font-semibold text-slate-500 mt-5 text-center">
                  The advantage of our website maintenance program is you can
                  edit, add and update content as and when needed. As in system,
                  we do take a full backup prior to any major update of the
                  website and even if needed the backup can be on-demand from
                  the client.
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
