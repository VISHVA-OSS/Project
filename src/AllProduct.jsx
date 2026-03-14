import React from "react";
import { useNavigate } from "react-router-dom";
import "./Home.css"

const products = [
  { id: 1, name: "iPhone 14", price: 80000, image: "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcRyBviluQGYeSx-EnC9mJG7Gp0eyhjtZhhRDAyQV6k-0JTyVj-ErRTUbpzzmmkbBNLA2WdNg9AdjjxxEUTkaVU0L_IiB8Uh", category: "audio" },
  { id: 2, name: "Samsung TV", price: 55000, image: "https://cdn.mos.cms.futurecdn.net/FnHWbSEffhzsKKsZeCsjBb-2000-80.jpg", category: "audio" },
  { id: 3, name: "Nike Shoes", price: 7000, image: "https://static.wixstatic.com/media/3323ea_20b80e1501b54fe0872c9fe536d70ea7~mv2.jpg/v1/fill/w_2500,h_1875,al_c/3323ea_20b80e1501b54fe0872c9fe536d70ea7~mv2.jpg", category: "audio" },
  { id: 4, name: "Dell Laptop", price: 60000, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwvCeu4W6YdbkqM9a0vWgEtlCesbqgz0UUbA&s", category: "audio" },
  { id: 5, name: "Sony Headphones", price: 15000, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIWCsb7QnnMFktLG_Z5VsvYR-qXR9s1vubhQ&s", category: "audio" }
];

function Mobile() {

  const navigate = useNavigate();

  const mobileProducts = products.filter(
    (product) => product.category === "audio"
    
  );

  return (
    <div style={{ padding: "40px" }}>

      <button onClick={() => navigate("/product")}>
        ⬅ Back
      </button>

      <h2>All Products</h2>

      {mobileProducts.map((product) => (
        <div className="laptop"
          key={product.id}
          style={{
            border: "1px solid #ddd",
            padding: "20px",
            margin: "20px 0",
            cursor: "pointer",
            width:"200px"
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