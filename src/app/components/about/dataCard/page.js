import React from 'react'

const DataCard = () => {
    return (
        <div className=' bg-gradient-to-r my-4 from-blue-900 via-blue-700 to-blue-600'>
                <div className='flex flex-wrap items-center justify-center gap-8 lg:gap-40 py-10'>
                    <div className='text-center'>
                        <p className='font-bold text-3xl text-orange-500 border-b-2 border-orange-500 pb-2'>2085</p>
                        <p className='my-2 text-white font-bold'>CUSTOMERS</p>
                        <p className='my-2 text-gray-400 text-xs'>100% satisfied with our work</p>
                    </div>
                    <div className='text-center'>
                        <p className='font-bold text-3xl text-orange-500 border-b-2 border-orange-500 pb-2'>100</p>
                        <p className='my-2 text-white font-bold'>PROFFESSIONAL</p>
                        <p className='my-2 text-gray-400 text-xs'>Engineers working in our company</p>
                    </div>
                    <div className='text-center'>
                        <p className='font-bold text-3xl text-orange-500 border-b-2 border-orange-500 pb-2'>8</p>
                        <p className='my-2 text-white font-bold'>BRANCHES</p>
                        <p className='my-2 text-gray-400 text-xs'>Operating in NY & it's Surrounding</p>
                    </div>
                </div>
            </div>
    )
}

export default DataCard