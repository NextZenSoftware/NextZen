import Layout from '@/components/Layouts/Layout'
import Link from 'next/link'
import React from 'react'

const page = () => {
  return (
    <>
      <Layout>
        <div className="max-w-2xl mx-auto mt-36 flex flex-col justify-center items-center h-full">
          <div className="border-2 border-purple-500 p-8 bg-gradient-to-r from-purple-200 to-white rounded-lg text-center shadow-lg">
            <h1 className="text-2xl font-sans mt-2 text-black">
              Thank you😀 for Contacting Us
            </h1>
            <p className="text-lg font-sans text-black mt-2">
              Our team will contact you soon. Stay tuned!
            </p>
          </div>
          <button className="mt-6 px-6 py-3 mb-5 rounded-md bg-purple-600 hover:bg-purple-700 text-white font-semibold">
            <Link href={"/"}>Go Back</Link>
          </button>
        </div>
      </Layout>
    </>
  );
}

export default page