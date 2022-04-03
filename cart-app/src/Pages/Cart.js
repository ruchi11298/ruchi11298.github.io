import React from 'react'
import Products from './Products'

const Cart = () => {
  return (
    
     <div className="container mx-auto lg:w-1/2 w-full pb-24">
            <h1 className="my-12 font-bold">Cart items</h1>
            <ul>
               
                            <li className="mb-12">
                            <div className="flex items-center justify-between">
                                <div className="flex items-center">
                                    <img className="h-16" src="" alt="" />
                                    <span className="font-bold ml-4 w-48"></span>
                                </div>
                                <div>
                                   <button onClick={""} className="bg-blue-500 px-4 py-2 rounded-full leading-none">-</button>
                                   <b className="px-4"></b>
                                   <button onClick={""} className="bg-blue-500 px-4 py-2 rounded-full leading-none">+</button>
                                </div>
                                <span>₹</span>
                                <button className="bg-pink-500 px-4 py-2 rounded-full leading-none text-white">Delete</button>
                            </div>
                        </li>
            </ul>
            <hr className="my-6"/>
            <div className="text-right">
                <b>Grand Total:</b>
        
            </div>
            <div className="text-right mt-6">
                <button onClick={""} className="bg-blue-500 px-4 py-2 rounded-full leading-none">Order Now</button>
            </div>
        </div>
    
  )
}

export default Cart
