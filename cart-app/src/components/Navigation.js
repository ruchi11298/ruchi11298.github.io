import React from 'react'
import { Link } from 'react-router-dom';

const Navigation = () => {
    const cartStyle = {
        background: 'pink',
        display:'flex',
        padding:'6px 12px',
        borderRadius:'50px'
    }
  return (
    <>
    <nav className='container-fluid mx-auto flex items-center justify-between  ml-7'>
         <Link to="/">
             <img style={{height:150}} src='/images/logo.png' alt='logo' />
         </Link>
         <ul className='flex items-center'>
             <li><Link to="/">Home</Link></li>
             <li className='ml-6'> <Link to="/products">Products</Link></li>
             <li className='ml-6'>
                 <Link to="/cart">
                 <div style={cartStyle}>
                     <span>10</span>
                     <img className='ml-2 ' src='/images/cart.png' alt="cart-icon"/>
                 </div>
                 </Link>
            </li>
         </ul>
    </nav>
    </>
  )
}

export default Navigation
