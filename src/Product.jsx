import { useNavigate } from "react-router-dom";
import "./Home.css";

function Product() {

  const navigate = useNavigate();

  return (
    <div style={{ padding: "20px" }}>
      <h2>Product List</h2>
      <p>Check out our latest collection of products!</p>

      <button className="btn" onClick={() => navigate("/List")}>
        Product List
      </button>

    </div>
  );
}

export default Product;