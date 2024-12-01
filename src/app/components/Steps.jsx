import React from 'react';

function Steps() {
  return (
    <div className='container mx-auto py-[40px]'>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6'>
        <div className='flex items-center justify-start'>
          <div>
            <img src='/steps/truck.png' alt='Truck' />
          </div>
          <div className='mx-2'>
            <h1 className='font-bold'>Free Shipping</h1>
            <p className='text-[#64748B]'>Above all orders over 200rs.</p>
          </div>
        </div>
        <div className='flex items-center justify-start'>
          <div>
            <img src='/steps/indian-rupee.png' alt='Money Guarantee' />
          </div>
          <div className='mx-2'>
            <h1 className='font-bold'>Money Guarantee</h1>
            <p className='text-[#64748B]'>45 Days for Exchange.</p>
          </div>
        </div>
        <div className='flex items-center justify-start'>
          <div>
            <img src='/steps/headphones.png' alt='Online Support' />
          </div>
          <div className='mx-2'>
            <h1 className='font-bold'>Online Support</h1>
            <p className='text-[#64748B]'>24/7 Customer Care.</p>
          </div>
        </div>
        <div className='flex items-center justify-start'>
          <div>
            <img src='/steps/credit-card.png' alt='Flexible Payment' />
          </div>
          <div className='mx-2'>
            <h1 className='font-bold'>Flexible Payment</h1>
            <p className='text-[#64748B]'>Pay with multiple Credit Cards.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Steps;
