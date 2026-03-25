import React from "react";
import { useNavigate, Outlet } from "react-router-dom";

function Product() {
  const navigate = useNavigate();

  // ✅ Logout Function
  const handleLogout = () => {
    localStorage.setItem("isLoggedIn", "false"); // clear login
    navigate("/product"); // redirect to login page
  };

  return (
    <div>

      {/* 🔥 TOP SECTION */}
      <div style={{ padding: "40px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        
        <div>
          <h1>Product List</h1>
          <p>Check out our latest collection of products!</p>

          <button onClick={() => navigate("/product/ourproduct")}>
            Product List
          </button>
        </div>

        {/* ✅ Logout Button */}
        <button 
          onClick={handleLogout} 
          style={{
            height: "40px",
            backgroundColor: "blue",
            color: "white",
            border: "none",
            padding: "10px 15px",
            cursor: "pointer",
            borderRadius: "5px"
          }}
        >
          Logout
        </button>

      </div>

      {/* Nested route will render here */}
      <Outlet />

    </div>
  );
}

export default Product;