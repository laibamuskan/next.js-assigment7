import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { FaArrowRight, FaMailBulk, } from 'react-icons/fa'

const Footer = () => {
  return (
    <div className='bg-gradient-to-br from-sky-400 via-sky-500 to-sky-700 text-white py-8 px-2'>
      <div className='flex flex-wrap items-center justify-between mt-5 mb-16'>
        <div>
          <Link href="/">
            <Image className='w-44 h-32 my-2' src="/images/logo.png" width={1000} height={1000} />
          </Link>
        </div>
        <div className='w-full md:w-[45%] my-2'>
          <p className='lg:text-4xl text-2xl font-bold'>Browse and book AC repair services effortlessly, from maintenance to installation.</p>
        </div>
      </div>
      <div className='flex flex-wrap lg:gap-[100px] gap-20'>
        <div>
          <p className='font-bold text-xl mb-6'>Newsletter Signup</p>
          <div className='flex text-white justify-between items-center border-b pb-2 lg:w-96 w-full'>
            <FaMailBulk className='text-white' />
            <input className='outline-none bg-transparent text-white lg:w-80 w-full' type='text' placeholder='Enter Your Email Adress'></input>
            <FaArrowRight />
          </div>
          <div className='flex gap-1 items-center my-6 text-white'>
            <input type='checkbox'></input>
            <p>I agree to the</p>
            <Link href="/" className='underline text-sm underline-offset-4 hover:text-blue-700 duration-500'>Privacy Policy</Link>
          </div>
        </div>
        <div>
          <p className='font-bold text-xl'>Socials</p>
          <p className='text-white my-6'>Facebook</p>
          <p className='text-white my-6'>Twitter</p>
          <p className='text-white my-6'>Dribble</p>
          <p className='text-white my-6'>Instagram</p>
        </div>
        <div>
          <p className='font-bold text-xl'>Menu</p>
          <Link className='text-white my-6 block hover:underline hover:underline-offset-4 cursor-pointer hover:scale-110 transition ease-out hover:ease-in-out duration-300' href="/about-us">About Us</Link>
          <Link className='text-white my-6 block hover:underline hover:underline-offset-4 cursor-pointer hover:scale-110 transition ease-out hover:ease-in-out duration-300' href="/our-services">Our Services</Link>
          <Link className='text-white my-6 block hover:underline hover:underline-offset-4 cursor-pointer hover:scale-110 transition ease-out hover:ease-in-out duration-300' href="/contact-us">Contact Us</Link>
        </div>
        <div>
          <p className='font-bold text-xl'>Say Hello</p>
          <p className='text-white my-6 hover:text-orange-500 duration-500 cursor-pointer'>name@gmail.com</p>
        </div>
      </div>
      <hr className='mt-10'></hr>
    </div>
  )
}

export default Footer 