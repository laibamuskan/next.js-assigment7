import React from 'react'
import { FaDharmachakra } from 'react-icons/fa'

const InfoCard = () => {
  return (
    <div className='mt-28'>
      <div className='flex items-center gap-2 text-orange-500 justify-center font-bold text-xs pt-12'>
        <div className='w-5 h-1 rounded-md bg-orange-500'></div>
        <p>WELCOME TO (company name)</p>
        <div className='w-5 h-1 rounded-md bg-orange-500'></div>
      </div>
      <div className='font-bold text-blue-900 text-center md:text-3xl text-xl my-6'>
        <p>Air Conditioning Repair, Heating Service & Instalation</p>
      </div>
      <div className='font-bold flex justify-center text-center my-6'>
        <p className='w-[900px]'>Our team of registered nurses and skilled healthcare proffessional provides in-home nursing to help manage and coordinate recovery at home.</p>
      </div>
      <div className='flex flex-wrap items-center justify-center gap-6'>
        <div className='bg-[#F0F8FA] border-b-4 border-orange-500 hover:border-blue-900 duration-500 cursor-pointer w-60 text-center p-7 rounded-b-md'>
          <div className='flex justify-center text-blue-900 mb-2'>
            <FaDharmachakra className=' w-10 h-8' />
          </div>
          <p className='text-blue-900 font-bold text-xl'>AC Maintenance</p>
          <p className='text-sm mt-4 text-gray-500'>Every Cleaner Guy is Trained and Reliable for Work.Every Cleaner Guy is Trained and Reliable for Work.</p>
          <div className='text-xs font-bold mt-6 text-orange-500 hover:text-blue-900 duration-500'>
            <button>READ MORE</button>
          </div>
        </div>
        <div className='bg-[#F0F8FA] border-b-4 border-orange-500 hover:border-blue-900 duration-500 cursor-pointer w-60 text-center p-7 rounded-b-md'>
          <div className='flex justify-center text-blue-900 mb-2'>
            <FaDharmachakra className=' w-10 h-8' />
          </div>
          <p className='text-blue-900 font-bold text-xl'>AC Instalation</p>
          <p className='text-sm mt-4 text-gray-500'>Our team is the skilled and ensures top-notch results. Our team is skilled and the ensures top-notch results everytime.</p>
          <div className='text-xs font-bold mt-6 text-orange-500 hover:text-blue-900 duration-500'>
            <button>READ MORE</button>
          </div>
        </div>
        <div className='bg-[#F0F8FA] border-b-4 border-orange-500 hover:border-blue-900 duration-500 cursor-pointer w-60 text-center p-7 rounded-b-md'>
          <div className='flex justify-center text-blue-900 mb-2'>
            <FaDharmachakra className=' w-10 h-8' />
          </div>
          <p className='text-blue-900 font-bold text-xl'>Heating Service</p>
          <p className='text-sm mt-4 text-gray-500'>Reliable experts providing exceptional service always. Reliable experts providing the exceptional service always</p>
          <div className='text-xs font-bold mt-6 text-orange-500 hover:text-blue-900 duration-500'>
            <button>READ MORE</button>
          </div>
        </div>
        <div className='bg-[#F0F8FA] border-b-4 border-orange-500 hover:border-blue-900 duration-500 cursor-pointer w-60 text-center p-7 rounded-b-md'>
          <div className='flex justify-center text-blue-900 mb-2'>
            <FaDharmachakra className=' w-10 h-8' />
          </div>
          <p className='text-blue-900 font-bold text-xl'>Indoor Air Quality</p>
          <p className='text-sm mt-4 text-gray-500'>We prioritize quality and deliver trusted solutions. We prioritize quality and deliver the trusted solutions.</p>
          <div className='text-xs font-bold mt-6 text-orange-500 hover:text-blue-900 duration-500'>
            <button>READ MORE</button>
          </div>
        </div>
      </div>
      <div className='lg:flex justify-center gap-1 items-center my-12 p-2'>
        <p className='text-sm font-bold'>Check out all our Services for know our company ...</p>
        <button className='text-sm font-bold text-orange-500 hover:underline'>Discover more services</button>
      </div>
    </div>
  )
}

export default InfoCard