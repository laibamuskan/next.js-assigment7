import Image from 'next/image'
import React from 'react'
import { FaArrowRight } from 'react-icons/fa'

const FeaturedWorkCard = () => {
    return (
        <div className=' flex justify-center'>
            <div className='w-[75%] p-3'>
                <div className='flex items-center mt-2 gap-2 text-orange-500  font-bold text-xs'>
                    <div className='w-5 h-1 rounded-md bg-orange-500'></div>
                    <p className='my-2 '>WELCOME TO (company name)</p>
                </div>
                <div className='flex flex-wrap gap-2 items-center justify-between'>
                    <div>
                        <p className='text-blue-900 font-bold text-2xl'>Our Featured Works</p>
                    </div>
                    <div>
                        <p className='text-sm text-gray-500'>We have done more than 700 projects in last 3 months with 100% satisfaction</p>
                    </div>
                    <div> <button className='bg-orange-500 text-xs font-bold text-white w-28 p-3 hover:bg-orange-600 duration-500 flex justify-center gap-2 items-center'>View All <FaArrowRight /></button></div>
                </div>
                <div className='my-4 flex flex-wrap gap-6 items-center justify-center'>
                    <Image className='w-72 h-48 rounded-md ease-in-out transform hover:scale-105 duration-500' src="/images/image1.jpg" width={1000} height={1000}/>
                    <Image className='w-72 h-48 rounded-md ease-in-out transform hover:scale-105 duration-500' src="/images/image3.jpg" width={1000} height={1000}/>
                    <Image className='w-72 h-48 rounded-md ease-in-out transform hover:scale-105 duration-500' src="/images/image4.jpg" width={1000} height={1000}/>
                    <Image className='w-72 h-48 rounded-md ease-in-out transform hover:scale-105 duration-500' src="/images/aboutusimage.jpg" width={1000} height={1000}/>
                    <Image className='w-72 h-48 rounded-md ease-in-out transform hover:scale-105 duration-500' src="/images/image4.jpg" width={1000} height={1000}/>
                    <Image className='w-72 h-48 rounded-md ease-in-out transform hover:scale-105 duration-500' src="/images/image2.jpg" width={1000} height={1000}/>
                </div>
            </div>
        </div>
    )
}

export default FeaturedWorkCard