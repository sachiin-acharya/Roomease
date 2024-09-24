import React from 'react';
import Button from '../Components/Button';
import image1 from '../assets/image1.png';
import { VscArrowRight } from "react-icons/vsc";
import Room from '../Components/Room';
import { FaLocationDot } from "react-icons/fa6";
import { IoIosCall } from "react-icons/io";
import { MdFacebook } from "react-icons/md";
import { FaInstagram } from "react-icons/fa";
import { IoLogoTiktok } from "react-icons/io5";
const Home = () => {
  return (
    <>
      <div className='flex-col'>

        {/*1st div */}
        <div className='flex'>
          <img src={image1} alt="Description of image" className="w-[700px] h-[600px] ml-40 mt-24" />
          <div className='flex flex-col ml-28 mt-80'>
            <span className='font-bold text-4xl'> Welcome to RoomEase</span>
            <span className='mt-9 ml-7 text-xl ' style={{ color: 'rgb(74, 74, 74)' }}>the ultimate platform for finding and <br /> renting rooms online</span>
            <Button text="Search" className="mt-10 ml-10 w-28 ">
              <VscArrowRight />
            </Button>
          </div>
        </div>

        {/* 2nd div */}
        <div>
          <div className='text-2xl font-serif mt-12 ml-40'>Available Rooms</div>
          
          <Room />
        </div>

        {/* 3rd div */}
        <div>
          {/* 31 div */}
          <div className='mt-40 text-center'>
            <span className='text-4xl font-bold'>
              <span style={{ color: '#101828' }}>Get</span>{' '}
              <span style={{ color: '#d95103' }}>In Touch</span>
            </span>
            <br />
            <span className='text-2xl mt-4 font-bold' style={{ color: '#0c6967' }}>
              Our Friendly team would love to hear from you
            </span>
          </div>

          {/* 32 div */}
          <div className='mt-12 mx-auto max-w-4xl p-10 shadow-lg rounded-lg'>
            <div className='flex'>
              {/* 321 div - Info box */}
              <div className='p-8 rounded-lg shadow-md w-1/2' style={{ backgroundColor: '#0c6967' }}>
             <h1 className='text-sm font-bold first-line:font-semibold   font-sans text-white flex'> <FaLocationDot className='mt-1' />Our Address</h1> <br />
             <h1 className='text-white '>New Baneshwor , Kathmandu , Bagmathi , Nepal </h1>
             <h1 className='text-sm font-bold first-line:font-semibold   mt-8 font-sans text-white flex'> <IoIosCall className='mt-1' /> Our Contacts</h1> <br />
             <div className='  text-white flex'>
               <span className='flex flex-col'>Mobile 
                <span>980-5689789</span>
                <span> 9841-275897</span>
               </span>
               <span className='ml-28 flex flex-col
               '> Landline
                <span>01-4783972</span>
               </span>
               
             </div>

             <div className='text-white mt-52' >
              <span className='ml-12'>Get in touch in  Social networks </span>
              <span className='flex justify-center '>
              <MdFacebook  className='mr-3'/>
              <FaInstagram  className='mr-3'/>
              <IoLogoTiktok />
              </span>
              
             </div>
             
             
 
         </div>


              {/* 322 div - Form */}
              <div className='w-1/2 ml-8'>
                <form className='space-y-4'>
                  {/* First Name and Last Name */}
                  <div className='flex space-x-4'>
                    <div className='w-1/2'>
                      <label className='block text-gray-700'>First Name</label>
                      <input
                        type='text'
                        className='w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500'
                        placeholder='First Name'
                      />
                    </div>
                    <div className='w-1/2'>
                      <label className='block text-gray-700'>Last Name</label>
                      <input
                        type='text'
                        className='w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500'
                        placeholder='Last Name'
                      />
                    </div>
                  </div>

                  {/* Email */}
                  <div>
                    <label className='block text-gray-700'>Email</label>
                    <input
                      type='email'
                      className='w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500'
                      placeholder='Enter your email'
                    />
                  </div>

                  {/* Dropdown - What can we do for you */}
                  <div>
                    <label className='block text-gray-700'>What can we do for you?</label>
                    <select
                      className='w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500'
                    >
                      <option value="">Select an option</option>
                      <option value="inquiry">General Inquiry</option>
                      <option value="support">Support</option>
                      <option value="feedback">Feedback</option>
                    </select>
                  </div>

                  {/* Phone Number */}
                  <div>
                    <label className='block text-gray-700'>Phone Number</label>
                    <input
                      type='tel'
                      className='w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500'
                      placeholder='Enter your phone number'
                    />
                  </div>

                  {/* Message */}
                  <div>
                    <label className='block text-gray-700'>Message</label>
                    <textarea
                      className='w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500'
                      placeholder='Your message'
                    ></textarea>
                  </div>

                  {/* Send Message Button */}
                  <div className='text-center'>
                    <Button text="Send Message" className="w-full">
                      Send Message
                    </Button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>

      
      </div>
    </>
  );
};

export default Home;
