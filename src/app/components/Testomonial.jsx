import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Testomonial() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3, // Default number of slides to show
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3, // 3 slides on tablets and larger screens
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2, // 2 slides on smaller screens
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1, // 1 slide on mobile devices
        },
      },
    ],
  };

  const data = [
    {
      name: `John Morgan`,
      img: `/testmonial/user.png`,
      review: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`,
    },
    {
      name: `Ellie Anderson`,
      img: `/testmonial/user.png`,
      review: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`,
    },
    {
      name: `Nia Adebayo`,
      img: `/testmonial/user.png`,
      review: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`,
    },
   
  ];

  return (
    <div className="container mx-auto mb-10">
    <h1 className="font-bold text-3xl">Customers Reviews</h1>
      <div className="mt-15">
        <Slider {...settings}>
          {data.map((d) => (
            <div key={d.name} className="bg-white h-[150px] text-black rounded-xl">
              <div className="max-w-sm mx-auto rounded overflow-hidden shadow-lg p-4 bg-white">
                <div className="flex items-center justify-between">
                  {/* User Image */}
                  <div className="w-16 h-16">
                    <img
                      className="rounded-full object-cover w-full h-full"
                      src={d.img}
                      alt="User"
                    />
                  </div>
                  {/* Stars */}
                  <div className="flex gap-2 justify-end">
                    <img className="w-6 h-6" src="/testmonial/Vector.png" alt="Star" />
                    <img className="w-6 h-6" src="/testmonial/Vector.png" alt="Star" />
                    <img className="w-6 h-6" src="/testmonial/Vector.png" alt="Star" />
                    <img className="w-6 h-6" src="/testmonial/Vector.png" alt="Star" />
                  </div>
                </div>
                {/* Text Content */}
                <div className="mt-4">
                  <p className="font-bold text-lg text-gray-800">{d.name}</p>
                  <p className="text-gray-600 text-sm mt-2 leading-relaxed">{d.review}</p>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}

export default Testomonial;
