import React from "react";
import { useNavigate } from "react-router-dom";

const products = [
  { id: 1, name: "iPhone 14", price: 80000, image: "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcRyBviluQGYeSx-EnC9mJG7Gp0eyhjtZhhRDAyQV6k-0JTyVj-ErRTUbpzzmmkbBNLA2WdNg9AdjjxxEUTkaVU0L_IiB8Uh", category: "mobile" },
  { id: 2, name: "MI", price: 10000,image: "data:image/jpeg;base64,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", category:"mobile"}

];

function Mobile() {

  const navigate = useNavigate();

  const mobileProducts = products.filter(
    (product) => product.category === "mobile"
  );

  return (
    <div style={{ padding: "40px" }}>

      <button onClick={() => navigate("/product")}>
        ⬅ Back
      </button>

      <h2>Mobile Products</h2>

      {mobileProducts.map((product) => (
        <div
          key={product.id}
          style={{
            border: "1px solid #ddd",
            padding: "20px",
            margin: "20px 0",
            cursor: "pointer",
            width:"200px",
          }}
          onClick={() => navigate(`/listdetails/${product.id}`)}
        >
          <img
            src={product.image}
            alt={product.name}
            style={{ width: "150px" }}
          />

          <h3>{product.name}</h3>
          <p>₹{product.price}</p>

        </div>
      ))}

    </div>
  );
}

export default Mobile;