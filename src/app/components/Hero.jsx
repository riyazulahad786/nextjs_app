import React from "react";
import { FaLongArrowAltLeft } from "react-icons/fa";
import { FaLongArrowAltRight } from "react-icons/fa";

function Hero() {
  return (
    <div className="container-fluid">
      <div className="flex flex-col lg:flex-row items-center lg:justify-between text-center lg:text-left">
        {/* Text Section */}
        <div className="lg:pl-[6rem] max-w-[500px]">
          <h1 className="text-4xl font-bold w-[240px] mx-auto lg:mx-0">
            Lorem ipsum dolor site.
          </h1>
          <p className="mt-4 text-gray-600">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industrys standard dummy text
            ever since the 1500s, when an unknown.
          </p>
          <div className="flex flex-col lg:flex-row items-center gap-4 mt-6">
            <button className="btn bg-[#F8FAFC] border text-[#14B8A6] font-bold py-2 px-8 lg:px-12 rounded w-full lg:w-auto">
              Explore
            </button>
            <button className="btn bg-[#14B8A6] text-white font-bold py-2 px-8 lg:px-12 rounded w-full lg:w-auto">
              Buy Now
            </button>
          </div>
        </div>
        {/* Image Section */}
        <div className="mt-8 lg:mt-0 relative">
          <img
            src="/homepage.jpeg"
            alt="Hero Image"
            className="w-full max-w-[800px] mx-auto lg:mx-0"
          />
          <div className="flex gap-3 absolute right-0 bottom-4 mr-5">
                    <div className="rounded-full p-2 bg-[#CBD5E1]">
                    <FaLongArrowAltLeft/>
                    </div>
                    
                    <div className="bg-[#14B8A6] rounded-full p-2">
                    <FaLongArrowAltRight/>
                    </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
