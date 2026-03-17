import React from "react";
import { useNavigate } from "react-router-dom";
import "./App.css"

const products = [
  { id: 1, name: "iPhone 14", price: 80000, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZXicEBUJd7cZW6vXuNit9R6JeK_G7O1aL1w&s", category: "mobile" },
  { id: 2, name: "MI", price: 10000,image: "https://images.financialexpressdigital.com/2024/12/REDMI-NOTE-14-PRO-PLUS_20241206141718.jpg?w=1200", category:"mobile"}

];

function Mobile() {

  const navigate = useNavigate();

  const mobileProducts = products.filter(
    (product) => product.category === "mobile"
  );

  return (
    <div className="page-container" >

      <button className="back-btn" onClick={() => navigate("/")}>
        ⬅ Return
      </button>

      <h2>Mobile Products</h2>
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

        </div>
      ))}
      </div>

    </div>
  );
}

export default Mobile;