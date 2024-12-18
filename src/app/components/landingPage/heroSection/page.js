import Image from 'next/image'
import React from 'react'
import { FaArrowRight } from "react-icons/fa";


const HeroSection = () => {
    return (
        <div className='bg-sky-400'>
            <div className='flex justify-center gap-40 px-8 items-center'>
                <div className='w-[25%] hidden relative lg:block'>
                    <div className='w-96 h-96 rounded-full bg-sky-500 relative'>
                        <div className='w-80 h-80 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-full bg-sky-400'></div>
                        <div className='w-60 h-60 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-full bg-sky-300'></div>
                        <div className='w-40 h-40 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-full bg-sky-200'></div>
                    </div>
                    <Image className='absolute top-[226px] left-52 transform -translate-x-1/2 -translate-y-1/2' src="/images/herosectionimage.png" width={1000} height={1000} />
                </div>

                <div className='md:w-[45%] w-full'>
                    <div className='text-xs gap-1 my-2 text-blue-700  font-bold flex items-center'>
                        <button className='hover:text-blue-500'>AC INSPECTION</button>
                        <p>.</p>
                        <button className='hover:text-blue-500'>MAINTENANCE</button>
                        <p>.</p>
                        <button className='hover:text-blue-500'>INSTALATION</button>
                    </div>
                    <div>
                        <p className='md:text-6xl text-xl font-bold my-5'>Wide Range of AC Repair and Services</p>
                        <p className='lg:w-[500px] w-full text-xs md:text-sm'>Budget-friendly and prompt air conditioner & heating services by 30 days of service waranty.</p>
                    </div>
                    <div className='my-8 flex items-center'>
                        <button className='bg-orange-500 text-white w-40 p-3 hover:bg-orange-600 duration-500 flex gap-2 items-center'>Discover More <FaArrowRight /></button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HeroSection