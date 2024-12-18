import Image from 'next/image'
import React from 'react'
import { FaPlay, FaStar } from 'react-icons/fa'

const Content = () => {
    return (
        <div>
            <div className='lg:flex items-center lg:justify-center my-6 gap-10 p-10'>
                <div className='hidden lg:block w-[30%] relative'>
                    <Image className='w-60 h-80 rounded-md' src="/images/image5.jpg" width={1000} height={1000} />
                    <div className='bg-orange-500 rounded-lg py-5 px-4 w-52 h-32 text-white absolute -bottom-4 left-28'>
                        <p className='text-sm font-bold'>Leading HVAC service company in NY</p>
                        <div className='flex items-center my-2 gap-2'>
                            <FaPlay className='border bg-transparent rounded-full p-2 w-10 h-10'/>
                            <p className='text-xs'>Watch video & know how we work</p>
                        </div>
                    </div>
                </div>
                <div className='lg:w-[50%] w-full text-center  lg:text-left'>
                    <div className='flex items-center gap-2 text-orange-500  font-bold text-xs'>
                        <div className='w-5 h-1 rounded-md bg-orange-500'></div>
                        <p className='my-2'>WELCOME TO (company name)</p>
                    </div>
                    <div>
                        <p className='font-bold text-blue-900 text-2xl lg:text-3xl my-4'>Air Conditioning Repair, Heating Service & Instalation</p>
                        <p className='my-6 text-xs text-gray-500'>Capitalize on low hanging fruit la leyapokalue added activity to beta test. Override the digital with additional clickthroughs from DevOp</p>
                        <div className='flex flex-wrap items-center gap-0 md:gap-10 lg:gap-20 my-6'>
                            <div>
                                <div className='flex items-center gap-2'>
                                    <FaStar className='text-orange-500' />
                                    <p className='text-blue-900 font-bold'>Highly Professional Staff</p>
                                </div>
                                <div className='flex items-center gap-2'>
                                    <FaStar className='text-orange-500' />
                                    <p className='text-blue-900 font-bold'>100% Satisfaction Quarantee</p>
                                </div>
                            </div>
                            <div>
                                <div className='flex items-center gap-2'>
                                    <FaStar className='text-orange-500' />
                                    <p className='text-blue-900 font-bold'>Accourate Testing Process</p>
                                </div>
                                <div className='flex items-center gap-2'>
                                    <FaStar className='text-orange-500' />
                                    <p className='text-blue-900 font-bold'>Unrivalle Workmanship</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Content