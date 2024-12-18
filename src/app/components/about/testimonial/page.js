import Image from 'next/image'
import React from 'react'
import { FaRegStar, FaStar } from 'react-icons/fa'
import { MdOutlineKeyboardDoubleArrowDown, MdOutlineKeyboardDoubleArrowUp } from "react-icons/md";


const Testimonial = () => {
    return (
        <div className='lg:flex block'>
            <div className='lg:w-[50%] relative w-full'>
                <div className='bg-[url(/images/testimonialimage.jpg)] opacity-20 w-full h-full bg-center bg-origin-content bg-cover'>
                </div>
                <div className='lg:flex lg:justify-end p-10'>
                    <div className=' absolute lg:left-44 top-0 pt-20 '>
                        <div className=' flex items-center mt-2 gap-2 text-orange-500  font-bold text-xs'>
                            <div className='w-5 h-1 rounded-md bg-orange-500'></div>
                            <p className='my-2 '>TESTIMONIALS</p>
                        </div>
                        <p className='text-blue-900 font-bold text-2xl my-2'>Words From Customers</p>
                        <div className='flex gap-4'>
                            <div>
                                <Image className='w-10 h-10 rounded-full mb-4' src="/images/testimonial1.jpg" width={1000} height={1000} />
                                <Image className='w-10 h-10 rounded-full my-4' src="/images/testimonial2.png" width={1000} height={1000} />
                                <Image className='w-14 h-14 flex rounded-full' src="/images/testimonial3.png" width={1000} height={1000} />
                            </div>
                            <div>
                                <div>
                                    <p className='text-blue-900 font-bold'>Steve Aiden</p>
                                    <p className='text-sky-600 font-bold text-xs'>NewYork</p>
                                    <p className='lg:w-80 w-full text-xs text-gray-500 text-justify my-6 p-1'>Company Name helped me out when I was in a pinch. Flyon was very personable Inowledgeable and professional. He was able to solve the problem in an efficient</p>
                                </div>
                                <div className='flex items-center gap-1'>
                                    <FaStar className='text-orange-500' />
                                    <FaStar className='text-orange-500' />
                                    <FaStar className='text-orange-500' />
                                    <FaStar className='text-orange-500' />
                                    <FaRegStar className='text-orange-500' />
                                </div>
                                <div>
                                    <p className='text-gray-500 text-xs my-2'>Rated 4.5 Out of 140 Reviews</p>
                                </div>
                                <div className='flex items-center gap-2 my-14'>
                                    <MdOutlineKeyboardDoubleArrowUp className='bg-white text-gray-500 rounded-md w-6 h-10' />
                                    <MdOutlineKeyboardDoubleArrowDown className='bg-white text-gray-500 rounded-md w-6 h-10' />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='lg:w-[50%] w-full h-full relative bg-sky-100 lg:h-[550px] p-6 lg:pl-20'>
                <div className='hidden lg:block bg-sky-100 w-96 text-center rounded-tl-[50px] rounded-tr-[50px] -rotate-90 h-28 absolute top-48 -left-44'>
                    <p className='text-blue-900  font-bold pt-5 text-2xl'>Schedule an Appoinment</p>
                </div>
                <div className='block lg:hidden'>
                    <div className=' flex  items-center mt-2 gap-2 text-orange-500  font-bold text-xs'>
                        <div className='w-5 h-1 rounded-md bg-orange-500'></div>
                        <p className='my-2 '>Schedule an Appoinment</p>
                    </div>
                </div>
                <div className='flex flex-col lg:flex-row my-4 gap-6 lg:items-center '>
                    <div className='flex '>
                        <input className='outline-none p-3 w-full lg:w-60 rounded-md bg-white' type='text' placeholder='Name'></input>
                    </div>
                    <div>
                        <input className='outline-none p-3 w-full lg:w-60 rounded-md bg-white' type='text' placeholder='Email'></input>
                    </div>
                </div>
                <div className='flex flex-col lg:flex-row my-4 gap-6 lg:items-center '>
                    <div>
                        <input className='outline-none p-3 w-full lg:w-60 rounded-md bg-white' type='text' placeholder='Phone No'></input>
                    </div>
                    <select className='outline-none p-3 text-gray-400 w-full lg:w-60 rounded-md bg-white'>
                        <option selected disabled>Select Services</option>
                        <option value="PK">Pakistan</option>
                        <option value="IN">India</option>
                        <option value="US">America</option>
                        <option value="EN">England</option>
                        <option value="AS">Austrailia</option>
                    </select>
                </div>
                <div className='flex flex-col lg:flex-row my-4 gap-6 lg:items-center '>
                    <div>
                        <input className='outline-none p-3 w-full lg:w-60 rounded-md bg-white' type='text' placeholder='Zip Code'></input>
                    </div>
                    <select className='outline-none p-3 text-gray-400 w-full lg:w-60 rounded-md bg-white'>
                        <option selected disabled>Are you a new Customer</option>
                        <option value="YS">Yes</option>
                        <option value="NO">NO</option>
                    </select>
                </div>
                <div>
                    <textarea
                        className='outline-none p-3 w-full lg:w-[500px] rounded-md bg-white'
                        placeholder='Write Your Message.'
                        rows={6}
                    />
                </div>
                <div className='flex items-center justify-center gap-4 lg:w-[500px] w-full my-8'>
                    <div>
                        <button className='bg-orange-500 text-sm font-bold text-white w-32 p-3 hover:bg-orange-600 duration-500'>Send Message </button>
                    </div>
                    <div className='text-gray-500 text-xs'>
                        <p>Our Customer Support Team Will Contact you in 24 Hrs</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Testimonial