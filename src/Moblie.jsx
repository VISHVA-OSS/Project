import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./App.css";
import { useDispatch } from "react-redux";
import { addToCart } from "../src/slice/cartslice";

function Mobile() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  // ✅ State for API data
  const [products, setProducts] = useState([]);
  const [showToast, setShowToast] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  const API = "http://localhost:3000/products"; // 🔥 Your API

  // ✅ Fetch data from API
  useEffect(() => {
    fetch(API)
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
      })
      .catch((err) => console.log("Error:", err));
  }, []);

  // ✅ Filter mobiles
  const mobileProducts = products.filter(
    (product) => product.category === "mobile"
  );

  // ✅ Add to cart
  const handleAddToCart = (product) => {
    const isLoggedIn = localStorage.getItem("isLoggedIn");

    if (isLoggedIn !== "true") {
      navigate("/login");
    } else {
      dispatch(addToCart(product));

      setSelectedProduct(product);
      setShowToast(true);

      setTimeout(() => setShowToast(false), 2000);
    }
  };

  return (
    <div className="page-container">
      {/* 🔥 Top Button */}
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <button className="back-btn" onClick={() => navigate("/")}>
          ⬅ Return
        </button>
      </div>

      <h2>Mobile Products</h2>

      <div className="product-container">
        {mobileProducts.map((product) => (
          <div key={product.id} className="product-card">
            <img
              src={product.image}
              alt={product.name}
              onClick={() => navigate(`/listdetails/${product.id}`)}
            />

            <h3>{product.name}</h3>
            <p>₹{product.price}</p>

            <button
              className="btn btn-primary"
              onClick={() => handleAddToCart(product)}
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>

      {/* ✅ Toast */}
      {showToast && (
        <div className="toast show position-fixed bottom-0 end-0 m-3">
          <div className="toast-header">
            <strong className="me-auto">Cart</strong>
            <button
              type="button"
              className="btn-close"
              onClick={() => setShowToast(false)}
            ></button>
          </div>
          <div className="toast-body">
            {selectedProduct?.name} added to cart 🛒
          </div>
        </div>
      )}
    </div>
  );
}

export default Mobile;