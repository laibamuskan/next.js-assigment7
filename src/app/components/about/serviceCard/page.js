import React from 'react'
import { FaDharmachakra } from 'react-icons/fa'

const ServicesCard = () => {
    return (
        <div>
            <div className='my-20 p-4 bg-sky-100'>
                <div className='flex items-center gap-2 text-orange-500 justify-center font-bold text-xs pt-12'>
                    <div className='w-5 h-1 rounded-md bg-orange-500'></div>
                    <p>OUR SERVICES</p>
                    <div className='w-5 h-1 rounded-md bg-orange-500'></div>
                </div>
                <div className='font-bold text-blue-900 text-center md:text-3xl text-xl my-6'>
                    <p>What We Can Offer You</p>
                </div>
                <div className='font-bold flex justify-center text-center my-6'>
                    <p className='w-[600px] text-gray-500'>We provide Fast, Reliable Heating and Air Conditioning Services in NewYork City and it's Surrounding Areas.</p>
                </div>
                <div className='flex flex-wrap items-center justify-center gap-10'>
    <div className='bg-white border-t-4 rounded-t-md border-orange-500 hover:border-blue-900 duration-500 cursor-pointer w-60 p-7 rounded-b-md'>
        <div className='flex justify-center text-blue-900 mb-2'>
            <FaDharmachakra className='w-10 h-8' />
        </div>
        <p className='text-blue-900 font-bold text-xl'>HVAC Design and Installation</p>
        <p className='text-sm mt-4 text-gray-500'>
            Professional HVAC systems designed and installed for optimal performance and energy efficiency.
        </p>
    </div>
    <div className='bg-white border-t-4 rounded-t-md border-orange-500 hover:border-blue-900 duration-500 cursor-pointer w-60 p-7 rounded-b-md'>
        <div className='flex justify-center text-blue-900 mb-2'>
            <FaDharmachakra className='w-10 h-8' />
        </div>
        <p className='text-blue-900 font-bold text-xl'>Maintenance and Repair</p>
        <p className='text-sm mt-4 text-gray-500'>
            Reliable maintenance and repair services to keep your systems running smoothly year-round.
        </p>
    </div>
    <div className='bg-white border-t-4 rounded-t-md border-orange-500 hover:border-blue-900 duration-500 cursor-pointer w-60 p-7 rounded-b-md'>
        <div className='flex justify-center text-blue-900 mb-2'>
            <FaDharmachakra className='w-10 h-8' />
        </div>
        <p className='text-blue-900 font-bold text-xl'>Indoor Air Quality Testing</p>
        <p className='text-sm mt-4 text-gray-500'>
            Advanced testing to ensure clean, healthy indoor air for your home or office.
        </p>
    </div>
</div>

            </div>
        </div>
    )
}

export default ServicesCard