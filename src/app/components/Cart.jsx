import React from "react";

function Cart() {
  return (
    <div className="container mx-auto bg-[#F8FAFC] py-6 px-4">
      {/* Table Header */}
      <div className="grid grid-cols-6 text-sm font-bold text-gray-700 border-b border-gray-300 pb-3 hidden md:grid">
        <div>PRODUCT DETAILS</div>
        <div>PRICE</div>
        <div>QUANTITY</div>
        <div>SHIPPING</div>
        <div>SUB TOTAL</div>
        <div>ACTIONS</div>
      </div>

      {/* Cart Item 1 */}
      <div className="grid grid-cols-1 md:grid-cols-6 text-sm text-gray-600 items-center py-4 border-b border-gray-300">
        {/* Product Details */}
        <div className="flex items-center space-x-4">
          <img className="w-20" src="/cart2.png" alt="Product" />
          <div>
            <p className="font-medium">Yellow Dress Print</p>
            <p>Color: Yellow</p>
            <p>Size: M</p>
          </div>
        </div>
        {/* Price */}
        <div className="mt-4 md:mt-0">1000</div>
        {/* Quantity */}
        <div className="flex items-center mt-4 md:mt-0">
          <button className="px-2 py-1 bg-gray-200 rounded hover:bg-gray-300">
            -
          </button>
          <span className="mx-2">1</span>
          <button className="px-2 py-1 bg-gray-200 rounded hover:bg-gray-300">
            +
          </button>
        </div>
        {/* Shipping */}
        <div className="mt-4 md:mt-0">FREE</div>
        {/* Sub Total */}
        <div className="mt-4 md:mt-0">RS: 12000</div>
        {/* Actions */}
        <div className="mt-4 md:mt-0">
          <button className="text-red-500 hover:underline">
            <img src="/trash-2.png" />
          </button>
        </div>
      </div>

      {/* Cart Item 2 */}
      <div className="grid grid-cols-1 md:grid-cols-6 text-sm text-gray-600 items-center py-4 border-b border-gray-300">
        {/* Product Details */}
        <div className="flex items-center space-x-4">
          <img className="w-20" src="/cart1.png" alt="Product" />
          <div>
            <p className="font-medium">Blue Flower Print Crop Top</p>
            <p>Color: Yellow</p>
            <p>Size: M</p>
          </div>
        </div>
        {/* Price */}
        <div className="mt-4 md:mt-0">1000</div>
        {/* Quantity */}
        <div className="flex items-center mt-4 md:mt-0">
          <button className="px-2 py-1 bg-gray-200 rounded hover:bg-gray-300">
            -
          </button>
          <span className="mx-2">1</span>
          <button className="px-2 py-1 bg-gray-200 rounded hover:bg-gray-300">
            +
          </button>
        </div>
        {/* Shipping */}
        <div className="mt-4 md:mt-0">FREE</div>
        {/* Sub Total */}
        <div className="mt-4 md:mt-0">RS: 12000</div>
        {/* Actions */}
        <div className="mt-4 md:mt-0">
          <button className="text-red-500 hover:underline">
            <img src="/trash-2.png" />
          </button>
        </div>
      </div>
      <div className="flex flex-col lg:flex-row justify-between gap-6 p-4">
        {/* Discount Codes Section */}
        <div className="flex-2 ">
          <p className="font-bold text-lg">Discount Codes</p>
          <p className="text-sm text-gray-600 mb-4">
            Enter your coupon code if you have one
          </p>
          <div className="relative mb-4 w-80">
            <input
              className="border rounded py-2 px-4 w-full pr-20"
              placeholder="Coupon Code"
            />
            <button className="absolute right-0 top-1/2 transform -translate-y-1/2
             bg-[#14B8A6] text-white font-bold py-2 px-3 rounded">
              Apply Coupon
            </button>
          </div>

          <div>
            <button className="btn border border-[#14B8A6] text-[#14B8A6] 
            font-bold py-2 px-8 lg:px-12 rounded w-full lg:w-auto">
              Continue Shopping
            </button>
          </div>
        </div>

        {/* Summary Section */}
        <div className="shadow-lg p-4 text-center rounded-lg w-full lg:w-1/3">
          <p className="text-gray-700 font-medium mb-2">
            <span className="font-bold">SUB TOTAL:</span> 3050
          </p>
          <p className="text-gray-700 font-medium mb-2">
            <span className="font-bold">SHIPPING:</span> 0
          </p>
          <hr className="my-2" />
          <p className="text-gray-700 font-medium mb-4">
            <span className="font-bold">TOTAL:</span> 3050/-
          </p>
          <hr className="my-2" />
          <button className="btn bg-[#14B8A6] text-white font-bold py-2 px-8 lg:px-12 rounded w-full lg:w-auto">
            Proceed to Checkout
          </button>
        </div>
      </div>
    </div>
  );
}

export default Cart;
