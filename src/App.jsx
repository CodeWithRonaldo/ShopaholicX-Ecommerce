import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./App.css";
import NavBar from "./components/NavBar";
import Home from "./components/Home";

import Shop from "./components/Shop";
import Product from "./components/Product";
import Footer from "./components/Footer";
import NavBanner from "./components/NavBanner";
import Cart from "./components/Cart";
import LoginSignUp from "./components/LoginSignUp/LoginSignUp";
import NewsLetter from "./components/NewsLetter";

function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <NavBanner />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/product" element={<Product />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/login" element={<LoginSignUp />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
