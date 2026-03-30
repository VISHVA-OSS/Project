import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from "../src/slice/cartslice";

const products = [
  {
    id: 3,
    name: "Dell Laptop",
    price: 60000,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwvCeu4W6YdbkqM9a0vWgEtlCesbqgz0UUbA&s",
    category: "laptop",
  },
  {
    id: 4,
    name: "MI Laptop",
    price: 50000,
    image: "  data:image/jpeg;base64,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",
    category: "laptop",
  },
  {
    id: 5,
    name: "HP Laptop",
    price: 55000,
    image: "    data:image/jpeg;base64,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",
    category: "laptop",
  },
];

function Mobile() {
  const navigate = useNavigate();
  const dispatch = useDispatch(); // ✅ Redux

  const [showToast, setShowToast] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  const mobileProducts = products.filter(
    (product) => product.category === "laptop"
  );

  // ✅ Redux Add to Cart
  const handleAddToCart = (product) => {
    const isLoggedIn = localStorage.getItem("isLoggedIn");

    if (isLoggedIn !== "true") {
      navigate("/login", { state: { from: "/laptop" } });
    } else {
      dispatch(addToCart(product)); // 🔥 Redux

      setSelectedProduct(product);
      setShowToast(true);

      setTimeout(() => setShowToast(false), 2000);
    }
  };

  return (
    <div className="page-container">
      <button className="back-btn" onClick={() => navigate("/")}>
        ⬅ Return
      </button>

      <h2>Laptop Products</h2>

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