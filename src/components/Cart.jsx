import React from "react";

const Cart = ({ cartItems }) => {
  return (
    <div className="cart-container">
      <h2>Your Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <ul>
          {cartItems.map((item, index) => (
            <li key={index}>
              {item.name} - ${item.price}
            </li>
          ))}
        </ul>
      )}
      <button className="checkout-btn">Checkout</button>
    </div>
  );
};

export default Cart;
