import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import Shop from "./components/Shop";
import Product from "./components/Product";
import Footer from "./components/Footer";
import NavBanner from "./components/NavBanner";
import Cart from "./components/Cart";
import LoginSignup from "./components/LoginSignup";
import React, { useState } from "react";

function App() {
  const [cart, setCart] = useState([]); // Initialize cart state

  const addToCart = (product) => {
    setCart([...cart, product]); // Add product to cart
  };

  return (
    <>
      <BrowserRouter>
        <NavBar cartCount={cart.length} /> {/* Pass cart count to NavBar */}
        <NavBanner />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop addToCart={addToCart} />} /> {/* Pass addToCart function to Shop */}
          <Route path="/product" element={<Product />} />
          <Route path="/cart" element={<Cart cartItems={cart} />} /> {/* Pass cart items to Cart */}
          <Route path="/login" element={<LoginSignup />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
