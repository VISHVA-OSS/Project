import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";

export default function LoginPage() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // ✅ Set login status
    localStorage.setItem("isLoggedIn", "true");

    // ✅ Redirect after login
    navigate("/product");
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <h2>Welcome Back 👋</h2>

        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <label>Email Address</label>
          </div>

          <div className="input-group">
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <label>Password</label>
          </div>

          <div className="options">
            <label>
              <input type="checkbox" /> Remember me
            </label>
            <span className="forgot">Forgot?</span>
          </div>

          <button className="login-btn">Login</button>
        </form>

        <p className="login-footer">
          Don't have an account? <span>Sign up</span>
        </p>
      </div>
    </div>
  );
}