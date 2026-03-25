import React, { useEffect, useState } from "react";
import "./Api.css";

const API = "http://localhost:3000/products";

export default function App() {
  const [products, setProducts] = useState([]);
  const [form, setForm] = useState({ name: "", price: "", category: "" });
  const [search, setSearch] = useState("");
  const [sortOrder, setSortOrder] = useState("asc");
  const [editId, setEditId] = useState(null);

  // ✅ FETCH DATA
  const fetchProducts = async () => {
    try {
      const res = await fetch(API);
      const data = await res.json();
      setProducts(data);
    } catch (err) {
      console.error("Fetch error:", err);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  // ✅ ADD / UPDATE PRODUCT
  const handleSubmit = async () => {
    if (!form.name || !form.price) {
      alert("Please fill required fields");
      return;
    }

    try {
      if (editId) {
        // UPDATE
        await fetch(`${API}/${editId}`, {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            ...form,
            price: Number(form.price)
          })
        });
        setEditId(null);
      } else {
        // ADD
        await fetch(API, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            ...form,
            price: Number(form.price)
          })
        });
      }

      setForm({ name: "", price: "", category: "" });
      fetchProducts();
    } catch (err) {
      console.error("Submit error:", err);
    }
  };

  // ✅ DELETE
  const deleteProduct = async (id) => {
  try {
    await fetch(`${API}/${id}`, { method: "DELETE" });
    fetchProducts();
  } catch (err) {
    console.error("Delete error:", err);
  }
};

  // ✅ EDIT (LOAD DATA)
  const editProduct = (product) => {
  if (!product) return;

  setForm({
    name: product.name || "",
    price: product.price || "",
    category: product.category || ""
  });

  setEditId(product.id);
};

  // ✅ FILTER + SORT
  const filteredProducts = products
    .filter((p) =>
      p.name.toLowerCase().includes(search.toLowerCase())
    )
    .sort((a, b) =>
      sortOrder === "asc"
        ? Number(a.price) - Number(b.price)
        : Number(b.price) - Number(a.price)
    );

  return (
    <div className="container">
      <h2>API Application</h2>

      {/* TOP BAR */}
      <div className="top-bar">

        {/* FORM */}
        <div className="search-sort">
          <input
            placeholder="Name"
            value={form.name}
            onChange={(e) =>
              setForm({ ...form, name: e.target.value })
            }
          />

          <input
            placeholder="Price"
            type="number"
            value={form.price}
            onChange={(e) =>
              setForm({ ...form, price: e.target.value })
            }
          />

          <input
            placeholder="Category"
            value={form.category}
            onChange={(e) =>
              setForm({ ...form, category: e.target.value })
            }
          />

          <button type="button" onClick={handleSubmit}>
            {editId ? "Update" : "Add"}
          </button>
        </div>

        {/* SEARCH + SORT */}
        <div className="search-sort">
          <input
            placeholder="Search..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />

          <select
            value={sortOrder}
            onChange={(e) => setSortOrder(e.target.value)}
          >
            <option value="asc">Price Low → High</option>
            <option value="desc">Price High → Low</option>
          </select>
        </div>
      </div>

      {/* PRODUCT LIST */}
      {filteredProducts.map((p) => (
        <div key={p.id} className="card">
          <h3>{p.name}</h3>
          <p>₹{p.price}</p>
          <p>{p.category}</p>

          <button type="button" onClick={() => deleteProduct(p.id)}>
  Delete
</button>

          <button type="button" onClick={() => editProduct(p)}>
  Edit
</button>
        </div>
      ))}
    </div>
  );
}