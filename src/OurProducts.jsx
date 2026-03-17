import React from "react";
import { useNavigate, Outlet } from "react-router-dom";

function OurProducts() {

  const navigate = useNavigate();

  return (
    <div
      style={{
        marginTop: "50px",
        padding: "40px",
        background: "#f5f5f5"
      }}
    >

      <h2>Our Products</h2>

      <div style={{ display: "flex", gap: "20px" }}>

        <button onClick={() => navigate("/product/ourproduct/mobile")}>
          Mobiles
        </button>

        <button onClick={() => navigate("/product/ourproduct/laptop")}>
          Laptop
        </button>

        <button onClick={() => navigate("/product/ourproduct/allproducts")}>
          All Products
        </button>

      </div>

      {/* Child routes render here */}
      <div style={{ marginTop: "40px" }}>
        <Outlet />
      </div>

    </div>
  );
}

export default OurProducts;