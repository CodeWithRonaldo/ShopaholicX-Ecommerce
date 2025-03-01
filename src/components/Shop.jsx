import React, { useState } from "react";
import { productData } from "../assets/product_data";
import Product from "./Product"; 
import "./Shop.css"; 

const Shop = () => {
  const [products, setProducts] = useState(productData); 

  const addProduct = (newProduct) => {
    setProducts([...products, newProduct]); 
  };

  return (
    <div className="shop-container">
      <div className="shop-heading">
        <h1>Shop</h1>
        <p>Browse our collection of premium fashion items.</p>
      </div>
      <div className="product-card-container">
        {products.map((product) => (
          <div key={product.id} className="product-card">
            <img src={product.image} alt={product.name} />
            <h2>{product.name}</h2>
            <p className="price">Price: ${product.price}</p>
            <p className="original-price">Original Price: ${product.originalPrice}</p>
            <p className="discount">Discount: {product.discount}%</p>
            <button className="add-to-cart-btn">Add to Cart</button>
          </div>
        ))}
      </div>
      <Product addProduct={addProduct} /> 
    </div>
  );
};

export default Shop;
