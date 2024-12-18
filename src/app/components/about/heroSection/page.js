import React from 'react'
import { FaArrowRight } from 'react-icons/fa'

const HeroSection = (props) => {
    return (
        <div>
            <div className={`${props.isAboutUs?"bg-[url(/images/services.png)]":"bg-[url(/images/aboutusimage.jpg)]"}  hidden lg:block relative w-full h-[500px] bg-center bg-cover`}>
                <div className='bg-gray-200 bg-opacity-35 text-center lg:w-[450px] w-full p-4 absolute top-32 left-96'>
                    <div>
                        <p className='text-3xl font-bold text-orange-500 my-4'>{props.heading}</p>
                        <p className='text-xl font-bold text-white my-4 border-b pb-4'>{props.subHeading}</p>
                        <p className='my-4 text-white text-xs'>{props.description}</p>
                        <div className='flex justify-center'>
                            <button className='bg-orange-500 text-xs font-bold text-white w-28 p-3 hover:bg-orange-600 duration-500 flex justify-center gap-2 items-center'>Read More <FaArrowRight /></button>
                        </div>
                    </div>
                </div>
            </div>
            <div className='text-center block lg:hidden'>
                <p className='text-sm font-bold text-orange-500 my-4'>Free Service Calls.</p>
                <p className='text-2xl font-bold text-blue-900 my-4 border-b pb-4'>Our Service is a Breath of Fresh Air</p>
                <p className='my-4 text-blue-900 text-xs'>Company Provides a wide variety of HVAC services to the homes and bussines since 1965.</p>
                <div className='flex justify-center'>
                    <button className='bg-orange-500 text-xs font-bold text-white w-28 p-3 hover:bg-orange-600 flex justify-center gap-2 items-center mb-6'>Read More <FaArrowRight /></button>
                </div>
            </div>
        </div>
    )
}

export default HeroSection