import React from "react";

function Banner() {
  return (
    <div className="w-full bg-[#F0FDFA]">
      <div className="relative lg:py-[66px] lg:px-[66px]">
        {/* Background Image */}
        <img
          src="/banner.png"
          alt="Banner Background"
          className="w-full h-auto"
        />

        {/* Content Overlay */}
        <div className="absolute inset-0 flex flex-col lg:flex-row justify-between items-center px-4 lg:px-20 py-6">
          {/* Text Content */}
          <div className="text-center lg:text-left lg:ml-[62px]  text-[#F8FAFC]">
            <h1 className="text-1xl lg:text-5xl   max-w-[320px] font-bold mb-1">
              Lorem ipsum dolor sit amet
            </h1>
            <p className="text-1xl lg:text-xl ">
              Discover amazing deals and offers now!
            </p>
            <div>
              <button className="btn mt-4 bg-[#F8FAFC]  text-[#14B8A6] font-bold py-2 px-8 lg:px-12 rounded w-full lg:w-auto">
                Buy Now
              </button>
            </div>
          </div>

          {/* Offer Image */}
          <div className="flex justify-end">
            <img
              src="/banner/offer.png"
              alt="Offer"
              className="w-32 hidden lg:block md:block lg:w-[300px] h-auto mt-6 lg:mt-0"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Banner;
