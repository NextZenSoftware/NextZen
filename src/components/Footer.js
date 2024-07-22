import React from 'react'
import { BsLinkedin } from "react-icons/bs";
import { FaFacebookSquare } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaGithubSquare } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";


const Footer = () => {
  return (
    <div className=' bg-purple-600 w-full h-auto px-4 text-white pt-8 pb-16 flex flex-col md:flex-row flex-wrap justify-evenly md:px-12'>
      <div>
        <div className='items-center'>
          <h1 className='font-bold text-xl mt-4 text-center'>NextZen Software </h1>
        </div>
        
        <div>
          <p className='text-sm text-center mt-4 hover:text-black transition-all duration-200'>NextZen Website Developed By 
          <br></br>
          NextZen Software Solutions Pvt. Ltd.</p>
        </div>
      </div>
      <div>
        <div>
          <h1 className='font-bold text-xl mt-4 text-center'>Contact Info</h1>
        </div>
        
        <div className='flex gap-3 hover:text-black transition-all duration-200'>
          <div className='mt-5'>
            <FaLocationDot size={25} />
          </div>
          <p className='text-sm text-center mt-4'>2nd Floor, Extra Mart, Sarojni Delhi 
          <br></br>
          Twin Tower,Sector 16B, Delhi, India</p>
        </div>
        <div className='text-sm text-center my-2 flex gap-3 hover:text-black transition-all duration-200'>
          <MdEmail size={25}/>
          <span> nextzensoftware123@gmail.com</span>
          
        </div>
      </div>
      <div>
        <div>
          <h1 className='font-bold text-xl mt-4 text-center'>Company</h1>
        </div>
        
        <div>
          <p className='text-sm text-center mt-4 hover:text-black transition-all duration-200'>About us</p>
          <p className='text-sm text-center hover:text-black transition-all duration-200'>Our Team</p>
          <p className='text-sm text-center hover:text-black transition-all duration-200'>Privacy Policy</p>
          <p className='text-sm text-center hover:text-black transition-all duration-200'>Terms & Conditions</p>
        </div>
      </div>
      <div>
        <div>
          <h1 className='font-bold text-xl mt-4 text-center'>Support</h1>
        </div>
        
        <div>
          <p className='text-sm text-center mt-4 hover:text-black transition-all duration-200'>Contact Us</p>
          <p className='text-sm text-center hover:text-black transition-all duration-200'>FAQs</p>
          <p className='text-sm text-center hover:text-black transition-all duration-200'>Help Center</p>
          <p className='text-sm text-center hover:text-black transition-all duration-200'>Best Website</p>
        </div>
      </div>
      <div className='flex flex-col justify-center items-center mt-6'>
        <div className='mt-5 space-x-7 flex '>
          <FaFacebookSquare size={25} className='hover:text-black transition-all duration-200'/>
          <FaSquareXTwitter size={25} className='hover:text-black transition-all duration-200'/>
          <BsLinkedin size={25} className='hover:text-black transition-all duration-200'/>
          <FaGithubSquare size={25} className='hover:text-black transition-all duration-200'/>
          <FaInstagramSquare size={25} className='hover:text-black transition-all duration-200'/>
        </div>
        
        <div>
          <h5 className='text-center text-xs mt-4'>We don’t have any legal agreement with elegant themes. We are providing services to our clients as a web designer, Web developer, and SEO Expert!</h5>
        </div>
        <div className='mt-2'>
          <span className='text-center text-sm mt-6'>© 2024 NextZen. All rights reserved.</span>
        </div>
        

      </div>
      
      
    </div>
  )
}

export default Footer