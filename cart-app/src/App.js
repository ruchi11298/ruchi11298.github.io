import React from "react";
import {BrowserRouter ,  Route, Routes } from 'react-router-dom';
import Home from './Pages/Home'
// import About from './Pages/About';
import Products from "./Pages/Products";
import Cart from "./Pages/Cart";
import Navigation from "./components/Navigation";

const App = () =>{
    return(
          <>
             <BrowserRouter>
               <Navigation />
                 <Routes>
                   <Route path='/' element={<Home />}/>
                   <Route path='/products' element={<Products />}/>
                   <Route path="/cart" element={<Cart />}/>
                   {/* <Route path="/about" element={<About/>}/>   */}
                 </Routes>
             </BrowserRouter>
          </>
    )
 
}
export default App

