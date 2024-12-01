import React from 'react'

function Brand() {
  return (
   
    <div className="container px-4 mx-auto p-5 bg-whitesmoke py-16">
    <h1 className='text-3xl font-bold lg:px-[95px]'>Popular Brands</h1>
    <div className="overflow-hidden">
      <div className="flex animate-scroll gap-12">
        <div className="flex-shrink-0">
        <img src="/brand/Maskgroup1.png" alt="Brand 1" className="w-36 h-36 object-contain mr-4" />
        </div>
        <div className="flex-shrink-0">
        <img src="/brand/Maskgroup2.png" alt="Brand 1" className="w-36 h-36 object-contain mr-4" />
        </div>
        <div className="flex-shrink-0">
        <img src="/brand/Maskgroup3.png" alt="Brand 1" className="w-36 h-36 object-contain mr-4" />
        </div>
        <div className="flex-shrink-0">
        <img src="/brand/Maskgroup2.png" alt="Brand 1" className="w-36 h-36 object-contain mr-4" />
        </div>
        <div className="flex-shrink-0">
        <img src="/brand/Maskgroup5.png" alt="Brand 1" className="w-36 h-36 object-contain mr-4" />
        </div>
        <div className="flex-shrink-0">
        <img src="/brand/Maskgroup1.png" alt="Brand 1" className="w-36 h-36 object-contain mr-4" />
        </div>
        {/* Repeat the images for continuous effect */}
        <div className="flex-shrink-0">
        <img src="/brand/Maskgroup6.png" alt="Brand 1" className="w-36 h-36 object-contain mr-4" />
        </div>
        <div className="flex-shrink-0">
        <img src="/brand/Maskgroup7.png" alt="Brand 1" className="w-36 h-36 object-contain mr-4" />
        </div>
        <div className="flex-shrink-0">
        <img src="/brand/Maskgroup1.png" alt="Brand 1" className="w-36 h-36 object-contain mr-4" />
        </div>
        <div className="flex-shrink-0">
        <img src="/brand/Maskgroup2.png" alt="Brand 1" className="w-36 h-36 object-contain mr-4" />
        </div>
        <div className="flex-shrink-0">
        <img src="/brand/Maskgroup1.png" alt="Brand 1" className="w-36 h-36 object-contain mr-4" />
        </div>
        <div className="flex-shrink-0">
        <img src="/brand/Maskgroup3.png" alt="Brand 1" className="w-36 h-36 object-contain mr-4" />
        </div>
      </div>
    </div>
  </div>
  )
}

export default Brand