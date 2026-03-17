import React from "react";
import { useNavigate, Outlet } from "react-router-dom";

function Product() {

  const navigate = useNavigate();

  return (
    <div>

      {/* TOP SECTION */}
      <div style={{ padding: "40px" }}>
        <h1>Product List</h1>
        <p>Check out our latest collection of products!</p>

        {/* Navigate to nested route */}
        <button onClick={() => navigate("/product/ourproduct")}>
          Product List
        </button>
      </div>

      {/* Nested route will render here */}
      <Outlet />

    </div>
  );
}

export default Product;