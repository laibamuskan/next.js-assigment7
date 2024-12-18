import React from 'react'

const ServicesCard = () => {
  return (
    <div className='bg-slate-800'>
      <div className='flex items-center gap-2 text-orange-500 justify-center text-xs font-bold pt-12'>
        <div className='w-5 h-1 rounded-md bg-orange-500'></div>
        <p>OUR SERVICES</p>
        <div className='w-5 h-1 rounded-md bg-orange-500'></div>
      </div>
      <div className='text-white font-bold text-center md:text-3xl text-xl my-6'>
        <p>What Services We Offer</p>
      </div>
      <div className='flex flex-wrap items-center justify-center gap-8'>
        <div className=' bg-[url(/images/image1.jpg)] rounded-t-md w-72 h-72 bg-no-repeat bg-center  bg-cover relative'>
          <div className='bg-white text-center p-7 rounded-b-md mt-36 lg:mt-0 lg:absolute shadow-2xl -bottom-20'>
            <p className='text-blue-900 font-bold text-xl'>AC Maintenance</p>
            <p className='text-sm mt-4 text-gray-500'>Every Cleaner Guy is Trained and Reliable for Work.</p>
            <div className='flex justify-center'>
              <div className='w-6  mt-4 h-1 rounded-md bg-orange-500'></div>
            </div>
          </div>
        </div>
        <div className=' bg-[url(/images/image2.jpg)] rounded-t-md w-72 h-72 bg-no-repeat bg-center  bg-cover relative'>
          <div className='bg-white text-center p-7 rounded-b-md mt-36 lg:mt-0 lg:absolute shadow-2xl -bottom-20'>
            <p className='text-blue-900 font-bold text-xl'>Health Service</p>
            <p className='text-sm mt-4 text-gray-500'>Expertly trained professionals delivering dependable results.</p>
            <div className='flex justify-center'>
              <div className='w-6  mt-4 h-1 rounded-md bg-orange-500'></div>
            </div>
          </div>
        </div>
        <div className=' bg-[url(/images/image3.jpg)] rounded-t-md w-72 h-72 bg-no-repeat bg-center  bg-cover relative'>
          <div className='bg-white text-center p-7 rounded-b-md mt-36 lg:mt-0 lg:absolute shadow-2xl -bottom-20'>
            <p className='text-blue-900 font-bold text-xl'>Indoor Air Quality</p>
            <p className='text-sm mt-4 text-gray-500'>Skilled technicians you can trust for every task.</p>
            <div className='flex justify-center'>
              <div className='w-6  mt-4 h-1 rounded-md bg-orange-500'></div>
            </div>
          </div>
        </div>
        <div className=' bg-[url(/images/image4.jpg)] rounded-t-md w-72 h-72 bg-no-repeat bg-center  bg-cover relative'>
          <div className='bg-white text-center p-7 rounded-b-md mt-36 lg:mt-0 lg:absolute shadow-2xl -bottom-20'>
            <p className='text-blue-900 font-bold text-xl'>AC Instalation</p>
            <p className='text-sm mt-4 text-gray-500'>Dedicated to providing reliable and quality service."</p>
            <div className='flex justify-center'>
              <div className='w-6  mt-4 h-1 rounded-md bg-orange-500'></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ServicesCard