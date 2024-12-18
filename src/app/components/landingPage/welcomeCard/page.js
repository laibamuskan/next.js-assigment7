import Image from 'next/image'
import React from 'react'
import { FaDharmachakra } from 'react-icons/fa'

const WelcomeCard = () => {
  return (
    <div className='bg-[#F0F8FA] lg:flex lg:justify-center p-10'>
      <div className='hidden lg:block w-[30%] relative'>
        <Image className='w-60 h-96 rounded-md' src="/images/image5.jpg" width={1000} height={1000} />
        <div className='bg-orange-500 rounded-lg p-5 w-28 h-32 text-white absolute bottom-0 left-48'>
          <p className='font-bold text-sxl text-center'>30</p>
          <p className='text-xs font-bold text-center'>Years of experience in this field.</p>
        </div>
      </div>
      <div className='lg:w-[50%] w-full text-center  lg:text-justify'>
        <div className='flex items-center gap-2 text-orange-500  font-bold text-xs'>
          <div className='w-5 h-1 rounded-md bg-orange-500'></div>
          <p>KNOW ABOUT US</p>
        </div>
        <div>
          <p className='font-bold text-blue-900 text-3xl lg:text-4xl my-4'>Welcome to Airconditioner Care to make your life better</p>
          <p className='text-blue-900 font-bold my-4'>Everything we do at Home Instead CareGiver is driven by our universal mission: To enhance the lives of aging adults and their families.</p>
          <p className='my-4 text-gray-500'>When our founders Paul and Lori Hogan began providing care for Paul's grandmother to help her remain at home, they envisioned a future where all people could age with greater hope and success. We strive to make that vision a reality with every life we are privileged to teuch.</p>
        </div>
        <div className='lg:flex gap-6 items-center'>
          <div className='w-72 my-4 flex text-left items-center'>
            <FaDharmachakra className='text-blue-900 w-20 h-10' />
            <div>
              <p className='text-blue-900 font-bold'>Proffessional Service</p>
              <p>When our founders Paul and Lori Hogan began.</p>
            </div>
          </div>
          <div className='w-72 my-4 flex text-left items-center'>
            <FaDharmachakra className='text-blue-900 w-20 h-10' />
            <div>
              <p className='text-blue-900 font-bold'>Proffessional Service</p>
              <p>When our founders Paul and Lori Hogan began.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default WelcomeCard