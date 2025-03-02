import React, { useContext } from "react";
import { NavLink } from "react-router-dom"; 
import { FaShoppingCart } from "react-icons/fa";
import { CartContext } from "./ContextProvider";


const NavBar = () => {

  const {cart} = useContext(CartContext)
  return (
    <>
      <div className="nav-bar">
        <div>
          <NavLink to="/" className="logo">
            ShopaholicX
          </NavLink>
        </div>
        <div className="nav-links">
          <NavLink to="/" className="nav-link">
            Home
          </NavLink>

          <NavLink to="/shop" className="nav-link">
            Shop
          </NavLink>
          <NavLink to="/product" className="nav-link">
            Product
          </NavLink>
        </div>
        <div className="right-nav">
          {/* <input type="text" className="search-bar" placeholder="search" /> */}
          <NavLink to="/login">
            <button className="nav-login">Login</button>
          </NavLink>
          <NavLink to="/cart">
            <FaShoppingCart className="nav-login-cart" />
          </NavLink>
          <div className="nav-cart-count">{cart.length}</div>
        </div>
      </div>
    </>
  );
};

export default NavBar;
