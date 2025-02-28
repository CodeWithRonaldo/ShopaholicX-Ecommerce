import React from "react";
import { productData } from "../assets/product_data";
import "./Shop.css"; 

const Shop = () => {
  const shuffledData = productData.sort(() => Math.random() - 0.5);

  return (
    <div className="shop-container">
      <div className="shop-heading">

      <h1>Shop</h1>
      <p>Browse our collection of premium fashion items.</p>
      </div>
      <div className="product-card-container">
        {shuffledData.map((products) => (
          <div key={products.id} className="product-card">
            <img src={products.image} alt={products.name} />
            <h2>{products.name}</h2>
            <p className="price">Price: ${products.price}</p>
            <p className="original-price">Original Price: ${products.originalPrice}</p>
            {/* <p className="discount">Discount: {products.discount}%</p> */}
            <button className="add-to-cart-btn">Add to Cart</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Shop;
