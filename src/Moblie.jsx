import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./App.css";

const products = [
  {
    id: 1,
    name: "iPhone 14",
    price: 80000,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZXicEBUJd7cZW6vXuNit9R6JeK_G7O1aL1w&s",
    category: "mobile",
  },
  {
    id: 2,
    name: "MI",
    price: 10000,
    image:
      "https://images.financialexpressdigital.com/2024/12/REDMI-NOTE-14-PRO-PLUS_20241206141718.jpg?w=1200",
    category: "mobile",
  },
];

function Mobile() {
  const navigate = useNavigate();

  const [showToast, setShowToast] = useState(false);
  const [cart, setCart] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);

  const mobileProducts = products.filter(
    (product) => product.category === "mobile"
  );

  const handleAddToCart = (product) => {
    const isLoggedIn = localStorage.getItem("isLoggedIn");

    if (isLoggedIn !== "true") {
      navigate("/login");
    } else {
      setCart([...cart, product]);
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