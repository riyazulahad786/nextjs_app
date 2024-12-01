import React from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
function PopularProducts() {
  const products = [
    {
      id: 1,
      title: "Products Title",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia.",
      image: "/appealing.png",
      tags: ["#photography", "#travel", "#winter"],
    },
    {
      id: 2,
      title: "Beautiful Landscape",
      description:
        "Experience the serenity of nature with this breathtaking landscape view.",
      image: "/charming.png",
      tags: ["#nature", "#scenery", "#peace"],
    },
    {
      id: 3,
      title: "City Vibes",
      description:
        "Capture the bustling energy of city life with this vibrant photo.",
      image: "/products1.jpg",
      tags: ["#urban", "#citylife", "#night"],
    },
    {
      id: 4,
      title: "Mountain Retreat",
      description:
        "Reconnect with nature at this cozy retreat nestled in the mountains.",
      image: "/products2.jpg",
      tags: ["#adventure", "#relax", "#mountain"],
    },
  ];

  return (
    <div className="container-fluid mx-auto mt-4 bg-[#F8FAFC]">
      <div className="container mx-auto py-5">
        <div className="flex justify-between items-center">
          <div>
            <div className="font-bold sm:text-[16px] lg:text-3xl">Most Popular Products</div>
          </div>
          <div>
            <button className="btn bg-[#14B8A6] text-white text-1xl lg:text-2xl font-bold py-2 px-4 lg:px-12 rounded w-full lg:w-auto">
              View All
            </button>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-6">
          {products.map((product) => (
            <div
              key={product.id}
              className="max-w-sm rounded overflow-hidden shadow-lg bg-white"
            >
              <div className="relative w-full h-44 flex items-center justify-center overflow-hidden bg-gray-200">
                <img
                  className="w-full h-full object-cover"
                  src={product.image}
                  alt={product.title}
                />
                <div className="absolute top-2 right-2">
                  <div className=" p-2 rounded-full shadow">
                    <img src="/like.png" />
                  </div>
                </div>
                <div className="absolute bottom-1 left-2">
                  <div className=" p-1 rounded flex bg-white items-center justify-around ">
                    <span className="text-[12px] font-bold">4.2</span>{" "}
                    <span>
                      <img className="w-[15px]" src="/testmonial/Vector.png" />
                    </span>
                  </div>
                </div>
              </div>

              <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">{product.title}</div>
                <p className="text-gray-700 text-base">{product.description}</p>
                <div className="text-gray-700 mt-2 flex items-center">
                  <span className="font-bold"> Rs.434 </span>{" "}
                  <span className="line-through mx-2">Rs.825</span>
                  <span className="text-red-400 mx-2">(81% off)</span>
                </div>
                <div className="py-2 mt-5">
                  <button className="py-2 btn bg-[#14B8A6] text-white font-bold px-8 lg:px-12 rounded w-full lg:w-auto">
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default PopularProducts;
