import React from "react";

function Cards() {
  return (
    <div className="max-w-sm mx-auto rounded overflow-hidden shadow-lg p-4 bg-white">
      <div className="flex items-center justify-between">
        {/* User Image */}
        <div className="w-16 h-16">
          <img
            className="rounded-full object-cover w-full h-full"
            src="/testmonial/user.png"
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
        <p className="font-bold text-lg text-gray-800">Floyd Miles</p>
        <p className="text-gray-600 text-sm mt-2 leading-relaxed">
          Ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis
          enim velit mollit. Exercitation veniam consequat sunt nostrud amet.
        </p>
      </div>
    </div>
  );
}

export default Cards;
