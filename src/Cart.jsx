import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  increaseQty,
  decreaseQty,
  removeFromCart,
} from "../src/slice/cartslice";
import "./Cart.css";

function Cart() {
  const { cartItems } = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const total = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <div className="cart-container">
      <h2 className="cart-title">🛒 Your Cart</h2>

      {cartItems.length === 0 ? (
        <p className="empty">No items in cart</p>
      ) : (
        <>
          <div className="cart-list">
            {cartItems.map((item) => (
              <div key={item.id} className="cart-card">
                <img src={item.image} alt={item.name} />

                <div className="cart-details">
                  <h3>{item.name}</h3>
                  <p>₹{item.price}</p>

                  <div className="qty-controls">
                    <button
                      onClick={() =>
                        item.quantity === 1
                          ? dispatch(removeFromCart(item.id))
                          : dispatch(decreaseQty(item.id))
                      }
                    >
                      {item.quantity === 1 ? "🗑" : "-"}
                    </button>

                    <span>{item.quantity}</span>

                    <button onClick={() => dispatch(increaseQty(item.id))}>
                      +
                    </button>
                  </div>
                </div>

                <button
                  className="remove-btn"
                  onClick={() => dispatch(removeFromCart(item.id))}
                >
                  Remove
                </button>
              </div>
            ))}
          </div>

          <div className="cart-summary">
            <h3>Total: ₹{total}</h3>
            
          </div>
        </>
      )}
    </div>
  );
}

export default Cart;