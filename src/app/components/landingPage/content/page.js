import Image from 'next/image'
import React from 'react'
import { FaArrowRight } from 'react-icons/fa';
import { FiCheckCircle } from "react-icons/fi";


const Content = () => {
  return (
    <div className='lg:flex lg:justify-center my-6 gap-10 p-10'>
      <div className='hidden lg:block w-[40%]'>
        <div className='flex justify-center gap-3'>
          <Image className='w-60 h-96 rounded-md mt-32' src="/images/image5.jpg" width={1000} height={1000} />
          <div>
            <Image className='w-60 h-96 rounded-md' src="/images/image6.jpg" width={1000} height={1000} />
            <div className='bg-[#F0F8FA] w-60 text-center py-8 px-12'>
              <p className='text-xs font-bold text-blue-900'>CERTIFIED SERVICE</p>
              <p className='font-bold text-xl'>Approved AC Repairing </p>
            </div>
          </div>
        </div>
      </div>
      <div className='lg:w-[50%] w-full text-center  lg:text-left'>
        <div className='flex items-center gap-2 text-orange-500  font-bold text-xs'>
          <div className='w-5 h-1 rounded-md bg-orange-500'></div>
          <p className='my-2'>WELCOME TO (company name)</p>
        </div>
        <div>
          <p className='font-bold text-blue-900 text-2xl lg:text-5xl my-4'>Air Conditioning Repair, Heating Service & Instalation</p>
          <p className='my-6 text-gray-500'>Bring to the tatiei in una strategies to ensure proactive domination. Al the end of the day going forward, a new normal that has ved from generation Kit on the narway heading towards trustioner generated corrent in real time will have multiple touchpoints for offshoring.</p>
          <p className='my-6 text-gray-500'>Capitalize on low hanging fruit la leyapokalue added activity to beta test. Override the digital with additional clickthroughs from DevOp</p>
          <div className='flex flex-wrap items-center gap-0 md:gap-10 lg:gap-20 my-6'>
            <div>
              <div className='flex items-center gap-2'>
                <FiCheckCircle className='text-orange-500' />
                <p className='text-blue-900 font-bold'>Highly Professional Staff</p>
              </div>
              <div className='flex items-center gap-2'>
                <FiCheckCircle className='text-orange-500' />
                <p className='text-blue-900 font-bold'>100% Satisfaction Quarantee</p>
              </div>
              <div className='flex items-center gap-2'>
                <FiCheckCircle className='text-orange-500' />
                <p className='text-blue-900 font-bold'>Quality Control System</p>
              </div>
            </div>
            <div>
              <div className='flex items-center gap-2'>
                <FiCheckCircle className='text-orange-500' />
                <p className='text-blue-900 font-bold'>Accourate Testing Process</p>
              </div>
              <div className='flex items-center gap-2'>
                <FiCheckCircle className='text-orange-500' />
                <p className='text-blue-900 font-bold'>Unrivalle Workmanship</p>
              </div>
              <div className='flex items-center gap-2'>
                <FiCheckCircle className='text-orange-500' />
                <p className='text-blue-900 font-bold'>Timely Delivery</p>
              </div>
            </div>
          </div>
        </div>
        <div className='my-10 flexy items-center'>
          <button className='bg-orange-500 text-white w-56 p-3 hover:bg-orange-600 duration-500 flex gap-2 items-center'>VIEW ALL SERVICES <FaArrowRight /></button>
        </div>
      </div>

    </div>
  )
}

export default Content