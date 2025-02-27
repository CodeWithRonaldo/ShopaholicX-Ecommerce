import React from "react";
import { productData } from "../assets/product_data";
import "./Shop.css"; // Import the CSS file

const Shop = () => {
  const shuffledData = productData.sort(() => Math.random() - 0.5);

  return (
    <div className="shop-container">
      <div className="shop-heading">

      <h1>Shop</h1>
      <p>Browse our collection of premium fashion items.</p>
      </div>
      <div className="product-card-container">
        {shuffledData.map((product) => (
          <div  className="product-card">
            <img src={product.image} alt={product.name} />
            <h2>{product.name}</h2>
            <p className="price">Price: ${product.price}</p>
            <p className="original-price">Original Price: ${product.originalPrice}</p>
            <p className="discount">Discount: {product.discount}%</p>
            <button className="add-to-cart-btn">Add to Cart</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Shop;
