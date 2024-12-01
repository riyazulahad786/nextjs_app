import React, { useEffect, useState } from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

function Products() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true); // Loading state

  // Fetch products data from API
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch("https://fakestoreapi.com/products");
        const data = await response.json();
        setProducts(data);
        setLoading(false); // Stop loading when data is fetched
      } catch (error) {
        console.error("Error fetching products:", error);
        setLoading(false); // Stop loading even on error
      }
    };

    fetchProducts();
  }, []);

  return (
    <div className="container-fluid mx-auto bg-[#F8FAFC]">
      <div className="container mx-auto py-5">
        <div className="flex justify-between items-center">
          <div>
            <div className="font-bold sm:text-[16px] lg:text-3xl">Feature Products</div>
          </div>
          <div>
            <button className="btn bg-[#14B8A6] text-white font-bold lg:text-2xl text-1xl py-2 px-4 lg:px-12 rounded w-full lg:w-auto">
              View All
            </button>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-6">
          {loading
            ? Array(8) // Placeholder for 8 skeleton cards
                .fill(null)
                .map((_, index) => (
                  <div key={index} className="max-w-sm rounded overflow-hidden shadow-lg bg-white flex flex-col">
                    <div className="relative w-full h-44 flex items-center justify-center overflow-hidden bg-gray-200">
                      <Skeleton width="100%" height="100%" />
                    </div>
                    <div className="px-2 text-center py-4 flex-grow">
                      <Skeleton height={24} width="80%" />
                      <Skeleton height={18} width="90%" className="my-2" />
                      <Skeleton height={24} width="60%" />
                      <Skeleton height={40} width="100%" className="mt-5" />
                    </div>
                  </div>
                ))
            : products.map((product) => (
                <div
                  key={product.id}
                  className="max-w-sm rounded overflow-hidden shadow-lg bg-white flex flex-col"
                >
                  <div className="relative w-full h-44 flex items-center justify-center overflow-hidden bg-gray-200">
                    <img
                      className="w-full h-full object-cover"
                      src={product.image}
                      alt={product.title}
                    />
                    <div className="absolute top-2 right-2">
                      <div className="p-2 rounded-full shadow">
                        <img src="/like.png" alt="Like" />
                      </div>
                    </div>
                    <div className="absolute bottom-1 left-2">
                      <div className="p-1 rounded flex bg-white items-center justify-around">
                        <span className="text-[12px] font-bold">
                          {product.rating?.rate || "N/A"}
                        </span>{" "}
                        <span>
                          <img
                            className="w-[15px]"
                            src="/testmonial/Vector.png"
                            alt="Rating"
                          />
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="px-2 text-center py-4 flex-grow">
                    <div className="font-bold text-xl mb-2">
                      {product.title.length > 20
                        ? product.title.slice(0, 10) + "..."
                        : product.title}
                    </div>
                    <p className="text-gray-700 text-base">
                      {product.description.slice(0, 20)}...
                    </p>
                    <div className="text-gray-700 mt-2 flex items-center justify-center">
                      <span className="font-bold">Rs. {product.price}</span>{" "}
                      <span className="line-through mx-2">Rs. 825</span>
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

export default Products;
