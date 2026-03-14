import React, { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

function Product() {
  const navigate = useNavigate();
  const productRef = useRef(null);

  const [showProducts, setShowProducts] = useState(false);

  const scrollToProducts = () => {
    setShowProducts(true);

    setTimeout(() => {
      productRef.current?.scrollIntoView({ behavior: "smooth" });
    }, 100);
  };

  return (
    <div>
      {/* Top Section */}
      <div style={{ padding: "40px" }}>
        <h1>Product List</h1>
        <p>Check out our latest collection of products!</p>

        <button  onClick={scrollToProducts}>Product List</button>
      </div>

      {/* Product Section */}
      {showProducts && (
        <div
          ref={productRef}
          style={{
            marginTop: "50px",
            padding: "40px",
            background: "#f5f5f5",
            position: "sticky",
            top: "0"
          }}
        >
          <h2>Our Products</h2>

          <div style={{ display: "flex", gap: "20px" }}>
            <button onClick={() => navigate("/mobiles")}>Mobiles</button>
            <button onClick={() => navigate("/laptops")}>Laptop</button>
            <button onClick={() => navigate("/allproducts")}>All Products</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Product;