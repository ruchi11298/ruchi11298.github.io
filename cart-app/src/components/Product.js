import React from 'react'

const Product = () => {
  return (
<>
<div>
  {/* plain paratha */}
    <img src='/images/plain_Paratha.jpg' alt='paratha'/>
    <div className='text-center'>
    <h2 className='text-lg font-bold py-2'>Plain Paratha with yogurt</h2>
    <span className='bg-gray-200 py-1 rounded-full text-sm mx-2 px-4'>Extra Sauce</span>
    <span className='bg-gray-200 py-1 rounded-full text-sm px-4'>Yogurt</span>
    </div>
    <div className='flex justify-between items-center mt-4'>
        <span>₹ 40</span>
        <button className='bg-pink-500 py-1 px-4 rounded-full font-bold'>ADD</button>
    </div>
   </div>
{/* Aalu Paratha */}
   <div>
    <img src='/images/Aalu-Paratha.jpg' alt='paratha'/>
    <div className='text-center'>
    <h2 className='text-lg font-bold py-2'>Aalu Paratha</h2>
    <span className='bg-gray-200 py-1 rounded-full text-sm mx-2 px-4'>Extra Sauce</span>
    <span className='bg-gray-200 py-1 rounded-full text-sm px-4'>Yogurt</span>
    </div>
    <div className='flex justify-between items-center mt-4'>
        <span>₹ 40</span>
        <button className='bg-pink-500 py-1 px-4 rounded-full font-bold'>ADD</button>
    </div>
   </div>
 {/* veg paratha */}
   <div>
    <img src='/images/veg-paratha.jpg' alt='paratha'/>
    <div className='text-center'>
    <h2 className='text-lg font-bold py-2'>Veg Paratha</h2>
    <span className='bg-gray-200 py-1 rounded-full text-sm mx-2 px-4'>Extra Sauce</span>
    <span className='bg-gray-200 py-1 rounded-full text-sm px-4'>Yogurt</span>
    </div>
    <div className='flex justify-between items-center mt-4'>
        <span>₹ 50</span>
        <button className='bg-pink-500 py-1 px-4 rounded-full font-bold'>ADD</button>
    </div>
   </div>
{/* double cheese paratha */}
   <div>
    <img src='/images/double-cheese-paratha.jpg' alt='paratha'/>
    <div className='text-center'>
    <h2 className='text-lg font-bold py-2'>Double Cheese Paratha</h2>
    <span className='bg-gray-200 py-1 rounded-full text-sm mx-2 px-4'>Extra Sauce</span>
    <span className='bg-gray-200 py-1 rounded-full text-sm px-4'>Yogurt</span>
    </div>
    <div className='flex justify-between items-center mt-4'>
        <span>₹ 70</span>
        <button className='bg-pink-500 py-1 px-4 rounded-full font-bold'>ADD</button>
    </div>
   </div>
 {/* corn cheese paratha */}
   <div>
    <img src='/images/Corn-Paratha.jpg' alt='paratha'/>
    <div className='text-center'>
    <h2 className='text-lg font-bold py-2'>Corn Cheese Paratha</h2>
    <span className='bg-gray-200 py-1 rounded-full text-sm mx-2 px-4'>Extra Sauce</span>
    <span className='bg-gray-200 py-1 rounded-full text-sm px-4'>Yogurt</span>
    </div>
    <div className='flex justify-between items-center mt-4'>
        <span>₹ 80</span>
        <button className='bg-pink-500 py-1 px-4 rounded-full font-bold'>ADD</button>
    </div>
   </div>

   <div>
    <img src='/images/logo-paratha.png' alt='paratha'/>
    <div className='text-center'>
    <h2 className='text-lg font-bold py-2'>Plain Paratha</h2>
    <span className='bg-gray-200 py-1 rounded-full text-sm mx-2 px-4'>Extra Sauce</span>
    <span className='bg-gray-200 py-1 rounded-full text-sm px-4'>Yogurt</span>
    </div>
    <div className='flex justify-between items-center mt-4'>
        <span>₹ 40</span>
        <button className='bg-pink-500 py-1 px-4 rounded-full font-bold'>ADD</button>
    </div>
   </div>




</>
  )
}

export default Product
