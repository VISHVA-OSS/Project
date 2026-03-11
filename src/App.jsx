import React from "react";
import { BrowserRouter, Router, Routes,Link } from "react-router-dom";
import About from "./About";
import  Home  from "./Home";
import { Route } from "react-router-dom";
import Product from "./Product";
import Form from "./Form";
import List from "./List";
import ListDetails from "./ListDetails";

function App() {
  return (
    <>
       <div>
            <nav className="navbar">
                <ul className="nav-links">
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/product">Product</Link></li>
                    <li><Link to="/form">Form</Link></li>
                </ul>
            </nav>
            </div>
      <Routes>
        < Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/product" element={<Product />} />
        <Route path="/list" element={<List />} />
        <Route path="/product/:id" element={<ListDetails />} />
        <Route path="/form" element={<Form />} />
      </Routes>
      </>
  );
}

export default App;

