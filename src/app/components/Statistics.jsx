import React from "react";

function Statistics() {
  return (
    <div className="container mx-auto py-5 px-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-4">
        <div className="flex flex-col w-full p-6 items-center bg-[#F1F5F9] rounded shadow-md">
          <h1 className="text-3xl font-bold">95%</h1>
          <p className="text-gray-700">Happy customers</p>
        </div>
        <div className="flex flex-col w-full p-6 items-center bg-[#F1F5F9] rounded shadow-md">
          <h1 className="text-3xl font-bold">1 Million +</h1>
          <p className="text-gray-700">Yearly sale</p>
        </div>
        <div className="flex flex-col w-full p-6 items-center bg-[#F1F5F9] rounded shadow-md">
          <h1 className="text-3xl font-bold">20k +</h1>
          <p className="text-gray-700">Customers Ratings</p>
        </div>
      </div>
    </div>
  );
}

export default Statistics;
