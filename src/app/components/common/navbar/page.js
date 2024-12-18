"use client";
import React, { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaDribbble, FaFacebook, FaInstagram, FaTwitter, FaWhatsapp } from "react-icons/fa";
import { CiMenuFries } from "react-icons/ci";


const Navbar = (props) => {
  const [shownav, setshownav] = useState(false);
  const menuRef = useRef(null); // Reference for the menu
  const NavbarRef = useRef(null); // Reference for the Navbar

  // Function to toggle the shownav state
  const toggleNav = () => {
    setshownav(!shownav); // Toggle the value of shownav
  };

  // Function to close navbar when clicking outside of it
  const handleClickOutside = (event) => {
    if (
      menuRef.current &&
      !menuRef.current.contains(event.target) &&
      !NavbarRef.current.contains(event.target)
    ) {
      setshownav(false);
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <div ref={NavbarRef}>
      <div className={`text-white flex items-center justify-between px-10 ${props.isLandingPage ? "bg-sky-400" : "bg-gradient-to-br from-sky-400 via-sky-500 to-sky-700"} `}>
        <Link href="/">
        <Image className='w-24 my-2' src="/images/logo.png" width={1000} height={1000} />
        </Link>
        <div className='hidden md:flex gap-4 items-center'>
          <Link href="/" className='hover:underline hover:underline-offset-4 cursor-pointer hover:scale-110 transition ease-out hover:ease-in-out duration-300'>Home</Link>
          <Link href="/about-us" className='hover:underline hover:underline-offset-4 cursor-pointer hover:scale-110 transition ease-out hover:ease-in-out duration-300'>About Us</Link>
          <Link href="/our-services" className='hover:underline hover:underline-offset-4 cursor-pointer hover:scale-110 transition ease-out hover:ease-in-out duration-300'>Our Services</Link>
          {/* <Link href="/point-table" className='hover:underline hover:underline-offset-4 cursor-pointer hover:scale-110 transition ease-out hover:ease-in-out duration-300'>Projects</Link>
          <Link href="/teams" className='hover:underline hover:underline-offset-4 cursor-pointer hover:scale-110 transition ease-out hover:ease-in-out duration-300'>Pages</Link>
          <Link href="/contact" className='hover:underline hover:underline-offset-4 cursor-pointer hover:scale-110 transition ease-out hover:ease-in-out duration-300'>Blogs</Link> */}
          <Link href="/contact-us" className='hover:underline hover:underline-offset-4 cursor-pointer hover:scale-110 transition ease-out hover:ease-in-out duration-300'>Contact us</Link>
        </div>
        <div className='hidden md:flex gap-2 items-center'>
          <FaFacebook className='w-5 h-5 hover:text-blue-700 hover:scale-125 transition ease-out hover:ease-in-out duration-300' />
          <FaWhatsapp className='w-5 h-5 hover:text-green-400 hover:scale-125 transition ease-out hover:ease-in-out duration-300' />
          <FaTwitter className='w-5 h-5 hover:text-blue-500 hover:scale-125 transition ease-out hover:ease-in-out duration-300' />
          <FaInstagram className='w-5 h-5 hover:text-pink-800 hover:scale-125 transition ease-out hover:ease-in-out duration-300' />
        </div>
        <button className="md:hidden" onClick={toggleNav}>
          <CiMenuFries size={30} />
        </button>
      </div>

      {/* for small screens */}
      {shownav && <div className="fixed inset-0  bg-black  bg-opacity-80 z-40" onClick={toggleNav}></div>}
      <div
        ref={menuRef}
        className={`w-64 duration-300 lg:hidden ${shownav ? " left-0 duration-300" : "left-[-100%] duration-300"
          } bg-gradient-to-br from-sky-400 via-sky-500 to-sky-700 px-6 py-4 inset-0 z-50 fixed flex flex-col items-center`}
      >
        <div className="flex flex-col gap-5 mt-20 duration-300">
          <button onClick={toggleNav} className="cursor-pointer top-4 absolute right-6 text-xl text-white">
            X
          </button>
          <Link href="/" className='hover:underline hover:underline-offset-4 cursor-pointer hover:scale-110 transition ease-out hover:ease-in-out duration-300 text-white'>Home</Link>
          <Link href="/about-us" className='hover:underline hover:underline-offset-4 cursor-pointer hover:scale-110 transition ease-out hover:ease-in-out duration-300 text-white'>About Us</Link>
          <Link href="/our-services" className='hover:underline hover:underline-offset-4 cursor-pointer hover:scale-110 transition ease-out hover:ease-in-out duration-300 text-white'>Our Services</Link>
          {/* <Link href="/point-table" className='hover:underline hover:underline-offset-4 cursor-pointer hover:scale-110 transition ease-out hover:ease-in-out duration-300 text-white'>Projects</Link>
          <Link href="/teams" className='hover:underline hover:underline-offset-4 cursor-pointer hover:scale-110 transition ease-out hover:ease-in-out duration-300 text-white'>Pages</Link>
          <Link href="/contact" className='hover:underline hover:underline-offset-4 cursor-pointer hover:scale-110 transition ease-out hover:ease-in-out duration-300 text-white'>Blogs</Link> */}
          <Link href="/contact-us" className='hover:underline hover:underline-offset-4 cursor-pointer hover:scale-110 transition ease-out hover:ease-in-out duration-300 text-white'>Contact us</Link>
          <div className="flex gap-2 items-center">
            <FaFacebook className='w-5 h-5 text-white hover:text-blue-700 hover:scale-125 transition ease-out hover:ease-in-out duration-300' />
            <FaWhatsapp className='w-5 h-5 text-white hover:text-green-400 hover:scale-125 transition ease-out hover:ease-in-out duration-300' />
            <FaTwitter className='w-5 h-5 text-white hover:text-blue-500 hover:scale-125 transition ease-out hover:ease-in-out duration-300' />
            <FaInstagram className='w-5 h-5 text-white hover:text-pink-800 hover:scale-125 transition ease-out hover:ease-in-out duration-300' />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar