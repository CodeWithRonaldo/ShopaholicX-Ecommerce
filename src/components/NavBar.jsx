import React from "react";
import { NavLink } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";

const NavBar = () => {
  return (
    <>
      <div className="nav-bar">
        <div>
          <NavLink to="/" className="logo">
            ShopaholicX
          </NavLink>
        </div>
        <div className="nav-links">
          <NavLink to="/home" className="nav-link">
            Home
          </NavLink>
          <NavLink to="/about" className="nav-link">
            About
          </NavLink>
          <NavLink to="/contact" className="nav-link">
            Contact
          </NavLink>
          <NavLink to="/shop" className="nav-link">
            Shop
          </NavLink>
          <NavLink to="/product" className="nav-link">
            Product
          </NavLink>

          <input type="text" className="search-bar" placeholder="search" />
          <FaShoppingCart  className="cart-icon"/>
        </div>
      </div>
    </>
  );
};

export default NavBar;
