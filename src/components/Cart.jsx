import React, { useContext } from "react";
import { CartContext } from "./ContextProvider";
import CartProduct from "./CartProduct";

const Cart = () => {
  const { cart } = useContext(CartContext);

  const totalItems = cart?.length || 0;
  const totalPrice = cart?.reduce(
    (total, product) => total + (product.price || 0) * (product.quantity || 1),
    0
  );

  return (
    <div className="container">
      <h2>Your Products</h2>
      <div className="row">
        {totalItems === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          cart.map((p) => <CartProduct key={p.id} product={p} />)
        )}
      </div>
      <div className="total">
        <h5>Total Items: {totalItems}</h5>
        <h5>Total Price: ${totalPrice.toFixed(2)}</h5>
        <button className="checkout-btn">Checkout</button>
      </div>
    </div>
  );
};

export default Cart;
