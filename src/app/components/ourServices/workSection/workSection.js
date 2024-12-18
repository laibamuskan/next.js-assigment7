import React from 'react'
import { FaClipboardList, FaCheckSquare, FaTools } from "react-icons/fa";

const WorkSection = () => {
  return (
    <section className="relative bg-cover bg-center bg-no-repeat mb-14" style={{ backgroundImage: "url('/images/image4.jpg')" }}>
            <div className="absolute inset-0 bg-gray-500 bg-opacity-60"></div>
            <div className="relative max-w-4xl mx-auto py-16 px-6 text-center text-white">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">How We Work</h2>
                <p className="text-lg md:text-xl mb-10">We ensure fast and reliable AC repairs to keep you cool and comfortable.</p>
                <div className="bg-white bg-opacity-10 lg:w-[550px] w-full mx-auto rounded-lg p-8 shadow-lg backdrop-blur-sm">
                    <div className="flex items-center justify-center">
                        <div className="space-y-10">
                            <div className="flex items-center space-x-4">
                                <FaClipboardList className="text-white text-2xl md:text-3xl" />
                                <p className="text-white text-lg md:text-xl font-medium">Request a free consultation</p>
                            </div>
                            <div className="flex items-center space-x-4">
                                <FaCheckSquare className="text-white text-2xl md:text-3xl" />
                                <p className="text-white text-lg md:text-xl font-medium">Get recommendations</p>
                            </div>
                            <div className="flex items-center space-x-4">
                                <FaTools className="text-white text-2xl md:text-3xl" />
                                <p className="text-white text-lg md:text-xl font-medium">We deliver and install</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
  )
}

export default WorkSection