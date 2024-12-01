import React from "react";

function Categories() {
  const categories = [
    { name: "Mens", image: "/Categories/Maskgroup8.png" },
    { name: "Womens", image: "/Categories/Maskgroup9.png" },
    { name: "Kids", image: "/Categories/Maskgroup10.png" },
    { name: "Cosmetics", image: "/Categories/Maskgroup11.png" },
    { name: "Accessories", image: "/Categories/Maskgroup12.png" },
    { name: "Home", image: "/Categories/Maskgroup13.png" },
    { name: "Foot wears", image: "/Categories/Maskgroup14.png" },
    { name: "Sports", image: "/Categories/Maskgroup15.png" },
  ];

  return (
    <div className="container mx-auto ">
      <h1 className="text-3xl font-bold py-5">Categories</h1>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-8 gap-6">
        {categories.map((category, index) => (
          <div key={index} className="flex flex-col items-center">
            <div className="bg-[#F1F5F9] p-3 rounded-full shadow-md">
              <img
                src={category.image}
                alt={category.name}
                className="w-20 h-20"
              />
            </div>
            <p className="mt-2 text-center text-sm font-medium">{category.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Categories;
