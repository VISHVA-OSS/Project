import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from "../src/slice/cartslice";
import "./App.css";

function Mobile() {
  const navigate = useNavigate();
  const dispatch = useDispatch(); // ✅ Redux

  // ✅ API state
  const [products, setProducts] = useState([]);
  const [showToast, setShowToast] = useState(false);

  const API = "http://localhost:3000/products";

  // ✅ Fetch products from API
  useEffect(() => {
    fetch(API)
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .catch((err) => console.log("Error:", err));
  }, []);

  // ✅ Filter products
  const mobileProducts = products.filter(
    (product) => product.category === "allproduct"
  );

  // ✅ Add to cart (Redux)
  const handleAddToCart = (product, e) => {
    e.stopPropagation();

    const isLoggedIn = localStorage.getItem("isLoggedIn");

    if (isLoggedIn !== "true") {
      navigate("/login");
    } else {
      dispatch(addToCart(product)); // 🔥 FIX

      setShowToast(true);
      setTimeout(() => setShowToast(false), 2000);
    }
  };

  return (
    <div className="page-container">
      <button className="back-btn" onClick={() => navigate("/")}>
        ⬅ Return
      </button>

      <h2>All Products</h2>

      <div className="product-container">
        {mobileProducts.map((product) => (
          <div
            key={product.id}
            className="product-card"
            onClick={() => navigate(`/listdetails/${product.id}`)}
          >
            <img src={product.image} alt={product.name} />

            <h3>{product.name}</h3>
            <p>₹{product.price}</p>

            <button
              className="btn btn-success"
              onClick={(e) => handleAddToCart(product, e)}
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
              className="btn-close"
              onClick={() => setShowToast(false)}
            ></button>
          </div>
          <div className="toast-body">
            ✅ Product added to cart
          </div>
        </div>
      )}
    </div>
  );
}

export default Mobile;