import React from 'react'
import Product from '../components/Product'
const Products = () => {
  return (
    <div className="container mx-auto pb-24">
    <h1 className='text-lg font-bold my-8'> Product</h1>
    <div className='grid grid-cols-3 my-8 gap-24'>
       <Product />
  
    </div>
 </div>
  )
}

export default Products
