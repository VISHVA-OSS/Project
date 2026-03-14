import React from "react";
import { useNavigate } from "react-router-dom";

const products = [
  { id: 1, name: "iPhone 14", price: 80000, image: "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcRyBviluQGYeSx-EnC9mJG7Gp0eyhjtZhhRDAyQV6k-0JTyVj-ErRTUbpzzmmkbBNLA2WdNg9AdjjxxEUTkaVU0L_IiB8Uh", category: "mobile" },
  { id: 2, name: "Samsung TV", price: 55000, image: "https://cdn.mos.cms.futurecdn.net/FnHWbSEffhzsKKsZeCsjBb-2000-80.jpg", category: "tv" },
  { id: 3, name: "Nike Shoes", price: 7000, image: "", category: "shoes" },
  { id: 4, name: "Dell Laptop", price: 60000, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwvCeu4W6YdbkqM9a0vWgEtlCesbqgz0UUbA&s", category: "laptop" },
  { id: 5, name: "Sony Headphones", price: 15000, image: "", category: "audio" }
];

function Mobile() {

  const navigate = useNavigate();

  const mobileProducts = products.filter(
    (product) => product.category === "laptop"
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
            cursor: "pointer"
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