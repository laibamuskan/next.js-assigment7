import React from "react";
import { IoCall } from "react-icons/io5";
import { FaEnvelope } from "react-icons/fa";

const ContactForm = () => {
  return (
    <div className=" w-full px-10">
      <p className="text-black text-3xl text-center my-4 font-bold">
     We're Here to Help
      
      </p>
      <p className="text-gray-400 text-sm text- mb-6">
     For any inquiries or specific issues, feel free to contact us via our form or on social media. Join our dynamic community of successfull Users!
      
      </p>
      <h2 className="font-light md:text-2xl text-xl text-black">
        Address
      </h2>
      <hr className="my-4" />
      <div className="flex items-center gap-1 my-4">
        <IoCall className="text-gray-400" />
        <p className="text-gray-400 text-sm font-light">+111 222 333</p>
      </div>
      <div className="flex items-center gap-1">
        <FaEnvelope className="text-gray-400" />
        <p className="text-gray-400 text-sm font-light">name@gmail.com</p>
      </div>
      <h2 className="font-light md:text-2xl text-xl mt-10">Contact us</h2>
      <hr className="my-4" />
      <section class="bg-white ">
        <div class="py-8 lg:py-6 px-4 mx-auto max-w-screen-md">
          <form action="#" class="space-y-8">
            <div className="md:flex items-center justify-between">
              <div>
                <input
                  type="text"
                  id="text"
                  class="shadow-sm bg-white border  text-gray-400 text-sm  focus:ring-primary-500 focus:border-primary-500 block w-full md:w-[250px] p-2.5 outline-none"
                  placeholder="Name"
                  required
                />
              </div>
              <div>
                <input
                  type="email"
                  id="email"
                  class="shadow-sm bg-white border  text-gray-400 text-sm  focus:ring-primary-500 focus:border-primary-500 block w-full md:w-[250px] p-2.5 outline-none my-8 md:my-0"
                  placeholder="Email:"
                  required
                />
              </div>
            </div>
            <div>
              <input
                type="text"
                id="subject"
                class="block p-3 w-full text-sm text-gray-400 bg-white border  shadow-sm focus:ring-primary-500 focus:border-primary-500 outline-none"
                placeholder="Subject:"
                required
              />
            </div>
            <div class="sm:col-span-2">
              <textarea
                id="message"
                rows="6"
                class="block p-2.5 w-full text-sm text-gray-400  bg-white shadow-sm border  focus:ring-primary-500 focus:border-primary-500 outline-none"
                placeholder="Message:"
              ></textarea>
            </div>
            <button
              type="submit"
              class="py-3 px-5 text-sm font-medium text-center bg-orange-500 text-white w-40 hover:bg-orange-600 duration-500 outline-none"
            >
             Send Message
            </button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default ContactForm;
