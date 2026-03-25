import React from "react";
import { BrowserRouter, Router, Routes,Link } from "react-router-dom";
import About from "./About";
import  Home  from "./Home";
import { Route } from "react-router-dom";
import Product from "./Product";
import Login from "./Login";
import Loptop from "./Loptop";
import AllProducts from "./AllProduct";
import Mobile from "./Moblie";
import OurProducts from "./OurProducts";
import ListDetails from "./ListDetails"


function App() {
  return (
    <>
       <div>
            <nav className="navbar">
                <ul className="nav-links">
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/product">Product</Link></li>
                    
                </ul>
            </nav>
            </div>
      <Routes>
        < Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/product" element={<Product />}>
           <Route path="ourproduct" element={<OurProducts />}>

    <Route path="mobile" element={<Mobile />} />
    <Route path="laptop" element={<Loptop />} />
    <Route path="allproducts" element={<AllProducts />} />

  </Route>
        </Route>
         <Route path="/" element={<Mobile />} />
        <Route path="/listdetails/:id" element={<ListDetails />} />
        <Route path="/laptops" element={<Loptop />} />
        <Route path="/allproducts" element={<AllProducts />} />
        <Route path="/login" element={<Login />} />
        
        
      </Routes>
      </>
  );
}

export default App;

