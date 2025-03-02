import React, { useContext } from 'react';
import './CartProduct.css'
import { CartContext } from './ContextProvider';


const CartProduct = ({ product }) => {
  const {cart, dispatch} = useContext(CartContext);

  const Increment = (id) => {
    const Index = cart.findIndex(p => p.id === id )
    if(cart[Index].quantity < 10){
      dispatch({type: "Increase", id})
    }
  };
  const Decrement = (id) => {
    const Index = cart.findIndex(p => p.id === id )
    if(cart[Index].quantity > 1){
      dispatch({type: "Decrease", id})
    }
  };
  return (
   
    <div className="cart-product">
      <img src={product.image} alt={product.name} /> 
      <div className='details'>
        <h4>{product.name}</h4>
        <h5>${product.price}</h5>
        <div className="buttons">
          <button className='decrement-btn' onClick={() => Decrement(product.id)}><b>-</b></button>
          <button>{product.quantity}</button>
          <button className='increment-btn' onClick={() => Increment(product.id)}><b>+</b></button>
        </div>
        <button className='remove-btn'>Remove</button>
      </div>
    </div>
  );
}

export default CartProduct;
